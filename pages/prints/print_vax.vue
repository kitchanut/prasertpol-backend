<template>
  <div size="A4">
    <v-card outlined color="transparent">
      <v-form ref="form">
        <v-card-text>
          <v-row class="mt-5">
            <v-col cols="6" class="text-left">
              <span>เล่มที่ {{ formData.book_no }} </span>
            </v-col>
            <v-col cols="6" class="text-right">
              <span>เลขที่ {{ formData.number_no }} </span>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row">
            <v-col align="center">
              <br />
              <h2>บริษัทประเสริฐผลรุ่งเรืองนครพนม จำกัด (สำนักงานใหญ่)</h2>
              <br />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                216/111 ถนนนิตโย ต.ในเมือง อ.เมือง จ.นครพนม 48000 โทร.042-513332
                แฟกซ์ 042-513588
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span> เลขประจำตัวผู้เสียภาษีอากร 0485548000108 </span>
            </v-col>
            <v-col align="right">
              <span class="b-solid">
                อัตราภาษีมูลค่าเพิ่ม {{ formData.receiving_money_vat }} (%)
              </span>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row">
            <v-col align="center">
              <br />
              <h2>ใบกำกับภาษี/ใบเสร็จรับเงิน</h2>
              <br />
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row b-solid">
            <v-col cols="9">
              <span class="text-left">นามผู้ซื้อ {{ formData.bank_name }}</span>
            </v-col>
            <v-col cols="3">
              <span
                >วันที่:
                {{
                  formData.receiving_money_date == null
                    ? ""
                    : $moment(formData.receiving_money_date)
                        .add(543, "year")
                        .format("DD MMMM YYYY")
                }}</span
              >
            </v-col>
            <v-col cols="12">
              <span>ที่อยู่ {{ formData.bank_address }}</span>
            </v-col>
            <v-col cols="12">
              <span>เลขประจำตัวผู้เสียภาษีอากร {{ formData.bank_idvat }}</span>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-row">
            <table>
              <tr>
                <th align="center" style="padding: 5px 0">ยี่ห้อ</th>
                <th align="center" style="padding: 5px 0">เลขทะเบียน</th>
                <th align="center" style="padding: 5px 0">ทะเบียนจังหวัด</th>
                <th align="center" style="padding: 5px 0">หมายเลขเครื่อง</th>
                <th align="center" style="padding: 5px 0">หมายเลขตัวถัง</th>
                <th align="center" style="padding: 5px 0">จำนวนเงิน</th>
              </tr>
              <tr>
                <td align="center" style="padding: 5px 0">
                  <span>{{
                    formData.car_model_name == undefined
                      ? ""
                      : formData.car_model_name
                  }}</span>
                  <div>{{ formData.car.car_series.car_series_name }}</div>
                </td>
                <td align="center" style="padding: 5px 0">
                  <span style="font-size: 16px">{{
                    formData.car_regis == undefined ? "" : formData.car_regis
                  }}</span>
                </td>
                <td align="center" style="padding: 5px 0">
                  <span style="font-size: 16px">{{
                    formData.name_th == undefined ? "" : formData.name_th
                  }}</span>
                </td>
                <td align="center" style="padding: 5px 0">
                  <div>
                    {{
                      formData.car_no_engine == undefined
                        ? ""
                        : formData.car_no_engine
                    }}
                  </div>
                  <div style="font-size: 16px">
                    ({{ formData.receivingMoney_type_str }})
                  </div>
                </td>
                <td align="center" style="padding: 5px 0">
                  <div>
                    {{
                      formData.car_no_body == undefined
                        ? ""
                        : formData.car_no_body
                    }}
                  </div>
                  <div style="font-size: 16px">
                    ({{ formData.customer_name }})
                  </div>
                </td>
                <td align="right" style="padding-right: 5px">
                  <div style="font-size: 0.875rem">
                    {{
                      formData.car_price == undefined
                        ? 0
                        : Number(formData.car_price).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                  </div>
                </td>
              </tr>

              <tr>
                <td colspan="4"></td>

                <td align="center" style="padding: 5px 0">รวมราคาทั้งสิ้น</td>

                <td align="right" style="padding-right: 5px">
                  {{
                    formData.receiving_money_sum == undefined
                      ? 0
                      : Number(formData.receiving_money_sum).toLocaleString(
                          "th-TH",
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }
                        )
                  }}
                </td>
              </tr>

              <tr>
                <td colspan="4"></td>

                <td align="center" style="padding: 5px 0">
                  จำนวนภาษีมูลค่าเพิ่ม
                </td>
                <td align="right" style="padding-right: 5px">
                  {{
                    formData.receiving_money_sum_vat == undefined
                      ? 0
                      : Number(formData.receiving_money_sum_vat).toLocaleString(
                          "th-TH",
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }
                        )
                  }}
                </td>
              </tr>

              <tr>
                <td colspan="4" align="center" style="padding: 5px 0">
                  {{
                    formData.receiving_money_all_str == undefined
                      ? 0
                      : formData.receiving_money_all_str
                  }}
                </td>
                <td align="center" style="padding: 5px 0">
                  จำนวนเงินรวมทั้งสิ้น
                </td>
                <td align="right" style="padding-right: 5px">
                  {{
                    formData.receiving_money_all == undefined
                      ? 0
                      : Number(formData.receiving_money_all).toLocaleString(
                          "th-TH",
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }
                        )
                  }}
                </td>
              </tr>
            </table>
          </v-row>
          <br /><br /><br /><br /><br />
          <v-row class="d-flex flex-row">
            <v-col align="center">
              <span
                >วันที่:
                {{
                  formData.receiving_money_date == null
                    ? ""
                    : $moment(formData.receiving_money_date)
                        .add(543, "year")
                        .format("DD MMMM YYYY")
                }}</span
              >
            </v-col>

            <v-col align="center">
              <p>........................</p>
              <p>ผู้รับเงิน</p>
            </v-col>
            <v-col align="center">
              <p>........................</p>
              <p>เจ้าหน้าที่ผู้รับมอบอำนาจ</p>
            </v-col>
          </v-row>

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
            <span>ปริ้น</span>
          </v-btn>
        </v-card-text>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import * as apiReceiving_money from "@/Api/apiReceiving_money";

export default {
  layout: "print",
  data() {
    return {
      formData: {
        car: {
          car_series: {},
        },
      },
    };
  },
  async mounted() {
    this.print();
    // console.log($nuxt.$route.name);
  },
  methods: {
    async print() {
      // console.log(this.idBooking);
      const response = await apiReceiving_money.printReceivingMoney(
        this.$route.query.id
      );
      this.$refs.form.reset();
      const self = this;
      this.$nextTick(() => {
        self.formData = response.data;
      });
      console.log(response.data);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
.v-application {
  font-family: "Sarabun", serif !important;
}
</style>

<style>
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
    font-family: "Taviraj", serif !important;
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
.b-solid-t {
  border-style: solid;
  border-width: thin;
}

p {
  font-size: 16px;
}
span {
  font-size: 13px;
  font-weight: 500;
}
h2,
h3,
h4,
h5 {
  font-weight: 200;
}
h5 {
  font-size: 14px !important;
  font-weight: lighter !important;
  font-family: "Taviraj", serif;
}

.space {
  margin-top: 2.8% !important;
}
.space1 {
  margin-top: 2% !important;
}
.b-solid {
  border-style: solid;
  border-width: thin;
  padding: 7px;
  /* border-right-style: solid;
  border-left-style: solid;
  border-top-style: solid;
  border-width: thin; */
}
.b-solid-b {
  /* border-style: solid;
  border-width: thin; */
  border-right-style: solid;
  border-left-style: solid;
  border-bottom-style: solid;
  border-width: thin;
}
.mg {
  margin: 0;
}
.title {
  margin-top: 40px !important;
}
.title .f-left {
  float: left;
}
.title .f-right {
  float: right;
}
.mtc {
  margin-top: 10px !important;
}
table,
td,
th {
  border: 1px solid black;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>

<style scoped>
body {
  font-family: "Taviraj", serif !important;
}
</style>
