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
          @submit.prevent="onAction()"
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
            <v-toolbar-title> {{ formTitleBooking }} </v-toolbar-title>

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
                dark
                text
                :loading="btnloading"
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

            <v-row no-gutters>
              <v-col
                cols="3"
                class="pr-2"
              >
                <v-card outlined>
                  <v-card-text>

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

                    <v-text-field
                      class="mt-3"
                      autocomplete="true"
                      label="ประเภท"
                      v-model="formData.car_type_name"
                      id="formData.car_type_name"
                      name="formData.car_type_name"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>

                    <v-text-field
                      class="mt-3"
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

                    <v-text-field
                      class="mt-3"
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

                    <v-text-field
                      class="mt-3"
                      autocomplete="true"
                      label="รุ่นย่อย"
                      v-model="formData.car_serie_sub_name"
                      id="formData.car_serie_sub_name"
                      name="formData.car_serie_sub_name"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>

                    <v-text-field
                      class="mt-3"
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

                    <v-text-field
                      class="mt-3"
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

                    <v-text-field
                      class="mt-3"
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

                    <v-text-field
                      class="mt-3"
                      autocomplete="true"
                      label="เลขตัวถัง"
                      v-model="formData.car_no_body"
                      id="formData.car_no_body"
                      name="formData.car_no_body"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>

                  </v-card-text>
                </v-card>

              </v-col>
              <v-col
                cols="3"
                class="pl-2"
              >
                <v-card outlined>
                  <v-card-text>

                    <v-text-field
                      label="Sale"
                      v-model="formData.first_name"
                      outlined
                      dense
                      hide-details
                      readonly
                    >
                    </v-text-field>

                    <v-text-field
                      class="mt-3"
                      autocomplete="true"
                      label="สาขา"
                      v-model="formData.branch_name"
                      id="formData.branch_name"
                      name="formData.branch_name"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>

                  </v-card-text>
                </v-card>

                <v-card
                  outlined
                  class="mt-4"
                >
                  <v-card-text>
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
                          v-model="formData.created_at"
                          id="formData.created_at"
                          name="formData.created_at"
                          label="จองวันที่"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          prepend-icon=""
                          outlined
                          dense
                          hide-details
                          clearable
                          flathide-details
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
                    </v-menu>

                    <v-text-field
                      class="mt-3"
                      autocomplete="true"
                      label="จำนวนเงินจอง (บาท)"
                      v-model="formData.customer_bath_pledge"
                      id="formData.customer_bath_pledge"
                      name="formData.customer_bath_pledge"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                      :rules="rule"
                    >
                    </v-text-field>

                    <v-menu
                      ref="menuDateCustomer_bath_date_transfer"
                      v-model="menuDateCustomer_bath_date_transfer"
                      id="menuDateCustomer_bath_date_transfer"
                      name="menuDateCustomer_bath_date_transfer"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="mt-3"
                          autocomplete="true"
                          v-model="formData.customer_bath_date_transfer"
                          id="formData.customer_bath_date_transfer"
                          name="formData.customer_bath_date_transfer"
                          label="โอนเงินจองวันที่"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          prepend-icon=""
                          outlined
                          dense
                          clearable
                          hide-details
                          flathide-details
                          :rules="rule"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.customer_bath_date_transfer"
                        id="formData.customer_bath_date_transfer"
                        name="formData.customer_bath_date_transfer"
                        locale="th-TH"
                        picker-date
                        @input="menuDateCustomer_bath_date_transfer = false"
                      ></v-date-picker>
                    </v-menu>

                    <v-menu
                      ref="menuDateCustomer_bath_date_signed"
                      v-model="menuDateCustomer_bath_date_signed"
                      id="menuDateCustomer_bath_date_signed"
                      name="menuDateCustomer_bath_date_signed"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="mt-3"
                          autocomplete="true"
                          v-model="formData.customer_bath_date_signed"
                          id="formData.customer_bath_date_signed"
                          name="formData.customer_bath_date_signed"
                          label="เซ็นวันที่"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          prepend-icon=""
                          outlined
                          dense
                          hide-details
                          flat
                          clearable
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.customer_bath_date_signed"
                        id="formData.customer_bath_date_signed"
                        name="formData.customer_bath_date_signed"
                        locale="th-TH"
                        picker-date
                        @input="menuDateCustomer_bath_date_signed = false"
                      ></v-date-picker>
                    </v-menu>

                    <v-menu
                      ref="menuDateCustomer_car_date_release"
                      v-model="menuDateCustomer_car_date_release"
                      id="menuDateCustomer_car_date_release"
                      name="menuDateCustomer_car_date_release"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="mt-3"
                          autocomplete="true"
                          v-model="formData.customer_car_date_release"
                          id="formData.customer_car_date_release"
                          name="formData.customer_car_date_release"
                          label="ปล่อยวันที่"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          persistent-hint
                          prepend-icon=""
                          outlined
                          dense
                          hide-details
                          flat
                          clearable
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="formData.customer_car_date_release"
                        id="formData.customer_car_date_release"
                        name="formData.customer_car_date_release"
                        locale="th-TH"
                        picker-date
                        @input="menuDateCustomer_car_date_release = false"
                      ></v-date-picker>
                    </v-menu>

                  </v-card-text>
                </v-card>

              </v-col>
              <v-col
                cols="6"
                class="pl-4"
              >
                <v-card outlined>
                  <v-card-text>
                    <v-row no-gutters>
                      <v-col cols="5 pr-2">
                        <v-text-field
                          label="ราคากลางเดิม"
                          type="number"
                          v-model="formData.price_middle"
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field
                          label="จัดได้ %"
                          type="number"
                          min="0"
                          v-model="formData.persen"
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="5 pl-2">
                        <v-text-field
                          label="ยอดจัดเดิม"
                          v-model="formData.finance_price"
                          type="number"
                          min="0"
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>

                    <v-row
                      no-gutters
                      class="mt-3"
                    >
                      <v-col cols="5 pr-2">
                        <v-text-field
                          label="ราคากลางปิด"
                          type="number"
                          v-model="formData.price_middle_close"
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field
                          label="จัดได้ %"
                          type="number"
                          min="0"
                          v-model="formData.persen_close"
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="5 pl-2">
                        <v-text-field
                          label="ยอดจัดปิด"
                          v-model="formData.finance_price_close"
                          type="number"
                          min="0"
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>

                    <v-row
                      no-gutters
                      class="mt-3"
                    >
                      <v-col cols="4 pr-2">
                        <v-text-field
                          autocomplete="true"
                          label="ราคาขายเดิม"
                          type="number"
                          v-model="formData.price_original"
                          id="formData.price_original"
                          name="formData.price_original"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          autocomplete="true"
                          label="ดาวน์"
                          type="number"
                          v-model="formData.price_original_deposit"
                          id="formData.price_original_deposit"
                          name="formData.price_original_deposit"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="4 pl-2">
                        <v-text-field
                          autocomplete="true"
                          label="ยอดจัด"
                          type="number"
                          v-model="formData.price_original_aggregate"
                          id="formData.price_original_aggregate"
                          name="formData.price_original_aggregate"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>

                    <v-row
                      no-gutters
                      class="mt-3"
                    >
                      <v-col cols="4 pr-2">
                        <v-text-field
                          autocomplete="true"
                          label="ราคาปิด"
                          type="number"
                          v-model="formData.price_close"
                          id="formData.price_close"
                          name="formData.price_close"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                          autocomplete="true"
                          type="number"
                          label="ดาวน์"
                          v-model="formData.amount_slacken"
                          id="formData.amount_slacken"
                          name="formData.amount_slacken"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="4 pl-2">
                        <v-text-field
                          autocomplete="true"
                          label="ยอดจัด"
                          type="number"
                          v-model="formData.price_close_aggregate"
                          id="formData.price_close_aggregate"
                          name="formData.price_close_aggregate"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>

                <v-card
                  outlined
                  class="mt-3"
                >
                  <v-card-text>
                    <v-row no-gutters>
                      <v-col cols="6 pr-2">
                        <v-text-field
                          autocomplete="true"
                          label="ดอกเบี้ย (%)"
                          type="number"
                          v-model="formData.interest"
                          id="formData.interest"
                          name="formData.interest"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="6 pl-2">
                        <v-text-field
                          autocomplete="true"
                          label="ค่างวดเดือนละ (บาท)"
                          type="number"
                          v-model="formData.amount_down"
                          id="formData.amount_down"
                          name="formData.amount_down"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>

                    <v-row
                      no-gutters
                      class="mt-3"
                    >
                      <v-col cols="6 pr-2">
                        <v-text-field
                          autocomplete="true"
                          label="ธนาคาร"
                          v-model="formData.bank"
                          id="formData.bank"
                          name="formData.bank"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="6 pl-2">
                        <v-text-field
                          autocomplete="true"
                          label="ผลเครดิต"
                          append-icon=""
                          v-model="formData.credit_result"
                          id="formData.credit_result"
                          name="formData.credit_result"
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>

                    <v-row
                      no-gutters
                      class="mt-3"
                    >
                      <v-col cols="6 pr-2">
                        <v-text-field
                          autocomplete="true"
                          label="ผู้เซนต์"
                          v-model="formData.penname"
                          id="formData.penname"
                          name="formData.penname"
                          append-icon=""
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="6 pl-2">
                        <v-text-field
                          label="ประกันภัยประเภท"
                          v-model="formData.insurance"
                          outlined
                          dense
                          hide-details
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col>

              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 1 -->
            <!-- <v-row class="d-flex flex-row">
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
                  label="ประเภท"
                  v-model="formData.car_type_name"
                  id="formData.car_type_name"
                  name="formData.car_type_name"
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
            </v-row> -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 1 -->
            <!-- <v-row class="d-flex flex-row">
              <v-col>
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

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="รุ่นย่อย"
                  v-model="formData.car_serie_sub_name"
                  id="formData.car_serie_sub_name"
                  name="formData.car_serie_sub_name"
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
                  label="สาขา"
                  v-model="formData.branch_name"
                  id="formData.branch_name"
                  name="formData.branch_name"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row> -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 2 -->
            <!-- <v-row class="d-flex flex-row">
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
                  label="เลขตัวถัง"
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
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="เลขเครื่อง"
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
            </v-row> -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 3 -->
            <!-- <v-row class="d-flex flex-row">
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
                      v-model="formData.created_at"
                      id="formData.created_at"
                      name="formData.created_at"
                      label="จองวันที่"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      outlined
                      dense
                      hide-details
                      clearable
                      flathide-details
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
                </v-menu>
              </v-col>
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="จำนวนเงินมัดจำ (บาท)"
                  v-model="formData.customer_bath_pledge"
                  id="formData.customer_bath_pledge"
                  name="formData.customer_bath_pledge"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-menu
                  ref="menuDateCustomer_bath_date_transfer"
                  v-model="menuDateCustomer_bath_date_transfer"
                  id="menuDateCustomer_bath_date_transfer"
                  name="menuDateCustomer_bath_date_transfer"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.customer_bath_date_transfer"
                      id="formData.customer_bath_date_transfer"
                      name="formData.customer_bath_date_transfer"
                      label="โอนเงินวันที่"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      outlined
                      dense
                      clearable
                      hide-details
                      flathide-details
                      :rules="rule"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.customer_bath_date_transfer"
                    id="formData.customer_bath_date_transfer"
                    name="formData.customer_bath_date_transfer"
                    locale="th-TH"
                    picker-date
                    @input="menuDateCustomer_bath_date_transfer = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu
                  ref="menuDateCustomer_bath_date_signed"
                  v-model="menuDateCustomer_bath_date_signed"
                  id="menuDateCustomer_bath_date_signed"
                  name="menuDateCustomer_bath_date_signed"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.customer_bath_date_signed"
                      id="formData.customer_bath_date_signed"
                      name="formData.customer_bath_date_signed"
                      label="เซ็นวันที่"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      outlined
                      dense
                      hide-details
                      flat
                      clearable
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.customer_bath_date_signed"
                    id="formData.customer_bath_date_signed"
                    name="formData.customer_bath_date_signed"
                    locale="th-TH"
                    picker-date
                    @input="menuDateCustomer_bath_date_signed = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu
                  ref="menuDateCustomer_car_date_release"
                  v-model="menuDateCustomer_car_date_release"
                  id="menuDateCustomer_car_date_release"
                  name="menuDateCustomer_car_date_release"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.customer_car_date_release"
                      id="formData.customer_car_date_release"
                      name="formData.customer_car_date_release"
                      label="ปล่อยวันที่"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      outlined
                      dense
                      hide-details
                      flat
                      clearable
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.customer_car_date_release"
                    id="formData.customer_car_date_release"
                    name="formData.customer_car_date_release"
                    locale="th-TH"
                    picker-date
                    @input="menuDateCustomer_car_date_release = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row> -->
            <!--  -->
            <!-- กรอบข้อมูลช่อง 4 -->
            <!-- <v-row class="d-flex flex-row">
              <v-col cols="9">
                <v-text-field
                  autocomplete="true"
                  label="ราคากลาง (บาท)"
                  type="number"
                  v-model="formData.price_middle"
                  id="formData.price_middle"
                  name="formData.price_middle"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col cols="3">
                <v-text-field
                  autocomplete="true"
                  label="จัดได้ %"
                  type="number"
                  min="0"
                  v-model="formData.persen"
                  id="formData.persen"
                  name="formData.persen"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row> -->
            <!--  -->

            <!-- ก อบข้อมูลช่อง 5 -->
            <!-- <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ราคาเดิม (บาท)"
                  type="number"
                  v-model="formData.price_original"
                  id="formData.price_original"
                  name="formData.price_original"
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
                  label="ดาวน์ขั้นต่ำ (บาท)"
                  type="number"
                  v-model="formData.price_original_deposit"
                  id="formData.price_original_deposit"
                  name="formData.price_original_deposit"
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
                  label="ยอดจัด (บาท)"
                  type="number"
                  v-model="formData.price_original_aggregate"
                  id="formData.price_original_aggregate"
                  name="formData.price_original_aggregate"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row> -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 6 -->
            <!-- <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ราคาปิด (บาท)"
                  type="number"
                  v-model="formData.price_close"
                  id="formData.price_close"
                  name="formData.price_close"
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
                  type="number"
                  label="จองดาวน์ (บาท)"
                  v-model="formData.amount_slacken"
                  id="formData.amount_slacken"
                  name="formData.amount_slacken"
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
                  label="ค้างดาวน์ (บาท)"
                  type="number"
                  v-model="formData.price_hole_down"
                  id="formData.price_hole_down"
                  name="formData.price_hole_down"
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
                  label="ยอดจัด (บาท)"
                  type="number"
                  v-model="formData.price_close_aggregate"
                  id="formData.price_close_aggregate"
                  name="formData.price_close_aggregate"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row> -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 7 -->
            <!-- <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ดอกเบี้ย (%)"
                  type="number"
                  v-model="formData.interest"
                  id="formData.interest"
                  name="formData.interest"
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
                  label="ค่างวดเดือนละ (บาท)"
                  type="number"
                  v-model="formData.amount_down"
                  id="formData.amount_down"
                  name="formData.amount_down"
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
                  label="เป็นจำนวน (เดือน)"
                  type="number"
                  v-model="formData.payment_term_month"
                  id="formData.payment_term_month"
                  name="formData.payment_term_month"
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
                  label="ธนาคาร"
                  v-model="formData.bank"
                  id="formData.bank"
                  name="formData.bank"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row> -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 8 -->
            <!-- <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ผู้เซนต์"
                  v-model="formData.penname"
                  id="formData.penname"
                  name="formData.penname"
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
                  label="ผลเครดิต"
                  append-icon=""
                  v-model="formData.credit_result"
                  id="formData.credit_result"
                  name="formData.credit_result"
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row> -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 9 -->
            <v-row
              class="d-flex flex-row mt-3"
              style="border-top: 2px solid black"
            >
              <v-col cols="7">
                <v-text-field
                  autocomplete="true"
                  v-model="formData.customer_name"
                  id="formData.customer_name"
                  name="formData.customer_name"
                  item-text="customer_name"
                  item-value="id"
                  label="ผู้ซื้อ ชื่อ-นามสกุล"
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col cols="2">
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
              <v-col cols="3">
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
            <v-row class="d-flex flex-row">
              <v-col>
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

              <v-col>
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
              <v-col>
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
                  type="number"
                  v-model="formData.zip_code"
                  id="formData.zip_code"
                  name="formData.zip_code"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 12 -->
            <v-row class="d-flex flex-row">
              <v-col>
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
                >
                </v-text-field>
              </v-col>

              <v-col>
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
                >
                </v-autocomplete>
              </v-col>

              <v-col>
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
                >
                </v-autocomplete>
              </v-col>

              <v-col>
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
                >
                </v-autocomplete>
              </v-col>

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="รหัสไปรษณีย์"
                  append-icon=""
                  type="number"
                  v-model="formData.zip_code_current"
                  id="formData.zip_code_current"
                  name="formData.zip_code_current"
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->
            <!-- กรอบข้อมูลช่อง 13 -->
            <v-row
              class="d-flex flex-row rounded ma-auto mt-3 mb-3"
              style="border-style: solid; border-width: 1px; border-color: gray"
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
              <v-col>
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

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="รายได้บาท/เดือน"
                  type="number"
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

            <!-- กรอบข้อมูลช่อง 15 -->
            <v-row
              class="d-flex flex-row rounded ma-auto mt-3 mb-3"
              style="border-style: solid; border-width: 1px; border-color: gray"
            >
              <v-col>
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

              <v-col>
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
              <v-col>
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
              <v-col>
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

              <v-col>
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
              <v-col>
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
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ค่าเช่าบ้าน (บาท/เดือน)"
                  v-model="formData.customer_value_home"
                  id="formData.customer_value_home"
                  name="formData.customer_value_home"
                  type="number"
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
                  label="ค่าผ่อนรถ (บาท/เดือน)"
                  v-model="formData.customer_value_car"
                  id="formData.customer_value_car"
                  name="formData.customer_value_car"
                  type="number"
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
                  label="อื่น ๆ (บาท/เดือน)"
                  v-model="formData.customer_value_ete"
                  id="formData.customer_value_ete"
                  name="formData.customer_value_ete"
                  type="number"
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
              style="border-style: solid; border-width: 1px; border-color: gray"
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
              <v-col>
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

              <v-col>
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
              <v-col>
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
              <v-col>
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

              <v-col>
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

              <v-col>
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
              style="border-style: solid; border-width: 1px; border-color: gray"
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
              <v-col>
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

              <v-col>
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

              <v-col>
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

              <v-col>
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

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="รหัสไปรษณีย์"
                  append-icon=""
                  type="number"
                  v-model="formData.zip_code_ref"
                  id="formData.zip_code_ref"
                  name="formData.zip_code_ref"
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 25 -->

            <!--  -->

            <!-- กรอบข้อมูลช่อง 26 -->
            <v-row
              class="d-flex flex-row"
              align="center"
            >
              <v-col>
                <v-text-field
                  autocomplete="true"
                  v-model="formData.price_hitting_car"
                  id="formData.price_hitting_car"
                  name="formData.price_hitting_car"
                  label="รถตีเทริ์นราคา (บาท)"
                  type="number"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-radio-group
                  v-model="formData.price_hitting_car"
                  id="formData.price_hitting_car"
                  name="formData.price_hitting_car"
                  row
                >
                  <v-radio
                    value="1"
                    label="มีเล่ม"
                  ></v-radio>
                  <v-radio
                    value="2"
                    label="ไม่มีเล่ม"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 27 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ยอดปิด (บาท)"
                  v-model="formData.price_hitting_car_close"
                  id="formData.price_hitting_car_close"
                  name="formData.price_hitting_car_close"
                  type="number"
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
                  label="หักดาวน์ (บาท)"
                  v-model="formData.payment_less"
                  id="formData.payment_less"
                  name="formData.payment_less"
                  type="number"
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
                  label="คงเหลือ (บาท)"
                  v-model="formData.payment_balance"
                  id="formData.payment_balance"
                  name="formData.payment_balance"
                  type="number"
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
                  label="โอนเข้าบัญชี"
                  v-model="formData.payment_bookbank"
                  id="formData.payment_bookbank"
                  name="formData.payment_bookbank"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 28 -->
            <v-row
              class="d-flex flex-row rounded ma-auto mt-3 mb-3"
              style="border-style: solid; border-width: 1px; border-color: gray"
            >
              <v-col>
                <v-radio-group
                  v-model="formData.hear_from_type"
                  id="formData.hear_from_type"
                  name="formData.hear_from_type"
                  row
                >
                  <template>
                    <div class="ml-3">ทราบข่าวมาจาก:</div>
                  </template>
                  <v-radio
                    value="1"
                    label="หน้าร้าน"
                  ></v-radio>
                  <v-radio
                    value="2"
                    label="เพจบริษัท"
                  ></v-radio>
                  <v-radio
                    value="3"
                    label="ลูกค้าเก่าแนะนำ"
                  ></v-radio>
                  <v-radio
                    value="4"
                    label="นายหน้า"
                  ></v-radio>
                  <v-radio
                    value="5"
                    label="ใบปลิว"
                  ></v-radio>
                  <v-radio
                    value="6"
                    label="Marketplace/ไลน์/เพจส่วนตัว"
                  ></v-radio>
                  <v-radio
                    value="7"
                    label="ออไลน์"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 29 -->
            <v-row
              class="d-flex flex-row mt-3"
              style="border-top: 2px solid black"
            >
              <v-col>
                <v-text-field
                  autocomplete="true"
                  v-model="formData.commission"
                  id="formData.commission"
                  name="formData.commission"
                  label="ค่าคอม/ค่าน้ำมัน/ค่านายหน้า (บาท)"
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
                  v-model="formData.commission_name"
                  id="formData.commission_name"
                  name="formData.commission_name"
                  label="ชื่อ"
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
                  v-model="formData.commission_tel"
                  id="formData.commission_tel"
                  name="formData.commission_tel"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 30 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ครั้งที่"
                  v-model="formData.commission_round"
                  id="formData.commission_round"
                  name="formData.commission_round"
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
                  label="โอนเข้าบัญชี"
                  v-model="formData.commission_bookbank"
                  id="formData.commission_bookbank"
                  name="formData.commission_bookbank"
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
                  label="ที่อยู่"
                  append-icon=""
                  v-model="formData.commission_address"
                  id="formData.commission_address"
                  name="formData.commission_address"
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 31 -->
            <!--  -->

            <!-- กรอบข้อมูลช่อง 32 -->
            <v-row
              class="d-flex flex-row mt-3"
              style="border-top: 2px solid black"
            >
              <v-col>
                <v-menu
                  ref="menuDate_noti"
                  v-model="menuDate_noti"
                  id="menuDate_noti"
                  name="menuDate_noti"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.date_noti"
                      id="formData.date_noti"
                      name="formData.date_noti"
                      label="วันที่แจ้ง"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      clearable
                      outlined
                      dense
                      hide-details
                      flat
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.date_noti"
                    id="formData.date_noti"
                    name="formData.date_noti"
                    locale="th-TH"
                    picker-date
                    @input="menuDate_noti = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col>
                <v-menu
                  ref="menuDate_appro"
                  v-model="menuDate_appro"
                  id="menuDate_appro"
                  name="menuDate_appro"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.date_appro"
                      id="formData.date_appro"
                      name="formData.date_appro"
                      label="วันที่อนุมัติ"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      clearable
                      outlined
                      dense
                      hide-details
                      flat
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.date_appro"
                    id="formData.date_appro"
                    name="formData.date_appro"
                    locale="th-TH"
                    picker-date
                    @input="menuDate_appro = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col>
                <v-menu
                  ref="menuDate_check_car"
                  v-model="menuDate_check_car"
                  id="menuDate_check_car"
                  name="menuDate_check_car"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      autocomplete="true"
                      v-model="formData.date_check_car"
                      id="formData.date_check_car"
                      name="formData.date_check_car"
                      label="ตรวจรถวันที่"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      outlined
                      dense
                      hide-details
                      flat
                      clearable
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.date_check_car"
                    id="formData.date_check_car"
                    name="formData.date_check_car"
                    locale="th-TH"
                    picker-date
                    @input="menuDate_check_car = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col>
                <v-menu
                  ref="menuDateTex_date"
                  v-model="menuDateTex_date"
                  id="menuDateTex_date"
                  name="menuDateTex_date"
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
                      label="วันครบภาษี"
                      v-bind="attrs"
                      v-on="on"
                      persistent-hint
                      prepend-icon=""
                      outlined
                      dense
                      hide-details
                      flat
                      clearable
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="formData.tex_date"
                    id="formData.tex_date"
                    name="formData.tex_date"
                    locale="th-TH"
                    picker-date
                    @input="menuDateTex_date = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <!--  -->
            <v-row class="d-flex flex-row">
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

              <v-col>
                <v-text-field
                  autocomplete="true"
                  label="ประกันภัยประเภท"
                  v-model="formData.insurance_type"
                  id="formData.insurance_type"
                  name="formData.insurance_type"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row
              class="d-flex flex-row rounded ma-auto mt-3"
              align="center"
              justify="center"
            >
              <h2>สิ่งที่ต้องมีก่อนปล่อยให้ลูกค้า</h2>
            </v-row>

            <v-row class="d-flex flex-row mt-3">
              <v-col>
                <v-textarea
                  rows="2"
                  label="รายการที่ช่างต้องทำ"
                  v-model="formData.todo_list"
                  id="formData.todo_list"
                  name="formData.todo_list"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-textarea>
              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 33 -->
            <v-row
              class="d-flex flex-row rounded ma-auto mt-3"
              style="border-style: solid; border-width: 1px; border-color: gray"
              align="center"
              justify="center"
            >
              <v-col>
                <v-radio-group
                  v-model="formData.sign_tex"
                  id="formData.sign_tex"
                  name="formData.sign_tex"
                  row
                >
                  <template>
                    <div class="ml-3">1.ป้ายภาษี:</div>
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
              <v-col>
                <v-radio-group
                  v-model="formData.act"
                  id="formData.act"
                  name="formData.act"
                  row
                >
                  <template>
                    <div class="ml-3">2.พรบ:</div>
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
              <v-col>
                <v-radio-group
                  v-model="formData.manual"
                  id="formData.manual"
                  name="formData.manual"
                  row
                >
                  <template>
                    <div class="ml-3">3.หน้าเล่มคู่มือ:</div>
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

            <!-- กรอบข้อมูลช่อง 34 -->
            <v-row
              class="d-flex flex-row rounded ma-auto mt-3"
              style="border-style: solid; border-width: 1px; border-color: gray"
            >
              <v-col>
                <v-radio-group
                  row
                  v-model="formData.number_peel"
                  id="formData.number_peel"
                  name="formData.number_peel"
                >
                  <template>
                    <div class="ml-3">4.เลขลอก:</div>
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
              <v-col>
                <v-radio-group
                  v-model="formData.sign_license"
                  id="formData.sign_license"
                  name="formData.sign_license"
                  row
                >
                  <template>
                    <div class="ml-3">5.ทะเบียน:</div>
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
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiBookings from "@/Api/apiBookings";
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiAmphures from "@/Api/apiAmphures";
import * as apiDistricts from "@/Api/apiDistricts";
export default {
  props: [
    "dialogBooking",
    "actionBooking",
    "idWork",
    "idCustomer",
    "idCar",
    "car_no",
    "formTitleBooking",
  ],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      menuDateCreated_at: false,
      menuDateCustomer_bath_date_transfer: false,
      menuDateCustomer_bath_date_signed: false,
      menuDateCustomer_car_date_release: false,

      menuDate_appro: false,
      menuDate_noti: false,
      menuDate_check_car: false,
      menuDateTex_date: false,
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],

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
      idBooking: "",
      formDisabled: true,
    };
  },
  async mounted() {},
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
      this.$nextTick(() => {
        for (let index = 0; index < this.dataAmphures.length; index++) {
          if (
            this.dataAmphures[index].province_id == this.formData.province_id
          ) {
            this.dataSelectAmphures.push(this.dataAmphures[index]);
          }
        }
      });
    },
    async selectSeeProvinceCurrent() {
      this.dataSelectAmphuresCurrent = [];
      this.$nextTick(() => {
        for (let index = 0; index < this.dataAmphuresCurrent.length; index++) {
          if (
            this.dataAmphuresCurrent[index].province_id ==
            this.formData.province_id_current
          ) {
            this.dataSelectAmphuresCurrent.push(
              this.dataAmphuresCurrent[index]
            );
          }
        }
      });
    },
    async selectSeeProvinceRef() {
      this.dataSelectAmphuresRef = [];
      this.$nextTick(() => {
        for (let index = 0; index < this.dataAmphuresRef.length; index++) {
          if (
            this.dataAmphuresRef[index].province_id ==
            this.formData.province_id_ref
          ) {
            this.dataSelectAmphuresRef.push(this.dataAmphuresRef[index]);
          }
        }
      });
    },
    async selectSeeAmphure() {
      // console.log(this.formData.amphure_id);
      this.dataSelectDistricts = [];
      this.$nextTick(() => {
        for (let index = 0; index < this.dataDistricts.length; index++) {
          if (
            this.dataDistricts[index].amphure_id == this.formData.amphure_id
          ) {
            this.dataSelectDistricts.push(this.dataDistricts[index]);
          }
        }
      });

      this.$nextTick(() => {
        for (let index = 0; index < this.dataAmphures.length; index++) {
          if (this.dataAmphures[index].id == this.formData.amphure_id) {
            this.formData.province_id = this.dataAmphures[index].province_id;
            // console.log(this.dataAmphures[index]);
          }
        }
      });
    },
    async selectSeeAmphureCurrent() {
      // console.log(this.formData.amphure_id);
      this.dataSelectDistrictsCurrent = [];
      this.$nextTick(() => {
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
      });
      this.$nextTick(() => {
        for (let index = 0; index < this.dataAmphuresCurrent.length; index++) {
          if (
            this.dataAmphuresCurrent[index].id ==
            this.formData.amphure_id_current
          ) {
            this.formData.province_id_current =
              this.dataAmphuresCurrent[index].province_id;
            // console.log(this.dataAmphures[index]);
          }
        }
      });
    },
    async selectSeeAmphureRef() {
      // console.log(this.formData.amphure_id);
      this.dataSelectDistrictsRef = [];
      this.$nextTick(() => {
        for (let index = 0; index < this.dataDistrictsRef.length; index++) {
          if (
            this.dataDistrictsRef[index].amphure_id ==
            this.formData.amphure_id_ref
          ) {
            this.dataSelectDistrictsRef.push(this.dataDistrictsRef[index]);
          }
        }
      });

      this.$nextTick(() => {
        for (let index = 0; index < this.dataAmphuresRef.length; index++) {
          if (this.dataAmphuresRef[index].id == this.formData.amphure_id_ref) {
            this.formData.province_id_ref =
              this.dataAmphuresRef[index].province_id;
            // console.log(this.dataAmphures[index]);
          }
        }
      });
    },
    async selectSeeDistrict() {
      this.formData.zip_code = "";

      this.$nextTick(() => {
        for (let index = 0; index < this.dataDistricts.length; index++) {
          if (this.dataDistricts[index].id == this.formData.district_id) {
            // this.dataSelectDistricts.push(this.dataDistricts[index]);
            this.formData.zip_code = this.dataDistricts[index].zip_code;
          }
        }
      });
    },
    async selectSeeDistrictCurrent() {
      this.$nextTick(() => {
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
      });
      this.formData.zip_code_current = "";
    },
    async selectSeeDistrictRef() {
      this.formData.zip_code_ref = "";
      this.$nextTick(() => {
        for (let index = 0; index < this.dataDistrictsRef.length; index++) {
          if (
            this.dataDistrictsRef[index].id == this.formData.district_id_ref
          ) {
            // this.dataSelectDistricts.push(this.dataDistricts[index]);
            this.formData.zip_code_ref = this.dataDistrictsRef[index].zip_code;
          }
        }
      });
    },
    async onAction() {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.formData.action == "add") {
          const response = await apiBookings.store(this.formData);
          // this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Booking");
          } else {
            this.$emit("error", "Booking");
          }
        } else if (this.formData.action == "edit") {
          const response = await apiBookings.update(
            this.formData.id,
            this.formData
          );
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Booking");
          } else {
            this.$emit("error", "Booking");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
    async print_a4() {
      let routeData = this.$router.resolve({
        name: "prints-print_booking",
        query: { idBooking: this.formData.id },
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
    async dialogBooking() {
      this.dialogDeleteComponent = this.dialogBooking;
      if (this.dialogBooking) {
        this.formDataLoading = true;
        this.formDisabled = true;
        await this.getProvinces();
        await this.getAmphures();
        await this.getDistricts();
        if (this.actionBooking == "check") {
          const response = await apiBookings.checkBooking(
            this.idWork,
            this.idCar,
            this.idCustomer
          );

          await this.$refs.form.reset();
          // console.log(response.data);

          this.formData = await response.data;
          this.formData.user_id = this.user_id;
          await this.selectSeeAmphure();
          await this.selectSeeAmphureCurrent();
          await this.selectSeeAmphureRef();
        }
        this.formDisabled = false;
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
