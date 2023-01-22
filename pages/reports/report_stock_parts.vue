<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 9 ||
      user_group_permission == 11
    "
  >
    <v-card>
      <v-card-title>
        <v-col cols="9">
          <dateSelect @tineSelect="selectTimeStart" />
        </v-col>

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
          ></v-text-field>
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
      >
        <template v-slot:[`item.created_at`]="{ item }">
          <h5>
            {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.stock_type`]="{ item }">
          <div class="blue--text" v-if="item.stock_type == 1">รับเข้า</div>
          <div class="orange--text" v-if="item.stock_type == 2">เบิก</div>
          <div class="red--text" v-if="item.stock_type == 3">ปรับสต็อก</div>
          <div class="brown--text" v-if="item.stock_type == 4">คืน</div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as apiTransition_stock_part from "@/Api/apiTransition_stock_part";
import dateSelect from "@/components/DateSelect/dateSelect";

export default {
  components: {
    dateSelect,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      loading: true,
      search: "",
      headers: [
        { text: "ลำดับ", value: "no", width: "10%", align: "center" },
        { text: "ชื่ออะไหล่", value: "car_part.car_part_name", width: "15%" },
        {
          text: "จำนวนก่อนหน้า",
          value: "car_part_amount_before",
          width: "15%",
        },
        { text: "จำนวน", value: "car_part_amount", width: "15%" },
        { text: "คงเหลือ", value: "car_part_balance", width: "15%" },
        { text: "วันที่", value: "created_at", width: "20%" },
        { text: "สาขา", value: "branch.branch_name", width: "15%" },
        { text: "สถานะ", value: "stock_type", width: "15%" },
      ],
      data: [],
      timeStart: null,
      timeEnd: null,
    };
  },
  async mounted() {
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
    async getData() {
      this.data = [];
      const data = new FormData();
      data.append("branch_id", this.branch_id);
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      const response = await apiTransition_stock_part.index(data);
      // console.log(response);
      this.data = await response.data;
    },
    async selectTimeStart(time) {
      this.branch_id = time.branch_id;
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getData();
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
