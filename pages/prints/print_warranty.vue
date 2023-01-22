<template>
  <div size="A4">
    <v-card class="elevation-0">
      <v-form ref="form">
        <div align="center">
          <h2>ใบรับประกันรถยนต์</h2>
        </div>
        <v-card-text class="b-solid-t">
          <v-row class="d-flex flex-row space">
            <v-col align="center">
              <h2>บริษัทประเสริฐผลรุ่งเรืองนครพนม จำกัด</h2>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col align="center">
              <span>
                216/111 ถนนนิตโย ต.ในเมือง อำเภอเมืองนครพนม จ.นครพนม 48000
              </span>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col align="center">
              <span><span> โทร.042-513-332 หรือ 064-603-4627 </span></span>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col align="center">
              <h2><span> รายละเอียดผู้ซื้อรถยนต์ </span></h2>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col>
              <h5>
                ชื่อ-สกุล:
                <span> {{ formData.customer_name }} </span>
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col>
              <h5>
                ที่อยู่ปัจจุบัน:

                <span>
                  <span>{{ formData.customer_address }}</span
                  >&nbsp; <span>{{ formData.amphure }}</span
                  >&nbsp; <span>{{ formData.district }}</span
                  >&nbsp; <span>{{ formData.province }}</span
                  >&nbsp;
                  <span>{{ formData.zip_code }}</span>
                </span>
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col>
              <h5>
                เบอร์โทรศัพท์:
                <span>
                  {{ formData.customer_tel }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col align="center">
              <h5>รายละเอียดรถยนต์</h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col>
              <h5>
                ลำดับรถ:
                <span>
                  {{ formData.car == undefined ? "" : formData.car.car_no }}
                </span>
              </h5>
            </v-col>
            <v-col>
              <h5>
                วันที่ปล่อยรถ:
                <span>
                  {{
                    formData.insurance_certificate_date == null
                      ? ""
                      : $moment(formData.insurance_certificate_date)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                  }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col>
              <h5>
                ทะเบียนรถ:
                <span>
                  {{ formData.car == undefined ? "" : formData.car.car_regis }}
                </span>
              </h5>
            </v-col>
            <v-col>
              <h5>
                ยี่ห้อ:
                <span>
                  {{
                    formData.model == undefined
                      ? ""
                      : formData.model.car_model_name
                  }}
                </span>
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col>
              <h5>
                เลขไมล์ ณ วันที่ปล่อยรถ:
                <span>
                  {{
                    formData.car_mileage == null
                      ? ""
                      : Number(formData.car_mileage).toLocaleString("th-TH", {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        })
                  }}
                </span>
                กม.
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col>
              <h5>
                พนักงานขาย:
                <span> {{ formData.first_name }} </span>
              </h5>
            </v-col>
            <v-col>
              <h5>
                เบอร์:
                <span> {{ formData.tel }} </span>
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col align="center">
              <h2>
                <span>
                  แจ้งซ่อมก่อนล่วงหน้า เมื่อรถยนต์ของท่านมีปัญหา
                  <font class="color-red">095-687-4771</font>
                </span>
              </h2>
            </v-col>
          </v-row>
          <v-row
            class="d-flex flex-row space"
            style="border-top: 2px solid black"
          >
            <v-col>
              <table>
                <tr>
                  <th>ครั้งที่</th>
                  <th>วัน เดือน ปี</th>
                  <th>รายการซ่อม</th>
                  <th>เลขไมล์</th>
                  <th>คงเหลือ</th>
                </tr>
                <tr
                  v-for="(repair_detail, keys) in formData.repair_details"
                  :key="keys"
                >
                  <td>
                    <span>{{ keys + 1 }}</span>
                  </td>
                  <td>
                    <span>{{
                      repair_detail.repair_date == null
                        ? ""
                        : $moment(formData.repair_date)
                            .add(543, "year")
                            .format("DD MMMM YYYY")
                    }}</span>
                  </td>
                  <td>
                    <span>{{ repair_detail.repair_id }}</span>
                  </td>
                  <td>
                    <span>{{
                      repair_detail.car_mileage == null
                        ? 0
                        : Number(formData.car_mileage).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}</span>
                  </td>
                  <td>
                    <span>{{ repair_detail.car_mileage_balance }}</span>
                  </td>
                </tr>
              </table>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col>
              <h5><span style="color: red"> หมายเหตุ :</span></h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col>
              <span>
                รับประกันอะไหล่ของเครื่องยนต์เสื่อมสภาพ 3 เดือน หรือ 5,000 กม.
                (อย่างใดอย่างหนึ่งถึงก่อน) หมั่นตรวจเช็คหม้อน้ำ น้ำมันเครื่อง
                ลมยาง ก่อนเดินทาง เพื่อความปลอกภัยของผู้ขับ
              </span>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col>
              <h2>
                <u><b> ยกเว้นรายการดังต่อไปนี้ </b></u>
              </h2>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col align="center">
              <h5><b> สิ่งที่อยู่นอกเหนือการรับประกัน </b></h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col align="center">
              <h5>ยางรถยนต์</h5>
            </v-col>
            <v-col align="center">
              <h5>น้ำมันเครื่องแห้ง</h5>
            </v-col>
            <v-col align="center">
              <h5>หม้อน้ำแห้ง</h5>
            </v-col>
            <v-col align="center">
              <h5>เครื่องเสียง</h5>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-row space1">
            <v-col>
              <h5>
                ในกรณีที่ผู้ซื้อค้างค่างวด หรือเงินดาวน์ หากผู้ซื้อ
                ไม่ได้ชำระเงินตรงตามเงื่อนไขที่กำหนดไว้ ให้ถือว่าการรับประกัน
                เรื่องอะไหล่ของเครื่องยนต์ และการรับประกันในเรื่องอื่นๆ
                สิ้นสุดลงทันที
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col align="center">
              <h5>
                <u
                  ><span>
                    เมื่อผู้ซื้อรับทราบเงื่อนไขข้างต้นแล้ว
                    จงทำการลงลายมือชื่อไว้เพื่อเป็นหลังฐาน
                  </span></u
                >
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col align="center">
              <h5>
                ลงชื่อ..........................................................ผู้ซื้อ
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col align="center">
              <h5>
                ลงชื่อ..........................................................พยาน
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col align="center">
              <h5>
                ลงชื่อ..........................................................ผู้จัดการ
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space1">
            <v-col align="center">
              <h5>
                หากท่านต้องการนำรถเข้ามาซ่อม
                โปรดติดต่อล่วงหน้าเพื่อสอบถามอาการเบื้องต้นและนัดวัน
                โดยติดต่อได้ที่
                <span style="color: red"><span>095-687-4771</span></span>
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
        <span>ปริ้น</span>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import * as apiInsurCertificate from "@/Api/apiInsurCertificate";
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
      // console.log(this.id);
      const response = await apiInsurCertificate.printInsurCertificate(
        this.$route.query.idInsu
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
