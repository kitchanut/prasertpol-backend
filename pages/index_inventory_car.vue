<template>
  <div>
    <v-simple-table dense fixed-header :height="windowHeight - 115">
      <template v-slot:default>
        <thead>
          <tr id="first_header">
            <th>รุ่นรถ</th>
            <th>ทั้งหมด</th>
            <th>รอรับรถ</th>
            <th v-for="(branch, key) in branches" :key="key" align="center">
              {{ branch.branch_name }}
            </th>
          </tr>
          <tr
            class="sticky-header"
            :style="'top: ' + (rect.top + 29) + 'px'"
            id="second_header"
          >
            <th class="sticky-header">ทั้งหมด</th>
            <th class="text-center" style="color: blue">
              <b>{{ countFieldSeparate("all", "all", "all") }}</b>
            </th>
            <th class="text-center" style="color: orange">
              <b>{{ countFieldSeparate("all", "all", 1) }}</b>
            </th>
            <th
              v-for="(branch, key) in branches"
              :key="key"
              class="text-center"
            >
              <b v-if="countFieldSeparate(branch.id, 'all', 2) > 0">{{
                countFieldSeparate(branch.id, "all", 2)
              }}</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(car_sery, key) in car_series" :key="key">
            <td>{{ car_sery.label }}</td>
            <td align="center" style="color: blue">
              <b>{{
                countFieldSeparate("all", car_sery.car_serie_id, "all")
              }}</b>
            </td>
            <td align="center">
              <b
                v-if="countFieldSeparate('all', car_sery.car_serie_id, 1) > 0"
                style="color: orange"
                >{{ countFieldSeparate("all", car_sery.car_serie_id, 1) }}</b
              >
              <!-- <span v-else>0</span> -->
            </td>
            <td v-for="(branch, key) in branches" :key="key" align="center">
              <b
                v-if="
                  countFieldSeparate(branch.id, car_sery.car_serie_id, 2) > 0
                "
                style="color: green"
                >{{
                  countFieldSeparate(branch.id, car_sery.car_serie_id, 2)
                }}</b
              >
              <!-- <span v-else>0</span> -->
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import * as apiDashboard from "@/Api/apiDashboard";
import * as apiBranches from "@/Api/apiBranches";

export default {
  data() {
    return {
      branches: [],
      car_series: [],
      data: [],
      rect: {},
      windowHeight: 0,
    };
  },
  async mounted() {
    await this.getBranches();
    await this.getData();
    var element = document.getElementById("first_header");
    this.rect = element.getBoundingClientRect();
    this.windowHeight = window.innerHeight;
  },
  methods: {
    async getData() {
      const response = await apiDashboard.dashboard_inventory_car();
      this.data = response.data.inventory_car;
      this.car_series = response.data.car_series;
      console.log(response.data);
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      //   this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
      // console.log(this.branches);
    },
    countFieldSeparate(branch_id, car_serie_id, car_stock) {
      return this.data
        .filter((d) => {
          if (branch_id == "all") {
            return true;
          } else {
            return d.branch_id == branch_id;
          }
        })
        .filter((d) => {
          if (car_serie_id == "all") {
            return true;
          } else {
            return d.car_serie_id == car_serie_id;
          }
        })
        .filter((d) => {
          if (car_stock == "all") {
            return true;
          } else {
            return d.car_stock == car_stock;
          }
        })
        .reduce((total, x) => x.count + total, 0);
    },
  },
};
</script>

<style>
.sticky-header {
  position: sticky;
  z-index: 2;
  background-color: #ffffff;
  border-bottom: #ddd;
}
</style>