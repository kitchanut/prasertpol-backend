<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="70%">
      <v-card>
        <v-form
          ref="form"
          @submit.prevent="onAction(formData.id)"
          autocomplete="true"
        >
          <v-toolbar color="primary" dark flat>
            {{ formTitle }}
          </v-toolbar>

          <v-progress-linear
            v-if="formDataLoading"
            indeterminate
            color="yellow darken-2"
          >
          </v-progress-linear>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อธนาคาร"
                    append-icon=""
                    v-model="formData.bank_name"
                    id="formData.bank_name"
                    name="formData.bank_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อย่อ"
                    append-icon=""
                    v-model="formData.bank_nick_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="เลขผู้เสียภาษี"
                    append-icon=""
                    v-model="formData.bank_idvat"
                    id="formData.bank_idvat"
                    name="formData.bank_idvat"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์ติดต่อ"
                    append-icon=""
                    v-model="formData.bank_tel"
                    id="formData.bank_tel"
                    name="formData.bank_tel"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row> </v-row>

              <v-row>
                <v-col cols="12">
                  <v-textarea
                    rows="2"
                    label="ที่อยู่"
                    append-icon=""
                    v-model="formData.bank_address"
                    id="formData.bank_address"
                    name="formData.bank_address"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-textarea>
                </v-col>
              </v-row>
              <v-radio-group
                class="mt-1"
                v-model="formData.bank_active"
                id="formData.bank_active"
                name="formData.bank_active"
                :rules="[(value) => !!value]"
                row
              >
                <template>
                  <div class="mr-1">แสดงตอนเลือก:</div>
                </template>

                <v-radio label="เปิดใช้งาน" value="1"></v-radio>
                <v-radio label="ปิดการใช้งาน" color="red" value="2"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')"
              >ยกเลิก</v-btn
            >
            <v-btn
              type="submit"
              color="success darken-1"
              text
              :loading="btnloading"
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiBank from "@/Api/apiBank";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
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
        this.formDataLoading = true;
        if (this.action == "add") {
          const response = await apiBank.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          const response = await apiBank.update(id, this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        if (this.action == "add") {
          await this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                bank_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiBank.show(this.id);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
            });
          });

          this.formDataLoading = false;
        }
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
