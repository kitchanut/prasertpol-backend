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
        <!-- <template v-slot:item.car_type_active="{ item }">
         -->
        <template v-slot:[`item.car_type_icon`]="{ item }">
          <v-icon> {{ item.car_type_icon }} </v-icon>
        </template>

        <template v-slot:[`item.car_type_main`]="{ item }">
          <span v-if="item.car_type_main == 1">เก๋ง</span>
          <span v-else-if="item.car_type_main == 2">กระบะ</span>
          <span v-else>N/A</span>
        </template>

        <template v-slot:[`item.car_type_code_color`]="{ item }">
          <span
            :style="[{ 'background-color': item.car_type_code_color }, { padding: '2px' }, { 'border-radius': '3px' }]"
          >
            {{ item.car_type_code_color }}
          </span>
        </template>
        <template v-slot:[`item.car_type_active`]="{ item }">
          <v-btn v-if="item.car_type_active == '1'" x-small color="success" dark>เปิดใช้งาน</v-btn>
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
    </v-card>
  </div>
</template>

<script>
import * as apiCar_types from "@/Api/apiCar_types";
import * as customAlart from "@/customJS/customAlart";

import dialogNew from "@/components/dialog/dialogCarType";
export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      loading: true,
      search: "",
      dialog: false,
      id: "",
      formTitle: "Add",
      action: "add",
      headers: [
        { text: "ลำดับ", value: "no", width: "7%", align: "center" },

        { text: "รหัสสี", value: "car_type_code_color", width: "8%" },
        { text: "ไอคอน", value: "car_type_icon", width: "8%" },
        { text: "ประเภทหลัก", value: "car_type_main", width: "10%" },
        { text: "ประเภทรถไทย", value: "car_type_name", width: "10%" },
        { text: "ประเภทรถอังกฤษ", value: "car_type_name_en", width: "10%" },
        { text: "สถานะ", value: "car_type_active", width: "5%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "7%" },
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
      const response = await apiCar_types.index();
      this.data = response.data;
      // console.log(response.data);
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
          const respone = apiCar_types.destroy(id);
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
      await this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      await this.$nextTick(() => {
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
