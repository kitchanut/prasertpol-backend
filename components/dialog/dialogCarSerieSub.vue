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
                <v-col cols="12">
                  <v-autocomplete
                    v-model="formData.car_serie_id"
                    name="formData.car_serie_id"
                    id="formData.car_serie_id"
                    :items="carSerie"
                    item-text="car_series_name"
                    item-value="id"
                    label="รุ่นรถ"
                    outlined
                    dense
                    no-data-text="ไม่มีข้อมูล"
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อรุ่นย่อย"
                    append-icon=""
                    v-model="formData.car_serie_sub_name"
                    name="formData.car_serie_sub_name"
                    id="formData.car_serie_sub_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-radio-group
                v-model="formData.car_serie_sub_active"
                name="formData.car_serie_sub_active"
                id="formData.car_serie_sub_active"
                :rules="rule"
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
            <v-btn color="red darken-1" text @click="$emit('cancleItem')"
              >ยกเลิก</v-btn
            >
            <v-btn
              type="submit"
              color="success darken-1"
              text
              :loading="btnloading"
              >บันทึก
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      carSerie: [],
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
    };
  },
  mounted() {},
  methods: {
    async getCarSerie() {
      const response = await apiCar_series.select();
      this.carSerie = response.data;
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        if (this.action == "add") {
          const response = await apiCar_serie_sub.store(this.formData);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiCar_serie_sub.update(id, this.formData);
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
        this.getCarSerie();

        if (this.action == "add") {
          await this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await {
                car_serie_sub_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiCar_serie_sub.show(this.id);
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
