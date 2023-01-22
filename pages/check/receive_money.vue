<template>
  <div>

    <v-card>
      <v-card-text>
        <v-row class="d-flex">
          <v-col
            xs="12"
            sm="12"
            md="4"
            lg="4"
            xl="4"
            class="d-flex align-end"
          >

            <!-- {{idWork}} -->
            <v-autocomplete
              :filter="filterObject"
              no-data-text="ไม่มีข้อมูล"
              :items="dataWorking"
              item-value="id"
              label="ค้นหาตามลำดับรถ"
              v-model="idWork"
              outlined
              dense
              hide-details
              @change="getReceiving_money()"
            >
              <template
                slot="selection"
                slot-scope="{ item }"
              >
                W{{item.id}} - {{ item.cars.car_no }} ({{ item.cars.car_regis }})
              </template>

              <template
                slot="item"
                slot-scope="{ item }"
              >
                W{{item.id}} - {{ item.cars.car_no }} ({{ item.cars.car_regis }})
              </template>
            </v-autocomplete>

            <!-- <v-autocomplete
              :items="dataWorking"
              item-text="id"
              item-value="id"
              @change="selectCar"
              :disabled="waitingPushdata"
              :search-input.sync="search_number"
              no-data-text="ไม่มีข้อมูล"
              label="ค้นหาตามรหัส"
              outlined
              dense
              hide-details
            >
              <template
                slot="selection"
                slot-scope="{ item }"
              >
                W{{ item.id }}
              </template>

              <template
                slot="item"
                slot-scope="{ item }"
              >
                W{{ item.id }}
              </template>
            </v-autocomplete> -->

          </v-col>
          <v-col
            v-if="idWork"
            class="d-flex align-end"
          >
            <v-btn
              color="primary"
              class="mr-2"
              @click="ReceivingMoney(idWork, 1)"
            >ใบกำกับค่าตัวรถ</v-btn>
            <v-btn
              class="mr-2"
              color="warning"
              @click="ReceivingMoney(idWork, 2)"
            >ใบกำกับค่าคอม</v-btn>
            <v-btn
              color="success"
              @click="ReceivingMoney(idWork, 3)"
            >อื่นๆ</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            xl="4"
          >
            <v-text-field
              v-model="search"
              id="search"
              name="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
            >
            </v-text-field>
          </v-col>
        </v-row>
        <br>

        <v-data-table
          :headers="headers"
          :items="data"
          :search="search"
          :multi-sort="true"
          dense
        >
          <!-- <template v-slot:[`item.receivingMoney_type_str`]="{ item }">
            <h5 v-if="item.receivingMoney_type_str == 'ค่าตัวรถ'">ค่าตัวรถ</h5>
            <h5
              v-else-if="item.receivingMoney_type_str == 'ค่าคอม'"
              class="red--text"
            >ค่าคอม</h5>
            <h5
              v-else
              class="green--text"
            >อื่นๆ</h5>

          </template> -->

          <template v-slot:[`item.car_regis`]="{ item }">
            <div>{{item.car_model_name}}</div>
            <div>{{item.car_regis}}</div>
            <div>{{item.name_th}}</div>
          </template>

          <template v-slot:[`item.receiving_money_sum`]="{ item }">
            <div>{{item.receiving_money_sum}}</div>
            <div v-if="item.check1 == 'Ok' ">{{item.receiving_money_sum_str}}</div>
            <div
              v-else
              class="red--text"
            >{{item.receiving_money_sum_str}}</div>
          </template>

          <template v-slot:[`item.receiving_money_sum_vat`]="{ item }">
            <div>{{item.receiving_money_sum_vat}}</div>
            <div v-if="item.check2 == 'Ok' ">{{item.receiving_money_sum_vat_str}}</div>
            <div
              v-else
              class="red--text"
            >{{item.receiving_money_sum_vat_str}}</div>
          </template>

          <template v-slot:[`item.receiving_money_all`]="{ item }">
            <div>{{item.receiving_money_all}}</div>
            <div v-if="item.check3 == 'Ok' ">{{item.receiving_money_all_str}}</div>
            <div
              v-else
              class="red--text"
            >{{item.receiving_money_all_str}}</div>
          </template>
        </v-data-table>

      </v-card-text>
    </v-card>

    <dialogReceivingMoney
      :dialogReceivingMoney="dialogReceivingMoney"
      :idWork="idWork"
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

      // dataCar: [],
      // car_id: "",

      dataWorking: [],
      waitingPushdata: false,
      search_number: "",
      idWork: 0,

      dialogReceivingMoney: false,
      formTitleReceivingMoney: "Add",
      actionReceivingMoney: "check",
      receivingMoney_type: 1,

      headers: [
        {
          text: "ลำดับรถ",
          value: "car_no",
        },
        {
          text: "ประเภท",
          value: "receivingMoney_type_str",
        },
        {
          text: "เล่มที่",
          value: "book_no",
        },
        {
          text: "เลขที่",
          value: "number_no",
        },
        {
          text: "รายละเอียด",
          value: "car_regis",
        },
        // {
        //   text: "ทะเบียน",
        //   value: "car_regis",
        // },
        // {
        //   text: "จังหวัด",
        //   value: "name_th",
        // },
        {
          text: "จำนวน",
          value: "receiving_money_sum",
        },
        {
          text: "vat",
          value: "receiving_money_sum_vat",
        },
        {
          text: "รวม",
          value: "receiving_money_all",
        },
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
        item.cars.car_no
          .toLocaleLowerCase()
          .indexOf(queryText.toLocaleLowerCase()) > -1 ||
        item.cars.car_regis
          .toLocaleLowerCase()
          .indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    async getDataWork() {
      const response = await apiWorks.allData();
      this.dataWorking = response.data.filter(function (item, index) {
        return item.status_del == 1;
      });
      // console.log(response.data);
      // this.dataWorking = await response.data;
    },

    async ReceivingMoney(work_id, receivingMoney_type) {
      if (receivingMoney_type == 1) {
        this.formTitleReceivingMoney = "เอกสารรับเงิน (ค่าตัวรถ)";
      } else if (receivingMoney_type == 2) {
        this.formTitleReceivingMoney = "เอกสารรับเงิน (ค่าคอม)";
      } else {
        this.formTitleReceivingMoney = "เอกสารรับเงิน (อื่นๆ)";
      }
      // this.formTitleReceivingMoney = receivingMoney_type == 1
      //   ? "เอกสารรับเงิน (ค่าตัวรถ)"
      //   : "เอกสารรับเงิน (ค่าคอม)";
      this.idWork = work_id;
      this.receivingMoney_type = receivingMoney_type;
      this.dialogReceivingMoney = true;
      this.actionReceivingMoney = "check";
    },
    async getReceiving_money() {
      let working_id = 0;
      if (this.idWork != null) {
        working_id = this.idWork;
      }
      const response = await apiReceiving_money.getWithWorkID(working_id);
      this.data = response.data;

      this.data.map(function (item) {
        item.price = item.receiving_money_sum;
        if (item.receiving_money_sum_str == THBText(item.receiving_money_sum)) {
          item.check1 = "Ok";
        } else {
          item.check1 = " ";
        }
        if (
          item.receiving_money_sum_vat_str ==
          THBText(item.receiving_money_sum_vat)
        ) {
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

<style>
</style>
