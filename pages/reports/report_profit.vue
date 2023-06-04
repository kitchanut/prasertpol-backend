<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row class="d-flex align-center">
          <v-col>
            <v-dialog v-model="dialogFilter" width="550">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :color="
                    car_serie_id != null ||
                    car_model_id != null ||
                    car_serie_sub_id != null ||
                    year_start != null ||
                    year_end != null
                      ? 'warning'
                      : ''
                  "
                  v-blur
                  class="ml-2"
                  style="min-width: 0px; padding: 0 8px"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-filter-variant</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-toolbar
                  color="warning"
                  dark
                  flat
                  dense
                  style="font-size: 20px"
                  height="6"
                >
                </v-toolbar>

                <v-fab-transition>
                  <v-btn
                    icon
                    absolute
                    style="top: 10px; right: 10px"
                    fab
                    small
                    @click="dialogFilter = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-fab-transition>

                <h3 class="text-center" style="font-size: 22px; margin: 10px">
                  กรองข้อมูล
                </h3>

                <v-divider></v-divider>
                <v-card-text class="mt-5">
                  <v-row no-gutters class="d-flex align-center mt-3">
                    <v-col cols="4" style="font-size: 16px">ยี่ห้อรถ:</v-col>
                    <v-col>
                      <v-autocomplete
                        v-model="car_model_id"
                        :items="carModel"
                        item-text="car_model_name"
                        item-value="id"
                        outlined
                        dense
                        hide-details=""
                        @change="
                          filterData();
                          eventSelectModel();
                        "
                        clearable
                      ></v-autocomplete>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="d-flex align-center mt-3">
                    <v-col cols="4" style="font-size: 16px">รุ่นรถ:</v-col>
                    <v-col>
                      <v-autocomplete
                        v-model="car_serie_id"
                        :items="carSerie"
                        item-text="car_series_name"
                        item-value="id"
                        outlined
                        dense
                        hide-details="false"
                        @change="
                          filterData();
                          getCarSerieSub();
                        "
                        clearable
                      >
                      </v-autocomplete
                    ></v-col>
                  </v-row>

                  <v-row no-gutters class="d-flex align-center mt-3">
                    <v-col cols="4" style="font-size: 16px">รุ่นย่อย:</v-col>
                    <v-col cols="8">
                      <v-autocomplete
                        v-model="car_serie_sub_id"
                        :items="carSerieSub"
                        item-text="car_serie_sub_name"
                        item-value="id"
                        outlined
                        dense
                        hide-details="false"
                        @change="filterData()"
                        clearable
                      ></v-autocomplete>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="d-flex align-center mt-3">
                    <v-col cols="4" style="font-size: 16px"
                      >รุ่นปี ค.ศ. :</v-col
                    >
                    <v-col cols="8">
                      <v-row no-gutters class="d-flex align-center">
                        <v-col cols="5">
                          <v-select
                            v-model="year_start"
                            :items="years"
                            outlined
                            dense
                            hide-details="false"
                            clearable
                            @change="filterData()"
                          ></v-select
                        ></v-col>
                        <v-col cols="2 text-center" style="font-size: 16px"
                          >-</v-col
                        >
                        <v-col cols="5">
                          <v-select
                            v-model="year_end"
                            :items="years"
                            outlined
                            dense
                            hide-details="false"
                            clearable
                            @change="filterData()"
                          ></v-select>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="warning"
                    text
                    @click="
                      car_serie_id = null;
                      car_model_id = null;
                      car_serie_sub_id = null;
                      year_start = null;
                      year_end = null;
                      filterData();
                    "
                  >
                    <v-icon left>mdi-replay</v-icon>ล้างข้อมูล
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="7">
            <dateSelect2 @timeSelect="selectTimeStart" />
            <!-- <v-btn
              @click="handleDownload()"
              color="success"
              class="ml-2"
            >
              <v-icon left>mdi-microsoft-excel</v-icon>
              Excel
            </v-btn> -->
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="4">
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

        <br />

        <v-data-table
          :headers="headers"
          :items="data_filter"
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
          <template v-slot:[`item.car_detail`]="{ item }">
            <div v-html="item.car_detail" />
          </template>

          <template v-slot:[`item.cars.car_no`]="{ item }">
            <a
              small
              color="primary"
              @click="AllInfoCar(item.cars.id, item.cars.car_no)"
              >{{ item.cars.car_no }}</a
            >
          </template>

          <template v-slot:[`item.income_sum`]="{ item }">
            <!-- <li
              v-for="(income,index) in item.income"
              :key="index"
            >
              {{income.money}}
            </li> -->
            {{
              Number(item.income_sum).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </template>

          <template v-slot:[`item.expenses_without_car_sum`]="{ item }">
            <!-- <li
              v-for="(expenses,index) in item.expenses_without_car"
              :key="index"
            >
              {{expenses.money}}
            </li> -->
            {{
              Number(item.expenses_without_car_sum).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </template>

          <template v-slot:[`item.cars.amount_overCost`]="{ item }">
            {{
              Number(item.cars.amount_overCost).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </template>

          <template v-slot:[`item.expenses_car`]="{ item }">
            <span
              v-for="(expenses, index) in item.sum_over_all_expenses"
              :key="index"
            >
              <span v-if="expenses.detail == 'ค่าตัวรถ'">
                {{
                  Number(expenses.money).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </span>
            </span>
          </template>

          <template v-slot:[`item.expenses_sum`]="{ item }">
            {{
              Number(item.expenses_sum).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </template>

          <template v-slot:[`item.profitOrLoss`]="{ item }">
            <span v-if="item.profitOrLoss < 0" style="color: red">{{
              Number(item.profitOrLoss).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}</span>
            <span v-else>{{
              Number(item.profitOrLoss).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}</span>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import * as apiReport from "@/Api/apiReport";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";
import moment from "moment";

import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    dateSelect2,
  },
  data() {
    return {
      loading: false,
      dialogFilter: false,
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      search: "",
      dialogAllInfoCar: false,
      formTitleAllInfoCar: "ภาพรวมลำดับรถ",
      data: [],
      data_filter: [],
      car_model_id: null,
      car_serie_id: null,
      car_serie_sub_id: null,
      year_start: null,
      year_end: null,
      carModel: [],
      carSerie: [],
      carSerieSub: [],
      years: [],
      headers: [
        {
          text: "วันที่ปล่อยรถ",
          value: "contract.contract_date",
        },
        {
          text: "ลำดับ",
          value: "cars.car_no",
          align: "center",
          class: "textOneLine",
        },
        {
          text: "สาขา",
          value: "branch.branch_name",
          class: "textOneLine",
        },

        {
          text: "รายละเอียดรถ",
          value: "car_detail",
          class: "textOneLine",
        },
        {
          text: "รายรับ",
          value: "income_sum",
          class: "textOneLine",
          align: "right",
        },

        {
          text: "ค่าตัวรถ",
          value: "expenses_car",
          class: "textOneLine",
          align: "right",
        },
        {
          text: "ค่าดำเนินการ",
          value: "cars.amount_overCost",
          class: "textOneLine",
          align: "right",
        },
        {
          text: "ค่าใช้จ่าย",
          value: "expenses_without_car_sum",
          class: "textOneLine",
          align: "right",
        },
        {
          text: "รวมรายจ่าย",
          value: "expenses_sum",
          class: "textOneLine",
          align: "right",
        },
        {
          text: "กำไร/ขาดทุน",
          value: "profitOrLoss",
          class: "textOneLine",
          align: "right",
        },
      ],
    };
  },
  mounted() {
    this.getData();
    this.getCarmodels();
    this.getYearCurrent();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
    // profit(key, data_income, data_expense) {
    //   let income = data_income.reduce((sum, item) => sum + item[key], 0);
    //   let expense = data_expense.reduce((sum, item) => sum + item[key], 0);
    //   return income - expense;
    // },
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
      const response = await apiReport.report_profit(data);
      console.log(response.data);
      this.data = response.data;
      this.data_filter = this.data;
      this.loading = false;
    },
    async getCarmodels() {
      const response = await apiCar_models.select();
      this.carModel = response.data;
      this.loading = false;
    },
    async eventSelectModel() {
      this.getCarseries();
      this.car_serie_id = null;
    },
    async getCarseries() {
      const response = await apiCar_series.selectDropdownCarSerieOnly(
        this.car_model_id
      );
      this.carSerie = response.data;
      // this.loading = false;
      // this.getCarSerieSub();
    },
    async getCarSerieSub() {
      const response = await apiCar_serie_sub.select(this.car_serie_id);
      this.carSerieSub = response.data;
    },
    filterData() {
      console.log(this.car_model_id);
      this.data_filter = this.data
        .filter((item) => {
          if (!this.car_model_id) {
            return true;
          } else {
            return item.cars.car_models_id == this.car_model_id;
          }
        })
        .filter((item) => {
          if (!this.car_serie_id) {
            return true;
          } else {
            return item.cars.car_serie_id == this.car_serie_id;
          }
        })
        .filter((item) => {
          if (!this.car_serie_sub_id) {
            return true;
          } else {
            return item.cars.car_serie_sub_id == this.car_serie_sub_id;
          }
        })
        .filter((item) => {
          if (!this.year_start && !this.year_end) {
            return true;
          } else if (this.year_start && !this.year_end) {
            return item.cars.car_year >= this.year_start;
          } else if (!this.year_start && this.year_end) {
            return (
              item.cars.car_year <= this.year_end && item.cars.car_year != null
            );
          } else {
            return (
              item.cars.car_year >= this.year_start &&
              item.cars.car_year <= this.year_end
            );
          }
        });
    },
    async getYearCurrent() {
      var max = new Date().getFullYear();
      var min = max - 50;

      for (var i = max; i >= min; i--) {
        this.years.push(i);
      }
      this.$nextTick(() => {
        this.years.push(9999);
      });
    },
    async AllInfoCar(id, car_no) {
      let routeData = this.$router.resolve({
        // name: "/infocar/infocar",
        name: "infocar-infocar",
        query: { id: id, formTitleAllInfoCar: car_no },
      });
      window.open(routeData.href, "_blank");
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
              "รายงานกำไรขาดทุน (" +
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
      return jsonData.map((v) => filterVal.map((j) => {}));
    },
  },
  watch: {
    data() {
      // const self = this;
      return this.data.map(function (item) {
        let income = item.income.reduce((sum, item) => sum + item["money"], 0);
        let expense = item.sum_over_all_expenses.reduce(
          (sum, item) => sum + item["money"],
          0
        );
        item.profitOrLoss = income - expense;

        item.income_sum = item.income.reduce(
          (sum, item) => sum + item["money"],
          0
        );
        item.expenses_without_car_sum = item.expenses_without_car.reduce(
          (sum, item) => sum + item["money"],
          0
        );
        item.expenses_sum = item.sum_over_all_expenses.reduce(
          (sum, item) => sum + item["money"],
          0
        );

        item.car_detail =
          "<div>ยี่ห้อ: " +
          item.cars.car_models.car_model_name +
          "</div>" +
          "<div>รุ่น: " +
          item.cars.car_series.car_series_name +
          "</div>" +
          "<div>รุ่นย่อย: " +
          item.cars.car_serie_sub.car_serie_sub_name +
          "</div>" +
          "<div>ปี: " +
          item.cars.car_year +
          "</div>" +
          "<div>สี: " +
          item.cars.color.color_name +
          "</div>";
      });
    },
  },
};
</script>

<style>
</style>
