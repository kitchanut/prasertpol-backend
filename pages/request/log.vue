<template>
  <div>
    <v-card>
      <v-card-text>
        <dateSelect2 @timeSelect="selectTimeStart" />

        <v-row class="d-flex align-center">
          <v-col>
            <v-text-field
              @keyup.enter="getData()"
              @click:clear="setSearchCarNo()"
              v-model="searchCarNo"
              append-icon="mdi-magnify"
              label="ค้นหาลำดับรถ"
              single-line
              hide-details=""
              clearable
              outlined
              dense
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-btn-toggle
              mandatory
              v-model="toggle"
              color="primary"
              @change="getData()"
            >
              <v-btn height="42" value="all">ทั้งหมด ({{ count.all }})</v-btn>
              <v-btn height="42" value="pedding"
                >รอดำเนินการ ({{ count.pedding }})</v-btn
              >
              <v-btn height="42" value="approve"
                >ดำเนินการแล้ว ({{ count.approve }})</v-btn
              >
              <v-btn height="42" value="cancle"
                >ยกเลิก ({{ count.cancle }})</v-btn
              >
            </v-btn-toggle>
          </v-col>

          <v-spacer></v-spacer>
          <v-col>
            <v-text-field
              @keyup.enter="getData()"
              v-model="search"
              id="search"
              name="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details=""
              clearable
              outlined
              dense
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        :mobile-breakpoint="0"
        multi-sort
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template v-slot:[`item.pictureUrl`]="{ item }">
          <v-btn icon>
            <v-avatar size="40" @click="showImg(item.pictureUrl)">
              <v-img :src="item.pictureUrl"> </v-img>
            </v-avatar>
          </v-btn>
          <div>{{ item.displayName }}</div>
        </template>

        <template v-slot:[`item.sale_name`]="{ item }">
          <div>{{ item.sale_name }}</div>
          <div>{{ item.branch_name }}</div>
        </template>

        <template v-slot:[`item.car_no_all`]="{ item }">
          <div v-if="item.type == 'เปลี่ยนจอง'">
            <a
              href="javascript:void(0)"
              @click="showRequestLog(item.car_no_old)"
              >{{ item.car_no_old }}</a
            >
            =>
            <a href="javascript:void(0)" @click="showRequestLog(item.car_no)">{{
              item.car_no
            }}</a>
          </div>
          <div v-else>
            <a href="javascript:void(0)" @click="showRequestLog(item.car_no)">{{
              item.car_no
            }}</a>
          </div>
        </template>

        <template v-slot:[`item.request_status`]="{ item }">
          <v-btn
            v-if="item.request_status == 'pedding'"
            color="warning"
            fab
            x-small
            dark
            @click="editItem(item.type, item.ref_id)"
          >
            <v-icon> mdi-checkbox-blank-outline</v-icon>
          </v-btn>
          <v-btn
            v-else-if="item.request_status == 'approve'"
            color="success"
            fab
            x-small
            dark
            @click="editItem(item.type, item.ref_id)"
          >
            <v-icon> mdi-checkbox-outline</v-icon>
          </v-btn>
          <v-btn
            v-else-if="item.request_status == 'cancle'"
            color="primary"
            fab
            x-small
            dark
            @click="editItem(item.type, item.ref_id)"
          >
            <v-icon> mdi-arrow-u-left-top</v-icon>
          </v-btn>
          <v-btn
            v-if="item.request_status != 'cancle'"
            color="red"
            fab
            x-small
            dark
            @click="cancleItem(item.type, item.ref_id)"
          >
            <v-icon> mdi-close </v-icon>
          </v-btn>

          <v-btn
            v-if="item.request_status == 'cancle'"
            color="red"
            fab
            x-small
            dark
            @click="deleteItem(item.type, item.ref_id)"
          >
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            color="primary"
            fab
            x-small
            dark
            @click="showData(item.type, item.ref_id)"
          >
            <v-icon> mdi-information-variant </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <dialogRequestLog
      :dialog="dialogRequestLog"
      :car_no="car_no"
      @success="
        dialogRequestLog = false;
        getData();
      "
      @cancleItem="dialogRequestLog = false"
    />

    <drawerRequestLog
      :dialog="drawerRequestLog"
      :type="type"
      :id="id"
      @success="getData()"
      @cancleItem="drawerRequestLog = false"
    />

    <dialogImage
      :dialog="dialogImg"
      :imgUrl="imgUrl"
      @cancleItem="dialogImg = false"
    />

    <!-- <v-navigation-drawer v-model="drawer" fixed right width="400">
      <v-list-item>
        <v-list-item-action style="margin-right: 5px" @click="drawer = false">
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
              (type == 'เปลี่ยนจอง' && item.sign_type == 'เซนต์ใหม่')
            "
          >
            <v-row no-gutters v-if="type == 'นัดทำสัญญา'">
              <v-col :cols="colWidth">วันที่นัดเซนต์:</v-col>
              <v-col :cols="12 - colWidth">{{ item.appointment_date }}</v-col>
            </v-row>

            <v-row
              no-gutters
              v-if="type == 'การทำสัญญา' || type == 'เปลี่ยนจอง'"
            >
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
    </v-navigation-drawer> -->
  </div>
</template>

<script>
import * as apiRequestLog from "@/Api/apiRequestLog";
import * as customAlart from "@/customJS/customAlart";
import dialogImage from "@/components/dialog/dialogImage";
import dialogRequestLog from "@/components/dialog/dialogRequestLog";
import drawerRequestLog from "@/components/dialog/drawerRequestLog";

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

import moment from "moment";
import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    drawerRequestLog,
    dialogRequestLog,
    dialogImage,
    dateSelect2,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      toggle: "all",
      loading: true,
      // loadingSideBar: false,
      drawerRequestLog: false,
      // colWidth: 4,

      dialogRequestLog: false,
      car_no: "",

      dialogImg: false,
      imgUrl: "",

      dialog: false,

      type: "",
      id: "",
      formTitle: "",
      action: "",
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      searchCarNo: "",
      search: "",
      headers: [
        {
          text: "จัดการ",
          value: "request_status",
          sortable: false,
          width: "9%",
        },
        { text: "เวลา", value: "created_at", width: "11%" },

        { text: "Line", value: "pictureUrl", align: "center", width: "12%" },
        { text: "เซล/สาขา", value: "sale_name", width: "12%" },
        { text: "ประเภท", value: "type", width: "12%" },
        { text: "ลำดับรถ", value: "car_no_all" },
        {
          text: "รายละเอียด",
          value: "actions",
          sortable: false,
          align: "center",
          width: "8%",
        },
      ],
      data: [],
      count: [],
      item: {},
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getData();
    },
    async getData() {
      this.loading = true;

      if (this.searchCarNo == null) {
        this.searchCarNo = "";
      }
      // console.log(this.searchCarNo);
      this.countData();
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("toggle", this.toggle);
      data.append("search", this.searchCarNo);

      const response = await apiRequestLog.indexCustom(data);

      // console.log(response.data);
      this.data = response.data;
      this.loading = false;
    },
    async countData() {
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("search", this.searchCarNo);

      const response = await apiRequestLog.countData(data);
      this.count = response.data;
      // console.log(response.data);
    },
    setSearchCarNo() {
      this.searchCarNo = "";
      this.$nextTick(async () => {
        this.getData();
      });
    },
    showData(type, id) {
      this.type = type;
      this.id = id;
      this.drawerRequestLog = true;
    },
    showRequestLog(car_no) {
      this.car_no = car_no;
      this.dialogRequestLog = true;
    },
    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },

    async editItem(type, id) {
      if (type == "การจอง") {
        const respone = await apiRequestBook.update(id);
      } else if (type == "นัดทำสัญญา") {
        const respone = await apiRequestAppointment.update(id);
      } else if (type == "ฝากเซนต์") {
        const respone = await apiRequestSignDeposit.update(id);
      } else if (type == "การทำสัญญา") {
        const respone = await apiRequestSign.update(id);
      } else if (type == "แบงค์อนุมัติ") {
        const respone = await apiRequestBankApprove.update(id);
      } else if (type == "ปล่อยรถ") {
        const respone = await apiRequestRelease.update(id);
      } else if (type == "เปลี่ยนจอง") {
        const respone = await apiRequestChangeCar.update(id);
      } else if (type == "เปลี่ยนคนจอง") {
        const respone = await apiRequestChangeCustomer.update(id);
      } else if (type == "อัพเดทข้อมูล") {
        const respone = await apiRequestUpdate.update(id);
      } else if (type == "การรับเงิน") {
        const respone = await apiRequestMoney.update(id);
      } else if (type == "เบิกเงิน") {
        const respone = await apiRequestMoneyWithdraw.update(id);
      } else if (type == "ยกเลิกจอง") {
        const respone = await apiRequestCancle.update(id);
      }
      this.getData();
    },

    async cancleItem(type, id) {
      if (type == "การจอง") {
        const respone = await apiRequestBook.cancle(id);
      } else if (type == "นัดทำสัญญา") {
        const respone = await apiRequestAppointment.cancle(id);
      } else if (type == "ฝากเซนต์") {
        const respone = await apiRequestSignDeposit.cancle(id);
      } else if (type == "การทำสัญญา") {
        const respone = await apiRequestSign.cancle(id);
      } else if (type == "แบงค์อนุมัติ") {
        const respone = await apiRequestBankApprove.cancle(id);
      } else if (type == "ปล่อยรถ") {
        const respone = await apiRequestRelease.cancle(id);
      } else if (type == "เปลี่ยนจอง") {
        const respone = await apiRequestChangeCar.cancle(id);
      } else if (type == "เปลี่ยนคนจอง") {
        const respone = await apiRequestChangeCustomer.cancle(id);
      } else if (type == "อัพเดทข้อมูล") {
        const respone = await apiRequestUpdate.cancle(id);
      } else if (type == "การรับเงิน") {
        const respone = await apiRequestMoney.cancle(id);
      } else if (type == "เบิกเงิน") {
        const respone = await apiRequestMoneyWithdraw.cancle(id);
      } else if (type == "ยกเลิกจอง") {
        const respone = await apiRequestCancle.cancle(id);
      }
      this.getData();
    },

    async deleteItem(type, id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then(async (result) => {
        if (result == true) {
          var respone = null;
          if (type == "การจอง") {
            respone = await apiRequestBook.destroy(id);
          } else if (type == "นัดทำสัญญา") {
            respone = await apiRequestAppointment.destroy(id);
          } else if (type == "ฝากเซนต์") {
            respone = await apiRequestSignDeposit.destroy(id);
          } else if (type == "การทำสัญญา") {
            respone = await apiRequestSign.destroy(id);
          } else if (type == "แบงค์อนุมัติ") {
            respone = await apiRequestBankApprove.destroy(id);
          } else if (type == "ปล่อยรถ") {
            respone = await apiRequestRelease.destroy(id);
          } else if (type == "เปลี่ยนจอง") {
            respone = await apiRequestChangeCar.destroy(id);
          } else if (type == "เปลี่ยนคนจอง") {
            respone = await apiRequestChangeCustomer.destroy(id);
          } else if (type == "อัพเดทข้อมูล") {
            respone = await apiRequestUpdate.destroy(id);
          } else if (type == "การรับเงิน") {
            respone = await apiRequestMoney.destroy(id);
          } else if (type == "เบิกเงิน") {
            respone = await apiRequestMoneyWithdraw.destroy(id);
          } else if (type == "ยกเลิกจอง") {
            respone = await apiRequestCancle.destroy(id);
          }
          this.getData();
        }
      });
    },

    // async addSuccess() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.getData();
    //     customAlart.TopSuccess();
    //   });
    // },
    // async addError() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.getData();
    //     customAlart.TopError();
    //   });
    // },
  },
  watch: {
    data() {
      if (this.data) {
        return this.data.map(function (item, index) {
          item.no = index + 1;
          if (item.type == "เปลี่ยนจอง") {
            item.car_no_all = item.car_no_old + " => " + item.car_no;
          } else {
            item.car_no_all = item.car_no;
          }
        });
      }
    },
    // searchCarNo() {
    //   if (!this.searchCarNo) {
    //     this.getData();
    //   }
    // },
  },
};
</script>

<style scoped>
</style>
