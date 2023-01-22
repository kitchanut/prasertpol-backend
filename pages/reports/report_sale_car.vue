<template>
  <div>
    <v-card>
      <v-card-text>
        <dateSelect2 @timeSelect="selectTimeStart" />

        <v-row>
          <v-col class="d-flex align-end">
            <v-btn @click="handleDownload()" color="success" class="ml-2">
              <v-icon left>mdi-microsoft-excel</v-icon>
              Excel
            </v-btn>
          </v-col>
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
            >
            </v-text-field>
          </v-col>
        </v-row>

        <br />

        <v-data-table
          :headers="headers"
          :items="data"
          :search="search"
          :loading="loading"
          no-data-text="ยังไม่มีการเพิ่มข้อมูล"
          loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
          :mobile-breakpoint="0"
          :multi-sort="true"
          :footer-props="{
            'items-per-page-options': [5, 10, 20, 50, 100, -1],
          }"
        >
          <template v-slot:[`item.contract.contract_date`]="{ item }">
            <span v-if="item.contract != null">
              {{ $moment(item.contract.contract_date).format("DD/MM/YYYY") }}
            </span>
          </template>

          <template v-slot:[`item.car_types`]="{ item }">
            <span
              >{{ item.car_types.car_type_name }} ({{
                item.car_types.car_type_name_en
              }})</span
            >
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
      </v-card-text>
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
      headers: [],
    };
  },
  created() {
    if (this.user_group_permission == -1 || this.user_group_permission == 9) {
      this.headers = [
        {
          text: "วันปล่อยรถ",
          value: "contract.contract_date",
          width: "120px",
        },
        {
          text: "ลำดับ",
          value: "car_no",
          align: "center",
          class: "textOneLine",
        },

        {
          text: "ประเภท",
          value: "car_types",
          class: "textOneLine",
        },
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
          text: "รุ่น",
          value: "car_series.car_series_name",
          width: "150px",
          class: "textOneLine",
        },
        {
          text: "รุ่นย่อย",
          value: "car_serie_sub.car_serie_sub_name",
          width: "200px",
          class: "textOneLine",
        },
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
        {
          text: "จังหวัด",
          value: "province.name_th",
          class: "textOneLine",
        },

        {
          text: "จัด",
          value: "amount_price",
          class: "textOneLine",
        },
        {
          text: "ดาวน์",
          value: "amount_down",
          class: "textOneLine",
        },
        {
          text: "ขาย",
          value: "car_price_vat",
          class: "textOneLine",
        },
        {
          text: "ราคาสุทธิ",
          value: "net_price",
          class: "textOneLine",
        },
        {
          text: "ทะเบียน (ใหม่)",
          value: "car_regis_current",
          class: "textOneLine",
        },
        {
          text: "จังหวัด",
          value: "province_current.name_th",
          class: "textOneLine",
        },
        {
          text: "ผู้ซื้อ",
          value: "working.customer_name",
          class: "textOneLine",
          width: "180px",
        },
        {
          text: "เบอร์โทร",
          value: "working.customer.customer_tel",
          class: "textOneLine",
          width: "150px",
        },
        {
          text: "อายุ",
          value: "working.customer.age",
          class: "textOneLine",
          width: "100px",
        },
        {
          text: "อาชีพ",
          value: "working.customer.job",
          class: "textOneLine",
          width: "150px",
        },
        {
          text: "ที่อยู่",
          value: "working.customer.address",
          class: "textOneLine",
          width: "250px",
        },
        {
          text: "ผลเครดิต",
          value: "working.credit",
          class: "textOneLine",
          width: "110px",
        },
      ];
    } else {
      this.headers = [
        {
          text: "วันปล่อยรถ",
          value: "contract.contract_date",
          width: "120px",
        },
        {
          text: "ลำดับ",
          value: "car_no",
          align: "center",
          class: "textOneLine",
        },

        {
          text: "ประเภท",
          value: "car_types",
          class: "textOneLine",
        },
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
          text: "รุ่น",
          value: "car_series.car_series_name",
          width: "150px",
          class: "textOneLine",
        },
        {
          text: "รุ่นย่อย",
          value: "car_serie_sub.car_serie_sub_name",
          width: "200px",
          class: "textOneLine",
        },
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
        {
          text: "จังหวัด",
          value: "province.name_th",
          class: "textOneLine",
        },

        {
          text: "ทะเบียน (ใหม่)",
          value: "car_regis_current",
          class: "textOneLine",
        },
        {
          text: "จังหวัด",
          value: "province_current.name_th",
          class: "textOneLine",
        },
        {
          text: "ผู้ซื้อ",
          value: "working.customer_name",
          class: "textOneLine",
          width: "180px",
        },
        {
          text: "เบอร์โทร",
          value: "working.customer.customer_tel",
          class: "textOneLine",
          width: "150px",
        },
      ];
    }
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
      const response = await apiReport.report_sale_car(data);
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
            filename:
              "รายงานการขายรถ (" +
              moment().format("DD/MM/YYYY ( HH:mm น.)") +
              ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      // return jsonData.map((v) =>
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "car_models.car_model_name") {
            // console.log(v)
            return v.car_models.car_model_name;
          } else if (j == "car_serie_sub.car_serie_sub_name") {
            if (v.car_serie_sub == null) {
              return "ไม่ระบุ";
            } else {
              return v.car_serie_sub.car_serie_sub_name;
            }
          } else if (j == "color.color_name") {
            return v.color.color_name;
          } else if (j == "branch.branch_name") {
            return v.branch.branch_name;
          } else if (j == "car_series.car_series_name") {
            return v.car_series.car_series_name;
          } else if (j == "car_types") {
            return (
              v.car_types.car_type_name +
              "(" +
              v.car_types.car_type_name_en +
              ")"
            );
          } else if (j == "car_gear") {
            if (v.car_gear == 1) {
              return "AT";
            } else {
              return "MT";
            }
          } else if (j == "car_price_vat") {
            return Number(v.car_price_vat).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            });
          } else if (j == "net_price") {
            return Number(v.net_price).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            });
          } else if (j == "contract.contract_date") {
            if (v.contract) {
              return moment(v.contract.contract_date).format("DD/MM/YYYY");
            } else {
              return null;
            }
          } else if (j == "amount_down") {
            return Number(v.amount_down).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            });
          } else if (j == "amount_price") {
            return Number(v.amount_price).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            });
          } else if (j == "province.name_th") {
            return v.province == null ? "" : v.province.name_th;
          } else if (j == "car_regis") {
            return v.car_regis == null ? "" : v.car_regis;
          } else if (j == "province_current.name_th") {
            return v.province_current == null ? "" : v.province_current.name_th;
          } else if (j == "car_regis_current") {
            return v.car_regis_current == null ? "" : v.car_regis_current;
          } else if (j == "working.customer_name") {
            if (v.working) {
              return v.working.customer_name;
            } else {
              return null;
            }
          } else if (j == "created_at") {
            // return moment(v.created_at).format("DD/MM/YYYY ( HH:mm น.)");
            return moment(v.created_at).format("DD/MM/YYYY ( HH:mm น.)");
          } else {
            return v[j];
          }
        })
      );
    },
  },
};
</script>

<style>
</style>
