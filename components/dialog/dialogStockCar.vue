<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
      <v-card>
        <v-form
          autocomplete="true"
          ref="form"
          @submit.prevent="onAction(formData.id)"
        >
          <v-toolbar color="primary" dark flat>
            {{ formTitle }}
          </v-toolbar>

          <v-progress-linear
            v-if="formDataLoading"
            indeterminate
            color="yellow darken-2"
          >
          </v-progress-linear>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.car_types_id"
                    id="formData.car_types_id"
                    name="formData.car_types_id"
                    :items="cartypes"
                    item-text="car_type_name"
                    item-value="id"
                    label="ประเภทรถ"
                    outlined
                    dense
                    hide-details
                    no-data-text="ไม่มีข้อมูล"
                    :rules="rule"
                  >
                    <template slot="selection" slot-scope="{ item }">
                      {{ item.car_type_name }} ({{ item.car_type_name_en }})
                    </template>

                    <template slot="item" slot-scope="{ item }">
                      {{ item.car_type_name }} ({{ item.car_type_name_en }})
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.car_models_id"
                    id="formData.car_models_id"
                    name="formData.car_models_id"
                    :items="carmodels"
                    item-text="car_model_name"
                    item-value="id"
                    label="ค่ายรถ"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.car_series_id"
                    id="formData.car_series_id"
                    name="formData.car_series_id"
                    :items="carseries"
                    item-text="car_series_name"
                    item-value="id"
                    label="ซีรี่รถ"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ปีรถ"
                    append-icon=""
                    v-model="formData.car_year"
                    id="formData.car_year"
                    name="formData.car_year"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="สีรถ"
                    append-icon=""
                    v-model="formData.car_color"
                    id="formData.car_color"
                    name="formData.car_color"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ทะเบียน"
                    append-icon=""
                    v-model="formData.car_regis"
                    id="formData.car_regis"
                    name="formData.car_regis"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="เลขเครื่องยนต์"
                    append-icon=""
                    v-model="formData.car_no_engine"
                    id="formData.car_no_engine"
                    name="formData.car_no_engine"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="เลขตัวถัง"
                    append-icon=""
                    v-model="formData.car_no_body"
                    id="formData.car_no_body"
                    name="formData.car_no_body"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาซื้อ (บ)"
                    append-icon=""
                    v-model="formData.car_buy"
                    id="formData.car_buy"
                    name="formData.car_buy"
                    type="number"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาขาย (บ)"
                    append-icon=""
                    v-model="formData.car_price"
                    id="formData.car_price"
                    name="formData.car_price"
                    type="number"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
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
import * as apiCars from "@/Api/apiCars";
import * as apiCar_types from "@/Api/apiCar_types";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_series from "@/Api/apiCar_series";
export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      cartypes: [],
      carmodels: [],
      carseries: [],
      dialogDeleteComponent: false,
    };
  },
  mounted() {},
  methods: {
    async getCartypes() {
      const response = await apiCar_types.select();
      this.cartypes = response.data;
      this.loading = false;
    },
    async getCarmodels() {
      const response = await apiCar_models.select();
      this.carmodels = response.data;
      this.loading = false;
    },
    async getCarseries() {
      const response = await apiCar_series.select();
      this.carseries = response.data;
      this.loading = false;
    },

    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.action == "add") {
          const response = await apiCars.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiCars.update(this.id, this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        }
      }
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;

      if (this.$props.dialog) {
        this.getCartypes();
        this.getCarmodels();
        this.getCarseries();
        if (this.action == "add") {
          await this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await {
                car_year: new Date().getFullYear(),
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiCars.show(this.id);
          await this.$nextTick(() => {
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

<style></style>
