<template>
  <div>
    <v-card-text>
      <v-row class="pa-2">
        <v-col cols="5"> </v-col>
        <v-col cols="7">
          <dateSelectMonth @timeSelect="selectTimeStart" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card outlined style="border: 1px solid #eee" height="100%" :loading="loading">
            <v-card-title class="py-2"> ยอดปล่อยรถสูงสุด </v-card-title>
            <v-divider></v-divider>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">ลำดับ</th>
                    <th>เซล</th>
                    <th>ทีมสาขา</th>
                    <th class="text-center">ยอดปล่อยรถ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in data" :key="key" v-if="key < 15">
                    <td align="center" width="100px">{{ key + 1 }}</td>
                    <td>{{ item.sale_name }}</td>
                    <td>{{ item.branch_team_name }}</td>
                    <td align="center">
                      <v-chip v-if="key == 0" :ripple="false" class="mr-2" color="warning" small>
                        {{ item.count }}
                      </v-chip>
                      <v-chip v-else-if="key == 1" :ripple="false" class="mr-2" color="primary" small>
                        {{ item.count }}
                      </v-chip>
                      <v-chip v-else-if="key == 2" :ripple="false" class="mr-2" color="error" small>
                        {{ item.count }}
                      </v-chip>
                      <v-chip v-else :ripple="false" class="mr-2" small> {{ item.count }} </v-chip>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined style="border: 1px solid #eee" height="100%" :loading="loadingProfit">
            <v-card-title class="py-2"> กำไรสูงสุด </v-card-title>
            <v-divider></v-divider>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="100px">ลำดับ</th>
                    <th>เซล</th>
                    <th>ทีมสาขา</th>
                    <th class="text-right">กำไร</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in sortableProfitOrLoss" :key="key" v-if="key < 15">
                    <td align="center">{{ key + 1 }}</td>
                    <td>{{ item.sale_name }}</td>
                    <td>{{ item.branch_team_name }}</td>
                    <td align="end">
                      <b v-if="key == 0" class="warning--text">{{ Number(item.profit).toLocaleString() }} </b>
                      <b v-else-if="key == 1" class="primary--text">{{ Number(item.profit).toLocaleString() }} </b>
                      <b v-else-if="key == 2" class="error--text">{{ Number(item.profit).toLocaleString() }} </b>
                      <span v-else>{{ Number(item.profit).toLocaleString() }} </span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>
<script>
import * as apiDashboard from "@/Api/apiDashboard";
import moment from "moment";
export default {
  data() {
    return {
      timeStart: moment().startOf("months").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("months").format("YYYY-MM-DD HH:mm"),
      loading: false,
      loadingProfit: false,
      data: [],
      profit: [],
      groupedProfitOrLoss: {},
      sortableProfitOrLoss: [],
    };
  },
  mounted() {
    this.getData();
    this.getProfit();
  },
  methods: {
    selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getData();
      this.getProfit();
    },
    async getData() {
      this.loading = true;
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiDashboard.dashboard_top_saler(data);

      this.data = response.data;
      this.data.sort(function (a, b) {
        return a.count - b.count;
      });
      this.data.reverse(function (a, b) {
        return a.count - b.count;
      });
      this.loading = false;
    },
    async getProfit() {
      this.loadingProfit = true;
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("type", "release");
      const response = await apiDashboard.dashboard_top_profit(data);
      console.log(response.data);
      // break;
      // this.loadingProfit = false;
      // return;

      if (response.status == 200) {
        this.profit = response.data;
      } else {
        alert("เกิดข้อผิดพลาด");
      }
      this.profit.map(function (item) {
        // ค่าดำเนินการ
        item.amount_overCost = item.cars.amount_overCost;
        // รวมรายรับ
        item.income_sum_money = item.income
          .filter((x) => x.detail != "ค่าคอมจากธนาคาร")
          .reduce((sum, item) => sum + item["money"], 0);
        // รวมค่าใช้จ่าย
        item.sum_over_all_expenses_sum_money =
          Number(item.expenses.reduce((sum, item) => sum + item["money"], 0)) + Number(item.amount_overCost);
        item.expenses_only_car_sum_money = item.expenses.reduce(
          (sum, item) => (item["detail"] == "ค่าตัวรถ" ? sum + item["money"] : sum),
          0
        );
        // กำไร/ขาดทุน
        item.profitOrLoss = item.income_sum_money - item.sum_over_all_expenses_sum_money;
      });

      console.log(this.profit);

      this.groupedProfitOrLoss = this.profit.reduce((acc, curr) => {
        if (acc[curr.sale_id]) {
          acc[curr.sale_id] += curr.profitOrLoss;
        } else {
          acc[curr.sale_id] = curr.profitOrLoss;
        }
        return acc;
      }, {});

      let sortable = [];
      for (var sale in this.groupedProfitOrLoss) {
        let findSale = this.profit.find((x) => x.sale_id == sale);
        sortable.push({
          sale_name: findSale.sale.first_name,
          branch_team_name: findSale.branch_team.branch_team_name,
          profit: this.groupedProfitOrLoss[sale],
        });
      }
      sortable.sort(function (a, b) {
        return b.profit - a.profit;
      });
      this.sortableProfitOrLoss = sortable;
      this.loadingProfit = false;
    },
  },
};
</script>
