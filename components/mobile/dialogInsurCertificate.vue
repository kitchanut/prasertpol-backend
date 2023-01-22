<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      fullscreen
    >
      <v-card>
        <v-form
          autocomplete="true"
          ref="form"
          @submit.prevent="onAction()"
        >
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title> {{ formTitleInsurCertificate }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                v-if="formData.action == 'edit'"
                @click="print_a4()"
                target="_blank"
                dark
                text
                :loading="btnloading"
                style="font-size: 18px"
              >
                ปริ้น
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
            <v-row class="d-flex flex-row">
              <v-col align="end">
                <h3>รหัสงาน: W{{ idWork }}</h3>
                <h3>ลำดับรถ: {{ formData.car_no }}</h3>
              </v-col>
            </v-row>

            <v-row class="d-flex flex-row">
              <v-col cols="2"> </v-col>

              <v-col cols="10">
                <v-menu
                  ref="menuDate"
                  v-model="menuDate"
                  id="menuDate"
                  name="menuDate"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      autocomplete="true"
                      label="วันที่ปล่อยรถ"
                      v-model="formData.insurance_certificate_date"
                      id="formData.insurance_certificate_date"
                      name="formData.insurance_certificate_date"
                      v-bind="attrs"
                      readonly
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      outlined
                      dense
                      hide-details
                      flathide-details
                      clearable
                      :rules="rule"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.insurance_certificate_date"
                    id="formData.insurance_certificate_date"
                    name="formData.insurance_certificate_date"
                    locale="th-TH"
                    picker-date
                    @input="menuDate = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 3 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ชื่อ-สกุลผู้ซื้อ"
                  v-model="formData.customer_name"
                  id="formData.customer_name"
                  name="formData.customer_name"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 2 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ที่อยู่ตามทะเบียนบ้าน"
                  v-model="formData.customer_address"
                  id="formData.customer_address"
                  name="formData.customer_address"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="จังหวัด"
                  v-model="formData.province"
                  id="formData.province"
                  name="formData.province"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

            </v-row>
            <!--  -->

            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="อำเภอ"
                  v-model="formData.amphure"
                  id="formData.amphure"
                  name="formData.amphure"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ตำบล"
                  v-model="formData.district"
                  id="formData.district"
                  name="formData.district"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
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

            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="เบอร์โทร"
                  v-model="formData.customer_tel"
                  id="formData.customer_tel"
                  name="formData.customer_tel"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!-- กรอบข้อมูลช่อง 2 -->
            <v-row class="d-flex flex-row mt-5">
              <v-col class="text-center">
                <h3>รายละเอียดรถยนต์</h3>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 3 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ลำดับรถ"
                  v-model="formData.car_no"
                  id="formData.car_no"
                  name="formData.car_no"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ทะเบียนรถ"
                  v-model="formData.car_regis"
                  id="formData.car_regis"
                  name="formData.car_regis"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ยี่ห้อ"
                  v-model="formData.car_model_name"
                  id="formData.car_model_name"
                  name="formData.car_model_name"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 2 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="เลขไมค์ ณ วันปล่อยรถ"
                  v-model="formData.car_mileage"
                  id="formData.car_mileage"
                  name="formData.car_mileage"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="พนักงานขาย"
                  v-model="formData.first_name"
                  id="formData.first_name"
                  name="formData.first_name"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="เบอร์โทร"
                  v-model="formData.tel"
                  id="formData.tel"
                  name="formData.tel"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>

            <v-col v-if="formData.action == 'edit'">
              <v-row class="d-flex flex-row mt-5">
                <v-col class="text-center">
                  <h3>รายการที่เคยซ่อมหลังการขาย</h3>
                </v-col>
              </v-row>
              <v-row
                v-for="(repair_detail, keys) in formData.repair_details"
                :key="keys"
              >
                <v-col
                  class="text-center"
                  cols="1"
                >
                  <h3 class="mt-2">{{ keys + 1 }}</h3>
                </v-col>

                <v-col cols="2">
                  <v-menu
                    v-model="menuDateInsurance_certificate_date"
                    id="menuDateInsurance_certificate_date"
                    name="menuDateInsurance_certificate_date"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="repair_detail.repair_date"
                        id="repair_detail.repair_date"
                        name="repair_detail.repair_date"
                        label="วัน/เดือน/ปี"
                        v-bind="attrs"
                        v-on="on"
                        disabled
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        clearable
                        hide-details
                        flat
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="repair_detail.repair_date"
                      id="repair_detail.repair_date"
                      name="repair_detail.repair_date"
                      locale="th-TH"
                      picker-date
                      @input="menuDateInsurance_certificate_date = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="repair_detail.repair_id"
                    id="repair_detail.repair_id"
                    name="repair_detail.repair_id"
                    :items="repair_lists"
                    item-text="repair_name"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    label="ชื่อรายการ"
                    disabled
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-autocomplete>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="เลขไมค์"
                    v-model="repair_detail.car_mileage"
                    id="repair_detail.car_mileage"
                    name="repair_detail.car_mileage"
                    append-icon=""
                    outlined
                    disabled
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="คงเหลือ"
                    v-model="repair_detail.car_mileage_balance"
                    id="repair_detail.car_mileage_balance"
                    name="repair_detail.car_mileage_balance"
                    append-icon=""
                    outlined
                    dense
                    disabled
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="$emit('cancleItem')"
            >ยกเลิก</v-btn>

            <v-btn
              type="submit"
              color="success darken-1"
              text
              :loading="btnloading"
            >บันทึก</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiInsurCertificate from "@/Api/apiInsurCertificate";
import * as apiRepair_lists from "@/Api/apiRepair_lists";
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiAmphures from "@/Api/apiAmphures";
import * as apiDistricts from "@/Api/apiDistricts";
export default {
  props: [
    "dialogInsurCertificate",
    "actionInsurCertificate",
    "idWork",
    "jobType",
    "formTitleInsurCertificate",
  ],
  data() {
    return {
      btnloading: true,
      dialogDeleteComponent: false,
      formDataLoading: false,
      menuDateInsurance_certificate_date: false,
      formData: {
        repair_details: [{}],
      },
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      repair_lists: [],
      menuDate: false,
      dataProvinces: [],
      dataAmphures: [],
      dataDistricts: [],
    };
  },
  async mounted() {},
  methods: {
    async getProvince(id) {
      for (let index = 0; index < this.dataProvinces.length; index++) {
        if (this.dataProvinces[index].id == id) {
          return await this.dataProvinces[index].name_th;
        }
      }
    },
    async getAmphures(id) {
      // console.log(id);
      for (let index = 0; index < this.dataAmphures.length; index++) {
        if (this.dataAmphures[index].id == id) {
          // console.log(this.dataAmphures[index]);
          return await this.dataAmphures[index].name_th;
        }
      }
    },

    async getDistrict(id) {
      for (let index = 0; index < this.dataDistricts.length; index++) {
        // console.log(this.dataDistricts[index])
        if (this.dataDistricts[index].id == id) {
          return await this.dataDistricts[index].name_th;
        }
      }
    },

    async getRepairlists() {
      const response = await apiRepair_lists.select();
      this.repair_lists = response.data;
      this.loading = false;
    },
    async print_a4() {
      let routeData = this.$router.resolve({
        name: "prints-print_warranty",
        query: { idInsu: this.formData.id },
      });
      window.open(routeData.href, "_blank");
      // const response = await apiInsurCertificate.update(
      //   this.formData.id,
      //   this.formData
      // );
      // // console.log(response);
      // this.$refs.form.reset();

      // if (response.status == 200) {
      //   this.$emit("success", "Booking");
      //   this.$nextTick(() => {
      //     let routeData = this.$router.resolve({
      //       name: "prints-print_booking",
      //       query: { idBooking: this.formData.id },
      //     });
      //     window.open(routeData.href, "_blank");
      //   });
      // } else {
      //   this.$emit("error", "Booking");
      // }
    },

    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.formDataLoading = true;
        this.btnloading = true;
        if (this.formData.action == "add") {
          // console.log(this.formData);
          const response = await apiInsurCertificate.store(this.formData);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "InsurCertificate");
          } else {
            this.$emit("error", "InsurCertificate");
          }
        } else if (this.formData.action == "edit") {
          const response = await apiInsurCertificate.update(
            this.formData.id,
            this.formData
          );
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "InsurCertificate");
          } else {
            this.$emit("error", "InsurCertificate");
          }
        }
        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    async dialogInsurCertificate() {
      this.dialogDeleteComponent = this.dialogInsurCertificate;
      if (this.dialogInsurCertificate) {
        const responsePro = await apiProvinces.select();
        this.dataProvinces = responsePro.data;
        const responseAm = await apiAmphures.select();
        this.dataAmphures = responseAm.data;
        const responseDis = await apiDistricts.select();
        this.dataDistricts = responseDis.data;

        this.formDataLoading = true;

        this.getRepairlists();
        if (this.actionInsurCertificate == "check") {
          const response = await apiInsurCertificate.checkInsurCertificate(
            this.idWork,
            this.jobType
          );
          // console.log(response);
          await this.$refs.form.reset();
          this.formData = await response.data;

          if (response.data.action == "add") {
            // amphure
            this.formData.amphure = await this.getAmphures(
              response.data.amphure_id
            );
            // district

            this.formData.district = await this.getDistrict(
              response.data.district_id
            );
            // province
            this.formData.province = await this.getProvince(
              response.data.province_id
            );
          }
        }
        this.formDataLoading = false;
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
