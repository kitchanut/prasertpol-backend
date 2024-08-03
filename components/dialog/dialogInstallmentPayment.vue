<template>
  <v-dialog v-model="dialog" width="400px">
    <template v-slot:activator="{ on, attrs }">
      <!-- <div v-if="appearance == 'text'" x-small rounded dark v-bind="attrs" v-on="on" style="cursor: pointer">
        {{ text }}
      </div> -->
      <v-chip v-if="appearance == 'chip'" pill v-on="on" color="success">
        {{ text }}
      </v-chip>
      <v-btn
        v-if="appearance == 'plus'"
        text
        color="primary"
        v-bind="attrs"
        v-on="on"
        style="min-width: 38px; height: 38px"
      >
        <v-icon> mdi-plus </v-icon>
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
            <v-toolbar-title>การชำระเงิน</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn type="submit" dark text :loading="loading" style="font-size: 18px"> บันทึก </v-btn>
          </div>
        </v-toolbar>
        <v-card-text>
          <v-menu
            v-model="menuDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="วันที่ชำระเงิน*"
                v-model="formData.installment_pay_date"
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
              v-model="formData.installment_pay_date"
              locale="th-TH"
              picker-date
              @input="menuDate = false"
            ></v-date-picker>
          </v-menu>

          <v-text-field
            class="mt-3"
            label="จำนวนเงิน*"
            v-model="formData.installment_amount"
            outlined
            dense
            hide-details
            :rules="[(v) => !!v]"
          >
          </v-text-field>

          <v-file-input
            class="mt-3"
            label="สลิป/ภาพประกอบ*"
            v-model="installment_img"
            prepend-icon=""
            append-icon="mdi-image"
            show-size
            outlined
            dense
            hide-details="auto"
            :rules="ruleMustImage"
          ></v-file-input>
        </v-card-text>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import * as apiInstallmentPayments from "@/Api/apiInstallmentPayments";
import * as customAlart from "@/customJS/customAlart";
export default {
  props: ["id", , "appearance", "text", "src", "action", "installment_id", "installment_no"],
  data() {
    return {
      dialog: false,
      loading: false,
      menuDate: false,
      ruleMustImage: [(v) => !!v, (v) => !v || v.size < 11000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
      formData: {},
      installment_img: null,
    };
  },
  methods: {
    async onAction() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        if (this.action == "add") {
          let formData = new FormData();
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("installment_img", this.installment_img);
          const response = await apiInstallmentPayments.store(formData);
          // console.log(response);
          response.status == 200
            ? (this.$emit("success"), customAlart.TopSuccess())
            : (this.$emit("error"), customAlart.TopError());
        } else if (this.action == "edit") {
          let formData = new FormData();
          formData.append("_method", "PUT");
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("installment_img", this.installment_img);
          const response = await apiInstallmentPayments.update(this.formData.id, formData);
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
          if (this.action == "add") {
            this.formData.installment_id = this.installment_id;
            this.formData.installment_no = this.installment_no;
          } else {
            this.loading = true;
            const response = await apiInstallmentPayments.show(this.id);
            this.formData = response.data;
            this.loading = false;
          }
        });
      }
    },
  },
};
</script>
