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
                <v-col cols="4">
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
                <v-col cols="4">
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

                <v-col cols="4">
                  <v-text-field
                    label="คงเหลือ"
                    readonly
                    type="number"
                    append-icon=""
                    v-model="branch_money"
                    id="branch_money"
                    name="branch_money"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <br />
              <br />
              <v-row class="d-flex justify-center">
                <h2>รายการ</h2>
              </v-row>

              <br />
              <br />
              <div v-for="(outlay_cost, keys) in formData.outlay_costs" :key="keys">
                <v-row>
                  <v-col cols="4">
                    <v-menu
                      ref="menuDate_buy"
                      v-model="outlay_cost.menuDate"
                      id="menuDate"
                      name="menuDate"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="outlay_cost.date"
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
                        v-model="outlay_cost.date"
                        id="outlay_cost.date"
                        name="outlay_cost.date"
                        locale="th-TH"
                        picker-date
                        @input="outlay_cost.menuDate = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="4" v-if="outlay_cost.type == 1">
                    <v-row>
                      <v-col :cols="user_group_permission == 10 ? 8 : 8">
                        <v-autocomplete
                          v-model="outlay_cost.car_id"
                          id="outlay_cost.car_id"
                          name="outlay_cost.car_id"
                          :items="dataCar"
                          item-text="car_no"
                          item-value="id"
                          label="ลำดับรถ"
                          :filter="filterObject"
                          no-data-text="ไม่มีข้อมูล"
                          outlined
                          dense
                          hide-details
                          @change="changeBranch(outlay_cost.car_id, keys)"
                          :rules="outlay_cost.type == 1 ? [(value) => !!value || 'กรุณาใส่ข้อมูล'] : []"
                        >
                          <template slot="selection" slot-scope="{ item }">
                            {{ item.car_no }} ({{ item.car_regis }})
                          </template>

                          <template slot="item" slot-scope="{ item }">
                            {{ item.car_no }} ({{ item.car_regis }})
                          </template>
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="2" v-if="formData.outlay_costs[keys].car_id != null">
                        <v-btn
                          @click="editItem(formData.outlay_costs[keys].car_id)"
                          class="mt-1"
                          small
                          dark
                          color="blue"
                        >
                          <v-icon small> mdi-pencil </v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="2" v-if="formData.outlay_costs[keys].car_id != null">
                        <v-btn
                          @click="getminiInfoCar(formData.outlay_costs[keys].car_id)"
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
                      v-model="outlay_cost.no"
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
                      v-model="outlay_cost.shop"
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
                      v-model="outlay_cost.detail"
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
                      v-model="outlay_cost.branch_id"
                      id="outlay_cost.branch_id"
                      name="outlay_cost.branch_id"
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
                  <v-col
                    cols="2"
                    v-if="
                      user_group_permission == -1 ||
                      user_group_permission == 8 ||
                      user_group_permission == 10 ||
                      user_group_permission == 11
                    "
                  >
                    <v-radio-group
                      class="mt-2"
                      v-model="outlay_cost.broken"
                      id="outlay_cost.broken"
                      name="outlay_cost.broken"
                      :rules="[(value) => !!value]"
                      row
                    >
                      <template>
                        <div class="mr-1">หักเงิน:</div>
                      </template>
                      <v-radio label="ไม่" value="1"></v-radio>
                      <v-radio label="หัก" color="red" value="2"></v-radio>
                    </v-radio-group>
                  </v-col>

                  <v-col cols="2">
                    <v-radio-group
                      class="mt-2"
                      v-model="outlay_cost.type"
                      id="outlay_cost.type"
                      name="outlay_cost.type"
                      :rules="[(value) => !!value]"
                      row
                      @change="changeType(outlay_cost.type, keys)"
                    >
                      <template>
                        <div class="mr-1">ประเภท:</div>
                      </template>
                      <v-radio label="ตัวรถ" value="1"></v-radio>
                      <v-radio label="อื่น ๆ" color="red" value="2"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="2">
                    <v-radio-group
                      class="mt-2"
                      v-model="outlay_cost.type_bill"
                      id="outlay_cost.type_bill"
                      name="outlay_cost.type_bill"
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
                      v-model="outlay_cost.money"
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
                      @change="selectFile(outlay_cost.img, keys)"
                      v-model="outlay_cost.img"
                      id="outlay_cost.img"
                      name="outlay_cost.img"
                      accept="image/jpeg,image/png,image/jpg"
                      show-size
                      label="เลือกรูปภาพ"
                    ></v-file-input>

                    <v-text-field
                      autocomplete="true"
                      v-show="false"
                      append-icon=""
                      v-model="outlay_cost.img_name"
                      id="img_name"
                      name="img_name"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>

                  <!-- <v-row>
                    <v-col cols="3">
                      <v-radio-group
                        class="mt-2"
                        v-model="outlay_cost.status_check"
                        id="outlay_cost.status_check"
                        name="outlay_cost.status_check"
                        :rules="[(value) => !!value]"
                        row
                      >
                        <template>
                          <div class="mr-1">เช็ค:</div>
                        </template>
                        <v-radio label="เงินสด" value="1"></v-radio>
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
      </v-card>
    </v-dialog>
    <dialogNew
      :dialog="dialog_car"
      :id="car_id"
      :action="action_car"
      :formTitle="formTitle_car"
      @cancleItem="dialog_car = false"
    />

    <dialogMini
      :dialog="dialog_mini"
      :data_car="data_car"
      :type="dialogMini_type"
      :data_income="data_income"
      :data_outlay_cost="data_outlay_cost"
      @cancleItem="dialog_mini = false"
    />
  </v-container>
</template>

<script>
import * as apiOutlay_costs from "@/Api/apiOutlay_costs";
import * as apiAdd_income from "@/Api/apiAdd_income";
import * as apiSearch_term from "@/Api/apiSearch_term";

import * as apiBranches from "@/Api/apiBranches";
import * as apiCars from "@/Api/apiCars";
import dialogNew from "@/components/dialog/dialogPurchaseCar";
import dialogMini from "@/components/dialog/dialogMini_car";
import selectAddSearchTerm from "@/components/selectAdd/selectAddSearch_term";

import moment from "moment";

export default {
  props: ["dialog", "action", "id", "formTitle", "car_id"],
  components: {
    dialogNew,
    dialogMini,
    selectAddSearchTerm,
  },
  data() {
    return {
      dialog_car: false,
      formTitle_car: "Add",
      action_car: "add",
      btnloading: true,
      formDataLoading: false,
      formData: {
        outlay_costs: [],
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
      data_car: [],
      data_outlay_cost: [],
      data_income: [],

      branch_money: 0,
      date: null,
      watingUpload: false,
      menuDate_1: false,
      dialog_mini: false,
      dialogMini_type: "",
      search_terms: [],
      addrow_dis: 0,
    };
  },
  mounted() {
    console.log(this.car_id);
  },
  methods: {
    async editItem(item) {
      this.formTitle_car = "แก้ไขข้อมูล";
      this.dialog_car = true;
      this.car_id = item;
      this.action_car = "edit";
    },
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
          const response = await apiOutlay_costs.uploadFile_outlay(data);
          this.formData.outlay_costs[key].img_name = response.data;
          this.watingUpload = false;
        });
      }
    },
    async changeBranch(car_id, keys) {
      // console.log(car_id, keys);
      // console.log(car_id);
      for (let index = 0; index < this.dataCar.length; index++) {
        if (this.dataCar[index].id == car_id) {
          // console.log(this.dataCar[index]);
          this.formData.outlay_costs[keys].branch_id = this.dataCar[index].branch_id;
        }
      }
    },
    async getminiInfoCar(car_id) {
      const data_car = new FormData();
      data_car.append("id", car_id);
      data_car.append("user_group_permission", this.user_group_permission);
      const response_car = await apiCars.getAllinfo(car_id, 9);
      this.data_car = response_car.data;

      const data = new FormData();
      data.append("car_id", car_id);

      const response_outlay = await apiOutlay_costs.outlaycost_car(data);
      this.data_outlay_cost = response_outlay.data;

      const response_income = await apiAdd_income.income_car(data);
      this.data_income = response_income.data;

      this.$nextTick(() => {
        this.dialog_mini = true;
        this.dialogMini_type = "outlay";
      });
    },
    async getYearCurrent() {
      var max = new Date().getFullYear();
      var min = max - 50;
      for (var i = max; i >= min; i--) {
        this.years.push({ value: i });
      }
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
          const response = await apiOutlay_costs.store(this.formData);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Outlay");
          } else {
            this.$emit("error", "Outlay");
          }
        } else if (this.action == "edit") {
          const response = await apiOutlay_costs.update(this.id, this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Outlay");
          } else {
            this.$emit("error", "Outlay");
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
        this.formData.outlay_costs[key].car_id = null;
      }
    },
    async add_row() {
      this.addrow_dis = Number(this.addrow_dis) + 1;

      let status_check = "0";
      let broken = "1";

      if (this.user_group_permission == 3 || this.user_group_permission == 2) {
        status_check = "0";
      } else {
        status_check = "1";
      }

      if (this.user_group_permission == 10) {
        broken = "1";
      } else {
        broken = "2";
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
          broken: broken,
          type_bill: "1",
          money: 0,
          status_check: status_check,
          user_id: this.user_id,
          img_name: null,
        };
        this.formData.outlay_costs.push(data);
      });
    },
    // ฟังชั่นลบแถว
    async rm_row(row) {
      this.addrow_dis = Number(this.addrow_dis) - 1;

      // console.log(this.formData.outlay_costs[row]);
      if (this.formData.outlay_costs[row].img_name != undefined) {
        this.watingUpload = true;
        const data = new FormData();
        data.append("name_file", this.formData.outlay_costs[row].img_name);
        this.$nextTick(async () => {
          const response = await apiOutlay_costs.delete_uploadFile_outlay(data);
          this.watingUpload = false;
        });
      }
      this.formData.outlay_costs.splice(row, 1);
    },
    async deleteTempFolder() {
      if (this.action == "add" && this.formData.outlay_costs.length) {
        this.$nextTick(async () => {
          const response = await apiOutlay_costs.cancle_uploadFile_outlay(this.formData);
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
          outlay_costs: [],
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
          const response = await apiOutlay_costs.show(this.id);
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
