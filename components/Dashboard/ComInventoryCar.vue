<template>
  <div>
    <v-simple-table dense fixed-header :height="windowHeight - 160" class="table-border">
      <template v-slot:default>
        <thead>
          <tr id="first_header">
            <th>
              <div class="d-flex justify-space-between align-center">
                ยี่ห้อ
                <v-menu
                  :close-on-content-click="false"
                  :nudge-width="200"
                  offset-y
                  transition="slide-y-transition"
                  left
                  fixed
                  style="position: absolute; right: 0"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="grey" icon v-bind="attrs" v-on="on">
                      <v-icon small> mdi-filter-variant </v-icon>
                    </v-btn>
                  </template>
                  <v-list flat dense class="pa-0">
                    <v-row no-gutters>
                      <v-col cols="6">
                        <v-btn text block @click="toggleAll('car_model_name')" color="success">Toggle all</v-btn>
                      </v-col>
                      <v-col cols="6">
                        <v-btn text block @click="clearAll('car_model_name')" color="warning">Clear all</v-btn>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>

                    <v-list-item-group multiple v-model="activeFilters['car_model_name']" class="py-2">
                      <v-list-item v-for="item in filters['car_model_name']" :key="`${item}`" :value="item">
                        <template v-slot:default="{ active, toggle }">
                          <v-list-item-action>
                            <v-checkbox
                              :input-value="active"
                              :true-value="item"
                              @click="toggle"
                              color="primary"
                              dense
                            ></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title v-text="item"></v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-menu>
              </div>
            </th>
            <th>
              <div style="width: 200px" class="d-flex justify-space-between align-center">รุ่นรถ</div>
            </th>
            <th>ทั้งหมด</th>
            <th>จอง</th>
            <th>ขั้นต่ำ</th>
            <th>รอรับรถ</th>
            <th v-for="(branch, key) in branches" :key="key" align="center">
              {{ branch.branch_name }}
            </th>
          </tr>
          <tr class="sticky-header" :style="'top: ' + (rect.top - 21) + 'px'" id="second_header">
            <th></th>
            <th class="sticky-header"></th>
            <th class="text-center" style="color: blue">
              <b>{{ countFieldSeparate("all", "all", "all") }}</b>
            </th>
            <th class="text-center" style="color: green">{{ booking.length }}</th>
            <th>
              {{ car_series_filter.reduce((sum, item) => sum + item.car_series_minimum, 0) }}
            </th>

            <th class="text-center" style="color: orange">
              <b>{{ countFieldSeparate("all", "all", 1) }}</b>
            </th>

            <th v-for="(branch, key) in branches" :key="key" class="text-center">
              <b v-if="countFieldSeparate(branch.id, 'all', 2) > 0">{{ countFieldSeparate(branch.id, "all", 2) }}</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(car_sery, key) in car_series_filter" :key="key">
            <td>{{ car_sery.car_model_name }}</td>
            <td>{{ car_sery.label }}</td>
            <td align="center">
              <span
                :style="
                  countFieldSeparate('all', car_sery.car_serie_id, 'all') > car_sery.car_series_minimum
                    ? 'color: blue'
                    : 'color: red'
                "
              >
                <b>
                  {{ countFieldSeparate("all", car_sery.car_serie_id, "all") }}
                </b>
              </span>
            </td>
            <td align="center">
              <span
                v-if="booking.filter((d) => d.cars.car_serie_id == car_sery.car_serie_id).length > 0"
                :style="
                  countFieldSeparate('all', car_sery.car_serie_id, 'all') +
                    countFieldSeparate('all', car_sery.car_serie_id, 1) >
                  booking.filter((d) => d.cars.car_serie_id == car_sery.car_serie_id).length
                    ? 'color: green'
                    : 'color: red'
                "
              >
                {{ booking.filter((d) => d.cars.car_serie_id == car_sery.car_serie_id).length }}
              </span>
            </td>
            <td align="center">{{ car_sery.car_series_minimum }}</td>
            <td align="center">
              <b v-if="countFieldSeparate('all', car_sery.car_serie_id, 1) > 0" style="color: orange">{{
                countFieldSeparate("all", car_sery.car_serie_id, 1)
              }}</b>
              <!-- <span v-else>0</span> -->
            </td>

            <td v-for="(branch, key) in branches" :key="key" align="center">
              <b v-if="countFieldSeparate(branch.id, car_sery.car_serie_id, 2) > 0" style="color: green">{{
                countFieldSeparate(branch.id, car_sery.car_serie_id, 2)
              }}</b>
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
      booking: [],
      rect: {},
      windowHeight: 0,
      activeFilters: {},
      filters: {
        car_model_name: [],
      },
    };
  },
  computed: {
    car_series_filter() {
      return this.car_series.filter((item) => {
        return this.activeFilters["car_model_name"].indexOf(item.car_model_name) > -1;
      });
    },
  },
  async mounted() {
    await this.getBranches();
    await this.getData();
    await this.getCarBooking();
    var element = document.getElementById("first_header");
    this.rect = element.getBoundingClientRect();
    this.windowHeight = window.innerHeight;
  },
  methods: {
    async getData() {
      const response = await apiDashboard.dashboard_inventory_car();
      this.data = response.data.inventory_car;
      this.car_series = response.data.car_series;
      // console.log(response.data);
      this.initFilters();
      // console.log(this.filters);
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
    },
    async getCarBooking() {
      const response = await apiDashboard.dashboard_car_booking();
      console.log(response.data);
      this.booking = response.data;
    },
    toggleAll(col) {
      this.activeFilters[col] = this.car_series
        .map((d) => {
          return d[col];
        })
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
    },
    clearAll(col) {
      this.activeFilters[col] = [];
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
    initFilters() {
      for (const [key] of Object.entries(this.filters)) {
        this.filters[key] = this.car_series
          .map((d) => {
            return d[key];
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        this.filters[key].sort();
      }
      this.activeFilters = Object.assign({}, this.filters);
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
