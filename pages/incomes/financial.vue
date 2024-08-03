<template>
  <div>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="8" class="d-flex align-center">
            <dateSelect2 @timeSelect="selectTimeStart" />
          </v-col>
        </v-row>

        <v-spacer></v-spacer>

        <v-col cols="3">
          <v-text-field
            v-model="search"
            id="search"
            name="search"
            append-icon="mdi-magnify"
            label="ค้นหา"
            outlined
            dense
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
        <template v-slot:[`item.file`]="{ item }">
          <div v-if="item.file == null">
            <span></span>
          </div>
          <div v-else>
            <v-btn icon>
              <v-avatar size="40" @click="showImg(serverUrl + item.file)">
                <v-img :src="serverUrl + item.file"> </v-img>
              </v-avatar>
            </v-btn>
          </div>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          <span>
            {{ $moment(item.created_at).format("DD/MM/YYYY") }}
          </span>
        </template>

        <template v-slot:[`item.working_id`]="{ item }">
          <span v-if="item.working_id"> W{{ item.working_id }} </span>
        </template>

        <template v-slot:[`item.bath`]="{ item }">
          {{
            Number(item.bath).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            color="primary"
            fab
            x-small
            dark
            @click="Financial(Number(item.id), item.car_no, item.working_id, 'edit')"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>

          <!-- <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="Financial(Number(item.id), item.car_no, item.working_id, 'edit')">
                <v-list-item-title>ใบสำคัญรับเงิน</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
        </template>
      </v-data-table>

      <dialogFinancial
        :dialogFinancial="dialogFinancial"
        :financial_id="financial_id"
        :idWork="idWork"
        :car_no="car_no"
        :actionFinancial="actionFinancial"
        @cancleItem="dialogFinancial = false"
        @success="
          dialogFinancial = false;
          getData();
        "
        @error="dialogFinancial = false"
      />
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import * as apiBranches from "@/Api/apiBranches";
import * as apiFinancial from "@/Api/apiFinancial";

import * as customAlart from "@/customJS/customAlart";
import dialogAddIncome from "@/components/dialog/dialogAdd_income";
import dialogImage from "@/components/dialog/dialogImage";
import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    dialogAddIncome,
    dateSelect2,
    dialogImage,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      loading: true,
      search: "",

      headers: [
        { text: "วันที่", value: "created_at", width: "8%" },
        { text: "หมายเลข (เลขธุรกรรม)", value: "id", width: "12%", align: "center" },
        { text: "รหัสงาน", value: "working_id", width: "8%" },
        { text: "ลำดับรถ", value: "car_no", width: "12%" },

        { text: "ลูกค้า", value: "customer_name", width: "15%" },
        { text: "รายการ", value: "payment_type_text" },
        // { text: "ประเภท", value: "type" },
        // { text: "บิล", value: "type_bill" },
        { text: "จำนวนเงิน", value: "bath", width: "10%", align: "end" },
        // { text: "สาขา", value: "branch.branch_name" },
        // { text: "สถานะ", value: "status_check" },
        // { text: "ไฟล์", value: "file" },
        { text: "จัดการ", value: "actions", sortable: false, width: "8%" },
      ],
      data: [],
      years: [],
      branches: [],
      money_month: null,
      money_year: null,
      imgUrl: "",
      dialogImg: false,

      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),

      dialogFinancial: false,
      financial_id: 0,
      idWork: 0,
      car_no: "",
      actionFinancial: "",
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
      await this.getData();
    },
    async getData() {
      this.loading = true;
      this.data = [];
      const data = new FormData();
      // data.append("branch_id", this.branch_id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiFinancial.indexTime(data);
      console.log(response);
      this.data = await response.data;
      this.data.map((item) => {
        if (item.payment_type == 1) {
          item.payment_type_text = "เงินจอง";
        } else if (item.payment_type == 2) {
          item.payment_type_text = "เงินดาวน์";
        } else if (item.payment_type == 3) {
          item.payment_type_text = "ซื้อเงินสด";
        } else if (item.payment_type == 4) {
          item.payment_type_text = "ค่างวดล่วงหน้า";
        } else if (item.payment_type == 5) {
          item.payment_type_text = "สมาร์ทชัว";
        } else if (item.payment_type == 6) {
          item.payment_type_text = "ประกันอื่นๆ";
        } else if (item.payment_type == 99) {
          item.payment_type_text = "ใบสำคัญรับเงิน (อื่นๆ)";
        } else {
          item.payment_type_text = "N/A";
        }
      });

      this.loading = false;
    },

    async Financial(financial_id, car_no, working_id, actionFinancial) {
      this.financial_id = financial_id;
      this.car_no = car_no;
      this.idWork = working_id;
      this.actionFinancial = actionFinancial;
      this.dialogFinancial = true;
    },
  },
  watch: {},
};
</script>

<style></style>
