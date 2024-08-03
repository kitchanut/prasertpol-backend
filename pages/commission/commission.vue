<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 9 || user_group_permission == 11">
    <v-card class="d-flex">
      <v-row class="pa-2">
        <v-col cols="3">
          <v-autocomplete
            v-model="user_id"
            :items="user_sale"
            no-data-text="ไม่มีข้อมูล"
            item-text="first_name"
            item-value="id"
            label="เลือกบุคลฝ่ายขาย:"
            @change="changeSelectUser"
            outlined
            dense
            hide-details
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
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

        <v-col cols="3">
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

        <v-col cols="3">
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
        <v-row>
          <v-col cols="5" v-if="data.length > 0">
            <v-btn @click="print_a4()" color="primary" block> ปริ้น </v-btn>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>

        <v-col cols="3">
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
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template v-slot:[`item.receiving_money_sum`]="{ item }">
          {{
            Number(item.receiving_money_sum).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.commission`]="{ item }">
          {{
            Number(item.commission).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.created_at`]="{ item }">
          {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          <br />
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" fab x-small dark @click="editItem(item.car_no, item.id)">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <dialogNew
      :dialog="dialog"
      :id="id"
      :action="action"
      :car_no="car_no"
      :formTitle="formTitle"
      @cancleItem="dialog = false"
      @success="addSuccess()"
      @error="addError()"
    />
  </div>
</template>

<script>
import * as apiReceiving_money from "@/Api/apiReceiving_money";
import * as apiUsers from "@/Api/apiUsers";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogCommission";
import moment from "moment";
export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      loading: false,
      search: "",
      user_id: null,
      dialog: false,
      car_no: null,
      headers: [
        {
          text: "ลำดับ",
          value: "no",
          align: "center",
          width: "7%",
        },
        { text: "วันที่บริษัทรับเงิน", value: "created_at", width: "15%" },
        { text: "ลำดับรถ", value: "car_no", width: "10%" },
        { text: "ทะเบียนรถ", value: "car_regis", width: "10%" },
        { text: "ค่าคอมมิชชั่น", value: "commission", width: "10%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
      timeSelect: this.$store.state.timeSelect,
      selectTime: 1,
      menuTimeStart: false,
      menuTimeEnd: false,
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      data: [],
      user_sale: [],
      dialog: false,
      id: "",
      formTitle: "Add",
      action: "add",
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
    };
  },
  mounted() {
    this.getUserSale();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async getUserSale() {
      const response = await apiUsers.selectSale();
      this.user_sale = response.data;
    },
    async getData() {
      this.loading = true;
      this.data = [];
      const data = new FormData();
      data.append("user_id", this.user_id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);

      const response = await apiReceiving_money.selectCommission(data);
      this.data = response.data.querys;
      //   console.log(response.data);
      this.loading = false;
    },
    async changeSelectUser() {
      this.getData();
    },

    async print_a4() {
      const data = new FormData();
      data.append("user_id", this.user_id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);

      let routeData = this.$router.resolve({
        name: "prints-print_commi",
        query: {
          user_id: JSON.stringify(this.user_id),
          timeStart: JSON.stringify(this.timeStart),
          timeEnd: JSON.stringify(this.timeEnd),
        },
      });
      window.open(routeData.href, "_blank");
    },

    async changeSelectTime(value) {
      if (value == 1) {
        this.timeStart = moment().startOf("day").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
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
    },
    async editItem(car_no, item) {
      this.formTitle = "เพิ่มค่าคอม";
      this.dialog = true;
      this.car_no = car_no;
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
  },
  watch: {
    data() {
      const self = this;
      return this.data.map(function (item) {
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

<style></style>
