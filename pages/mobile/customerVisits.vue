<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 2 || user_group_permission == 3">
    <v-card v-if="user_group_permission == -1">
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
          <v-autocomplete
            v-model="branch_id"
            :items="branches"
            item-text="branch_name"
            item-value="id"
            no-data-text="ไม่มีข้อมูล"
            label="สาขา"
            outlined
            dense
            hide-details
            @change="selectBranch"
          >
          </v-autocomplete>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
          <v-autocomplete
            :disabled="disabledTime"
            v-model="selectTime"
            :items="timeSelect"
            no-data-text="ไม่มีข้อมูล"
            item-text="title"
            item-value="value"
            label="ช่วงเวลา:"
            @change="changeSelectTime"
            outlined
            dense
            hide-details
          >
          </v-autocomplete>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
          <v-menu
            ref="menuTimeStart"
            v-model="menuTimeStart"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="timeStart"
                label="วันที่เริ่มต้น"
                v-bind="attrs"
                v-on="on"
                persistent-hint
                prepend-icon=""
                outlined
                dense
                hide-details
                flathide-details
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="timeStart"
              locale="th-TH"
              picker-date
              @input="menuTimeStart = false"
              @change="getData"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
          <v-menu
            ref="menuTimeEnd"
            v-model="menuTimeEnd"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="timeEnd"
                label="วันที่สิ้นสุด"
                v-bind="attrs"
                v-on="on"
                persistent-hint
                prepend-icon=""
                outlined
                dense
                hide-details
                flathide-details
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="timeEnd"
              locale="th-TH"
              picker-date
              @input="menuTimeEnd = false"
              @change="getData"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-card>
    <br />

    <v-card>
      <v-card-title>
        <template>
          <v-btn color="primary" dark @click.stop="AddItem()">
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn>
        </template>

        <v-spacer></v-spacer>

        <v-col cols="12">
          <v-text-field
            v-model="search"
            id="search"
            name="search"
            append-icon="mdi-magnify"
            label="ค้นหา"
            single-line
            hide-details
          >
          </v-text-field>
        </v-col>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        :mobile-breakpoint="0"
      >
        <template v-slot:[`item.customer_job`]="{ item }">
          <h5 v-if="item.customer_job == '1'">ข้าราชการ</h5>
          <h5 v-else-if="item.customer_job == '2'">พนักงานเอกชน</h5>
          <h5 v-else-if="item.customer_job == '3'">เกษตร</h5>
          <h5 v-else color="red" dark>เกิดข้อผิดพลาด</h5>
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" fab x-small dark @click="editItem(item.id)">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <dialogNew
        :dialog="dialog"
        :id="id"
        :action="action"
        :formTitle="formTitle"
        @cancleItem="dialog = false"
        @success="addSuccess()"
        @error="addError()"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiCustomer_visit from "@/Api/apiCustomer_visit";
import * as customAlart from "@/customJS/customAlart";
import * as apiBranches from "@/Api/apiBranches";
import moment from "moment";
import dialogNew from "@/components/dialog/dialogCustomer_visit";

export default {
  layout: "mobile",
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: true,
      id: "",
      search: "",
      dialog: false,
      formTitle: "Add",
      action: "add",
      headers: [
        { text: "ชื่อลูกค้า", value: "customer.customer_name", width: "20%" },
        { text: "ประเภท", value: "car_types.car_type_name" },
        { text: "ยี่ห้อรถ", value: "car_models.car_model_name" },
        { text: "รุ่นรถ", value: "car_series.car_series_name" },
        { text: "รุ่นย่อย", value: "car_serie_sub.car_serie_sub_name" },
        { text: "ปี", value: "car_year" },
        { text: "งวดผ่อน", value: "amount_down.amount_down_name" },
        { text: "ราคาดาวน์", value: "amount_slacken.amount_slacken_name" },
        { text: "พนักงาน", value: "user.first_name" },
        { text: "สาขา", value: "branch.branch_name" },
        // { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
      data: [],
      branches: [],
      timeSelect: [
        { value: 1, title: "วันนี้" },
        { value: 2, title: "เมื่อวาน" },
        { value: 3, title: "7 วันที่แล้ว" },
        { value: 4, title: "30 วันที่แล้ว" },
        { value: 5, title: "เดือนนี้" },
        { value: 6, title: "เดือนที่แล้ว" },
        { value: 7, title: "3 เดือนที่แล้ว" },
        { value: 8, title: "6 เดือนที่แล้ว" },
        { value: 9, title: "ปีนี้" },
        { value: 10, title: "3 ปีที่แล้ว" },
      ],
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      selectTime: 1,
      menuTimeStart: false,
      menuTimeEnd: false,
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      disabledTime: false,
    };
  },
  async mounted() {
    this.getData();
    await this.getBranches();
    this.loading = false;
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async AddItem() {
      this.formTitle = "เพิ่มข้อมูล";
      this.dialog = true;
      this.id = "";
      this.action = "add";
    },
    async editItem(item) {
      this.formTitle = "แก้ไขข้อมูล";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },
    async addSuccess() {
      this.dialog = false;
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
    async selectBranch() {
      await this.getData();
    },
    async getData() {
      const data = new FormData();
      data.append("branch_id", this.branch_id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);

      const response = await apiCustomer_visit.getCustomerVisit(data);
      // console.log(response);
      this.data = await response.data;
    },

    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiCustomer_visit.destroy(id);
          respone.then((res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
          });
        }
      });
      this.$nextTick(() => {
        this.getData();
      });
    },

    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
      // console.log(response);
    },
    async changeSelectTime(value) {
      this.disabledTime = true;
      if (value == 1) {
        this.timeStart = moment().startOf("day").format("YYYY-MM-DD HH:mm");
        // console.log(moment().startOf("day").format("YYYY-MM-DD HH:mm"));
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
        // console.log(moment().endOf("day").format("YYYY-MM-DD HH:mm"));
      } else if (value == 2) {
        this.timeStart = moment().startOf("day").add(-1, "days").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").add(-1, "days").format("YYYY-MM-DD HH:mm");
      } else if (value == 3) {
        this.timeStart = moment().startOf("day").add(-7, "days").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 4) {
        this.timeStart = moment().startOf("day").add(-30, "days").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 5) {
        this.timeStart = moment().startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("months").format("YYYY-MM-DD HH:mm");
      } else if (value == 6) {
        this.timeStart = moment().add(-1, "months").startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().add(-1, "months").endOf("months").format("YYYY-MM-DD HH:mm");
      } else if (value == 7) {
        this.timeStart = moment().add(-3, "months").startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 8) {
        this.timeStart = moment().add(-6, "months").startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 9) {
        this.timeStart = moment().startOf("years").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 10) {
        this.timeStart = moment().add(-3, "years").startOf("years").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      }
      await this.getData();
      this.disabledTime = false;
    },
  },
  watch: {},
};
</script>

<style></style>
