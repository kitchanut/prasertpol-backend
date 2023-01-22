<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 2 ||
      user_group_permission == 8 ||
      user_group_permission == 9 ||
      user_group_permission == 10 ||
      user_group_permission == 11
    "
  >
    <v-card>
      <div>
        <v-row>
          <v-col cols="10">
            <dateSelect @tineSelect="selectTimeStart" />
          </v-col>
        </v-row>
        <v-row>
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
        </v-row>
      </div>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.file`]="{ item }">
          <div v-if="item.file == null">
            <span>-</span>
          </div>
          <div v-else>
            <v-btn icon>
              <v-avatar size="40" @click="showImg(serverUrl + item.file)">
                <v-img :src="serverUrl + item.file"> </v-img>
              </v-avatar>
            </v-btn>
          </div>
        </template>
        <template v-slot:[`item.date`]="{ item }">
          <span>
            {{ $moment(item.date).format("DD/MM/YYYY") }}
          </span>
        </template>

        <template v-slot:[`item.money`]="{ item }">
          {{
            Number(item.money).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.type`]="{ item }">
          <span v-if="item.type == 1">ตัวรถ</span>
          <span v-else>อื่น ๆ</span>
        </template>

        <template v-slot:[`item.broken`]="{ item }">
          <span v-if="item.broken == 1">ไม่</span>
          <span v-else>หัก</span>
        </template>

        <template v-slot:[`item.type_bill`]="{ item }">
          <span v-if="item.type_bill == 1">เงินสด</span>
          <span v-else>ใบกำกับภาษี</span>
        </template>

        <template v-slot:[`item.status_check`]="{ item }">
          <span style="color: green" v-if="item.status_check == 1"
            >เช็คแล้ว</span
          >
          <span style="color: red" v-else>ยังไม่เช็ค</span>
        </template>
      </v-data-table>

      <dialogImage
        :dialog="dialogImg"
        :imgUrl="imgUrl"
        @cancleItem="dialogImg = false"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiOutlay_costs from "@/Api/apiOutlay_costs";

import dialogImage from "@/components/dialog/dialogImage";
import dateSelect from "@/components/DateSelect/dateSelect";

export default {
  components: {
    dateSelect,
    dialogImage,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      loading: true,
      search: "",
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      headers: [
        { text: "ไฟล์", value: "file" },
        {
          text: "วันที่",
          value: "date",
          width: "15%",
        },
        { text: "เลขธุรกรรม", value: "no" },
        {
          text: "ร้าน",
          value: "shop",
        },
        {
          text: "รายการ",
          value: "detail",
        },
        { text: "ลำดับรถ", value: "car.car_no" },
        { text: "หักเงิน", value: "broken" },
        { text: "ประเภท", value: "type" },
        { text: "บิล", value: "type_bill" },
        { text: "จำนวนเงิน", value: "money" },
        { text: "สาขา", value: "branch.branch_name" },
        { text: "โดย", value: "user.first_name" },
        { text: "สถานะ", value: "status_check" },
      ],
      data: [],
      imgUrl: "",
      dialogImg: false,
    };
  },
  mounted() {},
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async selectTimeStart(time) {
      this.branch_id = time.branch_id;
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      await this.getData();
    },

    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },
    async getData() {
      this.data = [];
      const data = new FormData();
      data.append("branch_id", this.branch_id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiOutlay_costs.report_withdraw_money(data);
      // console.log(response);
      this.data = await response.data;
      this.loading = false;
    },
  },
  watch: {},
};
</script>

<style></style>
