<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 2 ||
      user_group_permission == 3 ||
      user_group_permission == 8 ||
      user_group_permission == 9 ||
      user_group_permission == 10 ||
      user_group_permission == 11 ||
      user_group_permission == 12 ||
      user_group_permission == 13
    "
  >
    <v-card>
      <v-card-text>
        <v-row no-gutters>
          <!-- <v-col sm="6" xs="6" md="1" lg="1" cols="6">
            <v-text-field
              dense
              hide-details
              outlined
              v-model="interest"
              type="number"
              label="ภาษี (%)"
            >
            </v-text-field>
          </v-col> -->
          <v-col sm="6" xs="6" md="3" lg="3" cols="6">
            <v-autocomplete
              v-model="branch_id"
              :items="branches"
              item-text="branch_name"
              item-value="id"
              label="สาขา"
              no-data-text="ไม่มีข้อมูล"
              @change="getData"
              outlined
              dense
              hide-details
            >
            </v-autocomplete>
          </v-col>

          <v-col sm="6" xs="6" md="2" lg="2" cols="6" class="pl-1">
            <v-autocomplete
              v-model="car_stock"
              :items="data_car_stock"
              item-text="label"
              item-value="car_stock"
              label="สถานะ"
              no-data-text="ไม่มีข้อมูล"
              @change="getData"
              outlined
              dense
              hide-details
            >
            </v-autocomplete>
          </v-col>

          <!-- <v-col sm="6" xs="6" md="2" lg="2" cols="6">
            <v-autocomplete
              v-model="car_types_id"
              :items="carType"
              no-data-text="ไม่มีข้อมูล"
              @change="getData"
              item-text="car_type_name"
              item-value="id"
              label="ประเภทรถ"
              outlined
              dense
              hide-details
            >
              <template slot="selection" slot-scope="{ item }">
                {{ item.car_type_name }} ({{ item.car_type_name_en }})
              </template>

              <template slot="item" slot-scope="{ item }">
                {{ item.car_type_name }} ({{ item.car_type_name_en }})
              </template>
            </v-autocomplete>
          </v-col> -->
        </v-row>

        <v-row no-gutters class="mt-2">
          <v-col
            cols="6"
            xs="6"
            sm="6"
            md="2"
            lg="2"
            xl="2"
            v-if="
              (user_group_permission == -1 && dataCars.length > 0) ||
              (user_group_permission == 8 && dataCars.length > 0) ||
              (user_group_permission == 10 && dataCars.length > 0) ||
              (user_group_permission == 11 && dataCars.length > 0) ||
              (user_group_permission == 12 && dataCars.length > 0)
            "
          >
            <v-btn @click="handleDownload()" color="success" class="ml-2">
              <v-icon left>mdi-microsoft-excel</v-icon>
              Excel
            </v-btn>
          </v-col>
          <v-col
            cols="6"
            xs="6"
            sm="6"
            md="2"
            lg="2"
            xl="2"
            v-if="user_group_permission == -1 || user_group_permission == 8"
          >
            <v-btn color="primary" dark @click.stop="AddItem()">
              <v-icon left>mdi-plus</v-icon>
              เพิ่มรถใหม่
            </v-btn>
          </v-col>
          <v-col
            v-if="
              user_group_permission == -1 ||
              user_group_permission == 8 ||
              user_group_permission == 10 ||
              user_group_permission == 11 ||
              user_group_permission == 12
            "
            cols="6"
            xs="6"
            sm="6"
            md="2"
            lg="2"
            xl="2"
          >
            <v-btn class="ml-1" color="blue-grey" dark @click="AddOutlay()">
              <v-icon left>mdi-plus</v-icon>
              เพิ่มค่าใช้จ่าย
            </v-btn>
          </v-col>
          <v-col
            v-if="
              user_group_permission == -1 ||
              user_group_permission == 8 ||
              user_group_permission == 10 ||
              user_group_permission == 11 ||
              user_group_permission == 12
            "
            cols="6"
            xs="6"
            sm="6"
            md="2"
            lg="2"
            xl="2"
          >
            <v-btn class="ml-1" color="blue-grey" dark @click="AddIncome()">
              <v-icon left>mdi-plus</v-icon>
              เพิ่มรายรับ
            </v-btn>
          </v-col>
          <!-- <v-spacer></v-spacer> -->
          <v-col cols="12" xs="12" sm="" md="4" lg="4" xl="4">
            <v-text-field
              v-model="search"
              id="search"
              name="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              outlined
              single-line
              dense
              hide-details
            >
            </v-text-field>
          </v-col>
        </v-row>

        <br />
        <!-- <v-row>
          <v-col>
            <v-select
              v-model="selectedHeaders"
              :items="headers"
              label="แสดง/ซ่อน หัวข้อ"
              multiple
              outlined
              return-object
            >
            </v-select>
          </v-col>
        </v-row>

        <br /> -->

        <div id="mycontainer">
          <div id="outer">
            <v-data-table
              :headers="showHeaders"
              :items="data"
              :items-per-page="item_per_page"
              :footer-props="{
                'items-per-page-options': [10, 25, 50, 100, -1],
              }"
              :item-class="itemRowBackground"
              @update:items-per-page="getItemPerPage"
              :search="search"
              :loading="loading"
              no-data-text="ยังไม่มีการเพิ่มข้อมูล"
              loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
              :mobile-breakpoint="0"
            >
              <template v-slot:[`item.car_img`]="{ item }">
                <v-btn icon v-if="item.img_id_first != 0">
                  <v-avatar tile size="40" @click="getAllImg(item.id)">
                    <v-img :src="serverUrl + item.img_id_first"> </v-img>
                  </v-avatar>
                </v-btn>
              </template>

              <!-- <template v-slot:[`item.car_img`]="{ item }">
                <div
                  :ref="'images' + item.car_no"
                  v-show="false"
                  :class="'images' + item.car_no"
                  v-viewer="{ movable: false }"
                >
                  <template>
                    <img
                      v-for="image in item.car_images"
                      :key="image.image_name"
                      :src="image.src"
                      width="40px"
                    />
                  </template>
                </div>
                <v-avatar tile size="40" @click="show('images' + item.car_no)">
                  <v-img :src="serverUrl + item.img_id_first"> </v-img>
                </v-avatar>
              </template> -->

              <template v-slot:[`item.car_types`]="{ item }">
                <span>
                  {{ item.car_types.car_type_name }} ({{
                    item.car_types.car_type_name_en
                  }})</span
                >
              </template>

              <template v-slot:[`item.car_price_vat`]="{ item }">
                {{
                  Number(item.car_price_vat).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </template>

              <template v-slot:[`item.net_price`]="{ item }">
                {{
                  Number(item.net_price).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </template>

              <template v-slot:[`item.car_date_buy`]="{ item }">
                {{ $moment(item.car_date_buy).fromNow(true) }}
              </template>

              <template v-slot:[`item.amount_down`]="{ item }">
                {{
                  Number(item.amount_down).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </template>

              <template v-slot:[`item.amount_price`]="{ item }">
                {{
                  Number(item.amount_price).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </template>

              <template v-slot:[`item.working_customer_name`]="{ item }">
                <div v-if="item.car_stock == '3' && item.working">
                  {{ item.working.customer_name }}
                </div>
              </template>

              <template v-slot:[`item.car_stock`]="{ item }">
                <h5 v-if="item.car_stock == '1'" class="orange--text">รอรับ</h5>
                <h5 v-if="item.car_stock == '2'" class="blue--text">คลัง</h5>
                <h5 v-if="item.car_stock == '3'" class="green--text">ขาย</h5>
              </template>

              <template v-slot:[`item.booking_status`]="{ item }">
                <!-- <h5 v-if="item.booking_status == '1'" class="green--text">-</h5>
                <h5 v-if="item.booking_status == '0'" class="orange--text">
                  จอง
                </h5> -->
                <h5 v-if="item.workings.length > 0" class="green--text">
                  {{ item.workings.length }}
                </h5>
              </template>

              <template v-slot:[`item.car_active`]="{ item }">
                <h5 v-if="item.car_active == '1'" class="green--text">แสดง</h5>
                <h5 v-if="item.car_active == '0'" class="orange--text">ไม่</h5>
              </template>

              <template v-slot:[`item.car_gear`]="{ item }">
                <h5 v-if="item.car_gear == '1'" class="green--text">AT</h5>
                <h5 v-if="item.car_gear == '2'" class="orange--text">MT</h5>
              </template>

              <template v-slot:[`item.actions`]="{ item }">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 2 ||
                        user_group_permission == 3
                      "
                      @click="
                        ShareCar(
                          item.id,
                          item.car_stock,
                          item.car_active,
                          item.car_status
                        )
                      "
                    >
                      <v-list-item-title>แชร์รถ</v-list-item-title>
                    </v-list-item>

                    <v-list-item :to="'/liff/shareImage/?id=' + item.id">
                      <v-list-item-title>แชร์รูปรถ</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      :to="
                        '/stock/imagecar?id=' +
                        item.id +
                        '&openExternalBrowser=1'
                      "
                      target="_blank"
                    >
                      <v-list-item-title>โหลดรูปรถ</v-list-item-title>
                    </v-list-item>

                    <!-- <v-list-item>
                      <a
                        :href="
                          '/stock/imagecar?id=' +
                          item.id +
                          '&openExternalBrowser=1'
                        "
                        target="_blank"
                      >
                        <v-list-item-title>โหลดรูปรถ</v-list-item-title>
                      </a>
                    </v-list-item> -->

                    <v-list-item
                      @click="JobTechnician(item.id, item.car_stock)"
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 8
                      "
                    >
                      <v-list-item-title>{{
                        item.car_stock == 3
                          ? "แจ้งซ่อมหลังการขาย (อู่ใน)"
                          : "แจ้งซ่อม (อู่ใน)"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 8
                      "
                      @click="PathnerJobTechnician(item.id, item.car_stock)"
                    >
                      <v-list-item-title>{{
                        item.car_stock == 3
                          ? "แจ้งซ่อมหลังการขาย (อู่นอก)"
                          : "แจ้งซ่อม (อู่นอก)"
                      }}</v-list-item-title>
                    </v-list-item>

                    <!-- <v-list-item @click="AllInfoCar(item.id, item.car_no)">
                      <v-list-item-title>ภาพรวมของรถ</v-list-item-title>
                    </v-list-item> -->

                    <v-list-item @click="article_car(item.id)">
                      <v-list-item-title>ปริ้นใบ สคบ</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      @click="editItem(item.id, null)"
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 2 ||
                        user_group_permission == 3 ||
                        user_group_permission == 8 ||
                        user_group_permission == 10 ||
                        user_group_permission == 13
                      "
                    >
                      <v-list-item-title>แก้ไข/อัพไฟล์</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      @click="AddOutlay(item.id)"
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 8 ||
                        user_group_permission == 10 ||
                        user_group_permission == 11 ||
                        user_group_permission == 12
                      "
                    >
                      <v-list-item-title>เพิ่มค่าใช้จ่าย</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      @click="AddIncome(item.id)"
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 8 ||
                        user_group_permission == 10 ||
                        user_group_permission == 11 ||
                        user_group_permission == 12
                      "
                    >
                      <v-list-item-title>เพิ่มรายรับ</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="user_group_permission == -1 && item.car_status == 0"
                      @click="reRollItem(item.id)"
                    >
                      <v-list-item-title>เรียกคืน</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="user_group_permission == -1 && item.car_status == 1"
                      @click="deleteItem(item.id)"
                    >
                      <v-list-item-title>ลบ</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <dialogNew
      :dialog="dialog"
      :id="id"
      :action="action"
      :formTitle="formTitle"
      @cancleItem="dialog = false"
      @success="addSuccess"
      @error="addError"
    />

    <!-- <dialogJobTechnician
      :dialogJobTechnician="dialogJobTechnician"
      :idWork="idWork"
      :jobType="jobType"
      :idCar="idCar"
      :actionJobTechnician="actionJobTechnician"
      :formTitleJobTechnician="formTitleJobTechnician"
      @cancleItem="dialogJobTechnician = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogPathnerJobTechnician
      :dialogPathnerJobTechnician="dialogPathnerJobTechnician"
      :jobType="jobType"
      :idCar="idCar"
      :actionPathnerJobTechnician="actionPathnerJobTechnician"
      :formTitlePathnerJobTechnician="formTitlePathnerJobTechnician"
      @cancleItem="dialogPathnerJobTechnician = false"
      @success="addSuccess"
      @error="addError"
    /> -->

    <!-- <dialogImageCar
      :dialog="dialogImg"
      :id="car_id"
      @cancleItem="dialogImg = false"
    /> -->

    <!-- <dialogAddOutlay
      :dialog="dialogDialogAddOutlay"
      :id="idDialogAddOutlay"
      :car_id="car_id"
      :action="actionDialogAddOutlay"
      :formTitle="formTitleDialogAddOutlay"
      @cancleItem="dialogDialogAddOutlay = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogAddIncome
      :dialog="dialogDialogAddIncome"
      :id="idDialogAddIncome"
      :car_id="car_id"
      :action="actionDialogAddIncome"
      :formTitle="formTitleDialogAddIncome"
      @cancleItem="dialogDialogAddIncome = false"
      @success="addSuccess"
      @error="addError"
    /> -->

    <!-- <dialogFileCar
      :dialog="dialogFileCar"
      :id="car_id"
      :formTitle="formTitle_filecar"
      @cancleItem="dialogFileCar = false"
    /> -->

    <!-- <febMessager
      v-if="
        user_group_permission == -1 ||
        user_group_permission == 10 ||
        user_group_permission == 13
      "
      v-show="btnUpdate"
      @success="addSuccess"
      @disbleBtn="btnUpdate = false"
    /> -->
  </div>
</template>

<script>
import * as apiCars from "@/Api/apiCars";
import * as customAlart from "@/customJS/customAlart";
import * as apiBranches from "@/Api/apiBranches";
import * as apiCar_types from "@/Api/apiCar_types";

import dialogNew from "@/components/dialog/dialogPurchaseCar";
// import dialogJobTechnician from "@/components/dialog/dialogJobTechnician";
// import dialogPathnerJobTechnician from "@/components/dialog/dialogPathnerJobTechnician";
// import dialogImage from "@/components/dialog/dialogImage";
// import dialogAddOutlay from "@/components/dialog/dialogAdd_outlay";
// import dialogAddIncome from "@/components/dialog/dialogAdd_income";

// import dialogImageCar from "@/components/dialog/dialogImage_car";

// import dialogFileCar from "@/components/dialog/dialogFileCar";
// import febMessager from "@/components/febButton";

import moment from "moment";

export default {
  layout: "mobile",
  components: {
    dialogNew,
    // dialogJobTechnician,
    // dialogPathnerJobTechnician,
    // dialogAddOutlay,
    // dialogAddIncome,
    // dialogFileCar,
    // dialogImageCar,
    // febMessager,
  },
  data() {
    return {
      // height: "80vh",
      myLiffId: process.env.liff.shareImage,
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      serverUrl: process.env.serverUrl,
      serverUrlShop: process.env.serverUrlShop,
      loading: true,
      search: "",
      id: "",
      dialog: false,
      btnUpdate: true,
      formTitle: "Add",
      action: "add",
      idCar: "",
      idWork: 0,
      jobType: "",
      car_types_id: 0,
      dialogJobTechnician: false,
      formTitleJobTechnician: "Add",
      actionJobTechnician: "check",

      dialogPathnerJobTechnician: false,
      formTitlePathnerJobTechnician: "Add",
      actionPathnerJobTechnician: "add",

      idDialogAddOutlay: "",
      formTitleDialogAddOutlay: "Add",
      actionDialogAddOutlay: "add",
      dialogDialogAddOutlay: false,

      idDialogAddIncome: "",
      formTitleDialogAddIncome: "Add",
      actionDialogAddIncome: "add",
      dialogDialogAddIncome: false,

      dialogFileCar: false,
      item_per_page: 10,
      car_id: null,
      dialogAllInfoCar: false,
      formTitle_filecar: "รวมไฟล์ของรถ",

      formTitleAllInfoCar: "ภาพรวมลำดับรถ",
      imgUrl: "",
      dialogImg: false,
      car_stock: 2,
      data_car_stock: [
        {
          car_stock: 1,
          label: "รอรับรถ",
        },
        {
          car_stock: 2,
          label: "อยู่ในคลัง",
        },
        {
          car_stock: 4,
          label: "รอรับ/อยู่ในคลัง",
        },
        {
          car_stock: 3,
          label: "ขายออกแล้ว",
        },
      ],

      car_status: 1,
      data_car_status: [
        {
          car_status: 1,
          label: "ไม่แสดง",
        },
        {
          car_status: 0,
          label: "แสดงรถที่ถูกลบ",
        },
      ],
      headers: [],
      headersMap: [],
      selectedHeaders: [],
      interest: 5,
      data: [],
      dataCars: [],
      branches: [],
      carType: [],
      moment: moment(),
      branch_id: 0,
      user_code: this.$auth.$storage.getLocalStorage("userData-user_code"),
    };
  },

  created() {
    this.headersMap = [
      {
        text: "จัดการ",
        value: "actions",
        sortable: false,
        class: "textOneLine",
      },
      { text: "รูปภาพ", value: "car_img", class: "textOneLine" },
      {
        text: "จอง",
        value: "booking_status",
        class: "textOneLine",
      },
      {
        text: "ลำดับ",
        value: "car_no",
        align: "center",
        class: "textOneLine",
      },
      {
        text: "สาขา",
        value: "branch.branch_name",
        class: "textOneLine",
      },
      {
        text: "ประเภท",
        value: "car_types",
        class: "textOneLine",
      },
      {
        text: "ค่ายรถ",
        value: "car_models.car_model_name",
        width: "100px",
        class: "textOneLine",
      },
      {
        text: "รุ่น",
        value: "car_series.car_series_name",
        width: "150px",
        class: "textOneLine",
      },
      {
        text: "รุ่นย่อย",
        value: "car_serie_sub.car_serie_sub_name",
        width: "200px",
        class: "textOneLine",
      },

      {
        text: "เกียร์",
        value: "car_gear",
        class: "textOneLine",
      },
      {
        text: "ปี",
        value: "car_year",
        class: "textOneLine",
      },
      {
        text: "สี",
        value: "color.color_name",
        class: "textOneLine",
      },

      {
        text: "จัด",
        value: "amount_price",
        class: "textOneLine",
      },
      {
        text: "ดาวน์",
        value: "amount_down",
        class: "textOneLine",
      },
      {
        text: "ขาย",
        value: "car_price_vat",
        class: "textOneLine",
      },
      {
        text: "ผู้ซื้อ",
        value: "working_customer_name",
        class: "textOneLine",
        width: "150px",
      },
      {
        text: "วันปล่อยรถ",
        value: "contract.contract_date",
        class: "textOneLine",
        width: "150px",
      },
      {
        text: "ทะเบียน (เก่า)",
        value: "car_regis",
        class: "textOneLine",
      },
      {
        text: "จังหวัด",
        value: "province.name_th",
        class: "textOneLine",
      },
      {
        text: "ทะเบียน (ใหม่)",
        value: "car_regis_current",
        class: "textOneLine",
      },
      {
        text: "จังหวัด",
        value: "province_current.name_th",
        class: "textOneLine",
      },
      {
        text: "เลขเครื่องยนต์",
        value: "car_no_engine",
        class: "textOneLine",
      },
      {
        text: "เลขตัวถัง",
        value: "car_no_body",
        class: "textOneLine",
      },
      {
        text: "ซ่อม",
        value: "car_fix",
        class: "textOneLine",
      },
      {
        text: "หน้าร้าน",
        value: "car_active",
        class: "textOneLine",
      },
      {
        text: "สถานะ",
        value: "car_stock",
        class: "textOneLine",
      },
      {
        text: "ผ่าน",
        value: "car_date_buy",
        class: "textOneLine",
      },
    ];
    this.headers = Object.values(this.headersMap);
    this.selectedHeaders = this.headers;

    window.addEventListener("resize", this.onResize);
    this.$nextTick(this.onResize);
  },

  async mounted() {
    await this.getData();
    await this.getBranches();
    await this.getCartypes();
    // await this.selectSee();
  },

  computed: {
    tHeader() {
      return this.showHeaders.map(function (item) {
        return item.text;
      });
    },
    //Done to get the ordered headers
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
  },

  methods: {
    // onResize() {
    //   this.height = document.getElementById("outer").clientHeight;
    //   this.$nextTick(() => {
    //     window.removeEventListener("resize", this.onResize);
    //   });
    // },

    show(ref) {
      const viewer = this.$el.querySelector("." + ref).$viewer;
      viewer.show();
    },
    gotoImage(src) {
      let route = this.$router.resolve({ path: src });
      window.open(route.href);
    },
    itemRowBackground: function (item) {
      return item.comment == null ? "" : "style-1";
    },
    getItemPerPage(val) {
      // console.log(val);
      this.item_per_page = val;
    },
    async article_car(id) {
      // console.log(id);
      let routeData = this.$router.resolve({
        name: "prints-print_article_car",
        query: { code: id },
      });
      window.open(routeData.href, "_blank");
    },
    async getCartypes() {
      const response = await apiCar_types.select();
      this.carType = response.data;
      //  {{ item.car_type_name }} ({{ item.car_type_name_en }})
      await this.carType.push({
        id: 0,
        car_type_name: "ทั้งหมด",
        car_type_name_en: "All",
      });
      this.car_types_id = 0;
      this.loading = false;
    },

    async getData() {
      // this.data = [];
      this.loading = true;
      const data = new FormData();
      data.append("user_group_permission", this.user_group_permission);
      data.append("branch_id", this.branch_id);
      data.append("car_stock", this.car_stock);
      data.append("car_status", this.car_status);
      data.append("car_types_id", this.car_types_id);

      const response = await apiCars.stockCar(data);
      // this.dataCars = response.data;
      this.data = response.data;
      // console.log(response);
      this.loading = false;
    },
    handleDownload() {
      const filterVal = [];
      // console.log(this.showHeaders);
      for (let index = 0; index < this.showHeaders.length; index++) {
        // console.log(this.showHeaders[index].value);
        filterVal.push(this.showHeaders[index].value);
      }
      // console.log(moment().format("DD/MM/YYYY ( HH:mm น.)"));
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename:
              "คลังรถ(" + moment().format("DD/MM/YYYY ( HH:mm น.)") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      // return jsonData.map((v) =>
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "car_models.car_model_name") {
            // console.log(v)
            return v.car_models.car_model_name;
          } else if (j == "car_serie_sub.car_serie_sub_name") {
            if (v.car_serie_sub == null) {
              return "ไม่ระบุ";
            } else {
              return v.car_serie_sub.car_serie_sub_name;
            }
          } else if (j == "color.color_name") {
            return v.color.color_name;
          } else if (j == "branch.branch_name") {
            return v.branch.branch_name;
          } else if (j == "car_series.car_series_name") {
            return v.car_series.car_series_name;
          } else if (j == "car_types") {
            return (
              v.car_types.car_type_name +
              "(" +
              v.car_types.car_type_name_en +
              ")"
            );
          } else if (j == "car_gear") {
            if (v.car_gear == 1) {
              return "AT";
            } else {
              return "MT";
            }
          } else if (j == "car_price_vat") {
            return Number(v.car_price_vat).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            });
          } else if (j == "net_price") {
            return Number(v.net_price).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            });
          } else if (j == "car_date_buy") {
            // return moment(v.car_date_buy).format("DD/MM/YYYY ( HH:mm น.)");
            return moment(v.car_date_buy).fromNow(true);
          } else if (j == "amount_down") {
            return Number(v.amount_down).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            });
          } else if (j == "amount_price") {
            return Number(v.amount_price).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            });
          } else if (j == "provinces.name_th") {
            return v.provinces == null ? "" : v.provinces.name_th;
          } else if (j == "car_regis") {
            return v.car_regis == null ? "" : v.car_regis;
          } else if (j == "province_new.name_th") {
            return v.province_new == null ? "" : v.province_new.name_th;
          } else if (j == "car_regis_current") {
            return v.car_regis_current == null ? "" : v.car_regis_current;
          } else if (j == "car_stock") {
            if (v.car_stock == 1) {
              return "รอรับ";
            } else if (v.car_stock == 2) {
              return "คลัง";
            } else {
              return "ขาย";
            }
          } else if (j == "booking_status") {
            if (v.booking_status == 1) {
              return "-";
            } else if (v.booking_status == 2) {
              return "จอง";
            }
          } else if (j == "car_active") {
            if (v.car_active == 0) {
              return "ไม่แสดง";
            } else if (v.car_active == 1) {
              return "แสดง";
            }
          } else if (j == "created_at") {
            // return moment(v.created_at).format("DD/MM/YYYY ( HH:mm น.)");
            return moment(v.created_at).format("DD/MM/YYYY ( HH:mm น.)");
          } else {
            return v[j];
          }
        })
      );
    },
    async update_amountPrice() {
      this.loading = true;
      this.data = [];
      const response = await apiCars.update_amountPrice();
      // console.log(response);
      if (response.status == 200) {
        customAlart.TopSuccess();
      } else {
        customAlart.TopError();
      }
      await this.getData();
      // await this.selectSee();
      this.loading = false;
    },
    async selectSee() {
      // new_data = [];
      let new_data = [];
      if (this.branch_id == 0 && this.car_types_id == 0) {
        for (let index = 0; index < this.dataCars.length; index++) {
          if (this.car_stock == 4) {
            if (
              this.dataCars[index].car_stock == 1 ||
              this.dataCars[index].car_stock == 2
            ) {
              if (this.dataCars[index].car_status == this.car_status) {
                new_data.push(this.dataCars[index]);
              }
            }
          } else {
            if (
              this.dataCars[index].car_status == this.car_status &&
              this.dataCars[index].car_stock == this.car_stock
            ) {
              new_data.push(this.dataCars[index]);
            }
          }
        }
      } else if (this.branch_id > 0 && this.car_types_id > 0) {
        for (let index = 0; index < this.dataCars.length; index++) {
          if (this.car_stock == 4) {
            if (
              this.dataCars[index].car_stock == 1 ||
              this.dataCars[index].car_stock == 2
            ) {
              if (
                this.dataCars[index].branch_id == this.branch_id &&
                this.dataCars[index].car_status == this.car_status &&
                this.dataCars[index].car_types_id == this.car_types_id
              ) {
                new_data.push(this.dataCars[index]);
              }
            }
          } else {
            if (
              this.dataCars[index].car_stock == this.car_stock &&
              this.dataCars[index].branch_id == this.branch_id &&
              this.dataCars[index].car_status == this.car_status &&
              this.dataCars[index].car_types_id == this.car_types_id
            ) {
              new_data.push(this.dataCars[index]);
            }
          }
        }
      } else if (this.branch_id > 0 && this.car_types_id == 0) {
        for (let index = 0; index < this.dataCars.length; index++) {
          if (this.car_stock == 4) {
            if (
              this.dataCars[index].car_stock == 1 ||
              this.dataCars[index].car_stock == 2
            ) {
              if (
                this.dataCars[index].branch_id == this.branch_id &&
                this.dataCars[index].car_status == this.car_status
              ) {
                new_data.push(this.dataCars[index]);
              }
            }
          } else {
            if (
              this.dataCars[index].car_stock == this.car_stock &&
              this.dataCars[index].branch_id == this.branch_id &&
              this.dataCars[index].car_status == this.car_status
            ) {
              new_data.push(this.dataCars[index]);
            }
          }
        }
      } else if (this.branch_id == 0 && this.car_types_id > 0) {
        for (let index = 0; index < this.dataCars.length; index++) {
          if (this.car_stock == 4) {
            if (
              this.dataCars[index].car_stock == 1 ||
              this.dataCars[index].car_stock == 2
            ) {
              if (
                this.dataCars[index].car_status == this.car_status &&
                this.dataCars[index].car_types_id == this.car_types_id
              ) {
                new_data.push(this.dataCars[index]);
              }
            }
          } else {
            if (
              this.dataCars[index].car_stock == this.car_stock &&
              this.dataCars[index].car_status == this.car_status &&
              this.dataCars[index].car_types_id == this.car_types_id
            ) {
              new_data.push(this.dataCars[index]);
            }
          }
        }
      }
      // console.log(new_data);
      this.data = new_data;
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      await this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
      this.branch_id = 0;
      this.loading = false;
      // console.log(response);
    },
    async AddItem() {
      this.formTitle = "เพิ่มข้อมูล";
      this.dialog = true;
      this.stock = false;
      this.id = "";
      this.action = "add";
    },

    async editItem(item) {
      this.formTitle = "แก้ไขข้อมูล";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },
    async AllInfoCar(id, car_no) {
      // this.formTitle = "ภาพรวมของรถ";
      // this.dialogAllInfoCar = true;
      // this.formTitleAllInfoCar = "ภาพรวมรถลำดับที่: " + car_no;
      // this.id = id;

      let routeData = this.$router.resolve({
        // name: "/infocar/infocar",
        name: "infocar-infocar",
        query: { id: id, formTitleAllInfoCar: car_no },
      });
      window.open(routeData.href, "_blank");
    },
    async AddOutlay(id) {
      this.formTitleDialogAddOutlay = "เพิ่มค่าใช้จ่าย";
      this.dialogDialogAddOutlay = true;
      this.car_id = id;
      this.idDialogAddOutlay = "";
      this.actionDialogAddOutlay = "add";
    },
    async AddIncome(id) {
      this.formTitleDialogAddIncome = "เพิ่มรายรับ";
      this.dialogDialogAddIncome = true;
      this.car_id = id;
      this.idDialogAddIncome = "";
      this.actionDialogAddIncome = "add";
    },

    async ShareCar(id, car_stock, car_active, car_status) {
      if (car_stock == 3 || car_active == 0 || car_status == 0) {
        customAlart.checkShareUrl();
      } else {
        const carUrl =
          this.serverUrlShop +
          "Info_Cars?code=" +
          id +
          "&sale_code=" +
          this.user_code +
          "&interest=" +
          this.interest;
        // this.fallbackCopyTextToClipboard(carUrl);
        if (!navigator.clipboard) {
          this.fallbackCopyTextToClipboard(carUrl);
          return;
        }
        navigator.clipboard.writeText(carUrl).then(
          function () {
            customAlart.TopSuccess();
          },
          function (err) {
            customAlart.TopError();
          }
        );
      }
      // http://localhost:51035/prasertpol/Info_Cars?code=4
    },

    fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        // console.log("Fallback: Copying text command was " + msg);
        customAlart.TopSuccess();
      } catch (err) {
        // console.error("Fallback: Oops, unable to copy", err);
        customAlart.TopError();
      }

      document.body.removeChild(textArea);
    },
    async JobTechnician(car_id, car_stock) {
      this.formTitleJobTechnician = "แจ้งซ่อม (อู่ใน)";
      this.dialogJobTechnician = true;
      this.jobType = car_stock == 3 ? 2 : 1;
      this.idCar = car_id;
      this.actionJobTechnician = "check";
    },

    async PathnerJobTechnician(car_id, car_stock) {
      this.formTitlePathnerJobTechnician = "แจ้งซ่อม (อู่นอก)";
      this.dialogPathnerJobTechnician = true;
      this.jobType = car_stock == 3 ? 2 : 1;
      this.idCar = car_id;
      this.actionPathnerJobTechnician = "add";
    },

    async addSuccess(value) {
      if (value == "Car") {
        this.dialog = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
            // await this.selectSee();
          }
          this.btnUpdate = true;
          customAlart.TopSuccess();
        });
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
            // await this.selectSee();
          }
          customAlart.TopSuccess();
        });
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
            // await this.selectSee();
          }
          customAlart.TopSuccess();
        });
      } else if (value == "Outlay") {
        this.dialogDialogAddOutlay = false;
      } else if (value == "income") {
        this.dialogDialogAddIncome = false;
      }
    },
    async addError(value) {
      if (value == "Car") {
        this.dialog = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
            // await this.selectSee();
          }
          customAlart.TopError();
        });
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
            // await this.selectSee();
          }
          customAlart.TopSuccess();
        });
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
            // await this.selectSee();
          }
          customAlart.TopSuccess();
        });
      } else if (value == "Outlay") {
        this.dialogDialogAddOutlay = false;
      } else if (value == "income") {
        this.dialogDialogAddIncome = false;
      }
    },
    async getAllImg(car_id) {
      this.dialogImg = true;
      this.car_id = car_id;
      // console.log(car_id);
    },
    // showImg(url) {
    //   this.dialogImg = true;
    //   this.imgUrl = url;
    // },
    async reRollItem(id) {
      var isConfirmed = customAlart.RerollConfirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiCars.reRollCar(id);
          // console.log(respone);
          respone.then(async (res) => {
            // console.log(res);
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },
    async dialogAddFile(car_id) {
      this.car_id = car_id;
      this.dialogFileCar = true;
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiCars.destroy(id);
          // console.log(respone);
          respone.then(async (res) => {
            // console.log(res);
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },
  },

  watch: {
    data() {
      const self = this;
      return this.dataCars.map(function (item) {
        item.no =
          self.data
            .map(function (x) {
              return x.id;
            })
            .indexOf(item.id) + 1;
      });
    },
    // height() {
    //   // console.log(this.height);
    //   this.height = document.getElementById("outer").clientHeight;
    // },
  },
};
</script>

<style>
.style-1 {
  background-color: rgb(255, 204, 204);
}
.style-2 {
  background-color: rgb(255, 255, 204);
}
</style>
