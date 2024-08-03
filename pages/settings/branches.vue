<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-title>
        <template>
          <v-btn v-if="user_group_permission == -1" color="primary" dark @click="AddItem()">
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn>

          <v-btn
            class="ml-1"
            v-if="user_group_permission == 11 || user_group_permission == -1"
            color="blue-grey"
            dark
            @click="AddMonney()"
          >
            <v-icon left>mdi-plus</v-icon>
            เพิ่มเงินให้กับสาขา
          </v-btn>
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
      >
        <template v-slot:[`item.branch_code_color`]="{ item }">
          <span
            :style="[{ 'background-color': item.branch_code_color }, { padding: '2px' }, { 'border-radius': '3px' }]"
          >
            {{ item.branch_code_color }}
          </span>
        </template>
        <!-- <template v-slot:[`item.branch_image`]="{ item }">
        <v-btn icon v-if="item.branch_image != null">
          <v-avatar
            size="40"
            @click="showImg(serverUrl + '/' + item.branch_image)"
          >
            <v-img :src="serverUrl + '/' + item.branch_image"> </v-img>
          </v-avatar>
        </v-btn>
      </template> -->

        <template v-slot:[`item.branch_money`]="{ item }">
          {{
            Number(item.branch_money).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <!-- <template v-slot:item.branch_active="{ item }">
         -->
        <template v-slot:[`item.branch_active`]="{ item }">
          <v-btn v-if="item.branch_active == '1'" x-small color="success" dark>เปิดใช้งาน</v-btn>
          <v-btn v-else x-small color="red" dark>ปิดการใช้งาน</v-btn>
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }" v-if="user_group_permission == -1">
          <v-btn color="primary" fab x-small dark @click="editItem(item.id)">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
            <v-icon> mdi-delete </v-icon>
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
      <dialogAddmoney
        :dialog="dialogDialogAddmoney"
        :id="idDialogAddmoney"
        :action="actionDialogAddmoney"
        :formTitle="formTitleDialogAddmoney"
        @cancleItem="dialogDialogAddmoney = false"
        @success="addSuccess"
        @error="addError"
      />

      <dialogImage :dialog="dialogImg" :imgUrl="imgUrl" @cancleItem="dialogImg = false" />
    </v-card>
  </div>
</template>

<script>
import * as apiBranches from "@/Api/apiBranches";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogBranch";
import dialogImage from "@/components/dialog/dialogImage";
import dialogAddmoney from "@/components/dialog/dialogAdd_money";

export default {
  components: {
    dialogNew,
    dialogImage,
    dialogAddmoney,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      loading: true,
      search: "",
      dialog: false,
      imgUrl: "",
      dialogImg: false,
      // user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      // branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      id: "",
      formTitle: "Add",
      action: "add",

      idDialogAddmoney: "",
      formTitleDialogAddmoney: "Add",
      actionDialogAddmoney: "add",
      dialogDialogAddmoney: false,

      headers: [
        // {
        //   text: "รูปภาพ",
        //   value: "branch_image",
        // },
        {
          text: "รหัสสี",
          value: "branch_code_color",
        },
        // { text: "ชื่อบริษัท", value: "company_name", width: "22%" },
        { text: "ทีม", value: "branch_team.branch_team_name", width: "13%" },

        { text: "สาขา", value: "branch_name", width: "10%" },
        { text: "จังหวัด", value: "province.name_th", width: "10%" },
        { text: "เบอร์", value: "branch_tel", width: "8%" },
        {
          text: "เงินสาขา (บ.)",
          value: "branch_money",
        },
        { text: "สถานะ", value: "branch_active", width: "8%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
      data: [],
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
    async AddMonney() {
      this.formTitleDialogAddmoney = "เพิ่มข้อมูล";
      this.dialogDialogAddmoney = true;
      this.idDialogAddmoney = "";
      this.actionDialogAddmoney = "add";
    },
    async getData() {
      this.data = [];
      const response = await apiBranches.index();
      // console.log(response.data);
      this.data = response.data;
      this.loading = false;
    },
    async AddItem() {
      this.formTitle = "เพิ่มข้อมูล";
      this.dialog = true;
      this.id = "";
      this.action = "add";
    },
    async editItem(item) {
      this.formTitle = "แก้ไขข้อมูล";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },
    async addSuccess() {
      this.dialog = false;
      this.dialogDialogAddmoney = false;
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      this.dialogDialogAddmoney = false;
      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiBranches.destroy(id);
          respone.then(async (res) => {
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
  },
  watch: {},
};
</script>

<style></style>
