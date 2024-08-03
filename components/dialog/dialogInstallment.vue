<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-if="appearance == 'text'" class="mt-3" text color="primary" v-bind="attrs" v-on="on">
        <v-icon left> mdi-plus </v-icon>
        เพิ่มรายการ
      </v-btn>
      <v-btn v-else-if="appearance == 'pencil'" color="primary" fab x-small dark v-bind="attrs" v-on="on">
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
      <v-list-item v-else-if="appearance == 'list'" v-bind="attrs" v-on="on" style="cursor: pointer">
        <v-list-item-title style="color: brown">งวดรถ</v-list-item-title>
      </v-list-item>
    </template>
    <v-card :loading="loading">
      <v-form ref="form" @submit.prevent="onAction()">
        <v-toolbar flat dark color="primary">
          <div class="container" style="align-items: center; display: flex; position: relative; padding: 0px">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>งวดรถ</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn type="submit" dark text :loading="loading" style="font-size: 18px"> บันทึก </v-btn>
          </div>
        </v-toolbar>
        <v-card-text>
          <div class="text-right">
            <dialogInstallmentHistory appearance="text" :installment_id="formData.id" @success="getData()" />
          </div>
          <table class="bordered mt-3">
            <thead>
              <tr>
                <th width="10%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: center">
                  งวดที่
                </th>
                <th width="25%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: left">
                  วันครบกำหนด
                </th>
                <th width="25%" style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: center">
                  ยอดชำระ
                </th>
                <th
                  v-if="action == 'edit'"
                  width="25%"
                  style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: center"
                >
                  ชำระแล้ว
                </th>
                <th
                  v-if="action == 'edit'"
                  style="border-left: 1px solid rgba(0, 0, 0, 0.2); padding: 10px; text-align: center"
                >
                  ชำระเงิน
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="text-center"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  1
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: left;
                  "
                >
                  <v-menu
                    v-model="menuDate1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        class="hide-border"
                        style="border-radius: 0px"
                        v-model="formData.installment_date_1"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                        hide-details
                        :rules="[(v) => !!v]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.installment_date_1"
                      locale="th-TH"
                      picker-date
                      @input="menuDate1 = false"
                    ></v-date-picker>
                  </v-menu>
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  <v-text-field
                    class="hide-border center-input"
                    style="border-radius: 0px"
                    v-model="formData.installment_value_1"
                    outlined
                    dense
                    hide-details
                    :rules="[(v) => !!v]"
                  >
                  </v-text-field>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <v-chip
                    pill
                    :color="formData.installment_pay_1 >= formData.installment_value_1 ? 'success' : 'error'"
                  >
                    {{ formData.installment_pay_1 }}
                  </v-chip>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <dialogInstallmentPayment
                    appearance="plus"
                    action="add"
                    :installment_id="formData.id"
                    :installment_no="1"
                    @success="getData()"
                  />
                </td>
              </tr>
              <tr>
                <td
                  class="text-center"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  2
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: left;
                  "
                >
                  <v-menu
                    v-model="menuDate2"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        class="hide-border"
                        style="border-radius: 0px"
                        v-model="formData.installment_date_2"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                        hide-details
                        :rules="[(v) => !!v]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.installment_date_2"
                      locale="th-TH"
                      picker-date
                      @input="menuDate2 = false"
                    ></v-date-picker>
                  </v-menu>
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  <v-text-field
                    class="hide-border center-input"
                    style="border-radius: 0px"
                    v-model="formData.installment_value_2"
                    outlined
                    dense
                    hide-details
                    :rules="[(v) => !!v]"
                  >
                  </v-text-field>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <v-chip
                    pill
                    :color="formData.installment_pay_2 >= formData.installment_value_2 ? 'success' : 'error'"
                  >
                    {{ formData.installment_pay_2 }}
                  </v-chip>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <dialogInstallmentPayment
                    appearance="plus"
                    action="add"
                    :installment_id="formData.id"
                    :installment_no="2"
                    @success="getData()"
                  />
                </td>
              </tr>
              <tr>
                <td
                  class="text-center"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  3
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: left;
                  "
                >
                  <v-menu
                    v-model="menuDate3"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        class="hide-border"
                        style="border-radius: 0px"
                        v-model="formData.installment_date_3"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                        hide-details
                        :rules="[(v) => !!v]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.installment_date_3"
                      locale="th-TH"
                      picker-date
                      @input="menuDate3 = false"
                    ></v-date-picker>
                  </v-menu>
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  <v-text-field
                    class="hide-border center-input"
                    style="border-radius: 0px"
                    v-model="formData.installment_value_3"
                    outlined
                    dense
                    hide-details
                    :rules="[(v) => !!v]"
                  >
                  </v-text-field>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <v-chip
                    pill
                    :color="formData.installment_pay_3 >= formData.installment_value_3 ? 'success' : 'error'"
                  >
                    {{ formData.installment_pay_3 }}
                  </v-chip>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <dialogInstallmentPayment
                    appearance="plus"
                    action="add"
                    :installment_id="formData.id"
                    :installment_no="3"
                    @success="getData()"
                  />
                </td>
              </tr>
              <tr>
                <td
                  class="text-center"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  4
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: left;
                  "
                >
                  <v-menu
                    v-model="menuDate4"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        class="hide-border"
                        style="border-radius: 0px"
                        v-model="formData.installment_date_4"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                        hide-details
                        :rules="[(v) => !!v]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.installment_date_4"
                      locale="th-TH"
                      picker-date
                      @input="menuDate4 = false"
                    ></v-date-picker>
                  </v-menu>
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  <v-text-field
                    class="hide-border center-input"
                    style="border-radius: 0px"
                    v-model="formData.installment_value_4"
                    outlined
                    dense
                    hide-details
                    :rules="[(v) => !!v]"
                  >
                  </v-text-field>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <v-chip
                    pill
                    :color="formData.installment_pay_4 >= formData.installment_value_4 ? 'success' : 'error'"
                  >
                    {{ formData.installment_pay_4 }}
                  </v-chip>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <dialogInstallmentPayment
                    appearance="plus"
                    action="add"
                    :installment_id="formData.id"
                    :installment_no="4"
                    @success="getData()"
                  />
                </td>
              </tr>
              <tr>
                <td
                  class="text-center"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  5
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: left;
                  "
                >
                  <v-menu
                    v-model="menuDate5"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        class="hide-border"
                        style="border-radius: 0px"
                        v-model="formData.installment_date_5"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                        hide-details
                        :rules="[(v) => !!v]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.installment_date_5"
                      locale="th-TH"
                      picker-date
                      @input="menuDate5 = false"
                    ></v-date-picker>
                  </v-menu>
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  <v-text-field
                    class="hide-border center-input"
                    style="border-radius: 0px"
                    v-model="formData.installment_value_5"
                    outlined
                    dense
                    hide-details
                    :rules="[(v) => !!v]"
                  >
                  </v-text-field>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <v-chip
                    pill
                    :color="formData.installment_pay_5 >= formData.installment_value_5 ? 'success' : 'error'"
                  >
                    {{ formData.installment_pay_5 }}
                  </v-chip>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <dialogInstallmentPayment
                    appearance="plus"
                    action="add"
                    :installment_id="formData.id"
                    :installment_no="5"
                    @success="getData()"
                  />
                </td>
              </tr>
              <tr>
                <td
                  class="text-center"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  6
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: left;
                  "
                >
                  <v-menu
                    v-model="menuDate6"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        class="hide-border"
                        style="border-radius: 0px"
                        v-model="formData.installment_date_6"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                        hide-details
                        :rules="[(v) => !!v]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.installment_date_6"
                      locale="th-TH"
                      picker-date
                      @input="menuDate6 = false"
                    ></v-date-picker>
                  </v-menu>
                </td>
                <td
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: right;
                  "
                >
                  <v-text-field
                    class="hide-border center-input"
                    style="border-radius: 0px"
                    v-model="formData.installment_value_6"
                    outlined
                    dense
                    hide-details
                    :rules="[(v) => !!v]"
                  >
                  </v-text-field>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <v-chip
                    pill
                    :color="formData.installment_pay_6 >= formData.installment_value_6 ? 'success' : 'error'"
                  >
                    {{ formData.installment_pay_6 }}
                  </v-chip>
                </td>
                <td
                  v-if="action == 'edit'"
                  style="
                    border-left: 1px solid rgba(0, 0, 0, 0.2);
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    padding: 0px;
                    text-align: center;
                  "
                >
                  <dialogInstallmentPayment
                    appearance="plus"
                    action="add"
                    :installment_id="formData.id"
                    :installment_no="6"
                    @success="getData()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import * as apiInstallments from "@/Api/apiInstallments";
import dialogInstallmentPayment from "@/components/dialog/dialogInstallmentPayment";
import dialogInstallmentHistory from "@/components/dialog/dialogInstallmentHistory";
import * as customAlart from "@/customJS/customAlart";
export default {
  props: ["id", "working_id", "appearance"],
  components: {
    dialogInstallmentPayment,
    dialogInstallmentHistory,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      action: "",
      menuDate1: false,
      menuDate2: false,
      menuDate3: false,
      menuDate4: false,
      menuDate5: false,
      menuDate6: false,
      formData: {},
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      const response = await apiInstallments.getByWorkingID(this.working_id);
      // console.log(response.data);
      if (Object.keys(response.data).length !== 0) {
        this.action = "edit";
        this.formData = response.data;
      } else {
        this.action = "add";
        this.formData.working_id = this.working_id;
      }
      this.loading = false;
    },
    async onAction() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        if (this.action == "add") {
          const response = await apiInstallments.store(this.formData);
          // console.log(response);
          response.status == 200
            ? (this.$emit("success"), customAlart.TopSuccess())
            : (this.$emit("error"), customAlart.TopError());
        } else if (this.action == "edit") {
          const response = await apiInstallments.update(this.formData.id, this.formData);
          response.status == 200
            ? (this.$emit("success"), customAlart.TopSuccess())
            : (this.$emit("error"), customAlart.TopError());
        }
        this.dialog = false;
        this.loading = false;
      }
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
        this.$nextTick(async () => {
          this.getData();
        });
      }
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse; /* IE7 and lower */
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
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.bordered th {
  font-weight: 600;
  background-color: #eee;
}

.right-input >>> input {
  text-align: right;
}

.center-input >>> input {
  text-align: center;
}
</style>
