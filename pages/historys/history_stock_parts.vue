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
              no-data-text="ไม่มีข้อมูล"
              item-value="id"
              label="สาขา"
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
              v-model="stock_part_id"
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

        <template v-slot:[`item.stock_type`]="{ item }">
          <div class="blue--text" v-if="item.stock_type == 1">รับเข้า</div>
          <div class="orange--text" v-if="item.stock_type == 2">เบิก</div>
          <div class="red--text" v-if="item.stock_type == 3">ปรับสต็อก</div>
          <div class="brown--text" v-if="item.stock_type == 4">คืน</div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as apiTransition_stock_part from "@/Api/apiTransition_stock_part";
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
      stock_part_id: "",
      waitingPushdata: true,
      headers: [
        { text: "ลำดับ", value: "no", width: "7%", align: "center" },
        // { text: "ชื่ออะไหล่", value: "car_part.car_part_name", width: "15%" },
        {
          text: "จำนวนก่อนหน้า",
          value: "car_part_amount_before",
          width: "15%",
        },
        { text: "จำนวน", value: "car_part_amount", width: "15%" },
        { text: "คงเหลือ", value: "car_part_balance", width: "15%" },
        { text: "วันที่", value: "created_at", width: "20%" },
        { text: "สาขา", value: "branch.branch_name", width: "15%" },
        { text: "สถานะ", value: "stock_type", width: "15%" },
      ],
      branches: [],
      dataParts: [],
      dataPartsInBranch: [],
      dataTransitionParts: [],
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
      // console.log(response.data);
    },
    async getDataParts() {
      const response = await apiStock_part.index();
      this.dataParts = response.data;
      // console.log(response);
    },
    async selectBranch() {
      this.dataPartsInBranch = [];
      this.stock_part_id = "";
      this.data = [];
      for (let index = 0; index < this.dataParts.length; index++) {
        if (this.dataParts[index].branch_id == this.branch_id) {
          this.dataPartsInBranch.push(this.dataParts[index]);
        }
      }
    },
    async selectSee() {
      this.data = [];
      this.loading = true;
      const response = await apiTransition_stock_part.selectWhereJob(
        this.stock_part_id
      );
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
