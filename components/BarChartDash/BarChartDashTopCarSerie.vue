<template>
  <div>
    <!-- <h3>รุ่นรถขายดี</h3> -->
    <!-- <v-card class="mt-5"> -->
    <v-row class="pa-2 mt-5">
      <v-col cols="9"> </v-col>
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

    <v-row class="pa-2">
      <v-col v-for="(listCar, keys) in listCars" :key="keys" cols="3">
        <span :style="{ color: listCar.backgroundColor }"> {{ listCar.label }}</span>
        <span style="color: #bb2124">: {{ listCar.data_sum }}</span>
        <span> คัน</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <BarChartTopCars class="mt-5" :chart-data="dataChart" />
      </v-col>
    </v-row>
    <!-- </v-card> -->
  </div>
</template>
<script>
import * as apiDashboard from "@/Api/apiDashboard";
import moment from "moment";
// Bar chart
import BarChartTopCars from "@/components/BarChart/BarChartTopCars";
export default {
  components: {
    // Bar
    BarChartTopCars,
  },
  props: ["branch_id"],
  data() {
    return {
      years_id: 1,
      yearStart: moment().startOf("year").format("YYYY-MM-DD HH:mm"),
      yearEnd: moment().endOf("year").format("YYYY-MM-DD HH:mm"),
      yearSelect: this.$store.state.yearSelect,
      // Bar
      dataChart: null,
      listCars: [],
    };
  },
  async mounted() {
    await this.getDataBarVisitCarSerice();
  },
  computed: {},
  methods: {
    async selectYear() {
      await this.getDataBarVisitCarSerice();
    },
    async getDataBarVisitCarSerice() {
      const dataBar = new FormData();
      dataBar.append("branch_id", this.branch_id);
      dataBar.append("timeStart", this.yearStart);
      dataBar.append("timeEnd", this.yearEnd);
      const responseBar = await apiDashboard.dashboardManagerBarTopCarSerie(dataBar);

      if (responseBar.data.length > 0) {
        var dataGrap = [];
        for (let index = 0; index < 9; index++) {
          dataGrap.push(responseBar.data[index]);
        }

        this.listCars = responseBar.data;
        this.listCars.sort(function (a, b) {
          return a.data_sum - b.data_sum;
        });
        this.listCars.reverse(function (a, b) {
          return a.data_sum - b.data_sum;
        });

        this.dataChart = {
          labels: this.$store.state.months_th,
          datasets: dataGrap,
        };
      }
    },

    async changeSelectYear(value) {
      if (value == 1) {
        this.yearStart = moment().startOf("years").format("YYYY-MM-DD HH:mm");
        this.yearEnd = moment().endOf("years").format("YYYY-MM-DD HH:mm");
      } else if (value == 2) {
        this.yearStart = moment().add(-1, "years").startOf("years").format("YYYY-MM-DD HH:mm");
        this.yearEnd = moment().add(-1, "years").endOf("years").format("YYYY-MM-DD HH:mm");
      } else if (value == 3) {
        this.yearStart = moment().add(-2, "years").startOf("years").format("YYYY-MM-DD HH:mm");
        this.yearEnd = moment().add(-2, "years").endOf("years").format("YYYY-MM-DD HH:mm");
      } else if (value == 4) {
        this.yearStart = moment().add(-3, "years").startOf("years").format("YYYY-MM-DD HH:mm");
        this.yearEnd = moment().add(-3, "years").endOf("years").format("YYYY-MM-DD HH:mm");
      }
      await this.selectYear();
    },
  },
  watch: {
    branch_id() {
      this.getDataBarVisitCarSerice();
    },
  },
};
</script>

<style></style>
