<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
      <v-card>
        <v-form ref="form" autocomplete="true" @submit.prevent="onAction(formData.id)">
          <v-toolbar color="primary" dark flat>
            {{ formTitle }}
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <v-container>
              <!-- <v-autocomplete
                v-model="formData.car_type_id"
                id="formData.car_type_id"
                name="formData.car_type_id"
                :items="cartypes"
                item-text="car_type_name"
                item-value="id"
                no-data-text="ไม่มีข้อมูล"
                label="ประเภอรถ"
                outlined
                dense
                hide-details
                :rules="rule"
              >
                <template slot="selection" slot-scope="{ item }">
                  {{ item.car_type_name }} ({{ item.car_type_name_en }})
                </template>

                <template slot="item" slot-scope="{ item }">
                  {{ item.car_type_name }} ({{ item.car_type_name_en }})
                </template>
              </v-autocomplete> -->

              <v-autocomplete
                class="mt-3"
                v-model="formData.car_model_id"
                id="formData.car_model_id"
                name="formData.car_model_id"
                :items="carmodels"
                item-text="car_model_name"
                item-value="id"
                no-data-text="ไม่มีข้อมูล"
                label="ยี่ห้อรถ"
                outlined
                dense
                hide-details
                :rules="rule"
              ></v-autocomplete>

              <v-text-field
                class="mt-3"
                autocomplete="true"
                label="รหัสสี"
                append-icon=""
                v-model="formData.car_serie_code_color"
                id="formData.car_serie_code_color"
                name="formData.car_serie_code_color"
                outlined
                dense
                hide-details
              >
              </v-text-field>

              <v-text-field
                class="mt-3"
                autocomplete="true"
                label="ชื่อรุ่น"
                append-icon=""
                v-model="formData.car_series_name"
                id="formData.car_series_name"
                name="formData.car_series_name"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-text-field
                class="mt-3"
                label="จำนวนขั้นต่ำ"
                append-icon=""
                v-model="formData.car_series_minimum"
                outlined
                dense
                hide-details
                :rules="[(value) => value >= 0]"
              >
              </v-text-field>

              <v-radio-group
                class="mt-3"
                v-model="formData.car_series_active"
                id="formData.car_series_active"
                name="formData.car_series_active"
                :rules="rule"
                hide-details=""
                row
              >
                <template>
                  <div class="mr-1">แสดงตอนเลือก:</div>
                </template>

                <v-radio label="เปิดใช้งาน" value="1"></v-radio>
                <v-radio label="ปิดการใช้งาน" color="red" value="2"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">ยกเลิก</v-btn>
            <v-btn type="submit" color="success darken-1" text :loading="btnloading">บันทึก </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_types from "@/Api/apiCar_types";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      carmodels: [],
      cartypes: [],
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
    };
  },
  mounted() {},
  methods: {
    async getCartypes() {
      const response = await apiCar_types.select();
      this.cartypes = response.data;
      this.loading = false;
    },
    async getCarModel() {
      const response = await apiCar_models.select();
      this.carmodels = response.data;
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        if (this.action == "add") {
          const response = await apiCar_series.store(this.formData);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiCar_series.update(id, this.formData);
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
        this.getCarModel();
        this.getCartypes();
        if (this.action == "add") {
          await this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await {
                car_series_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiCar_series.show(this.id);
          // console.log(response);
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
