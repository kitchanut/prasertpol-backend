<template>
  <div>
    <v-card>
      <v-card-title>
        <template>
          <v-btn color="primary" dark @click.stop="AddItem()">
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn>
        </template>

        <v-spacer></v-spacer>

        <v-col cols="3">
          <v-text-field v-model="search" id="search" name="search" append-icon="mdi-magnify" label="ค้นหา" single-line>
          </v-text-field>
        </v-col>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="tbl_users"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <!-- <template v-slot:item.user_active="{ item }"> -->
        <template v-slot:[`item.user_image`]="{ item }">
          <v-btn icon>
            <v-avatar size="40" @click="showImg(serverUrl + item.user_image)">
              <v-img :src="serverUrl + item.user_image"> </v-img>
            </v-avatar>
          </v-btn>
        </template>

        <template v-slot:[`item.user_active`]="{ item }">
          <v-btn v-if="item.user_active == 1" x-small color="success" dark>เปิดใช้งาน</v-btn>
          <v-btn v-else x-small color="red" dark>ปิดการใช้งาน</v-btn>
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
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
        @success="addSuccess()"
        @error="addError()"
      />
      <dialogImage :dialog="dialogImg" :imgUrl="imgUrl" @cancleItem="dialogImg = false" />
    </v-card>
  </div>
</template>

<script>
import * as apiUsers from "@/Api/apiUsers";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogUser";
import dialogImage from "@/components/dialog/dialogImage";

export default {
  components: {
    dialogNew,
    dialogImage,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      loading: true,
      search: "",
      dialog: false,
      id: "",
      formTitle: "Add",
      action: "add",
      imgUrl: "",
      dialogImg: false,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      headers: [
        { text: "รูปภาพ", value: "user_image" },
        { text: "ชื่อ นามสกุล", value: "full_name" },
        // { text: "ชื่อผู้ใช้งาน", value: "email" },
        { text: "ตำแหน่ง", value: "user_group.user_group_name" },
        { text: "ทีมสาขา", value: "branch_team.branch_team_name" },
        { text: "สาขาย่อย", value: "branch.branch_name" },
        { text: "ทีม", value: "team.team_name", width: "10%" },
        { text: "เบอร์", value: "tel" },
        { text: "ตำแหน่ง (จำนวน)", value: "user_sub_groups" },
        { text: "สถานะ", value: "user_active", width: "5%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
      tbl_users: [],
    };
  },
  mounted() {
    this.getdata();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },
    async getdata() {
      const response = await apiUsers.index();
      if (this.user_group_permission == 2) {
        if (this.branch_id == 1) {
          let array = [];
          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].user_group_id == 3 && response.data[index].branch_id == this.branch_id) {
              array.push(response.data[index]);
            }
          }
          this.tbl_users = array;
        } else {
          let array = [];
          for (let index = 0; index < response.data.length; index++) {
            if (this.branch_id == response.data[index].branch_id) {
              array.push(response.data[index]);
            }
          }
          this.tbl_users = array;
        }
      } else {
        this.tbl_users = response.data;
      }
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

    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiUsers.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              this.getdata();
            });
          });
        }
      });
    },

    async addSuccess() {
      this.dialog = false;
      this.$nextTick(() => {
        this.getdata();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      this.$nextTick(() => {
        this.getdata();
        customAlart.TopError();
      });
    },
  },
  watch: {
    tbl_users() {
      const self = this;
      return this.tbl_users.map(function (item, index) {
        item.full_name = item.first_name + " " + item.last_name;
      });
    },
  },
};
</script>

<style></style>
