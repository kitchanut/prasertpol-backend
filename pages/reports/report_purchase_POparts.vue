<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 9 || user_group_permission == 11">
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
        <template v-slot:[`item.po_number`]="{ item }">
          <v-btn @click="editItem(item.purchase_id)" x-small color="primary" dark>{{ item.po_number }}</v-btn>
        </template>
        <template v-slot:[`item.updated_at`]="{ item }">
          <h5>
            {{ $moment(item.updated_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.sumValueAll`]="{ item }">
          <div v-if="item.po_active == '1'">
            {{
              Number(item.sumValueAll).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </div>
        </template>

        <template v-slot:[`item.po_active`]="{ item }">
          <div class="blue--text" v-if="item.po_active == 1">สร้างเอกสาร</div>
          <div class="green--text" v-if="item.po_active == 2">รับอะไหล่เข้าคลังแล้ว</div>
        </template>
      </v-data-table>
    </v-card>
    <dialogNew :dialog="dialog" :id="id" :action="action" :formTitle="formTitle" @cancleItem="dialog = false" />
  </div>
</template>

<script>
import * as apiTransition_purchase_part from "@/Api/apiTransition_purchase_part";
import dateSelect from "@/components/DateSelect/dateSelect";
import dialogNew from "@/components/dialog/dialogPurchasePart";

export default {
  components: {
    dateSelect,
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: false,
      search: "",
      headers: [
        { text: "ลำดับ", value: "no", align: "center" },
        { text: "รหัสสั่งซื้อ", value: "po_number" },
        { text: "วันที่", value: "updated_at" },
        { text: "รายการ", value: "po_active" },
        {
          text: "ผู้สั่ง/ผู้รับ",
          value: "user.first_name",
        },
        {
          text: "เบอร์ติดต่อ",
          value: "user.tel",
        },
        {
          text: "สาขา",
          value: "branch.branch_name",
        },
        { text: "จำนวนเงิน (บ.)", value: "sumValueAll" },
      ],
      data: [],
      id: "",
      formTitle: "ดูรายการสั่งซื้อ",
      action: "",
      dialog: false,
    };
  },
  mounted() {},
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
      const response = await apiTransition_purchase_part.index(data);
      // console.log(response);
      this.data = await response.data;
    },
    async selectTimeStart(time) {
      this.branch_id = time.branch_id;
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getData();
    },
    async editItem(item) {
      // console.log(item);
      this.formTitle = "ดูรายการสั่งซื้อ";
      this.dialog = true;
      this.id = item;
      this.action = "history";
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
    // async search_number(value) {
    //   if (value != null) {
    //     this.$nextTick(async () => {
    //       if (value.length > 0) {
    //         const response = await apiPurchases.selectPoNumber(value);
    //         this.dataPOnumber = await response.data;
    //       }
    //     });
    //   }
    // },
  },
};
</script>

<style></style>
