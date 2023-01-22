<template>
  <div>
    <h3>จำนวนรถที่ขายได้และค่าคอม</h3>
    <v-card class="mt-5">
      <v-row class="pa-2">
        <v-col cols="3">
          <v-autocomplete
            v-model="work_status"
            :items="selectWorkingStatus"
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
              @change="getDataDoughnutUser"
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
              @change="getDataDoughnutUser"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="small">
          <DoughnutChartBranch
            v-if="middleTextCar != 0"
            :middleText="middleTextCar"
            :chart-data="dataChart"
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
import DoughnutChartUser from "@/components/DoughnutChart/DoughnutChartUser";

export default {
  components: {
    // Doughnut
    DoughnutChartUser,
  },
  props: ["user_id"],
  data() {
    return {
      work_status: 3,
      selectWorkingStatus: this.$store.state.selectWorkingStatus,
      timeSelect: this.$store.state.timeSelect,
      // Bar
      dataChart: null,
      dataChartPrice: null,
      middleTextCar: 0,
      middleTextPrice: 0,
      selectTime: 9,
      menuTimeStart: false,
      menuTimeEnd: false,
      timeStart: moment().startOf("years").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
    };
  },
  async mounted() {
    await this.getDataDoughnutUser();
  },
  computed: {},
  methods: {
    async getDataDoughnutUser() {
      const dataBar = new FormData();
      dataBar.append("work_status", this.work_status);
      dataBar.append("user_id", this.user_id);
      dataBar.append("timeStart", this.timeStart);
      dataBar.append("timeEnd", this.timeEnd);
      const responseBar = await apiDashboard.dashboardSaleDoughnut(dataBar);
      // console.log(responseBar.data);
      // Car
      this.middleTextCar = responseBar.data.data_sum;
      this.dataChart = {
        labels: responseBar.data.labels,
        datasets: [
          {
            borderWidth: 1,
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
            backgroundColor: responseBar.data.backgroundColor,
            data: responseBar.data.data,
          },
        ],
      };
      // Price
      this.middleTextPrice = responseBar.data.data_sum_com;
      this.dataChartPrice = {
        labels: responseBar.data.labels_com,
        datasets: [
          {
            borderWidth: 1,
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
            // backgroundColor: responseBar.data.newColors_com,
            // data: responseBar.data.newDatas_com,
            backgroundColor: responseBar.data.backgroundColor_com,
            data: responseBar.data.data_com,
          },
        ],
      };
    },
    async changeSelectTime(value) {
      if (value == 1) {
        this.timeStart = moment().startOf("day").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 2) {
        this.timeStart = moment()
          .startOf("day")
          .add(-1, "days")
          .format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment()
          .endOf("day")
          .add(-1, "days")
          .format("YYYY-MM-DD HH:mm");
      } else if (value == 3) {
        this.timeStart = moment()
          .startOf("day")
          .add(-7, "days")
          .format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 4) {
        this.timeStart = moment()
          .startOf("day")
          .add(-30, "days")
          .format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 5) {
        this.timeStart = moment().startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("months").format("YYYY-MM-DD HH:mm");
      } else if (value == 6) {
        this.timeStart = moment()
          .add(-1, "months")
          .startOf("months")
          .format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment()
          .add(-1, "months")
          .endOf("months")
          .format("YYYY-MM-DD HH:mm");
      } else if (value == 7) {
        this.timeStart = moment()
          .add(-3, "months")
          .startOf("months")
          .format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 8) {
        this.timeStart = moment()
          .add(-6, "months")
          .startOf("months")
          .format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 9) {
        this.timeStart = moment().startOf("years").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 10) {
        this.timeStart = moment()
          .add(-3, "years")
          .startOf("years")
          .format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      }
      await this.getDataDoughnutUser();
    },
    async changeSelectCarStock() {
      this.getDataDoughnutUser();
    },
  },
  watch: {
    user_id() {
      this.getDataDoughnutUser();
    },
  },
};
</script>

<style></style>
