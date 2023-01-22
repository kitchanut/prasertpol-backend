<template>
  <div size="A4">
    <!-- <v-card> -->
    <v-form ref="form">
      <br />
      <div align="center">
        <h2>ใบสั่งซื้ออะไหล่</h2>
      </div>
      <v-card-text class="b-solid-t">
        <div class="ma-3">
          <v-row class="d-flex flex-row">
            <v-col cols="8"> </v-col>
            <v-col cols="4">
              <h5>
                เลขใบเสร็จ: <span> {{ formData.po_number }} </span>
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col cols="8"> </v-col>
            <v-col cols="4">
              <h5>
                วันที่สั่งซื้อ:
                <span>
                  {{
                    formData.po_date == null
                      ? ""
                      : $moment(formData.po_date)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                  }}
                </span>
              </h5>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-row space">
            <v-col cols="8"> </v-col>
            <v-col cols="4">
              <h5>
                คนสั่งซื้อ: <span> {{ first_name }} </span>
              </h5>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-row space">
            <v-col cols="6">
              <h5>
                ซื้อในนาม: <span> {{ formData.company_name }} </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                ซื้อสินค้าจากบริษัท:
                <span> {{ formData.partner_companie_name }} </span>
              </h5>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row space">
            <v-col cols="6">
              <h5>
                เบอร์ติดต่อ: <span> {{ formData.branch_tel }} </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                เบอร์ติดต่อ: <span> {{ formData.partner_companie_tel }} </span>
              </h5>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-row space">
            <v-col cols="6">
              <h5>
                เลขผู้เสียภาษี: <span> {{ formData.company_idvat }} </span>
              </h5>
            </v-col>

            <v-col cols="6">
              <h5>
                เลขผู้เสียภาษี:
                <span> {{ formData.partner_companie_idvat }} </span>
              </h5>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-row space">
            <v-col cols="6">
              <h5>
                ที่อยู่: <span> {{ formData.company_address }} </span>
              </h5>
            </v-col>
            <v-col cols="6">
              <h5>
                ที่อยู่: <span> {{ formData.partner_companie_address }} </span>
              </h5>
            </v-col>
          </v-row>
          <br />
          <div class="space" align="center">
            <h2>รายการสั่งซื้อ</h2>
          </div>
          <div class="space">
            <table style="width: 100%">
              <tr>
                <th>ประเภท</th>
                <th>ซื้อให้รถ</th>
                <th>อะไหล่</th>
                <th>จำนวน</th>
                <th>หน่วย</th>
                <th>ราคา (บ.)</th>
                <th>รวม (บ.)</th>
              </tr>
              <tr
                v-for="(purchase_detail, keys) in formData.purchase_details"
                :key="keys"
              >
                <td align="center">
                  <span>
                    {{ purchase_detail.type == 1 ? "เข้าคลัง" : "ให้รถ" }}
                  </span>
                </td>
                <td align="center">
                  <span>
                    <span v-for="(dataCar, keys3) in dataCars" :key="keys3">
                      {{
                        (dataCar.id == purchase_detail.car_id) == true
                          ? dataCar.car_no
                          : null
                      }}
                    </span>
                  </span>
                </td>
                <td align="center">
                  <span v-for="(carPart, keys2) in carParts" :key="keys2">
                    {{
                      (carPart.id == purchase_detail.car_part_id) == true
                        ? carPart.car_part_name
                        : null
                    }}
                  </span>
                </td>

                <td align="center">
                  <span>
                    {{ purchase_detail.car_part_amount }}
                  </span>
                </td>
                <td align="center">
                  <span> {{ purchase_detail.unit_name }} </span>
                </td>
                <td align="center">
                  <span> {{ purchase_detail.car_part_price }} </span>
                </td>
                <td align="center">
                  <span> {{ purchase_detail.sumValue }} </span>
                </td>
              </tr>
            </table>
          </div>
          <v-row class="d-flex flex-row space">
            <v-col cols="8"> </v-col>
            <v-col cols="4">
              <h3>
                รวมราคาทั้งหมด: <span>{{ formData.sumValueAll }} บ.</span>
              </h3>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-form>
    <!-- </v-card> -->
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
  </div>
</template>

<script>
import * as apiUsers from "@/Api/apiUsers";
import * as apiPurchases from "@/Api/apiPurchases";
import * as apiCars from "@/Api/apiCars";
import * as apiCar_parts from "@/Api/apiCar_parts";

export default {
  layout: "full",
  data() {
    return {
      formData: {},
      carParts: [],
      dataCars: [],
      first_name: "",
    };
  },
  async mounted() {
    await this.getCarParts();
    await this.getCars();
    this.print();
  },

  methods: {
    async getdata(user_id) {
      const response = await apiUsers.index();
      response.data.forEach((element) => {
        if (element.id == user_id) {
          this.first_name = element.first_name;
        }
      });
    },
    async getCars() {
      const response = await apiCars.selectall();
      this.dataCars = response.data;
    },
    async getCarParts() {
      const response = await apiCar_parts.select();
      this.carParts = response.data;
    },
    async print() {
      const response = await apiPurchases.show(this.$route.query.id);
      // console.log(response);
      this.$refs.form.reset();
      this.formData = response.data;
      this.getdata(response.data.user_id);
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
