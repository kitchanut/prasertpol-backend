<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 6 ||
      user_group_permission == 7 ||
      user_group_permission == 11
    "
  >
    <v-card>
      <v-card-title>
        <template>
          <v-btn color="primary" dark @click.stop="AddItem()">
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn>

          <v-col cols="3" v-if="user_group_permission == -1">
            <v-autocomplete
              v-model="branch_id"
              :items="branches"
              item-text="branch_name"
              no-data-text="ไม่มีข้อมูล"
              item-value="id"
              label="สาขา"
              outlined
              dense
              hide-details
              @change="selectBranch"
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
        <template v-slot:[`item.withdraw_part_status`]="{ item }">
          <h5 v-if="item.withdraw_part_status == '1'" class="orange--text">
            รอรับอะไหล่
          </h5>
          <h5 v-if="item.withdraw_part_status == '2'" class="blue--text">
            รับอะไหล่
          </h5>
          <h5 v-if="item.withdraw_part_status == '3'" class="red--text">
            รอรับคืนไหล่
          </h5>
          <h5 v-if="item.withdraw_part_status == '4'" class="red--text">
            ได้รับคืนแล้ว
          </h5>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            color="primary"
            v-if="item.withdraw_part_status == '1'"
            x-small
            dark
            @click="editItem(item.id)"
          >
            รับอะไหล่
          </v-btn>

          <v-btn
            color="error"
            v-if="item.withdraw_part_status == '3'"
            x-small
            dark
            @click="editItem(item.id)"
          >
            คืนอะไหล่
          </v-btn>
        </template>
      </v-data-table>

      <dialogNew
        :dialog="dialog"
        :id="id"
        :action="action"
        :formTitle="formTitle"
        @cancleItem="dialog = false"
        @success="addSuccess"
        @error="addError"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiWithdraw_part from "@/Api/apiWithdraw_part";
import * as apiBranches from "@/Api/apiBranches";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogWithdrawPart";

export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      loading: true,
      search: "",

      id: "",
      dialog: false,
      formTitle: "Add",
      action: "add",

      headers: [
        { text: "ลำดับรถ", value: "car.car_no" },
        { text: "ทะเบียน", value: "car.car_regis" },
        { text: "ชื่ออะไหล่", value: "part.car_part_name" },
        { text: "จำนวน", value: "car_part_amount" },
        { text: "เบิกได้", value: "withdraw_part_amount" },
        { text: "คงเหลือ", value: "balance_part_amount" },
        { text: "พนักงาน", value: "user.first_name" },
        { text: "สาขา", value: "branch.branch_name" },
        { text: "สถานะ", value: "withdraw_part_status" },
        { text: "จัดการ", value: "actions", sortable: false, width: "12%" },
      ],
      data: [],
      branches: [],
      timeSelect: [
        { value: 1, title: "วันนี้" },
        { value: 2, title: "เมื่อวาน" },
        { value: 3, title: "7 วันที่แล้ว" },
        { value: 4, title: "30 วันที่แล้ว" },
        { value: 5, title: "เดือนนี้" },
        { value: 6, title: "เดือนที่แล้ว" },
        { value: 7, title: "3 เดือนที่แล้ว" },
        { value: 8, title: "6 เดือนที่แล้ว" },
        { value: 9, title: "ปีนี้" },
        { value: 10, title: "3 ปีที่แล้ว" },
      ],
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      disabledTime: false,
    };
  },
  async mounted() {
    this.getData();
    await this.getBranches();
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
    async getData() {
      const data = new FormData();
      data.append("branch_id", this.branch_id);

      const response = await apiWithdraw_part.getWithdraw(data);
      // console.log(response);
      this.data = await response.data;
    },

    async AddItem() {
      this.formTitle = "เพิ่มข้อมูล";
      this.dialog = true;
      this.id = "";
      this.action = "add";
    },

    async editItem(item) {
      this.formTitle = "เบิกออกจากคลัง";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },
    async addSuccess(value) {
      if (value == "withdraw") {
        this.dialog = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError(value) {
      if (value == "withdraw") {
        this.dialog = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
    async selectBranch() {
      await this.getData();
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
      this.loading = false;
      // console.log(response);
    },
  },
  watch: {},
};
</script>

<style></style>
