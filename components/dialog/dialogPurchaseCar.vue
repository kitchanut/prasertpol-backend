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
          @submit.prevent="onAction(formData.id)"
        >
          <v-toolbar color="primary" dark flat>
            <v-btn
              :loading="btnloading"
              color="red darken-1"
              text
              @click="
                action == 'edit' ? $emit('cancleItem') : deleteTempFolder()
              "
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitle }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                v-if="user_group_permission != 13"
                type="submit"
                :loading="btnloading"
                dark
                text
                style="font-size: 18px"
              >
                {{ this.action == "add" ? "บันทึก" : "แก้ไข" }}
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
            <div
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 8 ||
                user_group_permission == 10
              "
            >
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="รถคันที่"
                    append-icon=""
                    v-model="formData.car_no"
                    id="formData.car_no"
                    name="formData.car_no"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.partner_car_id"
                    id="formData.partner_car_id"
                    name="formData.partner_car_id"
                    :items="partnerCar"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="partner_car_name"
                    item-value="id"
                    label="ซื้อรถจาก"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template v-slot:append-item>
                      <selectAddPartnerCar
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="4">
                  <v-menu
                    ref="menuDate_buy"
                    v-model="menuDate_buy"
                    id="menuDate_buy"
                    name="menuDate_buy"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.car_date_buy"
                        id="formData.car_date_buy"
                        name="formData.car_date_buy"
                        label="วันที่สั่งซื้อ"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        clearable
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flat
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.car_date_buy"
                      id="formData.car_date_buy"
                      name="formData.car_date_buy"
                      locale="th-TH"
                      picker-date
                      @input="menuDate_buy = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.branch_id"
                    id="formData.branch_id"
                    name="formData.branch_id"
                    :items="branches"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="branch_name"
                    item-value="id"
                    label="สาขา"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                    @change="changeBranch(formData.branch_id)"
                  >
                  </v-autocomplete>
                  <v-text-field
                    autocomplete="true"
                    v-show="false"
                    label="จังหวัด"
                    append-icon=""
                    v-model="formData.branch_province_id"
                    id="formData.branch_province_id"
                    name="formData.branch_province_id"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.car_types_id"
                    id="formData.car_types_id"
                    name="formData.car_types_id"
                    :items="carType"
                    no-data-text="ไม่มีข้อมูล"
                    @change="eventSelectType"
                    item-text="car_type_name"
                    item-value="id"
                    label="ประเภทรถ"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template slot="selection" slot-scope="{ item }">
                      {{ item.car_type_name }} ({{ item.car_type_name_en }})
                    </template>

                    <template slot="item" slot-scope="{ item }">
                      {{ item.car_type_name }} ({{ item.car_type_name_en }})
                    </template>
                    <template v-slot:append-item>
                      <selectAddCarType
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.car_year"
                    id="formData.car_year"
                    name="formData.car_year"
                    :items="years"
                    item-text="value"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="value"
                    label="ปีผลิต (ค.ศ)"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <!-- <v-text-field autocomplete="true"
                  label="ปีผลิต (ค.ศ)"
                  append-icon=""
                  v-model="formData.car_year"
                  id="formData.car_year"
                  name="formData.car_year"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field> -->
                  <v-autocomplete
                    v-model="formData.car_models_id"
                    id="formData.car_models_id"
                    name="formData.car_models_id"
                    :items="carModel"
                    @change="eventSelectModel"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="car_model_name"
                    item-value="id"
                    label="ยี่ห้อ"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template v-slot:append-item>
                      <selectAddCarModel
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.car_serie_id"
                    id="formData.car_serie_id"
                    name="formData.car_serie_id"
                    :items="carSerie"
                    no-data-text="ไม่มีข้อมูล"
                    @change="getCarSerieSub"
                    item-text="car_series_name"
                    item-value="id"
                    label="รุ่นรถ"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template v-slot:append-item>
                      <selectAddCarSerie
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.car_serie_sub_id"
                    id="formData.car_serie_sub_id"
                    name="formData.car_serie_sub_id"
                    :items="carSerieSub"
                    item-text="car_serie_sub_name"
                    item-value="id"
                    label="รุ่นย่อย"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template v-slot:append-item>
                      <selectAddCarSerieSub
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-menu
                    ref="menuDateCreated_at"
                    v-model="menuDateCreated_at"
                    id="menuDateCreated_at"
                    name="menuDateCreated_at"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.car_mark_year"
                        id="formData.car_mark_year"
                        name="formData.car_mark_year"
                        label="ปีจดทะเบียน (ค.ศ)"
                        v-bind="attrs"
                        v-on="on"
                        clearable
                        readonly
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flathide-details
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.car_mark_year"
                      id="formData.car_mark_year"
                      name="formData.car_mark_year"
                      locale="th-TH"
                      picker-date
                      @input="menuDateCreated_at = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col>
                  <v-menu
                    ref="menuDate_buy"
                    v-model="menuDate_act"
                    id="menuDate_act"
                    name="menuDate_act"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.tex_date"
                        id="formData.tex_date"
                        name="formData.tex_date"
                        label="ภาษี"
                        clearable
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flat
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.tex_date"
                      id="formData.tex_date"
                      name="formData.tex_date"
                      locale="th-TH"
                      picker-date
                      @input="menuDate_act = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col>
                  <v-menu
                    ref="menuDate_buy"
                    v-model="menuDate_book"
                    id="menuDate_book"
                    name="menuDate_book"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.car_date_book"
                        id="formData.car_date_book"
                        name="formData.car_date_book"
                        label="วันรับเล่ม"
                        readonly
                        clearable
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flat
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.car_date_book"
                      id="formData.car_date_book"
                      name="formData.car_date_book"
                      locale="th-TH"
                      picker-date
                      @input="menuDate_book = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ทะเบียนเดิม"
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

                <v-col>
                  <v-autocomplete
                    v-model="formData.province_id"
                    id="formData.province_id"
                    name="formData.province_id"
                    :items="dataProvinces"
                    item-text="name_th"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    label="ทะเบียนเดิมจังหวัด"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>

                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ทะเบียนใหม่"
                    append-icon=""
                    v-model="formData.car_regis_current"
                    id="formData.car_regis_current"
                    name="formData.car_regis_current"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col>
                  <v-autocomplete
                    v-model="formData.province_id_current"
                    id="formData.province_id_current"
                    name="formData.province_id_current"
                    :items="dataProvinces"
                    item-text="name_th"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    label="ทะเบียนใหม่จังหวัด"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="เจ้าของลำดับที่"
                    append-icon=""
                    v-model="formData.owner_no"
                    id="formData.owner_no"
                    name="formData.owner_no"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อ"
                    append-icon=""
                    v-model="formData.owner_name"
                    id="formData.owner_name"
                    name="formData.owner_name"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    autocomplete="true"
                    label="ซ่อมที่"
                    append-icon=""
                    v-model="formData.car_fix"
                    id="formData.car_fix"
                    name="formData.car_fix"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-text-field
                    autocomplete="true"
                    label="จอง"
                    append-icon=""
                    v-model="formData.car_booking"
                    id="formData.car_booking"
                    name="formData.car_booking"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="เลขเครื่องยนต์"
                    append-icon=""
                    v-model="formData.car_no_engine"
                    id="formData.car_no_engine"
                    name="formData.car_no_engine"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="เลขตัวถัง"
                    append-icon=""
                    v-model="formData.car_no_body"
                    id="formData.car_no_body"
                    name="formData.car_no_body"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="เลขไมค์"
                    type="number"
                    append-icon=""
                    v-model="formData.car_mileage"
                    id="formData.car_mileage"
                    name="formData.car_mileage"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="ขนาดเครื่องยนต์ CC"
                    type="number"
                    append-icon=""
                    v-model="formData.car_engine_amount"
                    id="formData.car_engine_amount"
                    name="formData.car_engine_amount"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-autocomplete
                    v-model="formData.color_id"
                    id="formData.color_id"
                    name="formData.color_id"
                    :items="dataColor"
                    item-text="color_name"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    label="สีของรถ"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="3">
                  <v-autocomplete
                    v-model="formData.fuel_id"
                    id="formData.fuel_id"
                    name="formData.fuel_id"
                    :items="dataFuel"
                    item-text="fuel_name"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    label="ชนิดเชื้อเพลง"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <br />
              <hr />
              <br />

              <v-row
                v-if="user_group_permission == 8 || user_group_permission == 10"
              ></v-row>
              <v-row v-else>
                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาซื้อเข้าก่อน Vat (บ)"
                    type="number"
                    append-icon=""
                    v-model="formData.car_buy_vat"
                    id="formData.car_buy_vat"
                    name="formData.car_buy_vat"
                    @input="vatCal(formData.car_buy_vat, 'car_buy_vat')"
                    outlined
                    dense
                    input
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาซื้อเข้ารวม Vat (บ)"
                    type="number"
                    append-icon=""
                    @input="sumVatSumOverCos()"
                    v-model="formData.car_buy"
                    id="formData.car_buy"
                    name="formData.car_buy"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="ค่าดำเนินการ (บ.)"
                    append-icon=""
                    min="0"
                    type="number"
                    @input="sumVatSumOverCos()"
                    v-model="formData.amount_overCost"
                    id="formData.amount_overCost"
                    name="formData.amount_overCost"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="เข้ารวม vat+ค่าดำเนิน (บ)"
                    append-icon=""
                    v-model="formData.VatSumOverCos"
                    id="formData.VatSumOverCos"
                    name="formData.VatSumOverCos"
                    disabled
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row
                v-if="user_group_permission == 8 || user_group_permission == 10"
              >
              </v-row>
              <v-row v-else>
                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาดาวน์ (บ.)"
                    type="number"
                    append-icon=""
                    v-model="formData.amount_down"
                    id="formData.amount_down"
                    name="formData.amount_down"
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
                    append-icon=""
                    label="งวดผ่อน (บ.)"
                    v-model="formData.amount_slacken"
                    id="formData.amount_slacken"
                    name="formData.amount_slacken"
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
                    label="ขายประมาณ (บ)"
                    type="number"
                    disabled
                    append-icon=""
                    v-model="formData.car_price_vat"
                    id="formData.car_price_vat"
                    name="formData.car_price_vat"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาจัด"
                    type="number"
                    append-icon=""
                    v-model="formData.amount_price"
                    id="formData.amount_price"
                    name="formData.amount_price"
                    outlined
                    disabled
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="จัดรวม Vat (บ)"
                    type="number"
                    append-icon=""
                    v-model="formData.amount_price_vat"
                    id="formData.amount_price_vat"
                    name="formData.amount_price_vat"
                    outlined
                    disabled
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row v-if="user_group_permission == -1">
                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    disabled
                    label="เงินเข้าธนาคาร"
                    append-icon=""
                    v-model="formData.car_price_bank"
                    id="formData.car_price_bank"
                    name="formData.car_price_bank"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    disabled
                    label="ราคาขายจริง"
                    append-icon=""
                    v-model="formData.car_price"
                    id="formData.car_price"
                    name="formData.car_price"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-text-field
                    autocomplete="true"
                    label="บวก %"
                    append-icon=""
                    v-model="formData.car_price_plus"
                    id="formData.car_price_plus"
                    name="formData.car_price_plus"
                    outlined
                    disabled
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-text-field
                    autocomplete="true"
                    label="คูณ %"
                    append-icon=""
                    disabled
                    v-model="formData.car_price_multiply"
                    id="formData.car_price_multiply"
                    name="formData.car_price_multiply"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="ค่าใช้จ่าย (บ)"
                    append-icon=""
                    v-model="formData.expenses"
                    id="formData.expenses"
                    name="formData.expenses"
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
                    label="ราคาสุทธิ (บ)"
                    type="number"
                    append-icon=""
                    v-model="formData.net_price"
                    id="formData.net_price"
                    name="formData.net_price"
                    outlined
                    dense
                    hide-details
                    disabled
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    label="รายรับ (บ)"
                    type="number"
                    disabled
                    append-icon=""
                    v-model="formData.income"
                    id="formData.income"
                    name="formData.income"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col v-if="formData.danger_type == 1" cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ข้อมูลประสบภัย"
                    append-icon=""
                    v-model="formData.danger_text"
                    id="formData.danger_text"
                    name="formData.danger_text"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col v-if="formData.water_type == 1" cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ระดับน้ำที่ท่วม"
                    append-icon=""
                    v-model="formData.water_text"
                    id="formData.water_text"
                    name="formData.water_text"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-textarea
                    rows="2"
                    label="หมายเหตุ"
                    append-icon=""
                    v-model="formData.comment"
                    id="formData.comment"
                    name="formData.comment"
                    outlined
                    dense
                    hide-details
                  >
                  </v-textarea>
                </v-col>
              </v-row>

              <v-row class="d-flex justify-space-around">
                <v-radio-group
                  v-model="formData.fuel_type"
                  id="formData.fuel_type"
                  name="formData.fuel_type"
                  row
                >
                  <template>
                    <div class="mr-1">ประเภทเชื้อเพลิง:</div>
                  </template>
                  <v-radio label="น้ำมัน" value="1"></v-radio>
                  <v-radio label="แก๊ส" value="2"></v-radio>
                  <v-radio label="ไฟฟ้า" value="3"></v-radio>
                  <v-radio label="น้ำมัน/แก๊ส" value="4"></v-radio>
                  <v-radio label="น้ำมัน/ไฟฟ้า" value="5"></v-radio>
                </v-radio-group>

                <v-radio-group
                  v-model="formData.car_gear"
                  id="formData.car_gear"
                  name="formData.car_gear"
                  row
                >
                  <template>
                    <div class="mr-1">เกียร์รถ:</div>
                  </template>
                  <v-radio label="อัตโนมัติ (AT)" value="1"></v-radio>
                  <v-radio label="ธรรมดา (MT)" value="2"></v-radio>
                </v-radio-group>
              </v-row>

              <v-row class="d-flex justify-space-around">
                <v-radio-group
                  v-model="formData.abs"
                  id="formData.abs"
                  name="formData.abs"
                  row
                >
                  <template>
                    <div class="mr-1">ABS:</div>
                  </template>
                  <v-radio label="มี" value="1"></v-radio>
                  <v-radio label="ไม่มี" value="2"></v-radio>
                </v-radio-group>

                <v-radio-group
                  v-model="formData.airbag"
                  id="formData.airbag"
                  name="formData.airbag"
                  row
                >
                  <template>
                    <div class="mr-1">AIRBAG:</div>
                  </template>
                  <v-radio label="มี" value="1"></v-radio>
                  <v-radio label="ไม่มี" value="2"></v-radio>
                </v-radio-group>

                <v-radio-group
                  v-model="formData.cd"
                  id="formData.cd"
                  name="formData.cd"
                  row
                >
                  <template>
                    <div class="mr-1">CD:</div>
                  </template>
                  <v-radio label="มี" value="1"></v-radio>
                  <v-radio label="ไม่มี" value="2"></v-radio>
                </v-radio-group>
              </v-row>

              <v-row class="d-flex justify-space-around">
                <v-radio-group
                  v-model="formData.obligation"
                  id="formData.obligation"
                  name="formData.obligation"
                  row
                >
                  <template>
                    <div class="mr-1">ภาระผูกพัน:</div>
                  </template>
                  <v-radio label="มี" value="1"></v-radio>
                  <v-radio label="ไม่มี" value="2"></v-radio>
                </v-radio-group>

                <v-radio-group
                  v-model="formData.water_type"
                  id="formData.water_type"
                  name="formData.water_type"
                  row
                >
                  <template>
                    <div class="mr-1">เคยประสบภัย:</div>
                  </template>
                  <v-radio label="เคย" value="1"></v-radio>
                  <v-radio label="ไม่เคย" value="2"></v-radio>
                </v-radio-group>

                <v-radio-group
                  v-model="formData.danger_type"
                  id="formData.danger_type"
                  name="formData.danger_type"
                  row
                >
                  <template>
                    <div class="mr-1">เคยน้ำท่วม:</div>
                  </template>
                  <v-radio label="เคย" value="1"></v-radio>
                  <v-radio label="ไม่เคย" value="2"></v-radio>
                </v-radio-group>
              </v-row>

              <v-row class="d-flex justify-space-around">
                <v-radio-group
                  v-model="formData.booking_status"
                  id="formData.booking_status"
                  name="formData.booking_status"
                  row
                >
                  <template>
                    <div class="mr-1">การจอง:</div>
                  </template>
                  <v-radio label="ยังไม่จอง" value="1"></v-radio>
                  <v-radio label="จอง" color="red" value="0"></v-radio>
                </v-radio-group>

                <v-radio-group
                  v-model="formData.car_active"
                  id="formData.car_active"
                  name="formData.car_active"
                  row
                  readonly
                >
                  <template>
                    <div class="mr-1">แสดงหน้าร้าน:</div>
                  </template>
                  <v-radio label="แสดง" value="1"></v-radio>
                  <v-radio label="ไม่แสดง" color="red" value="0"></v-radio>
                </v-radio-group>

                <v-radio-group
                  v-model="formData.car_stock"
                  id="formData.car_stock"
                  name="formData.car_stock"
                  row
                  @change="carStock_change(formData.car_stock)"
                >
                  <template>
                    <div class="mr-1">สถานะ:</div>
                  </template>
                  <v-radio label="รอรับรถ" color="yellow" value="1"></v-radio>
                  <v-radio label="อยู่ในคลัง" color="red" value="2"></v-radio>
                  <v-radio label="ขาย" color="green" value="3"></v-radio>
                </v-radio-group>
              </v-row>
            </div>

            <hr />

            <v-row class="mt-10" v-if="user_group_permission == 13">
              <v-col cols="6">
                <v-text-field
                  autocomplete="true"
                  label="Youtube"
                  append-icon=""
                  v-model="formData.car_link_youtube"
                  id="formData.car_link_youtube"
                  name="formData.car_link_youtube"
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
                  label="FACEBOOK"
                  append-icon=""
                  v-model="formData.car_link_facebook"
                  id="formData.car_link_facebook"
                  name="formData.car_link_facebook"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>
              </v-col>
            </v-row>

            <v-row class="mt-10">
              <v-col
                cols="6"
                v-if="
                  user_group_permission == -1 ||
                  user_group_permission == 8 ||
                  user_group_permission == 10 ||
                  user_group_permission == 13
                "
              >
                <div align="center" justify="center">
                  <h2>รูปภาพรถ</h2>
                  <div class="mt-2">
                    <v-btn
                      v-if="action == 'edit'"
                      color="primary"
                      x-small
                      dark
                      @click="addImage = !addImage"
                    >
                      {{ addImage == true ? "ดูรูปภาพ" : "เพิ่มรูปใหม่" }}
                    </v-btn>
                  </div>
                </div>
                <div v-if="addImage == true" align="center" justify="center">
                  <div
                    id="my-strictly-unique-vue-upload-multiple-image"
                    style="display: flex; justify-content: center"
                  >
                    <vue-upload-multiple-image
                      @upload-success="uploadImageSuccess"
                      @before-remove="beforeRemove"
                      @mark-is-primary="markIsPrimary"
                      :maxImage="30"
                      :data-images="images"
                      :multiple="uploadMuti"
                      :disabled="watingUpload"
                      :showEdit="false"
                      accept="image/jpeg,image/png,image/jpg"
                      idUpload="myIdUpload"
                      editUpload="myIdEdit"
                      dragText="เลือกที่หลายรูป"
                      browseText="เลือกที่ละรูป"
                      primaryText="รูปหน้าปก"
                      dropText="วางรูปภาพตรงนี้"
                      :markIsPrimaryText="
                        action == 'edit' ? '' : 'ตั้งเป็นรูปหน้าปก'
                      "
                      popupText="รูปนี้จะแสดงเป็นรูปแรก"
                    ></vue-upload-multiple-image>
                  </div>
                </div>

                <div v-else class="mx-auto mt-2" max-width="700">
                  <v-item-group>
                    <v-container>
                      <v-row>
                        <v-col
                          v-for="(imageCar, keys) in formData.imageCars"
                          :key="keys"
                          cols="12"
                          md="4"
                        >
                          <v-item>
                            <img
                              width="140px"
                              height="140px"
                              :src="
                                serverUrl +
                                imageCar.car_id +
                                '/' +
                                imageCar.image_name
                              "
                            />
                          </v-item>
                          <div class="mt-1">
                            <v-btn
                              v-if="imageCar.img_first == 0"
                              width="140px"
                              color="blue"
                              x-small
                              dark
                              @click="
                                changeFistImg(imageCar.car_id, imageCar.id)
                              "
                            >
                              เลือกเป็นรูปปก
                            </v-btn>
                            <v-btn
                              v-if="imageCar.img_first == 1"
                              width="140px"
                              color="green"
                              x-small
                              dark
                            >
                              รูปปก
                            </v-btn>
                            <v-btn
                              v-if="
                                user_group_permission == -1 ||
                                user_group_permission == 8 ||
                                user_group_permission == 13
                              "
                              @click="delImgCar(imageCar.car_id, imageCar.id)"
                              width="140px"
                              color="red"
                              x-small
                              dark
                            >
                              ลบ
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-item-group>
                  <v-btn
                    class="mt-5"
                    v-if="formData.imageCars != 0"
                    @click="deleteAllImgCar(formData.id)"
                    style="width: 100%"
                    color="red"
                    x-small
                    dark
                  >
                    ลบทั้งหมด
                  </v-btn>
                </div>
              </v-col>
              <!-- <v-col
                cols="6"
                v-if="action == 'edit' && user_group_permission != 13"
              > -->
              <v-col cols="6" v-if="action == 'edit'">
                <v-row
                  v-if="
                    user_group_permission == -1 ||
                    user_group_permission == 8 ||
                    user_group_permission == 10
                  "
                >
                  <v-col cols="6">
                    <v-autocomplete
                      v-show="name == null"
                      v-model="search_name"
                      id="search_name"
                      name="search_name"
                      :items="search_terms"
                      item-text="search_name"
                      item-value="search_name"
                      label="ค้นหาคำ"
                      clearable
                      outlined
                      dense
                      @change="name = search_name"
                      hide-details
                      no-data-text="ไม่มีข้อมูล"
                    >
                      <template v-slot:append-item>
                        <selectAddSearchTerm
                          @success="addSuccess"
                          @error="addError"
                        />
                      </template>
                    </v-autocomplete>

                    <v-text-field
                      v-show="name != null"
                      autocomplete="true"
                      clearable
                      class="mt-2"
                      label="ชื่อไฟล์"
                      append-icon=""
                      v-model="name"
                      id="name"
                      name="name"
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-file-input
                      v-if="name != null"
                      v-model="file_name"
                      id="file_name"
                      name="file_name"
                      accept="image/*,.pdf"
                      show-size
                      label="เลือกไฟล์"
                      @change="selectFile"
                    ></v-file-input>
                  </v-col>
                </v-row>

                <br />
                <br />
                <v-row class="d-flex justify-center">
                  <h2>ไฟล์รถทั้งหมด</h2>
                </v-row>
                <br />
                <v-row v-for="(file_car, keys) in file_cars" :key="keys">
                  <v-col cols="3">
                    <span>
                      ชื่อไฟล์:
                      <span style="font-weight: 800">
                        {{ file_car.name }}
                      </span>
                    </span>
                  </v-col>

                  <v-col cols="3">
                    <span>
                      คนเพิ่ม:
                      <span style="font-weight: 800">
                        {{
                          file_car.user == null ? "" : file_car.user.first_name
                        }}
                      </span>
                    </span>
                  </v-col>

                  <v-col cols="3">
                    <span>
                      วันที่:
                      <span style="font-weight: 800">
                        {{
                          $moment(file_car.created_at)
                            .add(543, "year")
                            .format("DD MMMM YYYY HH:mm")
                        }}
                      </span>
                    </span>
                  </v-col>

                  <v-col cols="2">
                    <!-- <a
                    target="_blank"
                    :href="serverUrl + file_car.id + '/' + formData.car_pop"
                  >
                    <h2 class="blue--text">คลิกเพื่อดูไฟล์</h2>
                  </a> -->
                    <a :href="serverUrl + file_car.file_name" target="_blank">
                      <span style="font-weight: 800" class="blue--text"
                        >ดูไฟล์</span
                      >
                    </a>
                  </v-col>

                  <v-col
                    cols="1"
                    v-if="
                      user_group_permission == -1 || user_group_permission == 10
                    "
                  >
                    <v-btn
                      color="red"
                      fab
                      x-small
                      dark
                      @click="deleteFile(file_car.id, file_car.car_id)"
                    >
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiCars from "@/Api/apiCars";
import * as apiCar_types from "@/Api/apiCar_types";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";
import * as apiPartner_cars from "@/Api/apiPartner_cars";
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiColor from "@/Api/apiColor";
import * as apiFuel from "@/Api/apiFuel";
import * as apiFile_car from "@/Api/apiFile_car";
import * as apiSearch_term from "@/Api/apiSearch_term";
import * as apiBranches from "@/Api/apiBranches";

import selectAddCarModel from "@/components/selectAdd/selectAddCarModel";
import selectAddCarType from "@/components/selectAdd/selectAddCarType";
import selectAddCustomer from "@/components/selectAdd/selectAddCustomer";
import selectAddCarSerie from "@/components/selectAdd/selectAddCarSerie";
import selectAddCarSerieSub from "@/components/selectAdd/selectAddCarSerieSub";
import selectAddSearchTerm from "@/components/selectAdd/selectAddSearch_term";
import selectAddPartnerCar from "@/components/selectAdd/selectAddPartnerCar";

import * as customAlart from "@/customJS/customAlart";
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  props: ["dialog", "action", "id", "formTitle", "stock"],
  components: {
    selectAddCarModel,
    selectAddCarType,
    selectAddCustomer,
    selectAddCarSerie,
    selectAddCarSerieSub,
    selectAddSearchTerm,
    selectAddPartnerCar,
    VueUploadMultipleImage,
  },

  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/cars/",

      loading: true,
      btnloading: true,
      formDataLoading: false,
      menuDateCreated_at: false,

      formData: [],
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      carType: [],
      carModel: [],
      carSerie: [],
      images: [],
      carSerieSub: [],
      folder: null,
      uploadMuti: false,
      watingUpload: false,
      dialogDeleteComponent: false,
      partnerCar: [],
      dataProvinces: [],
      dataColor: [],
      dataFuel: [],
      addImage: this.action == "add" ? true : false,
      FilePop: null,
      years: [],
      branches: [],
      menuDate_buy: false,
      menuDate_act: false,
      menuDate_book: false,
      search_name: null,
      name: null,
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      file_cars: [],
      file_name: null,
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      search_terms: [],
    };
  },
  async mounted() {},
  methods: {
    async getSearch_term() {
      const response = await apiSearch_term.select();
      this.search_terms = response.data;
      this.loading = false;
    },
    sumVatSumOverCos() {
      let VatSumOverCos =
        parseFloat(this.formData.amount_overCost) +
        parseFloat(this.formData.car_buy);
      if (!isNaN(VatSumOverCos)) {
        this.formData.VatSumOverCos = parseFloat(VatSumOverCos).toFixed(2);
      }
    },
    async getYearCurrent() {
      var max = new Date().getFullYear();
      var min = max - 50;

      for (var i = max; i >= min; i--) {
        this.years.push({ value: i });
      }
      this.$nextTick(() => {
        this.years.push({ value: 9999 });
      });
    },
    selectFile(payload) {
      // console.log(payload);
      if (payload != null) {
        this.btnloading = true;

        const data = new FormData();
        data.append("car_id", this.id);
        data.append("name", this.name);
        data.append("user_id", this.user_id);
        data.append("file", payload);
        this.$nextTick(async () => {
          const response = await apiFile_car.upload_file_car(data);
          this.file_cars = response.data;
          // console.log(response);
          this.$nextTick(() => {
            if (response.status == 200) {
              this.name = null;
              this.file_name = null;
            }
            this.btnloading = false;
          });
        });
      }
    },
    async deleteFile(id, car_id) {
      const data = new FormData();
      data.append("id", id);
      data.append("car_id", car_id);
      const response = await apiFile_car.delete_file_car(data);
      this.file_cars = response.data;
    },
    async getColors() {
      const response = await apiColor.select();
      this.dataColor = response.data;
    },
    async getFuels() {
      const response = await apiFuel.select();
      this.dataFuel = response.data;
    },
    async getProvinces() {
      const response = await apiProvinces.select();
      this.dataProvinces = response.data;
    },
    async deleteTempFolder() {
      if (this.action == "add") {
        if (this.folder != null) {
          const data = new FormData();
          data.append("folder", this.folder);
          const response = await apiCars.deleteFolder(data);
          // console.log(response);
        }
      }
      // console.log(this.action);
      this.$emit("cancleItem");
    },
    async getCartypes() {
      const response = await apiCar_types.select();
      this.carType = response.data;
      this.loading = false;
    },
    async getCarmodels() {
      const response = await apiCar_models.select();
      this.carModel = response.data;
      this.loading = false;
    },
    async eventSelectType() {
      this.getCarseries();
    },
    async eventSelectModel() {
      this.getCarseries();
      this.formData.car_serie_id = null;
    },
    changeBranch(branch_id) {
      for (let index = 0; index < this.branches.length; index++) {
        // const element = array[index];
        if (this.branches[index].id == branch_id) {
          this.formData.branch_province_id = this.branches[index].province_id;
        }
        // console.log(this.branches[index] == branch_id);
      }
    },
    async getCarseries() {
      this.carSerie = [];
      if (
        Number.isInteger(this.formData.car_types_id) == true &&
        Number.isInteger(this.formData.car_models_id) == true
      ) {
        const response = await apiCar_series.selectDropdown(
          this.formData.car_types_id,
          this.formData.car_models_id
        );
        this.carSerie = response.data;
      }
      // this.loading = false;
      this.getCarSerieSub();
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      // console.log(response.data);
    },
    async getCarSerieSub() {
      this.carSerieSub = [];
      if (Number.isInteger(this.formData.car_serie_id) == true) {
        const response = await apiCar_serie_sub.select(
          this.formData.car_serie_id
        );
        this.carSerieSub = response.data;
      }
    },
    async getPartnerCar() {
      // partnerCar;
      const response = await apiPartner_cars.select();
      this.partnerCar = response.data;
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.action == "add") {
          this.formData.folder = this.folder;
          const response = await apiCars.store(this.formData);
          // console.log(response);
          if (response.data == "car_no") {
            customAlart.carNoDuplicate();
          } else if (response.data == "car_regis") {
            customAlart.carRegDuplicate();
          } else if (response.status == 200) {
            this.$emit("success", "Car");
            this.$refs.form.reset();
          } else {
            this.$refs.form.reset();
            this.$emit("error", "Car");
          }
        } else if (this.action == "edit") {
          this.formData.folder = this.folder;
          const response = await apiCars.update(this.id, this.formData);

          console.log(response.data);

          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Car");
          } else {
            this.$emit("error", "Car");
          }
        }
        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
    async addSuccess(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      } else if (value == "AddCarType") {
        await this.getCartypes();
      } else if (value == "AddCarModel") {
        await this.getCarmodels();
      } else if (value == "AddCarSerie") {
        await this.getCarseries();
      } else if (value == "AddCarSerieSub") {
        await this.getCarSerieSub();
      } else if (value == "AddSearch_term") {
        await this.getSearch_term();
      } else if (value == "AddPartnerCar") {
        await this.getPartnerCar();
      }
    },
    async addError(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      } else if (value == "AddCarType") {
        await this.getCartypes();
      } else if (value == "AddCarModel") {
        await this.getCarmodels();
      } else if (value == "AddCarSerie") {
        await this.getCarseries();
      } else if (value == "AddCarSerieSub") {
        await this.getCarSerieSub();
      } else if (value == "AddSearch_term") {
        await this.getSearch_term();
      } else if (value == "AddPartnerCar") {
        await this.getPartnerCar();
      }
    },
    async vatCal(value, type) {
      if (value != null) {
        if (type == "amount_price") {
          let beforVat =
            parseFloat(this.formData.amount_price) * (Number(7) / 100);
          this.formData.amount_price_vat = parseFloat(
            parseFloat(beforVat) + parseFloat(this.formData.amount_price)
          ).toFixed(2);
        } else if (type == "car_buy_vat") {
          let beforVat =
            parseFloat(this.formData.car_buy_vat) * (Number(7) / 100);
          this.formData.car_buy = parseFloat(
            parseFloat(beforVat) + parseFloat(this.formData.car_buy_vat)
          ).toFixed(2);
        }
      }
    },
    async changeFistImg(car_id, image_id) {
      const data = new FormData();
      data.append("car_id", car_id);
      data.append("image_id", image_id);
      this.formData.imageCars = [];
      const response = await apiCars.changeFistImg(data);
      // console.log(response);
      this.formData.imageCars = response.data;
    },
    async delImgCar(car_id, image_id) {
      const data = new FormData();
      data.append("car_id", car_id);
      data.append("image_id", image_id);
      this.formData.imageCars = [];
      const response = await apiCars.deleteImgCar(data);
      this.formData.imageCars = response.data;
    },
    async deleteAllImgCar(car_id) {
      this.$nextTick(async () => {
        const data = new FormData();
        data.append("car_id", car_id);
        const response = await apiCars.deleteAllImgCar(data);
        // console.log(response)
        this.formData.imageCars = [];
      });
    },
    async uploadImageSuccess(formData, index, fileList) {
      this.watingUpload = true;
      formData.append("folder", this.folder);
      const response = await apiCars.uploadImgCars(formData);
      if (response.status == 200) {
        this.uploadMuti = true;
        this.folder = response.data.folderName;
        if (this.action == "edit") {
          this.formData.imageCars = [];
          const response = await apiCars.ImageCar(this.formData.id);
          this.formData.imageCars = response.data;
        } else {
          this.formData.imageCars.push(response.data.imageID);
          fileList[index]["name"] = response.data.imageID;
        }
      }
      // console.log("index", fileList[index]["name"]);
      this.watingUpload = false;
    },
    carStock_change(value) {
      // console.log(value);
      if (value == 3 || value == 1) {
        this.formData.car_active = "0";
      } else {
        this.formData.car_active = "1";
      }
    },
    beforeRemove(index, done, fileList) {
      const image_id = fileList[index]["name"];
      this.$nextTick(async () => {
        const data = new FormData();
        data.append("car_id", this.folder);
        data.append("image_id", image_id);
        data.append("method", "add");
        const response = await apiCars.deleteImgCar(data);
        // console.log(response);
      });
      done();
    },
    markIsPrimary(index, fileList) {
      this.formData.imageCars = [];
      for (let index2 = 0; index2 < fileList.length; index2++) {
        this.formData.imageCars.push(fileList[index2][["name"]]);
      }
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialogDeleteComponent) {
        this.formDataLoading = true;
        this.images = [];
        this.folder = "";
        this.uploadMuti = false;
        this.addImage = true;

        await this.getYearCurrent();
        await this.getCartypes();
        await this.getCarmodels();
        await this.getPartnerCar();
        await this.getProvinces();
        await this.getColors();
        await this.getFuels();
        await this.getBranches();
        await this.getSearch_term();

        if (this.action == "add") {
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(() => {
              self.carseries = [];
              self.formData = {
                imageCars: [],
                // car_year: new Date().getFullYear(),
                car_year: 9999,
                fuel_type: "1",
                car_gear: "1",
                car_buy_from: "1",
                abs: "2",
                airbag: "2",
                cd: "2",
                danger_type: "2",
                water_type: "2",
                obligation: "2",
                car_buy_vat: 0,
                car_buy: 0,
                amount_overCost: 0,
                VatSumOverCos: 0,
                amount_down: 0,
                amount_slacken: 0,
                car_price_vat: 0,
                amount_price: 0,
                amount_price_vat: 0,
                car_price_bank: 0,
                car_price: 0,
                car_price_plus: 0,
                car_price_multiply: 0,
                net_price: 0,
                expenses: 0,
                income: 0,

                car_stock: "1",
                car_active: "0",
                booking_status: "1",
                user_id: this.user_id,
                car_link_youtube:
                  "https://www.youtube.com/channel/UCYWXRzNqRGn5D6h5vei9YvA",
                car_link_facebook:
                  "https://th-th.facebook.com/prasertpolrungruang/",
              };
            });
          });
        } else if (this.action == "edit") {
          this.$refs.form.reset();

          const data = new FormData();
          data.append("id", this.id);
          data.append("user_group_permission", this.user_group_permission);
          // const response = await apiCar_series.select();
          const responseCar = await apiCars.showCar(data);
          // console.log(responseCar);
          this.$nextTick(() => {
            const self = this;
            this.$nextTick(async () => {
              self.formData = await responseCar.data;
              self.folder = await responseCar.data.id;

              if (responseCar.data.imageCars.length == 0) {
                this.uploadMuti = false;
              } else {
                this.uploadMuti = true;
              }

              if (responseCar.data.img_id_first != 0) {
                this.addImage = false;
              }
              this.file_cars = responseCar.data.file_cars;
              // if (responseCar.data.car_pop != null) {
              //   this.addFilepop = false;
              // }

              await this.getCarseries();
              await this.getCarSerieSub();
              this.sumVatSumOverCos();
            });
          });
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

<style scoped>
#my-strictly-unique-vue-upload-multiple-image {
  margin-top: 60px;
}
</style>
