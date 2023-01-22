<template>
  <div>
    <v-row class="d-flex align-center">
      <v-col cols="9">
        <dateSelectMonthAll @timeSelect="selectTimeStart" />
      </v-col>
      <v-col>
        <v-select
          v-model="work_status"
          :items="[
            {
              value: 0,
              text: 'ไม่รวมงานที่ปิดแล้ว',
            },
            {
              value: 'all',
              text: 'ทั้งหมด',
            },
          ]"
          item-value="value"
          item-text="text"
          outlined
          dense
          hide-details=""
          @change="initialize()"
        >
        </v-select>
      </v-col>
    </v-row>

    <v-row class="mt-0">
      <v-col>
        <v-select
          v-model="selectedHeaders"
          :items="headers"
          label="แสดง/ซ่อน หัวข้อ"
          multiple
          outlined
          return-object
          hide-details=""
        >
        </v-select>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-end">
      <v-col xs="12" sm="12" md="6" lg="8" xl="8" class="d-flex align-end">
        <v-btn @click="handleDownload()" color="success" class="ml-2" small>
          <v-icon left>mdi-microsoft-excel</v-icon>
          Excel
        </v-btn>
      </v-col>
      <v-col xs="12" sm="12" md="6" lg="4" xl="4">
        <!-- <v-text-field
          v-model="search"
          id="search"
          name="search"
          append-icon="mdi-magnify"
          label="ค้นหา"
          single-line
          hide-details
        >
        </v-text-field> -->
      </v-col>
    </v-row>

    <div class="wrapper1" style="overflow-x: scroll; overflow-y: hidden">
      <div :style="'width:' + tableWidth + 'px; height: 20px;'"></div>
    </div>

    <v-data-table
      :headers="showHeaders"
      :items="filteredData"
      :loading="loading"
      :search="search"
      :footer-props="{
        'items-per-page-options': [5, 10, 20, 50, 100, -1],
      }"
      no-data-text="ไม่มีข้อมูล"
      loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      :multi-sort="true"
      @current-items="getFiltered"
      :mobile-breakpoint="0"
      dense
    >
      <template v-slot:body.prepend>
        <tr>
          <th v-for="(header, keyHeader) in showHeaders" :key="keyHeader">
            <v-chip v-if="header.value != 'actions'" class="ma-2" small>{{
              countField(header.value)
            }}</v-chip>
          </th>
        </tr>
      </template>
      <template v-slot:[`item.id`]="{ item }">
        <span>W{{ item.id }}</span>
      </template>
      <template v-slot:[`item.booking_date`]="{ item }">
        <span v-if="item.booking_date != ' '" style="color: #ffc107">{{
          $moment(item.booking_date).format("DD/MM/YYYY")
        }}</span>
      </template>
      <template v-slot:[`item.appointment_date`]="{ item }">
        <span v-if="item.appointment_date != ' '" style="color: #ff1744">{{
          $moment(item.appointment_date).format("DD/MM/YYYY")
        }}</span>
        <span v-else></span>
      </template>
      <template v-slot:[`item.contract_date`]="{ item }">
        <span v-if="item.contract_date != ' '" style="color: #4caf50">{{
          $moment(item.contract_date).format("DD/MM/YYYY")
        }}</span>
      </template>
      <template v-slot:[`item.appointment_bank_date`]="{ item }">
        <span v-if="item.appointment_bank_date != ' '" style="color: #1976d2">{{
          $moment(item.appointment_bank_date).format("DD/MM/YYYY")
        }}</span>
      </template>
      <template v-slot:[`item.appointment_book_date`]="{ item }">
        <span v-if="item.appointment_book_date != ' '" style="color: #cddc39">{{
          $moment(item.appointment_book_date).format("DD/MM/YYYY")
        }}</span>
      </template>
      <template v-slot:[`item.appointment_transfer_date`]="{ item }">
        <span
          v-if="item.appointment_transfer_date != ' '"
          style="color: #00bcd4"
          >{{
            $moment(item.appointment_transfer_date).format("DD/MM/YYYY")
          }}</span
        >
      </template>
      <template v-slot:[`item.appointment_sentbook_date`]="{ item }">
        <span
          v-if="item.appointment_sentbook_date != ' '"
          style="color: #00bcd4"
          >{{
            $moment(item.appointment_sentbook_date).format("DD/MM/YYYY")
          }}</span
        >
      </template>
      <template v-slot:[`item.appointment_money_date`]="{ item }">
        <span
          v-if="item.appointment_money_date != ' '"
          style="color: #e91e63"
          >{{ $moment(item.appointment_money_date).format("DD/MM/YYYY") }}</span
        >
      </template>

      <template v-slot:[`item.sale_name`]="{ item }">
        <v-btn
          v-if="item.work_status > 3"
          @click="Appointment(item.car_no, item.id)"
          x-small
          color="warning"
          rounded
          >{{ item.sale_name }}</v-btn
        >
        <div v-else>{{ item.sale_name }}</div>
      </template>

      <template v-slot:[`item.appointment_bank_type`]="{ item }">
        <v-btn
          v-if="item.appointment_bank_type == 'ครบ'"
          x-small
          color="success"
          rounded
          >{{ item.appointment_bank_type }}</v-btn
        >
        <v-btn
          v-if="item.appointment_bank_type == 'ไม่ครบ'"
          x-small
          color="red"
          rounded
          dark
          >{{ item.appointment_bank_type }}</v-btn
        >
        <div>
          {{ item.appointment_bank_list }}
        </div>
      </template>

      <template v-for="(col, i) in filters" v-slot:[`header.${i}`]="{ header }">
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
              <v-btn color="indigo" icon v-bind="attrs" v-on="on">
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

            <v-list
              v-if="
                header.value == 'appointment_date' ||
                header.value == 'contract_date' ||
                header.value == 'booking_date' ||
                header.value == 'appointment_bank_date' ||
                header.value == 'appointment_book_date' ||
                header.value == 'appointment_transfer_date' ||
                header.value == 'appointment_sentbook_date' ||
                header.value == 'appointment_money_date'
              "
            >
              <v-list-item-group
                multiple
                v-model="activeFilters[header.value]"
                class="py-2"
              >
                <template v-for="item in filters[header.value]">
                  <v-list-item :key="`${item}`" :value="item">
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
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
              <div class="pl-2 pr-2">
                <v-date-picker
                  v-model="dates[header.value]"
                  range
                  elevation="1"
                  locale="TH"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="dates[header.value] = []">
                    ล้าง
                  </v-btn>
                </v-date-picker>
              </div>
            </v-list>

            <v-list
              v-else-if="header.value == 'bank_name'"
              flat
              dense
              class="pa-0"
            >
              <v-row no-gutters>
                <v-col cols="6">
                  <v-btn
                    text
                    block
                    @click="
                      toggleAll(header.value);
                      changeBank();
                    "
                    color="success"
                    >Toggle all</v-btn
                  >
                </v-col>
                <v-col cols="6">
                  <v-btn
                    text
                    block
                    @click="
                      clearAll(header.value);
                      changeBank();
                    "
                    color="warning"
                    >Clear all</v-btn
                  >
                </v-col>
              </v-row>
              <v-divider></v-divider>

              <v-list-item-group
                multiple
                v-model="activeFilters[header.value]"
                class="py-2"
                @change="changeBank()"
              >
                <template v-for="item in filters[header.value]">
                  <v-list-item :key="`${item}`" :value="item">
                    <template v-slot:default="{ active, toggle }">
                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          :true-value="item"
                          @click="toggle"
                          color="primary"
                          dense
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>

            <v-list v-else flat dense class="pa-0">
              <v-row no-gutters>
                <v-col cols="6">
                  <v-btn
                    text
                    block
                    @click="toggleAll(header.value)"
                    color="success"
                    >Toggle all</v-btn
                  >
                </v-col>
                <v-col cols="6">
                  <v-btn
                    text
                    block
                    @click="clearAll(header.value)"
                    color="warning"
                    >Clear all</v-btn
                  >
                </v-col>
              </v-row>
              <v-divider></v-divider>

              <v-list-item-group
                multiple
                v-model="activeFilters[header.value]"
                class="py-2"
              >
                <template v-for="item in filters[header.value]">
                  <v-list-item :key="`${item}`" :value="item">
                    <template v-slot:default="{ active, toggle }">
                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          :true-value="item"
                          @click="toggle"
                          color="primary"
                          dense
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="Appointment(item.car_no, item.id)">
              <v-list-item-title>{{
                item.work_status > 3
                  ? "ดูวันนัดทำสัญญากับแบงค์"
                  : "วันนัดทำสัญญากับแบงค์"
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>

    <dialogAppointment
      :dialogAppointment="dialogAppointment"
      :idWork="idWork"
      :car_no="car_no"
      :status_bank="status_bank"
      :actionAppointment="actionAppointment"
      :formTitleAppointment="formTitleAppointment"
      @cancleItem="dialogAppointment = false"
      @success="addSuccess"
      @error="addError"
    />
  </div>
</template>

<script>
import * as apiWorks from "@/Api/apiWorks";
import * as customAlart from "@/customJS/customAlart";
import moment from "moment";

import dialogAppointment from "@/components/dialog/dialogAppointment";

export default {
  components: {
    dialogAppointment,
  },
  data: () => ({
    loading: true,
    work_status: 0,
    timeStart: moment().startOf("years").format("YYYY-MM-DD HH:mm"),
    timeEnd: moment().endOf("years").format("YYYY-MM-DD HH:mm"),
    search: "",
    currentItems: [],
    tableWidth: 0,
    headers: [],
    selectedHeaders: [],
    filters: {
      id: [],
      car_no: [],
      car_series_name: [],
      car_serie_sub_name: [],
      car_regis: [],
      work_status_name: [],
      car_year: [],
      color_name: [],
      amount_price: [],
      amount_down: [],
      car_price_vat: [],
      sale: [],
      branch_name: [],
      team_name: [],
      branch_team_name: [],
      customer_name: [],
      customer_grade: [],
      credit: [],
      hear_from: [],
      booking_date: [],
      deposit: [],
      amount_slacken: [],
      commission: [],
      car_price_approve: [],
      car_price_approve_vat: [],
      appointment_bank_date: [],
      customer_job: [],
      bank_name: [],
      sale_name: [],
      appointment_bank_type: [],
      car_price_persen: [],
      appointment_date: [],
      contract_date: [],
      appointment_book_date: [],
      appointment_transfer_date: [],
      appointment_sentbook_date: [],
      appointment_money_date: [],
      appointment_money_price: [],
      customer_payment: [],
      commission_mount: [],
      note_page: [],
      note: [],
      note_sale: [],
    },
    activeFilters: {},
    data: [],
    dates: {
      booking_date: [],
      appointment_bank_date: [],
      appointment_date: [],
      contract_date: [],
      appointment_book_date: [],
      appointment_transfer_date: [],
      appointment_sentbook_date: [],
      appointment_money_date: [],
    },

    car_no: 0,
    idWork: 0,
    status_bank: 4,
    dialogAppointment: false,
    formTitleAppointment: "Add",
    actionAppointment: "check",
  }),

  computed: {
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
    tHeader() {
      return this.showHeaders.map(function (item) {
        return item.text;
      });
    },
    filteredData() {
      return this.data.filter((d) => {
        return Object.keys(this.activeFilters).every((key) => {
          if (
            key == "booking_date" ||
            key == "appointment_date" ||
            key == "contract_date" ||
            key == "appointment_bank_date" ||
            key == "appointment_book_date" ||
            key == "appointment_transfer_date" ||
            key == "appointment_sentbook_date" ||
            key == "appointment_money_date"
          ) {
            if (this.dates[key].length > 0) {
              this.activeFilters[key] = [];
              let moments = this.dates[key].map((dd) => moment(dd));
              return (
                d[key] >= moment.min(moments).format("YYYY-MM-DD") &&
                d[key] <= moment.max(moments).format("YYYY-MM-DD")
              );
            } else {
              if (this.activeFilters[key].length == 2) {
                return true;
              } else if (this.activeFilters[key].length == 1) {
                if (this.activeFilters[key][0] == " ") {
                  return d[key] == " ";
                } else {
                  return d[key] != " ";
                }
              }
            }
          } else {
            return this.activeFilters[key].includes(d[key]);
          }
        });
      });
    },
  },

  watch: {
    data() {
      this.initFilters();
    },
    showHeaders() {
      console.log("showHeaders");
      $(".v-data-table__wrapper").scroll(function () {
        $(".wrapper1").scrollLeft($(".v-data-table__wrapper").scrollLeft());
      });
      $(".wrapper1").scroll(function () {
        $(".v-data-table__wrapper").scrollLeft($(".wrapper1").scrollLeft());
      });
    },
  },

  created() {
    this.headers = [
      {
        text: "จัดการ",
        value: "actions",
        sortable: false,
      },
      {
        text: "รหัสงาน",
        value: "id",
        width: "140px",
      },
      {
        text: "ลำดับรถ",
        value: "car_no",
        width: "140px",
      },
      {
        text: "สถานะ",
        value: "work_status_name",
        width: "140px",
      },
      {
        text: "รุ่น",
        value: "car_series_name",
        width: "140px",
      },
      {
        text: "รุ่นย่อย",
        width: "140px",
        value: "car_serie_sub_name",
      },
      {
        text: "ทะเบียน",
        value: "car_regis",
        width: "140px",
      },
      {
        text: "ปีรถ",
        value: "car_year",
        width: "120px",
      },
      {
        text: "สี",
        value: "color_name",
        width: "120px",
      },
      {
        text: "จัด",
        value: "amount_price",
        width: "140px",
      },
      {
        text: "ดาวน์",
        value: "amount_down",
        width: "140px",
      },
      {
        text: "ขาย",
        value: "car_price_vat",
        width: "140px",
      },
      {
        text: "เซล",
        value: "sale",
        width: "140px",
      },
      {
        text: "สาขา",
        value: "branch_name",
        width: "140px",
      },
      {
        text: "ทีมเซล",
        value: "team_name",
        width: "140px",
      },
      {
        text: "ทีมสาขา",
        value: "branch_team_name",
        width: "140px",
      },
      {
        text: "ลูกค้า",
        value: "customer_name",
        width: "180px",
      },
      {
        text: "เกรด",
        value: "customer_grade",
        width: "120px",
      },
      {
        text: "อาชีพลูกค้า",
        value: "customer_job",
        width: "160px",
      },

      {
        text: "ทราบข่าว",
        value: "hear_from",
        width: "160px",
      },

      {
        text: "จอง",
        value: "booking_date",
        width: "160px",
      },
      {
        text: "เงินจอง",
        value: "deposit",
        width: "160px",
      },
      {
        text: "ดาวน์+F",
        value: "amount_slacken",
        width: "160px",
      },
      {
        text: "ค่านำพา+อื่นๆ",
        value: "commission",
        width: "180px",
      },
      {
        text: "ยอดจัด",
        value: "car_price_approve",
        width: "160px",
      },
      {
        text: "ยอดจัด+Vat",
        value: "car_price_approve_vat",
        width: "160px",
      },

      {
        text: "วันที่เซนต์",
        value: "appointment_bank_date",
        width: "160px",
      },
      {
        text: "ธนาคาร",
        value: "bank_name",
        width: "200px",
      },
      {
        text: "MKT",
        value: "sale_name",
        width: "140px",
      },
      {
        text: "เอกสาร",
        value: "appointment_bank_type",
        width: "180px",
      },
      {
        text: "ผลเครดิต",
        value: "credit",
        width: "140px",
      },
      {
        text: "จัดได้ %",
        value: "car_price_persen",
        width: "140px",
      },
      {
        text: "อนุมัติ",
        value: "appointment_date",
        width: "140px",
      },
      {
        text: "ปล่อยรถ",
        value: "contract_date",
        width: "150px",
      },
      {
        text: "ชุดโอนมา",
        value: "appointment_book_date",
        width: "150px",
      },

      {
        text: "โอน",
        value: "appointment_transfer_date",
        width: "150px",
      },

      {
        text: "ส่งเล่มทำเงิน",
        value: "appointment_sentbook_date",
        width: "170px",
      },

      {
        text: "เงินมา",
        value: "appointment_money_date",
        width: "150px",
      },
      {
        text: "จำนวน",
        value: "appointment_money_price",
        width: "160px",
      },
      {
        text: "งวดรถ",
        value: "customer_payment",
        width: "160px",
      },
      {
        text: "หน้าสมุด",
        value: "note_page",
        width: "140px",
      },
      {
        text: "เดือนคอม",
        value: "commission_mount",
        width: "160px",
      },

      {
        text: "หมายเหตุ (ส่วนกลาง)",
        value: "note",
        width: "220px",
      },
      {
        text: "หมายเหตุ (เซล)",
        value: "note_sale",
        width: "200px",
      },
    ];

    this.initialize();

    this.selectedHeaders = this.headers;
  },
  mounted() {
    $(".v-data-table__wrapper").scroll(function () {
      $(".wrapper1").scrollLeft($(".v-data-table__wrapper").scrollLeft());
    });
    $(".wrapper1").scroll(function () {
      $(".v-data-table__wrapper").scrollLeft($(".wrapper1").scrollLeft());
    });
  },
  methods: {
    async initialize() {
      this.loading = true;
      const data = new FormData();
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("work_status", this.work_status);
      const response = await apiWorks.followWork(data);
      // console.log(response.data);
      this.data = response.data.data;
      this.loading = false;

      this.tableWidth = $(".v-data-table-header").width();
    },
    selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.initialize();
    },
    countField(key) {
      return this.filteredData.reduce(
        (total, x) => (x[key] != " " ? total + 1 : total),
        0
      );
    },
    changeBank() {
      this.updateSaleFilters();
    },
    initFilters() {
      for (const [key, value] of Object.entries(this.filters)) {
        if (
          key == "booking_date" ||
          key == "appointment_date" ||
          key == "contract_date" ||
          key == "appointment_bank_date" ||
          key == "appointment_book_date" ||
          key == "appointment_transfer_date" ||
          key == "appointment_sentbook_date" ||
          key == "appointment_money_date"
        ) {
          let date = this.data
            .map((d) => {
              return d[key];
            })
            .filter((value, index, self) => {
              return self.indexOf(value) === index;
            })
            .filter((value, index, self) => {
              return value !== " ";
            })
            .sort();
          let moments = date.map((d) => moment(d));

          this.filters[key] = [
            " ",
            moment.min(moments).format("DD/MM/YYYY") +
              "-" +
              moment.max(moments).format("DD/MM/YYYY"),
          ];
        } else {
          this.filters[key] = this.data
            .map((d) => {
              return d[key];
            })
            .filter((value, index, self) => {
              return self.indexOf(value) === index;
            });
          this.filters[key].sort();
        }

        // this.filters[key] = this.data
        //   .map((d) => {
        //     return d[key];
        //   })
        //   .filter((value, index, self) => {
        //     return self.indexOf(value) === index;
        //   });
        // this.filters[key].sort();
      }
      this.activeFilters = Object.assign({}, this.filters);
    },
    updateSaleFilters() {
      this.filters["sale_name"] = this.data
        .map((d) => {
          return d["sale_name"];
        })
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
      this.filters["sale_name"].sort();
      this.activeFilters["sale_name"] = this.filters["sale_name"];

      this.$nextTick(() => {
        this.filters["sale_name"] = this.filteredData
          .map((d) => {
            return d["sale_name"];
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        this.filters["sale_name"].sort();
        this.activeFilters["sale_name"] = this.filters["sale_name"];
      });
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

    getFiltered(e) {
      this.currentItems = e;
    },

    async Appointment(car_no, work_id) {
      // this.car_no = car_no;
      this.formTitleAppointment = "นัดวันทำสัญญา (" + car_no + ")";
      this.dialogAppointment = true;
      this.idWork = work_id;
      this.status_bank = 4;
      this.actionAppointment = "check";
    },

    handleDownload() {
      const filterVal = [];
      for (let index = 0; index < this.tHeader.length; index++) {
        filterVal.push(this.headers[index].value);
      }
      // console.log(moment().format("DD/MM/YYYY ( HH:mm น.)"));
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.filteredData;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "ตามงาน",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    async addSuccess(value) {
      // console.log(value);
      if (value == "work") {
        this.dialogWork = false;
      } else if (value == "Booking") {
        this.dialogBooking = false;
      } else if (value == "Financial") {
        this.dialogFinancial = false;
      } else if (value == "Contract") {
        this.dialogContract = false;
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
      } else if (value == "Appointment") {
        this.dialogAppointment = false;
      } else if (value == "AppointmentBank") {
        this.dialogAppointmentBank = false;
      } else if (value == "InsurCertificate") {
        this.dialogInsurCertificate = false;
      } else if (value == "Receiving_money") {
        this.dialogReceivingMoney = false;
      } else if (value == "note") {
        this.dialogNote = false;
      }

      customAlart.TopSuccess();

      this.$nextTick(() => {
        this.initialize();
      });
    },
    async addError(value) {
      if (value == "work") {
        this.dialogWork = false;
      } else if (value == "Booking") {
        this.dialogBooking = false;
      } else if (value == "Financial") {
        this.dialogFinancial = false;
      } else if (value == "Contract") {
        this.dialogContract = false;
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
      } else if (value == "Appointment") {
        this.dialogAppointment = false;
      } else if (value == "AppointmentBank") {
        this.dialogAppointmentBank = false;
      } else if (value == "InsurCertificate") {
        this.dialogInsurCertificate = false;
      } else if (value == "Receiving_money") {
        this.dialogReceivingMoney = false;
      } else if (value == "note") {
        this.dialogNote = false;
      }
      this.$nextTick(() => {
        customAlart.TopError();
      });
    },
  },
};
</script>

<style>
</style>
