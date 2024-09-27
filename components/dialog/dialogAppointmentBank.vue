<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      width="500px"
      :fullscreen="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' ? true : false"
    >
      <v-card>
        <v-form ref="form" @submit.prevent="onAction()" autocomplete="true">
          <v-toolbar color="primary" dark flat>
            {{ formTitleAppointmentBank }}
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <div v-if="status_bank == 5">
              <v-menu
                v-model="menuDateAppointment_bank_date"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.appointment_bank_date"
                    label="ทำสัญญาวันที่"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    clearable
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.appointment_bank_date"
                  locale="th-TH"
                  picker-date
                  @input="menuDateAppointment_bank_date = false"
                ></v-date-picker>
              </v-menu>

              <v-autocomplete
                class="mt-3"
                v-model="formData.bank_id"
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

              <v-autocomplete
                class="mt-3"
                v-model="formData.bank_branch_id"
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

              <v-text-field
                class="mt-3"
                autocomplete="true"
                label="ชื่อ MKT"
                append-icon=""
                v-model="formData.mtk_name"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-text-field
                class="mt-3"
                label="เบอร์ติดต่อ"
                v-model="formData.mtk_tel"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-text-field
                class="mt-3"
                autocomplete="true"
                label="ผลเครดิต"
                v-model="formData.credit"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-card outlined class="pa-3 mt-3" style="border: 1px solid #aaa">
                <v-radio-group v-model="formData.appointment_bank_type" :rules="rule" hide-details row>
                  <template>
                    <div class="mr-1">เอกสาร:</div>
                  </template>

                  <v-radio label="ครบ" value="1"></v-radio>
                  <v-radio label="ไม่ครบ" color="red" value="2"></v-radio>
                </v-radio-group>

                <v-menu
                  v-if="formData.appointment_bank_type == 1"
                  v-model="menuDateDocument_date"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="mt-3"
                      v-model="formData.appointment_bank_document_date"
                      label="วันที่เอกสารครบ"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      clearable
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.appointment_bank_document_date"
                    locale="th-TH"
                    picker-date
                    @input="menuDateDocument_date = false"
                  ></v-date-picker>
                </v-menu>

                <v-textarea
                  v-if="formData.appointment_bank_type == 2"
                  class="mt-3"
                  rows="2"
                  label="เอกสารที่ไม่ครบ"
                  append-icon=""
                  v-model="formData.appointment_bank_list"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-textarea>
              </v-card>

              <!-- <v-card class="mt-3" outlined style="border: 1px solid #aaa">
                <v-card-text>
                  <v-file-input
                    label="รูปบัตรประจำตัวประชาชนลูกค้า*"
                    v-model="id_card"
                    prepend-icon=""
                    append-icon="mdi-image"
                    show-size
                    outlined
                    dense
                    hide-details="auto"
                    :rules="ruleMustImage"
                  ></v-file-input>

                  <v-file-input
                    class="mt-3"
                    v-model="booking_sheet"
                    label="เอกสารสรุปงานขาย*"
                    prepend-icon=""
                    append-icon="mdi-image"
                    show-size
                    outlined
                    dense
                    hide-details="auto"
                    :rules="ruleMustImage"
                  ></v-file-input>

                  <v-file-input
                    class="mt-3"
                    label="ใบงานเซนต์*"
                    v-model="sign_sheet"
                    prepend-icon=""
                    append-icon="mdi-image"
                    show-size
                    outlined
                    dense
                    hide-details="auto"
                    :rules="ruleMustImage"
                  ></v-file-input>
                </v-card-text>
              </v-card> -->
            </div>

            <div v-if="status_bank == 7 && user_group_permission != 11">
              <v-card outlined>
                <v-card-text>
                  <h3 class="mb-1">ข้อมูลเบื้องต้น</h3>

                  <v-row no-gutters>
                    <v-col cols="3">ราคากลาง: </v-col>
                    <v-col class="text-end">{{ Number(middle_price).toLocaleString() }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="3">คูณ: </v-col>
                    <v-col class="text-end">{{ Number(car_price_multiply).toLocaleString() }}%</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="3">ส่วนลด/ส่วนเพิ่ม: </v-col>
                    <v-col class="text-end" :style="`color: ${car_price_discount < 0 ? 'red' : ''}`">
                      {{ Number(car_price_discount).toLocaleString() }}
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="3">ราคาจัด: </v-col>
                    <v-col class="text-end">{{ Number(amount_price).toLocaleString() }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="3">เงินดาวน์: </v-col>
                    <v-col class="text-end">{{ Number(down).toLocaleString() }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="3">ราคาขายรถ: </v-col>
                    <v-col class="text-end">{{ Number(car_price_vat).toLocaleString() }}</v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-card class="mt-3" outlined>
                <v-card-text>
                  <h3 class="mb-3">ข้อมูลการอนุมัติของแบงค์</h3>

                  <v-menu
                    ref="menuDateAppointments_date"
                    v-model="menuDateAppointments_date"
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
                      locale="th-TH"
                      picker-date
                      @input="menuDateAppointments_date = false"
                    ></v-date-picker>
                  </v-menu>

                  <v-text-field
                    class="mt-3"
                    label="ราคากลาง"
                    type="number"
                    v-model="formData.middle_price"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>

                  <v-text-field
                    class="mt-3"
                    autocomplete="true"
                    label="%"
                    type="number"
                    min="0"
                    v-model="formData.car_price_persen"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>

                  <v-text-field
                    class="mt-3"
                    autocomplete="true"
                    label="ยอดจัด"
                    type="number"
                    min="0"
                    v-model="formData.finance_price"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>

                  <v-text-field
                    class="mt-3"
                    label="เงินดาวน์"
                    type="number"
                    v-model="formData.down"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>

                  <v-text-field
                    class="mt-3"
                    label="ราคาขายรถ"
                    type="number"
                    v-model="formData.car_price"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text>
                  <v-text-field label="ซับดาวน์" type="number" v-model="formData.sub_down" outlined dense hide-details>
                  </v-text-field>
                  <v-select
                    class="mt-3"
                    :items="['พี่ยุพิน', 'เฮียดิเรก', 'ซ้อแพ็ค', 'อื่นๆ']"
                    v-model="formData.approver"
                    label="ผู้อนุมัติ"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-select>
                </v-card-text>
              </v-card>

              <v-card v-if="user_group_permission != -1" class="mt-3" outlined>
                <v-card-text>
                  <h3 class="mb-3">เอกสารประกอบ</h3>
                  <v-file-input
                    label="รูปบัตรประจำตัวประชาชนลูกค้า*"
                    v-model="id_card"
                    prepend-icon=""
                    append-icon="mdi-image"
                    show-size
                    outlined
                    dense
                    hide-details="auto"
                    :rules="ruleMustImage"
                  ></v-file-input>

                  <v-file-input
                    class="mt-3"
                    v-model="po"
                    label="ใบ PO"
                    prepend-icon=""
                    append-icon="mdi-image"
                    show-size
                    outlined
                    dense
                    hide-details="auto"
                    :rules="ruleMustImage"
                  ></v-file-input>
                </v-card-text>
              </v-card>
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
import * as apiAppointmentBank from "@/Api/apiAppointmentBank";
import * as apiBank from "@/Api/apiBank";
import * as apiBank_branch from "@/Api/apiBank_branch";
import * as apiCars from "@/Api/apiCars";

export default {
  props: ["dialogAppointmentBank", "actionAppointmentBank", "idWork", "formTitleAppointmentBank", "status_bank"],
  data() {
    return {
      btnloading: true,
      formDataLoading: true,
      menuDateAppointments_date: false,
      menuDateAppointment_bank_date: false,
      menuDateAppointment_money_date: false,
      menuDateAppointment_transfer_date: false,
      menuDateAppointment_book_date: false,
      menuDateAppointment_mkt_date: false,
      menuDateAppointment_sentbook_date: false,
      menuCommission_mount: false,
      menuDateCustomerPaymentDue: false,
      menuDateDocument_date: false,

      dataBank: [],
      dataBank_branch_all: [],
      dataBank_branch: [],

      formData: {},
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dataBank: [],
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),

      // ข้อมูลเบื้องต้นของรถ
      middle_price: null,
      car_price_multiply: null,
      car_price_discount: null,
      amount_price: null,
      down: null,
      car_price_vat: null,

      ruleMustImage: [(value) => !!value, (value) => !value || value.size < 2000000 || "ขนาดรูปต้องน้อยกว่า 2 MB"],
    };
  },
  mounted() {
    this.getBank();
    this.getBank_branch();
  },
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
          let formData = new FormData();
          formData.append("formData", JSON.stringify(this.formData));
          // formData.append("id_card", this.id_card);
          // formData.append("booking_sheet", this.booking_sheet);
          // formData.append("sign_sheet", this.sign_sheet);
          const response = await apiAppointmentBank.store(formData);

          if (response.status == 200) {
            this.$emit("success", "AppointmentBank");
          } else {
            this.$emit("error", "AppointmentBank");
          }
        } else if (this.formData.action == "edit") {
          let formData = new FormData();
          formData.append("_method", "PUT");
          formData.append("formData", JSON.stringify(this.formData));
          // formData.append("id_card", this.id_card);
          // formData.append("booking_sheet", this.booking_sheet);
          // formData.append("sign_sheet", this.sign_sheet);
          // formData.append("po", this.po);
          const response = await apiAppointmentBank.update(this.formData.id, formData);

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
  },
  watch: {
    async dialogAppointmentBank() {
      this.dialogDeleteComponent = this.dialogAppointmentBank;
      if (this.dialogAppointmentBank) {
        if (this.actionAppointmentBank == "check") {
          this.formDataLoading = true;
          this.id_card = null;
          this.booking_sheet = null;
          this.sign_sheet = null;
          this.po = null;
          const response = await apiAppointmentBank.checkAppointmentBank(this.idWork);
          console.log("response", response.data);
          this.$nextTick(async () => {
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              self.formData.work_status = this.status_bank;
              self.change_branch(response.data.bank_id);
            });
          });
          if (this.status_bank == 7) {
            const car = await apiCars.getAllinfo(response.data.car_id, -1);
            console.log("car", car.data);
            const middle_prices = car.data.dataPreviewBanks;
            let middle_price = middle_prices.find((item) => item.isSelected == 1);
            if (middle_price) {
              this.middle_price = middle_price.middle_price;
            }
            this.car_price_multiply = car.data.queryCar.car_price_multiply;
            this.car_price_discount = car.data.queryCar.car_price_discount;
            this.amount_price = car.data.queryCar.amount_price;
            this.down = car.data.queryCar.amount_down;
            this.car_price_vat = car.data.queryCar.car_price_vat;
          }

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
