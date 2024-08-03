<template>
  <span>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <div
          v-if="appearance == 'text'"
          x-small
          class="white--text"
          rounded
          dark
          v-bind="attrs"
          v-on="on"
          style="cursor: pointer"
        >
          + เพิ่ม
        </div>
      </template>

      <v-card>
        <v-form ref="form" @submit.prevent="onAction()" autocomplete="true">
          <v-toolbar color="primary" dark flat> {{ formTitle }} </v-toolbar>
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

            <v-text-field
              class="mt-3"
              label="ลำดับรถ*"
              v-model="formData.car_no"
              outlined
              dense
              hide-details
              disabled
              :rules="rule"
            >
            </v-text-field>

            <v-textarea
              class="mt-3"
              rows="2"
              v-model="formData.note"
              outlined
              label="รายละเอียด"
              dense
              hide-details=""
            ></v-textarea>
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
import * as apiRequestUpdate from "@/Api/apiRequestUpdate";
import * as apiCars from "@/Api/apiCars";
import * as customAlart from "@/customJS/customAlart";

export default {
  props: ["id", "action", "appearance", "working_id", "car_no"],
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
  mounted() {},
  methods: {
    async onAction() {
      if (this.$refs.form.validate()) {
        this.formDataLoading = true;
        if (this.action == "add") {
          this.loading = true;
          this.formDataLoading = true;
          let formData = new FormData();
          formData.append("formData", JSON.stringify(this.formData));
          const response = await apiRequestUpdate.store(formData);

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
              this.formData.working_id = this.working_id;
              this.formData.car_no = this.car_no;
            } else {
            }
          });
        });
      }
    },
  },
};
</script>
