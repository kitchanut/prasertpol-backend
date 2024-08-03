<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 8">
    <v-card>
      <v-card-title>
        <v-col cols="3" v-if="user_group_permission == -1 || user_group_permission == 8">
          <v-autocomplete
            v-model="branch_id"
            :items="branches"
            item-text="branch_name"
            item-value="id"
            label="สาขา"
            outlined
            dense
            hide-details
            @change="selectBranch"
            no-data-text="ไม่มีข้อมูล"
          >
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
          >
          </v-text-field>
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
        dense
      >
        <!-- <template v-slot:[`item.expected_date_end`]="{ item }">
          {{ $moment(item.expected_date_end).format("DD/MM/YYYY") }}
        </template> -->

        <template v-slot:[`item.created_at`]="{ item }">
          <div>{{ $moment(item.created_at).format("DD/MM/YYYY") }}</div>
          <div>{{ $moment(item.expected_date_end).format("DD/MM/YYYY") }}</div>
        </template>

        <template v-slot:[`item.car_img`]="{ item }">
          <v-btn icon v-if="item.cars.img_id_first != 0">
            <v-avatar tile size="40" @click="getAllImg(item.cars.id)">
              <v-img :src="serverUrl + item.cars.img_id_first"> </v-img>
            </v-avatar>
          </v-btn>
        </template>

        <template v-slot:[`item.cars.car_regis`]="{ item }">
          <div v-if="item.car_regis_current">{{ car_regis_current }}</div>
          <div v-else>{{ item.cars.car_regis }}</div>
        </template>

        <!-- <template v-slot:[`item.job_type`]="{ item }">
          <span v-if="item.job_type == 1">ก่อนขาย</span>
          <span v-if="item.job_type == 2">หลังขาย</span>
        </template> -->

        <template v-slot:[`item.cars.car_models.car_model_name`]="{ item }">
          <div>{{ item.cars.car_models.car_model_name }}</div>
          <div>{{ item.cars.car_series.car_series_name }}</div>
        </template>

        <template v-slot:[`item.job_technician_pathner_list`]="{ item }">
          <div v-html="item.job_technician_pathner_list"></div>
        </template>

        <template v-slot:[`item.job_status`]="{ item }">
          <span style="color: orange" v-if="item.job_status == 1">กำลังซ่อม</span>
          <span style="color: green" v-if="item.job_status == 2">ซ่อมเสร็จแล้ว</span>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-menu offset-y v-if="item.job_status < '4'">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" v-if="user_group_permission == -1 || user_group_permission == 8">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="PathnerJobTechnician(item.id, 'endJob')">
                <v-list-item-title>เสร็จงานแล้ว</v-list-item-title>
              </v-list-item>

              <v-list-item @click="PathnerJobTechnician(item.id, 'edit')">
                <v-list-item-title>แก้ไข/ดูงาน</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="
                  drawer = true;
                  id = item.id;
                "
              >
                <v-list-item-title>รูปภาพ</v-list-item-title>
              </v-list-item>
              <v-list-item @click="cancelJob(item.id)">
                <v-list-item-title>ลบ</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>

      <dialogPathnerJobTechnician
        :dialogPathnerJobTechnician="dialogPathnerJobTechnician"
        :id="id"
        :work="id"
        :idWork="idWork"
        :actionPathnerJobTechnician="actionPathnerJobTechnician"
        :formTitlePathnerJobTechnician="formTitlePathnerJobTechnician"
        @cancleItem="dialogPathnerJobTechnician = false"
        @success="addSuccess"
        @error="addError"
      />

      <dialogImageCar :dialog="dialogImg" :id="car_id" @cancleItem="dialogImg = false" />
      <drawerFile :drawer="drawer" :id="id" type="technician_pathner" @cancleItem="drawer = false" />
    </v-card>
  </div>
</template>

<script>
import * as apiPathner_job_technician from "@/Api/apiPathner_job_technician";
import * as customAlart from "@/customJS/customAlart";
import * as apiBranches from "@/Api/apiBranches";

import moment from "moment";
import dialogPathnerJobTechnician from "@/components/dialog/dialogPathnerJobTechnician";
import dialogImageCar from "@/components/dialog/dialogImage_car";
import drawerFile from "@/components/dialog/drawerFile";
export default {
  components: {
    dialogPathnerJobTechnician,
    dialogImageCar,
    drawerFile,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: true,
      search: "",
      moment: moment,
      headers: [
        // { text: "ลำดับ", value: "no", align: "center" },
        { text: "แจ้งซ่อม | เสร็จ", value: "created_at", width: "8%" },
        // { text: "คาดว่าจะเสร็จ", value: "expected_date_end", width: "8%" },
        { text: "รูป", value: "car_img", width: "4%" },
        { text: "ลำดับรถ", value: "cars.car_no", width: "8%" },
        { text: "ยี่ห้อ", value: "cars.car_models.car_model_name", width: "12%" },
        // { text: "รุ่น", value: "cars.car_series.car_series_name", width: "10%" },
        { text: "อู่", value: "partner_technicians.partner_technician", width: "10%" },

        { text: "ทะเบียน", value: "cars.car_regis", width: "8%" },
        { text: "รายการซ่อม", value: "job_technician_pathner_list" },
        // { text: "ผู้แจ้ง", value: "user.first_name", width: "10%" },
        // { text: "ซ่อมตอน", value: "job_type" },

        { text: "สถานะ", value: "job_status", width: "8%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "5%" },
      ],
      id: "",
      idWork: 0,
      dialogPathnerJobTechnician: false,
      formTitlePathnerJobTechnician: "Add",
      actionPathnerJobTechnician: "add",
      data: [],
      // branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      branch_id: 0,
      branches: [],

      dialogImg: false,
      car_id: 0,

      drawer: false,
    };
  },
  beforeMount() {},
  async mounted() {
    await this.getBranches();
    this.getData();
  },
  beforeUpdate() {},
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async PathnerJobTechnician(id, type) {
      // console.log(id);
      this.formTitlePathnerJobTechnician = type == "edit" ? "แจ้งซ่อม (อู่นอก)" : "ปิดงาน (อู่นอก)";
      this.dialogPathnerJobTechnician = true;
      this.id = id;
      this.actionPathnerJobTechnician = type;
    },

    async getAllImg(car_id) {
      this.dialogImg = true;
      this.car_id = car_id;
    },

    async selectBranch() {
      await this.getData();
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
    },
    async getData() {
      this.loading = true;
      const data = new FormData();
      data.append("branch_id", this.branch_id);
      const response = await apiPathner_job_technician.selectWhereBranch(data);
      this.data = response.data;
      this.loading = false;
    },
    async cancelJob(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const response = apiPathner_job_technician.destroy(id);
          response.then((res) => {
            // console.log(res);
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },

    async addSuccess(value) {
      if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError(value) {
      if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
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
    async selectOnsee() {
      await this.getData();
      // console.log(value);
    },
  },
};
</script>

<style></style>
