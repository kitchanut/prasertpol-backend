<template>
  <div>
    <v-dialog
      v-model="dialogComponent"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card
        tile
        style="position: relative; background-color: #eee"
      >

        <v-form
          ref="form"
          lazy-validation
        >

          <v-toolbar
            flat
            dark
            color="primary"
          >
            <div
              class="container"
              style="align-items: center;display: flex;position: relative;padding: 0px;"
            >
              <v-btn
                icon
                dark
                @click="cancleItem()"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>ข้อมูลการชำระเงินจากลูกค้า</v-toolbar-title>
              <v-spacer></v-spacer>

            </div>
          </v-toolbar>

          <v-card>

            <div
              class="text-center pt-3"
              style="font-size: 20px; font-weight: 500"
            >
              เงินจอง / เงินดาวน์ / ซื้อเงินสด
            </div>

            <table class="bordered mt-3">
              <thead>
                <tr>
                  <!-- <th
                      width="5%"
                      style="padding: 10px;text-align: center;"
                    >
                      ลำดับ
                    </th> -->
                  <th
                    width="8%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2);padding:10px 3px;text-align: left;"
                  >
                    ประเภท
                  </th>
                  <th
                    width="12%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2);padding: 3px;text-align: left;"
                  >
                    วันที่
                  </th>
                  <th
                    width="15%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2);padding: 3px;text-align: left;"
                  >
                    ลูกค้า
                  </th>
                  <!-- <th
                    width="10%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2);padding: 3px;text-align: left;"
                  >
                    ลำดับรถ
                  </th>
                  <th
                    width="15%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2);padding: 3px;text-align: left;"
                  >
                    รถ
                  </th> -->
                  <th
                    width="15%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2);padding: 3px;text-align: right;"
                  >
                    จำนวน
                  </th>
                  <th
                    width="5%"
                    style="border-left: 1px solid rgba(0, 0, 0, 0.2);padding: 3px;text-align: right;"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style="line-height: 1rem; font-size:1rem"
                  v-for="(item, key) in data"
                  :key="key"
                >
                  <!-- <td style="border-top: 1px solid rgba(0, 0, 0, 0.2);text-align: center;">
                      {{key+1}}
                    </td> -->
                  <td style="font-size:14px ;border-left: 1px solid rgba(0, 0, 0, 0.2);border-top: 1px solid rgba(0, 0, 0, 0.2);padding: 3px;text-align: left;">
                    <div v-if="item.payment_type == 1">จอง</div>
                    <div v-else-if="item.payment_type == 2">ดาวน์</div>
                    <div v-else-if="item.payment_type == 3">ซื้อเงินสด</div>
                    <div v-else>N/A</div>
                  </td>
                  <td style="font-size:12px; border-left: 1px solid rgba(0, 0, 0, 0.2);border-top: 1px solid rgba(0, 0, 0, 0.2);padding: 3px">
                    {{item.created_at}}
                  </td>
                  <td style="font-size:14px; border-left: 1px solid rgba(0, 0, 0, 0.2);border-top: 1px solid rgba(0, 0, 0, 0.2);padding: 3px">
                    <div>{{item.customer_name}}</div>
                    <div>{{item.customer_tel}}</div>

                  </td>
                  <!-- <td style="border-left: 1px solid rgba(0, 0, 0, 0.2);border-top: 1px solid rgba(0, 0, 0, 0.2);padding: 3px">
                    <div>{{item.car_no}}</div>
                  </td>
                  <td style="border-left: 1px solid rgba(0, 0, 0, 0.2);border-top: 1px solid rgba(0, 0, 0, 0.2);padding: 3px">
                    <div>{{item.car_model_name}}</div>
                    <div>{{item.car_series_name}}</div>
                    <div>{{item.car_regis}}</div>
                  </td> -->

                  <td style="font-size:14px; border-left: 1px solid rgba(0, 0, 0, 0.2);border-top: 1px solid rgba(0, 0, 0, 0.2);padding: 3px;text-align: right;">
                    <div>{{item.bath}}</div>
                    <!-- <div>{{item.bath_string}}</div> -->
                  </td>
                  <td style="border-left: 1px solid rgba(0, 0, 0, 0.2);border-top: 1px solid rgba(0, 0, 0, 0.2);text-align: center;">
                    <v-btn
                      color="primary"
                      fab
                      x-small
                      dark
                      @click="Financial(car_no, idWork, item.payment_type, 'edit')"
                    >
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                    </v-btn>

                  </td>
                </tr>
              </tbody>
            </table>

            <v-btn
              class="mt-3"
              text
              color="primary"
              @click="Financial(car_no, idWork, '2', 'add')"
            >
              <v-icon left>
                mdi-plus
              </v-icon>
              เพิ่มรายการ
            </v-btn>

            <dialogFinancial
              :dialogFinancial="dialogFinancial"
              :idWork="idWork"
              :car_no="car_no"
              :payment_type="payment_type"
              :actionFinancial="actionFinancial"
              :formTitleFinancial="formTitleFinancial"
              @cancleItem="dialogFinancial = false"
              @success="dialogFinancial = false;getData()"
              @error="dialogFinancial = false"
            />

          </v-card>

        </v-form>

      </v-card>

    </v-dialog>
  </div>
</template>

<script>
import * as apiFinancial from "@/Api/apiFinancial";
import dialogFinancial from "@/components/mobile/dialogFinancial";
export default {
  components: { dialogFinancial },
  props: ["dialog", "idWork", "car_no"],
  data() {
    return {
      dialogComponent: false,
      data: [],

      dialogFinancial: false,
      formTitleFinancial: "Add",
      actionFinancial: "check",
      payment_type: "1",
      dialogContract: false,
      formTitleContract: "Add",
      actionContract: "check",
    };
  },
  mounted() {},
  methods: {
    async getData() {
      const response = await apiFinancial.allFinancialonWork(this.idWork);
      // console.log(response.data);
      this.data = response.data;
    },
    async Financial(car_no, work_id, payment_type, actionFinancial) {
      this.formTitleFinancial = "หลักฐานการรับเงิน ธุระกิจการขายรถยนต์ใช้แล้ว";
      this.car_no = car_no;
      this.idWork = work_id;
      this.payment_type = payment_type;
      this.dialogFinancial = true;
      this.actionFinancial = actionFinancial;
    },
    deleteItem(key) {},
    cancleItem() {
      this.$emit("cancleItem");
    },
    onSubmit() {
      this.$emit("cancleItem");
    },
  },
  watch: {
    dialog() {
      this.dialogComponent = this.dialog;
    },
    async dialogComponent() {
      if (!this.dialogComponent) {
        this.$emit("cancleItem");
      } else {
        this.getData();
      }
    },
  },
};
</script>

<style scoped>
table {
  *border-collapse: collapse; /* IE7 and lower */
  border-spacing: 0;
  width: 100%;
}

th:first-child {
  border-radius: 4px 0 0 0;
}

th:last-child {
  border-radius: 0 4px 0 0;
}

th:only-child {
  border-radius: 4px 4px 0 0;
}

.bordered {
  border: solid rgba(0, 0, 0, 0.3) 1px;
}

.bordered th {
  font-weight: 600;
  background-color: #eee;
}

.right-input >>> input {
  text-align: right;
}
</style>

<style lang="scss">
.none-rotation.v-select.v-select--is-menu-active
  .v-input__icon--append
  .v-icon {
  transform: none !important;
}

.hide-border.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: rgba(0, 0, 0, 0);
}
</style>
