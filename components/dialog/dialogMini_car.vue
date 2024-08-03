<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" width="1260px">
      <v-card>
        <v-card-text class="mt-3">
          <v-row>
            <v-col cols="7">
              <v-card outlined height="100%">
                <v-card-text>
                  <v-row>
                    <v-col cols="9">
                      <h1 class="text-center" style="padding-left: 100px">ข้อมูลรถ</h1>
                    </v-col>
                    <v-col class="d-flex justify-end">
                      <v-card outlined height="120" width="150">
                        <v-img
                          @click="getAllImg(id)"
                          cover
                          width="150"
                          height="120"
                          :src="serverUrl + formDataBuy.queryCar.img_id_first"
                        >
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-qrcode</v-icon>
                        ลำดับรถ:
                        <span>
                          {{ formDataBuy.queryCar == null ? "" : formDataBuy.queryCar.car_no }}
                        </span>
                      </h3></v-col
                    >
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car </v-icon>
                        ประเภทรถ:
                        <span>
                          {{
                            formDataBuy.queryCar.car_types == null
                              ? ""
                              : formDataBuy.queryCar.car_types.car_type_name +
                                formDataBuy.queryCar.car_types.car_type_name_en
                          }}
                        </span>
                      </h3>
                    </v-col>

                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car </v-icon>
                        ยี่ห้อรถ:
                        <span>
                          {{
                            formDataBuy.queryCar.car_models == null
                              ? ""
                              : formDataBuy.queryCar.car_models.car_model_name
                          }}
                        </span>
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car-multiple </v-icon>
                        รุ่น:
                        <span>{{
                          formDataBuy.queryCar.car_series == null ? "" : formDataBuy.queryCar.car_series.car_series_name
                        }}</span>
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car-connected </v-icon>
                        รุ่นย่อย:
                        <span>{{
                          formDataBuy.queryCar.car_serie_sub == null
                            ? ""
                            : formDataBuy.queryCar.car_serie_sub.car_serie_sub_name
                        }}</span>
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-engine </v-icon>
                        เครื่องยนต์:
                        <span
                          >{{
                            formDataBuy.queryCar.car_engine_amount == null ? "" : formDataBuy.queryCar.car_engine_amount
                          }}
                          CC</span
                        >
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-engine </v-icon>
                        เลขเครื่อง:
                        <span>{{
                          formDataBuy.queryCar.car_no_engine == null ? "" : formDataBuy.queryCar.car_no_engine
                        }}</span>
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-engine </v-icon>
                        เลขตัวถัง:
                        <span>{{
                          formDataBuy.queryCar.car_no_body == null ? "" : formDataBuy.queryCar.car_no_body
                        }}</span>
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car-shift-pattern </v-icon>
                        เกียร์:
                        <span
                          >{{
                            formDataBuy.queryCar.car_gear == null
                              ? ""
                              : formDataBuy.queryCar.car_gear == 1
                              ? "อัตโนมัติ (AT)"
                              : "ธรรมดา (MT)"
                          }}
                        </span>
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car-arrow-right </v-icon>
                        ปีผลิต:
                        <span> {{ formDataBuy.queryCar.car_year == null ? "" : formDataBuy.queryCar.car_year }}</span>
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car-arrow-right </v-icon>

                        ปีจดทะเบียน:
                        <span>
                          {{
                            formDataBuy.queryCar.car_mark_year == null
                              ? ""
                              : $moment(formDataBuy.queryCar.car_mark_year).format("DD/MM/YYYY")
                          }}
                        </span>
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-speedometer </v-icon>
                        เลขไมค์:
                        <span>
                          {{
                            formDataBuy.queryCar.car_mileage == null
                              ? ""
                              : Number(formDataBuy.queryCar.car_mileage).toLocaleString("th-TH")
                          }}
                        </span>
                        กม.
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-speedometer </v-icon>
                        เลขไมค์ประกัน:
                        <span>
                          {{
                            formDataBuy.queryCar.car_mileage_balance == null
                              ? ""
                              : Number(formDataBuy.queryCar.car_mileage_balance).toLocaleString("th-TH")
                          }}
                        </span>
                        กม.
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-card-bulleted-settings-outline </v-icon>
                        ทะเบียนเก่า:
                        <span>
                          {{ formDataBuy.queryCar.car_regis == null ? "" : formDataBuy.queryCar.car_regis }}
                        </span>
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-map-marker </v-icon>
                        ทะเบียนจังหวัด:
                        <span>
                          {{ formDataBuy.queryCar.province == null ? "" : formDataBuy.queryCar.province.name_th }}
                        </span>
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-card-bulleted-settings-outline </v-icon>
                        ทะเบียนใหม่:
                        <span>
                          {{
                            formDataBuy.queryCar.car_regis_current == null ? "" : formDataBuy.queryCar.car_regis_current
                          }}
                        </span>
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-map-marker </v-icon>
                        ทะเบียนจังหวัด:
                        <span>
                          {{
                            formDataBuy.queryCar.province_current == null
                              ? ""
                              : formDataBuy.queryCar.province_current.name_th
                          }}
                        </span>
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car-turbocharger </v-icon>
                        ใช้เชื้อเพลิง:
                        <span>
                          {{
                            formDataBuy.queryCar.fuel_type == null
                              ? ""
                              : formDataBuy.queryCar.fuel_type == 1
                              ? "น้ำมัน"
                              : formDataBuy.queryCar.fuel_type == 2
                              ? "ไฟฟ้า"
                              : "น้ำมัน/ไฟฟ้า"
                          }}
                        </span>
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-car-tire-alert </v-icon>
                        ชนิดเชื้อเพลิง:
                        <span>
                          {{ formDataBuy.queryCar.fuels == null ? "" : formDataBuy.queryCar.fuels.fuel_name }}
                        </span>
                      </h3>
                    </v-col>
                  </v-row>

                  <v-row no-gutters class="mt-2">
                    <v-col cols="6">
                      <h3>
                        <v-icon left> mdi-map-marker</v-icon>
                        สาขา:
                        <span>
                          {{ formDataBuy.branch == null ? "" : formDataBuy.branch.branch_name }}
                        </span>
                      </h3>
                    </v-col>
                    <v-col cols="6"> </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="5">
              <v-card outlined>
                <v-card-text>
                  <h1 class="text-center">การจอง</h1>
                </v-card-text>
                <v-divider></v-divider>
                <v-data-table
                  :headers="BookingHeaders"
                  :items="formDataBuy.dataBooking"
                  :items-per-page="10"
                  :loading="loading"
                  no-data-text="ยังไม่มีการเพิ่มข้อมูล"
                  loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
                  dense
                >
                  <template v-slot:[`item.codeWorking`]="{ item }">
                    <h5>W{{ item.id }}</h5>
                  </template>

                  <template v-slot:[`item.customer`]="{ item }">
                    <h5 v-if="item.customer_id == null" class="red--text">
                      {{ item.customer_name }}
                    </h5>
                    <h5 v-else class="green--text">
                      {{ item.customer_name }}
                    </h5>
                  </template>
                  <!-- <template v-slot:[`item.sale`]="{ item }">
                    <h5 v-if="item.sale_id == null || item.sale_id == 0" class="red--text">ยังไม่เลือก</h5>
                    <h5 v-else class="green--text">
                      {{ item.sale.first_name }}
                    </h5>
                  </template> -->
                  <template v-slot:[`item.work_status`]="{ item }">
                    <v-chip v-if="item.status_del == 0" class="ml-1" label small color="error"> ยกเลิก </v-chip>
                    <v-chip v-else-if="item.work_status == '1'" label small> ลูกค้าสนใจ </v-chip>
                    <v-chip v-else-if="item.work_status == '2'" label small> จอง </v-chip>
                    <v-chip v-else-if="item.work_status == '3'" label small color="primary"> วางมัดจำแล้ว </v-chip>
                    <v-chip v-else-if="item.work_status == '4'" label small color="primary"> นัดทำสัญญาแล้ว </v-chip>
                    <v-chip v-else-if="item.work_status == '5'" label small color="warning"> รอแบงค์อนุมัติ </v-chip>
                    <v-chip v-else-if="item.work_status == '6'" label small color="warning"> แบงค์ไม่อนุมัติ </v-chip>
                    <v-chip v-else-if="item.work_status == '7'" label small color="primary"> แบงค์อนุมัติแล้ว </v-chip>
                    <v-chip v-else-if="item.work_status == '8'" label small color="success"> ปล่อยรถ </v-chip>
                    <v-chip v-else-if="item.work_status == '9'" label small color="success"> โอนรถสำเร็จ </v-chip>
                    <v-chip v-else-if="item.work_status == '10'" label small color="success"> รับเงินแล้ว </v-chip>
                    <v-chip v-else-if="item.work_status == '11'" label small color="success"> ปิดงาน </v-chip>
                  </template>

                  <!-- <template v-slot:[`item.created_at`]="{ item }">
                    <span style="color: red" v-if="$moment().unix() > Number($moment(item.created_at).unix()) + 25200">
                      {{ $moment(item.created_at).fromNow(true) }}
                    </span>
                    <span style="color: blue" v-else>
                      {{ $moment(item.created_at).fromNow(true) }}
                    </span>
                  </template> -->
                </v-data-table>
              </v-card>
              <v-card outlined class="mt-1">
                <v-card-text>
                  <h1 class="text-center">การขาย</h1>
                  <br />

                  <v-row no-gutters>
                    <v-col cols="5">
                      <h3>ขายโดย:</h3>
                    </v-col>
                    <v-col class="d-flex justify-end">{{ formDataBuy.saleDetail.sale_name }}</v-col>
                  </v-row>

                  <v-row no-gutters>
                    <v-col cols="5">
                      <h3>ขายให้กับ:</h3>
                    </v-col>
                    <v-col class="d-flex justify-end">{{ formDataBuy.saleDetail.customer_name }}</v-col>
                  </v-row>

                  <v-row no-gutters>
                    <v-col cols="5">
                      <h3>ยื่นเรื่องซื้อวันที่:</h3>
                    </v-col>
                    <v-col class="d-flex justify-end">{{
                      formDataBuy.saleDetail.sale_booking == "ยังไม่มีข้อมูล"
                        ? "ยังไม่มีข้อมูล"
                        : $moment(formDataBuy.saleDetail.sale_booking).format("DD/MM/YYYY ( HH:mm น.)")
                    }}</v-col>
                  </v-row>

                  <v-row no-gutters>
                    <v-col cols="5">
                      <h3>ปล่อยรถเมื่อ:</h3>
                    </v-col>
                    <v-col class="d-flex justify-end">{{
                      formDataBuy.saleDetail.sale_date == "ยังไม่มีข้อมูล"
                        ? "ยังไม่มีข้อมูล"
                        : $moment(formDataBuy.saleDetail.sale_date).format("DD/MM/YYYY ( HH:mm น.)")
                    }}</v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-card outlined class="mt-3">
            <v-card-text>
              <h1 class="text-center">รายรับ</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-data-table
              :headers="IncomeHeaders"
              :items="data_income"
              :items-per-page="10"
              :search="search_income"
              :loading="loading"
              no-data-text="ยังไม่มีการเพิ่มข้อมูล"
              loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
              dense
            >
              <template v-slot:[`item.file`]="{ item }">
                <div v-if="item.file == null">
                  <span>-</span>
                </div>
                <div v-else>
                  <v-btn icon>
                    <v-avatar size="40" @click="showImg(serverUrl + item.file)">
                      <v-img :src="serverUrl + item.file"> </v-img>
                    </v-avatar>
                  </v-btn>
                </div>
              </template>
              <template v-slot:[`item.date`]="{ item }">
                <span>
                  {{ $moment(item.date).format("DD/MM/YYYY") }}
                </span>
              </template>

              <template v-slot:[`item.money`]="{ item }">
                {{
                  Number(item.money).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </template>

              <template v-slot:[`item.type`]="{ item }">
                <span v-if="item.type == 1">ตัวรถ</span>
                <span v-else>อื่น ๆ</span>
              </template>

              <template v-slot:[`item.type_bill`]="{ item }">
                <span v-if="item.type_bill == 1">เงินสด</span>
                <span v-else>ใบกำกับภาษี</span>
              </template>

              <template v-slot:[`item.actions`]="{ item }">
                <v-menu offset-y v-if="user_id == item.user_id">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <!-- <v-list-item
                            v-if="
                              user_group_permission == 10 ||
                              user_group_permission == 11 ||
                              user_group_permission == -1
                            "
                            @click="comfirm(item.id)"
                          >
                          </v-list-item> -->
                    <v-list-item @click="deleteItemIncome(item.id)" v-if="user_id == item.user_id">
                      <v-list-item-title>ลบ</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </v-card>

          <v-card outlined class="mt-3">
            <v-card-text>
              <h1 class="text-center">ค่าใช้จ่ายตัวรถ</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-data-table
              :headers="OutlayHeaders"
              :items="data_outlay_cost"
              :items-per-page="10"
              :search="search_outlay"
              :loading="loading"
              no-data-text="ยังไม่มีการเพิ่มข้อมูล"
              loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
              dense
            >
              <template v-slot:[`item.file`]="{ item }">
                <div v-if="item.file == null">
                  <span>-</span>
                </div>
                <div v-else>
                  <v-btn icon>
                    <v-avatar size="40" @click="showImg(serverUrl + item.file)">
                      <v-img :src="serverUrl + item.file"> </v-img>
                    </v-avatar>
                  </v-btn>
                </div>
              </template>
              <template v-slot:[`item.date`]="{ item }">
                <span>
                  {{ $moment(item.date).format("DD/MM/YYYY") }}
                </span>
              </template>

              <template v-slot:[`item.money`]="{ item }">
                {{
                  Number(item.money).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </template>

              <template v-slot:[`item.type`]="{ item }">
                <span v-if="item.type == 1">ค่าตัวรถ</span>
                <span v-else-if="item.type == 2">รถ</span>
                <span v-else-if="item.type == 3">ค่าซ่อมรถ</span>
                <span v-else-if="item.type == 4">การขาย</span>
                <span v-else-if="item.type == 5">ค่าคอม</span>
                <span v-else-if="item.type == 6">ค่าจ้างคนค้ำ</span>
                <span v-else-if="item.type == 7">ค่านำพา</span>
                <span v-else-if="item.type == 8">ค่าซื้อแทน</span>
                <span v-else-if="item.type == 9">ค่าน้ำมัน</span>
                <span v-else>อื่น ๆ</span>
              </template>

              <template v-slot:[`item.actions`]="{ item }">
                <v-menu offset-y v-if="user_id == item.user_id">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="deleteItem(item.id)">
                      <v-list-item-title>ลบ</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('cancleItem')">ยกเลิก</v-btn>
        </v-card-actions>
      </v-card>

      <dialogImage :dialog="dialogImg" :imgUrl="imgUrl" @cancleItem="dialogImg = false" />
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiOutlay_costs from "@/Api/apiOutlay_costs";
import dialogImage from "@/components/dialog/dialogImage";

export default {
  props: ["dialog", "data_car", "data_outlay_cost", "type", "data_income"],
  components: {
    dialogImage,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      id: null,
      dialogImg_car: false,

      formDataBuy: {
        saleDetail: {},
        customer: [
          {
            customer_name: "",
          },
        ],
        working: [
          {
            created_at: "",
          },
        ],
        receiving_moneys: [
          {
            receiving_money_all: 0,
          },
        ],
        queryCar: [
          {
            car_models: [
              {
                car_model_name: "",
              },
            ],
            car_buy: 0,
            created_at: "",
          },
        ],

        partner_car: [
          {
            partner_car_name: "",
          },
        ],
        user: [
          {
            first_name: "",
          },
        ],
        sale: [
          {
            first_name: "",
          },
        ],
        dataPreviewBanks: [],
        dataBooking: [],
      },
      btnloading: true,
      formDataLoading: true,
      dialogDeleteComponent: false,
      loading: false,
      search_outlay: "",
      search_income: "",

      imgUrl: "",
      dialogImg: false,
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),

      BookingHeaders: [
        { text: "รหัสงาน", value: "codeWorking", align: "center" },
        { text: "ผู้สนใจ", value: "customer" },
        // { text: "เซล", value: "sale" },
        // { text: "เวลาจอง", value: "created_at" },
        { text: "สาขา", value: "branch.branch_name" },
        { text: "สถานะ", value: "work_status" },
      ],

      OutlayHeaders: [
        { text: "ลำดับ", value: "row_no", align: "center" },
        { text: "ไฟล์", value: "file" },
        {
          text: "วันที่",
          value: "date",
          width: "15%",
        },
        { text: "เลขธุรกรรม", value: "no" },
        {
          text: "ประเภท",
          value: "type",
        },
        {
          text: "ผู้รับเงิน",
          value: "shop",
        },

        {
          text: "รายการ",
          value: "detail",
        },
        { text: "จำนวนเงิน", value: "money" },
        { text: "สาขา", value: "branch.branch_name" },
        { text: "โดย", value: "user.first_name" },

        { text: "จัดการ", value: "actions", sortable: false },
      ],
      IncomeHeaders: [
        { text: "ลำดับ", value: "row_no", align: "center" },
        { text: "ไฟล์", value: "file" },
        {
          text: "วันที่",
          value: "date",
          width: "15%",
        },
        { text: "เลขธุรกรรม", value: "no" },
        {
          text: "ลูกค้า/ผู้จ่ายเงิน",
          value: "shop",
        },
        {
          text: "รายการ",
          value: "detail",
        },
        { text: "จำนวนเงิน", value: "money" },
        { text: "สาขา", value: "branch.branch_name" },
        { text: "โดย", value: "user.first_name" },

        { text: "จัดการ", value: "actions", sortable: false },
      ],
    };
  },
  mounted() {},
  methods: {
    async deleteItem(id) {
      const respone = apiOutlay_costs.delete_outlay(id);
      respone.then(async (res) => {
        // console.log(res);
        if (res.status == 200) {
          customAlart.TopSuccess();

          this.$nextTick(() => {
            this.getOutlay();
          });
        } else {
          customAlart.TopError();
        }
      });
    },
    async getAllImg(car_id) {
      this.dialogImg_car = true;
      this.id = car_id;
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        this.formDataLoading = false;
        this.formDataBuy = this.data_car;
        // console.log(this.data_car);
        // console.log(this.data_outlay_cost);
      }
      this.btnloading = false;
    },
    dialogDeleteComponent() {
      if (!this.dialogDeleteComponent) {
        this.$emit("cancleItem");
      }
    },
  },
};
</script>

<style></style>
