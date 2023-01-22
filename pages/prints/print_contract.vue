<template>
  <div size="A4">
    <v-card class="elevation-0">
      <v-form ref="form">
        <div align="center">
          <h2>สัญญาขายรถยนต์</h2>
        </div>
        <v-card-text class="b-solid-t">
          <div>
            <!-- กรอบข้อมูลช่อง 2 -->
            <!-- กรอบข้อมูลช่อง 9 -->
            <div class="ma-3">
              <v-row class="d-flex flex-row">
                <v-col cols="7"> </v-col>
                <v-col cols="4">
                  <h5>
                    เขียนที่: <span>{{ formData.contract_at }}</span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 10 -->
              <v-row class="d-flex flex-row space">
                <v-col cols="7"></v-col>
                <v-col cols="4">
                  <h5>
                    วันที่ปล่อย
                    <span
                      >{{
                        formData.contract_date == null
                          ? ""
                          : $moment(formData.contract_date)
                              .add(543, "year")
                              .format("DD MMMM YYYY")
                      }}
                    </span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->
              <!--  -->

              <!-- กรอบข้อมูลช่อง 3 -->
              <v-row class="d-flex flex-row space">
                <v-col cols="1"> </v-col>
                <v-col>
                  <h5>
                    ข้าพเจ้า:
                    <span> บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด </span>
                  </h5>
                </v-col>
                <v-col>
                  <h5>
                    ตกลงขายรถยนต์:
                    <span>{{ formData.car_model_name }}</span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->
              <!-- กรอบข้อมูลช่อง 4 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    หมายเลขทะเบียน:
                    <span>{{ formData.car_regis }}</span>
                  </h5>
                </v-col>
                <v-col>
                  <h5>
                    หมายเลขเครื่องยนต์:
                    <span>{{ formData.car_no_engine }}</span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 5 -->
              <v-row class="d-flex flex-row space">
                <v-col cols="6">
                  <h5>
                    หมายเลขตัวถัง: <span>{{ formData.car_no_body }}</span>
                  </h5>
                </v-col>

                <v-col>
                  <h5>
                    ปีผลิต (ค.ศ.):
                    <span>{{
                      formData.car_year == null
                        ? ""
                        : $moment(formData.car_year).format("DD/MM/YYYY")
                    }}</span>
                  </h5>
                </v-col>

                <v-col>
                  <h5>
                    สี: <span>{{ formData.color_name }}</span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 6 -->
              <v-row class="d-flex flex-row space">
                <v-col cols="1"> </v-col>
                <v-col>
                  <h5>
                    ขายให้แก่: <span>{{ formData.customer_name }}</span>
                  </h5>
                </v-col>

                <v-col>
                  <h5>
                    อายุ (ปี):
                    <span>{{
                      543 +
                      Number(new Date().getFullYear()) -
                      Number(formData.customer_birthday_year)
                    }}</span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->
              <!-- กรอบข้อมูลช่อง 6 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    ที่อยู่ตามทะเบียนบ้าน:
                    <span>
                      {{ formData.customer_address }}
                      {{ " " }}
                      {{
                        formData.Amphure == null ? "" : formData.Amphure.name_th
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
              <!--  -->

              <!-- กรอบข้อมูลช่อง 8 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    บัตร:
                    <span>{{ formData.credit }}</span>
                  </h5>
                </v-col>

                <v-col>
                  <h5>
                    หมายเลข: <span>{{ formData.credit_no }}</span>
                  </h5>
                </v-col>
                <v-col>
                  <h5>
                    ออกให้ ณ: <span>{{ formData.credit_address }}</span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 9 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    เป็นจำนวนเงินทั้งสิ้น:
                    <span>{{
                      formData.contract_bath == null
                        ? 0
                        : formData.contract_bath
                    }}</span>
                  </h5>
                </v-col>

                <v-col>
                  <h5>
                    บาท:
                    <span
                      >({{
                        formData.contract_bath == 0 ||
                        formData.contract_bath == null
                          ? "ศูนย์บาทถ้วน"
                          : formData.contract_bath_string
                      }})
                    </span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 10 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    ข้าพเจ้าได้รับเงินมัดจำไว้เป็นเงิน:
                    <span>{{
                      formData.contract_bath_deposit == null
                        ? 0
                        : formData.contract_bath_deposit
                    }}</span>
                  </h5>
                </v-col>
                <v-col>
                  <h5>
                    บาท:
                    <span
                      >({{
                        formData.contract_bath_deposit == 0 ||
                        formData.contract_bath_deposit == null
                          ? "ศูนย์บาทถ้วน"
                          : formData.contract_bath_deposit_string
                      }})</span
                    >
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 11 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    ผู้ซื้อยังคงค้างอีกเป็นจำนวนเงิน:
                    <span>{{
                      formData.contract_bath_hold == null
                        ? 0
                        : formData.contract_bath_hold
                    }}</span>
                  </h5>
                </v-col>
                <v-col>
                  <h5>
                    บาท:
                    <span
                      >({{
                        formData.contract_bath_hold == 0 ||
                        formData.contract_bath_hold == null
                          ? "ศูนย์บาทถ้วน"
                          : formData.contract_bath_deposit_string
                      }})</span
                    >
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 12 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    ผู้ซื้อจะนำเงินมาชำระให้ครบจำนวนตามที่ตกลงภายในวันที่ :
                    <span>
                      {{
                        formData.date_bath_Refund == null
                          ? ""
                          : $moment(formData.date_bath_Refund)
                              .add(543, "year")
                              .format("DD MMMM YYYY")
                      }}</span
                    >
                  </h5>
                </v-col>
                <!-- <v-col>
              <h5>
                <span>ภายในวันที่ ........</span>
                <span>เดือน ..................</span>
                <span>พ.ศ. ............</span>
              </h5>
            </v-col> -->
              </v-row>
              <!--  -->
              <!-- กรอบข้อมูลช่อง 13 -->
              <v-row
                class="d-flex flex-row rounded ma-auto mt-5 mb-5"
                style="
                  border-style: solid;
                  border-width: 1px;
                  border-color: gray;
                "
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
                  <h5>
                    ลงนาม:
                    <span
                      >.......................................... ผู้ขาย</span
                    >
                  </h5>
                </v-col>

                <v-col>
                  <h5>
                    ลงนาม:
                    <span
                      >.......................................... ผู้ซื้อ</span
                    >
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 15 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    ลงนาม:
                    <span>.......................................... พยาน</span>
                  </h5>
                </v-col>

                <v-col>
                  <h5>
                    ลงนาม:
                    <span>.......................................... พยาน</span>
                  </h5>
                </v-col>
              </v-row>
              <!--  -->

              <!-- กรอบข้อมูลช่อง 16 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    โทร:
                    <span
                      >...............................................
                      ผู้ขาย</span
                    >
                  </h5>
                </v-col>

                <v-col>
                  <h5>
                    โทร:
                    <span
                      >...............................................
                      ผู้ซื้อ</span
                    >
                  </h5>
                </v-col>
              </v-row>
              <!--  -->
              <div style="background-color: #d9d9d9">
                <!-- กรอบข้อมูลช่อง 17 -->
                <v-row class="d-flex space">
                  <v-col cols="1"> </v-col>
                  <v-col>
                    <h5>
                      ข้าพเจ้าผู้ซื้อ:
                      <span>{{ formData.customer_name }}</span>
                    </h5>
                  </v-col>

                  <v-col>
                    <h5>
                      ได้รับรถยนต์:
                      <span>{{ formData.car_model_name }}</span>
                    </h5>
                  </v-col>
                </v-row>
                <!--  -->
                <!-- กรอบข้อมูลช่อง 18 -->
                <v-row class="d-flex rounded ma-auto mt-3 mb-3 space">
                  <v-col>
                    <h5>
                      หมายเลขทะเบียน:
                      <span>{{ formData.car_regis }}</span>
                    </h5>
                  </v-col>

                  <v-col cols="6">
                    <h5>
                      <span>ไว้ในครอบครอง เมื่อวันที่ ..... </span>
                      <span>เดือน ......... </span>
                      <span>พ.ศ. ..... </span>
                    </h5>
                  </v-col>
                </v-row>

                <!-- กรอบข้อมูลช่อง 19 -->
                <v-row class="d-flex rounded ma-auto mt-3 mb-3 space">
                  <v-col>
                    <h5>
                      เวลา:
                      <span>
                        .............. น. ใน
                        สภาพเรียบร้อยทุกประกานหากเกิดการเสียดายใด ๆ
                        ก็ดีหลังจากที่ได้รับรถยนต์
                        ดังกล่าวมาข้าพเจ้าขอรับผิดชอบค่าเสียหาย
                        และความผิดตามภฏหมายต่าง ๆ ทั้งสิ้น</span
                      >
                    </h5>
                  </v-col>
                </v-row>

                <!-- กรอบข้อมูลช่อง 20 -->
                <v-row class="d-flex rounded ma-auto mt-3 mb-3 space">
                  <v-col>
                    <h5>
                      ลงนาม:
                      <span
                        >....................................
                        ผู้ขาย(ผู้มอบรถ)</span
                      >
                    </h5>
                  </v-col>

                  <v-col>
                    <h5>
                      ลงนาม:
                      <span
                        >....................................
                        ผู้ซื้อ(ผู้รับรถ)</span
                      >
                    </h5>
                  </v-col>
                </v-row>

                <!-- กรอบข้อมูลช่อง 21 -->
                <v-row class="d-flex rounded ma-auto mt-3 mb-3 space">
                  <v-col>
                    <h5>
                      ลงนาม:
                      <span>.................................... พยาน</span>
                    </h5>
                  </v-col>

                  <v-col>
                    <h5>
                      ลงนาม:
                      <span>.................................... พยาน</span>
                    </h5>
                  </v-col>
                </v-row>
              </div>

              <!-- กรอบข้อมูลช่อง 22 -->
              <v-row class="d-flex flex-row space">
                <v-col>
                  <h5>
                    หมายเหตุ:
                    <span
                      >.................................................................................................................................................................</span
                    >
                  </h5>
                </v-col>
              </v-row>

              <!-- <div class="d-flex flex-column">
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
            <v-img
              style=""
              v-if="currentFile != null || imagePreviewURL != null"
              height="600px"
              width="800px"
              :src="imagePreviewURL"
            />
          </div> -->
            </div>
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
import * as apiContract from "@/Api/apiContract";
export default {
  layout: "print",
  data() {
    return {
      formData: {},
    };
  },
  async mounted() {
    this.print();
    // console.log($nuxt.$route.name);
  },
  methods: {
    async print() {
      // console.log(this.idContract);
      const response = await apiContract.printContract(
        this.$route.query.idContract
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
