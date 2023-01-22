<template>
  <div v-if="user_group_permission == -1">
    <v-card >
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
        <template v-slot:[`item.partner_car_type`]="{ item }">
          <v-btn
            v-if="item.partner_car_type == '1'"
            x-small
            color="success"
            dark
            >บุคคลธรรมดา</v-btn
          >
          <v-btn v-else x-small color="oragen" dark>ลานประมูล</v-btn>
        </template>

        <template v-slot:[`item.partner_car_active`]="{ item }">
          <v-btn
            v-if="item.partner_car_active == '1'"
            x-small
            color="success"
            dark
            >เปิดใช้งาน</v-btn
          >
          <v-btn v-else x-small color="red" dark>ปิดการใช้งาน</v-btn>
        </template>

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
        @success="addSuccess"
        @error="addError"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiPartner_cars from "@/Api/apiPartner_cars";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogPartnerCar";

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
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      headers: [
        { text: "ลำดับ", value: "no", width: "10%", align: "center" },
        { text: "ชื่อคู่ค้า", value: "partner_car_name", width: "15%" },
        {
          text: "เลขผู้เสียภาษี",
          value: "partner_car_idvat",
          width: "15%",
        },
        { text: "เบอร์ติดต่อ", value: "partner_car_tel", width: "15%" },
        { text: "จังหวัด", value: "province.name_th", width: "10%" },
        { text: "ประเภท", value: "partner_car_type", width: "10%" },
        { text: "สถานะ", value: "partner_car_active", width: "15%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "100px" },
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
    async getData() {
      const response = await apiPartner_cars.index();
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
          const respone = apiPartner_cars.destroy(id);
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
