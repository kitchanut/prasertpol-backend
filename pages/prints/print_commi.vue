<template>
  <div size="A4">
    <v-card outlined color="transparent">
      <v-form ref="form">
        <v-card-text>
          <v-row class="d-flex flex-row">
            <v-col align="center">
              <h2>ค่าคอมมิชชั่น</h2>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-row b-solid">
            <v-col cols="12" align="center">
              <h2>บริษัทประเสริฐผลรุ่งเรืองนครพนม จำกัด (สาขาใหญ่)</h2>
            </v-col>
            <v-col cols="6" align="center">
              <v-row>
                <v-col>
                  <h4>
                    216/111 ถนนนิตโย ต.ในเมือง อ.เมือง จ.นครพนม โทร.042-513332
                    แฟกซ์ 042-513588
                  </h4>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <span> เลขประจำตัวผู้เสียภาษีอากร 0485548000108 </span>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="6" align="center">
              <h4>
                นามผู้รับ:
                <span>
                  {{ formData.user == null ? "" : formData.user.first_name }}
                  {{ formData.user == null ? "" : formData.user.last_name }}
                </span>
              </h4>
              <h4>
                ธนาคาร:
                <span>
                  {{ formData.user == null ? "" : formData.user.bank }}
                </span>
              </h4>
              <h4>
                เลขบัญชี:
                <span>
                  {{ formData.user == null ? "" : formData.user.bank_no }}
                </span>
              </h4>
              <h4>
                เบอร์ติดต่อ:
                <span>
                  {{ formData.user == null ? "" : formData.user.tel }}
                </span>
              </h4>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-row">
            <table>
              <tr>
                <th align="center">ลำดับ</th>
                <th align="center">ลำดับรถ</th>
                <th align="center">ค่าคอม (บ.)</th>
              </tr>
              <tr v-for="(query, keys) in formData.querys" :key="keys">
                <td align="center">
                  <span>{{ keys + 1 }}</span>
                </td>
                <td align="center">
                  <span>{{ query.car_no }}</span>
                </td>
                <td align="center">
                  <span>{{ query.commission }}</span>
                </td>
              </tr>
            </table>
          </v-row>
          <br /><br /><br /><br /><br />
          <v-row class="d-flex flex-row">
            <v-col align="center">
              <p>........................</p>
              <p>(........................)</p>
              <p>ผู้รับเงิน</p>
            </v-col>
            <v-col align="center">
              <p>........................</p>
              <p>(........................)</p>
              <p>เจ้าหน้าที่ผู้รับมอบอำนาจ</p>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row">
            <v-col>
              <p>วันที่จ่าย ...../......./......</p>
            </v-col>
          </v-row>
          <br />
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
import * as apiReceiving_money from "@/Api/apiReceiving_money";

export default {
  layout: "print",
  data() {
    return {
      formData: {},
    };
  },
  async mounted() {
    this.print();
  },
  methods: {
    async print() {
      const data = new FormData();
      data.append("user_id", this.$route.query.user_id);
      data.append(
        "timeStart",
        this.$route.query.timeStart.slice(
          1,
          Number(this.$route.query.timeStart.length) - 1
        )
      );
      data.append(
        "timeEnd",
        this.$route.query.timeEnd.slice(
          1,
          Number(this.$route.query.timeEnd.length) - 1
        )
      );

      const response = await apiReceiving_money.selectCommission(data);
      // console.log(response);
      this.$refs.form.reset();
      this.formData = response.data;
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
