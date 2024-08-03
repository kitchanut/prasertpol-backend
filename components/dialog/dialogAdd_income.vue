<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" fullscreen>
      <v-card>
        <v-form ref="form" @submit.prevent="onAction(formData.id)" autocomplete="true">
          <v-toolbar color="primary" dark flat>
            <v-btn
              icon
              dark
              :disabled="watingUpload"
              @click="action == 'edit' ? $emit('cancleItem') : deleteTempFolder()"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitle }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn type="submit" :disabled="watingUpload" :loading="btnloading" dark text style="font-size: 18px">
                บันทึก
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-menu
                    ref="menuDate_buy"
                    v-model="menuDate_1"
                    id="menuDate_1"
                    name="menuDate_1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="date"
                        id="date"
                        name="date"
                        label="วันที่"
                        readonly
                        clearable
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flat
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      id="date"
                      name="date"
                      locale="th-TH"
                      picker-date
                      @input="menuDate_1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    :readonly="user_group_permission == 2 ? true : false"
                    v-model="branch_id"
                    id="branch_id"
                    name="branch_id"
                    :items="branches"
                    item-text="branch_name"
                    item-value="id"
                    label="สาขา"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    @change="getMoney"
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <!-- <v-col cols="4">
                  <v-text-field autocomplete="true"
                    label="คงเหลือ"
                    readonly
                    append-icon=""
                    v-model="branch_money"
                    id="branch_money"
                    name="branch_money"
                    onkeypress="return  (event.charCode >= 48 && event.charCode <= 57)"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col> -->
              </v-row>

              <br />
              <br />
              <v-row class="d-flex justify-center">
                <h2>รายการ</h2>
              </v-row>

              <br />
              <br />
              <div v-for="(income, keys) in formData.incomes" :key="keys">
                <v-row>
                  <v-col cols="4">
                    <v-menu
                      ref="menuDate_buy"
                      v-model="income.menuDate"
                      id="income.menuDate"
                      name="income.menuDate"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="income.date"
                          id="date"
                          name="date"
                          label="วันที่"
                          readonly
                          clearable
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          prepend-icon=""
                          outlined
                          dense
                          hide-details
                          flat
                          :rules="rule"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="income.date"
                        id="income.date"
                        name="income.date"
                        locale="th-TH"
                        picker-date
                        @input="income.menuDate = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="4" v-if="income.type == 1">
                    <v-row>
                      <v-col cols="9">
                        <v-autocomplete
                          v-model="income.car_id"
                          id="car_id"
                          name="car_id"
                          :items="dataCar"
                          item-text="car_no"
                          item-value="id"
                          label="ลำดับรถ"
                          :filter="filterObject"
                          no-data-text="ไม่มีข้อมูล"
                          outlined
                          dense
                          hide-details
                          @change="changeBranch(income.car_id, keys)"
                          :rules="income.type == 1 ? [(value) => !!value || 'กรุณาใส่ข้อมูล'] : []"
                        >
                          <template slot="selection" slot-scope="{ item }">
                            {{ item.car_no }} ({{ item.car_regis }})
                          </template>

                          <template slot="item" slot-scope="{ item }">
                            {{ item.car_no }} ({{ item.car_regis }})
                          </template>
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="3" v-if="formData.incomes[keys].car_id != null">
                        <v-btn
                          @click="getminiInfoCar(formData.incomes[keys].car_id)"
                          class="mt-1"
                          small
                          dark
                          color="blue"
                        >
                          <v-icon small> mdi-magnify </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      autocomplete="true"
                      label="เลขธุรกรรม"
                      append-icon=""
                      v-model="income.no"
                      id="no"
                      name="no"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      clearable
                      autocomplete="true"
                      label="ร้านค้า/ลูกค้า"
                      append-icon=""
                      v-model="income.shop"
                      id="shop"
                      name="shop"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-text-field
                      clearable
                      autocomplete="true"
                      label="รายการ"
                      append-icon=""
                      v-model="income.detail"
                      id="detail"
                      name="detail"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-autocomplete
                      :readonly="user_group_permission == 3 || user_group_permission == 2 ? true : false"
                      v-model="income.branch_id"
                      id="income.branch_id"
                      name="income.branch_id"
                      :items="branches"
                      item-text="branch_name"
                      item-value="id"
                      label="สาขา"
                      no-data-text="ไม่มีข้อมูล"
                      outlined
                      dense
                      hide-details
                    >
                    </v-autocomplete>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3">
                    <v-radio-group
                      class="mt-2"
                      v-model="income.type"
                      id="income.type"
                      name="income.type"
                      :rules="[(value) => !!value]"
                      row
                      @change="changeType(income.type, keys)"
                    >
                      <template>
                        <div class="mr-1">ประเภท:</div>
                      </template>
                      <v-radio label="ตัวรถ" value="1"></v-radio>
                      <v-radio label="อื่น ๆ" color="red" value="2"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="3">
                    <v-radio-group
                      class="mt-2"
                      v-model="income.type_bill"
                      id="income.type_bill"
                      name="income.type_bill"
                      :rules="[(value) => !!value]"
                      row
                    >
                      <template>
                        <div class="mr-1">บิล:</div>
                      </template>
                      <v-radio label="เงินสด" value="1"></v-radio>
                      <v-radio label="ใบกำกับภาษี" color="red" value="2"></v-radio>
                    </v-radio-group>
                  </v-col>

                  <v-col cols="3">
                    <v-text-field
                      autocomplete="true"
                      label="จำนวนเงิน (บ.)"
                      append-icon=""
                      type="number"
                      v-model="income.money"
                      id="money"
                      name="money"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-file-input
                      @change="selectFile(income.img, keys)"
                      v-model="income.img"
                      id="income.img"
                      name="income.img"
                      accept="image/jpeg,image/png,image/jpg"
                      show-size
                      label="เลือกรูปภาพ"
                    ></v-file-input>

                    <v-text-field
                      autocomplete="true"
                      v-show="false"
                      append-icon=""
                      v-model="income.img_name"
                      id="img_name"
                      name="img_name"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                  <!--
                  <v-row>
                    <v-col cols="3">
                      <v-radio-group
                        class="mt-2"
                        v-model="income.status_check"
                        id="income.status_check"
                        name="income.status_check"
                        :rules="[(value) => !!value]"
                        row
                      >
                        <template>
                          <div class="mr-1">เช็ค:</div>
                        </template>
                        <v-radio label="แล้ว" value="1"></v-radio>
                        <v-radio label="ยัง" color="red" value="0"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row> -->

                  <v-col cols="1">
                    <v-btn color="red" fab x-small dark @click="rm_row(keys)">
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
              <br />

              <!-- <v-row class="d-flex" v-show="branch_id == null ? false : true"> -->
              <v-row class="d-flex" v-if="addrow_dis <= 5">
                <v-col v-show="branch_id == null ? false : true">
                  <v-btn color="green" dark block @click="add_row()"> <v-icon>mdi-plus</v-icon> เพิ่มรายการ </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>
        <dialogMini
          :dialog="dialog_mini"
          :data_car="data_car"
          :type="dialogMini_type"
          :data_outlay_cost="data_outlay_cost"
          :data_income="data_income"
          @cancleItem="dialog_mini = false"
        />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiAdd_income from "@/Api/apiAdd_income";
import * as apiOutlay_costs from "@/Api/apiOutlay_costs";
import * as apiSearch_term from "@/Api/apiSearch_term";

import * as apiBranches from "@/Api/apiBranches";
import * as apiCars from "@/Api/apiCars";
import dialogMini from "@/components/dialog/dialogMini_car";
import selectAddSearchTerm from "@/components/selectAdd/selectAddSearch_term";

import moment from "moment";

export default {
  props: ["dialog", "action", "id", "formTitle", "car_id"],
  components: {
    dialogMini,
    selectAddSearchTerm,
  },
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {
        incomes: [],
      },
      moment: moment,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      branch_id: null,
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      years: [],
      branches: [],
      dataCar: [],
      branch_money: 0,
      date: null,
      watingUpload: false,
      menuDate_1: false,
      dialog_mini: false,
      data_income: [],
      data_car: [],
      dialogMini_type: "",
      data_outlay_cost: [],
      search_terms: [],
      addrow_dis: 0,
    };
  },
  mounted() {
    console.log(this.car_id);
  },
  methods: {
    async getSearch_term() {
      const response = await apiSearch_term.select();
      this.search_terms = response.data;
      this.loading = false;
    },

    filterObject(item, queryText, itemText) {
      return (
        item.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1 ||
        item.car_regis.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    selectFile(payload, key) {
      if (payload != undefined) {
        this.watingUpload = true;
        const data = new FormData();
        data.append("Image", payload);
        this.$nextTick(async () => {
          const response = await apiAdd_income.uploadFile_income(data);
          this.formData.incomes[key].img_name = response.data;
          this.watingUpload = false;
        });
      }
    },
    async changeBranch(car_id, keys) {
      // console.log(car_id, keys);
      // this.getminiInfoCar(car_id);
      for (let index = 0; index < this.dataCar.length; index++) {
        if (this.dataCar[index].id == car_id) {
          // console.log(this.dataCar[index]);
          this.formData.incomes[keys].branch_id = this.dataCar[index].branch_id;
        }
      }
    },

    async getminiInfoCar(car_id) {
      const data_car = new FormData();
      data_car.append("id", car_id);
      data_car.append("user_group_permission", this.user_group_permission);
      const response_car = await apiCars.getAllinfo(car_id);
      this.data_car = response_car.data;

      const data = new FormData();
      data.append("car_id", car_id);

      const response_income = await apiAdd_income.income_car(data);
      this.data_income = response_income.data;

      const response_outlay = await apiOutlay_costs.outlaycost_car(data);
      this.data_outlay_cost = response_outlay.data;

      this.$nextTick(() => {
        this.dialog_mini = true;
        this.dialogMini_type = "income";
      });
    },

    async getYearCurrent() {
      var max = new Date().getFullYear();
      var min = max - 50;
      for (var i = max; i >= min; i--) {
        this.years.push({ value: i });
      }
    },
    async getCars() {
      const response = await apiCars.selectAll();
      if (
        this.user_group_permission == -1 ||
        this.user_group_permission == 8 ||
        this.user_group_permission == 10 ||
        this.user_group_permission == 11 ||
        this.user_group_permission == 12
      ) {
        this.dataCar = response.data;
      } else {
        let array = [];
        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].branch_id == this.$auth.$storage.getLocalStorage("userData-branch_id")) {
            array.push(response.data[index]);
          }
        }
        this.dataCar = array;
      }
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = await response.data;
      // console.log(response);
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        if (this.action == "add") {
          const response = await apiAdd_income.store(this.formData);
          console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "income");
          } else {
            this.$emit("error", "income");
          }
        } else if (this.action == "edit") {
          const response = await apiAdd_income.update(this.id, this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "income");
          } else {
            this.$emit("error", "income");
          }
        }
        this.addrow_dis = 0;

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
    async getMoney(id) {
      // console.log(id);
      for (let index = 0; index < this.branches.length; index++) {
        if (this.branches[index].id == id) {
          // console.log(this.branches[index]);
          this.branch_money = this.branches[index].branch_money;
        }
      }
    },
    async changeType(type, key) {
      if (type == 2) {
        this.formData.incomes[key].car_id = null;
      }
    },
    async add_row() {
      this.addrow_dis = Number(this.addrow_dis) + 1;
      let status_check = 0;
      if (this.user_group_permission == 3 || this.user_group_permission == 2) {
        status_check = 0;
      } else {
        status_check = 1;
      }
      this.$nextTick(() => {
        let data = {
          menuDate: false,
          date: this.date,
          branch_id: this.branch_id,
          shop: null,
          detail: null,
          car_id: this.car_id,
          type: "1",
          type_bill: "1",
          money: 0,
          status_check: status_check,
          user_id: this.user_id,
          img_name: null,
        };
        this.formData.incomes.push(data);
      });
    },
    // ฟังชั่นลบแถว
    async rm_row(row) {
      this.addrow_dis = Number(this.addrow_dis) - 1;

      // console.log(this.formData.incomes[row]);
      if (this.formData.incomes[row].img_name != undefined) {
        this.watingUpload = true;
        const data = new FormData();
        data.append("name_file", this.formData.incomes[row].img_name);
        this.$nextTick(async () => {
          const response = await apiAdd_income.delete_uploadFile_income(data);
          this.watingUpload = false;
        });
      }
      this.formData.incomes.splice(row, 1);
    },
    async addSuccess(value) {
      if (value == "AddSearch_term") {
        await this.getSearch_term();
      }
    },
    async addError(value) {
      if (value == "AddSearch_term") {
        await this.getSearch_term();
      }
    },
    async deleteTempFolder() {
      if (this.action == "add" && this.formData.incomes.length) {
        this.$nextTick(async () => {
          const response = await apiAdd_income.cancle_uploadFile_income(this.formData);
          // console.log(response);
        });
      }
      this.$emit("cancleItem");
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialogDeleteComponent) {
        this.formData = {
          incomes: [],
        };
        await this.getYearCurrent();
        await this.getBranches();
        await this.getCars();
        await this.getSearch_term();
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(() => {
              self.branch_id = this.$auth.$storage.getLocalStorage("userData-branch_id");
              this.getMoney(this.$auth.$storage.getLocalStorage("userData-branch_id"));
              // if (
              //   this.user_group_permission != -1 ||
              //   this.user_group_permission != 11
              // ) {
              //   this.getMoney(
              //     this.$auth.$storage.getLocalStorage("userData-branch_id")
              //   );
              // } else {
              //   this.getMoney(
              //     this.$auth.$storage.getLocalStorage("userData-branch_id")
              //   );
              // }
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiAdd_income.show(this.id);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
            });
          });

          this.formDataLoading = false;
        }
      }
      this.btnloading = false;
    },
    dialogDeleteComponent() {
      if (!this.dialogDeleteComponent) {
        this.$emit("cancleItem");
      }
    },
  },
};
</script>

<style>
.mx-input {
  font-size: 17px;
  margin-top: 1px;
  height: 100%;
  border: 1px solid #a7a2a2;
}
</style>
