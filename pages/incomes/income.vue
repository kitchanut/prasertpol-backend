<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 2 ||
      user_group_permission == 10 ||
      user_group_permission == 11 ||
      user_group_permission == 12
    "
  >
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="2" class="mt-3">
            <v-btn class="ml-1" color="blue-grey" dark @click="AddIncome()">
              <v-icon left>mdi-plus</v-icon>
              เพิ่มรายรับ
            </v-btn>
          </v-col>

          <!-- <v-col
          cols="10"
          v-if="user_group_permission == -1 || user_group_permission == 11"
        > -->

          <v-col cols="10">
            <dateSelect @tineSelect="selectTimeStart" />
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
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
        </v-row>
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
          <span style="color: green" v-if="item.status_check == 1"
            >เช็คแล้ว</span
          >
          <span style="color: red" v-else>ยังไม่เช็ค</span>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <!-- <v-list-item
                v-if="
                  user_group_permission == 11 || user_group_permission == -1
                "
                @click="comfirm(item.id)"
              >
                <v-list-item-title>ตรวจผ่าน</v-list-item-title>
              </v-list-item> -->
              <v-list-item @click="deleteItem(item.id)">
                <v-list-item-title>ลบ</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
      <dialogImage
        :dialog="dialogImg"
        :imgUrl="imgUrl"
        @cancleItem="dialogImg = false"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiBranches from "@/Api/apiBranches";
import * as apiAdd_income from "@/Api/apiAdd_income";

import * as customAlart from "@/customJS/customAlart";
import dialogAddIncome from "@/components/dialog/dialogAdd_income";
import dialogImage from "@/components/dialog/dialogImage";
import dateSelect from "@/components/DateSelect/dateSelect";

export default {
  components: {
    dialogAddIncome,
    dateSelect,
    dialogImage,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      loading: true,
      search: "",
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      idDialogAddIncome: "",
      formTitleDialogAddIncome: "Add",
      actionDialogAddIncome: "add",
      dialogDialogAddIncome: false,

      headers: [
        {
          text: "วันที่",
          value: "date",
        },
        {
          text: "รหัสงาน",
          value: "working_id",
        },
        { text: "ลำดับรถ", value: "car.car_no" },
        { text: "เลขธุรกรรม", value: "no" },
        {
          text: "ร้านค้า/ลูกค้า",
          value: "shop",
        },
        {
          text: "รายการ",
          value: "detail",
        },

        // { text: "ประเภท", value: "type" },
        // { text: "บิล", value: "type_bill" },
        { text: "จำนวนเงิน", value: "money" },
        { text: "สาขา", value: "branch.branch_name" },
        // { text: "สถานะ", value: "status_check" },
        { text: "ไฟล์", value: "file" },
        { text: "จัดการ", value: "actions", sortable: false },
      ],
      data: [],
      years: [],
      branches: [],
      money_month: null,
      money_year: null,
      imgUrl: "",
      dialogImg: false,
    };
  },
  mounted() {
    this.getBranches();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async comfirm(id) {
      var isConfirmed = customAlart.ConfirmedStatus();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiAdd_income.comfirm_income(id);
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
    async selectTimeStart(time) {
      this.branch_id = time.branch_id;
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;

      await this.getData();
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
    async getData() {
      this.loading = true;
      this.data = [];
      const data = new FormData();
      data.append("branch_id", this.branch_id);
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
  },
  watch: {},
};
</script>

<style></style>
