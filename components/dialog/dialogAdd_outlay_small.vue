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
            <table class="bordered mt-3">
              <thead>
                <tr>
                  <!-- <th width="1%" style="padding: 10px; text-align: center">ลำดับ</th> -->
                  <th width="10%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: left">
                    วันที่
                  </th>
                  <th width="15%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: left">
                    ลำดับรถ
                  </th>
                  <th width="8%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: left">
                    เลขธุรกรรม
                  </th>
                  <th width="10%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: left">
                    ประเภท
                  </th>
                  <th width="15%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: left">
                    ผู้รับเงิน
                  </th>
                  <th style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: left">รายการ</th>
                  <th width="12%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: left">
                    สาขา
                  </th>

                  <!-- <th
                    width="8%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2);padding: 10px;text-align: left;"
                  >
                    บิล
                  </th> -->
                  <th width="8%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: right">
                    จำนวนเงิน
                  </th>
                  <th
                    width="5%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: right"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(outlay_cost, keys) in formData.outlay_costs"
                  :key="keys"
                  style="line-height: 1rem; font-size: 1rem"
                >
                  <!-- <td style="border-top: 1px solid rgba(0, 0, 0, 0.2); text-align: center">
                    {{ keys + 1 }}
                  </td> -->
                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      padding: 0px;
                      text-align: left;
                    "
                  >
                    <v-menu
                      ref="menuDate_buy"
                      v-model="outlay_cost.menuDate"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="hide-border"
                          style="border-radius: 0px"
                          v-model="outlay_cost.date"
                          readonly
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
                        locale="th-TH"
                        picker-date
                        @input="outlay_cost.menuDate = false"
                      ></v-date-picker>
                    </v-menu>
                  </td>
                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      padding: 0px;
                      text-align: right;
                    "
                  >
                    <v-row no-gutters>
                      <v-col cols="10" class="p-0">
                        <v-autocomplete
                          class="none-rotation hide-border"
                          style="border-radius: 0px; padding: 0px"
                          v-model="outlay_cost.car_id"
                          :items="dataCar"
                          item-text="car_no"
                          item-value="id"
                          :filter="filterObject"
                          no-data-text="ไม่มีข้อมูล"
                          outlined
                          dense
                          hide-details
                          @change="changeBranch(outlay_cost.car_id, keys)"
                          :rules="outlay_cost.type == 1 ? [(value) => !!value || 'กรุณาใส่ข้อมูล'] : []"
                        >
                          <template slot="item" slot-scope="{ item }">
                            {{ item.car_no }} ({{ item.car_regis }})
                          </template>
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="1" class="p-0">
                        <v-btn
                          @click="getminiInfoCar(formData.outlay_costs[keys].car_id)"
                          class="mt-1"
                          dark
                          color="blue"
                          icon
                        >
                          <v-icon small> mdi-magnify </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </td>
                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      padding: 0px;
                      text-align: right;
                    "
                  >
                    <v-text-field
                      class="hide-border"
                      style="border-radius: 0px"
                      autocomplete="true"
                      append-icon=""
                      v-model="outlay_cost.no"
                      id="no"
                      name="no"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </td>
                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      padding: 0px;
                      text-align: right;
                    "
                  >
                    <v-select
                      class="hide-border pt-0 mt-0 ml-2 mr-2"
                      v-model="outlay_cost.type"
                      style="border-radius: 0px"
                      :items="[
                        // { label: 'ค่าตัวรถ', value: 1 },
                        { label: 'งานทะเบียน', value: 2 },
                        { label: 'ค่าซ่อม (ก่อนขาย)', value: 3 },
                        { label: 'ค่าซ่อม (หลังขาย)', value: 4 },
                        { label: 'ค่าคอม', value: 5 },
                        { label: 'ค่าจ้างคนค้ำ', value: 6 },
                        { label: 'ค่านำพา', value: 7 },
                        { label: 'ค่าซื้อแทน', value: 8 },
                        { label: 'ค่าน้ำมัน', value: 9 },
                        { label: 'ค่าสี', value: 10 },
                        { label: 'ค่าขนส่ง', value: 11 },
                        { label: 'ค่าส่งเสริมการขาย', value: 12 },
                        { label: 'คืนเงิน', value: 13 },
                        { label: 'ค่างวด', value: 14 },
                        { label: 'อื่น ๆ', value: 99 },
                      ]"
                      item-text="label"
                      item-value="value"
                      label="กรุณาเลือก"
                      single-line
                      :rules="[(value) => !!value]"
                      hide-details
                    ></v-select>
                  </td>
                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      padding: 0px;
                      text-align: right;
                    "
                  >
                    <v-text-field
                      class="hide-border"
                      style="border-radius: 0px"
                      clearable
                      autocomplete="true"
                      append-icon=""
                      v-model="outlay_cost.shop"
                      id="shop"
                      name="shop"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </td>

                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      padding: 0px;
                      text-align: right;
                    "
                  >
                    <v-text-field
                      class="hide-border"
                      style="border-radius: 0px"
                      clearable
                      autocomplete="true"
                      v-model="outlay_cost.detail"
                      id="detail"
                      name="detail"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </td>
                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      padding: 0px;
                      text-align: right;
                    "
                  >
                    <v-autocomplete
                      class="none-rotation hide-border"
                      style="border-radius: 0px"
                      :readonly="user_group_permission == 3 || user_group_permission == 2 ? true : false"
                      v-model="outlay_cost.branch_id"
                      :items="branches"
                      item-text="branch_name"
                      item-value="id"
                      no-data-text="ไม่มีข้อมูล"
                      outlined
                      dense
                      hide-details
                    >
                    </v-autocomplete>
                  </td>

                  <!-- <td style="border-left: 1px solid rgba(0, 0, 0, 0.2);border-top: 1px solid rgba(0, 0, 0, 0.2);padding: 0px;text-align: right;">
                    <v-select
                      class="hide-border pt-0 mt-0 ml-2 mr-2"
                      style="border-radius: 0px;"
                      :items="[{ label: 'เงินสด', value: '1' },{ label: 'ใบกำกับภาษี', value: '2' }]"
                      item-text="label"
                      item-value="value"
                      v-model="outlay_cost.type_bill"
                      id="outlay_cost.type_bill"
                      name="outlay_cost.type_bill"
                      :rules="[(value) => !!value]"
                      hide-details
                    ></v-select>
                  </td> -->
                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      padding: 0px;
                      text-align: right;
                    "
                  >
                    <v-text-field
                      class="hide-border right-input"
                      style="border-radius: 0px"
                      autocomplete="true"
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
                  </td>
                  <td
                    style="
                      border-left: 1px solid rgba(0, 0, 0, 0.2);
                      border-top: 1px solid rgba(0, 0, 0, 0.2);
                      text-align: center;
                    "
                  >
                    <v-btn icon color="red" fab x-small dark @click="rm_row(keys)">
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </table>

            <v-row class="d-flex mt-5" v-if="addrow_dis <= 10">
              <v-col v-show="branch_id == null ? false : true && !btnloading">
                <v-btn color="green" dark block @click="add_row()"> <v-icon>mdi-plus</v-icon> เพิ่มรายการ </v-btn>
              </v-col>
            </v-row>
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
      // years: [],
      branches: [],
      dataCar: [],
      data_car: [],
      data_outlay_cost: [],
      data_income: [],

      // branch_money: 0,
      date: null,
      watingUpload: false,
      menuDate_1: false,
      dialog_mini: false,
      dialogMini_type: "",
      // search_terms: [],
      addrow_dis: 0,
    };
  },
  async mounted() {
    await this.getBranches();
    await this.getCars();
  },
  methods: {
    async editItem(item) {
      this.formTitle_car = "แก้ไขข้อมูล";
      this.dialog_car = true;
      this.car_id = item;
      this.action_car = "edit";
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
      for (let index = 0; index < this.dataCar.length; index++) {
        if (this.dataCar[index].id == car_id) {
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
    async addSuccess(value) {},
    async addError(value) {},
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
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        if (this.action == "add") {
          const response = await apiOutlay_costs.store(this.formData);
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
          type: null,
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
        this.btnloading = true;

        this.formData = {
          outlay_costs: [],
        };

        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(() => {
              self.branch_id = this.$auth.$storage.getLocalStorage("userData-branch_id");
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

<style scoped>
table {
  border-collapse: collapse; /* IE7 and lower */
  border-spacing: 0;
  width: 100%;
}

th:first-child {
  border-radius: 4px 0 0 0;
}

th:last-child {
  border-radius: 0 4px 0 0;
}

th:only-child {
  border-radius: 4px 4px 0 0;
}

.bordered {
  border: solid rgba(0, 0, 0, 0.3) 1px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.bordered th {
  font-weight: 600;
  background-color: #eee;
}

.right-input >>> input {
  text-align: right;
}
</style>

<style lang="scss">
.none-rotation.v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
  transform: none !important;
}

.hide-border.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: rgba(0, 0, 0, 0);
}
</style>
