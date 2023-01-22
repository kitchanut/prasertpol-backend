<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      content-class="v-dialog--custom"
      fullscreen
    >
      <v-card>
        <v-form
          autocomplete="true"
          ref="form"
          :disabled="formDisabled"
          @submit.prevent="onAction(formData.id)"
        >
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-btn
              text
              @click="$emit('cancleItem')"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitleReceivingMoney }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                v-if="this.formData.action == 'edit'"
                @click="print_a4()"
                dark
                text
                :loading="btnloading"
                style="font-size: 18px"
              >
                ปริ้น
              </v-btn>

              <v-btn
                type="submit"
                :loading="btnloading"
                dark
                text
                style="font-size: 18px"
              >
                {{ this.formData.action == "add" ? "บันทึก" : "แก้ไข" }}
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
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="เล่มที่"
                    append-icon=""
                    v-model="formData.book_no"
                    id="formData.book_no"
                    name="formData.book_no"
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
                    label="เลขที่"
                    append-icon=""
                    v-model="formData.number_no"
                    id="formData.number_no"
                    name="formData.number_no"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อบริษัท"
                    append-icon=""
                    v-model="formData.company_name"
                    id="formData.company_name"
                    name="formData.company_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="8">
                  <v-text-field
                    autocomplete="true"
                    label="ที่อยู่"
                    append-icon=""
                    v-model="formData.company_address"
                    id="formData.company_address"
                    name="formData.company_address"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์ติดต่อ"
                    append-icon=""
                    v-model="formData.company_tel"
                    id="formData.company_tel"
                    name="formData.company_tel"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="แฟกซ์"
                    append-icon=""
                    v-model="formData.company_fax"
                    id="formData.company_fax"
                    name="formData.company_fax"
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
                    label="เลขประจำตัวผู้เสียภาษีอาการ"
                    append-icon=""
                    v-model="formData.company_idvat"
                    id="formData.company_idvat"
                    name="formData.company_idvat"
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
                    label="ภาษีมูลค่าเพิ่ม (%)"
                    append-icon=""
                    @input="vatCal(formData.receiving_money_vat)"
                    v-model="formData.receiving_money_vat"
                    id="formData.receiving_money_vat"
                    name="formData.receiving_money_vat"
                    type="number"
                    min="0"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row class="d-flex flex-row">
                <v-col class="text-center m-2">
                  <h2>ใบกำกับภาษี / ใบเสร็จรับเงิน</h2>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="9">
                  <v-text-field
                    autocomplete="true"
                    label="นามผู้ซื้อ"
                    append-icon=""
                    v-model="formData.bank_name"
                    id="formData.bank_name"
                    name="formData.bank_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-menu
                    ref="menuReceiving_money"
                    v-model="menuReceiving_money"
                    id="menuReceiving_money"
                    name="menuReceiving_money"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.receiving_money_date"
                        id="formData.receiving_money_date"
                        name="formData.receiving_money_date"
                        label="วันที่บันทึก"
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        :rules="rule"
                        hide-details
                        flat
                        clearable
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.receiving_money_date"
                      id="formData.receiving_money_date"
                      name="formData.receiving_money_date"
                      locale="th-TH"
                      picker-date
                      @input="menuReceiving_money = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ที่อยู่"
                    append-icon=""
                    v-model="formData.bank_address"
                    id="formData.bank_address"
                    name="formData.bank_address"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="เลขประจำตัวผู้เสียภาษีอาการ"
                    append-icon=""
                    v-model="formData.bank_idvat"
                    id="formData.bank_idvat"
                    name="formData.bank_idvat"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="ยี่ห้อ"
                    append-icon=""
                    v-model="formData.car_model_name"
                    id="formData.car_model_name"
                    name="formData.car_model_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="เลขทะเบียน"
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

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="ทะเบียนจังหวัด"
                    append-icon=""
                    v-model="formData.name_th"
                    id="formData.name_th"
                    name="formData.name_th"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="หมายเลขเครื่อง"
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
                  <v-text-field
                    :disabled="formData.receivingMoney_type == 3? false:true"
                    class="mt-1"
                    autocomplete="true"
                    label="ประเภท"
                    v-model="formData.receivingMoney_type_str"
                    append-icon=""
                    id="formData.receivingMoney_type_str"
                    name="formData.receivingMoney_type_str"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="หมายเลขตัวถัง"
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
                  <!-- <p class="text-center">ซื้อผู้ซื้อ</p> -->

                  <v-text-field
                    class="mt-1"
                    autocomplete="true"
                    label="ชื่อผู้ซื้อ"
                    v-model="formData.customer_name"
                    append-icon=""
                    id="formData.customer_name"
                    name="formData.customer_name"
                    outlined
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="จำนวนเงิน"
                    append-icon=""
                    @input="calMoney(formData.car_price)"
                    v-model="formData.car_price"
                    id="formData.car_price"
                    name="formData.car_price"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="10">
                  <v-text-field
                    autocomplete="true"
                    label=""
                    append-icon=""
                    v-model="formData.receiving_money_sum_str"
                    id="formData.receiving_money_sum_str"
                    name="formData.receiving_money_sum_str"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="รวมราคาทั้งสิ้น"
                    append-icon=""
                    @input="calMoney(formData.receiving_money_sum)"
                    v-model="formData.receiving_money_sum"
                    id="formData.receiving_money_sum"
                    name="formData.receiving_money_sum"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="10">
                  <v-text-field
                    autocomplete="true"
                    label=""
                    append-icon=""
                    v-model="formData.receiving_money_sum_vat_str"
                    id="formData.receiving_money_sum_vat_str"
                    name="formData.receiving_money_sum_vat_str"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="จำนวนภาษีมูลค่าเพิ่ม"
                    append-icon=""
                    v-model="formData.receiving_money_sum_vat"
                    id="formData.receiving_money_sum_vat"
                    name="formData.receiving_money_sum_vat"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="10">
                  <v-text-field
                    autocomplete="true"
                    label=""
                    append-icon=""
                    v-model="formData.receiving_money_all_str"
                    id="formData.receiving_money_all_str"
                    name="formData.receiving_money_all_str"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="จำนวนเงินรวมเงินทั้งสิ้น"
                    append-icon=""
                    v-model="formData.receiving_money_all"
                    id="formData.receiving_money_all"
                    name="formData.receiving_money_all"
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
                    label="ผู้รับเงิน"
                    append-icon=""
                    v-model="formData.name_user"
                    id="formData.name_user"
                    name="formData.name_user"
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
                    label="เจ้าหน้าที่ผู้รับมอบอำนาจ"
                    append-icon=""
                    v-model="formData.name_authority"
                    id="formData.name_authority"
                    name="formData.name_authority"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <div class="mt-2">
                <div
                  v-if="addFile == true"
                  class="d-flex flex-column justify-center"
                >
                  <v-file-input
                    accept=".pdf"
                    show-size
                    :label="currentFile == null ? 'เลือกไฟล์' : 'เลือกไฟล์ใหม่'"
                    @change="selectFile"
                  ></v-file-input>
                </div>
                <div
                  v-if="formData.receiving_money_file != null"
                  class="d-flex flex-column justify-center"
                >
                  <a
                    v-if="
                      formData.receiving_money_file != null && addFile == false
                    "
                    target="_blank"
                    :href="
                      serverUrl +
                      formData.id +
                      '/' +
                      formData.receiving_money_file
                    "
                  >
                    <h2 class="blue--text">คลิกเพื่อดูไฟล์</h2>
                  </a>
                </div>
                <v-btn
                  class="mt-3"
                  color="primary"
                  v-if="formData.receiving_money_file != null"
                  dark
                  @click="addFile = !addFile"
                >
                  {{ addFile == true ? "ดูไฟล์" : "เลือกไฟล์ใหม่" }}
                </v-btn>
              </div>
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiReceiving_money from "@/Api/apiReceiving_money";
import THBText from "thai-baht-text"; // for ES6

export default {
  props: [
    "dialogReceivingMoney",
    "actionReceivingMoney",
    "idWork",
    "formTitleReceivingMoney",
    "idCustomer",
    "idCar",
    "receivingMoney_type",
  ],
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/end_works/",
      btnloading: true,
      formDataLoading: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      menuReceiving_money: false,
      dialogDeleteComponent: false,
      currentFile: null,
      formDisabled: false,
      addFile: true,
    };
  },
  mounted() {},
  methods: {
    selectFile(payload) {
      // console.log(payload);
      this.currentFile = payload;
    },
    async calMoney(value) {
      if (value != null) {
        this.formData.receiving_money_sum = Number(value);

        this.formData.receiving_money_sum_vat =
          Number(value) * (Number(this.formData.receiving_money_vat) / 100);

        this.formData.receiving_money_all =
          Number(this.formData.receiving_money_sum) +
          Number(this.formData.receiving_money_sum_vat);
      }
    },
    async vatCal(value) {
      if (value != null) {
        this.formData.receiving_money_sum_vat =
          Number(this.formData.car_price) * (Number(value) / 100);

        this.formData.receiving_money_all =
          Number(this.formData.car_price) +
          Number(this.formData.receiving_money_sum_vat);
      }
    },

    async cvToString(value, type) {
      if (value != null) {
        if (type == "receiving_money_sum_str") {
          this.formData.receiving_money_sum_str = THBText(value);
        } else if (type == "receiving_money_sum_vat_str") {
          this.formData.receiving_money_sum_vat_str = THBText(value);
        } else if (type == "receiving_money_all_str") {
          this.formData.receiving_money_all_str = THBText(value);
        }
      }
    },

    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        const data = new FormData();
        data.append("formData", JSON.stringify(this.formData));
        data.append("Image", this.currentFile);

        if (this.formData.action == "add") {
          const response = await apiReceiving_money.store(data);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Receiving_money");
          } else {
            this.$emit("error", "Receiving_money");
          }
        } else if (this.formData.action == "edit") {
          data.append("_method", "PATCH");
          const response = await apiReceiving_money.update(
            this.formData.id,
            data
          );
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Receiving_money");
          } else {
            this.$emit("error", "Receiving_money");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
    async print_a4() {
      let routeData = this.$router.resolve({
        name: "prints-print_vax",
        query: { id: this.formData.id },
      });
      window.open(routeData.href, "_blank");

      // const response = await apiBookings.update(
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
  },
  watch: {
    async dialogReceivingMoney() {
      this.dialogDeleteComponent = this.dialogReceivingMoney;
      if (this.dialogDeleteComponent) {
        this.btnloading = true;
        this.formDataLoading = true;
        this.formDisabled = true;
        this.currentFile = null;
        if (this.actionReceivingMoney == "check") {
          const response = await apiReceiving_money.checkReceivingMoney(
            this.idWork,
            this.receivingMoney_type
          );
          await this.$refs.form.reset();
          // console.log("checkReceivingMoney", response.data);
          // console.log(this.receivingMoney_type)
          this.$nextTick(() => {
            const self = this;
            this.formData = response.data;

            if (this.formData.action == "add") {
              this.formData.company_name =
                "ประเสริฐผลรุ่งเรืองนครพนม จำกัด (สำนักงานใหญ่)";
              this.formData.company_address =
                "216/111 ถนน.นิตโย ตำบล.ในเมือง อำเภอ.เมืองนครพนม จ.นครพนม 48000";
              this.formData.company_tel = "042-513332";
              this.formData.company_fax = "042-513588";
              this.formData.company_idvat = "0485548000108";
              this.formData.receiving_money_status = 1;
              this.formData.branch_id =
                this.$auth.$storage.getLocalStorage("userData-branch_id");
              this.formData.user_id =
                this.$auth.$storage.getLocalStorage("userData-id");
              this.formData.receivingMoney_type = this.receivingMoney_type;
              this.formData.bank_name = response.data.bank_name;

              this.formData.receiving_money_sum = response.data.car_price;
              this.cvToString(
                Number(this.formData.receiving_money_sum),
                "receiving_money_sum_str"
              );
              this.formData.receiving_money_vat = 7;
              this.formData.receiving_money_sum_vat =
                Number(this.formData.car_price) * (Number(7) / 100);

              this.cvToString(
                Number(this.formData.receiving_money_sum_vat),
                "receiving_money_sum_vat_str"
              );

              this.formData.receiving_money_all =
                Number(this.formData.car_price) +
                Number(this.formData.receiving_money_sum_vat);

              this.cvToString(
                Number(this.formData.receiving_money_all),
                "receiving_money_all_str"
              );
            }
          });
        }

        this.btnloading = false;
        this.formDataLoading = false;
        this.formDisabled = false;
      }
    },
    dialogDeleteComponent() {
      if (!this.dialogDeleteComponent) {
        this.$emit("cancleItem");
      }
    },
    formData: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler() {
        // console.log(this.formData.receiving_money_sum_vat);

        this.cvToString(
          Number(this.formData.receiving_money_sum),
          "receiving_money_sum_str"
        );

        this.cvToString(
          Number(this.formData.receiving_money_sum_vat),
          "receiving_money_sum_vat_str"
        );

        this.cvToString(
          Number(this.formData.receiving_money_all),
          "receiving_money_all_str"
        );
      },
    },
  },
};
</script>

<style></style>
