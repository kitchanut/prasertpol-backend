<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row class="d-flex align-center">
          <v-col cols="3">
            <v-autocomplete
              v-model="id"
              :filter="filterObject"
              :items="dataCar"
              item-text="car_no"
              :disabled="waitingPushdata"
              no-data-text="ไม่มีข้อมูล"
              item-value="id"
              label="ลำดับรถ"
              outlined
              dense
              hide-details
              @change="getData()"
            >
              <template
                slot="selection"
                slot-scope="{ item }"
              >
                {{ item.car_no }} ({{ item.car_regis }})
              </template>

              <template
                slot="item"
                slot-scope="{ item }"
              >
                {{ item.car_no }} ({{ item.car_regis }})
              </template>
            </v-autocomplete>
          </v-col>
          <v-col v-show="!id">
            <dateSelect2 @timeSelect="selectTimeStart" />
          </v-col>
          <v-col v-if="id">
            <v-btn
              color="primary"
              class="mr-2"
              @click="AddOutlay(id)"
            >เพิ่มค่าใช้จ่าย</v-btn>

            <v-btn
              @click="getminiInfoCar(id)"
              dark
              color="primary"
            >
              <v-icon small> mdi-magnify </v-icon>
            </v-btn>

          </v-col>
        </v-row>
        <!-- <h1 class="text-center">
          ค่าใช้จ่ายตัวรถ
          <v-btn
            v-if="user_group_permission == -1 || user_group_permission == 10"
            color="primary"
            fab
            x-small
            dark
            @click="editItem(id)"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
        </h1> -->

        <v-row class="d-flex align-center">

          <v-spacer></v-spacer>
          <v-col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            xl="4"
          >
            <v-text-field
              v-model="search"
              id="search"
              name="search"
              label="ค้นหารายการ"
              single-line
              hide-details
              @keyup.enter="getData()"
            >
            </v-text-field>

          </v-col>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            @click="getData()"
          >
            <v-icon dark>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-row>

        <v-data-table
          :headers="OutlayHeaders"
          :items="dataOutlay"
          :items-per-page="10"
          :loading="loading"
          no-data-text="ยังไม่มีการเพิ่มข้อมูล"
          loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        >
          <!-- <template v-slot:[`item.file`]="{ item }">
            <div v-if="item.file == null">
              <span>-</span>
            </div>
            <div v-else>
              <v-btn icon>
                <v-avatar
                  size="40"
                  @click="showImg(serverUrl + item.file)"
                >
                  <v-img :src="serverUrl + item.file"> </v-img>
                </v-avatar>
              </v-btn>
            </div>
          </template> -->
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
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
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
      </v-card-text>
    </v-card>

    <dialogAddOutlay
      :dialog="dialogDialogAddOutlay"
      :id="idDialogAddOutlay"
      :car_id="id"
      :action="actionDialogAddOutlay"
      :formTitle="formTitleDialogAddOutlay"
      @cancleItem="dialogDialogAddOutlay = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogMini
      :dialog="dialog_mini"
      :data_car="data_car"
      :type="dialogMini_type"
      :data_income="data_income"
      :data_outlay_cost="data_outlay_cost"
      @cancleItem="dialog_mini = false"
    />

  </div>
</template>

<script>
import moment from "moment";
import * as apiOutlay_costs from "@/Api/apiOutlay_costs";
import * as apiAdd_income from "@/Api/apiAdd_income";
import * as apiCars from "@/Api/apiCars";

import * as customAlart from "@/customJS/customAlart";
import dateSelect2 from "@/components/DateSelect/dateSelect2";
import dialogAddOutlay from "@/components/dialog/dialogAdd_outlay_small";
import dialogMini from "@/components/dialog/dialogMini_car";

export default {
  components: {
    dateSelect2,
    dialogAddOutlay,
    dialogMini,
  },
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
        { text: "ลำดับ", value: "row_no", align: "center" },
        // { text: "ไฟล์", value: "file" },
        {
          text: "วันที่",
          value: "date",
        },
        { text: "ลำดับรถ", value: "car.car_no" },
        { text: "เลขธุรกรรม", value: "no" },
        {
          text: "ร้านค้า/ลูกค้า",
          value: "shop",
        },
        {
          text: "รายการ",
          value: "detail",
        },
        // { text: "ลำดับรถ", value: "car.car_no" },
        // { text: "หักเงิน", value: "broken" },
        { text: "ประเภท", value: "type" },
        { text: "บิล", value: "type_bill" },
        { text: "จำนวนเงิน", value: "money", align: "right" },
        { text: "สาขา", value: "branch.branch_name" },
        { text: "โดย", value: "user.first_name" },

        { text: "จัดการ", value: "actions", sortable: false },
      ],
    };
  },
  mounted() {
    this.getDataCar();

    this.selectTimeStart({
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
    });
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
      this.loading = false;
    },
    filterObject(item, queryText, itemText) {
      return (
        item.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) >
          -1 ||
        item.car_regis
          .toLocaleLowerCase()
          .indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    async getDataCar() {
      const response = await apiCars.selectall();
      // console.log(response);
      this.dataCar = response.data;
      this.waitingPushdata = false;
    },
    async AddOutlay(id) {
      this.formTitleDialogAddOutlay = "เพิ่มค่าใช้จ่าย";
      this.dialogDialogAddOutlay = true;
      this.idDialogAddOutlay = "";
      this.actionDialogAddOutlay = "add";
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.ConfirmedStatus();
      await isConfirmed.then(async (result) => {
        if (result == true) {
          const respone = apiOutlay_costs.delete_outlay(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              await this.getData();
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
          });
          this.$nextTick(() => {
            this.getData();
          });
        }
      });
    },
    async getminiInfoCar(car_id) {
      // const data_car = new FormData();
      // data_car.append("id", car_id);
      // data_car.append("user_group_permission", 9);
      const response_car = await apiCars.getAllinfo(car_id, 9);
      this.data_car = response_car.data;
      // console.log(this.data_car);

      const data = new FormData();
      data.append("car_id", car_id);

      const response_outlay = await apiOutlay_costs.outlaycost_car(data);
      this.data_outlay_cost = response_outlay.data;

      const response_income = await apiAdd_income.income_car(data);
      this.data_income = response_income.data;

      this.$nextTick(() => {
        this.dialog_mini = true;
        this.dialogMini_type = "outlay";
      });
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
        customAlart.TopSuccess();

        await this.getData();
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
  },
  watch: {
    dataOutlay() {
      const self = this;
      return this.dataOutlay.map(function (item) {
        item.row_no =
          self.dataOutlay
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
</style>
