<template>
  <div>
    <v-card>
      <v-card-text>
        <dateSelectMonth @timeSelect="selectTimeStart" />

        <v-row>
          <v-col cols="7">
            <v-card outlined>
              <v-card-text>
                <p style="font-size: 16px">
                  ยอดจองรวม:
                  <v-chip class="ma-2" color="green" text-color="white">
                    {{ total }}
                  </v-chip>
                </p>
                <BarChartSaleCarByBranch :chart-data="dataChart" />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card outlined height="100%">
              <v-card-text>
                <PieChart :chart-data="dataChartPie" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-simple-table dense class="table-border table-border-top">
        <template v-slot:default>
          <thead>
            <tr>
              <th>ทีมสาขา</th>

              <th class="text-center">จอง</th>
              <th class="text-center">เซนต์สัญญา</th>
              <th class="text-center">อนุมัติ</th>
              <th class="text-center">ปล่อยรถ</th>
              <th class="text-center">ยอดเดือนคอม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ทั้งหมด</td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField(2, "all") }}</b></v-chip
                >
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField(5, "all") }} </b></v-chip
                >
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField(7, "all") }}</b></v-chip
                >
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField(8, "all") }}</b></v-chip
                >
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countFieldComission(0) }}</b></v-chip
                >
              </td>
            </tr>
            <tr v-for="(item, index) in branchTeams" :key="index">
              <td>{{ item.branch_team_name }}</td>
              <td align="center">
                <div>
                  {{ countField(2, item.branch_team_name) }}
                </div>
              </td>
              <td align="center">
                <div>
                  {{ countField(5, item.branch_team_name) }}
                </div>
              </td>

              <td align="center">
                <div>
                  {{ countField(7, item.branch_team_name) }}
                </div>
              </td>

              <td align="center">
                <div>
                  {{ countField(8, item.branch_team_name) }}
                </div>
              </td>
              <td align="center">
                {{ countFieldComission(item.id) }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import * as apiDashboard from "@/Api/apiDashboard";
import * as apiBranch_teams from "@/Api/apiBranch_teams";
import * as apiWorks from "@/Api/apiWorks";
import BarChartSaleCarByBranch from "@/components/BarChart/BarChartSaleCarByBranch";
import PieChart from "@/components/PieChart/Channel";

export default {
  components: {
    // Bar
    BarChartSaleCarByBranch,
    PieChart,
  },
  data() {
    return {
      timeStart: moment().startOf("months").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("months").format("YYYY-MM-DD HH:mm"),
      data: [],
      follow: [],
      commission: [],
      dataChart: null,
      dataChartPie: null,
      branchTeams: [],
      total: null,
    };
  },
  async mounted() {
    await this.getBranchTeam();
    this.getData();
    this.getDataPie();
    this.getDataFollowWork();
    this.getDataCom();
  },
  methods: {
    async getBranchTeam() {
      const response = await apiBranch_teams.index();
      this.branchTeams = response.data;
    },
    selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;

      this.getData();
      this.getDataPie();
      this.getDataFollowWork();
      this.getDataCom();
    },
    async getData() {
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiDashboard.dashboard_saleByBranch(data);
      // this.data = response.data.car_sale;
      this.total = response.data.sum;
      console.log(response.data);

      var datasets = [];
      var label = [];
      this.branchTeams.forEach((element) => {
        let find = response.data.booking.find((d) => d.branch_team_id == element.id);
        if (find) {
          label.push(element.branch_team_name);
          datasets.push(find.count);
        } else {
          label.push(element.branch_team_name);
          datasets.push(0);
        }
      });
      this.dataChart = {
        labels: label,
        datasets: [
          {
            label: "ยอดจอง",
            backgroundColor: "#3D5B96",
            data: datasets,
          },
        ],
      };
    },
    async getDataPie() {
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiDashboard.dashboard_chanel(data);
      // console.log(response.data);

      var datasets = [];
      var label = [];
      var backgroundColor = [];
      response.data.forEach((element) => {
        label.push(element.hear_from_type);
        datasets.push(element.count);
        backgroundColor.push(this.generateRandomPastelColor().hex);
      });

      this.dataChartPie = {
        labels: label,
        datasets: [
          {
            data: datasets,
            backgroundColor: backgroundColor,
          },
        ],
      };
    },
    generateRandomPastelColor() {
      function pastelValue(value) {
        return Math.floor((value + 255) / 2);
      }

      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      const pastelR = pastelValue(r);
      const pastelG = pastelValue(g);
      const pastelB = pastelValue(b);

      const rgb = `RGB(${pastelR}, ${pastelG}, ${pastelB})`;
      const hex = `#${pastelR.toString(16).padStart(2, "0")}${pastelG.toString(16).padStart(2, "0")}${pastelB
        .toString(16)
        .padStart(2, "0")}`;

      return { rgb, hex };
    },
    async getDataFollowWork() {
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("work_status", "all");
      const response = await apiWorks.followWork(data);
      this.follow = response.data.data;
    },
    async getDataCom() {
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      const response = await apiWorks.commission_month_by_team_branch(data);
      this.commission = response.data;
    },
    countFieldBarChart(branch_team_id) {
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
    countFieldComission(branch_team_id) {
      return this.commission
        .filter((d) => {
          if (branch_team_id == 0) {
            return true;
          } else {
            return d.branch_team_id == branch_team_id;
          }
        })
        .reduce((total, x) => total + 1, 0);
    },
    countField(key, branchTeams) {
      if (key == 1 || key == 2 || key == 5 || key == 7 || key == 8) {
        return this.follow
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .reduce((total, x) => (x.work_status >= key ? total + 1 : total), 0);
      } else if (key == "appointment_bank_type") {
        return this.follow
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.work_status >= 5;
          })
          .reduce((total, x) => (x.appointment_bank_type == "ไม่ครบ" ? total + 1 : total), 0);
      } else if (key == "appointment_bank_type_success") {
        return this.follow
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.work_status >= 5;
          })
          .reduce((total, x) => (x.appointment_bank_type == "ครบ" ? total + 1 : total), 0);
      } else if (key == "appointment_sentbook_date") {
        return this.follow
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.appointment_sentbook_date != " ";
          })
          .reduce((total, x) => (x.appointment_sentbook_date != " " ? total + 1 : total), 0);
      } else if (key == "appointment_money_price") {
        return this.follow
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.appointment_sentbook_date != " ";
          })
          .reduce((total, x) => (x.appointment_money_price > 0 ? total + 1 : total), 0);
      }
    },
  },
};
</script>

<style></style>
