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
              v-model="idGeographie"
              no-data-text="ไม่มีข้อมูล"
              :items="dataGeographie"
              item-text="name"
              item-value="id"
              @change="selectSee"
              label="ค้นหาตามภาค"
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
import * as apiGeographies from "@/Api/apiGeographies";
import * as apiProvinces from "@/Api/apiProvinces";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogProvince";

export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      loading: true,
      idGeographie: "",
      id: "",
      search: "",
      dialog: false,
      formTitle: "Add",
      action: "add",
      dataGeographie: [],
      dataProvinces: [],
      headers: [
        { text: "รหัสจังหวัด", value: "code", width: "10%" },
        { text: "ภาค", value: "geography.name", width: "15%" },
        { text: "ชื่อจังหวัด", value: "name_th", width: "15%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "12%" },
      ],
      data: [],
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
    };
  },
  mounted() {
    // this.getData();
    this.getGeographies();
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
    async getGeographies() {
      const response = await apiGeographies.index();
      this.dataGeographie = response.data;
      await this.dataGeographie.push({ id: 0, name: "ทั้งหมด" });
    },
    async selectSee() {
      this.data = [];
      if (this.idGeographie == 0) {
        this.data = this.dataProvinces;
      } else {
        for (let index = 0; index < this.dataProvinces.length; index++) {
          if (this.dataProvinces[index].geography_id == this.idGeographie) {
            await this.data.push(this.dataProvinces[index]);
          }
        }
      }
    },
    async getData() {
      const response = await apiProvinces.index();
      this.dataProvinces = response.data;
      //   console.log(this.data)
      if (this.idGeographie != "") {
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
          const respone = apiProvinces.destroy(id);
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
