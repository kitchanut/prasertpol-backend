<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      width="550px"
      :fullscreen="
        $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'
          ? true
          : false
      "
    >
      <v-card>
        <v-form ref="form" @submit.prevent="onAction()" autocomplete="true">
          <v-toolbar color="primary" dark flat>
            {{ formTitleAppointmentBank }}
          </v-toolbar>

          <v-progress-linear
            v-if="formDataLoading"
            indeterminate
            color="yellow darken-2"
          >
          </v-progress-linear>

          <v-card-text>
            <v-container>
              <!-- {{ formData }} -->

              <div v-if="status_bank == 5">
                <v-row>
                  <v-col cols="12">
                    <v-menu
                      ref="menuDateAppointment_bank_date"
                      v-model="menuDateAppointment_bank_date"
                      id="menuDateAppointment_bank_date"
                      name="menuDateAppointment_bank_date"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.appointment_bank_date"
                          id="formData.appointment_bank_date"
                          name="formData.appointment_bank_date"
                          label="ทำสัญญาวันที่"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          outlined
                          dense
                          hide-details
                          flathide-details
                          :rules="rule"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.appointment_bank_date"
                        id="formData.appointment_bank_date"
                        name="formData.appointment_bank_date"
                        locale="th-TH"
                        picker-date
                        @input="menuDateAppointment_bank_date = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col cols="12" class="pt-0">
                    <v-autocomplete
                      v-model="formData.bank_id"
                      id="formData.bank_id"
                      name="formData.bank_id"
                      @change="change_branch(formData.bank_id)"
                      :items="dataBank"
                      item-text="bank_name"
                      no-data-text="ไม่มีข้อมูล"
                      item-value="id"
                      label="แบงค์ที่ทำสัญญา"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    ></v-autocomplete>
                  </v-col>

                  <v-col cols="12" class="pt-0">
                    <v-autocomplete
                      v-model="formData.bank_branch_id"
                      id="formData.bank_branch_id"
                      name="formData.bank_branch_id"
                      :items="dataBank_branch"
                      item-text="bank_branch_name"
                      no-data-text="ไม่มีข้อมูล"
                      item-value="id"
                      label="สาขาแบงค์"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    ></v-autocomplete>
                  </v-col>

                  <v-col cols="12" class="pt-0">
                    <v-text-field
                      autocomplete="true"
                      label="ชื่อ MKT"
                      append-icon=""
                      v-model="formData.mtk_name"
                      id="formData.mtk_name"
                      name="formData.mtk_name"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" class="pt-0">
                    <v-text-field
                      autocomplete="true"
                      label="เบอร์ติดต่อ"
                      append-icon=""
                      v-model="formData.mtk_tel"
                      id="formData.mtk_tel"
                      name="formData.mtk_tel"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" class="pt-0">
                    <v-text-field
                      autocomplete="true"
                      label="ผลเครดิต"
                      append-icon=""
                      v-model="formData.credit"
                      id="formData.credit"
                      name="formData.credit"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" class="pt-0">
                    <v-radio-group
                      v-model="formData.appointment_bank_type"
                      id="formData.appointment_bank_type"
                      name="formData.appointment_bank_type"
                      :rules="rule"
                      hide-details
                      row
                    >
                      <template>
                        <div class="mr-1">เอกสาร:</div>
                      </template>

                      <v-radio label="ครบ" value="1"></v-radio>
                      <v-radio label="ไม่ครบ" color="red" value="2"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>

                <v-row v-if="formData.appointment_bank_type == 2">
                  <v-col>
                    <v-textarea
                      rows="2"
                      label="เอกสารที่ไม่ครบ"
                      append-icon=""
                      v-model="formData.appointment_bank_list"
                      id="formData.appointment_bank_list"
                      name="formData.appointment_bank_list"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-textarea>
                  </v-col>
                </v-row>
              </div>

              <div v-if="status_bank == 7">
                <v-row v-if="user_group_permission != 11">
                  <v-col cols="12">
                    <v-menu
                      ref="menuDateAppointments_date"
                      v-model="menuDateAppointments_date"
                      id="menuDateAppointments_date"
                      name="menuDateAppointments_date"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.appointment_date"
                          id="formData.appointment_date"
                          name="formData.appointment_date"
                          label="วันที่อนุมัติ"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          outlined
                          dense
                          hide-details
                          flathide-details
                          :rules="rule"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.appointment_date"
                        id="formData.appointment_date"
                        name="formData.appointment_date"
                        locale="th-TH"
                        picker-date
                        @input="menuDateAppointments_date = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col cols="12 pt-0">
                    <v-text-field
                      label="ราคากลาง"
                      type="number"
                      v-model="formData.middle_price"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12 pt-0">
                    <v-text-field
                      autocomplete="true"
                      label="%"
                      append-icon=""
                      type="number"
                      min="0"
                      v-model="formData.car_price_persen"
                      id="formData.car_price_persen"
                      name="formData.car_price_persen"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12 pt-0">
                    <v-text-field
                      autocomplete="true"
                      label="ยอดจัด"
                      append-icon=""
                      type="number"
                      min="0"
                      v-model="formData.finance_price"
                      id="formData.finance_price"
                      name="formData.finance_price"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12 pt-0">
                    <v-text-field
                      label="เงินดาวน์"
                      type="number"
                      v-model="formData.down"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col cols="12 pt-0">
                    <v-text-field
                      label="ราคาขายรถ"
                      type="number"
                      v-model="formData.car_price"
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </div>

              <div v-if="status_bank == 9">
                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div>วันที่ได้รับชุดโอน:</div>
                  </v-col>
                  <v-col cols="8">
                    <v-dialog
                      ref="menuDateAppointment_book_date"
                      v-model="menuDateAppointment_book_date"
                      id="menuDateAppointment_book_date"
                      name="menuDateAppointment_book_date"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.appointment_book_date"
                          id="formData.appointment_book_date"
                          name="formData.appointment_book_date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          dense
                          hide-details
                          flathide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.appointment_book_date"
                        id="formData.appointment_book_date"
                        name="formData.appointment_book_date"
                        locale="th-TH"
                        picker-date
                        @input="menuDateAppointment_book_date = false"
                      ></v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div>วันโอนรถ:</div>
                  </v-col>
                  <v-col cols="8">
                    <v-dialog
                      ref="menuDateAppointment_transfer_date"
                      v-model="menuDateAppointment_transfer_date"
                      id="menuDateAppointment_transfer_date"
                      name="menuDateAppointment_transfer_date"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.appointment_transfer_date"
                          id="formData.appointment_transfer_date"
                          name="formData.appointment_transfer_date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          dense
                          hide-details
                          flathide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.appointment_transfer_date"
                        id="formData.appointment_transfer_date"
                        name="formData.appointment_transfer_date"
                        locale="th-TH"
                        picker-date
                        @input="menuDateAppointment_transfer_date = false"
                      ></v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div class="mr-1">วันส่งเล่มทำเงิน:</div>
                  </v-col>
                  <v-col cols="8">
                    <v-dialog
                      ref="menuDateAppointment_sentbook_date"
                      v-model="menuDateAppointment_sentbook_date"
                      id="menuDateAppointment_sentbook_date"
                      name="menuDateAppointment_sentbook_date"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.appointment_sentbook_date"
                          id="formData.appointment_sentbook_date"
                          name="formData.appointment_sentbook_date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          dense
                          hide-details
                          flathide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.appointment_sentbook_date"
                        id="formData.appointment_sentbook_date"
                        name="formData.appointment_sentbook_date"
                        locale="th-TH"
                        picker-date
                        @input="menuDateAppointment_sentbook_date = false"
                      ></v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>

                <v-divider class="mt-3"></v-divider>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div>วันที่รับเงิน:</div>
                  </v-col>

                  <v-col cols="8">
                    <v-dialog
                      ref="menuDateAppointment_money_date"
                      v-model="menuDateAppointment_money_date"
                      id="menuDateAppointment_money_date"
                      name="menuDateAppointment_money_date"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.appointment_money_date"
                          id="formData.appointment_money_date"
                          name="formData.appointment_money_date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          dense
                          hide-details
                          flathide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.appointment_money_date"
                        id="formData.appointment_money_date"
                        name="formData.appointment_money_date"
                        locale="th-TH"
                        picker-date
                        @input="menuDateAppointment_money_date = false"
                      ></v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div>ค่าตัวรถ:</div>
                  </v-col>

                  <v-col cols="8">
                    <v-text-field
                      autocomplete="true"
                      type="number"
                      min="0"
                      v-model="formData.appointment_money_price"
                      id="formData.appointment_money_price"
                      name="formData.appointment_money_price"
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div>ค่าคอม:</div>
                  </v-col>

                  <v-col cols="8">
                    <v-text-field
                      autocomplete="true"
                      type="number"
                      min="0"
                      v-model="formData.appointment_commission_bank"
                      id="formData.appointment_commission_bank"
                      name="formData.appointment_commission_bank"
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-divider class="mt-3"></v-divider>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div class="mr-1">จ่าย MKT วันที่:</div>
                  </v-col>
                  <v-col cols="8">
                    <v-dialog
                      ref="menuDateAppointment_mkt_date"
                      v-model="menuDateAppointment_mkt_date"
                      id="menuDateAppointment_mkt_date"
                      name="menuDateAppointment_mkt_date"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.appointment_mkt_date"
                          id="formData.appointment_mkt_date"
                          name="formData.appointment_mkt_date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          dense
                          hide-details
                          flathide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.appointment_mkt_date"
                        id="formData.appointment_mkt_date"
                        name="formData.appointment_mkt_date"
                        locale="th-TH"
                        picker-date
                        @input="menuDateAppointment_mkt_date = false"
                      ></v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div class="mr-1">ยอดจ่าย MKT:</div>
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      autocomplete="true"
                      type="number"
                      min="0"
                      v-model="formData.appointment_mkt_price"
                      id="formData.appointment_mkt_price"
                      name="formData.appointment_mkt_price"
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-divider class="mt-3"></v-divider>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4">
                    <div class="mr-1">ค่างวดเดือนแรก:</div>
                  </v-col>
                  <v-col cols="8">
                    <v-dialog
                      ref="menuDateCustomerPaymentDue"
                      v-model="menuDateCustomerPaymentDue"
                      id="menuDateCustomerPaymentDue"
                      name="menuDateCustomerPaymentDue"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.customer_payment_due"
                          id="formData.customer_payment_due"
                          name="formData.customer_payment_due"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          dense
                          hide-details
                          flathide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.customer_payment_due"
                        id="formData.customer_payment_due"
                        name="formData.customer_payment_due"
                        locale="th-TH"
                        picker-date
                        @input="menuDateCustomerPaymentDue = false"
                      ></v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4"> ค่างวด : </v-col>
                  <v-col cols="8">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.customer_payment"
                      id="formData.customer_payment"
                      name="formData.customer_payment"
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4"> เกรดลูกค้า : </v-col>
                  <v-col cols="8">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.customer_grade"
                      id="formData.customer_grade"
                      name="formData.customer_grade"
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4"> หน้าสมุด : </v-col>
                  <v-col cols="8">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.note_page"
                      id="formData.note_page"
                      name="formData.note_page"
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row no-gutters class="d-flex align-end">
                  <v-col cols="4"> เดือนที่ตัดคอมมิชชั่น : </v-col>
                  <v-col cols="8">
                    <v-dialog
                      ref="menuCommission_mount"
                      v-model="menuCommission_mount"
                      id="menuCommission_mount"
                      name="menuCommission_mount"
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          autocomplete="true"
                          v-model="formData.commission_mount"
                          id="formData.commission_mount"
                          name="formData.commission_mount"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          clearable
                          prepend-icon=""
                          dense
                          hide-details
                          flathide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.commission_mount"
                        id="formData.commission_mount"
                        name="formData.commission_mount"
                        locale="th-TH"
                        type="month"
                        @input="menuCommission_mount = false"
                      ></v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
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
import * as apiAppointmentBank from "@/Api/apiAppointmentBank";
import * as apiBank from "@/Api/apiBank";
import * as apiBank_branch from "@/Api/apiBank_branch";

export default {
  props: [
    "dialogAppointmentBank",
    "actionAppointmentBank",
    "idWork",
    "formTitleAppointmentBank",
    "status_bank",
  ],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      menuDateAppointments_date: false,
      menuDateAppointment_bank_date: false,
      menuDateAppointment_money_date: false,
      menuDateAppointment_transfer_date: false,
      menuDateAppointment_book_date: false,
      menuDateAppointment_mkt_date: false,
      menuDateAppointment_sentbook_date: false,
      menuCommission_mount: false,
      menuDateCustomerPaymentDue: false,

      dataBank: [],
      dataBank_branch_all: [],
      dataBank_branch: [],

      formData: {},
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dataBank: [],
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
    };
  },
  mounted() {},
  methods: {
    async change_branch(bank_id) {
      let newArray = [];
      for (let index = 0; index < this.dataBank_branch_all.length; index++) {
        if (this.dataBank_branch_all[index].bank_id == bank_id) {
          newArray.push(this.dataBank_branch_all[index]);
        }
      }
      this.dataBank_branch = newArray;
    },
    async getBank() {
      const response = await apiBank.select();
      this.dataBank = response.data;
    },
    async getBank_branch() {
      const response = await apiBank_branch.select();
      this.dataBank_branch_all = response.data;
    },
    async onAction() {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        if (this.formData.action == "add") {
          const response = await apiAppointmentBank.store(this.formData);
          // console.log(response);
          // this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "AppointmentBank");
          } else {
            this.$emit("error", "AppointmentBank");
          }
        } else if (this.formData.action == "edit") {
          const response = await apiAppointmentBank.update(
            this.formData.id,
            this.formData
          );
          // console.log(response);
          // this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "AppointmentBank");
          } else {
            this.$emit("error", "AppointmentBank");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
    // checkNull() {
    //   if (this.formData.appointment_book_date == null) {
    //     this.formData.appointment_book = "2";
    //   } else {
    //     this.formData.appointment_book = "1";
    //   }

    //   if (this.formData.appointment_transfer_date == null) {
    //     this.formData.appointment_transfer = "2";
    //   } else {
    //     this.formData.appointment_transfer = "1";
    //   }

    //   if (this.formData.appointment_money_date == null) {
    //     this.formData.appointment_money = "2";
    //   } else {
    //     this.formData.appointment_money = "1";
    //   }

    //   if (this.formData.appointment_mkt_date == null) {
    //     this.formData.appointment_mkt = "2";
    //   } else {
    //     this.formData.appointment_mkt = "1";
    //   }

    // },
  },
  watch: {
    async dialogAppointmentBank() {
      this.dialogDeleteComponent = this.dialogAppointmentBank;
      if (this.dialogAppointmentBank) {
        await this.getBank();
        await this.getBank_branch();
        if (this.actionAppointmentBank == "check") {
          this.formDataLoading = true;
          const response = await apiAppointmentBank.checkAppointmentBank(
            this.idWork
          );
          this.$nextTick(async () => {
            // await this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              self.formData.work_status = this.status_bank;
              self.change_branch(response.data.bank_id);
              // console.log(response.data.bank_id);
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

<style>
.v-input--selection-controls {
  margin-top: 0px !important;
  padding-top: 0px !important;
}
</style>
