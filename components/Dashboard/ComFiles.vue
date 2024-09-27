<template>
  <div>
    <div class="pa-3 ml-5">
      <v-row class="mt-0">
        <v-col cols="4" v-for="(item, key) in main" :key="key">
          <v-card outlined :loading="item.loading" height="100%" color="primary" dark>
            <v-card-title class="d-flex justify-space-between">
              <div>
                {{ item.name }} [ {{ item.totleSize }}<span v-if="item.index == 0">/<b>185</b></span> GB]
              </div>
              <v-btn
                color="warning"
                class="ml-3"
                fab
                x-small
                dark
                :loading="item.loading"
                @click="getDataMain(item.index)"
              >
                <v-icon> mdi-reload </v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" v-for="(item, key) in items" :key="key">
          <v-card outlined :loading="item.loading" height="100%">
            <v-card-title class="d-flex justify-space-between">
              <div>{{ item.name }} [ {{ item.totleSize }} GB]</div>
              <v-btn color="primary" class="ml-3" fab x-small dark :loading="item.loading" @click="getData(item.index)">
                <v-icon> mdi-reload </v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <li v-for="(mount, key) in item.mount">
                {{ key }} [ <span style="color: red">{{ mount }}</span> GB ]
                <v-btn
                  color="red"
                  class="ml-3"
                  x-small
                  icon
                  dark
                  :loading="item.loading"
                  @click="deleteFile(item.index, key)"
                >
                  <v-icon> mdi-delete </v-icon>
                </v-btn>
              </li>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import * as apiDashboard from "@/Api/apiDashboard";
import * as customAlart from "@/customJS/customAlart";
export default {
  data() {
    return {
      loading: false,
      main: [
        {
          index: 0,
          name: "ไฟล์ทั้งหมด",
          path: "assets/images",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 1,
          name: "รูปทั้งหมด",
          path: "assets/images",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 2,
          name: "รูปรถ",
          path: "assets/images/cars",
          totleSize: 0,
          mount: {},
          loading: false,
        },
      ],
      items: [
        {
          index: 0,
          name: "การจอง",
          path: "assets/images/request_booking",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 1,
          name: "การนัดหมาย",
          path: "assets/images/request_appointment",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 2,
          name: "เซนต์สัญญา",
          path: "assets/images/request_sign",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 3,
          name: "ฝากเซนต์",
          path: "assets/images/request_signDeposit",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 4,
          name: "แบงค์อนุมัติ",
          path: "assets/images/request_bankApprove",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 5,
          name: "แจ้งปล่อยรถ",
          path: "assets/images/request_release",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 6,
          name: "เปลี่ยนคนจอง",
          path: "assets/images/request_change_customer",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 7,
          name: "เปลี่ยนรถ",
          path: "assets/images/request_changeCar",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 8,
          name: "แจ้งรับเงิน",
          path: "assets/images/request_money",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 9,
          name: "แจ้งเบิกเงิน",
          path: "assets/images/request_money_withdraw",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 10,
          name: "การยกเลิก",
          path: "assets/images/request_cancle",
          totleSize: 0,
          mount: {},
          loading: false,
        },
        {
          index: 11,
          name: "อัพเดทข้อมูล",
          path: "assets/images/request_update",
          totleSize: 0,
          mount: {},
          loading: false,
        },
      ],
    };
  },
  async mounted() {},
  methods: {
    async getDataMain(index) {
      this.main[index].loading = true;
      let params = {
        path: this.main[index].path,
      };
      const response = await apiDashboard.dashboard_file_main(params);
      console.log(response.data);
      if (index == 0) {
        this.main[index].totleSize = Number(response.data) + 3;
      } else {
        this.main[index].totleSize = response.data;
      }
      this.main[index].loading = false;
    },
    async getData(index) {
      this.items[index].loading = true;
      let params = {
        path: this.items[index].path,
      };
      const response = await apiDashboard.dashboard_files(params);
      console.log(response.data);
      this.items[index].totleSize = response.data.totleSize;
      this.items[index].mount = response.data.mount;
      this.items[index].loading = false;
    },
    async deleteFile(index, month) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then(async (result) => {
        if (result == true) {
          this.items[index].loading = true;
          let params = {
            path: this.items[index].path,
            month: month,
          };
          const response = await apiDashboard.dashboard_delete_files(params);
          console.log(response.data);
          this.items[index].totleSize = response.data.totleSize;
          this.items[index].mount = response.data.mount;
          this.items[index].loading = false;
        }
      });
    },
  },
};
</script>
