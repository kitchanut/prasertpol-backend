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
              v-model="idAmphure"
              :items="dataAmphures"
              item-text="name_th"
              item-value="id"
              @change="selectSee"
              label="ค้นหาตามอำเภอ"
              no-data-text="ไม่มีข้อมูล"
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
import * as apiDistricts from "@/Api/apiDistricts";
import * as apiAmphures from "@/Api/apiAmphures";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogDistricts";

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
      idAmphure: "",
      dataDistricts: [],
      dataAmphures: [],
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      headers: [
        {
          text: "รหัสไปรษณีย์",
          value: "zip_code",
          width: "7%",
          align: "center",
        },
        { text: "ชื่ออำเภอ", value: "amphure.name_th", width: "15%" },
        { text: "ชื่อตำบล", value: "name_th", width: "15%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "12%" },
      ],
      data: [],
    };
  },
  mounted() {
    this.getAmphures();
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
    async getAmphures() {
      const response = await apiAmphures.select();
      this.dataAmphures = response.data;
      await this.dataAmphures.push({ id: 0, name_th: "ทั้งหมด" });
    },
    async selectSee() {
      this.data = [];
      if (this.idAmphure == 0) {
        this.data = this.dataDistricts;
      } else {
        // console.log(this.idAmphure);

        for (let index = 0; index < this.dataDistricts.length; index++) {
          if (this.dataDistricts[index].amphure_id == this.idAmphure) {
            await this.data.push(this.dataDistricts[index]);
          }
        }
      }
    },
    async getData() {
      const response = await apiDistricts.index();
      this.dataDistricts = response.data;
      if (this.idAmphure != "") {
        this.selectSee();
      }
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
          const respone = apiDistricts.destroy(id);
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
