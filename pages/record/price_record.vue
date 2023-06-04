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
        dense
      >
        <!-- <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            ผู้ลงข้อมูล:
            <span v-if="item.user">{{ item.user.first_name }} {{ item.user.last_name }}</span>
            <span v-else>ไม่มีข้อมูล</span>
          </td>
        </template> -->

        <template v-slot:[`item.user`]="{ item }">
          <span v-if="item.user">{{ item.user.first_name }} {{ item.user.last_name }}</span>
          <span v-else>ไม่มีข้อมูล</span>
        </template>

        <template v-slot:[`item.image`]="{ item }">
          <!-- <v-btn icon v-if="item.image != null">
            <v-img :src="serverUrl + '/' + item.image" width="40px" @click="showImg(serverUrl + '/' + item.image)">
            </v-img>
          </v-btn> -->
          <div v-if="item.image != null" class="images" v-viewer>
            <img height="40px" :src="serverUrl + '/' + item.image" />
          </div>
        </template>

        <template v-slot:[`item.date`]="{ item }">
          <span>{{ $moment(item.date).format("DD/MM/YYYY") }}</span>
        </template>

        <template v-slot:[`item.car_model_code_color`]="{ item }">
          <span
            :style="[{ 'background-color': item.car_model_code_color }, { padding: '2px' }, { 'border-radius': '3px' }]"
          >
            {{ item.car_model_code_color }}
          </span>
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
import * as apiPriceRecord from "@/Api/apiPriceRecord";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogPriceRecord";
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
        // { text: "", value: "data-table-expand" },
        {
          text: "รูปภาพ",
          value: "image",
          align: "center",
          width: "10%",
        },
        { text: "วันที่", value: "date" },
        { text: "ยี่ห้อ", value: "car_models.car_model_name" },
        { text: "รุ่น", value: "car_series.car_series_name" },
        { text: "รุ่นย่อย", value: "car_serie_sub.car_serie_sub_name" },
        { text: "เกียร์", value: "car_gear" },
        { text: "ปี", value: "car_year" },
        { text: "สี", value: "color.color_name" },
        { text: "เลขไมค์", value: "car_mileage" },
        { text: "เกรด", value: "grade" },
        { text: "ชื่อลาน", value: "location" },
        { text: "ราคาจบ", value: "price" },
        { text: "ผู้ลงข้อมูล", value: "user" },
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
      const response = await apiPriceRecord.index();
      this.data = response.data;
      //   console.log(response.data);
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
          const respone = apiPriceRecord.destroy(id);
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
