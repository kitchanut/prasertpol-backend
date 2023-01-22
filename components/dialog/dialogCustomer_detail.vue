<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      fullscreen
    >
      <v-card>
        <v-form
          ref="form"
          autocomplete="true"
          @submit.prevent="onAction(formData.id)"
        >
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-btn
              color="red darken-1"
              text
              @click="$emit('cancleItem')"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitle }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
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
            <v-container>
              <!-- กรอบข้อมูลช่อง 9 -->
              <v-row>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="4"
                  xl="4"
                >
                  <v-autocomplete
                    v-model="formData.customer_id"
                    id="formData.customer_id"
                    name="formData.customer_id"
                    :items="customer"
                    :disabled="this.action == 'edit' ? true : false"
                    item-text="customer_name"
                    item-value="id"
                    @change="getCustomerDetail"
                    label="ผู้ซื้อ ชื่อ-นามสกุล"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                  >
                    <template
                      slot="selection"
                      slot-scope="{ item }"
                    >
                      {{ item.customer_name }} ({{ item.customer_nickname }})
                    </template>

                    <template
                      slot="item"
                      slot-scope="{ item }"
                    >
                      {{ item.customer_name }} ({{ item.customer_nickname }})
                    </template>

                    <template v-slot:append-item>
                      <selectAddCustomer
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="เกิดปี (พ.ศ.)"
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
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์โทร"
                    append-icon=""
                    v-model="formData.customer_tel"
                    id="formData.customer_tel"
                    name="formData.customer_tel"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 10 -->
              <v-row>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    v-model="formData.customer_facebook"
                    id="formData.customer_facebook"
                    name="formData.customer_facebook"
                    label="FACEBOOK"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ID LINE"
                    v-model="formData.customer_line"
                    id="formData.customer_line"
                    name="formData.customer_line"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="E-mail"
                    v-model="formData.customer_email"
                    id="formData.customer_email"
                    name="formData.customer_email"
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
              <v-row>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="3"
                  xl="3"
                >
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
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
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

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
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

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="3"
                  xl="3"
                >
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

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
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
              <!--  -->

              <!-- กรอบข้อมูลช่อง 12 -->
              <v-row class="d-flex flex-row">
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="3"
                  xl="3"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ที่อยู่ปัจจุบัน (ผู้ซื้อ)"
                    v-model="formData.customer_address_current"
                    id="formData.customer_address_current"
                    name="formData.customer_address_current"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  ols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
                  <v-autocomplete
                    v-model="formData.amphure_id_current"
                    id="formData.amphure_id_current"
                    name="formData.amphure_id_current"
                    :items="dataSelectAmphuresCurrent"
                    item-text="name_th"
                    item-value="id"
                    @change="selectSeeAmphureCurrent"
                    label="อำเภอ"
                    outlined
                    dense
                    no-data-text="ไม่มีข้อมูล"
                    hide-details
                    :rules="rule"
                  >
                  </v-autocomplete>
                </v-col>

                <v-col
                  ols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
                  <v-autocomplete
                    v-model="formData.district_id_current"
                    id="formData.district_id_current"
                    name="formData.district_id_current"
                    :items="dataSelectDistrictsCurrent"
                    item-text="name_th"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    @change="selectSeeDistrictCurrent"
                    label="ตำบล"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-autocomplete>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="3"
                  xl="3"
                >
                  <v-autocomplete
                    v-model="formData.province_id_current"
                    id="formData.province_id_current"
                    name="formData.province_id_current"
                    :items="dataProvincesCurrent"
                    item-text="name_th"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    @change="selectSeeProvinceCurrent"
                    label="จังหวัด"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-autocomplete>
                </v-col>

                <v-col
                  ols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
                  <v-text-field
                    autocomplete="true"
                    label="รหัสไปรษณีย์"
                    append-icon=""
                    v-model="formData.zip_code_current"
                    id="formData.zip_code_current"
                    name="formData.zip_code_current"
                    outlined
                    dense
                    hide-details
                    onkeypress="return  (event.charCode >= 48 && event.charCode <= 57)"
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 13 -->

              <v-row
                class="rounded ma-auto mt-3 mb-3"
                style="
                  border-style: solid;
                  border-width: 1px;
                  border-color: gray;
                "
              >
                <v-col cols="7">
                  <v-radio-group
                    v-model="formData.customer_job"
                    id="formData.customer_job"
                    name="formData.customer_job"
                    row
                  >
                    <template>
                      <div class="ml-3">อาชีพ:</div>
                    </template>
                    <v-radio
                      value="1"
                      label="ข้าราชการ"
                    ></v-radio>
                    <v-radio
                      value="2"
                      label="พนักงานเอกชน"
                    ></v-radio>
                    <v-radio
                      value="3"
                      label="เกษตกร"
                    ></v-radio>
                    <v-radio
                      value="4"
                      label="ค้าขาย"
                    ></v-radio>
                    <v-radio
                      value="5"
                      label="อื่น ๆ "
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col
                  cols="5"
                  v-if="formData.customer_job == 5"
                >
                  <v-text-field
                    autocomplete="true"
                    label="อาชีพ"
                    v-model="formData.customer_job_list"
                    id="formData.customer_job_list"
                    name="formData.customer_job_list"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <!--  -->

              <!-- กรอบข้อมูลช่อง 14 -->
              <v-row class="d-flex flex-row">
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                >
                  <v-text-field
                    autocomplete="true"
                    label="อายุงานกี่เดือน"
                    v-model="formData.customer_work_age"
                    id="formData.customer_work_age"
                    name="formData.customer_work_age"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                >
                  <v-text-field
                    autocomplete="true"
                    label="รายได้บาท/เดือน"
                    v-model="formData.customer_income"
                    id="formData.customer_income"
                    name="formData.customer_income"
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
              <v-row
                class="d-flex flex-row rounded ma-auto mt-3 mb-3"
                style="
                  border-style: solid;
                  border-width: 1px;
                  border-color: gray;
                "
              >
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-radio-group
                    v-model="formData.customer_receive_money_type"
                    id="formData.customer_receive_money_type"
                    name="formData.customer_receive_money_type"
                    row
                  >
                    <template>
                      <div class="ml-3">รับเงินเดือน:</div>
                    </template>
                    <v-radio
                      value="1"
                      label="เข้าบัญชี"
                    ></v-radio>
                    <v-radio
                      value="2"
                      label="เงินสด"
                    ></v-radio>
                  </v-radio-group>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-radio-group
                    v-model="formData.customer_slip_money"
                    id="formData.customer_slip_money"
                    name="formData.customer_slip_money"
                    row
                  >
                    <template>
                      <div class="ml-3">สริปเงินเดือน:</div>
                    </template>
                    <v-radio
                      value="1"
                      label="มี"
                    ></v-radio>
                    <v-radio
                      value="2"
                      label="ไม่มี"
                    ></v-radio>
                  </v-radio-group>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-radio-group
                    v-model="formData.customer_receive_evidence"
                    id="formData.customer_receive_evidence"
                    name="formData.customer_receive_evidence"
                    row
                  >
                    <template>
                      <div class="ml-3">หนังสือรับรองเงินเดือน:</div>
                    </template>
                    <v-radio
                      value="1"
                      label="มี"
                    ></v-radio>
                    <v-radio
                      value="2"
                      label="ไม่มี"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 17 -->
              <v-row class="d-flex flex-row">
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ที่ทำมาหากิน (ไร่)"
                    v-model="formData.customer_land_all"
                    id="formData.customer_land_all"
                    name="formData.customer_land_all"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ที่ตัวเอง (ไร่)"
                    v-model="formData.customer_land_domin"
                    id="formData.customer_land_domin"
                    name="formData.customer_land_domin"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ที่เช่า (ไร่)"
                    v-model="formData.customer_land_hire"
                    id="formData.customer_land_hire"
                    name="formData.customer_land_hire"
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
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ค่าเช่าบ้าน (บาท/เดือน)"
                    v-model="formData.customer_value_home"
                    id="formData.customer_value_home"
                    name="formData.customer_value_home"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ค่าผ่อนรถ (บาท/เดือน)"
                    v-model="formData.customer_value_car"
                    id="formData.customer_value_car"
                    name="formData.customer_value_car"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="อื่น ๆ (บาท/เดือน)"
                    v-model="formData.customer_value_ete"
                    id="formData.customer_value_ete"
                    name="formData.customer_value_ete"
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
                <v-col>
                  <v-radio-group
                    v-model="formData.customer_installment_history"
                    id="formData.customer_installment_history"
                    name="formData.customer_installment_history"
                    row
                  >
                    <template>
                      <div class="ml-3">ประวัติการผ่อน:</div>
                    </template>
                    <v-radio
                      value="1"
                      label="มี"
                    ></v-radio>
                    <v-radio
                      value="2"
                      label="ไม่มี"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <!--  -->

              <!-- กรอบข้อมูลช่อง 20 -->
              <v-row class="d-flex flex-row">
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="จ่ายช้าเกิน 30 วัน (ครั้ง)"
                    v-model="formData.customer_installment_slow"
                    id="formData.customer_installment_slow"
                    name="formData.customer_installment_slow"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ไม่เกิน 30 วัน (ครั้ง)"
                    v-model="formData.customer_installment_nmt"
                    id="formData.customer_installment_nmt"
                    name="formData.customer_installment_nmt"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ภายใน 3 เดือนตรวจเครดิตมา (ครั้ง)"
                    v-model="formData.customer_installment_check"
                    id="formData.customer_installment_check"
                    name="formData.customer_installment_check"
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
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ผู้ค้ำ ชื่อ-นามสกุล"
                    v-model="formData.customer_refer_name"
                    id="formData.customer_refer_name"
                    name="formData.customer_refer_name"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์โทร"
                    v-model="formData.customer_refer_tel"
                    id="formData.customer_refer_tel"
                    name="formData.customer_refer_tel"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="เกี่ยวข้องเป็น"
                    v-model="formData.customer_refer_related"
                    id="formData.customer_refer_related"
                    name="formData.customer_refer_related"
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
              <v-row
                class="d-flex flex-row rounded ma-auto mt-3 mb-3"
                style="
                  border-style: solid;
                  border-width: 1px;
                  border-color: gray;
                "
              >
                <v-col cols="7">
                  <v-radio-group
                    v-model="formData.customer_refer_job"
                    id="formData.customer_refer_job"
                    name="formData.customer_refer_job"
                    row
                  >
                    <template>
                      <div class="ml-3">อาชีพ:</div>
                    </template>
                    <v-radio
                      value="1"
                      label="ข้าราชการ"
                    ></v-radio>
                    <v-radio
                      value="2"
                      label="พนักงานเอกชน"
                    ></v-radio>
                    <v-radio
                      value="3"
                      label="เกษตร"
                    ></v-radio>
                    <v-radio
                      value="4"
                      label="ค้าขาย"
                    ></v-radio>
                    <v-radio
                      value="5"
                      label="อื่น ๆ "
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col
                  cols="5"
                  v-if="formData.customer_refer_job == 5"
                >
                  <v-text-field
                    autocomplete="true"
                    label="อาชีพ"
                    v-model="formData.customer_refer_job_list"
                    id="formData.customer_refer_job_list"
                    name="formData.customer_refer_job_list"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 23 -->
              <v-row class="d-flex flex-row">
                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="3"
                  xl="3"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ที่อยู่อยู่ปัจจุบัน (คนค้ำ)"
                    v-model="formData.customer_refer_address"
                    id="formData.customer_refer_address"
                    name="formData.customer_refer_address"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
                  <v-autocomplete
                    v-model="formData.amphure_id_ref"
                    id="formData.amphure_id_ref"
                    name="formData.amphure_id_ref"
                    :items="dataSelectAmphuresRef"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="name_th"
                    item-value="id"
                    @change="selectSeeAmphureRef"
                    label="อำเภอ"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
                  <v-autocomplete
                    no-data-text="ไม่มีข้อมูล"
                    v-model="formData.district_id_ref"
                    id="formData.district_id_ref"
                    name="formData.district_id_ref"
                    :items="dataSelectDistrictsRef"
                    item-text="name_th"
                    item-value="id"
                    @change="selectSeeDistrictRef"
                    label="ตำบล"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="3"
                  lg="3"
                  xl="3"
                >
                  <v-autocomplete
                    v-model="formData.province_id_ref"
                    id="formData.province_id_ref"
                    name="formData.province_id_ref"
                    :items="dataProvinces"
                    item-text="name_th"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    @change="selectSeeProvinceRef"
                    label="จังหวัด"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <v-col
                  cols="12"
                  xs="12"
                  sm="12"
                  md="2"
                  lg="2"
                  xl="2"
                >
                  <v-text-field
                    autocomplete="true"
                    label="รหัสไปรษณีย์"
                    append-icon=""
                    v-model="formData.zip_code_ref"
                    id="formData.zip_code_ref"
                    name="formData.zip_code_ref"
                    outlined
                    dense
                    hide-details
                    onkeypress="return  (event.charCode >= 48 && event.charCode <= 57)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <!--  -->
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiCustomers from "@/Api/apiCustomers";
import * as apiCustomer_detail from "@/Api/apiCustomer_detail";
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiAmphures from "@/Api/apiAmphures";
import * as apiDistricts from "@/Api/apiDistricts";
import selectAddCustomer from "@/components/selectAdd/selectAddCustomer";

export default {
  components: {
    selectAddCustomer,
  },
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formTitleModel: "เพิ่มข้อมูล",
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      customer: [],
      dialogDeleteComponent: false,
      dataProvinces: [],
      dataProvincesCurrent: [],
      dataProvincesRef: [],

      dataAmphures: [],
      dataAmphuresCurrent: [],
      dataAmphuresRef: [],

      dataSelectAmphures: [],
      dataSelectAmphuresCurrent: [],
      dataSelectAmphuresRef: [],

      dataDistricts: [],
      dataDistrictsCurrent: [],
      dataDistrictsRef: [],

      dataSelectDistricts: [],
      dataSelectDistrictsCurrent: [],
      dataSelectDistrictsRef: [],
    };
  },

  async mounted() {
    await this.getProvinces();
    await this.getAmphures();
    await this.getDistricts();
    this.loading = false;
  },
  methods: {
    async getProvinces() {
      const response = await apiProvinces.select();
      this.dataProvinces = response.data;
      this.dataProvincesCurrent = response.data;
      this.dataProvincesRef = response.data;
    },
    async getAmphures() {
      const response = await apiAmphures.select();
      this.dataAmphures = response.data;
      this.dataAmphuresCurrent = response.data;
      this.dataAmphuresRef = response.data;

      this.dataSelectAmphures = response.data;
      this.dataSelectAmphuresCurrent = response.data;
      this.dataSelectAmphuresRef = response.data;
    },
    async getDistricts() {
      const response = await apiDistricts.select();
      this.dataDistricts = response.data;
      this.dataDistrictsCurrent = response.data;
      this.dataDistrictsRef = response.data;
    },
    async selectSeeProvince() {
      this.dataSelectAmphures = [];
      for (let index = 0; index < this.dataAmphures.length; index++) {
        if (this.dataAmphures[index].province_id == this.formData.province_id) {
          this.dataSelectAmphures.push(this.dataAmphures[index]);
        }
      }
    },
    async selectSeeProvinceCurrent() {
      this.dataSelectAmphuresCurrent = [];
      for (let index = 0; index < this.dataAmphuresCurrent.length; index++) {
        if (
          this.dataAmphuresCurrent[index].province_id ==
          this.formData.province_id_current
        ) {
          this.dataSelectAmphuresCurrent.push(this.dataAmphuresCurrent[index]);
        }
      }
    },
    async selectSeeProvinceRef() {
      this.dataSelectAmphuresRef = [];
      for (let index = 0; index < this.dataAmphuresRef.length; index++) {
        if (
          this.dataAmphuresRef[index].province_id ==
          this.formData.province_id_ref
        ) {
          this.dataSelectAmphuresRef.push(this.dataAmphuresRef[index]);
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
    async selectSeeAmphureCurrent() {
      // console.log(this.formData.amphure_id);
      this.dataSelectDistrictsCurrent = [];
      for (let index = 0; index < this.dataDistrictsCurrent.length; index++) {
        if (
          this.dataDistrictsCurrent[index].amphure_id ==
          this.formData.amphure_id_current
        ) {
          this.dataSelectDistrictsCurrent.push(
            this.dataDistrictsCurrent[index]
          );
        }
      }

      for (let index = 0; index < this.dataAmphuresCurrent.length; index++) {
        if (
          this.dataAmphuresCurrent[index].id == this.formData.amphure_id_current
        ) {
          this.formData.province_id_current =
            this.dataAmphuresCurrent[index].province_id;
          // console.log(this.dataAmphures[index]);
        }
      }
    },
    async selectSeeAmphureRef() {
      // console.log(this.formData.amphure_id);
      this.dataSelectDistrictsRef = [];
      for (let index = 0; index < this.dataDistrictsRef.length; index++) {
        if (
          this.dataDistrictsRef[index].amphure_id ==
          this.formData.amphure_id_ref
        ) {
          this.dataSelectDistrictsRef.push(this.dataDistrictsRef[index]);
        }
      }

      for (let index = 0; index < this.dataAmphuresRef.length; index++) {
        if (this.dataAmphuresRef[index].id == this.formData.amphure_id_ref) {
          this.formData.province_id_ref =
            this.dataAmphuresRef[index].province_id;
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
    async selectSeeDistrictCurrent() {
      this.formData.zip_code_current = "";
      for (let index = 0; index < this.dataDistrictsCurrent.length; index++) {
        if (
          this.dataDistrictsCurrent[index].id ==
          this.formData.district_id_current
        ) {
          // this.dataSelectDistricts.push(this.dataDistricts[index]);
          this.formData.zip_code_current =
            this.dataDistrictsCurrent[index].zip_code;
        }
      }
    },
    async selectSeeDistrictRef() {
      this.formData.zip_code_ref = "";
      for (let index = 0; index < this.dataDistrictsRef.length; index++) {
        if (this.dataDistrictsRef[index].id == this.formData.district_id_ref) {
          // this.dataSelectDistricts.push(this.dataDistricts[index]);
          this.formData.zip_code_ref = this.dataDistrictsRef[index].zip_code;
        }
      }
    },
    async getCustomer() {
      const response = await apiCustomers.index();
      this.customer = response.data;
    },
    async getCustomerDetail(value) {
      const response = await apiCustomer_detail.SelectCustomerDetail(value);
      this.formData = await response.data;
    },
    async addSuccess(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      }
    },
    async addError(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      }
    },

    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.action == "add") {
          const response = await apiCustomer_detail.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          const response = await apiCustomer_detail.update(
            this.id,
            this.formData
          );
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
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialog) {
        this.formDataLoading = true;
        this.getCustomer();
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiCustomer_detail.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              self.formData.customer_id = await response.data.customer_id;
              await this.selectSeeAmphure();
              await this.selectSeeAmphureCurrent();
              await this.selectSeeAmphureRef();
            });
          });
          this.getCustomerDetail(this.id);
        }
        this.formDataLoading = false;
      } else {
        this.$emit("cancleItem");
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
