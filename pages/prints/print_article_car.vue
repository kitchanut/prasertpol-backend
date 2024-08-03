<template>
  <div size="A4">
    <v-card class="elevation-0">
      <v-form ref="form">
        <v-card-text>
          <h3 class="text-center">บจก. ประเสริฐผลรุ่งเรืองนครพนม จำกัด</h3>
          <br />
          <h3 class="text-center">216/111 ถ. นิตโย ต. ในเมือง อ. เมืองนครพนม จ.นครพนม 48000</h3>
          <br />
          <br />

          <h3 class="text-center">ฉลากสินค้า "รถยนต์ที่ใช้แล้ว"</h3>
          <br />
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-qrcode</v-icon>
                ลำดับรถ:
                <span>
                  {{ formDataBuy.queryCar == null ? "-" : formDataBuy.queryCar.car_no }}
                </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-home</v-icon>
                ซื้อรถจาก:
                <span>
                  {{ formDataBuy.partner_car == null ? "-" : formDataBuy.partner_car.partner_car_name }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />
          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car </v-icon>
                ประเภทรถ:
                <span>
                  {{
                    formDataBuy.queryCar.car_types == null
                      ? "-"
                      : formDataBuy.queryCar.car_types.car_type_name + formDataBuy.queryCar.car_types.car_type_name_en
                  }}</span
                >
              </h5>
            </v-col>

            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car </v-icon>
                ยี่ห้อรถ:

                <span>
                  {{
                    formDataBuy.queryCar.car_models == null ? "-" : formDataBuy.queryCar.car_models.car_model_name
                  }}</span
                >
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car-multiple </v-icon>
                รุ่น:
                <span>
                  {{
                    formDataBuy.queryCar.car_series == null ? "-" : formDataBuy.queryCar.car_series.car_series_name
                  }}</span
                >
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car-connected </v-icon>
                รุ่นย่อย:
                <span>
                  {{
                    formDataBuy.queryCar.car_serie_sub == null
                      ? "-"
                      : formDataBuy.queryCar.car_serie_sub.car_serie_sub_name
                  }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-engine </v-icon>
                เครื่องยนต์:
                <span>
                  {{
                    formDataBuy.queryCar.car_engine_amount == null
                      ? "-"
                      : Number(formDataBuy.queryCar.car_engine_amount).toLocaleString("th-TH", {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        })
                  }}
                </span>
                CC
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-engine </v-icon>
                เลขเครื่อง:
                <span>
                  {{ formDataBuy.queryCar.car_no_engine == null ? "-" : formDataBuy.queryCar.car_no_engine }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-engine </v-icon>
                เลขตัวถัง:
                <span>
                  {{ formDataBuy.queryCar.car_no_body == null ? "-" : formDataBuy.queryCar.car_no_body }}
                </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car-shift-pattern </v-icon>
                เกียร์:
                <span>
                  {{
                    formDataBuy.queryCar == null
                      ? "-"
                      : formDataBuy.queryCar.car_gear == 1
                      ? "อัตโนมัติ (AT)"
                      : "ธรรมดา (MT)"
                  }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car-arrow-right </v-icon>
                ปีผลิต:
                <span>
                  <span>
                    {{ formDataBuy.queryCar.car_year == null ? "-" : formDataBuy.queryCar.car_year }}
                  </span>
                </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car-arrow-right </v-icon>

                ปีจดทะเบียน:

                <span>
                  {{
                    formDataBuy.queryCar.car_mark_year == null
                      ? "-"
                      : $moment(formDataBuy.queryCar.car_mark_year).add(543, "year").format("DD MMMM YYYY")
                  }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-speedometer </v-icon>
                เลขไมค์:

                <span>
                  {{
                    formDataBuy.queryCar.car_mileage == null
                      ? "-"
                      : Number(formDataBuy.queryCar.car_mileage).toLocaleString("th-TH", {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        })
                  }}
                </span>
                กม.
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-speedometer </v-icon>
                เลขไมค์ประกัน:

                <span>
                  {{
                    formDataBuy.queryCar.car_mileage_balance == null
                      ? "-"
                      : Number(formDataBuy.queryCar.car_mileage_balance).toLocaleString("th-TH", {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        })
                  }}
                </span>
                กม.
              </h5>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car-turbocharger </v-icon>
                ใช้เชื้อเพลิง:

                <span>
                  {{
                    formDataBuy.queryCar.fuel_type == null
                      ? "-"
                      : formDataBuy.queryCar.fuel_type == 1
                      ? "น้ำมัน"
                      : formDataBuy.queryCar.fuel_type == 2
                      ? "แก๊ส"
                      : formDataBuy.queryCar.fuel_type == 3
                      ? "ไฟฟ้า"
                      : formDataBuy.queryCar.fuel_type == 4
                      ? "น้ำมัน/แก๊ส"
                      : "น้ำมัน/ไฟฟ้า"
                  }}
                </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-car-tire-alert </v-icon>
                ชนิดเชื้อเพลิง:

                <span>
                  {{ formDataBuy.queryCar.fuels == null ? "-" : formDataBuy.queryCar.fuels.fuel_name }}
                </span>
              </h5>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <h5>
                <v-icon left> mdi-car-brake-abs </v-icon>
                ABS:

                <span>
                  {{ formDataBuy.queryCar == null ? "-" : formDataBuy.queryCar.abs == 1 ? "มี" : "ไม่มี" }}
                </span>
              </h5>
            </v-col>
            <v-col cols="4">
              <h5>
                <v-icon left> mdi-airbag </v-icon>
                AIRBAG:

                <span>
                  {{ formDataBuy.queryCar == null ? "-" : formDataBuy.queryCar.airbag == 1 ? "มี" : "ไม่มี" }}
                </span>
              </h5>
            </v-col>

            <v-col cols="4">
              <h5>
                <v-icon left> mdi-monitor-speaker </v-icon>
                CD:

                <span>
                  {{ formDataBuy.queryCar == null ? "-" : formDataBuy.queryCar.cd == 1 ? "มี" : "ไม่มี" }}
                </span>
              </h5>
            </v-col>
          </v-row>

          <br />
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-card-bulleted-settings-outline </v-icon>
                ทะเบียนเก่า:

                <span>
                  {{ formDataBuy.queryCar.car_regis == null ? "-" : formDataBuy.queryCar.car_regis }}
                </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-map-marker </v-icon>
                ทะเบียนจังหวัด:

                <span>
                  {{ formDataBuy.queryCar.province == null ? "-" : formDataBuy.queryCar.province.name_th }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-card-bulleted-settings-outline </v-icon>
                ทะเบียนใหม่:

                <span>
                  {{ formDataBuy.queryCar.car_regis_current == null ? "-" : formDataBuy.queryCar.car_regis_current }}
                </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-map-marker </v-icon>
                ทะเบียนจังหวัด:

                <span>
                  {{
                    formDataBuy.queryCar.province_current == null ? "-" : formDataBuy.queryCar.province_current.name_th
                  }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-human</v-icon>
                เจ้าของลำดับที่:
                <span>
                  {{ formDataBuy.queryCar == null ? "-" : formDataBuy.queryCar.owner_no }}
                </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                ชื่อ:
                <span>
                  {{ formDataBuy.queryCar == null ? "-" : formDataBuy.queryCar.owner_name }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="12">
              <h5>
                <v-icon left> mdi-sitemap</v-icon>
                ภาระผูกพัน:
                <span>
                  {{ formDataBuy.queryCar.obligation == 1 ? "มี" : "ไม่มี" }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="12">
              <h5 v-if="formDataBuy.queryCar.water_type == 1">
                <v-icon left> mdi-water</v-icon>
                ระดับน้ำท่วม:
                <span>
                  {{ formDataBuy.queryCar.water_text }}
                </span>
                ซม.
              </h5>
              <h5 v-else>
                <v-icon left> mdi-water</v-icon>
                เคยน้ำท่วม: <span>ไม่เคย</span>
              </h5>
            </v-col>
          </v-row>
          <br />

          <v-row>
            <v-col cols="12">
              <h5 v-if="formDataBuy.queryCar.danger_type == 1">
                <v-icon left> mdi-carabiner</v-icon>
                ข้อมูลประสบภัย:
                <span>
                  {{ formDataBuy.queryCar.danger_text }}
                </span>
              </h5>
              <h5 v-else>
                <v-icon left> mdi-carabiner</v-icon>
                เคยประสบภัย: <span>ไม่เคย</span>
              </h5>
            </v-col>
          </v-row>
          <br />
          <br />

          <v-row>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-map-marker</v-icon>
                สาขา:
                <span>
                  {{ formDataBuy.branch == null ? "-" : formDataBuy.branch.branch_name }}
                </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                <v-icon left> mdi-cash-usd</v-icon>
                ขายในราคา:

                <span>
                  {{
                    formDataBuy.queryCar.car_price_vat == null
                      ? "-"
                      : Number(formDataBuy.queryCar.car_price_vat).toLocaleString("th-TH", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                  }}
                </span>

                บ. (ไม่รวม vat)
              </h5>
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>

      <br />

      <v-btn
        class="noprint"
        block
        dark
        elevation="2"
        style="width: 100%"
        color="red darken-1"
        onclick="window.print();"
      >
        ปริ้น
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import * as apiCars from "@/Api/apiCars";

export default {
  layout: "print",
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      formDataBuy: {
        customer: [
          {
            customer_name: "",
          },
        ],
        working: [
          {
            created_at: "",
          },
        ],
        receiving_moneys: [
          {
            receiving_money_all: 0,
          },
        ],
        queryCar: [
          {
            car_models: [
              {
                car_model_name: "",
              },
            ],
            car_buy: 0,
            created_at: "",
          },
        ],
        receiving_car: [
          {
            created_at: "",
          },
        ],
        partner_car: [
          {
            partner_car_name: "",
          },
        ],
        user: [
          {
            first_name: "",
          },
        ],
        sale: [
          {
            first_name: "",
          },
        ],
        dataPreviewBanks: [],
      },
    };
  },
  async mounted() {
    this.print();
    // console.log($nuxt.$route.name);
  },
  methods: {
    async print() {
      const response = await apiCars.getAllinfo(this.$route.query.code, this.user_group_permission);
      // console.log(response);
      this.$nextTick(() => {
        this.$refs.form.reset();
        const self = this;
        this.$nextTick(async () => {
          self.formDataBuy = await response.data;
          console.log(response.data);
        });
      });
    },
  },
};
</script>
<style>
/* .row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -30px !important;
} */
.v-text-field--outlined fieldset {
  border: 0;
}

.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100% !important;
  padding: 8px !important;
}

div[size="A4"] {
  background: white;
  width: 21cm;
  height: 29.7cm;
  display: block;
  margin: 0 auto;
  /* margin-bottom: 0.5cm; */
  /* border-style: solid;
  border-width: thin; */
}
@media print {
  html,
  body {
    width: 210mm;
    height: 297mm;
    font-family: "Taviraj", serif;
  }
  .noprint {
    visibility: hidden;
  }
  @page :footer {
    display: none;
  }

  @page :header {
    display: none;
  }
  /* ... the rest of the rules ... */
}
p {
  font-size: 18px !important;
  font-weight: normal !important;
}
span {
  font-size: 14px !important;
  font-weight: bold !important;
}
h2,
h5,
h4,
h5 {
  font-weight: 100 !important;
}
h5 {
  font-size: 14px !important;
  font-weight: lighter !important;
  font-family: "Taviraj", serif;
}
.space {
  margin-top: 0% !important;
}
.space1 {
  margin-top: 2% !important;
}
.b-solid-t {
  border-style: solid;
  border-width: thin;
}
.mg {
  margin: 0;
}
</style>
