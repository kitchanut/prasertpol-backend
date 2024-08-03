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
    <v-container>
      <div class="d-flex">
        <v-dialog v-model="dialogFilter" width="550">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :color="
                branch_id != 0 ||
                car_types_id != 0 ||
                car_status != 1 ||
                car_stock != 2 ||
                car_price_vat_start != '' ||
                car_price_vat_end != '' ||
                amount_price_start != '' ||
                amount_price_end != ''
                  ? 'warning'
                  : ''
              "
              v-blur
              style="min-width: 0px; padding: 0px 8px; height: 40px"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-toolbar color="warning" dark flat dense style="font-size: 20px" height="6"> </v-toolbar>

            <v-fab-transition>
              <v-btn icon absolute style="top: 10px; right: 10px" fab small @click="dialogFilter = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-fab-transition>

            <h3 class="text-center" style="font-size: 22px; margin: 10px">กรองข้อมูล</h3>

            <v-divider></v-divider>
            <v-card-text class="mt-5">
              <v-row no-gutters class="d-flex align-center mt-2">
                <v-col cols="3">ช่วงราคา:</v-col>
                <v-col cols="4">
                  <v-text-field v-model="car_price_vat_start" outlined dense hide-details type="number"></v-text-field>
                </v-col>
                <v-col cols="1" class="text-center">-</v-col>
                <v-col cols="4">
                  <v-text-field v-model="car_price_vat_end" outlined dense hide-details type="number"></v-text-field>
                </v-col>
                <v-col></v-col>
              </v-row>

              <v-row no-gutters class="d-flex align-center mt-2">
                <v-col cols="3">ช่วงจัด:</v-col>
                <v-col cols="4">
                  <v-text-field v-model="amount_price_start" outlined dense hide-details type="number"></v-text-field>
                </v-col>
                <v-col cols="1" class="text-center">-</v-col>
                <v-col cols="4">
                  <v-text-field v-model="amount_price_end" outlined dense hide-details type="number"></v-text-field>
                </v-col>
                <v-col></v-col>
              </v-row>

              <v-row no-gutters class="d-flex align-center mt-2">
                <v-col cols="3">สถานที่ตั้งรถ:</v-col>
                <v-col cols="9">
                  <v-autocomplete
                    v-model="branch_id"
                    :items="branches"
                    item-text="branch_name"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row no-gutters class="d-flex align-center mt-2">
                <v-col cols="3">ประเภทรถ:</v-col>
                <v-col cols="9">
                  <v-autocomplete
                    v-model="car_types_id"
                    :items="carType"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="car_type_name"
                    item-value="id"
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
                </v-col>
              </v-row>

              <v-row no-gutters class="d-flex align-center mt-2">
                <v-col cols="3">รถที่ถูกลบ:</v-col>
                <v-col cols="9">
                  <v-autocomplete
                    v-model="car_status"
                    :items="data_car_status"
                    item-text="label"
                    item-value="car_status"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row no-gutters class="d-flex align-center mt-2">
                <v-col cols="3">สถานะ :</v-col>
                <v-col cols="9">
                  <v-autocomplete
                    v-model="car_stock"
                    :items="data_car_stock"
                    item-text="label"
                    item-value="car_stock"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                    @change="serch_text = ''"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="3" v-if="car_stock == 3"></v-col>
                <v-col cols="9" v-if="car_stock == 3">
                  <v-text-field
                    class="mt-1"
                    label="กรุณากรอก ลำดับรถหรือทะเบียน"
                    single-line
                    v-model="serch_text"
                    outlined
                    dense
                    hide-details=""
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                color="warning"
                text
                @click="
                  car_price_vat_start = '';
                  car_price_vat_end = '';
                  amount_price_start = '';
                  amount_price_end = '';
                  branch_id = 0;
                  car_stock = 2;
                  car_status = 1;
                  car_types_id = 0;
                  serch_text = '';
                "
              >
                <v-icon left>mdi-replay</v-icon>ล้างข้อมูล
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="getData"> <v-icon left>mdi-magnify</v-icon>ค้นหา </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-text-field
          class="ml-3"
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
      </div>

      <br />

      <div id="mycontainer">
        <div id="outer">
          <v-data-table
            :headers="showHeaders"
            :items="data"
            :items-per-page="item_per_page"
            :footer-props="{
              'items-per-page-options': [10, 25, 50, 100, -1],
              'items-per-page-text': '',
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
              <span> {{ item.car_types.car_type_name }} ({{ item.car_types.car_type_name_en }})</span>
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
                    v-if="user_group_permission == -1 || user_group_permission == 2 || user_group_permission == 3"
                    @click="ShareCar(item.id, item.car_stock, item.car_active, item.car_status)"
                  >
                    <v-list-item-title>แชร์รถ</v-list-item-title>
                  </v-list-item>

                  <v-list-item :to="'/liff/shareImage/?id=' + item.id">
                    <v-list-item-title>แชร์รูปรถ</v-list-item-title>
                  </v-list-item>

                  <v-list-item :to="'/stock/imagecar?id=' + item.id + '&openExternalBrowser=1'" target="_blank">
                    <v-list-item-title>โหลดรูปรถ</v-list-item-title>
                  </v-list-item>

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

                  <v-list-item v-if="user_group_permission == -1 && item.car_status == 0" @click="reRollItem(item.id)">
                    <v-list-item-title>เรียกคืน</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="user_group_permission == -1 && item.car_status == 1" @click="deleteItem(item.id)">
                    <v-list-item-title>ลบ</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </div>
      </div>
    </v-container>

    <dialogNew
      :dialog="dialog"
      :id="id"
      :action="action"
      :formTitle="formTitle"
      @cancleItem="dialog = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogImageCar :dialog="dialogImg" :id="car_id" @cancleItem="dialogImg = false" />
  </div>
</template>

<script>
import * as apiCars from "@/Api/apiCars";
import * as customAlart from "@/customJS/customAlart";
import * as apiBranches from "@/Api/apiBranches";
import * as apiCar_types from "@/Api/apiCar_types";

import dialogNew from "@/components/dialog/dialogPurchaseCar";
import dialogImageCar from "@/components/dialog/dialogImage_car";
import moment from "moment";

export default {
  layout: "mobile",
  components: {
    dialogNew,
    dialogImageCar,
  },
  data() {
    return {
      // height: "80vh",
      myLiffId: process.env.liff.shareImage,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      serverUrl: process.env.serverUrl,
      serverUrlShop: process.env.serverUrlShop,
      loading: true,

      // Search
      dialogFilter: false,
      branch_id: 0,
      car_types_id: 0,
      car_status: 1,
      car_stock: 2,
      serch_text: "",
      car_price_vat_start: "",
      car_price_vat_end: "",
      amount_price_start: "",
      amount_price_end: "",

      search: "",
      id: "",
      dialog: false,
      btnUpdate: true,
      formTitle: "Add",
      action: "add",
      idCar: "",
      idWork: 0,
      jobType: "",

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
      user_code: this.$auth.$storage.getLocalStorage("userData-user_code"),
    };
  },

  created() {
    this.headersMap = [
      { text: "จัดการ", value: "actions", sortable: false, class: "textOneLine" },
      { text: "รูปภาพ", value: "car_img", class: "textOneLine" },
      { text: "จอง", value: "booking_status", class: "textOneLine" },
      { text: "ลำดับ", value: "car_no", align: "center", class: "textOneLine" },
      { text: "สาขา", value: "branch.branch_name", class: "textOneLine" },
      { text: "ประเภท", value: "car_types", class: "textOneLine" },
      { text: "ค่ายรถ", value: "car_models.car_model_name", width: "100px", class: "textOneLine" },
      { text: "รุ่น", value: "car_series.car_series_name", width: "150px", class: "textOneLine" },
      { text: "รุ่นย่อย", value: "car_serie_sub.car_serie_sub_name", width: "200px", class: "textOneLine" },
      { text: "เกียร์", value: "car_gear", class: "textOneLine" },
      { text: "ปี", value: "car_year", class: "textOneLine" },
      { text: "สี", value: "color.color_name", class: "textOneLine" },
      { text: "จัด", value: "amount_price", class: "textOneLine", align: "end" },
      { text: "ดาวน์", value: "amount_down", class: "textOneLine", align: "end" },
      { text: "ขาย", value: "car_price_vat", class: "textOneLine", align: "end" },
      { text: "ผู้ซื้อ", value: "working_customer_name", class: "textOneLine", width: "150px" },
      { text: "วันปล่อยรถ", value: "contract.contract_date", class: "textOneLine", width: "150px" },
      { text: "ทะเบียน (เก่า)", value: "car_regis", class: "textOneLine" },
      { text: "จังหวัด", value: "province.name_th", class: "textOneLine" },
      { text: "ทะเบียน (ใหม่)", value: "car_regis_current", class: "textOneLine" },
      { text: "จังหวัด", value: "province_current.name_th", class: "textOneLine" },
      { text: "เลขเครื่องยนต์", value: "car_no_engine", class: "textOneLine" },
      { text: "เลขตัวถัง", value: "car_no_body", class: "textOneLine" },
      { text: "ซ่อม", value: "car_fix", class: "textOneLine" },
      { text: "หน้าร้าน", value: "car_active", class: "textOneLine" },
      { text: "สถานะ", value: "car_stock", class: "textOneLine" },
      { text: "ผ่าน", value: "car_date_buy", class: "textOneLine" },
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
  },

  computed: {
    tHeader() {
      return this.showHeaders.map(function (item) {
        return item.text;
      });
    },
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
  },

  methods: {
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

      data.append("car_price_vat_start", this.car_price_vat_start);
      data.append("car_price_vat_end", this.car_price_vat_end);
      data.append("amount_price_start", this.amount_price_start);
      data.append("amount_price_end", this.amount_price_end);

      data.append("branch_id", this.branch_id);
      data.append("car_stock", this.car_stock);
      data.append("car_status", this.car_status);
      data.append("car_types_id", this.car_types_id);
      data.append("serch_text", this.serch_text);

      const response = await apiCars.stockCar(data);
      // this.dataCars = response.data;
      this.data = response.data;
      // console.log(response);
      this.loading = false;
      this.dialogFilter = false;
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
      this.loading = false;
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
          this.serverUrlShop + "Info_Cars?code=" + id + "&sale_code=" + this.user_code + "&interest=" + this.interest;
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

    async addSuccess(value) {
      if (value == "Car") {
        this.dialog = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
          }
          this.btnUpdate = true;
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
          }
          customAlart.TopError();
        });
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
          }
          customAlart.TopSuccess();
        });
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
        this.$nextTick(async () => {
          if (value != "Outlay") {
            await this.getData();
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
    },
    async reRollItem(id) {
      var isConfirmed = customAlart.RerollConfirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiCars.reRollCar(id);
          respone.then(async (res) => {
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
          respone.then(async (res) => {
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
