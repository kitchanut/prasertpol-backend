<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-title>
        <template>
          <v-col cols="4">
            <v-autocomplete
              v-model="branch_id"
              :items="branches"
              :disabled="waitingPushdata"
              item-text="branch_name"
              item-value="id"
              label="สาขา"
              no-data-text="ไม่มีข้อมูล"
              @change="selectBranch"
              outlined
              dense
              hide-details
            >
            </v-autocomplete>
          </v-col>

          <v-col cols="4">
            <v-autocomplete
              v-if="branches != ''"
              v-model="car_part_id"
              :items="dataPartsInBranch"
              item-text="car_part.car_part_name"
              item-value="id"
              @change="selectSee"
              label="อะไหล่"
              outlined
              dense
              hide-details
            >
            </v-autocomplete>
          </v-col>
        </template>

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
        <template v-slot:[`item.created_at`]="{ item }">
          <h5>
            {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>
        <template v-slot:[`item.job_technician_id`]="{ item }">
          <h5 v-if="item.job_technician_id == 0">-</h5>
          <h5 v-else>
            {{ "J" + item.job_technician_id }}
          </h5>
        </template>

        <template v-slot:[`item.withdraw_tpye`]="{ item }">
          <div class="blue--text" v-if="item.withdraw_tpye == 1">ซ่อม</div>
          <div class="orange--text" v-if="item.withdraw_tpye == 2">ขาย</div>
          <div class="red--text" v-if="item.withdraw_tpye == 3">
            มอบให้ลูกค้า
          </div>
        </template>

        <template v-slot:[`item.withdraw_part_status`]="{ item }">
          <div class="blue--text" v-if="item.withdraw_part_status == 1">
            แจ้งเบิก
          </div>
          <div class="orange--text" v-if="item.withdraw_part_status == 2">
            รับอะไหล่
          </div>
          <div class="red--text" v-if="item.withdraw_part_status == 3">
            แจ้งคืนอะไหล่
          </div>
          <div class="brown--text" v-if="item.withdraw_part_status == 4">
            รับคืนอะไหล่
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as apiTransition_part from "@/Api/apiTransition_part";

import * as apiStock_part from "@/Api/apiStock_part";
import * as apiBranches from "@/Api/apiBranches";

export default {
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      loading: true,
      search: "",
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      car_part_id: "",
      waitingPushdata: true,
      headers: [
        { text: "ลำดับ", value: "no", width: "7%", align: "center" },
        // { text: "ชื่ออะไหล่", value: "car_part.car_part_name", width: "15%" },
        { text: "วันที่", value: "created_at", width: "15%" },
        { text: "รหัสงานซ่อม", value: "job_technician_id", width: "13%" },
        { text: "จำนวนที่ต้องการ", value: "car_part_amount", width: "15%" },
        { text: "จำนวนที่ได้", value: "withdraw_part_amount", width: "10%" },
        { text: "คงเหลือ", value: "balance_part_amount", width: "8%" },
        { text: "ประเภอ", value: "withdraw_tpye", width: "10%" },
        { text: "สถานะ", value: "withdraw_part_status", width: "15%" },
      ],
      branches: [],
      dataParts: [],
      dataPartsInBranch: [],
      data: [],
    };
  },
  async mounted() {
    await this.getBranches();
    await this.getDataParts();
    this.selectBranch();
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
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.waitingPushdata = false;
    },
    async getDataParts() {
      const response = await apiStock_part.index();
      this.dataParts = response.data;
    },
    async selectBranch() {
      this.dataPartsInBranch = [];
      this.car_part_id = "";
      this.data = [];
      if (this.branch_id == 0) {
        for (let index = 0; index < this.dataParts.length; index++) {
          this.dataPartsInBranch.push(this.dataParts[index]);
        }
      } else {
        for (let index = 0; index < this.dataParts.length; index++) {
          if (this.dataParts[index].branch_id == this.branch_id) {
            this.dataPartsInBranch.push(this.dataParts[index]);
          }
        }
      }
    },
    async selectSee() {
      this.data = [];
      this.loading = true;
      const response = await apiTransition_part.selectWhere(this.car_part_id);
      this.data = await response.data;
      this.loading = false;
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
