<template>
  <div>
    <v-card>
      <v-card-text>
        <dateSelect2 @timeSelect="selectTimeStart" />

        <v-row>
          <v-col class="d-flex align-end">
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
          <template v-slot:[`item.car_detail`]="{ item }">
            <div v-html="item.car_detail" />
          </template>

          <template v-slot:[`item.cars.car_no`]="{ item }">
            <v-btn
              small
              color="primary"
              @click="AllInfoCar(item.cars.id, item.cars.car_no)"
              >{{ item.cars.car_no }}</v-btn
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
      dialogAllInfoCar: false,
      formTitleAllInfoCar: "ภาพรวมลำดับรถ",
      data: [],
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
        // {
        //   text: "รุ่น",
        //   value: "cars.car_series.car_series_name",
        //   class: "textOneLine",
        // },
        // {
        //   text: "รุ่นย่อย",
        //   value: "cars.car_serie_sub.car_serie_sub_name",
        //   class: "textOneLine",
        // },
        // {
        //   text: "ปี",
        //   value: "cars.car_year",
        //   class: "textOneLine",
        // },
        // {
        //   text: "สี",
        //   value: "cars.color.color_name",
        //   class: "textOneLine",
        // },
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
      this.loading = false;
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
          "</div>";
        "<div>รุ่นย่อย: " +
          item.cars.car_serie_sub.car_serie_sub_name +
          "</div>";
        "<div>ปี: " + item.cars.car_year + "</div>";
        "<div>สี: " + item.cars.color.color_name + "</div>";
      });
    },
  },
};
</script>

<style>
</style>
