<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="6" class="d-flex">
            <dateSelect2 @timeSelect="selectTimeStart" />
            <div class="py-2 ml-2">
              <v-btn @click="handleDownload()" color="success" style="min-width: 0px; padding: 0px 8px; height: 40px">
                <v-icon>mdi-microsoft-excel</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="3">
            <div class="py-2">
              <v-text-field
                v-model="search"
                id="search"
                name="search"
                append-icon="mdi-magnify"
                label="ค้นหา"
                single-line
                hide-details
                outlined
                dense
              >
              </v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template v-slot:[`item.sale_name`]="{ item }">
          <v-row no-gutters>
            <v-col cols="2">
              <v-avatar v-if="item.lineUUID" size="40" @click="showImg(item.pictureUrl)">
                <v-img :src="item.pictureUrl"> </v-img>
              </v-avatar>
              <v-avatar v-else size="40" @click="showImg(serverUrl + item.user_image)">
                <v-img :src="serverUrl + item.user_image"> </v-img>
              </v-avatar>
            </v-col>
            <v-col>
              <div>{{ item.sale_name }} <b v-if="item.lineUUID" style="color: green">[Line]</b></div>
              <div>{{ item.branch_name }}</div>
            </v-col>
          </v-row>
        </template>

        <template v-slot:[`item.amount`]="{ item }">
          {{ Number(item.amount).toLocaleString() }}
        </template>

        <template v-slot:[`item.id_card`]="{ item }">
          <v-img
            width="40px"
            height="40px"
            cover
            :src="serverUrl + item.id_card"
            style="border-radius: 4px"
            @click="showImg(serverUrl + item.id_card)"
          >
          </v-img>
        </template>

        <template v-slot:[`item.slip`]="{ item }">
          <v-img
            width="40px"
            height="40px"
            cover
            :src="serverUrl + item.slip"
            style="border-radius: 4px"
            @click="showImg(serverUrl + item.slip)"
          >
          </v-img>
        </template>
      </v-data-table>
    </v-card>
    <dialogImage :dialog="dialogImg" :imgUrl="imgUrl" @cancleItem="dialogImg = false" />
  </div>
</template>
<script>
import * as apiRequestMoney from "@/Api/apiRequestMoney";

import moment from "moment";
import dateSelect2 from "@/components/DateSelect/dateSelect2";

export default {
  components: {
    dateSelect2,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      toggle: "all",
      search: "",
      loading: false,
      data: [],
      headers: [
        { text: "เวลา", value: "created_at", width: "9%" },
        // { text: "Line", value: "pictureUrl", align: "center", width: "10%", sortable: false },
        { text: "เซล/สาขา", value: "sale_name" },
        { text: "ลำดับรถ", value: "car_no" },
        { text: "ประเภท", value: "type" },
        { text: "จำนวนเงิน", value: "amount", align: "end" },
        { text: "รูปบัตร", value: "id_card", sortable: false },
        { text: "สลิป", value: "slip", sortable: false },
      ],
      dialogImg: false,
      imgUrl: "",
    };
  },
  mounted() {
    this.getData();
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
      data.append("timeStart", this.timeStart);
      data.append("timeEnd", this.timeEnd);
      data.append("toggle", this.toggle);

      const response = await apiRequestMoney.indexCustom(data);
      console.log(response.data);
      this.data = response.data;
      this.loading = false;
    },
    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },
    handleDownload() {
      const filterVal = [];
      const tHeader = [];
      for (let index = 0; index < this.headers.length; index++) {
        filterVal.push(this.headers[index].value);
        tHeader.push(this.headers[index].text);
      }
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const list = this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "รายงานการแจ้งรับเงิน (" + moment().format("DD/MM/YYYY ( HH:mm น.)") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          return v[j];
        })
      );
    },
  },
};
</script>
