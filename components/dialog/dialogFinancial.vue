<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      :fullscreen="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' ? true : false"
      width="550px"
    >
      <v-card>
        <v-form ref="form" autocomplete="true" :disabled="formDisabled" @submit.prevent="onAction()">
          <v-toolbar color="primary" dark flat>
            <v-btn text @click="$emit('cancleItem')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> ใบสำคัญรับเงิน </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- <v-btn
              v-if="this.formData.action == 'edit'"
              @click="print_a4()"
              target="_blank"
              dark
              text
              :loading="btnloading"
              style="font-size: 18px"
            >
              ปริ้น
            </v-btn> -->

            <v-toolbar-items>
              <v-btn type="submit" dark text :loading="btnloading" style="font-size: 18px"> บันทึก </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <v-row class="d-flex flex-row">
              <v-col> </v-col>
              <v-col align="end">
                <h3>รหัสงาน: W{{ idWork }}</h3>
                <h3>ลำดับรถ: {{ car_no }}</h3>
              </v-col>
            </v-row>

            <v-dialog
              ref="menuDateCreated_at"
              v-model="menuDateCreated_at"
              id="menuDateCreated_at"
              name="menuDateCreated_at"
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  autocomplete="true"
                  v-model="formData.created_at"
                  id="formData.created_at"
                  name="formData.created_at"
                  label="วันที่รับเงิน"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                  persistent-hint
                  prepend-icon=""
                  outlined
                  dense
                  hide-details
                  clearable
                  flat
                  :rules="rule"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="formData.created_at"
                id="formData.created_at"
                name="formData.created_at"
                locale="th-TH"
                picker-date
                @input="menuDateCreated_at = false"
              ></v-date-picker>
            </v-dialog>

            <v-text-field
              class="mt-3"
              label="จำนวนเงิน"
              v-model="formData.bath"
              onkeypress="return  (event.charCode >= 48 && event.charCode <= 57)"
              @input="cvToString"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              autocomplete="true"
              readonly
              label="ตัวอักษร"
              v-model="formData.bath_string"
              outlined
              dense
              hide-details
            >
            </v-text-field>

            <v-row
              class="d-flex flex-row rounded ma-auto mt-3 mb-3"
              style="border-style: solid; border-width: 1px; border-color: gray"
            >
              <v-col>
                <v-radio-group
                  v-model="formData.payment_type"
                  id="formData.payment_type"
                  name="formData.payment_type"
                  hide-details=""
                >
                  <template>
                    <div class="mb-3">รายการชำระเงินค่ารถยนต์:</div>
                  </template>
                  <v-radio value="1" label="เงินจอง/มัดจำ"></v-radio>
                  <v-radio value="2" label="เงินดาวน์"></v-radio>
                  <v-radio value="3" label="ซื้อเงินสด"></v-radio>
                  <v-radio value="4" label="ค่างวดล่วงหน้า"></v-radio>
                  <v-radio value="5" label="สมาร์ทชัว"></v-radio>
                  <v-radio value="6" label="ประกันอื่นๆ"></v-radio>
                  <v-radio value="7" label="คืนค่างวดบริษัท"></v-radio>
                  <v-radio value="99" label="อื่นๆ"></v-radio>
                </v-radio-group>

                <v-text-field
                  v-if="formData.payment_type == 99"
                  class="mt-3"
                  label="กรุณาระบุรายการ"
                  v-model="formData.details"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>
              </v-col>
            </v-row>

            <v-file-input
              class="mt-3"
              label="รูปบัตรประจำตัวประชาชนลูกค้า*"
              v-model="id_card"
              prepend-icon=""
              append-icon="mdi-image"
              show-size
              outlined
              dense
              hide-details=""
              :rules="ruleMustImage"
            ></v-file-input>

            <v-file-input
              v-if="formData.bath > 0"
              class="mt-3"
              label="รูปประกอบการรับเงิน เช่น สลิป*"
              v-model="slip"
              prepend-icon=""
              append-icon="mdi-image"
              show-size
              outlined
              dense
              hide-details=""
              :rules="ruleMustImage"
            ></v-file-input>

            <v-textarea class="mt-3" label="หมายเหตุ" v-model="formData.note" rows="2" outlined dense hide-details>
            </v-textarea>

            <v-row class="d-flex flex-row mt-2" style="border-top: 2px solid black; border-bottom: 2px solid black">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ชื่อ-นามสกุล ของลูกค้า"
                  v-model="formData.customer_name"
                  id="formData.customer_name"
                  name="formData.customer_name"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>

                <v-row no-gutters class="mt-3">
                  <v-col>
                    <v-text-field
                      autocomplete="true"
                      label="ที่อยู่"
                      v-model="formData.customer_address"
                      id="formData.customer_address"
                      name="formData.customer_address"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-3">
                  <v-col>
                    <v-autocomplete
                      v-model="formData.amphure_id"
                      id="formData.amphure_id"
                      name="formData.amphure_id"
                      :items="dataSelectAmphures"
                      item-text="name_th"
                      item-value="id"
                      no-data-text="ไม่มีข้อมูล"
                      @change="selectSeeAmphure"
                      label="อำเภอ"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col class="pl-1">
                    <v-autocomplete
                      v-model="formData.district_id"
                      id="formData.district_id"
                      name="formData.district_id"
                      :items="dataSelectDistricts"
                      item-text="name_th"
                      item-value="id"
                      no-data-text="ไม่มีข้อมูล"
                      @change="selectSeeDistrict"
                      label="ตำบล"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-autocomplete>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-3">
                  <v-col>
                    <v-autocomplete
                      v-model="formData.province_id"
                      id="formData.province_id"
                      name="formData.province_id"
                      :items="dataProvinces"
                      item-text="name_th"
                      item-value="id"
                      @change="selectSeeProvince"
                      label="จังหวัด"
                      no-data-text="ไม่มีข้อมูล"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-autocomplete>
                  </v-col>

                  <v-col class="pl-1">
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

                <v-text-field
                  class="mt-3"
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
            <!--  -->

            <!-- กรอบข้อมูลช่อง 2 -->
            <v-row class="d-flex flex-row mt-3">
              <v-col class="text-center">
                <h3>รายละเอียดรถยนต์</h3>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 3 -->
            <v-row no-gutters class="mt-3">
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
              <v-col class="pl-1">
                <v-text-field
                  autocomplete="true"
                  label="หมายเลขเครื่องยนต์"
                  v-model="formData.car_no_engine"
                  id="formData.car_no_engine"
                  name="formData.car_no_engine"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 4 -->
            <v-row no-gutters class="mt-3">
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
              <v-col class="pl-1">
                <v-text-field
                  autocomplete="true"
                  label="รุ่น"
                  v-model="formData.car_series_name"
                  id="formData.car_series_name"
                  name="formData.car_series_name"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <v-row no-gutters class="mt-3">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="หมายเลขตัวถัง"
                  v-model="formData.car_no_body"
                  id="formData.car_no_body"
                  name="formData.car_no_body"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 5 -->
            <v-row no-gutters class="mt-3">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ปี"
                  v-model="formData.car_year"
                  id="formData.car_year"
                  name="formData.car_year"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col class="pl-1 pr-1">
                <v-text-field
                  autocomplete="true"
                  label="สีรถ"
                  v-model="formData.color_name"
                  id="formData.color_name"
                  name="formData.color_name"
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
                  label="ทะเบียน"
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
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 6 -->
            <v-row no-gutters class="mt-3">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="เลขไมค์"
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
              <v-col class="pl-1">
                <v-text-field
                  autocomplete="true"
                  label="ภาระผูกพัน(ถ้ามี)"
                  v-model="formData.obligation"
                  id="formData.obligation"
                  name="formData.obligation"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 7 -->
            <v-row no-gutters class="mt-3">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ชื่อผู้ถือกรรมสิทธิ์"
                  v-model="formData.owner"
                  id="formData.owner"
                  name="formData.owner"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 8 -->
            <v-row no-gutters class="mt-3">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ชื่อผู้ครอบครอง"
                  v-model="formData.occupy"
                  id="formData.occupy"
                  name="formData.occupy"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiFinancial from "@/Api/apiFinancial";
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiAmphures from "@/Api/apiAmphures";
import * as apiDistricts from "@/Api/apiDistricts";
import THBText from "thai-baht-text"; // for ES6

export default {
  props: ["dialogFinancial", "financial_id", "actionFinancial", "idWork", "payment_type", "car_no"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      menuDateCreated_at: false,
      // menuDatecon_reg: false,
      // menuDate_deliver: false,
      // menuDate_document: false,
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],

      dataProvinces: [],
      dataAmphures: [],
      dataSelectAmphures: [],
      dataDistricts: [],
      dataSelectDistricts: [],
      formDisabled: true,
      id_card: null,
      slip: null,
      ruleMustImage: [(value) => !!value, (value) => !value || value.size < 11000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
    };
  },
  async mounted() {
    await this.getProvinces();
    await this.getAmphures();
    await this.getDistricts();
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

    async cvToString(value) {
      if (value != null) {
        this.formData.bath_string = THBText(value);
      }
    },
    async print_a4() {
      let routeData = this.$router.resolve({
        name: "prints-print_financial",
        query: { idFinancial: this.formData.id },
      });
      window.open(routeData.href, "_blank");
    },
    async onAction() {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.formData.action == "add") {
          let formData = new FormData();
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("id_card", this.id_card);
          formData.append("slip", this.slip);
          const response = await apiFinancial.store(formData);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Financial");
          } else {
            this.$emit("error", "Financial");
          }
        } else if (this.formData.action == "edit") {
          let formData = new FormData();
          formData.append("_method", "PUT");
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("id_card", this.id_card);
          formData.append("slip", this.slip);
          const response = await apiFinancial.update(this.formData.id, formData);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Financial");
          } else {
            this.$emit("error", "Financial");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    async dialogFinancial() {
      this.dialogDeleteComponent = this.dialogFinancial;

      if (this.dialogFinancial) {
        this.formDataLoading = true;
        this.formDisabled = true;

        if (this.actionFinancial == "check") {
          const response = await apiFinancial.dataWork(this.idWork, this.payment_type);
          await this.$refs.form.reset();
          this.formData = await response.data;
          this.formData.owner = await response.data.customer_name;
          this.formData.occupy = await response.data.customer_name;
          // console.log(response.data);
          await this.selectSeeAmphure();
        } else if (this.actionFinancial == "add") {
          const response = await apiFinancial.addFinancial(this.idWork);
          await this.$refs.form.reset();
          this.formData = await response.data;
          this.formData.owner = await response.data.customer_name;
          this.formData.occupy = await response.data.customer_name;
          this.formData.payment_type = this.payment_type;
          this.formData.created_at = "";
          await this.selectSeeAmphure();
        } else if (this.actionFinancial == "edit") {
          const response = await apiFinancial.show(this.financial_id);
          await this.$refs.form.reset();
          this.formData = response.data;
          this.formData.owner = response.data.customer_name;
          this.formData.occupy = response.data.customer_name;
          await this.selectSeeAmphure();
        }

        this.formDataLoading = false;
        this.formDisabled = false;
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
