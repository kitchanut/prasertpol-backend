<template>
  <div>
    <!-- <v-card class="mt-5"> -->
    <v-row class="pa-2">
      <v-col>
        <h5>
          ยอดซื้อรวม:
          {{
            Number(sumCar_buy).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
          บ.
        </h5>
        <h5>
          ยอดขายรวม:
          {{
            Number(sumCar_sale).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
          บ.
        </h5>
        <!-- <h5>
            กำไร:
            {{
              Number(sumCar_buy - sumCar_sale).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
            บ.
          </h5> -->
      </v-col>
      <v-col cols="3">
        <v-autocomplete
          v-model="years_id"
          :items="yearSelect"
          no-data-text="ไม่มีข้อมูล"
          item-text="title"
          item-value="value"
          label="เลือกปี:"
          @change="changeSelectYear"
          outlined
          dense
          hide-details
        >
        </v-autocomplete>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <BarChartCarCount class="mt-5" :chart-data="dataChartCount" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <BarChartCar class="mt-5" :chart-data="dataChart" />
      </v-col>
    </v-row>
    <!-- </v-card> -->
  </div>
</template>
<script>
import * as apiDashboard from "@/Api/apiDashboard";
import moment from "moment";
// Bar chart
import BarChartCar from "@/components/BarChart/BarChartCar";
import BarChartCarCount from "@/components/BarChart/BarChartCar";
export default {
  components: {
    // Bar
    BarChartCar,
    BarChartCarCount,
  },
  props: ["branch_id"],
  data() {
    return {
      years_id: 1,
      yearStart: moment().startOf("year").format("YYYY-MM-DD"),
      yearEnd: moment().endOf("year").format("YYYY-MM-DD"),
      yearSelect: this.$store.state.yearSelect,
      // Bar
      dataChart: null,
      dataChartCount: null,
      sumCar_buy: 0,
      sumCar_sale: 0,
    };
  },
  async mounted() {
    await this.getDataBarVisitCarType();
  },
  computed: {},
  methods: {
    async selectYear() {
      await this.getDataBarVisitCarType();
    },
    async getDataBarVisitCarType() {
      const dataBar = new FormData();
      dataBar.append("branch_id", this.branch_id);
      dataBar.append("timeStart", this.yearStart);
      dataBar.append("timeEnd", this.yearEnd);
      const responseBar = await apiDashboard.dashboardManagerCar(dataBar);
      // console.log(responseBar.data);

      this.sumCar_buy = responseBar.data.sumCar_buy;
      this.sumCar_sale = responseBar.data.sumCar_sale;

      this.dataChart = {
        labels: this.$store.state.months_th,
        datasets: [
          {
            label: "มูลค่ายอดซื้อ (บ.)",
            backgroundColor: "#f87979",
            data: responseBar.data.car_buy,
          },
          {
            label: "มูลค่ายอดขา​ย (บ.)",
            backgroundColor: "#3D5B96",
            data: responseBar.data.car_sale,
          },
        ],
      };

      this.dataChartCount = {
        labels: this.$store.state.months_th,
        datasets: [
          {
            label: "ยอดซื้อเข้า (คัน)",
            backgroundColor: "#f87979",
            data: responseBar.data.countCar_buy,
          },
          {
            label: "ยอดปล่อยรถ (คัน)",
            backgroundColor: "#3D5B96",
            data: responseBar.data.countCar_sale,
          },
        ],
      };
    },
    async changeSelectYear(value) {
      if (value == 1) {
        this.yearStart = moment().startOf("years").format("YYYY-MM-DD");
        this.yearEnd = moment().endOf("years").format("YYYY-MM-DD");
      } else if (value == 2) {
        this.yearStart = moment().add(-1, "years").startOf("years").format("YYYY-MM-DD");
        this.yearEnd = moment().add(-1, "years").endOf("years").format("YYYY-MM-DD");
      } else if (value == 3) {
        this.yearStart = moment().add(-2, "years").startOf("years").format("YYYY-MM-DD");
        this.yearEnd = moment().add(-2, "years").endOf("years").format("YYYY-MM-DD");
      } else if (value == 4) {
        this.yearStart = moment().add(-3, "years").startOf("years").format("YYYY-MM-DD");
        this.yearEnd = moment().add(-3, "years").endOf("years").format("YYYY-MM-DD");
      }
      await this.selectYear();
    },
  },
  watch: {
    branch_id() {
      this.getDataBarVisitCarType();
    },
  },
};
</script>

<style></style>
