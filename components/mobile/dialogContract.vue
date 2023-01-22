<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      content-class="v-dialog--custom"
      fullscreen
    >
      <v-card>
        <v-form
          ref="form"
          :disabled="formDisabled"
          autocomplete="true"
          @submit.prevent="onAction()"
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
            <!-- <v-toolbar-title> {{ formTitleContract }} </v-toolbar-title> -->

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
                บันทึก
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
              <v-col> </v-col>
              <v-col align="end">
                <h3>รหัสงาน: W{{ idWork }}</h3>
                <h3>ลำดับรถ: {{ car_no }}</h3>
              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 2 -->
            <!-- กรอบข้อมูลช่อง 9 -->
            <v-row class="d-flex flex-row">
              <v-col cols="1"></v-col>
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="เขียนที่"
                  v-model="formData.contract_at"
                  id="formData.contract_at"
                  name="formData.contract_at"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 10 -->
            <v-row class="d-flex flex-row">
              <v-col cols="1"></v-col>
              <v-col>
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
                      v-model="formData.contract_date"
                      id="formData.contract_date"
                      name="formData.contract_date"
                      label="วันที่ปล่อย"
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
                    id="formData.contract_date"
                    name="formData.contract_date"
                    locale="th-TH"
                    picker-date
                    :rules="rule"
                    @input="menuDate = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <!--  -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 3 -->
            <v-row class="d-flex flex-row">
              <v-col cols="1"> </v-col>
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ข้าพเจ้า"
                  v-model="nameCompany"
                  id="nameCompany"
                  name="nameCompany"
                  readonly
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
            <v-row class="d-flex flex-row">
              <v-col>
                <h6
                  class="mt-1"
                  style="font-size: inherit"
                >ตกลงขายรถยนต์</h6>
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

            <v-row>
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="หมายเลขทะเบียน"
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

            <v-row>
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
            <v-row class="d-flex flex-row">

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ปีผลิต (ค.ศ.)"
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

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="สี"
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
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 6 -->
            <v-row class="d-flex flex-row">
              <v-col cols="1"> </v-col>
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ขายให้แก่"
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

            <v-row>
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="อายุปีเกิด (พ.ศ.)"
                  v-model="formData.customer_birthday_year"
                  id="formData.customer_birthday_year"
                  name="formData.customer_birthday_year"
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
                  label="โทรศัพท์"
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

            <!-- กรอบข้อมูลช่อง 6 -->
            <v-row class="d-flex flex-row mt-1">
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

            </v-row>
            <!--  -->

            <v-row class="d-flex flex-row mt-1">
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

              <v-col>
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
                  type="number"
                  hide-details
                  :rules="rule"
                >
                </v-text-field>
              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 8 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="บัตร"
                  v-model="formData.credit"
                  id="formData.credit"
                  name="formData.credit"
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
                  label="หมายเลข"
                  v-model="formData.credit_no"
                  id="formData.credit_no"
                  name="formData.credit_no"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  autocomplete="true"
                  label="ออกให้ ณ"
                  v-model="formData.credit_address"
                  id="formData.credit_address"
                  name="formData.credit_address"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 9 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="เป็นจำนวนเงิน (บาท)"
                  type="number"
                  min="0"
                  v-model="formData.contract_bath"
                  id="formData.contract_bath"
                  name="formData.contract_bath"
                  @input="cvToStringContract_bath"
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
                  label="จำนวนเงินเป็นตัวอักษร"
                  disabled
                  v-model="formData.contract_bath_string"
                  id="formData.contract_bath_string"
                  name="formData.contract_bath_string"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 10 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ข้าพเจ้าได้รับเงินมัดจำไว้เป็นเงิน (บาท)"
                  v-model="formData.contract_bath_deposit"
                  id="formData.contract_bath_deposit"
                  name="formData.contract_bath_deposit"
                  @input="cvToStringContract_bath_deposit"
                  append-icon=""
                  type="number"
                  min="0"
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="จำนวนเงินเป็นตัวอักษร"
                  disabled
                  v-model="formData.contract_bath_deposit_string"
                  id="formData.contract_bath_deposit_string"
                  name="formData.contract_bath_deposit_string"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 11 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ผู้ซื้อยังคงค้างอีกเป็นจำนวนเงิน"
                  v-model="formData.contract_bath_hold"
                  id="formData.contract_bath_hold"
                  name="formData.contract_bath_hold"
                  @input="cvToStringContract_bath_hold"
                  append-icon=""
                  outlined
                  type="number"
                  min="0"
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="จำนวนเงินเป็นตัวอักษร"
                  disabled
                  v-model="formData.contract_bath_hold_string"
                  id="formData.contract_bath_hold_string"
                  name="formData.contract_bath_hold_string"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 12 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-menu
                  ref="menuDateDateRefun"
                  v-model="menuDateDateRefun"
                  id="menuDateDateRefun"
                  name="menuDateDateRefun"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.date_bath_Refund"
                      id="formData.date_bath_Refund"
                      name="formData.date_bath_Refund"
                      label="ผู้ซื้อจะนำเงินมาชำระให้ครบจำนวนตามที่ตกลง ภายในวันที่"
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
                      :rules="rule"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.date_bath_Refund"
                    id="formData.date_bath_Refund"
                    name="formData.date_bath_Refund"
                    locale="th-TH"
                    picker-date
                    :rules="rule"
                    @input="menuDateDateRefun = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 13 -->
            <v-row
              class="d-flex flex-row rounded ma-auto mt-3 mb-3"
              style="border-style: solid; border-width: 1px; border-color: gray"
              align="center"
              justify="center"
            >
              <v-col class="text-center">
                <h4>
                  หากผู้ซ้อไม่นำเงินมาชำระให้ตามกำหนด
                  ผู้ซื้อยินยอมให้รับเงินมัดจำและคืนรถให้ทันที่ในสภาพเรียบร้อยทุกประการ
                  ถ้าหากเกิดความเสียหายใด ๆ ก็ดี ผู้ซื้อยอมชดใช้ให้ทั้งสิ้น
                  ตลอดทั้งคดีเพ่ง และคดีอาญา
                  ส่วนผู้ขายเมื่อได้รับเงินครบถ้วนตามสัญญาแล้ว
                  ผู้ขายจะทำการโอนกรรมสิทธิ์รถคันนี้ให้แก่ผู้ซื้อทันที
                  อากรแสตมป์ซื้อ-ขาย ผู้ซื้อเป็นผู้ออก จะได้ติดให้ครบถ้วน
                  เมื่อวันทำการโอนทะเบียนยานพาหนะ ฯ ผู้ซื้อ
                  และผู้ขายได้อ่านข้อความเข้าใจดีแล้ว และตกลงกันทั้งสองฝ่าย
                  จึงได้ลงลายมือไว้เป็นหลักฐานต่อหน้าพยาน
                </h4>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 14 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ลงนาม (ผู้ขาย)"
                  disabled
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
                  label="ลงนาม (ผู้ซื้อ)"
                  disabled
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 15 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ลงนาม (พยาน)"
                  disabled
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
                  label="ลงนาม (พยาน)"
                  disabled
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 16 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="เบอร์โทร (ผู้ขาย)"
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
                  label="เบอร์โทร (ผู้ซื้อ)"
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
            <div
              style="background-color: #d9d9d9"
              class="pa-2 mt-1"
            >
              <!-- กรอบข้อมูลช่อง 17 -->
              <v-row class="d-flex flex-row">
                <v-col cols="1"> </v-col>
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ข้าพเจ้าผู้ซื้อ"
                    :value="formData.customer_name"
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
                    label="ได้รับรถยนต์"
                    :value="formData.car_model_name"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 18 -->
              <v-row class="d-flex flex-row">
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="หมายเลขทะเบียน"
                    :value="formData.car_regis"
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
                    label="ไว้ในครอบครวง เมื่อวันที่/เดือน/พ.ศ."
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 19 -->
              <v-row
                class="d-flex flex-row rounded ma-auto mt-3 mb-3"
                style="
                  border-style: solid;
                  border-width: 1px;
                  border-color: gray;
                "
              >
                <v-col class="text-center">
                  <h4>
                    ใน สภาพเรียบร้อยทุกประกานหากเกิดการเสียดายใด ๆ
                    ก็ดีหลังจากที่ได้รับรถยนต์
                    ดังกล่าวมาข้าพเจ้าขอรับผิดชอบค่าเสียหาย
                    และความผิดตามภฏหมายต่าง ๆ ทั้งสิ้น
                  </h4>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 20 -->
              <v-row class="d-flex flex-row">
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ลงนามผู้ขาย (ผู้มอบรถ)"
                    disabled
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
                    label="ลงนามผู้ซื้อ (ผู้รับรถ)"
                    disabled
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 21 -->
              <v-row class="d-flex flex-row">
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ลงนาม (พยาน)"
                    disabled
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
                    label="ลงนาม (พยาน)"
                    disabled
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <!--  -->
              <!-- กรอบข้อมูลช่อง 22 -->
              <v-row class="d-flex flex-row">
                <v-col>
                  <v-textarea
                    label="หมายเหตุ"
                    rows="2"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-textarea>
                </v-col>
              </v-row>
            </div>

            <div class="d-flex flex-column">
              <v-file-input
                accept="image/jpeg,image/png,image/jpg"
                show-size
                :label="
                  currentFile == null
                    ? 'เลือกรูปภาพคู่กับลูกค้า'
                    : imagePreviewURL == null
                    ? 'เลือกรูปภาพคู่กับลูกค้า'
                    : 'เลือกรูปภาพคู่กับลูกค้าใหม่'
                "
                @change="selectFile"
              ></v-file-input>
              <img
                v-if="currentFile != null || imagePreviewURL != null"
                :src="imagePreviewURL"
              />
            </div>
            <!--  -->
          </v-card-text>
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
  props: [
    "dialogContract",
    "actionContract",
    "idWork",
    "idCustomer",
    "idCar",
    "car_no",
    "formTitleContract",
  ],
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/contracts/",

      btnloading: true,
      formDataLoading: false,
      formData: {
        contract_at: "บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด",
      },
      menuDate: false,
      menuDateDateRefun: false,
      menuDateCustomer_bath_date_transfer: false,
      menuDateCustomer_bath_date_signed: false,
      menuDateCustomer_car_date_release: false,
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],

      dataProvinces: [],
      dataAmphures: [],
      dataSelectAmphures: [],
      dataDistricts: [],
      dataSelectDistricts: [],
      currentFile: null,
      imagePreviewURL: null,
      formDisabled: true,
      nameCompany: "บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด",
      strZero: "ศูนย์บาทถ้วน",
    };
  },
  async mounted() {},
  methods: {
    async print_a4() {
      let routeData = this.$router.resolve({
        name: "prints-print_contract",
        query: { idContract: this.formData.id },
      });
      window.open(routeData.href, "_blank");

      // const response = await apiContract.update(
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
      //       query: { idContract: this.formData.id },
      //     });
      //     window.open(routeData.href, "_blank");
      //   });
      // } else {
      //   this.$emit("error", "Booking");
      // }
    },

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

    selectFile(payload) {
      // console.log(payload);
      if (payload != null) {
        this.currentFile = payload;
        const file = payload; // in case vuetify file input
        if (file) {
          this.imagePreviewURL = URL.createObjectURL(file);
          URL.revokeObjectURL(file); // free memory
        } else {
          this.imagePreviewURL = null;
        }
      }
    },
    async onAction() {
      if (this.imagePreviewURL == null) {
        customAlart.noFileConfirm();
      } else {
        if (this.$refs.form.validate()) {
          this.btnloading = true;
          this.formDataLoading = true;

          const data = new FormData();
          data.append("formData", JSON.stringify(this.formData));
          data.append("Image", this.currentFile);

          if (this.formData.action == "add") {
            const response = await apiContract.store(data);
            // console.log(response);
            this.$refs.form.reset();

            if (response.status == 200) {
              this.$emit("success", "Contract");
            } else {
              this.$emit("error", "Contract");
            }
          } else if (this.formData.action == "edit") {
            data.append("_method", "PATCH");

            const response = await apiContract.update(this.formData.id, data);
            // console.log(response);
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
      }
    },
  },
  watch: {
    async dialogContract() {
      this.dialogDeleteComponent = this.dialogContract;
      if (this.dialogContract) {
        this.formDataLoading = true;
        this.formDisabled = true;
        await this.getProvinces();
        await this.getAmphures();
        await this.getDistricts();
        this.imagePreviewURL = null;

        if (this.actionContract == "check") {
          const response = await apiContract.checkContract(
            this.idWork,
            this.idCar,
            this.idCustomer
          );
          await this.$refs.form.reset();
          this.formData = await response.data;
          // console.log(response.data);
          if (
            response.data.contract_image != "" &&
            response.data.contract_image != null
          ) {
            this.imagePreviewURL =
              this.serverUrl +
              response.data.id +
              "/" +
              response.data.contract_image;
          }
          this.nameCompany = "บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด";
          if (!this.formData.contract_at) {
            this.formData.contract_at =
              "บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด";
          }
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
