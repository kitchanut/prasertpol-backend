<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-title>
        <template>
          <!-- <v-btn color="primary" dark @click.stop="AddItem()">
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn> -->
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
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template v-slot:[`item.pictureUrl`]="{ item }">
          <v-btn icon>
            <v-avatar
              size="40"
              @click="
                imgUrl = item.pictureUrl;
                dialogImg = true;
              "
            >
              <v-img :src="item.pictureUrl"> </v-img>
            </v-avatar>
          </v-btn>
        </template>

        <template v-slot:[`item.user_name`]="{ item }">
          <span v-if="item.user"> {{ item.user.first_name }} {{ item.user.last_name }} </span>
        </template>

        <template v-slot:[`item.user.user_active`]="{ item }">
          <div v-if="item.user">
            <v-btn v-if="item.user.user_active == 1" x-small color="success" dark>เปิดใช้งาน</v-btn>
            <v-btn v-else x-small color="red" dark>ปิดการใช้งาน</v-btn>
          </div>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" fab x-small dark @click="editItem(item.id)">
            <v-icon> mdi-pencil</v-icon>
          </v-btn>
          <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

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
  </div>
</template>

<script>
import * as apiUserLine from "@/Api/apiUserLine";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogUserLine";
import dialogImage from "@/components/dialog/dialogImage";

export default {
  components: {
    dialogNew,
    dialogImage,
  },
  data() {
    return {
      loading: true,
      search: "",
      dialogImg: false,
      imgUrl: "",
      dialog: false,
      id: "",
      formTitle: "Add",
      action: "add",
      headers: [
        { text: "ID", value: "id", width: "7%", align: "center" },
        { text: "picture", value: "pictureUrl", width: "8%" },
        { text: "displayName", value: "displayName", width: "20%" },
        { text: "ชื่อในระบบ", value: "user_name", width: "20%" },
        {
          text: "สังกัดสาขา",
          value: "user.branch.branch_team.branch_team_name",
        },
        { text: "สถานะ", value: "user.user_active", width: "10%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
      data: [],
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
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
    async getData() {
      const response = await apiUserLine.index();
      this.data = response.data;
      console.log(this.data);
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
          const respone = apiUserLine.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
            await this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },
    async addSuccess() {
      this.dialog = false;
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
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
  },
};
</script>

<style></style>
