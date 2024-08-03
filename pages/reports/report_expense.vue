<template>
  <div>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="6" class="d-flex align-center">
            <v-btn
              @click="handleDownload()"
              color="success"
              class="mr-5"
              style="min-width: 0px; width: 40px; height: 40px"
            >
              <v-icon>mdi-microsoft-excel</v-icon>
            </v-btn>
            <dateSelect2 @timeSelect="selectTimeStart" />
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="3" class="d-flex align-center">
            <v-text-field
              v-model="search"
              id="search"
              name="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              outlined
              dense
              single-line
              hide-details
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table
        :headers="OutlayHeaders"
        :items="dataOutlay"
        :items-per-page="10"
        :loading="loading"
        dense
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
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

        <template v-slot:[`item.broken`]="{ item }">
          <span v-if="item.broken == 1">ไม่</span>
          <span v-else>หัก</span>
        </template>

        <template v-slot:[`item.type_bill`]="{ item }">
          <span v-if="item.type_bill == 1">เงินสด</span>
          <span v-else>ใบกำกับภาษี</span>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-menu offset-y>
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
  </div>
</template>
<script>
import moment from "moment";
import * as apiOutlay_costs from "@/Api/apiOutlay_costs";

export default {
  data() {
    return {
      id: null,
      loading: false,
      search: "",
      dataOutlay: [],
      timeStart: null,
      timeEnd: null,

      dataCar: [],
      waitingPushdata: true,

      idDialogAddOutlay: "",
      formTitleDialogAddOutlay: "Add",
      actionDialogAddOutlay: "add",
      dialogDialogAddOutlay: false,

      dialog_mini: false,
      dialogMini_type: "",
      data_car: [],
      data_outlay_cost: [],
      data_income: [],

      OutlayHeaders: [
        { text: "ลำดับ", value: "no", align: "center", width: "8%" },
        // { text: "ไฟล์", value: "file" },
        {
          text: "วันที่",
          value: "date",
          width: "10%",
        },
        { text: "ลำดับรถ", value: "car.car_no", width: "10%" },

        {
          text: "ร้านค้า/ลูกค้า",
          value: "shop",
          width: "10%",
        },
        {
          text: "รายการ",
          value: "detail",
        },
        // { text: "ลำดับรถ", value: "car.car_no" },
        // { text: "หักเงิน", value: "broken" },

        { text: "จำนวนเงิน", value: "money", align: "right" },
        { text: "สาขา", value: "branch.branch_name" },
      ],
    };
  },
  mounted() {
    this.selectTimeStart({
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
    });
  },
  computed: {
    tHeader() {
      return this.OutlayHeaders.map(function (item) {
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
      const data = new FormData();
      data.append("car_id", this.id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("timeEnd", this.timeEnd);
      data.append("search", this.search);
      const response = await apiOutlay_costs.outlaycost_getwithTime(data);
      // console.log(response.data);
      this.dataOutlay = response.data;
      this.dataOutlay.map((item, index) => {
        item.no = index + 1;
      });
      this.loading = false;
    },
    handleDownload() {
      const filterVal = [];
      for (let index = 0; index < this.OutlayHeaders.length; index++) {
        filterVal.push(this.OutlayHeaders[index].value);
      }
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.dataOutlay;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "รายงานค่าใช้จ่าย (" + moment().format("DD/MM/YYYY ( HH:mm น.)") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "car.car_no") {
            return v.car.car_no;
          } else if (j == "branch.branch_name") {
            return v.branch.branch_name;
          } else {
            return v[j];
          }
        })
      );
    },
  },
};
</script>
