<template>
  <div size="A4">
    <v-card class="elevation-0">
      <v-form ref="form">
        <div align="center">
          <h2>หลักฐานการรับเงิน ธุรกิจการขายรถยนต์ใช้แล้ว</h2>
        </div>
        <v-card-text class="b-solid-t">
          <div>
            <v-row class="d-flex flex-row">
              <v-col cols="8"></v-col>
              <v-col cols="4">
                <h5>
                  วันที่บันทึก:
                  <!-- <span>{{ formData.created_at }}</span> -->
                  <span>{{
                    formData.created_at == null
                      ? ""
                      : $moment(formData.date_dcreated_atocument)
                          .add(543, "year")
                          .format("DD MMMM YYYY ( HH:mm น.)")
                  }}</span>
                </h5>
              </v-col>
            </v-row>
            <!-- กรอบข้อมูลช่อง 1 -->
            <v-row
              class="d-flex flex-row mt-1"
              style="
                border-top: 2px solid black;
                border-bottom: 2px solid black;
              "
            >
              <v-col
                cols="5"
                class="text-center"
                style="border-right: 2px solid black"
              >
                <h5>บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด</h5>
                <h5>
                  ที่อยู่ : 216/111 นิตโย ตำบลในเมือง อำเภอเมืองนครพนม นครพนม
                  48000
                </h5>
                <h5>โทร: 042-51332 แฟกซ์: 042-513588</h5>
                <h5>เลขประจำตัวผู้เสียภาษีอาการ</h5>
                <h5>0485548000108</h5>
              </v-col>
              <v-col>
                <v-row>
                  <v-col>
                    <h5>ชื่อ-นามสกุล/ที่อยู่ ของลูกค้า(ผู้ซื้อ)</h5>
                  </v-col>
                </v-row>

                <v-row class="d-flex flex-row">
                  <v-col>
                    <h5>
                      ชื่อ:
                      <span>{{ formData.customer_name }}</span>
                    </h5>
                  </v-col>
                </v-row>
                <v-row class="d-flex flex-row space">
                  <v-col>
                    <h5>
                      ที่อยู่:
                      <span>
                        {{ formData.customer_address }}
                        {{ " " }}
                        {{
                          formData.Amphure == null
                            ? ""
                            : formData.Amphure.name_th
                        }}
                        {{ " " }}
                        {{
                          formData.District == null
                            ? ""
                            : formData.District.name_th
                        }}
                        {{ " " }}
                        {{
                          formData.Province == null
                            ? ""
                            : formData.Province.name_th
                        }}
                      </span>
                    </h5>
                  </v-col>
                </v-row>
                <v-row class="d-flex flex-row space">
                  <v-col>
                    <h5>
                      โทร: <span>{{ formData.customer_tel }}</span>
                    </h5>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!--  -->
            <br />
            <!-- กรอบข้อมูลช่อง 2 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h4>รายละเอียดรถยนต์</h4>
              </v-col>
              <v-col>
                <h5>
                  ลำดับรถ: <span>{{ formData.car_no }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 3 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ยี่ห้อ: <span>{{ formData.car_model_name }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  หมายเลขเครื่องยนต์: <span>{{ formData.car_no_engine }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 4 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  รุ่น: <span>{{ formData.car_series_name }}</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  หมายเลขตัวถัง: <span>{{ formData.car_no_body }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 5 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ปี: <span> {{ formData.car_year }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  สีรถ: <span> {{ formData.color_name }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  หมายเลขทะเบียน: <span> {{ formData.car_regis }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 6 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ระยะทางการใช้งาน:
                  <span>{{
                    formData.car_mileage == null
                      ? ""
                      : Number(formData.car_mileage).toLocaleString("th-TH", {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        })
                  }}</span>
                  กม.
                </h5>
              </v-col>

              <v-col>
                <h5>
                  ภาระผูกพัน(ถ้ามี): <span>{{ formData.obligation }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 7 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ผู้ถือกรรมสิทธิ์: <span>{{ formData.owner }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 8 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <h5>
                  ผู้ครอบครอง: <span>{{ formData.occupy }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 9 -->
            <v-row
              class="d-flex flex-row rounded mt-3 mb-3"
              style="border-style: solid; border-width: 1px; border-color: gray"
            >
              <v-col>
                <v-col>
                  <h5>
                    รายการชำระเงินค่ารถยนต์:

                    <span v-if="formData.payment_type == 1">วางเงินจอง</span>
                    <span v-if="formData.payment_type == 2">วางเงินดาวน์</span>
                    <span v-if="formData.payment_type == 3">ชำระเงินสด</span>
                  </h5>
                </v-col>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 10 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <h5>
                  จำนวนเงิน:
                  <span>
                    {{
                      formData.bath == undefined
                        ? 0
                        : Number(formData.bath).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                    บาท
                  </span>
                  <span>({{ formData.bath_string }})</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 11 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <h5>
                  ผู้ขายตกลงส่งมอบสำเนาสมุดคู่มือจดทะเบียนรถยนต์ในวันที่:
                  <!-- <span> {{ formData.date_con_reg }}</span> -->
                  <span>{{
                    formData.date_con_reg == null
                      ? ""
                      : $moment(formData.date_con_reg)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                  }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 12 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <h5>
                  ผู้ขายตกลงส่งมอบรถในวันที่:
                  <!-- <span> {{ formData.date_deliver }}</span> -->
                  <span>{{
                    formData.date_deliver == null
                      ? ""
                      : $moment(formData.date_deliver)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                  }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 13 -->
            <v-row
              class="d-flex flex-row"
              style="border-bottom: 2px solid black"
            >
              <v-col>
                <h5>
                  ผู้ขายตกลงส่งมอบสมุดคู่มือจดทะเบียนพร้อมเอกสารที่จำเป็นสำหรับการจดทะเบียนรถยนต์ตามที่กรมขนส่งทางบกกำหนดให้กับผู้ซื้อในวันที่:
                  <!-- <span> {{ formData.date_document }}</span> -->
                  <span>{{
                    formData.date_document == null
                      ? ""
                      : $moment(formData.date_document)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                  }}</span>
                </h5>
              </v-col>
            </v-row>

            <!--  -->

            <!-- กรอบข้อมูลช่อง 15 -->
            <br />
            <v-row class="d-flex flex-row space">
              <v-col class="text m-2">
                <h5>
                  ในกรณีทีไม่สามารถดำเนินการจดทะเบียนรถยนต์ใช้แล้วเป็นชื่อผู้บริโภคหรือไม่สามารถส่งมอบรถยนต์ใช้แล้วให้ผู้บริโภคหรือมีการบอกเลิกสัญญาขายรถยนต์ใช้แล้วโดยมิใช่ความผิดของผู้บริโภค
                  ผู้ประกอบการธธุระกิจคืนเงินจำนวนดังกล่าวให้ผู้บริโภค
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 16 -->
            <v-row class="d-flex flex-row">
              <v-col>
                <h5 class="text-center">
                  ลงชื่อ <span>...............................</span>
                </h5>
              </v-col>

              <v-col>
                <h5 class="text-center">
                  ลงชื่อ <span>...............................</span>
                </h5>
              </v-col>

              <v-col>
                <h5 class="text-center">
                  ลงชื่อ <span>...............................</span>
                </h5>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-row">
              <v-col>
                <h5 class="text-center">
                  (.........................................)
                </h5>
              </v-col>
              <v-col>
                <h5 class="text-center">
                  (.........................................)
                </h5>
              </v-col>
              <v-col>
                <h5 class="text-center">
                  (.........................................)
                </h5>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-row">
              <v-col>
                <h5 class="text-center">ผู้ซื้อ</h5>
              </v-col>
              <v-col>
                <h5 class="text-center">ผู้ขาย</h5>
              </v-col>
              <v-col>
                <h5 class="text-center">ผู้มีอำนาจออกหลักฐานการรับเงิน</h5>
              </v-col>
            </v-row>
            <!--  -->
          </div>
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
        <span>ปริ้น</span>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import * as apiFinancial from "@/Api/apiFinancial";
export default {
  layout: "print",
  data() {
    return {
      btn_print: false,
      formData: {},
      carParts: [],
      dataUnit: [],
    };
  },
  async mounted() {
    this.print();
    // console.log($nuxt.$route.name);
  },

  methods: {
    async print() {
      const response = await apiFinancial.printFinancial(
        this.$route.query.idFinancial
      );
      this.$refs.form.reset();
      this.formData = response.data;
      // console.log(response);
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
        display: none
    }

    @page :header {
        display: none
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
