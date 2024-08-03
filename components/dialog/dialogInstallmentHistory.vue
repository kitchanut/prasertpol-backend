<template>
  <v-dialog v-model="dialog" width="650px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-if="appearance == 'text'" outlined color="primary" v-bind="attrs" v-on="on">ประวัติการชำระเงิน </v-btn>
      <v-btn v-else-if="appearance == 'info'" color="primary" fab x-small dark v-bind="attrs" v-on="on">
        <v-icon> mdi-information-variant </v-icon>
      </v-btn>
      <v-btn v-else-if="appearance == 'pencil'" color="primary" fab x-small dark v-bind="attrs" v-on="on">
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
      <v-list-item v-else-if="appearance == 'list'" v-bind="attrs" v-on="on" style="cursor: pointer">
        <v-list-item-title style="color: brown">งวดรถ</v-list-item-title>
      </v-list-item>
    </template>
    <v-card>
      <v-toolbar flat dark color="primary">
        <div class="container" style="align-items: center; display: flex; position: relative; padding: 0px">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>ประวัติการชำระเงิน</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-btn type="submit" dark text :loading="loading" style="font-size: 18px"> บันทึก </v-btn> -->
        </div>
      </v-toolbar>
      <v-card-text class="mt-3">
        <v-card outlined :loading="loading">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">งวดที่</th>
                  <th class="text-left">วันที่</th>
                  <th class="text-right">จำนวนเงิน</th>
                  <th class="text-center">สลิป/หลักฐาน</th>
                  <th class="text-left">ผู้ทำรายการ</th>
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data" :key="item.id">
                  <td class="text-center">{{ item.installment_no }}</td>
                  <td>{{ item.installment_pay_date }}</td>
                  <td class="text-right">{{ item.installment_amount }}</td>
                  <td class="text-center">
                    <img width="50px" :src="serverUrl + item.installment_img" v-viewer />
                  </td>
                  <td>{{ item.user.first_name }}</td>
                  <td>
                    <dialogInstallmentPayment
                      appearance="pencil"
                      action="edit"
                      :id="item.id"
                      @success="
                        getData();
                        $emit('success');
                      "
                    />
                    <DialogDelete @deleteItem="deleteItem(item.id)" />
                    <!-- <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
                      <v-icon> mdi-delete </v-icon>
                    </v-btn> -->
                  </td>
                </tr>
                <tr v-if="data.length == 0">
                  <td colspan="6" class="text-center">ไม่มีข้อมูล</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import * as apiInstallmentPayments from "@/Api/apiInstallmentPayments";
import dialogInstallmentPayment from "@/components/dialog/dialogInstallmentPayment";
import * as customAlart from "@/customJS/customAlart";
export default {
  props: ["appearance", "installment_id"],
  components: {
    dialogInstallmentPayment,
  },
  data() {
    return {
      serverUrl: process.env.serverUrl,
      dialog: false,
      loading: false,
      data: [],
    };
  },
  methods: {
    async getData() {
      this.data = [];
      this.loading = true;
      const response = await apiInstallmentPayments.getByInstallmentID(this.installment_id);
      // console.log(response.data);
      this.data = response.data;
      this.loading = false;
    },
    async deleteItem(id) {
      this.loading = true;
      const response = await apiInstallmentPayments.destroy(id);
      response.status == 200
        ? (this.$emit("success"), customAlart.TopSuccess(), this.getData(), this.$emit("success"))
        : (this.$emit("error"), customAlart.TopError());
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.getData();
      }
    },
  },
};
</script>
