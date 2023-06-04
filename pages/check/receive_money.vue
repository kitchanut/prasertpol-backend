<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row class="d-flex">
          <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="d-flex align-center">
            <!-- {{ idWork }} -->
            <v-autocomplete
              :filter="filterObject"
              no-data-text="ไม่มีข้อมูล"
              :items="dataWorking"
              item-value="id"
              label="ค้นหาตามลำดับรถ"
              single-line
              v-model="idWork"
              outlined
              dense
              hide-details
              @change="getReceiving_money()"
            >
              <template slot="selection" slot-scope="{ item }">
                W{{ item.id }} - {{ item.cars.car_no }} ({{ item.cars.car_regis }})
              </template>

              <template slot="item" slot-scope="{ item }">
                W{{ item.id }} - {{ item.cars.car_no }} ({{ item.cars.car_regis }})
              </template>
            </v-autocomplete>

            <v-dialog v-model="dialogFilter" width="550">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="car_no != 0 ? 'warning' : ''"
                  v-blur
                  class="ml-2 my-1"
                  height="39"
                  style="min-width: 0px; padding: 0 8px"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-toolbar color="warning" dark flat dense style="font-size: 20px" height="6"> </v-toolbar>

                <v-fab-transition>
                  <v-btn icon absolute style="top: 10px; right: 10px" fab small @click="dialogFilter = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-fab-transition>

                <h3 class="text-center" style="font-size: 22px; margin: 10px">กรองข้อมูล</h3>

                <v-divider></v-divider>
                <v-card-text class="mt-5">
                  <v-row no-gutters class="d-flex align-center mt-2">
                    <v-col cols="4">ลำดับรถ :</v-col>
                    <v-col cols="8">
                      <v-text-field
                        label="กรุณากรอกลำดับรถ"
                        single-line
                        v-model="car_no"
                        outlined
                        dense
                        hide-details=""
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="warning" text @click="car_no = ''"> <v-icon left>mdi-replay</v-icon>ล้างข้อมูล </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="
                      getDataWithCarNo();
                      dialogFilter = false;
                    "
                  >
                    <v-icon left>mdi-magnify</v-icon>ค้นหา
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col v-if="idWork" class="d-flex align-center">
            <v-btn color="primary" class="mr-2" height="39" @click="ReceivingMoney(idWork, 1)">ใบกำกับค่าตัวรถ</v-btn>
            <v-btn class="mr-2" color="warning" height="39" @click="ReceivingMoney(idWork, 2)">ใบกำกับค่าคอม</v-btn>
            <v-btn color="success" height="39" @click="ReceivingMoney(idWork, 3)">อื่นๆ</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col xs="12" sm="12" md="6" lg="4" xl="4" class="d-flex align-center">
            <v-text-field
              v-model="search"
              id="search"
              name="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
              outlined
              dense
            >
            </v-text-field>
          </v-col>
        </v-row>
        <br />

        <v-data-table :headers="headers" :items="data" :search="search" :multi-sort="true" :loading="loading" dense>
          <template v-slot:[`item.car_no`]="{ item }">
            <div>{{ item.car_no }}</div>
            <div>W{{ item.id }}</div>
          </template>

          <template v-slot:[`item.car_regis`]="{ item }">
            <div>{{ item.car_model_name }}</div>
            <div>{{ item.car_regis }}</div>
            <div>{{ item.name_th }}</div>
          </template>

          <template v-slot:[`item.receiving_money_sum`]="{ item }">
            <div>{{ item.receiving_money_sum }}</div>
            <div v-if="item.check1 == 'Ok'">
              {{ item.receiving_money_sum_str }}
            </div>
            <div v-else class="red--text">
              {{ item.receiving_money_sum_str }}
            </div>
          </template>

          <template v-slot:[`item.receiving_money_sum_vat`]="{ item }">
            <div>{{ item.receiving_money_sum_vat }}</div>
            <div v-if="item.check2 == 'Ok'">
              {{ item.receiving_money_sum_vat_str }}
            </div>
            <div v-else class="red--text">
              {{ item.receiving_money_sum_vat_str }}
            </div>
          </template>

          <template v-slot:[`item.receiving_money_all`]="{ item }">
            <div>{{ item.receiving_money_all }}</div>
            <div v-if="item.check3 == 'Ok'">
              {{ item.receiving_money_all_str }}
            </div>
            <div v-else class="red--text">
              {{ item.receiving_money_all_str }}
            </div>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn color="primary" fab x-small dark @click="ReceivingMoney(item.working_id, item.receivingMoney_type)">
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
            <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <dialogReceivingMoney
      :dialogReceivingMoney="dialogReceivingMoney"
      :idWork="idWork"
      :car_no="car_no"
      :actionReceivingMoney="actionReceivingMoney"
      :receivingMoney_type="receivingMoney_type"
      :formTitleReceivingMoney="formTitleReceivingMoney"
      @cancleItem="dialogReceivingMoney = false"
      @success="addSuccess"
      @error="addError"
    />
  </div>
</template>

<script>
import * as apiReceiving_money from "@/Api/apiReceiving_money";
import * as apiWorks from "@/Api/apiWorks";
import * as customAlart from "@/customJS/customAlart";

import dialogReceivingMoney from "@/components/dialog/dialogReceivingMoney";

import THBText from "thai-baht-text"; // for ES6
export default {
  components: {
    dialogReceivingMoney,
  },
  data() {
    return {
      data: [],
      search: "",
      loading: false,
      dialogFilter: false,

      dataWorking: [],
      waitingPushdata: false,
      search_number: "",
      idWork: 0,
      car_no: 0,

      dialogReceivingMoney: false,
      formTitleReceivingMoney: "Add",
      actionReceivingMoney: "check",
      receivingMoney_type: 1,

      headers: [
        { text: "ลำดับรถ", value: "car_no" },
        { text: "ประเภท", value: "receivingMoney_type_str" },
        { text: "เล่มที่", value: "book_no" },
        { text: "เลขที่", value: "number_no" },
        { text: "รายละเอียด", value: "car_regis" },
        { text: "จำนวน", value: "receiving_money_sum" },
        { text: "vat", value: "receiving_money_sum_vat" },
        { text: "รวม", value: "receiving_money_all" },
        { text: "จัดการ", value: "actions", width: "10%" },
      ],
    };
  },
  async mounted() {
    this.getReceiving_money();
    this.getDataWork();
  },
  methods: {
    // selectCar() {
    //   console.log(this.idWork);
    // },
    filterObject(item, queryText, itemText) {
      return (
        item.cars.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1 ||
        item.cars.car_regis.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    async getDataWork() {
      const response = await apiWorks.allData();
      this.dataWorking = response.data.filter(function (item, index) {
        return item.status_del == 1;
      });
      console.log(this.dataWorking);
    },

    async ReceivingMoney(idWork, receivingMoney_type) {
      if (receivingMoney_type == 1) {
        this.formTitleReceivingMoney = "เอกสารรับเงิน (ค่าตัวรถ)";
      } else if (receivingMoney_type == 2) {
        this.formTitleReceivingMoney = "เอกสารรับเงิน (ค่าคอม)";
      } else {
        this.formTitleReceivingMoney = "เอกสารรับเงิน (อื่นๆ)";
      }
      this.idWork = this.idWork;
      this.car_no = this.car_no;
      this.receivingMoney_type = receivingMoney_type;
      this.dialogReceivingMoney = true;
      this.actionReceivingMoney = "check";
    },
    async getReceiving_money() {
      this.loading = true;

      let working_id = 0;
      if (this.idWork != null) {
        working_id = this.idWork;
        const filter = this.dataWorking.filter(function (item, index) {
          return item.id == working_id;
        });
        if (filter.length > 0) {
          this.car_no = filter[0].cars.car_no;
        }
      } else {
        this.car_no = 0;
      }
      // const response = await apiReceiving_money.getWithWorkID(working_id);
      const response = await apiReceiving_money.getDataWithCarNo(this.car_no);
      this.data = response.data;

      this.data.map(function (item) {
        item.price = item.receiving_money_sum;
        if (item.receiving_money_sum_str == THBText(item.receiving_money_sum)) {
          item.check1 = "Ok";
        } else {
          item.check1 = " ";
        }
        if (item.receiving_money_sum_vat_str == THBText(item.receiving_money_sum_vat)) {
          item.check2 = "Ok";
        } else {
          item.check2 = " ";
        }
        if (item.receiving_money_all_str == THBText(item.receiving_money_all)) {
          item.check3 = "Ok";
        } else {
          item.check3 = " ";
        }
      });
      this.loading = false;
    },
    async getDataWithCarNo() {
      this.loading = true;
      this.idWork = 0;
      var car_no = 0;
      if (this.car_no != "") {
        car_no = this.car_no;
        const filter = this.dataWorking.filter(function (item, index) {
          return item.cars.car_no == car_no;
        });
        if (filter.length > 0) {
          this.idWork = filter[0].id;
        }
        console.log("filter", filter);
      }
      const response = await apiReceiving_money.getDataWithCarNo(car_no);
      this.data = response.data;

      this.data.map(function (item) {
        item.price = item.receiving_money_sum;
        if (item.receiving_money_sum_str == THBText(item.receiving_money_sum)) {
          item.check1 = "Ok";
        } else {
          item.check1 = " ";
        }
        if (item.receiving_money_sum_vat_str == THBText(item.receiving_money_sum_vat)) {
          item.check2 = "Ok";
        } else {
          item.check2 = " ";
        }
        if (item.receiving_money_all_str == THBText(item.receiving_money_all)) {
          item.check3 = "Ok";
        } else {
          item.check3 = " ";
        }
      });
      this.loading = false;
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiReceiving_money.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              if (this.car_no == "") {
                this.getReceiving_money();
              } else {
                this.getDataWithCarNo();
              }
            });
          });
        }
      });
    },
    async addSuccess(value) {
      // console.log(value);
      if (value == "work") {
        this.dialogWork = false;
      } else if (value == "Booking") {
        this.dialogBooking = false;
      } else if (value == "Financial") {
        this.dialogFinancial = false;
      } else if (value == "Contract") {
        this.dialogContract = false;
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
      } else if (value == "Appointment") {
        this.dialogAppointment = false;
      } else if (value == "AppointmentBank") {
        this.dialogAppointmentBank = false;
      } else if (value == "InsurCertificate") {
        this.dialogInsurCertificate = false;
      } else if (value == "Receiving_money") {
        this.dialogReceivingMoney = false;
      } else if (value == "note") {
        this.dialogNote = false;
      }

      this.$nextTick(() => {
        this.getReceiving_money();
        customAlart.TopSuccess();
      });
    },
    async addError(value) {
      if (value == "work") {
        this.dialogWork = false;
      } else if (value == "Booking") {
        this.dialogBooking = false;
      } else if (value == "Financial") {
        this.dialogFinancial = false;
      } else if (value == "Contract") {
        this.dialogContract = false;
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
      } else if (value == "Appointment") {
        this.dialogAppointment = false;
      } else if (value == "AppointmentBank") {
        this.dialogAppointmentBank = false;
      } else if (value == "InsurCertificate") {
        this.dialogInsurCertificate = false;
      } else if (value == "Receiving_money") {
        this.dialogReceivingMoney = false;
      } else if (value == "note") {
        this.dialogNote = false;
      }

      this.$nextTick(() => {
        this.getReceiving_money();
        customAlart.TopError();
      });
    },
  },
  watch: {
    idWork() {
      // console.log(this.idWork);
      if (this.idWork == null) {
        this.getReceiving_money();
      }
    },
    // async search_number(value) {
    //   if (value != null) {
    //     this.$nextTick(async () => {
    //       if (value.length > 0) {
    //         const response = await apiWorks.search(value);
    //         this.dataWorking = await response.data;
    //       }
    //     });
    //   }
    // },
  },
};
</script>

<style></style>
