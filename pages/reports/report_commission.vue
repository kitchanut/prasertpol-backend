<template>
  <div>
    <v-card>
      <v-card-text>
        <!-- <dateSelect2 @timeSelect="selectTimeStart" /> -->

        <v-row>
          <v-col class="d-flex align-end">
            <!-- <v-btn @click="handleDownload()" color="success" class="ml-2">
              <v-icon left>mdi-microsoft-excel</v-icon>
              Excel
            </v-btn> -->
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="month"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="mt-0"
                  v-model="month"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  hide-details=""
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="month"
                type="month"
                locale="th"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="
                    $refs.menu.save(month);
                    getData();
                  "
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
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
          dense
        >
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
  
  <script>
import * as apiReport from "@/Api/apiReport";

import moment from "moment";

// import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    // dateSelect2,
  },
  data() {
    return {
      loading: false,
      menu: false,
      month: new Date().toISOString().substr(0, 7),
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      search: "",
      data: [],
      headers: [],
    };
  },
  created() {
    this.headers = [
      { text: "ลำดับ", value: "no", width: "7%", align: "center" },
      {
        text: "ทีมสาขา",
        value: "branch_team.branch_team_name",
        width: "20%",
      },
      {
        text: "ทีม",
        value: "team.team_name",
        width: "20%",
      },
      {
        text: "เซล",
        value: "sale.first_name",
      },

      {
        text: "จำนวน",
        value: "total",
        align: "center",
        width: "15%",
      },
    ];
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
      //   const data = new FormData();
      //   data.append("timeStart", this.timeStart);
      //   data.append("timeEnd", this.timeEnd);
      let month = {
        month: this.month,
      };
      const response = await apiReport.report_commission(month);
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
  watch: {
    data() {
      return this.data.map(function (item, index) {
        item.no = index + 1;
      });
    },
  },
};
</script>
  
  <style>
</style>
  