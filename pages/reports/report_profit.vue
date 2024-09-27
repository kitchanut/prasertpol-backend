<template>
  <div>
    <v-card>
      <v-card-text class="pb-0">
        <v-row class="d-flex align-center" no-gutters>
          <v-btn-toggle v-model="toggleTeam" mandatory color="primary" style="height: 40px !important" class="mr-2">
            <v-btn :value="null" style="min-width: 0px; height: 40px !important"> คัน </v-btn>
            <v-btn value="team" style="min-width: 0px; height: 40px !important"> ทีม </v-btn>
          </v-btn-toggle>

          <v-btn-toggle v-model="toggleView" mandatory color="success" class="mr-2" style="height: 40px !important">
            <v-btn value="com" style="min-width: 0px; height: 40px !important"> เดือนคอม </v-btn>
            <v-btn value="release" style="min-width: 0px; height: 40px !important"> ปล่อย </v-btn>
            <v-btn value="money" style="min-width: 0px; height: 40px !important"> รับเงิน </v-btn>
          </v-btn-toggle>

          <!-- <v-btn
            :color="toggleView == 'com' ? 'lime' : ''"
            :dark="toggleView == 'com' ? true : false"
            v-blur
            class="ml-1 my-1"
            style="min-width: 0px; padding: 0 8px"
            @click="toggleView = 'com'"
          >
            เดือนคอม
          </v-btn>

          <v-btn
            :color="toggleView == 'release' ? 'lime' : ''"
            :dark="toggleView == 'release' ? true : false"
            v-blur
            class="ml-2 my-1"
            style="min-width: 0px; padding: 0 8px"
            @click="toggleView = 'release'"
          >
            ปล่อย
          </v-btn>

          <v-btn
            :color="toggleView == 'money' ? 'lime' : ''"
            :dark="toggleView == 'money' ? true : false"
            v-blur
            class="ml-1 my-1"
            style="min-width: 0px; padding: 0 8px"
            @click="toggleView = 'money'"
          >
            รับเงิน
          </v-btn> -->

          <v-col v-if="toggleView == 'release' || toggleView == 'money'" cols="2">
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
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col v-if="toggleView == 'release' || toggleView == 'money'" cols="2 ml-1">
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
              <v-date-picker v-model="timeEnd" locale="th-TH" picker-date @input="menuTimeEnd = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col v-if="toggleView == 'com'" cols="2">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="mount"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="mt-0"
                  label="เดือนคอม"
                  v-model="mount"
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
                v-model="mount"
                multiple
                type="month"
                locale="th"
                no-title
                scrollable
                @update="$refs.menu.save(mount)"
                @change="$refs.menu.save(mount)"
              >
                <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
                <v-spacer></v-spacer>
                <v-btn text color="warning" @click="mount = []"> clear </v-btn>
                <v-btn
                  text
                  color="success"
                  @click="
                    $refs.menu.save(mount);
                    getData();
                  "
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="2 ml-1">
            <v-autocomplete
              v-model="branch_team_id"
              :items="dataSelectBranch_teams"
              label="ทีมสาขา"
              item-text="branch_team_name"
              item-value="id"
              no-data-text="ไม่มีข้อมูล"
              outlined
              dense
              hide-details
            >
            </v-autocomplete>
          </v-col>
          <v-btn
            v-if="toggleView != 'com'"
            color="primary"
            v-blur
            class="ml-2 my-1"
            elevation="0"
            style="min-width: 0px; padding: 0px 8px; height: 40px"
            @click="getData()"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn
            @click="handleDownload()"
            color="success"
            class="ml-1 my-1"
            elevation="0"
            style="min-width: 0px; padding: 0 8px; height: 40px"
          >
            <v-icon>mdi-microsoft-excel</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-col cols="2">
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
      </v-card-text>
      <br />
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="data_filter"
        :search="search"
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        dense
        :mobile-breakpoint="0"
        :multi-sort="true"
        :footer-props="{
          'items-per-page-options': [5, 10, 20, 50, 100, -1],
        }"
      >
        <template v-slot:[`body.prepend`]>
          <tr>
            <td v-for="(header, keyHeader) in headers" :key="keyHeader" style="text-align: right">
              <b v-if="header.value == 'number_of_cars'" style="color: blue">
                {{ countField(header.value) }}
              </b>
              <b v-else-if="header.value == 'number_of_profit_cars'" style="color: green">
                {{ countField(header.value) }}
              </b>
              <b v-else-if="header.value == 'number_of_loss_cars'" style="color: red">
                {{ countField(header.value) }}
              </b>

              <b v-else-if="header.align == 'end' && header.value == 'income_sum_money'" style="color: blue">
                {{
                  Number(countField(header.value)).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                  })
                }}
              </b>
              <b
                v-else-if="header.align == 'end' && header.value == 'sum_over_all_expenses_sum_money'"
                style="color: orange"
              >
                {{
                  Number(countField(header.value)).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                  })
                }}
              </b>
              <b
                v-else-if="header.align == 'end' && header.value == 'profitOrLoss'"
                :style="countField(header.value) > 0 ? 'color: green' : 'color: red'"
              >
                {{
                  Number(countField(header.value)).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                  })
                }}
              </b>
              <b v-else-if="header.align == 'end' && header.value != 'persent'">
                {{
                  Number(countField(header.value)).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 0,
                  })
                }}
              </b>
              <b
                v-else-if="header.value == 'persent'"
                :style="countField('profitOrLoss') > 0 ? 'color: green' : 'color: red'"
              >
                {{
                  Number((countField("profitOrLoss") / countField("income_sum_money")) * 100).toLocaleString("th-TH", {
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })
                }}%
              </b>
            </td>
          </tr>
        </template>

        <template v-slot:[`item.number_of_cars`]="{ item }">
          <span v-if="item.number_of_cars > 0" style="color: blue">{{ item.number_of_cars }}</span>
        </template>
        <template v-slot:[`item.number_of_profit_cars`]="{ item }">
          <span v-if="item.number_of_profit_cars > 0" style="color: green">{{ item.number_of_profit_cars }}</span>
        </template>
        <template v-slot:[`item.number_of_loss_cars`]="{ item }">
          <span v-if="item.number_of_loss_cars > 0" style="color: red">{{ item.number_of_loss_cars }}</span>
        </template>

        <template v-slot:[`item.cars.car_no`]="{ item }">
          <a small color="primary" @click="AllInfoCar(item.cars.id, item.cars.car_no)">{{ item.cars.car_no }}</a>
        </template>

        <template v-slot:[`item.income_sum_money`]="{ item }">
          <div style="color: blue">
            {{
              Number(item.income_sum_money).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 0,
              })
            }}
          </div>
        </template>

        <template v-slot:[`item.sum_income_com`]="{ item }">
          <div>
            {{
              Number(item.sum_income_com).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 0,
              })
            }}
          </div>
        </template>

        <template v-slot:[`item.expenses_without_car_sum_money`]="{ item }">
          {{
            Number(item.expenses_without_car_sum_money).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })
          }}
        </template>

        <template v-slot:[`item.amount_overCost`]="{ item }">
          {{
            Number(item.amount_overCost).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })
          }}
        </template>

        <template v-slot:[`item.expenses_only_car_sum_money`]="{ item }">
          {{
            Number(item.expenses_only_car_sum_money).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })
          }}
        </template>

        <template v-slot:[`item.sum_over_all_expenses_sum_money`]="{ item }">
          <div style="color: orange">
            {{
              Number(item.sum_over_all_expenses_sum_money).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 0,
              })
            }}
          </div>
        </template>

        <template v-slot:[`item.profitOrLoss`]="{ item }">
          <span v-if="item.profitOrLoss < 0" style="color: red">{{
            Number(item.profitOrLoss).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })
          }}</span>
          <span v-else style="color: green">{{
            Number(item.profitOrLoss).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })
          }}</span>
        </template>

        <template v-slot:[`item.persent`]="{ item }">
          <span v-if="item.persent < 0" style="color: red"
            >{{
              Number(item.persent).toLocaleString("th-TH", {
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })
            }}%</span
          >
          <span v-else style="color: green"
            >{{
              Number(item.persent).toLocaleString("th-TH", {
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })
            }}%</span
          >
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as apiReport from "@/Api/apiReport";
import * as apiBranch_teams from "@/Api/apiBranch_teams";
import moment from "moment";

import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    dateSelect2,
  },
  data() {
    return {
      loading: false,
      toggleTeam: null,
      toggleView: "com",

      menu: false,
      menuTimeStart: false,
      menuTimeEnd: false,
      mount: [new Date().toISOString().substr(0, 7)],
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),

      dialogAllInfoCar: false,
      formTitleAllInfoCar: "ภาพรวมลำดับรถ",

      branch_team_id: 0,
      branch_teams: [],
      dataSelectBranch_teams: [],

      search: "",
      data: [],
      data_filter: [],
    };
  },
  mounted() {
    this.getBranch_teams();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
    headers() {
      if (this.toggleTeam == "team") {
        return [
          {
            text: "สาขา",
            value: "branch_team.branch_team_name",
            class: "textOneLine",
          },
          {
            text: "จำนวนคัน",
            value: "number_of_cars",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "กำไร",
            value: "number_of_profit_cars",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "ขาดทุน",
            value: "number_of_loss_cars",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "รวมรายรับ",
            value: "income_sum_money",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "ค่าคอม",
            value: "sum_income_com",
            class: "textOneLine",
            align: "end",
          },

          {
            text: "ค่าตัวรถ",
            value: "expenses_only_car_sum_money",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "ค่าดำเนินการ",
            value: "amount_overCost",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "ค่าใช้จ่าย",
            value: "expenses_without_car_sum_money",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "รวมรายจ่าย",
            value: "sum_over_all_expenses_sum_money",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "กำไร/ขาดทุน",
            value: "profitOrLoss",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "%",
            value: "persent",
            class: "textOneLine",
            align: "end",
          },
        ];
      } else {
        return [
          {
            text: "ลำดับ",
            value: "cars.car_no",
            align: "center",
            class: "textOneLine",
            width: "10%",
          },
          {
            text: "วันที่ปล่อยรถ",
            value: "contract.contract_date",
            width: "10%",
          },
          {
            text: "วันรับเงิน",
            value: "appointment_banks.appointment_money_date",
            width: "10%",
          },
          {
            text: "สาขา",
            value: "branch_team.branch_team_name",
            class: "textOneLine",
          },
          {
            text: "รวมรายรับ",
            value: "income_sum_money",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "ค่าคอม",
            value: "sum_income_com",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "ค่าตัวรถ",
            value: "expenses_only_car_sum_money",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "ค่าดำเนินการ",
            value: "amount_overCost",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "ค่าใช้จ่าย",
            value: "expenses_without_car_sum_money",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "รวมรายจ่าย",
            value: "sum_over_all_expenses_sum_money",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "กำไร/ขาดทุน",
            value: "profitOrLoss",
            class: "textOneLine",
            align: "end",
          },
          {
            text: "%",
            value: "persent",
            class: "textOneLine",
            align: "end",
          },
        ];
      }
    },
  },
  methods: {
    async getBranch_teams() {
      const response = await apiBranch_teams.select();
      this.branch_teams = response.data;
      this.dataSelectBranch_teams = response.data;
      this.dataSelectBranch_teams.push({ id: 0, branch_team_name: "ทั้งหมด" });
    },
    async getData() {
      this.loading = true;
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("type", this.toggleView);
      data.append("mount", this.mount);
      data.append("branch_team_id", this.branch_team_id);

      const response = await apiReport.report_profit(data);
      if (response.status == 200) {
        console.log(response.data);
        this.data = response.data;
        this.filterData();
      } else {
        alert("เกิดข้อผิดพลาด");
      }
      this.loading = false;
    },
    filterData() {
      if (this.toggleTeam == "team") {
        this.data_filter = [];
        this.branch_teams.forEach((item, key) => {
          // amount_overCost
          let amount_overCost = this.data
            .filter((x) => x.branch_team_id == item.id)
            .reduce((sum, item) => sum + Number(item.cars.amount_overCost), 0);

          // sum_income
          let sum_income = this.data

            .filter((x) => x.branch_team_id == item.id)
            .map((map) => {
              return map.income
                .filter((x) => x.detail != "ค่าคอมจากธนาคาร")
                .reduce((sum, item) => sum + item["money"], 0);
            })
            .reduce((sum, item) => sum + item, 0);

          // sum_income จากค่าคอมจากธนาคาร
          let sum_income_com = this.data

            .filter((x) => x.branch_team_id == item.id)
            .map((map) => {
              return map.income
                .filter((x) => x.detail == "ค่าคอมจากธนาคาร")
                .reduce((sum, item) => sum + item["money"], 0);
            })
            .reduce((sum, item) => sum + item, 0);

          // sum_expense
          let sum_expense =
            amount_overCost +
            this.data
              .filter((x) => x.branch_team_id == item.id)
              .map((map) => {
                return map.expenses.reduce((sum, item) => sum + item["money"], 0);
              })
              .reduce((sum, item) => sum + item, 0);

          // sum_expense_only_car
          let sum_expense_only_car = this.data
            .filter((x) => x.branch_team_id == item.id)
            .map((map) => {
              return map.expenses.reduce((sum, item) => (item["detail"] == "ค่าตัวรถ" ? sum + item["money"] : sum), 0);
            })
            .reduce((sum, item) => sum + item, 0);

          // number_of_cars
          let number_of_cars = this.data.filter((x) => x.branch_team_id == item.id).length;

          // number_of_profit_cars
          let number_of_profit_cars = this.data
            .filter((x) => x.branch_team_id == item.id)
            .map((map) => {
              return (
                map.income.reduce((sum, item) => sum + item["money"], 0) >
                map.expenses.reduce((sum, item) => sum + item["money"], 0)
              );
            })
            .reduce((sum, item) => (item == true ? sum + 1 : sum), 0);

          // number_of_loss_cars
          let number_of_loss_cars = this.data
            .filter((x) => x.branch_team_id == item.id)
            .map((map) => {
              return (
                map.income.reduce((sum, item) => sum + item["money"], 0) <
                map.expenses.reduce((sum, item) => sum + item["money"], 0)
              );
            })
            .reduce((sum, item) => (item == true ? sum + 1 : sum), 0);

          this.data_filter.push({
            cars: {},
            contract: {},
            appointment_banks: {},
            branch_team: {
              branch_team_name: item.branch_team_name,
            },
            amount_overCost: amount_overCost,
            income_sum_money: sum_income,
            sum_income_com: sum_income_com,
            sum_over_all_expenses_sum_money: sum_expense,
            expenses_only_car_sum_money: sum_expense_only_car,
            expenses_without_car_sum_money: sum_expense - sum_expense_only_car - amount_overCost,
            profitOrLoss: sum_income - sum_expense,
            persent: ((sum_income - sum_expense) / sum_income) * 100,
            number_of_cars: number_of_cars,
            number_of_profit_cars: number_of_profit_cars,
            number_of_loss_cars: number_of_loss_cars,
          });
        });
      } else {
        this.data.map(function (item) {
          // ค่าดำเนินการ
          item.amount_overCost = item.cars.amount_overCost;

          // รวมรายรับ
          item.income_sum_money = item.income
            .filter((x) => x.detail != "ค่าคอมจากธนาคาร")
            .reduce((sum, item) => sum + item["money"], 0);

          // รวมรายรับจากค่าคอมจากธนาคาร
          item.sum_income_com = item.income
            .filter((x) => x.detail === "ค่าคอมจากธนาคาร")
            .reduce((sum, item) => sum + item["money"], 0);

          // รวมค่าใช้จ่าย
          item.sum_over_all_expenses_sum_money =
            Number(item.expenses.reduce((sum, item) => sum + item["money"], 0)) + Number(item.amount_overCost);
          item.expenses_only_car_sum_money = item.expenses.reduce(
            (sum, item) => (item["detail"] == "ค่าตัวรถ" ? sum + item["money"] : sum),
            0
          );

          // รวมค่าใช้จ่าย ไม่รวมค่าตัวรถ
          item.expenses_without_car_sum_money =
            item.sum_over_all_expenses_sum_money - item.expenses_only_car_sum_money - Number(item.amount_overCost);

          // กำไร/ขาดทุน
          item.profitOrLoss = item.income_sum_money - item.sum_over_all_expenses_sum_money;

          // %
          item.persent = (item.profitOrLoss / item.income_sum_money) * 100;
        });
        this.data_filter = this.data;
      }
      // console.log(this.data_filter);
    },
    countField(key) {
      return this.data_filter.reduce((total, x) => (x[key] != " " ? total + Number(x[key]) : total), 0);
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
      let tHeader;
      let filterVal = [];
      if (this.toggleTeam == "team") {
        tHeader = this.tHeader;
        for (let index = 0; index < this.tHeader.length; index++) {
          filterVal.push(this.headers[index].value);
        }
      } else {
        tHeader = [
          "ลำดับ",
          "ยี่ห้อ",
          "รุ่น",
          "รุ่นย่อย",
          "สี",
          "ปี",
          "เกียร์",
          "วันที่ปล่อยรถ",
          "วันรับเงิน",
          "สาขา",
          "รวมรายรับ",
          "ค่าตัวรถ",
          "ค่าดำเนินการ",
          "ค่าใช้จ่าย",
          "รวมรายจ่าย",
          "กำไร/ขาดทุน",
          "%",
        ];
        filterVal = [
          "cars.car_no",
          "cars.car_models.car_model_name",
          "cars.car_series.car_series_name",
          "cars.car_serie_sub.car_serie_sub_name",
          "cars.color.color_name",
          "cars.car_year",
          "cars.car_gear",
          "contract.contract_date",
          "appointment_banks.appointment_money_date",
          "branch_team.branch_team_name",
          "income_sum_money",
          "expenses_only_car_sum_money",
          "amount_overCost",
          "expenses_without_car_sum_money",
          "sum_over_all_expenses_sum_money",
          "profitOrLoss",
          "persent",
        ];
      }

      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          // const tHeader = this.tHeader;
          let list = this.toggleTeam == "team" ? this.data_filter : this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "รายงานกำไรขาดทุน (" + moment().format("DD/MM/YYYY HH:mm") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "cars.car_no") {
            return v.cars.car_no;
          } else if (j == "cars.car_models.car_model_name") {
            return v.cars.car_models.car_model_name;
          } else if (j == "cars.car_series.car_series_name") {
            return v.cars.car_series.car_series_name;
          } else if (j == "cars.car_serie_sub.car_serie_sub_name") {
            return v.cars.car_serie_sub.car_serie_sub_name;
          } else if (j == "cars.color.color_name") {
            return v.cars.color.color_name;
          } else if (j == "cars.car_year") {
            return v.cars.car_year;
          } else if (j == "cars.car_gear") {
            if (v.cars.car_gear == "1") {
              return "AT";
            } else if (v.cars.car_gear == "2") {
              return "MT";
            } else {
              return v.cars.car_gear;
            }
          } else if (j == "contract.contract_date" && v.contract) {
            return v.contract.contract_date;
          } else if (j == "appointment_banks.appointment_money_date" && v.appointment_banks) {
            return v.appointment_banks.appointment_money_date;
          } else if (j == "branch_team.branch_team_name" && v.branch_team) {
            return v.branch_team.branch_team_name;
          } else {
            return v[j];
          }
        })
      );
    },
  },
  watch: {
    toggleTeam() {
      this.filterData();
    },
  },
};
</script>

<style></style>
