<template>
  <div>
    <v-container>
      <!-- <v-select
        v-model="selected"
        :items="items"
        outlined
        dense
        hide-details
        @change="selectStatus()"
      ></v-select> -->

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="ค้นหาลำดับรถ ค้นหาชื่อลูกค้า"
        single-line
        hide-details
        outlined
      ></v-text-field>
    </v-container>

    <v-container class="">
      <v-card v-for="item in data" :key="'work_' + item.id" class="mb-3">
        <v-card-title class="d-flex align-end">
          <v-row>
            <v-col cols="8">W{{ item.id }}</v-col>
            <v-col cols="4" style="font-size: 1rem; font-weight: 300" class="d-flex justify-end">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    @click="editItem(item.id)"
                    v-if="
                      (item.work_status <= 7 && user_group_permission == 3) ||
                      (item.work_status <= 7 && user_group_permission == 2) ||
                      user_group_permission == -1
                    "
                  >
                    <v-list-item-title>ดูข้อมูลลูกค้าสนใจ</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      user_group_permission == -1 ||
                      user_group_permission == 2 ||
                      user_group_permission == 3 ||
                      user_group_permission == 10
                    "
                    @click="Booking(item.car_no, item.id, item.car_id, item.customer_id, item.sale_id)"
                  >
                    <v-list-item-title>{{ item.work_status > 1 ? "ดูข้อมูลการจอง" : "จอง" }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status > 2 && user_group_permission == -1) ||
                      (item.work_status > 2 && user_group_permission == 2) ||
                      (item.work_status > 2 && user_group_permission == 3) ||
                      (item.work_status > 2 && user_group_permission == 11) ||
                      (item.work_status > 2 && user_group_permission == 10)
                    "
                    @click="Financial(item.car_no, item.id, '1', 'edit')"
                  >
                    <v-list-item-title>{{ item.work_status > 2 ? "ดูข้อมูลวางมัดจำ" : "วางมัดจำ" }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status > 3 && user_group_permission == -1) ||
                      (item.work_status > 3 && user_group_permission == 2) ||
                      (item.work_status > 3 && user_group_permission == 3) ||
                      (item.work_status > 3 && user_group_permission == 10)
                    "
                    @click="Appointment(item.car_no, item.id)"
                  >
                    <v-list-item-title>{{
                      item.work_status > 3 ? "ดูการนัดทำสัญญากับแบงค์" : "นัดทำสัญญากับแบงค์"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status > 4 && user_group_permission == -1) ||
                      (item.work_status > 4 && user_group_permission == 2) ||
                      (item.work_status > 4 && user_group_permission == 3) ||
                      (item.work_status > 4 && user_group_permission == 11) ||
                      (item.work_status > 4 && user_group_permission == 10)
                    "
                    @click="AppointmentBank(item.car_no, item.id)"
                  >
                    <v-list-item-title>{{
                      item.work_status > 4 ? "ดูการทำสัญญากับแบงค์" : "ทำสัญญากับแบงค์"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="item.work_status >= 5 && user_group_permission == -1" @click="PreApprove(item.id)">
                    <v-list-item-title>{{
                      item.work_status > 5 ? "ดูข้อมูลอนุมัติเบื้องต้น" : "อนุมัติเบื้องต้น"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="item.work_status >= 5 && user_group_permission == -1"
                    @click="BankApproved(item.car_no, item.id)"
                  >
                    <v-list-item-title>{{
                      item.work_status > 5 ? "ดูข้อมูลแบงค์อนุมัติ" : "แบงค์อนุมัติ"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status > 7 && user_group_permission == -1) ||
                      (item.work_status > 7 && user_group_permission == 2) ||
                      (item.work_status > 7 && user_group_permission == 3) ||
                      (item.work_status > 7 && user_group_permission == 10) ||
                      (item.work_status > 7 && user_group_permission == 11)
                    "
                    @click="Contract(item.car_no, item.id, item.car_id, item.customer_id)"
                  >
                    <v-list-item-title>{{ item.work_status > 7 ? "ดูข้อมูลปล่อยรถ" : "ปล่อยรถ" }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status > 7 && user_group_permission == -1) ||
                      (item.work_status > 7 && user_group_permission == 2) ||
                      (item.work_status > 7 && user_group_permission == 3) ||
                      (item.work_status > 7 && user_group_permission == 9) ||
                      (item.work_status > 7 && user_group_permission == 10) ||
                      (item.work_status > 7 && user_group_permission == 11)
                    "
                    @click="ReceiveDown(item.car_no, item.id)"
                  >
                    <v-list-item-title>{{
                      item.work_status > 7 ? "ใบสำคัญรับเงิน" : "ใบสำคัญรับเงิน"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    @click="note(item.id)"
                    v-if="
                      user_group_permission == -1 ||
                      user_group_permission == 2 ||
                      user_group_permission == 3 ||
                      user_group_permission == 9 ||
                      user_group_permission == 10
                    "
                  >
                    <v-list-item-title>หมายเหตุ</v-list-item-title>
                  </v-list-item>

                  <!-- <v-list-item
                    v-if="
                      (item.work_status > 7 && user_group_permission == -1) ||
                      (item.work_status > 7 && user_group_permission == 2) ||
                      (item.work_status > 7 && user_group_permission == 3)
                    "
                    @click="
                      InsurCertificate(
                        item.car_no,
                        item.id,
                        item.car_id,
                        item.customer_id
                      )
                    "
                  >
                    <v-list-item-title>{{
                      item.work_status > 7 ? "ใบประกันรถยนต์" : "ใบประกันรถยนต์"
                    }}</v-list-item-title>
                  </v-list-item> -->

                  <v-list-item
                    @click="deleteItem(item.id)"
                    v-if="user_group_permission == -1 || user_group_permission == 10 || item.work_status <= 5"
                  >
                    <v-list-item-title>ยกเลิก</v-list-item-title>
                  </v-list-item>

                  <!-- <v-list-item
                    @click="update_status(item.id, item.work_status)"
                    v-if="user_group_permission == -1"
                  >
                    <v-list-item-title>อัพเดตสถานะ</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    @click="rollback_status(item.id, item.work_status)"
                    v-if="user_group_permission == -1"
                  >
                    <v-list-item-title>ถอยสถานะ</v-list-item-title>
                  </v-list-item> -->
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text style="font-size: 1rem">
          <v-row>
            <v-col cols="7">
              <div><b>ลำดับรถ:</b> {{ item.car_no }}</div>
              <div><b>ยี่ห้อ:</b> {{ item.car_model_name }}</div>
              <div><b>รุ่น:</b> {{ item.car_series_name }}</div>
              <div><b>รุ่นย่อย:</b> {{ item.car_serie_sub_name }}</div>
              <div><b>ทะเบียน:</b> {{ item.car_regis }}</div>
            </v-col>

            <v-col cols="5">
              <div>
                <b>ลูกค้า/โทร:</b>
              </div>
              <div>
                {{ item.customer_name }}
              </div>
              <div>{{ item.customer_tel }}</div>
              <v-divider class="mt-1 mb-1"></v-divider>
              <!-- <div>
                <b>สถานะ:</b>
              </div> -->
              <div>
                <v-btn v-if="item.work_status == '1'" color="amber" dark text class="pa-0">ลูกค้าสนใจ</v-btn>
                <v-btn v-if="item.work_status == '2'" text color="primary" dark class="pa-0">ยืนยันการจอง</v-btn>
                <v-btn v-if="item.work_status == '3'" text color="primary" dark class="pa-0">วางมัดจำแล้ว</v-btn>
                <v-btn v-if="item.work_status == '4'" text color="primary" dark class="pa-0">นัดทำสัญญาแล้ว</v-btn>
                <v-btn v-if="item.work_status == '5'" text color="primary" dark class="pa-0">รอแบงค์อนุมัติ</v-btn>
                <v-btn v-if="item.work_status == '6'" text color="red" dark class="pa-0">แบงค์ไม่อนุมัติ</v-btn>
                <v-btn v-if="item.work_status == '7'" text color="primary" dark class="pa-0">แบงค์อนุมัติแล้ว</v-btn>
                <v-btn v-if="item.work_status == '8'" text color="primary" dark class="pa-0">ปล่อยรถแล้ว</v-btn>
                <v-btn v-if="item.work_status == '9'" text color="primary" dark class="pa-0">ปล่อยรถแล้ว</v-btn>
                <v-btn v-if="item.work_status == '10'" text color="success" dark class="pa-0">ปล่อยรถแล้ว</v-btn>
                <v-btn v-if="item.work_status == '11'" text color="success" dark class="pa-0">ปิดงานแล้ว</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="mr-2">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            v-if="item.work_status == '1'"
            @click="Booking(item.car_no, item.id, item.car_id, item.customer_id, item.sale_id)"
          >
            จอง
          </v-btn>
          <v-btn color="primary" v-if="item.work_status == '2'" @click="Financial(item.car_no, item.id, '1', 'add')">
            ใบสำคัญรับเงิน
          </v-btn>
          <v-btn color="primary" v-if="item.work_status == '3'" @click="Appointment(item.car_no, item.id)">
            นัดทำสัญญากับแบงค์
          </v-btn>
          <v-btn color="primary" v-if="item.work_status == '4'" @click="AppointmentBank(item.car_no, item.id)">
            ทำสัญญา
          </v-btn>
          <!-- <v-btn color="primary" v-if="item.work_status == '5'" @click="PreApprove(item.id)"> อนุมัติเบื้องต้น </v-btn>
          <v-btn color="primary" v-if="item.work_status == '5'" @click="BankApproved(item.car_no, item.id)">
            แบงค์อนุมัติ
          </v-btn> -->
          <v-btn
            color="primary"
            v-if="item.work_status == '7'"
            @click="Contract(item.car_no, item.id, item.car_id, item.customer_id)"
          >
            ปล่อยรถ
          </v-btn>
          <v-btn
            color="primary"
            v-if="item.work_status >= '3' && item.work_status <= '10'"
            @click="ReceiveDown(item.car_no, item.id)"
          >
            ใบสำคัญรับเงิน
          </v-btn>

          <!-- <v-menu
            offset-y
            :nudge-width="100"
            v-if="item.financials_sum_bath != item.down && item.work_status >= 8 && item.bank_id != 6"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ml-1" color="red" dark v-bind="attrs" v-on="on"> ค้างดาวน์ </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-row no-gutters>
                  <v-col>เงินดาวน์​: </v-col>
                  <v-col align="right">
                    {{
                      Number(item.down).toLocaleString("th-TH", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }}
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col>จ่ายแล้ว: </v-col>
                  <v-col align="right">
                    {{
                      Number(item.financials_sum_bath).toLocaleString("th-TH", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }}
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col>ค้างจ่าย: </v-col>
                  <v-col align="right">
                    {{
                      (Number(item.down) - Number(item.financials_sum_bath)).toLocaleString("th-TH", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }}
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-menu> -->
        </v-card-actions>
      </v-card>
    </v-container>

    <v-fab-transition>
      <v-btn color="primary" fab large dark fixed bottom right style="bottom: 70px" @click.stop="AddItem()">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>

    <dialogWork
      :dialogWork="dialogWork"
      :idWork="idWork"
      :actionWork="actionWork"
      :formTitleWork="formTitleWork"
      @cancleItem="dialogWork = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogBooking
      :dialogBooking="dialogBooking"
      :idWork="idWork"
      :idCar="idCar"
      :car_no="car_no"
      :idCustomer="idCustomer"
      :actionBooking="actionBooking"
      :formTitleBooking="formTitleBooking"
      @cancleItem="dialogBooking = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogFinancial
      :dialogFinancial="dialogFinancial"
      :idWork="idWork"
      :car_no="car_no"
      :payment_type="payment_type"
      :actionFinancial="actionFinancial"
      :formTitleFinancial="formTitleFinancial"
      @cancleItem="dialogFinancial = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogReceiveDown
      :dialog="dialogReceiveDown"
      :idWork="idWork"
      :car_no="car_no"
      @cancleItem="dialogReceiveDown = false"
    />

    <dialogAppointment
      :dialogAppointment="dialogAppointment"
      :idWork="idWork"
      :car_no="car_no"
      :status_bank="status_bank"
      :actionAppointment="actionAppointment"
      :formTitleAppointment="formTitleAppointment"
      @cancleItem="dialogAppointment = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogPreApprove
      :dialog="dialogPreApprove"
      :working_id="idWork"
      @cancleItem="dialogPreApprove = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogAppointmentBank
      :dialogAppointmentBank="dialogAppointmentBank"
      :idWork="idWork"
      :car_no="car_no"
      :status_bank="status_bank"
      :actionAppointmentBank="actionAppointmentBank"
      :formTitleAppointmentBank="formTitleAppointmentBank"
      @cancleItem="dialogAppointmentBank = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogContract
      :dialogContract="dialogContract"
      :idWork="idWork"
      :idCar="idCar"
      :car_no="car_no"
      :idCustomer="idCustomer"
      :actionContract="actionContract"
      :formTitleContract="formTitleContract"
      @cancleItem="dialogContract = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogInsurCertificate
      :dialogInsurCertificate="dialogInsurCertificate"
      :idWork="idWork"
      :jobType="jobType"
      :car_no="car_no"
      :actionInsurCertificate="actionInsurCertificate"
      :formTitleInsurCertificate="formTitleInsurCertificate"
      @cancleItem="dialogInsurCertificate = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogNote
      :dialogNote="dialogNote"
      :idNote="idNote"
      @cancleItem="dialogNote = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogLoader :dialogLoader="dialogLoader" />
  </div>
</template>

<script>
import * as apiWorks from "@/Api/apiWorks";

import * as customAlart from "@/customJS/customAlart";

import dialogBooking from "@/components/mobile/dialogBooking";
import dialogReceiveDown from "@/components/mobile/dialogReceiveDown";
import dialogInsurCertificate from "@/components/mobile/dialogInsurCertificate";

import dialogLoader from "@/components/dialog-loader";
import dialogWork from "@/components/dialog/dialogWork";
import dialogAppointment from "@/components/dialog/dialogAppointment";
import dialogPreApprove from "@/components/dialog/dialogPreApprove";
import dialogAppointmentBank from "@/components/dialog/dialogAppointmentBank";
import dialogContract from "@/components/dialog/dialogContract";
import dialogFinancial from "@/components/dialog/dialogFinancial";

import dialogNote from "@/components/dialog/dialogNote";

export default {
  layout: "mobile",
  components: {
    dialogLoader,
    dialogBooking,
    dialogWork,
    dialogFinancial,
    dialogReceiveDown,
    dialogAppointment,
    dialogPreApprove,
    dialogAppointmentBank,
    dialogContract,
    dialogInsurCertificate,
    dialogNote,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      search: "",
      dialogLoader: false,
      selected: 0,
      status_bank: 5,
      jobType: 1,
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      dataAll: [],
      data: [],
      items: [
        {
          text: "ทั้งหมด",
          value: 0,
        },
        {
          text: "สนใจ",
          value: 1,
        },
        {
          text: "จอง",
          value: 2,
        },
        {
          text: "มัดจำ",
          value: 3,
        },
        {
          text: "รอทำสัญญา",
          value: 4,
        },
        {
          text: "รอแบงค์อนุมัติ",
          value: 5,
        },
        {
          text: "ไม่อนุมัติ",
          value: 6,
        },
        {
          text: "อนุมัติ",
          value: 7,
        },
        {
          text: "ชุดโอน",
          value: 8,
        },
        {
          text: "โอนสำเร็จ",
          value: 9,
        },
        {
          text: "รอปิดงาน",
          value: 10,
        },
      ],

      dialogBooking: false,
      formTitleBooking: "Add",
      actionBooking: "check",

      idWork: "",
      idCustomer: "",
      idCar: "",
      car_no: "",

      dialogWork: false,
      formTitleWork: "Add",
      actionWork: "add",

      dialogFinancial: false,
      formTitleFinancial: "Add",
      actionFinancial: "check",
      payment_type: "1",
      dialogContract: false,
      formTitleContract: "Add",
      actionContract: "check",

      dialogReceiveDown: false,

      dialogAppointment: false,
      formTitleAppointment: "Add",
      actionAppointment: "check",

      dialogPreApprove: false,

      dialogAppointmentBank: false,
      formTitleAppointmentBank: "Add",
      actionAppointmentBank: "check",

      dialogInsurCertificate: false,
      formTitleInsurCertificate: "Add",
      actionInsurCertificate: "check",

      dialogNote: false,
      idNote: "",
    };
  },
  beforeMount() {
    if (this.user_group_permission == 2 || this.user_group_permission == 3) {
      this.branch_id = this.$auth.$storage.getLocalStorage("userData-branch_id");
    } else {
      this.branch_id = 0;
    }
  },
  async mounted() {
    this.getData();
  },
  methods: {
    selectStatus() {
      // console.log(this.selected);
      this.getData();
    },
    async getData() {
      // console.log("getData");
      this.dialogLoader = true;

      const data = new FormData();
      data.append("branch_team_id", 0);
      data.append("user_team_id", 0);
      data.append("branch_id", this.branch_id);
      if (this.user_group_permission == 3) {
        data.append("user_id", this.user_id);
      } else {
        data.append("user_id", 0);
      }
      data.append("work_status", this.selected);
      data.append("user_group_permission", this.user_group_permission);
      const response = await apiWorks.followWork(data);
      // console.log(response.data);
      this.dataAll = response.data.data;
      this.data = response.data.data;
      this.content_all = response.data.dataAll;

      this.dialogLoader = false;
    },
    async AddItem() {
      this.formTitleWork = "เพิ่มข้อมูล";
      this.dialogWork = true;
      this.idWork = "";
      this.actionWork = "add";
    },
    async Booking(car_no, work_id, car_id, customer_id, sale_id) {
      if (customer_id == null || sale_id == null) {
        var isConfirmed = customAlart.checkSelect();
        await isConfirmed.then(async (result) => {
          if (result == true) {
            this.editItem(work_id);
          }
        });
      } else {
        // console.log(car_no);
        this.formTitleBooking = "เอกสารสรุปการขาย ( ใบปะหน้า )";
        this.idWork = work_id;
        this.idCar = car_id;
        this.idCustomer = customer_id;
        this.idSale = sale_id;
        this.dialogBooking = true;
        this.actionBooking = "check";
        this.car_no = car_no;
      }
    },
    async Financial(car_no, work_id, payment_type, action) {
      this.formTitleFinancial = "หลักฐานการรับเงิน ธุระกิจการขายรถยนต์ใช้แล้ว";
      this.car_no = car_no;
      this.idWork = work_id;
      this.payment_type = payment_type;
      this.dialogFinancial = true;
      this.actionFinancial = action;
    },
    async ReceiveDown(car_no, work_id) {
      this.car_no = car_no;
      this.idWork = work_id;
      this.dialogReceiveDown = true;
    },
    async Appointment(car_no, work_id) {
      // this.car_no = car_no;
      this.formTitleAppointment = "นัดวันทำสัญญา " + car_no;
      this.dialogAppointment = true;
      this.idWork = work_id;
      this.status_bank = 4;
      this.actionAppointment = "check";
    },
    async AppointmentBank(car_no, work_id) {
      // console.log("55");
      this.car_no = car_no;

      this.formTitleAppointmentBank = "ทำสัญญากับแบงค์ " + car_no;
      this.dialogAppointmentBank = true;
      this.idWork = work_id;
      this.status_bank = 5;
      this.actionAppointmentBank = "check";
    },
    async PreApprove(working_id) {
      this.dialogPreApprove = true;
      this.idWork = working_id;
    },
    async BankApproved(car_no, work_id) {
      this.car_no = car_no;
      this.formTitleAppointmentBank = "แบงค์อนุมัติ (" + car_no + ")";
      this.dialogAppointmentBank = true;
      this.idWork = work_id;
      this.status_bank = 7;
      this.actionAppointmentBank = "check";
    },
    async Contract(car_no, work_id, car_id, customer_id) {
      this.formTitleContract = "ปล่อยรถ";
      this.idWork = work_id;
      this.idCar = car_id;
      this.car_no = car_no;

      this.idCustomer = customer_id;
      this.dialogContract = true;
      this.actionContract = "check";
    },
    async InsurCertificate(car_no, work_id, car_id, customer_id) {
      this.formTitleInsurCertificate = "ใบประกันรถยนต์";
      this.idWork = work_id;
      this.idCar = car_id;
      this.car_no = car_no;
      this.jobType = 2;
      this.idCustomer = customer_id;
      this.dialogInsurCertificate = true;
      this.actionInsurCertificate = "check";
    },

    async note(id) {
      this.dialogNote = true;
      this.idNote = id;
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
      } else if (value == "PreApprove") {
        this.dialogPreApprove = false;
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
        this.getData();
        customAlart.TopSuccess();
        this.btnUpdate = true;
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
      } else if (value == "PreApprove") {
        this.dialogPreApprove = false;
      } else if (value == "AppointmentBank") {
        this.dialogAppointmentBank = false;
      } else if (value == "InsurCertificate") {
        this.dialogInsurCertificate = false;
      } else if (value == "Receiving_money") {
        this.dialogReceivingMoney = false;
      }

      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
    async editItem(item) {
      this.formTitleWork = "แก้ไขข้อมูล";
      this.dialogWork = true;
      this.idWork = item;
      this.actionWork = "edit";
    },
    async deleteItem(item) {
      this.formTitleWork = "ยกเลิกการจอง";
      this.dialogWork = true;
      this.idWork = item;
      this.actionWork = "cancel";
    },
  },
  watch: {
    search() {
      this.data = this.dataAll.filter((item) => {
        return item.car_no.includes(this.search) || item.customer_name.includes(this.search);
      });
    },
  },
};
</script>

<style></style>
