<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" width="400px">
      <v-card>
        <v-form ref="form" autocomplete="true" @submit.prevent="onAction(formData.id)">
          <v-toolbar color="primary" dark flat>
            {{ formTitle }}
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <v-menu
              ref="munuPreApproveDate"
              v-model="munuPreApproveDate"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  autocomplete="true"
                  v-model="formData.pre_approve_date"
                  label="วันที่อนุมัติเบื้องต้น"
                  v-bind="attrs"
                  v-on="on"
                  persistent-hint
                  prepend-icon=""
                  outlined
                  dense
                  hide-details
                  flathide-details
                  :rules="rule"
                  clearable
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="formData.pre_approve_date"
                locale="th-TH"
                picker-date
                @input="munuPreApproveDate = false"
              ></v-date-picker>
            </v-menu>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">ยกเลิก</v-btn>
            <v-btn type="submit" color="success darken-1" text :loading="btnloading">บันทึก</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiPreApprove from "@/Api/apiPreApprove";

export default {
  props: ["dialog", "working_id"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      munuPreApproveDate: false,
      formTitle: "",
      action: "",
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
    };
  },
  mounted() {},
  methods: {
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        if (this.action == "add") {
          const response = await apiPreApprove.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "PreApprove");
          } else {
            this.$emit("error", "PreApprove");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiPreApprove.update(this.formData.id, this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "PreApprove");
          } else {
            this.$emit("error", "PreApprove");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        }
      }
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        this.formDataLoading = true;
        await this.$nextTick(async () => {
          this.$refs.form.reset();
          this.formData = {};
          const checkPreApprove = await apiPreApprove.checkPreApprove(this.$props.working_id);
          if (Object.keys(checkPreApprove.data).length === 0) {
            this.formTitle = "เพิ่มวันอนุมัติเบื้องต้น";
            this.action = "add";
            this.rule = [(value) => !!value || "กรุณาใส่ข้อมูล"];
            this.formData.working_id = this.$props.working_id;
          } else {
            this.formTitle = "แก้ไขวันอนุมัติเบื้องต้น";
            this.action = "edit";
            this.rule = [];
            this.formData = checkPreApprove.data;
          }
          this.formDataLoading = false;
        });
      }
      this.btnloading = false;
    },
    dialogDeleteComponent() {
      if (!this.dialogDeleteComponent) {
        this.$emit("cancleItem");
      }
    },
  },
};
</script>

<style></style>
