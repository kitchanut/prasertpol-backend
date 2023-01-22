<template>
  <div>
    <h3>จำนวนรถและมูลค่ารถ</h3>
    <v-card class="mt-5">
      <v-row class="pa-2">
        <v-col cols="3">
          <v-autocomplete
            v-model="car_stock"
            :items="carStockSelect"
            no-data-text="ไม่มีข้อมูล"
            item-text="title"
            item-value="value"
            label="เลือกประเภท:"
            @change="changeSelectCarStock"
            outlined
            dense
            hide-details
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
            v-model="selectTime"
            :items="timeSelect"
            no-data-text="ไม่มีข้อมูล"
            item-text="title"
            item-value="value"
            label="ช่วงเวลา:"
            @change="changeSelectTime"
            outlined
            dense
            hide-details
          >
          </v-autocomplete>
        </v-col>

        <v-col cols="3">
          <v-menu
            ref="menuTimeStart"
            v-model="menuTimeStart"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="timeStart"
                label="วันที่เริ่มต้น"
                v-bind="attrs"
                v-on="on"
                persistent-hint
                prepend-icon=""
                outlined
                dense
                hide-details
                flathide-details
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="timeStart"
              locale="th-TH"
              picker-date
              @input="menuTimeStart = false"
              @change="getDataDoughnutBranch"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="3">
          <v-menu
            ref="menuTimeEnd"
            v-model="menuTimeEnd"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="timeEnd"
                label="วันที่สิ้นสุด"
                v-bind="attrs"
                v-on="on"
                persistent-hint
                prepend-icon=""
                outlined
                dense
                hide-details
                flathide-details
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="timeEnd"
              locale="th-TH"
              picker-date
              @input="menuTimeEnd = false"
              @change="getDataDoughnutBranch"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="small">
          <DoughnutChartBranch
            v-if="middleTextCar != 0"
            :middleText="middleTextCar"
            :chart-data="dataChartCar"
          />
          <h1 class="text-center red--text" v-else>ไม่มีข้อมูล</h1>
        </v-col>
        <v-col cols="6" class="small">
          <DoughnutChartBranch
            v-if="middleTextPrice != 0"
            :middleText="middleTextPrice"
            :chart-data="dataChartPrice"
          />
          <h1 class="text-center red--text" v-else>ไม่มีข้อมูล</h1>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import * as apiDashboard from "@/Api/apiDashboard";
import moment from "moment";
// Bar chart
import DoughnutChartBranch from "@/components/DoughnutChart/DoughnutChartBranch";

export default {
  components: {
    // Doughnut
    DoughnutChartBranch,
  },
  props: ["branch_id"],
  data() {
    return {
      yearSelect: this.$store.state.yearSelect,
      car_stock: 0,
      carStockSelect: this.$store.state.carStockSelect,
      timeSelect: this.$store.state.timeSelect,
      // Bar
      dataChartCar: null,
      dataChartPrice: null,
      middleTextCar: 0,
      middleTextPrice: 0,
      selectTime: 9,
      menuTimeStart: false,
      menuTimeEnd: false,
      timeStart: moment().startOf("years").format("YYYY-MM-DD"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD"),
    };
  },
  async mounted() {
    await this.getDataDoughnutBranch();
  },
  computed: {},
  methods: {
    async getDataDoughnutBranch() {
      const dataBar = new FormData();
      dataBar.append("car_stock", this.car_stock);
      dataBar.append("branch_id", this.branch_id);
      dataBar.append("timeStart", this.timeStart);
      dataBar.append("timeEnd", this.timeEnd);
      const responseBar = await apiDashboard.dashboardManagerDoughnutStock(
        dataBar
      );
      // console.log(responseBar);

      // Car
      this.middleTextCar = responseBar.data.car_sum;
      this.dataChartCar = {
        labels: responseBar.data.car_labels,
        datasets: [
          {
            borderWidth: 1,
            borderColor: [
              "rgba(255, 206, 86, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            backgroundColor: responseBar.data.car_backgroundColor,
            data: responseBar.data.car_data,
          },
        ],
      };

      // Price
      this.middleTextPrice = responseBar.data.car_sum_price;
      this.dataChartPrice = {
        labels: responseBar.data.car_labels,
        datasets: [
          {
            borderWidth: 1,
            borderColor: [
              "rgba(255, 206, 86, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            backgroundColor: responseBar.data.car_backgroundColor,
            data: responseBar.data.car_price,
          },
        ],
      };
    },
    async changeSelectTime(value) {
      if (value == 1) {
        this.timeStart = moment().startOf("day").format("YYYY-MM-DD");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD");
      } else if (value == 2) {
        this.timeStart = moment()
          .startOf("day")
          .add(-1, "days")
          .format("YYYY-MM-DD");
        this.timeEnd = moment()
          .endOf("day")
          .add(-1, "days")
          .format("YYYY-MM-DD");
      } else if (value == 3) {
        this.timeStart = moment()
          .startOf("day")
          .add(-7, "days")
          .format("YYYY-MM-DD");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD");
      } else if (value == 4) {
        this.timeStart = moment()
          .startOf("day")
          .add(-30, "days")
          .format("YYYY-MM-DD");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD");
      } else if (value == 5) {
        this.timeStart = moment().startOf("months").format("YYYY-MM-DD");
        this.timeEnd = moment().endOf("months").format("YYYY-MM-DD");
      } else if (value == 6) {
        this.timeStart = moment()
          .add(-1, "months")
          .startOf("months")
          .format("YYYY-MM-DD");
        this.timeEnd = moment()
          .add(-1, "months")
          .endOf("months")
          .format("YYYY-MM-DD");
      } else if (value == 7) {
        this.timeStart = moment()
          .add(-3, "months")
          .startOf("months")
          .format("YYYY-MM-DD");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD");
      } else if (value == 8) {
        this.timeStart = moment()
          .add(-6, "months")
          .startOf("months")
          .format("YYYY-MM-DD");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD");
      } else if (value == 9) {
        this.timeStart = moment().startOf("years").format("YYYY-MM-DD");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD");
      } else if (value == 10) {
        this.timeStart = moment()
          .add(-3, "years")
          .startOf("years")
          .format("YYYY-MM-DD");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD");
      }
      await this.getDataDoughnutBranch();
    },
    async changeSelectCarStock() {
      this.getDataDoughnutBranch();
    },
  },
  watch: {
    branch_id() {
      this.getDataDoughnutBranch();
    },
  },
};
</script>

<style></style>
