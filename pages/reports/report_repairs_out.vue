<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 9 || user_group_permission == 11">
    <v-card>
      <v-card-title>
        <v-col cols="5">
          <v-autocomplete
            :filter="filterObject"
            no-data-text="ไม่มีข้อมูล"
            :items="dataCar"
            item-text="car_no"
            item-value="id"
            @change="selectSee"
            v-model="car_id"
            label="ค้นหาตามลำดับรถ"
            outlined
            dense
            hide-details
          >
            <template slot="selection" slot-scope="{ item }"> {{ item.car_no }} ({{ item.car_regis }}) </template>

            <template slot="item" slot-scope="{ item }"> {{ item.car_no }} ({{ item.car_regis }}) </template>
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
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.job_technician_id`]="{ item }">
          {{ "J" + item.job_technician_id }}
        </template>

        <template v-slot:[`item.created_at`]="{ item }">
          {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
        </template>

        <template v-slot:[`item.typeRepair`]="{ item }">
          <h5 v-if="item.job_type == 1" class="blue--text">ก่อนขาย</h5>
          <h5 v-if="item.job_type == 2" class="red--text">หลังขาย</h5>
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" fab x-small dark @click="PathnerJobTechnician(item.id, 'edit')">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <!-- <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
          <v-icon> mdi-delete </v-icon>
        </v-btn> -->
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
    </v-card>
  </div>
</template>

<script>
import * as apiCars from "@/Api/apiCars";
import * as apiPathner_job_technician from "@/Api/apiPathner_job_technician";
import * as customAlart from "@/customJS/customAlart";

import dialogPathnerJobTechnician from "@/components/dialog/dialogPathnerJobTechnician";

export default {
  components: {
    dialogPathnerJobTechnician,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: false,
      search: "",
      id: "",
      idWork: 0,
      dialogPathnerJobTechnician: false,
      formTitlePathnerJobTechnician: "Add",
      actionPathnerJobTechnician: "add",
      headers: [
        { text: "ลำดับ", value: "no", align: "center" },
        { text: "ชื่ออู่", value: "partner_technicians.partner_technician" },
        { text: "รายการซ่อม", value: "job_technician_pathner_list" },
        { text: "ราคาจริง", value: "job_price" },
        { text: "ซ่อมตอน", value: "typeRepair" },
        { text: "เสร็จวันที่", value: "expected_date_end" },
        { text: "โดย", value: "user.first_name" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
      data: [],
      dataCar: [],
      car_id: "",
    };
  },
  mounted() {
    this.getDataCar();
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
        item.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1 ||
        item.car_regis.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    async getDataCar() {
      const response = await apiCars.selectall();
      // console.log(response)
      this.dataCar = await response.data;
    },
    async selectSee() {
      this.data = [];
      this.loading = true;
      const response = await apiPathner_job_technician.selectWhereCar(this.car_id);
      // console.log(response)

      this.data = await response.data;
      this.loading = false;
    },
    async PathnerJobTechnician(id, type) {
      // console.log(id);
      this.formTitlePathnerJobTechnician = type == "edit" ? "แจ้งซ่อม (อู่นอก)" : "ปิดงาน (อู่นอก)";
      this.dialogPathnerJobTechnician = true;
      this.id = id;
      this.actionPathnerJobTechnician = type;
    },
    async addSuccess() {
      this.dialogPathnerJobTechnician = false;
      this.$nextTick(() => {
        this.selectSee();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialogPathnerJobTechnician = false;
      this.$nextTick(() => {
        this.selectSee();
        customAlart.TopError();
      });
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiPathner_job_technician.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              this.selectSee();
            });
          });
        }
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
  },
};
</script>

<style></style>
