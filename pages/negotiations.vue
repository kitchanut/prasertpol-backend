<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 2 || user_group_permission == 3">
    <v-card>
      <v-card-title>
        <template>
          <!-- <v-btn
            @click="handleDownload()"
            color="success"
            class="mr-2 my-1"
            style="min-width: 0px; padding: 0 8px; height: 40px"
          >
            <v-icon>mdi-microsoft-excel</v-icon>
          </v-btn> -->

          <dialogNew action="add" @success="addSuccess()" @error="addError()" />
        </template>

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
            outlined
            dense
          >
          </v-text-field>
        </v-col>
      </v-card-title>

      <v-divider></v-divider>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        dense
        class="negotiation"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="(item, index) in data">
              <td colspan="8" style="padding: 0px !important">
                <tr>
                  <td align="center" rowspan="4" width="50px">{{ index + 1 }}</td>
                  <td rowspan="4" width="220px">
                    <div><v-icon size="18">mdi-file-document-edit-outline</v-icon> W{{ item.working_id }}</div>
                    <div><v-icon size="18">mdi-car-back</v-icon> {{ item.working.cars.car_no }}</div>
                    <div><v-icon size="18">mdi-account</v-icon> {{ item.working.customer.customer_name }}</div>
                  </td>
                  <td style="border-left: solid 1px #ddd; border-bottom: solid 1px #ddd" width="150px">ยื่นขอ</td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.finance_price).toLocaleString() }}
                  </td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.down).toLocaleString() }}
                  </td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.car_price).toLocaleString() }}
                  </td>
                  <td width="370px" style="border-bottom: solid 1px #ddd; color: blue">{{ item.details }}</td>
                  <td rowspan="3" align="center">
                    <div v-if="user_group_permission == -1">
                      <dialogNew :id="item.id" action="edit" @success="addSuccess()" @error="addError()" />
                      <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
                        <v-icon> mdi-delete </v-icon>
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="border-left: solid 1px #ddd; border-bottom: solid 1px #ddd">ธนาคารอนุมัติ</td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.bank_finance_price).toLocaleString() }}
                  </td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.bank_down).toLocaleString() }}
                  </td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.bank_car_price).toLocaleString() }}
                  </td>
                  <td width="370px" style="border-bottom: solid 1px #ddd; color: blue">
                    {{ item.bank_details }}
                  </td>
                </tr>
                <tr>
                  <td style="border-left: solid 1px #ddd; border-bottom: solid 1px #ddd">ต้องการต่อรอง</td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.negotiation_finance_price).toLocaleString() }}
                  </td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.negotiation_down).toLocaleString() }}
                  </td>
                  <td width="150px" align="right" style="border-bottom: solid 1px #ddd">
                    {{ Number(item.negotiation_car_price).toLocaleString() }}
                  </td>
                  <td width="370px" style="border-bottom: solid 1px #ddd; color: blue">
                    {{ item.negotiation_details }}
                  </td>
                </tr>
                <tr>
                  <td style="border-left: solid 1px #ddd">ผลการต่อรอง</td>
                  <td width="150px" align="right">
                    <div v-if="item.negotiation_result_finance_price">
                      {{ Number(item.negotiation_result_finance_price).toLocaleString() }}
                    </div>
                    <div v-else style="color: red">รอพิจารณา</div>
                  </td>
                  <td width="150px" align="right">
                    <div v-if="item.negotiation_result_down">
                      {{ Number(item.negotiation_result_down).toLocaleString() }}
                    </div>
                    <div v-else style="color: red">รอพิจารณา</div>
                  </td>
                  <td width="150px" align="right">
                    <div v-if="item.negotiation_result_car_price">
                      {{ Number(item.negotiation_result_car_price).toLocaleString() }}
                    </div>
                    <div v-else style="color: red">รอพิจารณา</div>
                  </td>
                  <td width="370px" style="color: green">{{ item.negotiation_result_details }}</td>
                </tr>
              </td>
            </tr>
            <tr v-if="data.length == 0">
              <td colspan="8" align="center">ไม่มีข้อมูล</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as apiNegotiations from "@/Api/apiNegotiations";

import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogNegotiation";

import moment from "moment";

export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,

      loading: true,
      search: "",
      action: "add",
      id: "",
      headers: [
        { text: "ลำดับ", value: "no", align: "center", sortable: false, width: "50px" },
        { text: "ลำดับรถ", value: "working.cars.car_no", width: "220px" },
        { text: "", value: "", width: "8%", width: "150px" },
        { text: "ยอดจัด", value: "negotiation_finance_price", align: "end", sortable: false, width: "150px" },
        { text: "เงินดาวน์", value: "negotiation_down", align: "end", sortable: false, width: "150px" },
        { text: "ราคาขายรถ", value: "negotiation_car_price", align: "end", sortable: false, width: "150px" },
        { text: "รายละเอียด", value: "negotiation_details", width: "370px" },
        { text: "จัดการ", value: "actions", sortable: false },
      ],
      data: [],
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
    };
  },
  mounted() {
    this.getData();
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
      this.loading = true;
      const response = await apiNegotiations.index();
      this.data = response.data;
      //   console.log(response.data);
      this.loading = false;
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          this.loading = true;
          const respone = apiNegotiations.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },
    async addSuccess() {
      this.dialog = false;
      this.$nextTick(async () => {
        await this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      this.$nextTick(async () => {
        await this.getData();
        customAlart.TopError();
      });
    },
    handleDownload() {
      const filterVal = [];
      for (let index = 0; index < this.tHeader.length; index++) {
        filterVal.push(this.headers[index].value);
      }
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "ต่อรองราคา (" + moment().format("DD/MM/YYYY ( HH:mm น.)") + ")",
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
  watch: {},
};
</script>

<style>
.negotiation th + th {
  border-left: solid 1px #ddd;
}
.negotiation td + td {
  border-left: solid 1px #ddd;
}
.negotiation td {
  padding: 0 8px !important;
}
</style>
