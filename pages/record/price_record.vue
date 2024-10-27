<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-text>
        <div class="d-flex align-center">
          <template>
            <v-btn color="primary" style="height: 40px" dark @click.stop="AddItem()">
              <v-icon left>mdi-plus</v-icon>
              เพิ่มรายการใหม่
            </v-btn>

            <v-btn
              @click="handleDownload()"
              color="success"
              class="mx-2"
              style="min-width: 0px; padding: 0 8px; height: 40px"
            >
              <v-icon>mdi-microsoft-excel</v-icon>
            </v-btn>

            <v-dialog v-model="dialogFilter" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  color=""
                  class="mr-2"
                  style="min-width: 0px; padding: 0 8px; height: 40px"
                >
                  <v-icon>mdi-filter-variant</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-form ref="form" @submit.prevent="onSubmit()">
                  <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialogFilter = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title class="pl-0">Filter</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="mt-3">
                      <v-col>
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
                              v-model="filter.timeStart"
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
                            v-model="filter.timeStart"
                            locale="th-TH"
                            picker-date
                            @input="menuTimeStart = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col>
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
                              v-model="filter.timeEnd"
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
                            v-model="filter.timeEnd"
                            locale="th-TH"
                            picker-date
                            @input="menuTimeEnd = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>

                    <v-autocomplete
                      class="mt-3"
                      v-model="filter.car_models_id"
                      :items="carModel"
                      no-data-text="ไม่มีข้อมูล"
                      item-text="car_model_name"
                      item-value="id"
                      placeholder="ยี่ห้อ"
                      outlined
                      dense
                      hide-details
                      clearable
                      @change="getCarseries"
                    >
                    </v-autocomplete>

                    <v-autocomplete
                      class="mt-3"
                      v-model="filter.car_serie_id"
                      :items="carSerie"
                      no-data-text="ไม่มีข้อมูล"
                      item-text="car_series_name"
                      item-value="id"
                      placeholder="รุ่นรถ"
                      outlined
                      dense
                      hide-details
                      @change="getCarSerieSub"
                      clearable
                    >
                    </v-autocomplete>

                    <v-autocomplete
                      class="mt-3"
                      v-model="filter.car_serie_sub_id"
                      :items="carSerieSub"
                      item-text="car_serie_sub_name"
                      item-value="id"
                      label="รุ่นย่อย"
                      no-data-text="ไม่มีข้อมูล"
                      outlined
                      dense
                      hide-details
                      multiple
                      clearable
                    >
                    </v-autocomplete>

                    <v-row class="mt-0">
                      <v-col>
                        <v-select
                          v-model="filter.car_year_start"
                          :items="years"
                          label="ปีเริ่มต้น"
                          outlined
                          hide-details
                          dense
                          clearable
                        ></v-select>
                      </v-col>
                      <v-col>
                        <v-select
                          v-model="filter.car_year_end"
                          :items="years"
                          label="ปีสิ้นสุด"
                          outlined
                          hide-details
                          dense
                          clearable
                        ></v-select>
                      </v-col>
                    </v-row>

                    <v-select
                      class="mt-3"
                      v-model="filter.car_gear"
                      :items="['AT', 'MT']"
                      label="เกียร์"
                      outlined
                      hide-details
                      dense
                      clearable
                    ></v-select>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :loading="loading" color="primary" text type="submit"><v-icon>mdi-magnify</v-icon></v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </template>

          <v-spacer></v-spacer>
          <v-card outlined class="mr-3" color="success" style="color: white">
            <div class="py-2 px-5">
              <span style="font-size: 20px"
                ><b>{{ averagePrice.toLocaleString(undefined, { maximumFractionDigits: 0 }) }}</b>
              </span>
              บ.
            </div>
          </v-card>
          <v-card outlined class="mr-3" color="primary" style="color: white">
            <div class="py-2 px-5">
              <span style="font-size: 20px"
                ><b>{{ data.length }}</b>
              </span>
              คัน
            </div>
          </v-card>
          <div style="width: 30%">
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
          </div>
        </div>
      </v-card-text>

      <ChartLine :chart-data="dataChart" />
      <!-- <BarChartSaleCarByBranch :chart-data="dataChart" /> -->

      <v-divider class="mt-3"></v-divider>
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        sort-by="date"
        sort-desc
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        dense
      >
        <!-- <template v-slot:[`item.image`]="{ item }">
          <div v-if="item.image != null" class="images" v-viewer>
            <img height="40px" :src="serverUrl + '/' + item.image" />
          </div>
        </template> -->

        <!-- <template v-slot:[`item.date`]="{ item }">
          <span>{{ $moment(item.date).format("DD/MM/YYYY") }}</span>
        </template> -->

        <template v-slot:[`item.car_mileage`]="{ item }">
          <span style="color: blue">{{ Number(item.car_mileage).toLocaleString() }}</span>
        </template>

        <template v-slot:[`item.price`]="{ item }">
          <span style="color: green">{{ Number(item.price).toLocaleString() }}</span>
        </template>
        <template v-slot:[`item.sale_price`]="{ item }">
          <span>{{ Number(item.sale_price).toLocaleString() }}</span>
        </template>
        <template v-slot:[`item.market_price`]="{ item }">
          <span>{{ Number(item.market_price).toLocaleString() }}</span>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn v-if="item.image != null" color="info" fab x-small dark @click="showImg(serverUrl + '/' + item.image)">
            <v-icon> mdi-image </v-icon>
          </v-btn>
          <v-btn color="primary" fab x-small dark @click="editItem(item.id)">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <dialogNew
        :dialog="dialog"
        :id="id"
        :action="action"
        :formTitle="formTitle"
        @cancleItem="dialog = false"
        @success="addSuccess()"
        @error="addError()"
      />
      <dialogImage :dialog="dialogImg" :imgUrl="imgUrl" @cancleItem="dialogImg = false" />
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import * as apiPriceRecord from "@/Api/apiPriceRecord";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";

import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogPriceRecord";
import dialogImage from "@/components/dialog/dialogImage";
import ChartLine from "@/components/Chart/Line";
import BarChartSaleCarByBranch from "@/components/BarChart/BarChartSaleCarByBranch";

export default {
  components: {
    dialogNew,
    dialogImage,
    ChartLine,
    BarChartSaleCarByBranch,
  },
  data() {
    return {
      // Global
      serverUrl: process.env.serverUrl,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      averagePrice: 0,

      // Filter
      dialogFilter: false,
      menuTimeStart: false,
      menuTimeEnd: false,
      filter: {
        timeStart: null,
        timeEnd: null,
        car_models_id: null,
        car_serie_id: null,
        car_serie_sub_id: [],
        car_gear: null,
        car_year_start: null,
        car_year_end: null,
      },

      // Select
      carModel: [],
      carSerie: [],
      carSerieSub: [],

      // Add Data
      dialog: false,
      formTitle: "Add",
      action: "add",
      id: "",

      // Image
      dialogImg: false,
      imgUrl: null,

      // Chart
      dataChart: {
        labels: [],
        datasets: [],
      },

      // Table
      data: [],
      search: "",
      loading: false,
      headers: [
        { text: "วันที่", value: "date", width: "100px" },
        { text: "ยี่ห้อ", value: "car_models.car_model_name" },
        { text: "รุ่น", value: "car_series.car_series_name", width: "15%" },
        { text: "รุ่นย่อย", value: "car_serie_sub.car_serie_sub_name", width: "15%" },
        { text: "เกียร์", value: "car_gear", align: "center" },
        { text: "ปี", value: "car_year", align: "center" },
        { text: "สี", value: "color.color_name" },
        { text: "เลขไมค์", value: "car_mileage", align: "end" },
        { text: "เกรด", value: "grade", align: "center" },
        { text: "ชื่อลาน", value: "location" },
        { text: "ราคาจบ", value: "price", align: "end" },
        { text: "ราคาขาย", value: "sale_price", align: "end" },
        { text: "ราคาตลาด", value: "market_price", align: "end" },
        { text: "จัดการ", value: "actions", sortable: false, width: "9%" },
      ],
    };
  },
  mounted() {
    this.getData();
    this.getCarmodels();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
    years() {
      var currentYear = new Date().getFullYear();
      var years = [];
      for (var i = 0; i < 20; i++) {
        years.push(currentYear - i);
      }
      return years;
    },
  },
  methods: {
    async getData() {
      this.loading = true;
      let query = "";
      query += this.filter.timeStart ? `&timeStart=${this.filter.timeStart}` : "";
      query += this.filter.timeEnd ? `&timeEnd=${this.filter.timeEnd}` : "";
      query += this.filter.car_models_id ? `&car_models_id=${this.filter.car_models_id}` : "";
      query += this.filter.car_serie_id ? `&car_serie_id=${this.filter.car_serie_id}` : "";
      query += this.filter.car_serie_sub_id.length > 0 ? `&car_serie_sub_id=${this.filter.car_serie_sub_id}` : "";
      query += this.filter.car_gear ? `&car_gear=${this.filter.car_gear}` : "";
      query += this.filter.car_year_start ? `&car_year_start=${this.filter.car_year_start}` : "";
      query += this.filter.car_year_end ? `&car_year_end=${this.filter.car_year_end}` : "";

      const response = await apiPriceRecord.index(query);
      this.data = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
      this.averagePrice = response.data.reduce((total, item) => total + Number(item.price), 0) / this.data.length;

      this.dataChart = {
        labels: this.data.map((item) => item.date),
        datasets: [
          {
            label: "เฉลี่ย",
            borderColor: "rgba(76, 175, 79, 0.5)",
            data: response.data.map((item) => this.averagePrice),
          },
          {
            label: "ราคา",
            backgroundColor: "rgba(0, 123, 255, 0.5)",
            borderColor: "rgba(0, 123, 255, 1)",
            data: this.data.map((item) => item.price),
          },
        ],
      };

      this.loading = false;
    },
    async onSubmit() {
      if (this.$refs.form.validate()) {
        this.getData();
      }
    },
    async getCarmodels() {
      this.filter.car_serie_id = null;
      const response = await apiCar_models.select();
      this.carModel = response.data;
    },
    async getCarseries() {
      this.filter.car_serie_sub_id = [];
      this.carSerie = [];
      const response = await apiCar_series.selectDropdown(0, this.filter.car_models_id);
      this.carSerie = response.data;
    },
    async getCarSerieSub() {
      this.carSerieSub = [];
      const response = await apiCar_serie_sub.select(this.filter.car_serie_id);
      this.carSerieSub = response.data;
    },
    async AddItem() {
      this.formTitle = "เพิ่มข้อมูล";
      this.dialog = true;
      this.id = "";
      this.action = "add";
    },
    async editItem(item) {
      this.formTitle = "แก้ไขข้อมูล";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiPriceRecord.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },
    async addSuccess() {
      this.dialog = false;
      this.$nextTick(async () => {
        await this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      this.$nextTick(async () => {
        await this.getData();
        customAlart.TopError();
      });
    },
    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },
    handleDownload() {
      const filterVal = [];
      for (let index = 0; index < this.tHeader.length; index++) {
        filterVal.push(this.headers[index].value);
      }
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "เก็บราคา (" + moment().format("DD/MM/YYYY ( HH:mm น.)") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "car_models.car_model_name") {
            return v.car_models.car_model_name;
          } else if (j == "car_series.car_series_name") {
            return v.car_series.car_series_name;
          } else if (j == "car_serie_sub.car_serie_sub_name") {
            return v.car_serie_sub.car_serie_sub_name;
          } else if (j == "color.color_name") {
            return v.color.color_name;
          } else if (j == "user" && v.user) {
            return v.user.first_name + " " + v.user.last_name;
          } else {
            return v[j];
          }
        })
      );
    },
  },
  watch: {},
};
</script>

<style></style>
