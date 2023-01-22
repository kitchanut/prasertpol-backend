<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="90%">
      <v-card>
        <v-form
          ref="form"
          @submit.prevent="onAction(formData.id)"
          autocomplete="true"
        >
          <v-toolbar color="primary" dark flat>
            <v-btn icon dark @click="$emit('cancleItem')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitle }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                type="submit"
                :loading="btnloading"
                dark
                text
                style="font-size: 18px"
              >
                บันทึก
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-progress-linear
            v-if="formDataLoading"
            indeterminate
            color="yellow darken-2"
          >
          </v-progress-linear>

          <v-card-text>
            <v-container>
              <v-row class="d-flex justify-center">
                <h2>รายการ</h2>
              </v-row>

              <br />
              <br />
              <div v-for="(cars, keys) in formData.cars" :key="keys">
                <v-row>
                  <v-col cols="2">
                    <v-text-field
                      autocomplete="true"
                      type="number"
                      clearable
                      label="เมื่อน้อยกว่า"
                      append-icon=""
                      v-model="cars.number"
                      id="cars.number"
                      name="cars.number"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="5">
                    <v-autocomplete
                      v-model="cars.car_models_id"
                      id="cars.car_models_id"
                      name="cars.car_models_id"
                      :items="carModel"
                      clearable
                      no-data-text="ไม่มีข้อมูล"
                      item-text="car_model_name"
                      item-value="id"
                      label="ยี่ห้อ"
                      @change="change_model(cars.car_models_id, keys)"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="5">
                    <v-autocomplete
                      v-model="cars.car_serie_id"
                      id="cars.car_serie_id"
                      name="cars.car_serie_id"
                      :items="cars.data_car_serice"
                      no-data-text="ไม่มีข้อมูล"
                      clearable
                      item-text="car_series_name"
                      item-value="id"
                      label="รุ่นรถ"
                      @change="change_serie(cars.car_serie_id, keys)"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="3">
                    <v-autocomplete
                      v-model="cars.car_serie_sub_id"
                      id="cars.car_serie_sub_id"
                      name="cars.car_serie_sub_id"
                      :items="cars.data_car_sub_serice"
                      no-data-text="ไม่มีข้อมูล"
                      item-text="car_serie_sub_name"
                      item-value="id"
                      label="รุ่นย่อยรถ"
                      clearable
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="2">
                    <v-autocomplete
                      v-model="cars.years"
                      id="cars.years"
                      name="cars.years"
                      :items="cars.car_year"
                      item-text="value"
                      no-data-text="ไม่มีข้อมูล"
                      item-value="value"
                      label="ปีผลิต (ค.ศ)"
                      clearable
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="3">
                    <v-radio-group
                      class="mt-2"
                      v-model="cars.active"
                      id="cars.active"
                      name="cars.active"
                      :rules="[(value) => !!value]"
                      row
                    >
                      <template>
                        <div class="mr-1">แสดง:</div>
                      </template>
                      <v-radio label="ใช่" value="1"></v-radio>
                      <v-radio label="ไม่" color="red" value="2"></v-radio>
                    </v-radio-group>
                  </v-col>

                  <v-col cols="1" v-if="action == 'add'">
                    <v-btn color="red" fab x-small dark @click="rm_row(keys)">
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
              <br />

              <v-row class="d-flex">
                <v-col v-if="action == 'add'">
                  <v-btn color="green" dark block @click="add_row()">
                    <v-icon>mdi-plus</v-icon> เพิ่มรายการ
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')"
              >ยกเลิก</v-btn
            >
            <v-btn
              type="submit"
              color="success darken-1"
              text
              :loading="btnloading"
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiLow_cars from "@/Api/apiLow_cars";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";
export default {
  props: ["dialog", "action", "id", "formTitle"],

  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {
        cars: [],
      },
      carModel: [],
      carSerie: [],
      carSerieSub: [],
      carSerie_all: [],
      carSerieSub_all: [],
      years: [],
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
    };
  },
  mounted() {},
  methods: {
    async onAction(id) {
      if (this.$refs.form.validate()) {
        // this.btnloading = true;
        // this.formDataLoading = true;
        if (this.action == "add") {
          const response = await apiLow_cars.store(this.formData);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Low_cars");
          } else {
            this.$emit("error", "Low_cars");
          }
        } else if (this.action == "edit") {
          const response = await apiLow_cars.update(this.id, this.formData);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Low_cars");
          } else {
            this.$emit("error", "Low_cars");
          }
        }
        this.btnloading = false;
        this.formDataLoading = false;
      }
    },

    async getYearCurrent() {
      var max = new Date().getFullYear();
      var min = max - 50;

      for (var i = max; i >= min; i--) {
        this.years.push({ value: i });
      }
      this.$nextTick(() => {
        this.years.push({ value: 9999 });
      });
    },

    async getCarModels() {
      const response = await apiCar_models.select();
      this.carModel = response.data;
      this.loading = false;
    },

    change_model(car_models_id, keys) {
      if (this.action == "add") {
        this.formData.cars[keys].car_serie_id = null;
        this.formData.cars[keys].car_serie_sub_id = null;
        this.formData.cars[keys].years = null;
      }
      this.formData.cars[keys].data_car_serice = [];
      this.formData.cars[keys].data_car_sub_serice = [];
      for (let index = 0; index < this.carSerie_all.length; index++) {
        if (this.carSerie_all[index].car_model_id == car_models_id) {
          this.formData.cars[keys].data_car_serice.push(
            this.carSerie_all[index]
          );
        }
      }
    },
    change_serie(car_serie_id, keys) {
      this.formData.cars[keys].data_car_sub_serice = [];
      for (let index = 0; index < this.carSerieSub_all.length; index++) {
        if (this.carSerieSub_all[index].car_serie_id == car_serie_id) {
          this.formData.cars[keys].data_car_sub_serice.push(
            this.carSerieSub_all[index]
          );
        }
      }
    },

    async getCarSeries() {
      const response = await apiCar_series.select();
      this.carSerie_all = response.data;
    },
    async getCarSerieSub() {
      const response = await apiCar_serie_sub.selectAll();
      this.carSerieSub_all = response.data;
    },
    async add_row() {
      this.$nextTick(() => {
        let data = {
          car_models_id: null,
          data_car_serice: [],
          car_serie_id: null,
          data_car_sub_serice: [],
          car_serie_sub_id: null,
          car_year: this.years,
          active: "1",
          years: null,
          number: 0,
          user_id: this.user_id,
        };
        this.formData.cars.push(data);
      });
    },
    // ฟังชั่นลบแถว
    async rm_row(row) {
      this.formData.cars.splice(row, 1);
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialogDeleteComponent) {
        await this.getYearCurrent();
        await this.getCarModels();
        await this.getCarSeries();
        await this.getCarSerieSub();

        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(() => {
              self.formData = {
                cars: [
                  {
                    car_models_id: null,
                    data_car_serice: [],
                    car_serie_id: null,
                    data_car_sub_serice: [],
                    car_serie_sub_id: null,
                    car_year: this.years,
                    years: null,
                    active: "1",
                    number: 0,
                    user_id: this.user_id,
                  },
                ],
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiLow_cars.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
            });
          });

          this.formDataLoading = false;
        }
      }
      this.btnloading = false;
    },
    dialogDeleteComponent() {
      if (!this.dialogDeleteComponent) {
        this.$emit("cancleItem");
      }
    },
  },
};
</script>

<style>
.mx-input {
  font-size: 17px;
  margin-top: 1px;
  height: 100%;
  border: 1px solid #a7a2a2;
}
</style>
