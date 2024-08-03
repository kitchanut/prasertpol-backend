<template>
  <div>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="9" class="d-flex align-center">
            <v-btn
              @click="handleDownload()"
              color="success"
              class="mr-5"
              style="min-width: 0px; width: 40px; height: 40px"
            >
              <v-icon>mdi-microsoft-excel</v-icon>
            </v-btn>
            <dateSelect2 @timeSelect="selectTimeStart" />
          </v-col>
        </v-row>

        <v-spacer></v-spacer>

        <v-col cols="3">
          <v-text-field
            v-model="search"
            id="search"
            name="search"
            append-icon="mdi-magnify"
            label="ค้นหา"
            outlined
            dense
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
        <template v-slot:[`item.file`]="{ item }">
          <div v-if="item.file == null">
            <span></span>
          </div>
          <div v-else>
            <v-btn icon>
              <v-avatar size="40" @click="showImg(serverUrl + item.file)">
                <v-img :src="serverUrl + item.file"> </v-img>
              </v-avatar>
            </v-btn>
          </div>
        </template>
        <template v-slot:[`item.date`]="{ item }">
          <span>
            {{ $moment(item.date).format("DD/MM/YYYY") }}
          </span>
        </template>

        <template v-slot:[`item.working_id`]="{ item }">
          <span v-if="item.working_id"> W{{ item.working_id }} </span>
        </template>

        <template v-slot:[`item.money`]="{ item }">
          {{
            Number(item.money).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.type`]="{ item }">
          <span v-if="item.type == 1">ตัวรถ</span>
          <span v-else>อื่น ๆ</span>
        </template>

        <template v-slot:[`item.type_bill`]="{ item }">
          <span v-if="item.type == 1">เงินสด</span>
          <span v-else>ใบกำกับภาษี</span>
        </template>

        <template v-slot:[`item.status_check`]="{ item }">
          <span style="color: green" v-if="item.status_check == 1">เช็คแล้ว</span>
          <span style="color: red" v-else>ยังไม่เช็ค</span>
        </template>
      </v-data-table>

      <dialogAddIncome
        :dialog="dialogDialogAddIncome"
        :id="idDialogAddIncome"
        :action="actionDialogAddIncome"
        :formTitle="formTitleDialogAddIncome"
        @cancleItem="dialogDialogAddIncome = false"
        @success="addSuccess"
        @error="addError"
      />

      <dialogImage :dialog="dialogImg" :imgUrl="imgUrl" @cancleItem="dialogImg = false" />
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import * as apiBranches from "@/Api/apiBranches";
import * as apiAdd_income from "@/Api/apiAdd_income";

import * as customAlart from "@/customJS/customAlart";
import dialogAddIncome from "@/components/dialog/dialogAdd_income";
import dialogImage from "@/components/dialog/dialogImage";
import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    dialogAddIncome,
    dateSelect2,
    dialogImage,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      loading: true,
      search: "",

      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),

      idDialogAddIncome: "",
      formTitleDialogAddIncome: "Add",
      actionDialogAddIncome: "add",
      dialogDialogAddIncome: false,

      headers: [
        { text: "วันที่", value: "date", width: "8%" },
        { text: "ข้อมูลจาก", value: "main_type", width: "10%" },
        { text: "รหัสงาน", value: "working_id", width: "8%" },
        { text: "ลำดับรถ", value: "car.car_no", width: "8%" },
        // { text: "เลขธุรกรรม", value: "no", width: "8%" },
        { text: "ร้านค้า/ลูกค้า", value: "shop", width: "15%" },
        { text: "รายการ", value: "detail" },

        // { text: "บิล", value: "type_bill" },
        { text: "จำนวนเงิน", value: "money", width: "10%", align: "end" },
        // { text: "สาขา", value: "branch.branch_name" },
        // { text: "สถานะ", value: "status_check" },
        // { text: "ไฟล์", value: "file" },
        // { text: "จัดการ", value: "actions", sortable: false, width: "8%" },
        { text: "สาขา", value: "branch.branch_name" },
      ],
      data: [],
      years: [],
      branches: [],
      money_month: null,
      money_year: null,
      imgUrl: "",
      dialogImg: false,

      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      await this.getData();
    },
    async getData() {
      this.loading = true;
      this.data = [];
      const data = new FormData();
      // data.append("branch_id", this.branch_id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiAdd_income.index_where(data);
      console.log(response);
      this.data = await response.data;
      this.loading = false;
    },
    async editItem(item) {
      this.formTitleDialogAddOutlay = "แก้ไข้";
      this.dialogDialogAddIncome = true;
      this.idDialogAddOutlay = "";
      this.actionDialogAddOutlay = "Edit";
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiAdd_income.delete_income(id);
          respone.then(async (res) => {
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

    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },
    async AddIncome() {
      this.formTitleDialogAddIncome = "เพิ่มข้อมูล";
      this.dialogDialogAddIncome = true;
      this.idDialogAddIncome = "";
      this.actionDialogAddIncome = "add";
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
      this.loading = false;
      // console.log(response);
      // await this.getData();
    },

    async addSuccess(value) {
      if (value == "Income") {
        this.dialogDialogAddIncome = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
        // console.log(this.dialogDialogAddIncome);
      });
    },
    async addError(value) {
      if (value == "Income") {
        this.dialogDialogAddIncome = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
    handleDownload() {
      const filterVal = [];
      for (let index = 0; index < this.headers.length; index++) {
        filterVal.push(this.headers[index].value);
      }
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "รายงานรายรับ (" + moment().format("DD/MM/YYYY ( HH:mm น.)") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "car.car_no") {
            return v.car.car_no;
          } else if (j == "branch.branch_name") {
            return v.branch.branch_name;
          } else {
            return v[j];
          }
        })
      );
    },
  },
  watch: {},
};
</script>

<style></style>
