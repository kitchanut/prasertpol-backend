<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 2 ||
      user_group_permission == 9
    "
  >
    <v-card>
      <v-card-title>
        <v-col cols="9">
          <dateSelect @tineSelect="selectTimeStart" />
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
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.updated_at`]="{ item }">
          <h5>
            {{ $moment(item.updated_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.work_status`]="{ item }">
          <v-btn v-if="item.work_status == '1.0'" x-small color="primary" dark
            >ลูกค้าสนใจ</v-btn
          >
          <v-btn v-if="item.work_status == '2.0'" x-small color="primary" dark
            >ยืนยันการจอง</v-btn
          >
          <v-btn v-if="item.work_status == '3.0'" x-small color="primary" dark
            >วางมัดจำแล้ว</v-btn
          >
          <v-btn v-if="item.work_status == '4.1'" x-small color="primary" dark
            >มอบหมายงาน</v-btn
          >
          <v-btn v-if="item.work_status == '4.0'" x-small color="primary" dark
            >นัดทำสัญญาแล้ว</v-btn
          >
          <v-btn v-if="item.work_status == '5.0'" x-small color="primary" dark
            >รอแบงค์อนุมัติ</v-btn
          >
          <v-btn v-if="item.work_status == '6.0'" x-small color="red" dark
            >แบงค์ไม่อนุมัติ</v-btn
          >
          <v-btn v-if="item.work_status == '7.0'" x-small color="primary" dark
            >แบงค์อนุมัติแล้ว</v-btn
          >
          <v-btn v-if="item.work_status == '8.1'" x-small color="primary" dark
            >เพิ่มใบประกันรถยนต์</v-btn
          >
          <v-btn v-if="item.work_status == '8.0'" x-small color="primary" dark
            >จัดทำชุดโอน</v-btn
          >
          <v-btn v-if="item.work_status == '9.0'" x-small color="primary" dark
            >โอนรถสำเร็จ</v-btn
          >
          <v-btn v-if="item.work_status == '10.0'" x-small color="success" dark
            >รับเงินแล้ว</v-btn
          >
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as apiWorks from "@/Api/apiWorks";
import * as apiTransition_working from "@/Api/apiTransition_working";
import dateSelect from "@/components/DateSelect/dateSelect";

export default {
  components: {
    dateSelect,
  },
  data() {
    return {
           user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      loading: false,
      search: "",
      id: "",
      formTitle: "Add",
      action: "add",
      waitingPushdata: false,
      headers: [
        { text: "ลำดับ", value: "no", align: "center" },
        { text: "ลำดับรถ", value: "car.car_no" },
        { text: "ทะเบียน", value: "car.car_regis" },
        { text: "ผู้สนใจ", value: "customer.customer_name" },
        { text: "เบอร์", value: "customer_tel" },
        { text: "เซล", value: "user.first_name" },
        { text: "วันที่", value: "updated_at" },
        { text: "สาขา", value: "branch.branch_name" },
        { text: "สถานะ", value: "work_status" },
      ],
      data: [],
      dataWorking: [],
      timeStart: null,
      timeEnd: null,
    };
  },
  mounted() {},
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async getData() {
      this.data = [];
      const data = new FormData();
      data.append("branch_id", this.branch_id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiTransition_working.index(data);
      // console.log(response);
      this.data = await response.data;
    },
    async selectTimeStart(time) {
      this.branch_id = time.branch_id;
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getData();
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
