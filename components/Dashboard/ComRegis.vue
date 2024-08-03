<template>
  <div class="pa-3">
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-text>
            <div class="d-flex">
              <b>รายการรถในคลังที่มีวันต่อภาษี</b>
              <v-spacer></v-spacer>
              <v-switch v-model="tax_date_check" dense hide-details></v-switch>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="tax_date_filter" multi-sort dense>
            <template v-slot:[`item.tex_date`]="{ item }">
              <span
                v-if="user_group_permission == -1 || user_group_permission == 10"
                style="color: #1876d1; cursor: pointer"
                @click="editItem(item.id, null)"
              >
                {{ item.tex_date }}
              </span>
              <span v-else>{{ item.tex_date }}</span>
              <span v-if="$moment(item.tex_date).diff($moment(), 'days') < 0" style="color: red">
                ({{ $moment(item.tex_date).diff($moment(), "days") }} วัน)
              </span>
              <span v-else-if="$moment(item.tex_date).diff($moment(), 'days') < 90" style="color: orange">
                ({{ $moment(item.tex_date).diff($moment(), "days") }} วัน)
              </span>
              <span v-else>({{ $moment(item.tex_date).diff($moment(), "days") }} วัน)</span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined>
          <v-card-text><b>รายการรถในคลังที่<u>ไม่มี</u>วันต่อภาษี</b></v-card-text>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="no_tax_date" multi-sort dense>
            <template v-slot:[`item.tex_date`]="{ item }">
              <span
                v-if="user_group_permission == -1 || user_group_permission == 10"
                style="color: #1876d1; cursor: pointer"
                @click="editItem(item.id, null)"
              >
                เพิ่มวันต่อภาษี
              </span>
              <span v-else>{{ item.tex_date }}</span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-text>
            <div class="d-flex">
              <b>รายการรถที่ขายแล้วที่มีวันต่อภาษี</b>
              <v-spacer></v-spacer>
              <v-switch v-model="tax_date_sale_check" dense hide-details></v-switch>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="tax_date_sale_filter" multi-sort dense>
            <template v-slot:[`item.tex_date`]="{ item }">
              <span
                v-if="user_group_permission == -1 || user_group_permission == 10"
                style="color: #1876d1; cursor: pointer"
                @click="editItem(item.id, null)"
              >
                {{ item.tex_date }}
              </span>
              <span v-else>{{ item.tex_date }}</span>
              <span v-if="$moment(item.tex_date).diff($moment(), 'days') < 0" style="color: red">
                ({{ $moment(item.tex_date).diff($moment(), "days") }} วัน)
              </span>
              <span v-else-if="$moment(item.tex_date).diff($moment(), 'days') < 90" style="color: orange">
                ({{ $moment(item.tex_date).diff($moment(), "days") }} วัน)
              </span>
              <span v-else>({{ $moment(item.tex_date).diff($moment(), "days") }} วัน)</span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined>
          <v-card-text><b>รายการรถที่ขายแล้ว<u>ไม่มี</u>วันต่อภาษี</b></v-card-text>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="no_tax_date_sale" multi-sort dense>
            <template v-slot:[`item.tex_date`]="{ item }">
              <span
                v-if="user_group_permission == -1 || user_group_permission == 10"
                style="color: #1876d1; cursor: pointer"
                @click="editItem(item.id, null)"
              >
                เพิ่มวันต่อภาษี
              </span>
              <span v-else>{{ item.tex_date }}</span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <dialogNew
      :dialog="dialog"
      :id="id"
      :action="action"
      :formTitle="formTitle"
      @cancleItem="dialog = false"
      @success="addSuccess"
      @error="addError"
    />
  </div>
</template>

<script>
import * as apiDashboard from "@/Api/apiDashboard";
import dialogNew from "@/components/dialog/dialogPurchaseCar";
import moment from "moment";
export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      headers: [
        {
          text: "ลำดับ",
          value: "car_no",
        },
        { text: "ทะเบียน", value: "car_regis" },
        // { text: "รุ่น", value: "car_series.car_series_name" },
        { text: "วันต่อภาษี", value: "tex_date" },
      ],

      tax_date_check: false,
      tax_date_sale_check: false,

      tax_date: [],
      no_tax_date: [],
      tax_date_sale: [],
      no_tax_date_sale: [],

      formTitle: "",
      dialog: false,
      id: 0,
      action: "",
    };
  },
  async mounted() {
    this.getData();
  },
  computed: {
    tax_date_filter() {
      if (this.tax_date_check) {
        return this.tax_date.filter((item) => moment(item.tex_date).diff(moment(), "days") >= 0);
      } else {
        return this.tax_date;
      }
    },
    tax_date_sale_filter() {
      if (this.tax_date_sale_check) {
        return this.tax_date_sale.filter((item) => moment(item.tex_date).diff(moment(), "days") >= 0);
      } else {
        return this.tax_date_sale;
      }
    },
  },
  methods: {
    async getData() {
      const response = await apiDashboard.dashboard_car_registration();
      this.tax_date = response.data.tax_date;
      this.no_tax_date = response.data.no_tax_date;
      this.tax_date_sale = response.data.tax_date_sale;
      this.no_tax_date_sale = response.data.no_tax_date_sale;
      console.log(response.data);
    },
    async editItem(item) {
      this.formTitle = "แก้ไขข้อมูล";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
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
};
</script>

<style scoped>
.v-input--selection-controls {
  margin-top: 0px !important;
  padding-top: 0px !important;
}
</style>
