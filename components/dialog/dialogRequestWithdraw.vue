<template>
  <span>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <span v-if="appearance == 'text'" v-bind="attrs" v-on="on">แจ้งเบิกเงิน</span>
      </template>

      <v-card>
        <v-form ref="form" @submit.prevent="onAction()" autocomplete="true">
          <v-toolbar color="primary" dark flat> {{ formTitle }}</v-toolbar>
          <v-card-text>
            <v-text-field
              label="ชื่อเล่นและชื่อจริงของเซล*"
              v-model="formData.sale_name"
              outlined
              dense
              hide-details
              disabled
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              label="สาขา*"
              v-model="formData.branch_name"
              outlined
              dense
              hide-details
              disabled
              :rules="rule"
            >
            </v-text-field>

            <v-autocomplete
              class="mt-3"
              v-model="formData.car_no"
              :items="dataCar"
              item-text="car_no"
              item-value="car_no"
              label="ลำดับรถ*"
              no-data-text="ไม่มีข้อมูล"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-autocomplete>

            <v-text-field
              class="mt-3"
              label="ชื่อลูกค้าที่ซื้อ*"
              v-model="formData.customer_name"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              label="ชื่อที่เบิก*"
              v-model="formData.customer_withdraw"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              label="ประเภท เช่น ค่าน้ำมัน ค่านำพา คืนเงินจอง อื่นๆ*"
              v-model="formData.type"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              label="จำนวนเงิน*"
              type="number"
              v-model="formData.amount"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              label="ธนาคาร*"
              v-model="formData.bank_name"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              label="หมายเลขบัญชี*"
              type="number"
              v-model="formData.account"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-textarea
              class="mt-3"
              rows="2"
              v-model="formData.note"
              outlined
              label="หมายเหตุ"
              dense
              hide-details=""
            ></v-textarea>

            <v-file-input
              class="mt-3"
              label="รูปบัตรประจำตัวประชาชนลูกค้า*"
              v-model="id_card"
              prepend-icon=""
              append-icon="mdi-image"
              show-size
              outlined
              dense
              hide-details="auto"
              :rules="ruleMustImage"
            ></v-file-input>

            <v-file-input
              class="mt-3"
              v-model="sale_sheet"
              label="เอกสารสรุปการขาย*"
              prepend-icon=""
              append-icon="mdi-image"
              show-size
              outlined
              dense
              hide-details="auto"
              :rules="ruleMustImage"
            ></v-file-input>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">ยกเลิก</v-btn>
            <v-btn type="submit" color="success darken-1" text :loading="formDataLoading">บันทึก </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </span>
</template>
<script>
import * as apiRequestMoneyWithdraw from "@/Api/apiRequestMoneyWithdraw";
import * as apiCars from "@/Api/apiCars";
import * as customAlart from "@/customJS/customAlart";

export default {
  props: ["id", "action", "appearance"],
  data() {
    return {
      dialog: false,
      formDataLoading: false,
      formTitle: "",
      dataCar: [],
      formData: {},
      id_card: null,
      sale_sheet: null,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      ruleMustImage: [(value) => !!value, (value) => !value || value.size < 10000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
      ruleImage: [(value) => !value || value.size < 10000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
    };
  },
  mounted() {
    this.getCars();
  },
  methods: {
    async getCars() {
      const response = await apiCars.SelectCarNo();
      this.dataCar = response.data;
    },
    async onAction() {
      if (this.$refs.form.validate()) {
        this.formDataLoading = true;
        if (this.action == "add") {
          this.loading = true;
          this.formDataLoading = true;

          let formData = new FormData();
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("id_card", this.id_card);
          formData.append("sale_sheet", this.sale_sheet);

          const response = await apiRequestMoneyWithdraw.store(formData);

          if (response.status == 200) {
            this.$emit("success");
            customAlart.TopSuccess();
          } else {
            this.$emit("error");
          }
        }
        this.dialog = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.$nextTick(() => {
          this.formData = {};
          this.$refs.form.reset();
          this.$nextTick(async () => {
            if (this.action == "add") {
              this.formTitle = "เพิ่มข้อมูล";
              this.formData.sale_name = this.$auth.$storage.getLocalStorage("userData-first_name");
              this.formData.branch_name = this.$auth.$storage.getLocalStorage("userDataOrg-branch_team_name");
            } else {
            }
          });
        });
      }
    },
  },
};
</script>
