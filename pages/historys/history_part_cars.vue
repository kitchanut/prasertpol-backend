<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-title>
        <v-col cols="5">
          <v-autocomplete
            :disabled="waitingPushdata"
            no-data-text="ไม่มีข้อมูล"
            :items="dataCar"
            item-text="car_no"
            item-value="id"
            @change="selectSee"
            label="ค้นหาตาม"
            outlined
            dense
            :filter="filterObject"
            hide-details
          >
            <template slot="selection" slot-scope="{ item }">
              {{ item.car_no }} ({{ item.car_regis }})
            </template>

            <template slot="item" slot-scope="{ item }">
              {{ item.car_no }} ({{ item.car_regis }})
            </template>
          </v-autocomplete>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="3">
          <v-text-field
            v-model="search"
id="search"
name="search"
            append-icon="mdi-magnify"
            label="ค้นหา"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.job_technician_id`]="{ item }">
          <v-btn x-small color="blue" dark @click="seeHistoryTime(item.id)">
            {{ "J" + item.id }}
          </v-btn>
        </template>

        <template v-slot:[`item.repair_type`]="{ item }">
          <h5 v-if="item.repair_type == 4">ช่าง</h5>
          <h5 v-if="item.repair_type == 5">บิ้ว</h5>
        </template>

        <template v-slot:[`item.timer`]="{ item }">
          <div v-if="item.job_status == 1">
            <h5>
              {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
            </h5>
          </div>

          <div v-if="item.job_status == 2">
            <h5>
              {{ $moment(item.job_start).format("DD/MM/YYYY ( HH:mm น.)") }}
            </h5>
          </div>

          <div v-if="item.job_status == 3">
            <h5>
              {{ $moment(item.job_pasue).format("DD/MM/YYYY ( HH:mm น.)") }}
            </h5>
          </div>

          <div v-if="item.job_status == 4">
            <h5>
              {{ $moment(item.job_end).format("DD/MM/YYYY ( HH:mm น.)") }}
            </h5>
          </div>

          <div v-if="item.job_status == 5">
            <h5>
              {{ $moment(item.job_cancel).format("DD/MM/YYYY ( HH:mm น.)") }}
            </h5>
          </div>
        </template>

        <template v-slot:[`item.typeRepair`]="{ item }">
          <h5 v-if="item.job_type == 1" class="blue--text">ก่อนขาย</h5>
          <h5 v-if="item.job_type == 2" class="red--text">หลังขาย</h5>
        </template>

        <template v-slot:[`item.work_status`]="{ item }">
          <v-btn v-if="item.job_status == '1'" x-small color="red" dark
            >รอเริ่มงาน</v-btn
          >
          <v-btn v-if="item.job_status == '2'" x-small color="blue" dark
            >กำลังซ่อม</v-btn
          >
          <v-btn v-if="item.job_status == '3'" x-small color="red" dark
            >พักงาน</v-btn
          >
          <v-btn v-if="item.job_status == '4'" x-small color="success" dark
            >ทำเสร็จแล้ว</v-btn
          >
          <v-btn v-if="item.job_status == '5'" x-small color="red" dark
            >ยกเลิก</v-btn
          >
        </template>
      </v-data-table>
    </v-card>
    <br />
    <v-card v-if="idJob != ''">
      <v-card-title>
        <v-col cols="12">
          <h3 class="text-center">รายละเอียดการซ่อมของ J{{ idJob }}</h3>
        </v-col>
      </v-card-title>

      <v-data-table
        :headers="headersTwo"
        :items="dataHistory"
        :items-per-page="10"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.repair_type`]="{ item }">
          <h5 v-if="item.repair_type == 4">ช่าง</h5>
          <h5 v-if="item.repair_type == 5">บิ้ว</h5>
        </template>

        <template v-slot:[`item.created_at`]="{ item }">
          <h5 v-if="item.job_status == 1">
            {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.job_start`]="{ item }">
          <h5 v-if="item.job_status == 2">
            {{ $moment(item.job_start).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.job_pasue`]="{ item }">
          <h5 v-if="item.job_status == 3">
            {{ $moment(item.job_pasue).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.job_end`]="{ item }">
          <h5 v-if="item.job_status == 4">
            {{ $moment(item.job_end).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.job_cancel`]="{ item }">
          <h5 v-if="item.job_status == 5">
            {{ $moment(item.job_cancel).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.job_status`]="{ item }">
          <v-btn v-if="item.job_status == '1'" x-small color="red" dark
            >รอเริ่มงาน</v-btn
          >
          <v-btn v-if="item.job_status == '2'" x-small color="blue" dark
            >กำลังซ่อม</v-btn
          >
          <v-btn v-if="item.job_status == '3'" x-small color="red" dark
            >พักงาน</v-btn
          >
          <v-btn v-if="item.job_status == '4'" x-small color="success" dark
            >ทำเสร็จแล้ว</v-btn
          >
          <v-btn v-if="item.job_status == '5'" x-small color="red" dark
            >ยกเลิก</v-btn
          >
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as apiTransition_cars from "@/Api/apiTransition_cars";
import * as apiTransition_repair from "@/Api/apiTransition_repair";
import * as apiJobTechnician from "@/Api/apiJobTechnician";

export default {
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      loading: false,
      search: "",
      waitingPushdata: true,
      id: "",
      formTitle: "Add",
      action: "add",
      idJob: "",
      headers: [
        { text: "ลำดับ", value: "no", align: "center" },
        { text: "เวลา", value: "timer" },
        { text: "รหัสงานช่าง", value: "job_technician_id" },
        { text: "รายการซ่อม", value: "repair.repair_name" },
        { text: "ลิฟท์ซ่อม", value: "car_lift.carlift_name" },
        { text: "งานของ", value: "repair_type" },
        { text: "พนักงานซ่อม", value: "user.first_name" },
        { text: "ซ่อมตอน", value: "typeRepair" },
        { text: "สถานะ", value: "work_status" },
      ],

      headersTwo: [
        { text: "ลิฟท์ซ่อม", value: "car_lift.carlift_name" },
        { text: "งานของ", value: "repair_type" },
        { text: "พนักงานซ่อม", value: "user.first_name" },
        { text: "สั่ง", value: "created_at", width: "8%" },
        { text: "เริ่ม", value: "job_start", width: "8%" },
        { text: "พัก", value: "job_pasue", width: "8%" },
        { text: "เสร็จ", value: "job_end", width: "8%" },
        { text: "ยกเลิก", value: "job_cancel", width: "9%" },
        { text: "สถานะ", value: "job_status", width: "10%" },
      ],

      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      data: [],
      dataCar: [],
      dataHistory: [],
    };
  },
  mounted() {
    this.getDataCar();
    this.loading = false;
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    filterObject(item, queryText, itemText) {
      return (
        item.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) >
          -1 ||
        item.car_regis
          .toLocaleLowerCase()
          .indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    async getDataCar() {
      if (this.user_group_permission != 2 || this.user_group_permission != 3) {
        this.branch_id = 0;
      } else {
        this.branch_id =
          this.$auth.$storage.getLocalStorage("userData-branch_id");
      }
      const response = await apiTransition_cars.car_regis(this.branch_id);
      // console.log(response)
      this.dataCar = await response.data;
      this.waitingPushdata = false;
    },
    async selectSee(value) {
      this.data = [];
      this.dataHistory = [];

      this.loading = true;
      this.waitingPushdata = true;
      const response = await apiJobTechnician.selectWhereCar(value);
      this.data = await response.data;
      this.loading = false;
      this.waitingPushdata = false;
    },
    async seeHistoryTime(idJob) {
      this.idJob = "";
      this.dataHistory = [];
      const response = await apiTransition_repair.selectWhereJob(idJob);
      this.dataHistory = await response.data;
      this.idJob = await idJob;
    },
  },
  watch: {
    data() {
      const self = this;
      return this.data.map(function (item) {
        item.no =
          self.data
            .map(function (x) {
              return x.id;
            })
            .indexOf(item.id) + 1;
      });
    },
  },
};
</script>

<style></style>
