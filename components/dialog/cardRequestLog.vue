<template>
  <div>
    <v-card outlined>
      <v-card-title primary-title>
        <div class="pr-10">ประวัติการแจ้ง</div>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="ค้นหา" single-line outlined dense hide-details>
        </v-text-field>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="-1"
        :search="search"
        :loading="loading"
        :mobile-breakpoint="0"
        dense
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template v-slot:[`item.branch_name`]="{ item }">
          <div no-gutters class="d-flex align-center">
            <div class="mr-3">
              <v-btn icon>
                <v-avatar size="40" @click="showImg(serverUrl + item.user_image)">
                  <v-img :src="serverUrl + item.user_image"> </v-img>
                </v-avatar>
              </v-btn>
            </div>
            <div>
              <div>{{ item.sale_name.split("(")[0] }}</div>
              <div style="color: blue">{{ item.branch_name }}</div>
            </div>
          </div>
        </template>

        <template v-slot:[`item.type`]="{ item }">
          {{ item.type }}
          <div v-if="item.type == 'เปลี่ยนจอง'">
            <span :style="car_no == item.car_no ? 'color: green' : 'color: red'">{{ item.car_no }}</span>
          </div>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" fab x-small dark @click="showData(item.type, item.ref_id)">
            <v-icon> mdi-information-variant </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <drawerRequestLog
      :dialog="drawerRequestLog"
      :type="type"
      :id="id"
      @success="getData()"
      @cancleItem="drawerRequestLog = false"
    />
  </div>
</template>

<script>
import * as apiRequestLog from "@/Api/apiRequestLog";
import * as customAlart from "@/customJS/customAlart";
import drawerRequestLog from "@/components/dialog/drawerRequestLog";

import * as apiRequestBook from "@/Api/apiRequestBook";
import * as apiRequestAppointment from "@/Api/apiRequestAppointment";
import * as apiRequestSignDeposit from "@/Api/apiRequestSignDeposit";
import * as apiRequestSign from "@/Api/apiRequestSign";
import * as apiRequestBankApprove from "@/Api/apiRequestBankApprove";
import * as apiRequestRelease from "@/Api/apiRequestRelease";
import * as apiRequestChangeCar from "@/Api/apiRequestChangeCar";
import * as apiRequestChangeCustomer from "@/Api/apiRequestChangeCustomer";
import * as apiRequestUpdate from "@/Api/apiRequestUpdate";
import * as apiRequestMoney from "@/Api/apiRequestMoney";
import * as apiRequestMoneyWithdraw from "@/Api/apiRequestMoneyWithdraw";
import * as apiRequestCancle from "@/Api/apiRequestCancle";

export default {
  props: ["car_no"],
  components: {
    drawerRequestLog,
  },

  data() {
    return {
      serverUrl: process.env.serverUrl,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: false,
      update: false,
      drawerRequestLog: false,
      type: "",
      id: "",

      search: "",
      headers: [
        { text: "เวลา", value: "created_at", width: "25%" },
        // { text: "Line", value: "pictureUrl", align: "center", width: "12%" },
        { text: "เซล/สาขา", value: "branch_name" },
        { text: "ประเภท", value: "type" },
        {
          text: "",
          value: "actions",
          sortable: false,
          align: "center",
          width: "2%",
        },
      ],
      data: [],
    };
  },
  async mounted() {},
  methods: {
    async getData() {
      this.loading = true;
      // console.log(this.searchCarNo);
      const data = new FormData();
      data.append("timeStart", "");
      data.append("timeEnd", "");
      data.append("toggle", "");
      data.append("search", this.car_no);

      const response = await apiRequestLog.indexCustom(data);

      // console.log(response.data);
      this.data = response.data;
      this.loading = false;
    },
    showData(type, id) {
      this.type = type;
      this.id = id;
      this.drawerRequestLog = true;
    },
    close() {
      if (this.update) {
        this.$emit("success");
      } else {
        this.$emit("cancleItem");
      }
    },
    async editItem(type, id) {
      if (type == "การจอง") {
        const respone = await apiRequestBook.update(id);
      } else if (type == "นัดทำสัญญา") {
        const respone = await apiRequestAppointment.update(id);
      } else if (type == "ฝากเซนต์") {
        const respone = await apiRequestSignDeposit.update(id);
      } else if (type == "การทำสัญญา") {
        const respone = await apiRequestSign.update(id);
      } else if (type == "แบงค์อนุมัติ") {
        const respone = await apiRequestBankApprove.update(id);
      } else if (type == "ปล่อยรถ") {
        const respone = await apiRequestRelease.update(id);
      } else if (type == "เปลี่ยนจอง") {
        const respone = await apiRequestChangeCar.update(id);
      } else if (type == "เปลี่ยนคนจอง") {
        const respone = await apiRequestChangeCustomer.update(id);
      } else if (type == "อัพเดทข้อมูล") {
        const respone = await apiRequestUpdate.update(id);
      } else if (type == "การรับเงิน") {
        const respone = await apiRequestMoney.update(id);
      } else if (type == "เบิกเงิน") {
        const respone = await apiRequestMoneyWithdraw.update(id);
      } else if (type == "ยกเลิกจอง") {
        const respone = await apiRequestCancle.update(id);
      }
      this.update = true;
      this.getData();
    },

    async cancleItem(type, id) {
      if (type == "การจอง") {
        const respone = await apiRequestBook.cancle(id);
      } else if (type == "นัดทำสัญญา") {
        const respone = await apiRequestAppointment.cancle(id);
      } else if (type == "การทำสัญญา") {
        const respone = await apiRequestSign.cancle(id);
      } else if (type == "แบงค์อนุมัติ") {
        const respone = await apiRequestBankApprove.cancle(id);
      } else if (type == "ปล่อยรถ") {
        const respone = await apiRequestRelease.cancle(id);
      } else if (type == "เปลี่ยนจอง") {
        const respone = await apiRequestChangeCar.cancle(id);
      } else if (type == "เปลี่ยนคนจอง") {
        const respone = await apiRequestChangeCustomer.cancle(id);
      } else if (type == "อัพเดทข้อมูล") {
        const respone = await apiRequestUpdate.cancle(id);
      } else if (type == "การรับเงิน") {
        const respone = await apiRequestMoney.cancle(id);
      } else if (type == "เบิกเงิน") {
        const respone = await apiRequestMoneyWithdraw.cancle(id);
      } else if (type == "ยกเลิกจอง") {
        const respone = await apiRequestCancle.cancle(id);
      }
      this.update = true;
      this.getData();
    },

    async deleteItem(type, id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then(async (result) => {
        if (result == true) {
          var respone = null;
          if (type == "การจอง") {
            respone = await apiRequestBook.destroy(id);
          } else if (type == "นัดทำสัญญา") {
            respone = await apiRequestAppointment.destroy(id);
          } else if (type == "การทำสัญญา") {
            respone = await apiRequestSign.destroy(id);
          } else if (type == "แบงค์อนุมัติ") {
            respone = await apiRequestBankApprove.destroy(id);
          } else if (type == "ปล่อยรถ") {
            respone = await apiRequestRelease.destroy(id);
          } else if (type == "เปลี่ยนจอง") {
            respone = await apiRequestChangeCar.destroy(id);
          } else if (type == "เปลี่ยนคนจอง") {
            respone = await apiRequestChangeCustomer.destroy(id);
          } else if (type == "อัพเดทข้อมูล") {
            respone = await apiRequestUpdate.destroy(id);
          } else if (type == "การรับเงิน") {
            respone = await apiRequestMoney.destroy(id);
          } else if (type == "เบิกเงิน") {
            respone = await apiRequestMoneyWithdraw.destroy(id);
          } else if (type == "ยกเลิกจอง") {
            respone = await apiRequestCancle.destroy(id);
          }
          this.update = true;
          this.getData();
        }
      });
    },
  },
  watch: {
    car_no() {
      this.getData();
    },
  },
};
</script>

<style scoped></style>
