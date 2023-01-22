<template>
  <v-navigation-drawer v-model="drawerComponent" fixed right width="400">
    <v-list-item>
      <v-list-item-action
        style="margin-right: 5px"
        @click="$emit('cancleItem')"
      >
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-close</v-icon>
        </v-btn>
      </v-list-item-action>

      <v-list-item-title>{{ type }}</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>
    <v-progress-linear
      v-if="loadingSideBar"
      indeterminate
      rounded
      height="4"
    ></v-progress-linear>
    <v-list-item-content>
      <v-card-text class="px-5">
        <v-row no-gutters>
          <v-col :cols="colWidth">ชื่อเซล:</v-col>
          <v-col :cols="12 - colWidth">{{ item.sale_name }}</v-col>
        </v-row>
        <v-row no-gutters>
          <v-col :cols="colWidth">สาขา:</v-col>
          <v-col :cols="12 - colWidth">{{ item.branch_name }}</v-col>
        </v-row>
        <v-row no-gutters>
          <v-col :cols="colWidth">ลำดับรถ:</v-col>
          <v-col :cols="12 - colWidth">{{ item.car_no }}</v-col>
        </v-row>

        <template v-if="type == 'เปลี่ยนจอง'">
          <v-row no-gutters>
            <v-col :cols="colWidth">ลำดับรถเก่า:</v-col>
            <v-col :cols="12 - colWidth">{{ item.car_no_old }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">การทำสัญญา:</v-col>
            <v-col :cols="12 - colWidth">{{ item.sign_type }}</v-col>
          </v-row>
        </template>

        <template v-if="type == 'การจอง'">
          <v-row no-gutters>
            <v-col :cols="colWidth">เงินจอง:</v-col>
            <v-col :cols="12 - colWidth">{{ item.booking_fee }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">อาชีพ:</v-col>
            <v-col :cols="12 - colWidth">{{ item.customer_job }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">ทราบข่าว:</v-col>
            <v-col :cols="12 - colWidth">{{ item.hear_from_type }}</v-col>
          </v-row>
        </template>

        <template
          v-if="
            type == 'นัดทำสัญญา' ||
            type == 'การทำสัญญา' ||
            type == 'ฝากเซนต์' ||
            (type == 'เปลี่ยนจอง' && item.sign_type == 'เซนต์ใหม่')
          "
        >
          <v-row no-gutters v-if="type == 'นัดทำสัญญา'">
            <v-col :cols="colWidth">วันที่นัดเซนต์:</v-col>
            <v-col :cols="12 - colWidth">{{ item.appointment_date }}</v-col>
          </v-row>

          <v-row no-gutters v-if="type == 'ฝากเซนต์'">
            <v-col :cols="colWidth">วันที่นัดเซนต์:</v-col>
            <v-col :cols="12 - colWidth">{{ item.date }}</v-col>
          </v-row>

          <v-row no-gutters v-if="type == 'การทำสัญญา' || type == 'เปลี่ยนจอง'">
            <v-col :cols="colWidth">วันที่นัดเซนต์:</v-col>
            <v-col :cols="12 - colWidth">{{ item.sign_date }}</v-col>
          </v-row>

          <v-row no-gutters>
            <v-col :cols="colWidth">ธนาคาร:</v-col>
            <v-col :cols="12 - colWidth">{{ item.bank_name }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">สาขา:</v-col>
            <v-col :cols="12 - colWidth">{{ item.bank_branch_name }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">MTK:</v-col>
            <v-col :cols="12 - colWidth">{{ item.mtk_name }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">เบอร์โทร:</v-col>
            <v-col :cols="12 - colWidth">{{ item.mtk_tel }}</v-col>
          </v-row>
          <v-row no-gutters v-if="type == 'ฝากเซนต์'">
            <v-col :cols="colWidth">เซนต์ที่:</v-col>
            <v-col :cols="12 - colWidth">{{ item.sign_at }}</v-col>
          </v-row>
        </template>

        <template
          v-if="
            type == 'การทำสัญญา' ||
            (type == 'เปลี่ยนจอง' && item.sign_type == 'เซนต์ใหม่')
          "
        >
          <v-row no-gutters>
            <v-col :cols="colWidth">ผลเครดิต:</v-col>
            <v-col :cols="12 - colWidth">{{ item.credit }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">เอกสาร:</v-col>
            <v-col :cols="12 - colWidth">{{ item.document }}</v-col>
          </v-row>
          <v-row no-gutters v-if="item.document == 'ไม่ครบ'">
            <v-col :cols="colWidth"></v-col>
            <v-col :cols="12 - colWidth">
              <span style="white-space: pre">{{ item.document_list }}</span>
            </v-col>
          </v-row>
        </template>

        <template v-if="type == 'แบงค์อนุมัติ'">
          <v-row no-gutters>
            <v-col :cols="colWidth">วันที่อนุมัติ:</v-col>
            <v-col :cols="12 - colWidth">{{ item.approve_date }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">ราคากลาง:</v-col>
            <v-col :cols="12 - colWidth"
              >{{ item.middle_price }} X {{ item.percent }}</v-col
            >
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">ยอดจัด:</v-col>
            <v-col :cols="12 - colWidth">{{ item.finance_price }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">เงินดาวน์:</v-col>
            <v-col :cols="12 - colWidth">{{ item.down }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">ราคาขายรถ:</v-col>
            <v-col :cols="12 - colWidth">{{ item.car_price }}</v-col>
          </v-row>
        </template>

        <template v-if="type == 'ปล่อยรถ'">
          <v-row no-gutters>
            <v-col :cols="colWidth">วันที่ปล่อยรถ:</v-col>
            <v-col :cols="12 - colWidth">{{ item.release_date }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">เงินที่ได้รับ:</v-col>
            <v-col :cols="12 - colWidth">{{ item.dow }}</v-col>
          </v-row>
        </template>

        <template v-if="type == 'เปลี่ยนคนจอง'">
          <v-row no-gutters>
            <v-col :cols="colWidth">ลูกค้าเดิม:</v-col>
            <v-col :cols="12 - colWidth">{{ item.customer_old }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">ลูกค้าใหม่:</v-col>
            <v-col :cols="12 - colWidth">{{ item.customer_new }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">อาชีพ:</v-col>
            <v-col :cols="12 - colWidth">{{ item.customer_job }}</v-col>
          </v-row>
        </template>

        <template v-if="type == 'การรับเงิน'">
          <v-row no-gutters>
            <v-col :cols="colWidth">ประเภท:</v-col>
            <v-col :cols="12 - colWidth">{{ item.type }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">จำนวนเงิน:</v-col>
            <v-col :cols="12 - colWidth">{{ item.amount }}</v-col>
          </v-row>
        </template>

        <template v-if="type == 'เบิกเงิน'">
          <v-row no-gutters>
            <v-col :cols="colWidth">ชื่อลูกค้าที่ซื้อ:</v-col>
            <v-col :cols="12 - colWidth">{{ item.customer_name }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">ชื่อที่เบิก:</v-col>
            <v-col :cols="12 - colWidth">{{ item.customer_withdraw }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">ประเภท:</v-col>
            <v-col :cols="12 - colWidth">{{ item.type }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">จำนวนเงิน:</v-col>
            <v-col :cols="12 - colWidth">{{ item.amount }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">ธนาคาร:</v-col>
            <v-col :cols="12 - colWidth">{{ item.bank_name }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col :cols="colWidth">หมายเลขบัญชี:</v-col>
            <v-col :cols="12 - colWidth">{{ item.account }}</v-col>
          </v-row>
        </template>

        <v-row no-gutters>
          <v-col :cols="colWidth">หมายเหตุ:</v-col>
          <v-col :cols="12 - colWidth">
            <span v-html="item.note"></span>
          </v-col>
        </v-row>

        <div class="d-flex flex-wrap">
          <v-card class="mr-2 mt-3" v-if="item.id_card" outlined>
            <v-card-text>
              <div class="text-center">บัตรประชาชน</div>
              <div class="images" v-viewer>
                <img width="80px" :src="serverUrl + item.id_card" />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.booking_sheet" outlined>
            <v-card-text>
              <div class="text-center">ใบจอง</div>
              <div class="images" v-viewer>
                <img width="80px" :src="serverUrl + item.booking_sheet" />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.sale_sheet" outlined>
            <v-card-text>
              <div class="text-center">ใบจอง</div>
              <div class="images" v-viewer>
                <img width="80px" :src="serverUrl + item.sale_sheet" />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.sign_sheet" outlined>
            <v-card-text>
              <div class="text-center">ใบงานเซนต์</div>
              <div class="images" v-viewer>
                <img width="80px" :src="serverUrl + item.sign_sheet" />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.release_img" outlined>
            <v-card-text>
              <div class="text-center">ปล่อยรถ</div>
              <div class="images" v-viewer>
                <img width="80px" :src="serverUrl + item.release_img" />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.insurance_font_sheet" outlined>
            <v-card-text>
              <div class="text-center">ใบประกันหน้า</div>
              <div class="images" v-viewer>
                <img
                  width="80px"
                  :src="serverUrl + item.insurance_font_sheet"
                />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.insurance_back_sheet" outlined>
            <v-card-text>
              <div class="text-center">ใบประกันหลัง</div>
              <div class="images" v-viewer>
                <img
                  width="80px"
                  :src="serverUrl + item.insurance_back_sheet"
                />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.receipt" outlined>
            <v-card-text>
              <div class="text-center">ใบเสร็จรับเงิน</div>
              <div class="images" v-viewer>
                <img width="80px" :src="serverUrl + item.receipt" />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.booking_slip" outlined>
            <v-card-text>
              <div class="text-center">สลิป</div>
              <div class="images" v-viewer>
                <img width="80px" :src="serverUrl + item.booking_slip" />
              </div>
            </v-card-text>
          </v-card>

          <v-card class="mr-2 mt-3" v-if="item.slip" outlined>
            <v-card-text>
              <div class="text-center">สลิป</div>
              <div class="images" v-viewer>
                <img width="80px" :src="serverUrl + item.slip" />
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </v-list-item-content>
  </v-navigation-drawer>
</template>

<script>
import * as apiRequestLog from "@/Api/apiRequestLog";

import * as apiRequestBook from "@/Api/apiRequestBook";
import * as apiRequestAppointment from "@/Api/apiRequestAppointment";
import * as apiRequestSignDeposit from "@/Api/apiRequestSignDeposit";
import * as apiRequestSign from "@/Api/apiRequestSign";
import * as apiRequestBankApprove from "@/Api/apiRequestBankApprove";
import * as apiRequestRelease from "@/Api/apiRequestRelease";
import * as apiRequestChangeCar from "@/Api/apiRequestChangeCar";
import * as apiRequestChangeCustomer from "@/Api/apiRequestChangeCustomer";
import * as apiRequestUpdate from "@/Api/apiRequestUpdate";
import * as apiRequestMoney from "@/Api/apiRequestMoney";
import * as apiRequestMoneyWithdraw from "@/Api/apiRequestMoneyWithdraw";
import * as apiRequestCancle from "@/Api/apiRequestCancle";

export default {
  props: ["dialog", "type", "id"],
  data() {
    return {
      serverUrl: process.env.serverUrl,
      drawerComponent: false,
      loadingSideBar: false,
      colWidth: 4,
      item: {},
    };
  },
  methods: {
    async showData() {
      this.loadingSideBar = true;
      const id = this.id;
      const type = this.type;
      if (type == "การจอง") {
        const response = await apiRequestBook.show(id);
        this.item = response.data;
      } else if (type == "นัดทำสัญญา") {
        const response = await apiRequestAppointment.show(id);
        this.item = response.data;
      } else if (type == "ฝากเซนต์") {
        const response = await apiRequestSignDeposit.show(id);
        this.item = response.data;
      } else if (type == "การทำสัญญา") {
        const response = await apiRequestSign.show(id);
        this.item = response.data;
      } else if (type == "แบงค์อนุมัติ") {
        const response = await apiRequestBankApprove.show(id);
        this.item = response.data;
      } else if (type == "ปล่อยรถ") {
        const response = await apiRequestRelease.show(id);
        this.item = response.data;
      } else if (type == "เปลี่ยนจอง") {
        const response = await apiRequestChangeCar.show(id);
        this.item = response.data;
        this.item.car_no = this.item.car_no_new;
      } else if (type == "เปลี่ยนคนจอง") {
        const response = await apiRequestChangeCustomer.show(id);
        this.item = response.data;
        console.log(response.data);
      } else if (type == "อัพเดทข้อมูล") {
        const response = await apiRequestUpdate.show(id);
        this.item = response.data;
      } else if (type == "การรับเงิน") {
        const response = await apiRequestMoney.show(id);
        this.item = response.data;
      } else if (type == "เบิกเงิน") {
        const response = await apiRequestMoneyWithdraw.show(id);
        this.item = response.data;
      } else if (type == "ยกเลิกจอง") {
        const response = await apiRequestCancle.show(id);
        this.item = response.data;
      }
      this.loadingSideBar = false;
    },
  },
  watch: {
    async dialog() {
      this.drawerComponent = this.dialog;
      if (this.drawerComponent) {
        this.showData();
      }
    },
    drawerComponent() {
      if (!this.drawerComponent) {
        this.$emit("cancleItem");
      }
    },
  },
};
</script>

<style scoped>
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 8px;
}
</style>