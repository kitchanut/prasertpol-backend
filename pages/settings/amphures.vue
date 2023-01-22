<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-title>
        <template>
          <v-col cols="2">
            <v-btn color="primary" dark @click.stop="AddItem()">
              <v-icon left>mdi-plus</v-icon>
              เพิ่มรายการใหม่
            </v-btn>
          </v-col>

          <v-col cols="4">
            <v-autocomplete
              v-model="idProvince"
              :items="dataProvinces"
              item-text="name_th"
              item-value="id"
              @change="selectSee"
              no-data-text="ไม่มีข้อมูล"
              label="ค้นหาตามจังหวัด"
              outlined
              dense
              hide-details
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
        <!-- <template v-slot:item.car_part_type_active="{ item }"> -->

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
import * as apiAmphures from "@/Api/apiAmphures";
import * as apiProvinces from "@/Api/apiProvinces";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogAmphure";

export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      loading: true,
      id: "",
      search: "",
      dialog: false,
      formTitle: "Add",
      action: "add",
      idProvince: "",
      dataProvinces: [],
      dataAmphures: [],
      headers: [
        { text: "รหัสอำเภอ", value: "code", width: "15%" },
        { text: "ชื่อจังหวัด", value: "province.name_th", width: "15%" },
        { text: "ชื่ออำเภอ", value: "name_th", width: "15%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "12%" },
      ],
      data: [],
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
    };
  },
  mounted() {
    this.getProvinces();
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
    async getProvinces() {
      const response = await apiProvinces.select();
      this.dataProvinces = response.data;
      await this.dataProvinces.push({ id: 0, name_th: "ทั้งหมด" });
    },
    async selectSee() {
      this.data = [];
      if (this.idProvince == 0) {
        this.data = this.dataAmphures;
      } else {
        for (let index = 0; index < this.dataAmphures.length; index++) {
          if (this.dataAmphures[index].province_id == this.idProvince) {
            await this.data.push(this.dataAmphures[index]);
          }
        }
      }
    },
    async getData() {
      const response = await apiAmphures.index();
      this.dataAmphures = response.data;
      //   console.log(this.data)
      if (this.idProvince != "") {
        this.selectSee();
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
          const respone = apiAmphures.destroy(id);
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
  watch: {},
};
</script>

<style></style>
