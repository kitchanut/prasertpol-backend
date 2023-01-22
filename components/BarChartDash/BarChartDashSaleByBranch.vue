<template>
  <div>
    <h3>ยอดปล่อยรถแยกตามสาขา</h3>
    <v-card>
      <v-card-text>
        <dateSelectMonth @timeSelect="selectTimeStart" />
        <br />
        <div>
          <p style="font-size: 16px">
            ยอดปล่อยรวม:
            <v-chip class="ma-2" color="green" text-color="white">
              {{ total }}
            </v-chip>
          </p>
          <BarChartSaleCarByBranch class="mt-5" :chart-data="dataChart" />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import * as apiDashboard from "@/Api/apiDashboard";
import * as apiBranch_teams from "@/Api/apiBranch_teams";
import BarChartSaleCarByBranch from "@/components/BarChart/BarChartSaleCarByBranch";

export default {
  components: {
    // Bar
    BarChartSaleCarByBranch,
  },
  data() {
    return {
      timeStart: moment().startOf("months").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("months").format("YYYY-MM-DD HH:mm"),
      data: [],
      dataChart: null,
      branchTeams: [],
      total: null,
    };
  },
  async mounted() {
    await this.getBranchTeam();
    await this.getData();
  },
  methods: {
    async getBranchTeam() {
      const response = await apiBranch_teams.index();
      this.branchTeams = response.data;
      //   this.branchTeams.unshift({
      //     id: 0,
      //     branch_team_name: "ทั้งหมด",
      //   });
      // this.getData();
    },
    selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getData();
    },
    async getData() {
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiDashboard.dashboard_saleByBranch(data);
      this.data = response.data.car_sale;
      this.total = response.data.sumCar_sale;
      console.log(this.data);

      var datasets = [];
      var label = [];
      this.branchTeams.forEach((element) => {
        label.push(element.branch_team_name);
        datasets.push(this.countField(element.id));
      });
      //   console.log(datasets);

      this.dataChart = {
        labels: label,
        datasets: [
          {
            label: "ยอดปล่อยรถ",
            backgroundColor: "#3D5B96",
            data: datasets,
          },
        ],
      };
    },
    countField(branch_team_id) {
      return this.data
        .filter((d) => {
          if (branch_team_id == 0) {
            return true;
          } else {
            return d.branch_team_id == branch_team_id;
          }
        })
        .reduce((total, x) => total + x.count, 0);
    },
  },
};
</script>

<style>
</style>