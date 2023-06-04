<template>
  <div>
    <v-card>
      <v-card-text>
        <dateSelect2 @timeSelect="selectTimeStart" />

        <v-row class="d-flex align-center">
          <v-col cols="7" class="d-flex align-center">
            <v-menu
              v-model="menuSearch"
              :close-on-content-click="false"
              :nudge-width="300"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-blur
                  :color="searchCarNo != null ? 'warning' : 'grey lighten-4'"
                  :dark="searchCarNo != null ? true : false"
                  v-bind="attrs"
                  v-on="on"
                  class="mr-2"
                  style="min-width: 0px; padding: 0 8px"
                  height="42"
                  width="42"
                  elevation="0"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-text>
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
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <!-- <v-btn text @click="menuSearch = false"> ปิด </v-btn> -->
                  <v-btn
                    color="primary"
                    text
                    @click="
                      getData();
                      menuSearch = false;
                    "
                  >
                    ค้นหา
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
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
          <v-col cols="4">
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
        class="table-border table-border-top"
        :headers="headers"
        :items="filteredData"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        :mobile-breakpoint="0"
        multi-sort
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template
          v-for="(col, i) in filters"
          v-slot:[`header.${i}`]="{ header }"
        >
          <div style="display: inline-block; padding: 16px 0" :key="col.id">
            {{ header.text }}
          </div>
          <div style="float: right; margin-top: 8px" :key="col.id">
            <v-menu
              :close-on-content-click="false"
              :nudge-width="200"
              offset-y
              transition="slide-y-transition"
              left
              fixed
              style="position: absolute; right: 0"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="grey" icon v-bind="attrs" v-on="on">
                  <v-icon
                    small
                    :color="
                      activeFilters[header.value] &&
                      activeFilters[header.value].length <
                        filters[header.value].length
                        ? 'red'
                        : 'default'
                    "
                  >
                    mdi-filter-variant
                  </v-icon>
                </v-btn>
              </template>

              <v-list flat dense class="pa-0">
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-btn
                      text
                      block
                      @click="toggleAll(header.value)"
                      color="success"
                      >เลือกทั้งหมด</v-btn
                    >
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      text
                      block
                      @click="clearAll(header.value)"
                      color="warning"
                      >ล้างข้อมูล</v-btn
                    >
                  </v-col>
                </v-row>
                <v-divider></v-divider>

                <v-list-item-group
                  multiple
                  v-model="activeFilters[header.value]"
                  class="py-2"
                >
                  <v-list-item
                    v-for="item in filters[header.value]"
                    :key="`${item}`"
                    :value="item"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          :true-value="item"
                          color="primary"
                          dense
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </div>
        </template>

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
      menuSearch: false,
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
      searchCarNo: null,
      search: "",
      headers: [
        {
          text: "จัดการ",
          value: "request_status",
          sortable: false,
          width: "9%",
        },
        { text: "เวลา", value: "created_at", width: "11%" },

        { text: "Line", value: "pictureUrl", align: "center", width: "20%" },
        { text: "เซล/สาขา", value: "sale_name", width: "22%" },
        { text: "ประเภท", value: "type", width: "15%" },
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
      filteredData: [],
      count: [],
      item: {},
      filters: {
        type: [],
      },
      activeFilters: {},
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
      var search = "";
      if (this.searchCarNo != null) {
        search = this.searchCarNo;
      }
      // console.log(this.searchCarNo);
      this.countData();
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("toggle", this.toggle);
      data.append("search", search);

      const response = await apiRequestLog.indexCustom(data);

      // console.log(response.data);
      this.data = response.data;
      this.filteredData = this.data;
      this.initFilters();
      this.loading = false;
    },
    async countData() {
      var search = "";
      if (this.searchCarNo != null) {
        search = this.searchCarNo;
      }

      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("search", search);

      const response = await apiRequestLog.countData(data);
      this.count = response.data;
      // console.log(response.data);
    },
    setSearchCarNo() {
      this.searchCarNo = null;
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
    toggleAll(col) {
      this.activeFilters[col] = this.data
        .map((d) => {
          return d[col];
        })
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
    },
    clearAll(col) {
      this.activeFilters[col] = [];
    },
    initFilters() {
      for (const [key, value] of Object.entries(this.filters)) {
        this.filters[key] = this.data
          .map((d) => {
            return d[key];
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        this.filters[key].sort();
      }
      this.activeFilters = Object.assign({}, this.filters);
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
    activeFilters: {
      deep: true,
      handler: function (after, before) {
        this.filteredData = this.data.filter((d) => {
          return Object.keys(this.activeFilters).every((key) => {
            return this.activeFilters[key].includes(d[key]);
          });
        });
      },
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
