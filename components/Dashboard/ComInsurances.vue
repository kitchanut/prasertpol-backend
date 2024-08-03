<template>
  <div class="pa-3">
    <v-row>
      <v-col>
        <v-card outlined :loading="loading">
          <v-card-text>
            <div class="d-flex align-center">
              <b>รายการรถที่มีประกัน</b>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search_insurance"
                append-icon="mdi-magnify"
                label="ค้นหา"
                single-line
                outlined
                dense
                hide-details
              >
              </v-text-field>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="car_stock_insurance" :search="search_insurance" multi-sort dense>
            <template v-slot:[`item.car_insurance_end`]="{ item }">
              <span style="color: #1876d1">
                {{ item.car_insurance_end }}
              </span>
              <span v-if="$moment(item.car_insurance_end).diff($moment(), 'days') < 0" style="color: red">
                ({{ $moment(item.car_insurance_end).diff($moment(), "days") }} วัน)
              </span>
              <span v-else-if="$moment(item.car_insurance_end).diff($moment(), 'days') < 90" style="color: orange">
                ({{ $moment(item.car_insurance_end).diff($moment(), "days") }} วัน)
              </span>
              <span v-else>({{ $moment(item.car_insurance_end).diff($moment(), "days") }} วัน)</span>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <dialogInsurancesList
                v-if="user_group_permission == -1 || user_group_permission == 10"
                appearance="pencil"
                :car_id="item.car.id"
                :car_no="item.car.car_no"
                @success="getData()"
              />
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined :loading="loading">
          <v-card-text>
            <div class="d-flex align-center">
              <b>รายการรถที่ไม่มีประกัน</b>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search_not_insurance"
                append-icon="mdi-magnify"
                label="ค้นหา"
                single-line
                outlined
                dense
                hide-details
              >
              </v-text-field>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-data-table
            :headers="headers_not_insurance"
            :items="car_stock_not_insurance"
            :search="search_not_insurance"
            multi-sort
            dense
          >
            <template v-slot:[`item.actions`]="{ item }">
              <dialogInsurancesList
                v-if="user_group_permission == -1 || user_group_permission == 10"
                appearance="text-blue"
                :car_id="item.car.id"
                :car_no="item.car.car_no"
                @success="getData()"
              />
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import * as apiDashboard from "@/Api/apiDashboard";
import dialogInsurancesList from "@/components/dialog/dialogInsurancesList";
export default {
  components: {
    dialogInsurancesList,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: false,
      search_insurance: "",
      search_not_insurance: "",
      headers: [
        {
          text: "ลำดับ",
          value: "car.car_no",
        },
        { text: "ทะเบียน", value: "car.car_regis" },
        { text: "ประกันชั้น", value: "car_insurance_class" },
        { text: "วันหมดประกัน", value: "car_insurance_end" },
        { text: "จัดการ", value: "actions", width: "10%", sortable: false },
      ],
      headers_not_insurance: [
        {
          text: "ลำดับ",
          value: "car.car_no",
        },
        { text: "ทะเบียน", value: "car.car_regis" },
        { text: "รุ่น", value: "car.car_series.car_series_name" },
        { text: "จัดการ", value: "actions", width: "20%", sortable: false },
      ],
      car_stock_insurance: [],
      car_stock_not_insurance: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      const response = await apiDashboard.dashboard_car_insurances();
      this.car_stock_insurance = response.data.car_stock_insurance;
      this.car_stock_not_insurance = response.data.car_stock_not_insurance;
      this.loading = false;
      //   console.log(response.data);
    },
  },
};
</script>
