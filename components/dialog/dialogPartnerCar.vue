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
              <v-radio-group
                v-model="formData.partner_car_type"
                id="formData.partner_car_type"
                name="formData.partner_car_type"
                :rules="rule"
                row
              >
                <template>
                  <div class="mr-1">ประเภทคู่ค้า:</div>
                </template>

                <v-radio label="บุคคลธรรมดา" value="1"></v-radio>
                <v-radio label="ลานประมูล" value="2"></v-radio>
              </v-radio-group>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อคู่ค้า"
                    append-icon=""
                    v-model="formData.partner_car_name"
                    id="formData.partner_car_name"
                    name="formData.partner_car_name"
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
                    label="เลขเสียภาษี"
                    append-icon=""
                    v-model="formData.partner_car_idvat"
                    id="formData.partner_car_idvat"
                    name="formData.partner_car_idvat"
                    outlined
                    dense
                    hide-details
                    type="number"
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์ติดต่อ"
                    append-icon=""
                    v-model="formData.partner_car_tel"
                    id="formData.partner_car_tel"
                    name="formData.partner_car_tel"
                    outlined
                    dense
                    hide-details
                    type="number"
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ที่อยู่"
                    append-icon=""
                    v-model="formData.partner_car_address"
                    id="formData.partner_car_address"
                    name="formData.partner_car_address"
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
                    v-model="formData.amphure_id"
                    id="formData.amphure_id"
                    name="formData.amphure_id"
                    :items="dataSelectAmphures"
                    item-text="name_th"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    @change="selectSeeAmphure"
                    label="อำเภอ"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.district_id"
                    id="formData.district_id"
                    name="formData.district_id"
                    :items="dataSelectDistricts"
                    item-text="name_th"
                    item-value="id"
                    @change="selectSeeDistrict"
                    label="ตำบล"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.province_id"
                    id="formData.province_id"
                    name="formData.province_id"
                    :items="dataProvinces"
                    item-text="name_th"
                    item-value="id"
                    @change="selectSeeProvince"
                    label="จังหวัด"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="รหัสไปรษณีย์"
                    append-icon=""
                    v-model="formData.zip_code"
                    id="formData.zip_code"
                    name="formData.zip_code"
                    outlined
                    dense
                    hide-details
                    type="number"
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-radio-group
                v-model="formData.partner_car_active"
                id="formData.partner_car_active"
                name="formData.partner_car_active"
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
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiPartner_cars from "@/Api/apiPartner_cars";
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiAmphures from "@/Api/apiAmphures";
import * as apiDistricts from "@/Api/apiDistricts";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      dataProvinces: [],
      dataAmphures: [],
      dataSelectAmphures: [],
      dataDistricts: [],
      dataSelectDistricts: [],
    };
  },
  mounted() {
    this.getProvinces();
    this.getAmphures();
    this.getDistricts();
    this.loading = false;
  },
  methods: {
    async getProvinces() {
      const response = await apiProvinces.select();
      this.dataProvinces = response.data;
    },
    async getAmphures() {
      const response = await apiAmphures.select();
      this.dataAmphures = response.data;
      this.dataSelectAmphures = response.data;
    },
    async getDistricts() {
      const response = await apiDistricts.select();
      this.dataDistricts = response.data;
    },
    async selectSeeProvince() {
      this.dataSelectAmphures = [];
      for (let index = 0; index < this.dataAmphures.length; index++) {
        if (this.dataAmphures[index].province_id == this.formData.province_id) {
          this.dataSelectAmphures.push(this.dataAmphures[index]);
        }
      }
    },
    async selectSeeAmphure() {
      // console.log(this.formData.amphure_id);
      this.dataSelectDistricts = [];
      for (let index = 0; index < this.dataDistricts.length; index++) {
        if (this.dataDistricts[index].amphure_id == this.formData.amphure_id) {
          this.dataSelectDistricts.push(this.dataDistricts[index]);
        }
      }

      for (let index = 0; index < this.dataAmphures.length; index++) {
        if (this.dataAmphures[index].id == this.formData.amphure_id) {
          this.formData.province_id = this.dataAmphures[index].province_id;
          // console.log(this.dataAmphures[index]);
        }
      }
    },
    async selectSeeDistrict() {
      this.formData.zip_code = "";
      for (let index = 0; index < this.dataDistricts.length; index++) {
        if (this.dataDistricts[index].id == this.formData.district_id) {
          // this.dataSelectDistricts.push(this.dataDistricts[index]);
          this.formData.zip_code = this.dataDistricts[index].zip_code;
        }
      }
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.action == "add") {
          const response = await apiPartner_cars.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          const response = await apiPartner_cars.update(this.id, this.formData);
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
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                partner_car_type: "1",
                partner_car_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiPartner_cars.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              this.selectSeeAmphure();
              this.selectSeeDistrict();
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
