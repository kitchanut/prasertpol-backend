<template>
  <div>
    <v-card>
      <v-card-title>
        <!-- <template>
          <v-btn color="primary" dark @click.stop="AddItem()">
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn>
        </template> -->

        <v-autocomplete
          v-model="branch_team_id"
          :items="dataSelectBranch_teams"
          item-text="branch_team_name"
          item-value="id"
          label="ทีมสาขา"
          no-data-text="ไม่มีข้อมูล"
          outlined
          dense
          hide-details
          :readonly="user_group_permission == 2 ? true : false"
          @change="changeBranch_team"
        >
        </v-autocomplete>

        <v-spacer></v-spacer>

        <v-col cols="3">
          <v-text-field
            v-model="search"
            id="search"
            name="search"
            append-icon="mdi-magnify"
            label="ค้นหา"
            single-line
            outlined
            dense
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
        dense
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template v-slot:[`item.cars.car_no`]="{ item }">
          <div>
            <b>{{ item.cars.car_no }}</b>
          </div>
          <div>{{ item.car_model_name }} : {{ item.car_series_name }}</div>
          <div>{{ item.car_regis }}</div>
        </template>

        <template v-slot:[`item.customer_name`]="{ item }">
          <div v-html="item.customer_name"></div>
        </template>

        <template v-slot:[`item.sale_detail`]="{ item }">
          <div v-html="item.sale_detail"></div>
        </template>

        <template v-slot:[`item.appointment_banks.down`]="{ item }">
          {{
            Number(item.appointment_banks.down).toLocaleString("th-TH", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.sumFinancial`]="{ item }">
          {{
            Number(item.sumFinancial).toLocaleString("th-TH", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.remain`]="{ item }">
          {{
            Number(item.remain).toLocaleString("th-TH", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            v-if="user_group_permission != 2"
            color="primary"
            fab
            x-small
            dark
            @click="ReceiveDown(item.cars.car_no, item.id)"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <dialogReceiveDown
      :dialog="dialogReceiveDown"
      :idWork="id"
      :car_no="car_no"
      @cancleItem="dialogReceiveDown = false"
    />
  </div>
</template>

<script>
import * as apiWorks from "@/Api/apiWorks";
import * as apiBranch_teams from "@/Api/apiBranch_teams";

import dialogReceiveDown from "@/components/dialog/dialogReceiveDown";

export default {
  components: {
    dialogReceiveDown,
  },
  data() {
    return {
      loading: true,
      dialogReceiveDown: false,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      id: "",
      car_no: "",

      search: "",
      dialog: false,

      formTitle: "Add",
      action: "add",
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      headers: [
        // { text: "ลำดับ", value: "no", width: "8%" },
        { text: "รหัสงาน", value: "working_id", width: "8%" },
        { text: "ลำดับรถ", value: "cars.car_no" },
        // { text: "รถ", value: "car" },
        { text: "ลูกค้า", value: "customer_name", width: "12%" },
        { text: "เซล", value: "sale_name", width: "12%" },
        { text: "ทีม/สาขา/ทีมย่อย", value: "sale_detail", width: "15%" },
        { text: "เงินดาวน์", value: "appointment_banks.down", width: "9%" },
        { text: "เงินที่ได้รับ", value: "sumFinancial", width: "9%" },
        { text: "ค้างดาวน์", value: "remain", width: "9%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "5%" },
      ],
      data: [],
      dataAll: [],
      dataSelectBranch_teams: [],
      branch_team_id: "",
    };
  },
  async mounted() {
    await this.getBranch_teams();
    await this.getData();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async getData() {
      const response = await apiWorks.followDown();
      this.data = response.data;
      this.dataAll = response.data;
      // console.log(response.data);
      this.loading = false;

      this.$nextTick(() => {
        if (this.user_group_permission == 3 || this.user_group_permission == 2) {
          this.branch_team_id = this.$auth.$storage.getLocalStorage("userDataOrg-branch_team_id");
          this.changeBranch_team();
        }
      });
    },
    async getBranch_teams() {
      const response = await apiBranch_teams.select();
      this.dataSelectBranch_teams = response.data;
      this.dataSelectBranch_teams.unshift({
        id: -1,
        branch_team_name: "ทั้งหมด",
      });
    },
    changeBranch_team() {
      this.data = this.dataAll.filter((item) => {
        return item.branch_team_id == this.branch_team_id || this.branch_team_id == -1;
      });
    },
    async ReceiveDown(car_no, work_id) {
      this.car_no = car_no;
      this.id = work_id;
      this.dialogReceiveDown = true;
    },
    // async AddItem() {
    //   this.formTitle = "เพิ่มข้อมูล";
    //   this.dialog = true;
    //   this.id = "";
    //   this.action = "add";
    // },
    // async editItem(item) {
    //   this.formTitle = "แก้ไขข้อมูล";
    //   this.dialog = true;
    //   this.id = item;
    //   this.action = "edit";
    // },

    // async deleteItem(id) {
    //   var isConfirmed = customAlart.Confirmed();
    //   await isConfirmed.then((result) => {
    //     if (result == true) {
    //       const respone = apiWorks.destroy(id);
    //       respone.then(async (res) => {
    //         if (res.status == 200) {
    //           customAlart.TopSuccess();
    //         } else {
    //           customAlart.TopError();
    //         }
    //         this.$nextTick(() => {
    //           this.getData();
    //         });
    //       });
    //     }
    //   });
    // },
    // async addSuccess() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.getData();
    //     customAlart.TopSuccess();
    //   });
    // },
    // async addError() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.getData();
    //     customAlart.TopError();
    //   });
    // },
  },
  watch: {
    dataAll() {
      this.dataAll.map((item, key) => {
        item.no = key + 1;
        item.working_id = "W" + item.id;
        item.customer_name = item.customer_name + "<br>" + item.customer_tel;
        item.remain = Number(item.appointment_banks.down) - Number(item.sumFinancial);
        item.sale_detail = item.branch_team_name + "<br>" + item.branch_name + "<br>" + item.team_name;
      });
    },
  },
};
</script>

<style></style>
