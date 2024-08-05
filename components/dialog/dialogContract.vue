<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      content-class="v-dialog--custom"
      width="500px"
      :fullscreen="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' ? true : false"
    >
      <v-card>
        <v-form ref="form" :disabled="formDisabled" autocomplete="true" @submit.prevent="onAction()">
          <v-toolbar color="primary" dark flat>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitleContract }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn type="submit" :loading="btnloading" dark text style="font-size: 18px"> บันทึก </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-container>
            <v-card-text>
              <v-row class="d-flex flex-row">
                <v-col> </v-col>
                <v-col align="end">
                  <h3>รหัสงาน: W{{ idWork }}</h3>
                  <h3>ลำดับรถ: {{ car_no }}</h3>
                </v-col>
              </v-row>

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
                    v-model="formData.contract_date"
                    label="วันที่ปล่อยรถ*"
                    v-bind="attrs"
                    v-on="on"
                    persistent-hint
                    readonly
                    prepend-icon=""
                    outlined
                    dense
                    hide-details
                    flat
                    clearable
                    :rules="rule"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.contract_date"
                  locale="th-TH"
                  picker-date
                  :rules="rule"
                  @input="menuDate = false"
                ></v-date-picker>
              </v-menu>

              <v-card outlined class="pa-2 mt-3" style="border: 2px solid #1876d1">
                <v-text-field
                  class="mt-2"
                  label="จำนวนเงินทั้งหมดที่ได้รับ*"
                  type="number"
                  min="0"
                  v-model="formData.total_receive"
                  outlined
                  dense
                  hide-details
                  :rules="ruleNumber"
                >
                </v-text-field>

                <v-divider class="my-3" style="border: 1px solid #1876d1"></v-divider>
                <p class="text-center">กรุณาแยกรายการเงินทั้งหมดที่ได้รับลงในแต่ละประเภทด้านล่าง</p>
                <v-text-field
                  class="mt-3"
                  label="เงินดาวน์หรือเงินซื้อสด"
                  type="number"
                  min="0"
                  v-model="formData.contract_bath"
                  @input="cvToStringContract_bath"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                  :rules="ruleNumber"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="ค่างวดล่วงหน้า"
                  type="number"
                  min="0"
                  v-model="formData.advance_payment"
                  outlined
                  dense
                  hide-details
                  :rules="ruleNumber"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="ค่าสมาร์ทชัว"
                  type="number"
                  min="0"
                  v-model="formData.insurance"
                  outlined
                  dense
                  hide-details
                  :rules="ruleNumber"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="ค่าซื้อประกันอื่นๆ"
                  type="number"
                  min="0"
                  v-model="formData.insurance_other"
                  outlined
                  dense
                  hide-details
                  :rules="ruleNumber"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="เงินอื่นๆ"
                  type="number"
                  min="0"
                  v-model="formData.other_receive"
                  outlined
                  dense
                  hide-details
                  :rules="ruleNumber"
                >
                </v-text-field>
              </v-card>

              <v-text-field
                class="mt-3"
                label="ค้างดาวน์*"
                v-model="formData.contract_bath_hold"
                outlined
                type="number"
                min="0"
                dense
                hide-details
                :rules="ruleNumber"
              >
              </v-text-field>

              <v-menu
                ref="menuDateDateRefun"
                v-model="menuDateDateRefun"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="mt-3"
                    v-model="formData.date_bath_Refund"
                    label="ชำระเงินที่ค้างภายใน"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    persistent-hint
                    prepend-icon=""
                    outlined
                    dense
                    hide-details
                    clearable
                    flat
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.date_bath_Refund"
                  locale="th-TH"
                  picker-date
                  @input="menuDateDateRefun = false"
                ></v-date-picker>
              </v-menu>

              <div class="d-flex flex-column pt-3">
                <!-- <v-file-input
                  accept="image/jpeg,image/png,image/jpg"
                  show-size
                  outlined
                  dense
                  prepend-icon=""
                  append-icon="mdi-image"
                  :rules="rule2"
                  label="รูปภาพปล่อยรถ"
                ></v-file-input> -->
                <!-- <img v-if="currentFile != null || imagePreviewURL != null" :src="imagePreviewURL" /> -->

                <v-file-input
                  class="mt-3"
                  label="รูปบัตรประจำตัวประชาชนลูกค้า*"
                  v-model="id_card"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleMustImage"
                ></v-file-input>

                <v-file-input
                  class="mt-3"
                  v-model="sale_sheet"
                  label="เอกสารสรุปงานขาย*"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleMustImage"
                ></v-file-input>

                <v-file-input
                  class="mt-3"
                  v-model="Image"
                  label="รูปปล่อยรถ*"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleMustImage"
                ></v-file-input>

                <v-file-input
                  class="mt-3"
                  v-model="ImageCar"
                  label="รูปรถก่อนปล่อย*"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleMustImage"
                ></v-file-input>

                <v-file-input
                  class="mt-3"
                  label="ใบประกัน-ด้านหน้า*"
                  v-model="insurance_font_sheet"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleMustImage"
                ></v-file-input>

                <v-file-input
                  class="mt-3"
                  label="ใบประกัน-ด้านหลัง*"
                  v-model="insurance_back_sheet"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleMustImage"
                ></v-file-input>

                <v-file-input
                  class="mt-3"
                  v-model="receipt"
                  label="ใบเสร็จรับเงิน"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleImage"
                ></v-file-input>

                <v-file-input
                  class="mt-3"
                  v-model="slip"
                  label="สลิปการโอนเงิน"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleImage"
                ></v-file-input>

                <v-file-input
                  class="mt-3"
                  v-model="social"
                  label="Facebook/Tiktok"
                  prepend-icon=""
                  append-icon="mdi-image"
                  accept="image/*"
                  show-size
                  outlined
                  dense
                  hide-details="auto"
                  :rules="ruleImage"
                ></v-file-input>
              </div>
            </v-card-text>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiContract from "@/Api/apiContract";
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiAmphures from "@/Api/apiAmphures";
import * as apiDistricts from "@/Api/apiDistricts";
import * as customAlart from "@/customJS/customAlart";
import THBText from "thai-baht-text"; // for ES6

export default {
  props: ["dialogContract", "actionContract", "idWork", "idCustomer", "idCar", "car_no", "formTitleContract"],
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/contracts/",

      btnloading: true,
      formDataLoading: false,
      formData: {},
      menuDate: false,
      menuDateDateRefun: false,
      menuDateCustomer_bath_date_transfer: false,
      menuDateCustomer_bath_date_signed: false,
      menuDateCustomer_car_date_release: false,
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      ruleNumber: [(value) => value >= 0],
      rule2: [],
      // dataProvinces: [],
      // dataAmphures: [],
      // dataSelectAmphures: [],
      // dataDistricts: [],
      // dataSelectDistricts: [],
      currentFile: null,
      imagePreviewURL: null,
      formDisabled: true,
      nameCompany: "บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด",
      strZero: "ศูนย์บาทถ้วน",

      id_card: null,
      sale_sheet: null,
      Image: null,
      ImageCar: null,
      insurance_font_sheet: null,
      insurance_back_sheet: null,
      receipt: null,
      slip: null,
      social: null,
      ruleMustImage: [(value) => !!value, (value) => !value || value.size < 10000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
      ruleImage: [(value) => !value || value.size < 10000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
    };
  },
  async mounted() {
    // this.getProvinces();
    // this.getAmphures();
    // this.getDistricts();
  },
  methods: {
    async print_a4() {
      let routeData = this.$router.resolve({
        name: "prints-print_contract",
        query: { idContract: this.formData.id },
      });
      window.open(routeData.href, "_blank");
    },

    // async getProvinces() {
    //   const response = await apiProvinces.select();
    //   this.dataProvinces = response.data;
    // },
    // async getAmphures() {
    //   const response = await apiAmphures.select();
    //   this.dataAmphures = response.data;
    //   this.dataSelectAmphures = response.data;
    // },
    // async getDistricts() {
    //   const response = await apiDistricts.select();
    //   this.dataDistricts = response.data;
    // },
    // async selectSeeProvince() {
    //   this.dataSelectAmphures = [];
    //   for (let index = 0; index < this.dataAmphures.length; index++) {
    //     if (this.dataAmphures[index].province_id == this.formData.province_id) {
    //       this.dataSelectAmphures.push(this.dataAmphures[index]);
    //     }
    //   }
    // },

    // async selectSeeAmphure() {
    //   this.dataSelectDistricts = [];
    //   for (let index = 0; index < this.dataDistricts.length; index++) {
    //     if (this.dataDistricts[index].amphure_id == this.formData.amphure_id) {
    //       this.dataSelectDistricts.push(this.dataDistricts[index]);
    //     }
    //   }

    //   for (let index = 0; index < this.dataAmphures.length; index++) {
    //     if (this.dataAmphures[index].id == this.formData.amphure_id) {
    //       this.formData.province_id = this.dataAmphures[index].province_id;
    //     }
    //   }
    // },

    // async selectSeeDistrict() {
    //   this.formData.zip_code = "";
    //   for (let index = 0; index < this.dataDistricts.length; index++) {
    //     if (this.dataDistricts[index].id == this.formData.district_id) {
    //       this.formData.zip_code = this.dataDistricts[index].zip_code;
    //     }
    //   }
    // },

    async cvToStringContract_bath(value) {
      if (value != null && value.length > 0) {
        this.formData.contract_bath_string = THBText(value);
      } else {
        this.formData.contract_bath_string = "";
      }
    },

    async cvToStringContract_bath_deposit(value) {
      if (value != null && value.length > 0) {
        this.formData.contract_bath_deposit_string = THBText(value);
      } else {
        this.formData.contract_bath_deposit_string = "";
      }
    },

    async cvToStringContract_bath_hold(value) {
      if (value != null && value.length > 0) {
        this.formData.contract_bath_hold_string = THBText(value);
      } else {
        this.formData.contract_bath_hold_string = "";
      }
    },

    async onAction() {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        const data = new FormData();
        this.formData.car_id = this.idCar;
        data.append("formData", JSON.stringify(this.formData));
        data.append("id_card", this.id_card);
        data.append("sale_sheet", this.sale_sheet);
        data.append("insurance_font_sheet", this.insurance_font_sheet);
        data.append("insurance_back_sheet", this.insurance_back_sheet);
        data.append("receipt", this.receipt);
        data.append("slip", this.slip);
        data.append("social", this.social);
        data.append("Image", this.Image);
        data.append("ImageCar", this.ImageCar);

        if (this.formData.action == "add") {
          const response = await apiContract.store(data);
          console.log(response.data);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Contract");
          } else {
            this.$emit("error", "Contract");
          }
        } else if (this.formData.action == "edit") {
          data.append("_method", "PATCH");
          const response = await apiContract.update(this.formData.id, data);
          console.log(response.data);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Contract");
          } else {
            this.$emit("error", "Contract");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
      // }
    },
  },
  watch: {
    async dialogContract() {
      this.dialogDeleteComponent = this.dialogContract;
      if (this.dialogContract) {
        this.formDataLoading = true;
        this.formDisabled = true;

        this.imagePreviewURL = null;

        if (this.actionContract == "check") {
          const response = await apiContract.checkContract(this.idWork, this.idCar, this.idCustomer);
          await this.$refs.form.reset();
          this.formData = await response.data;
          // console.log(response.data);
          if (response.data.contract_image != "" && response.data.contract_image != null) {
            this.rule2 = [];
            this.imagePreviewURL = this.serverUrl + response.data.id + "/" + response.data.contract_image;
          } else {
            this.rule2 = [(value) => !!value || "กรุณาใส่ข้อมูล"];
          }
          this.nameCompany = "บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด";
          if (!this.formData.contract_at) {
            this.formData.contract_at = "บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด";
          }
          // await this.selectSeeAmphure();
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
