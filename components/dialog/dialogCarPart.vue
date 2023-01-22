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
                    v-model="formData.car_part_type_id"
                    id="formData.car_part_type_id"
                    name="formData.car_part_type_id"
                    :items="car_part_types"
                    item-text="car_part_type_name"
                    item-value="id"
                    label="ประเภทอะไหล่"
                    outlined
                    dense
                    hide-details
                    no-data-text="ไม่มีข้อมูล"
                    :rules="rule"
                  >
                    <template v-slot:append-item>
                      <selectAddCarPartType
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อ"
                    append-icon=""
                    v-model="formData.car_part_name"
                    id="formData.car_part_name"
                    name="formData.car_part_name"
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
                  <v-autocomplete
                    v-model="formData.unit_id"
                    id="formData.unit_id"
                    name="formData.unit_id"
                    :items="dataUnit"
                    item-text="unit_name"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    label="หน่วย"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template v-slot:append-item>
                      <selectAddUnit @success="addSuccess" @error="addError" />
                    </template>
                  </v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="รหัส"
                    append-icon=""
                    v-model="formData.car_part_code"
                    id="formData.car_part_code"
                    name="formData.car_part_code"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาซื้อ"
                    append-icon=""
                    v-model="formData.car_part_price"
                    id="formData.car_part_price"
                    name="formData.car_part_price"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาขาย"
                    append-icon=""
                    v-model="formData.car_part_buy"
                    id="formData.car_part_buy"
                    name="formData.car_part_buy"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="ส่วนลด"
                    append-icon=""
                    v-model="formData.car_part_discount"
                    id="formData.car_part_discount"
                    name="formData.car_part_discount"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-radio-group
                v-model="formData.car_part_active"
                id="formData.car_part_active"
                name="formData.car_part_active"
                :rules="rule"
                row
              >
                <template>
                  <div class="mr-1">แสดงตอนเลือก:</div>
                </template>

                <v-radio label="เปิดใช้งาน" value="1"></v-radio>
                <v-radio label="ปิดการใช้งาน" color="red" value="2"></v-radio>
              </v-radio-group>
              <div class="d-flex flex-column justify-center">
                <v-file-input
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
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiCar_parts from "@/Api/apiCar_parts";
import * as apiCar_part_types from "@/Api/apiCar_part_types";
import * as apiUnit from "@/Api/apiUnit";

import selectAddCarPartType from "@/components/selectAdd/selectAddCarPartType";
import selectAddUnit from "@/components/selectAdd/selectAddUnit";
export default {
  props: ["dialog", "action", "id", "formTitle"],
  components: {
    selectAddCarPartType,
    selectAddUnit,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/car_parts/",
      btnloading: true,
      formDataLoading: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      car_part_types: [],
      dataUnit: [],
      dialogDeleteComponent: false,
      currentFile: null,
      imagePreviewURL: null,
    };
  },
  mounted() {},

  methods: {
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
    async getCarTypes() {
      const response = await apiCar_part_types.select();
      this.car_part_types = response.data;
      this.loading = false;
    },
    async getUnit() {
      const response = await apiUnit.select();
      this.dataUnit = response.data;
      this.loading = false;
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        const data = new FormData();
        data.append("formData", JSON.stringify(this.formData));
        data.append("Image", this.currentFile);

        if (this.action == "add") {
          const response = await apiCar_parts.store(data);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          data.append("_method", "PATCH");

          const response = await apiCar_parts.update(id, data);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
    async addSuccess(value) {
      if (value == "AddCarPartType") {
        await this.getCarTypes();
      } else if (value == "AddUnit") {
        await this.getUnit();
      }
    },
    async addError(value) {
      if (value == "AddCarPartType") {
        await this.getCarTypes();
      } else if (value == "AddUnit") {
        await this.getUnit();
      }
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        this.getCarTypes();
        this.getUnit();
        this.imagePreviewURL = null;

        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                car_part_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiCar_parts.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              if (response.data.car_part_image != null) {
                this.imagePreviewURL =
                  this.serverUrl +
                  response.data.id +
                  "/" +
                  response.data.car_part_image;
              }
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
