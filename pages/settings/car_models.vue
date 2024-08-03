<template>
  <div v-if="user_group_permission == -1">
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
        <template v-slot:[`item.car_model_image`]="{ item }">
          <v-btn icon v-if="item.car_model_image != null">
            <v-avatar size="40" @click="showImg(serverUrl + '/' + item.car_model_image)">
              <v-img :src="serverUrl + '/' + item.car_model_image"> </v-img>
            </v-avatar>
          </v-btn>
        </template>

        <template v-slot:[`item.car_model_code_color`]="{ item }">
          <span
            :style="[{ 'background-color': item.car_model_code_color }, { padding: '2px' }, { 'border-radius': '3px' }]"
          >
            {{ item.car_model_code_color }}
          </span>
        </template>
        <template v-slot:[`item.car_model_active`]="{ item }">
          <v-btn v-if="item.car_model_active == '1'" x-small color="success" dark>เปิดใช้งาน</v-btn>
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
import * as apiCar_models from "@/Api/apiCar_models";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogCarModel";
import dialogImage from "@/components/dialog/dialogImage";

export default {
  components: {
    dialogNew,
    dialogImage,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      dialogImg: false,
      imgUrl: null,
      loading: true,
      search: "",
      dialog: false,
      formTitle: "Add",
      action: "add",
      id: "",
      headers: [
        {
          text: "รูปภาพ",
          value: "car_model_image",
          align: "center",
          width: "10%",
        },
        { text: "รหัสสี", value: "car_model_code_color", width: "10%" },
        { text: "ยี่ห้อ", value: "car_model_name", width: "15%" },
        { text: "สถานะ", value: "car_model_active", width: "5%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "5%" },
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
      const response = await apiCar_models.index();
      this.data = response.data;
      // console.log(this.data);
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
          const respone = apiCar_models.destroy(id);
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
    async addSuccess() {
      this.dialog = false;
      this.$nextTick(async () => {
        await this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      this.$nextTick(async () => {
        await this.getData();
        customAlart.TopError();
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
