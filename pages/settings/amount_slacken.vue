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
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template v-slot:[`item.amount_slacken_code_color`]="{ item }">
          <span
            :style="[
              { 'background-color': item.amount_slacken_code_color },
              { padding: '2px' },
              { 'border-radius': '3px' },
            ]"
          >
            {{ item.amount_slacken_code_color }}
          </span>
        </template>
        <template v-slot:[`item.amount_slacken_start`]="{ item }">
          {{
            Number(item.amount_slacken_start).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.amount_slacken_end`]="{ item }">
          {{
            Number(item.amount_slacken_end).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.amount_slacken_active`]="{ item }">
          <v-btn v-if="item.amount_slacken_active == '1'" x-small color="success" dark>เปิดใช้งาน</v-btn>
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
import * as apiAmount_slacken from "@/Api/apiAmount_slacken";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogAmount_slacken";

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
        { text: "รหัสสี", value: "amount_slacken_code_color", width: "10%" },
        { text: "ชื่อช่วงผ่อน", value: "amount_slacken_name", width: "15%" },
        { text: "เริ่มต้น", value: "amount_slacken_start", width: "10%" },
        { text: "สิ้นสุด", value: "amount_slacken_end", width: "10%" },
        { text: "สถานะ", value: "amount_slacken_active", width: "5%" },
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
      const response = await apiAmount_slacken.index();
      this.data = response.data;
      //   console.log(this.data)
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
          const respone = apiAmount_slacken.destroy(id);
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
  watch: {},
};
</script>

<style></style>
