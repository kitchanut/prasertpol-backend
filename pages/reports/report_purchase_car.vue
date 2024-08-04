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
        <template v-slot:[`item.car_date_buy`]="{ item }">
          {{ $moment(item.car_date_buy).format("DD/MM/YYYY") }}
        </template>

        <template v-slot:[`item.car_types`]="{ item }">
          <span> {{ item.car_types.car_type_name }} ({{ item.car_types.car_type_name_en }})</span>
        </template>

        <template v-slot:[`item.car_detail`]="{ item }">
          <div>
            <b>{{ item.car_models.car_model_name }}</b>
          </div>
          <div>{{ item.car_series.car_series_name }}</div>
        </template>

        <template v-slot:[`item.car_regis`]="{ item }">
          <div>{{ item.car_regis }}</div>
          <div>{{ item.province.name_th }}</div>
        </template>

        <template v-slot:[`item.car_regis_current`]="{ item }">
          <div v-if="item.car_regis_current">{{ item.car_regis_current }}</div>
          <div v-if="item.province_current">{{ item.province_current.name_th }}</div>
        </template>

        <template v-slot:[`item.car_gear`]="{ item }">
          <h5 v-if="item.car_gear == '1'" class="green--text">AT</h5>
          <h5 v-if="item.car_gear == '2'" class="orange--text">MT</h5>
        </template>

        <template v-slot:[`item.car_buy_vat`]="{ item }">
          <div style="color: blue">
            {{ Number(item.car_buy_vat).toLocaleString("th-TH", { maximumFractionDigits: 0 }) }}
          </div>
        </template>

        <template v-slot:[`item.vat`]="{ item }">
          <div style="color: orange">
            {{ Number(item.vat).toLocaleString("th-TH", { maximumFractionDigits: 0 }) }}
          </div>
        </template>

        <template v-slot:[`item.car_buy`]="{ item }">
          <div style="color: green">
            {{ Number(item.car_buy).toLocaleString("th-TH", { maximumFractionDigits: 0 }) }}
          </div>
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
          text: "วันที่ซื้อ",
          value: "car_date_buy",
          width: "120px",
        },
        {
          text: "ลำดับ",
          value: "car_no",
          class: "textOneLine",
        },

        // {
        //   text: "ประเภท",
        //   value: "car_types",
        //   class: "textOneLine",
        // },
        {
          text: "สาขา",
          value: "branch.branch_name",
          class: "textOneLine",
        },

        {
          text: "ค่ายรถ",
          value: "car_models.car_model_name",
          width: "100px",
          class: "textOneLine",
        },
        {
          text: "รุ่น/รุ่นย่อย",
          value: "car_detail",
          class: "textOneLine",
        },
        // {
        //   text: "รุ่น",
        //   value: "car_series.car_series_name",
        //   width: "150px",
        //   class: "textOneLine",
        // },
        // {
        //   text: "รุ่นย่อย",
        //   value: "car_serie_sub.car_serie_sub_name",
        //   width: "200px",
        //   class: "textOneLine",
        // },
        {
          text: "เกียร์",
          value: "car_gear",
          class: "textOneLine",
        },
        {
          text: "ปี",
          value: "car_year",
          class: "textOneLine",
        },
        {
          text: "สี",
          value: "color.color_name",
          class: "textOneLine",
        },
        {
          text: "ทะเบียน (เก่า)",
          value: "car_regis",
          class: "textOneLine",
        },
        // {
        //   text: "จังหวัด",
        //   value: "province.name_th",
        //   class: "textOneLine",
        // },

        // {
        //   text: "จัด",
        //   value: "amount_price",
        //   class: "textOneLine",
        // },
        // {
        //   text: "ดาวน์",
        //   value: "amount_down",
        //   class: "textOneLine",
        // },
        // {
        //   text: "ขาย",
        //   value: "car_price_vat",
        //   class: "textOneLine",
        // },
        // {
        //   text: "ราคาสุทธิ",
        //   value: "net_price",
        //   class: "textOneLine",
        // },
        {
          text: "ทะเบียน (ใหม่)",
          value: "car_regis_current",
          class: "textOneLine",
        },
        {
          text: "ลานประมูล",
          value: "partner_car.partner_car_name",
          class: "textOneLine",
        },
        {
          text: "ราคาซื้อก่อน vat",
          value: "car_buy_vat",
          class: "textOneLine",
          align: "end",
        },
        {
          text: "vat",
          value: "vat",
          class: "textOneLine",
          align: "end",
        },
        {
          text: "ราคาซื้อรวม vat",
          value: "car_buy",
          class: "textOneLine",
          align: "end",
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
      const response = await apiReport.report_purchase_car(data);
      console.log(response.data);
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
            filename: "รายงานการซื้อรถ (" + moment().format("DD/MM/YYYY | HH:mm น.") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "car_models.car_model_name") {
            return v.car_models == null ? "" : v.car_models.car_model_name;
          } else if (j == "color.color_name") {
            return v.color == null ? "" : v.color.color_name;
          } else if (j == "branch.branch_name") {
            return v.branch == null ? "" : v.branch.branch_name;
          } else if (j == "car_series.car_series_name") {
            return v.car_series == null ? "" : v.car_series.car_series_name;
          } else if (j == "car_types") {
            return v.car_types.car_type_name + "(" + v.car_types.car_type_name_en + ")";
          } else if (j == "car_gear") {
            return v.car_gear === "1" ? "AT" : v.car_gear === "2" ? "MT" : "";
          } else if (j == "car_date_buy") {
            return moment(v.car_date_buy).format("DD/MM/YYYY");
          } else if (j == "province.name_th") {
            return v.province == null ? "" : v.province.name_th;
          } else if (j == "car_regis") {
            return v.car_regis == null || v.province == null ? "" : v.car_regis + " " + v.province.name_th;
          } else if (j == "partner_car.partner_car_name") {
            return v.partner_car == null ? "" : v.partner_car.partner_car_name;
          } else if (j == "car_regis_current") {
            return v.car_regis_current == null || v.province_current == null
              ? ""
              : v.car_regis_current + " " + v.province_current.name_th;
          } else if (j == "vat") {
            return (Number(v.car_buy_vat) * 0.07).toFixed(2);
          } else if (j == "created_at") {
            return moment(v.created_at).format("DD/MM/YYYY ( HH:mm น.)");
          } else {
            return v[j];
          }
        })
      );
    },
  },
  watch: {
    data() {
      this.data.map((item, index) => {
        item.car_detail = item.car_models.car_model_name + " -> " + item.car_series.car_series_name;
        item.vat = Number(item.car_buy_vat) * 0.07;
      });
    },
  },
};
</script>

<style></style>
