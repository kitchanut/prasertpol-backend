<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="6 mr-2">
            <dateSelect2 @timeSelect="selectTimeStart" />
          </v-col>
          <v-col cols="1" class="d-flex align-center">
            <v-btn @click="handleDownload()" color="success" style="min-width: 0px; padding: 0px 8px; height: 40px">
              <v-icon>mdi-microsoft-excel</v-icon>
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex align-center">
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
      <v-divider></v-divider>
      <v-data-table
        class="table-border"
        :headers="headers"
        :items="data"
        :search="search"
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        dense
        :mobile-breakpoint="0"
        :multi-sort="true"
        :footer-props="{
          'items-per-page-options': [5, 10, 20, 50, 100, -1],
        }"
      >
        <template v-slot:[`item.sale.first_name`]="{ item }">
          <span v-if="item.sale_id == null || item.sale_id == 0" class="red--text"> ยังไม่เลือก </span>
          <span v-else>
            {{ item.sale == null ? "" : item.sale.first_name }}
          </span>
        </template>

        <template v-slot:[`item.car_types`]="{ item }">
          <span>{{ item.car_types.car_type_name }} ({{ item.car_types.car_type_name_en }})</span>
        </template>
        <template v-slot:[`item.amount_down`]="{ item }">
          {{
            Number(item.amount_down).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.amount_price`]="{ item }">
          {{
            Number(item.amount_price).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>
        <template v-slot:[`item.car_price_vat`]="{ item }">
          {{
            Number(item.car_price_vat).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.net_price`]="{ item }">
          {{
            Number(item.net_price).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.car_gear`]="{ item }">
          <h5 v-if="item.car_gear == '1'" class="green--text">AT</h5>
          <h5 v-if="item.car_gear == '2'" class="orange--text">MT</h5>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as apiReport from "@/Api/apiReport";

import moment from "moment";

import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    dateSelect2,
  },
  data() {
    return {
      loading: false,
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      search: "",
      data: [],
      headers: [
        {
          text: "รหัสงาน",
          value: "codeWorking",
          class: "textOneLine sticky-header",
          align: "center",
        },
        {
          text: "ลำดับรถ",
          value: "cars.car_no",
          class: "textOneLine sticky-header",
        },
        {
          text: "เหตุผลที่ยกเลิก",
          value: "cancel_list",
          class: "textOneLine sticky-header",
        },
        {
          text: "ยี่ห้อ",
          value: "cars.car_models.car_model_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "รุ่น",
          value: "cars.car_series.car_series_name",
          class: "textOneLine sticky-header",
          width: "150px",
        },
        {
          text: "รุ่นย่อย",
          value: "cars.car_serie_sub.car_serie_sub_name",
          class: "textOneLine sticky-header",
          width: "200px",
        },
        {
          text: "ทะเบียน",
          value: "cars.car_regis",
          class: "textOneLine sticky-header",
        },

        {
          text: "ปีรถ",
          value: "cars.car_year",
          class: "textOneLine sticky-header",
        },
        {
          text: "สี",
          value: "cars.color.color_name",
          class: "textOneLine sticky-header",
        },
        // {
        //   text: "ดาวน์+F",
        //   value: "bookings.amount_slacken",
        //   class: "textOneLine sticky-header",
        // },
        {
          text: "ลูกค้า",
          width: "200px",
          value: "customer_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "เบอร์ลูกค้า",
          value: "customer_tel",
          class: "textOneLine sticky-header",
        },
        { text: "เซล", value: "sale.first_name", class: "textOneLine sticky-header" },
        {
          text: "ทีมเซล",
          value: "team.team_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "ทีมสาขา",
          value: "branch_team.branch_team_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "สาขาย่อย",
          value: "branch.branch_name",
          class: "textOneLine sticky-header",
        },
      ],
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
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiReport.report_work_cancle(data);
      // console.log(response.data);
      this.data = response.data;
      this.loading = false;
    },
    handleDownload() {
      const filterVal = [];
      for (let index = 0; index < this.tHeader.length; index++) {
        filterVal.push(this.headers[index].value);
      }
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "รายงานการยกเลิก (" + moment().format("DD/MM/YYYY | HH:mm น.") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "car_gear") {
            return v[j] == "1" ? "AT" : v[j] == "2" ? "MT" : "";
          }
          return j.split(".").reduce((acc, part) => acc && acc[part], v);
        })
      );
    },
  },
  watch: {
    data() {
      return this.data.map(function (item) {
        item.codeWorking = "W" + item.id;
      });
    },
  },
};
</script>

<style></style>
