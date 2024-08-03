<template>
  <div>
    <!-- <h3>รุ่นรถขายดี</h3> -->
    <!-- <v-card class="mt-5"> -->
    <v-progress-linear v-if="loading" indeterminate color="yellow darken-2"></v-progress-linear>
    <v-card-text>
      <v-row class="pa-2">
        <v-col cols="5"> </v-col>
        <v-col cols="7">
          <dateSelectMonth @timeSelect="selectTimeStart" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3" v-for="item in car_types" :key="item.id" v-if="filterType(item.id).length > 0">
          <v-card outlined style="border: 1px solid #eee" height="100%">
            <v-card-text>
              <div>
                <v-chip :ripple="false" class="mr-2" color="primary"> {{ countType(item.id) }} </v-chip>
                {{ item.car_type_name }} ({{ item.car_type_name_en }})
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div v-for="(listCar, keys) in filterType(item.id)" :key="keys">
                <v-chip :ripple="false" class="mr-2" color=""> {{ listCar.count }} </v-chip>
                <span> {{ listCar.car_serie_name }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-row no-gutters class="mt-3">
        <v-col v-for="(listCar, keys) in listCars" :key="keys" cols="4 mb-1">
          <v-chip :ripple="false" class="mr-2" color="primary"> {{ listCar.count }} </v-chip>
          <span> {{ listCar.car_serie_name }}</span>
        </v-col>
      </v-row> -->

      <!-- <BarChartTopCars class="mt-5" :chart-data="dataChart" /> -->
    </v-card-text>
  </div>
</template>
<script>
import * as apiDashboard from "@/Api/apiDashboard";
import * as apiCar_types from "@/Api/apiCar_types";
import moment from "moment";
import BarChartTopCars from "@/components/BarChart/BarChartTopCars";
export default {
  components: {
    BarChartTopCars,
  },
  data() {
    return {
      timeStart: moment().startOf("months").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("months").format("YYYY-MM-DD HH:mm"),
      dataChart: null,
      loading: false,
      car_types: [],
      listCars: [],
    };
  },
  async mounted() {
    await this.getCartype();
    await this.getDataBarVisitCarSerice();
  },
  computed: {},
  methods: {
    async getCartype() {
      const response = await apiCar_types.index();
      this.car_types = response.data;
      this.car_types.filter((d) => d.car_type_active == 1);
      console.log(response.data);
    },
    async getDataBarVisitCarSerice() {
      this.loading = true;
      const dataBar = new FormData();
      dataBar.append("timeStart", this.timeStart);
      dataBar.append("timeEnd", this.timeEnd);
      const responseBar = await apiDashboard.dashboardManagerBarTopCarSerie(dataBar);
      this.listCars = responseBar.data;
      this.listCars.sort(function (a, b) {
        return a.count - b.count;
      });
      this.listCars.reverse(function (a, b) {
        return a.count - b.count;
      });
      this.loading = false;
      console.log(this.listCars);
    },
    selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getDataBarVisitCarSerice();
    },
    filterType(type_id) {
      return this.listCars.filter((d) => {
        return d.car_types_id == type_id;
      });
    },
    countType(type_id) {
      return this.listCars
        .filter((d) => {
          return d.car_types_id == type_id;
        })
        .reduce((total, x) => (x.car_types_id == type_id ? total + x.count : total), 0);
    },
  },
};
</script>

<style></style>
