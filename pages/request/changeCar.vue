
<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-text>
        <dateSelect2 @timeSelect="selectTimeStart" />

        <v-row class="d-flex align-center">
          <v-btn-toggle
            mandatory
            v-model="toggle"
            color="primary"
            class="ml-5"
            @change="getData()"
          >
            <v-btn value="pedding">รอดำเนินการ ({{ count.pedding }})</v-btn>
            <v-btn value="approve">ดำเนินการแล้ว ({{ count.approve }})</v-btn>
            <v-btn value="cancle">ยกเลิก ({{ count.cancle }})</v-btn>
            <v-btn value="all">ทั้งหมด ({{ count.all }})</v-btn>
          </v-btn-toggle>
          <v-spacer></v-spacer>
          <v-col>
            <v-text-field
              v-model="search"
              id="search"
              name="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
              outlined
              dense
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        show-expand
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ไม่มีข้อมูล"
      >
        <template
          v-slot:[`item.data-table-expand`]="{ item, isExpanded, expand }"
        >
          <button
            @click="expand(true)"
            v-if="!isExpanded && item.note"
            type="button"
            class="
              v-icon
              notranslate
              v-data-table__expand-icon
              v-icon--link
              mdi mdi-chevron-down
              theme--light
            "
          ></button>
          <button
            @click="expand(false)"
            v-if="isExpanded && item.note"
            type="button"
            class="
              v-icon
              notranslate
              v-data-table__expand-icon
              v-icon--link
              mdi mdi-chevron-down
              theme--light
              v-data-table__expand-icon--active
            "
          ></button>
        </template>

        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <span style="white-space: pre">{{ item.note }}</span>
          </td>
        </template>

        <template v-slot:[`item.pictureUrl`]="{ item }">
          <v-btn icon>
            <v-avatar size="40" @click="showImg(item.pictureUrl)">
              <v-img :src="item.pictureUrl"> </v-img>
            </v-avatar>
          </v-btn>
          <div>{{ item.displayName }}</div>
        </template>

        <template v-slot:[`item.sale_name`]="{ item }">
          <div>{{ item.sale_name }}</div>
          <div>{{ item.branch_name }}</div>
        </template>

        <template v-slot:[`item.sign_type`]="{ item }">
          <div>{{ item.sign_type }}</div>
          <v-divider v-if="item.sign_type == 'เซนต์ใหม่'"></v-divider>
          <div v-if="item.sign_date">{{ item.sign_date }}</div>
          <div v-if="item.bank_name">{{ item.bank_name }}</div>
          <div v-if="item.bank_branch_name">{{ item.bank_branch_name }}</div>
          <div v-if="item.mtk_name"><b>MKT: </b>{{ item.mtk_name }}</div>
          <div v-if="item.mtk_tel"><b>Tel: </b>{{ item.mtk_tel }}</div>
          <div v-if="item.credit"><b>ผลเครดิต: </b>{{ item.credit }}</div>
          <div v-if="item.document"><b>เอกสาร: </b>{{ item.document }}</div>
          <v-divider v-if="item.document == 'ไม่ครบ'"></v-divider>
          <div v-if="item.document_list">{{ item.document_list }}</div>
        </template>

        <template v-slot:[`item.id_card`]="{ item }">
          <v-row no-gutters>
            <v-col>
              <v-img
                width="40px"
                :src="serverUrl + item.id_card"
                @click="showImg(serverUrl + item.id_card)"
              >
              </v-img>
            </v-col>
            <v-col>
              <v-img
                width="40px"
                :src="serverUrl + item.booking_sheet"
                @click="showImg(serverUrl + item.booking_sheet)"
              >
              </v-img>
            </v-col>
          </v-row>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            v-if="item.request_status == 'pedding'"
            color="warning"
            fab
            x-small
            dark
            @click="editItem(item.id)"
          >
            <v-icon> mdi-checkbox-blank-outline</v-icon>
          </v-btn>
          <v-btn
            v-else-if="item.request_status == 'approve'"
            color="success"
            fab
            x-small
            dark
            @click="editItem(item.id)"
          >
            <v-icon> mdi-checkbox-outline</v-icon>
          </v-btn>
          <v-btn
            v-else-if="item.request_status == 'cancle'"
            color="primary"
            fab
            x-small
            dark
            @click="editItem(item.id)"
          >
            <v-icon> mdi-arrow-u-left-top</v-icon>
          </v-btn>
          <v-btn
            v-if="item.request_status != 'cancle'"
            color="red"
            fab
            x-small
            dark
            @click="cancleItem(item.id)"
          >
            <v-icon> mdi-delete </v-icon>
          </v-btn>

          <v-btn
            v-if="item.request_status == 'cancle'"
            color="red"
            fab
            x-small
            dark
            @click="deleteItem(item.id)"
          >
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <dialogImage
      :dialog="dialogImg"
      :imgUrl="imgUrl"
      @cancleItem="dialogImg = false"
    />
  </div>
</template>

<script>
import * as apiRequestChangeCar from "@/Api/apiRequestChangeCar";
import * as customAlart from "@/customJS/customAlart";
import dialogImage from "@/components/dialog/dialogImage";

import moment from "moment";
import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    dialogImage,
    dateSelect2,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      toggle: "pedding",
      loading: true,

      dialogImg: false,
      imgUrl: "",

      dialog: false,
      id: "",
      formTitle: "",
      action: "",
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),

      search: "",
      isExpanded: true,
      headers: [
        { text: "", value: "data-table-expand" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
        { text: "Line", value: "pictureUrl", align: "center", width: "12%" },
        // { text: "displayName", value: "displayName", width: "12%" },
        { text: "เซล/สาขา", value: "sale_name" },
        { text: "ลำดับรถเดิม", value: "car_no_old", width: "10%" },
        { text: "ลำดับรถใหม่", value: "car_no_new", width: "10%" },
        { text: "ประเภท", value: "sign_type" },
        // { text: "หมายเหตุ", value: "note" },
        { text: "รูปบัตร/ใบสรุป", value: "id_card", width: "12%" },
        { text: "วันแจ้ง", value: "created_at", width: "11%" },
      ],

      data: [],
      count: [],
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
    async selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getData();
    },
    async getData() {
      this.loading = true;
      this.countData();
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("toggle", this.toggle);

      const response = await apiRequestChangeCar.indexCustom(data);
      // console.log(response.data);
      this.data = response.data;
      this.loading = false;
    },
    async countData() {
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);

      const response = await apiRequestChangeCar.countData(data);
      this.count = response.data;
      //   console.log(response.data);
    },
    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },
    async editItem(id) {
      const respone = apiRequestChangeCar.update(id);
      respone.then(async (res) => {
        this.$nextTick(() => {
          this.getData();
        });
      });
    },

    async cancleItem(id) {
      const respone = await apiRequestChangeCar.cancle(id);
      this.getData();
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiRequestChangeCar.destroy(id);
          respone.then(async (res) => {
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
  watch: {
    data() {
      const self = this;
      return this.data.map(function (item, index) {
        item.no = index + 1;
      });
    },
  },
};
</script>

<style></style>
