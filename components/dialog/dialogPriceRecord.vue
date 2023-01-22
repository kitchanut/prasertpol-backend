<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" width="550px">
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

          <!-- {{ formData }} -->

          <v-card-text>
            <v-container>
              <v-menu
                ref="menuDate"
                v-model="menuDate"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    autocomplete="true"
                    v-model="formData.date"
                    label="วันจบ"
                    v-bind="attrs"
                    v-on="on"
                    persistent-hint
                    prepend-icon=""
                    outlined
                    dense
                    hide-details
                    flathide-details
                    :rules="rule"
                    clearable
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.date"
                  locale="th-TH"
                  picker-date
                  @input="menuDate = false"
                ></v-date-picker>
              </v-menu>

              <v-autocomplete
                class="mt-3"
                v-model="formData.car_types_id"
                :items="carType"
                no-data-text="ไม่มีข้อมูล"
                @change="eventSelectType"
                item-text="car_type_name"
                item-value="id"
                label="ประเภทรถ"
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
                <template v-slot:append-item>
                  <selectAddCarType @success="addSuccess" @error="addError" />
                </template>
              </v-autocomplete>

              <v-autocomplete
                class="mt-3"
                v-model="formData.car_models_id"
                :items="carModel"
                @change="eventSelectModel"
                no-data-text="ไม่มีข้อมูล"
                item-text="car_model_name"
                item-value="id"
                label="ยี่ห้อ"
                outlined
                dense
                hide-details
                :rules="rule"
              >
                <template v-slot:append-item>
                  <selectAddCarModel @success="addSuccess" @error="addError" />
                </template>
              </v-autocomplete>

              <v-autocomplete
                class="mt-2"
                v-model="formData.car_serie_id"
                :items="carSerie"
                no-data-text="ไม่มีข้อมูล"
                @change="getCarSerieSub"
                item-text="car_series_name"
                item-value="id"
                label="รุ่นรถ"
                outlined
                dense
                hide-details
                :rules="rule"
              >
                <template v-slot:append-item>
                  <selectAddCarSerie @success="addSuccess" @error="addError" />
                </template>
              </v-autocomplete>

              <v-autocomplete
                class="mt-2"
                v-model="formData.car_serie_sub_id"
                :items="carSerieSub"
                item-text="car_serie_sub_name"
                item-value="id"
                label="รุ่นย่อย"
                no-data-text="ไม่มีข้อมูล"
                outlined
                dense
                hide-details
                :rules="rule"
              >
                <template v-slot:append-item>
                  <selectAddCarSerieSub
                    @success="addSuccess"
                    @error="addError"
                  />
                </template>
              </v-autocomplete>

              <v-autocomplete
                class="mt-2"
                v-model="formData.car_year"
                :items="years"
                item-text="value"
                no-data-text="ไม่มีข้อมูล"
                item-value="value"
                label="ปีผลิต (ค.ศ)"
                outlined
                dense
                hide-details
                :rules="rule"
              ></v-autocomplete>

              <v-autocomplete
                class="mt-2"
                v-model="formData.color_id"
                :items="dataColor"
                item-text="color_name"
                no-data-text="ไม่มีข้อมูล"
                item-value="id"
                label="สีของรถ"
                outlined
                dense
                hide-details
                :rules="rule"
              ></v-autocomplete>

              <v-radio-group
                class="mt-2"
                v-model="formData.car_gear"
                row
                hide-details=""
                :rules="rule"
              >
                <template>
                  <div class="mr-1">เกียร์รถ:</div>
                </template>
                <v-radio label="อัตโนมัติ (AT)" value="AT"></v-radio>
                <v-radio label="ธรรมดา (MT)" value="MT"></v-radio>
                <v-radio label="อื่นๆ" value="N/A"></v-radio>
              </v-radio-group>

              <v-text-field
                class="mt-2"
                autocomplete="true"
                label="เลขไมค์"
                append-icon=""
                v-model="formData.car_mileage"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-text-field
                class="mt-2"
                autocomplete="true"
                label="เกรด"
                append-icon=""
                v-model="formData.grade"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-text-field
                class="mt-2"
                autocomplete="true"
                label="ชื่อลาน"
                append-icon=""
                v-model="formData.location"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-text-field
                class="mt-2"
                autocomplete="true"
                label="ราคาจบ"
                append-icon=""
                v-model="formData.price"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <div class="d-flex flex-column justify-center">
                <v-file-input
                  class="mt-2"
                  outlined
                  dense
                  accept="image/*"
                  show-size
                  :label="
                    currentFile == null
                      ? 'เลือกรูปภาพ'
                      : imagePreviewURL == null
                      ? 'เลือกรูปภาพ'
                      : 'เลือกรูปใหม่'
                  "
                  @change="selectFile"
                ></v-file-input>
                <v-img
                  contain
                  v-if="currentFile != null || imagePreviewURL != null"
                  height="250px"
                  :src="imagePreviewURL"
                />
              </div>
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
import * as apiPriceRecord from "@/Api/apiPriceRecord";
import * as apiCar_types from "@/Api/apiCar_types";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";
import * as apiColor from "@/Api/apiColor";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      serverUrl: process.env.serverUrl,
      menuDate: false,
      btnloading: true,
      formDataLoading: false,
      formData: {},
      carType: [],
      carModel: [],
      carSerie: [],
      carSerieSub: [],
      years: [],
      dataColor: [],
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      currentFile: null,
      imagePreviewURL: null,
    };
  },
  mounted() {},
  methods: {
    async getCartypes() {
      const response = await apiCar_types.select();
      this.carType = response.data;
      this.formDataLoading = false;
    },
    async eventSelectType() {
      this.getCarseries();
    },
    async getCarmodels() {
      const response = await apiCar_models.select();
      this.carModel = response.data;
      this.formDataLoading = false;
    },
    async eventSelectModel() {
      this.getCarseries();
      //   this.formData.car_serie_id = null;
    },
    async getCarseries() {
      this.carSerie = [];
      if (Number.isInteger(this.formData.car_models_id) == true) {
        const response = await apiCar_series.selectDropdown(
          this.formData.car_types_id,
          this.formData.car_models_id
        );
        this.carSerie = response.data;
      }
      // this.loading = false;
      this.getCarSerieSub();
    },
    async getCarSerieSub() {
      this.carSerieSub = [];
      if (Number.isInteger(this.formData.car_serie_id) == true) {
        const response = await apiCar_serie_sub.select(
          this.formData.car_serie_id
        );
        this.carSerieSub = response.data;
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
    async getColors() {
      const response = await apiColor.select();
      this.dataColor = response.data;
    },
    selectFile(payload) {
      // console.log(payload);
      this.currentFile = payload;
      const file = payload; // in case vuetify file input
      if (file) {
        this.imagePreviewURL = URL.createObjectURL(file);
        URL.revokeObjectURL(file); // free memory
      } else {
        this.imagePreviewURL = null;
      }
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;

        const data = new FormData();
        data.append("formData", JSON.stringify(this.formData));
        data.append("Image", this.currentFile);

        if (this.action == "add") {
          const response = await apiPriceRecord.store(data);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          data.append("_method", "PATCH");
          const response = await apiPriceRecord.update(id, data);
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
    async addSuccess(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      } else if (value == "AddCarType") {
        await this.getCartypes();
      } else if (value == "AddCarModel") {
        await this.getCarmodels();
      } else if (value == "AddCarSerie") {
        await this.getCarseries();
      } else if (value == "AddCarSerieSub") {
        await this.getCarSerieSub();
      } else if (value == "AddSearch_term") {
        await this.getSearch_term();
      } else if (value == "AddPartnerCar") {
        await this.getPartnerCar();
      }
    },
    async addError(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      } else if (value == "AddCarType") {
        await this.getCartypes();
      } else if (value == "AddCarModel") {
        await this.getCarmodels();
      } else if (value == "AddCarSerie") {
        await this.getCarseries();
      } else if (value == "AddCarSerieSub") {
        await this.getCarSerieSub();
      } else if (value == "AddSearch_term") {
        await this.getSearch_term();
      } else if (value == "AddPartnerCar") {
        await this.getPartnerCar();
      }
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        await this.getCartypes();
        await this.getCarmodels();
        await this.getYearCurrent();
        await this.getColors();
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {};
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiPriceRecord.show(this.id);
          //   console.log(response.data);

          //   this.$nextTick(() => {
          this.$refs.form.reset();
          const self = this;
          this.$nextTick(async () => {
            self.formData = await response.data;
            await this.getCarseries();

            if (response.data.image != null) {
              this.imagePreviewURL = this.serverUrl + "/" + response.data.image;
            }
          });
          //   });

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
  