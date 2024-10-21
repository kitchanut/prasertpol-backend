<template>
  <div class="pa-3">
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-text>
            <div class="d-flex align-center">
              <h3>ยอดปล่อยเทียบกับเดือนก่อนหน้า (เดือนคอม)</h3>
              <v-spacer></v-spacer>
              <v-col cols="3" class="pa-0">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="true"
                  :return-value.sync="commission_mount"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="mt-0"
                      v-model="commission_mount"
                      append-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      hide-details=""
                      outlined
                      dense
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="commission_mount"
                    type="month"
                    locale="th"
                    no-title
                    scrollable
                    @change="
                      $refs.menu.save(commission_mount);
                      getData();
                    "
                  >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <BarChart :chart-data="dataChart" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined>
          <v-card-text>
            <div class="d-flex align-center">
              <h3>ยอดปล่อยเทียบกับปีก่อน (เดือนคอม)</h3>
              <v-spacer></v-spacer>
              <v-col cols="3" class="pa-0">
                <v-menu
                  ref="menuYear"
                  v-model="menuYear"
                  :close-on-content-click="true"
                  :return-value.sync="commission_mount_year"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="mt-0"
                      v-model="commission_mount_year"
                      append-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      hide-details=""
                      outlined
                      dense
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="commission_mount_year"
                    type="month"
                    locale="th"
                    no-title
                    scrollable
                    @change="
                      $refs.menuYear.save(commission_mount_year);
                      getLastYear();
                    "
                  >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <BarChart :chart-data="dataChartYear" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="mt-3" outlined>
      <v-card-text>
        <div class="d-flex align-center">
          <h3>ยอดปล่อยรายไตรมาส</h3>
          <v-spacer></v-spacer>
          <v-col cols="2" class="pa-0">
            <v-select :items="years" v-model="year" outlined dense hide-details @change="getQuarters()"></v-select>
          </v-col>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <BarChart :chart-data="dataChartQuarters" />
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import * as apiDashboard from "@/Api/apiDashboard";
import BarChart from "@/components/BarChart";
export default {
  components: {
    BarChart,
  },
  data() {
    return {
      menu: false,
      commission_mount: new Date().toISOString().substr(0, 7),
      menuYear: false,
      commission_mount_year: new Date().toISOString().substr(0, 7),
      year: new Date().getFullYear(),
      years: [new Date().getFullYear(), new Date().getFullYear() - 1, new Date().getFullYear() - 2],
      dataChart: null,
      dataChartYear: null,
      dataChartQuarters: null,
    };
  },
  mounted() {
    this.getData();
    this.getLastYear();
    this.getQuarters();
  },
  methods: {
    async getData() {
      const data = new FormData();
      data.append("commission_mount", this.commission_mount);
      const response = await apiDashboard.dashboard_sale_compare_commission_mount(data);
      this.dataChart = {
        labels: response.data.map((item) => item.branch_team_name),
        datasets: [
          {
            label: "ยอดปล่อยเดือนก่อน",
            backgroundColor: "#f87979",
            data: response.data.map((item) => item.total_previos),
          },
          {
            label: "ยอดปล่อย",
            backgroundColor: "#1876D1",
            data: response.data.map((item) => item.total),
          },
        ],
      };
    },
    async getLastYear() {
      const data = new FormData();
      data.append("commission_mount", this.commission_mount_year);
      const response = await apiDashboard.dashboard_sale_compare_commission_mount_previos_year(data);
      this.dataChartYear = {
        labels: response.data.map((item) => item.branch_team_name),
        datasets: [
          {
            label: "ยอดปล่อยปีก่อน",
            backgroundColor: "#f87979",
            data: response.data.map((item) => item.total_previos),
          },
          {
            label: "ยอดปล่อย",
            backgroundColor: "#1876D1",
            data: response.data.map((item) => item.total),
          },
        ],
      };
    },
    async getQuarters() {
      const data = new FormData();
      data.append("year", this.year);
      const response = await apiDashboard.dashboard_sale_compare_quarters(data);
      const keysArray = Object.keys(response.data);
      const valuesArray = Object.values(response.data);
      const colors = ["#f87979", "#1876D1", "#4CAF4F", "#FB8C00"];
      let datasets = [];
      keysArray.forEach((element, index) => {
        datasets.push({
          label: element,
          backgroundColor: colors[index],
          data: Object.values(valuesArray[index]).map((item) => item.total),
        });
      });

      this.dataChartQuarters = {
        labels: Object.values(valuesArray[0]).map((item) => item.branch_team_name),
        datasets: datasets,
      };
    },
  },
};
</script>
