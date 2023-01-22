<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
      <v-card>
        <v-form
          autocomplete="true"
          ref="form"
          @submit.prevent="onAction(formData.id)"
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
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่ออู่"
                    append-icon=""
                    v-model="formData.partner_technician"
                    id="formData.partner_technician"
                    name="formData.partner_technician"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อธนาคาร"
                    append-icon=""
                    v-model="formData.partner_technician_bank"
                    id="formData.partner_technician_bank"
                    name="formData.partner_technician_bank"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="เลขบัญชี"
                    append-icon=""
                    v-model="formData.partner_technician_bank_number"
                    id="formData.partner_technician_bank_number"
                    name="formData.partner_technician_bank_number"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อบัญชี"
                    append-icon=""
                    v-model="formData.partner_technician_account"
                    id="formData.partner_technician_account"
                    name="formData.partner_technician_account"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์ติดต่อ"
                    append-icon=""
                    v-model="formData.partner_technician_tel"
                    id="formData.partner_technician_tel"
                    name="formData.partner_technician_tel"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.branch_id"
                    id="formData.branch_id"
                    name="formData.branch_id"
                    :items="branches"
                    item-text="branch_name"
                    item-value="id"
                    label="สาขา"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-radio-group
                class="mt-1"
                v-model="formData.partner_technician_active"
                id="formData.partner_technician_active"
                name="formData.partner_technician_active"
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
import * as apiPartner_technician from "@/Api/apiPartner_technician";
import * as apiBranches from "@/Api/apiBranches";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      branches: [],
    };
  },
  mounted() {},
  methods: {
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.loading = false;
      // console.log(response);
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        if (this.action == "add") {
          const response = await apiPartner_technician.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          const response = await apiPartner_technician.update(
            id,
            this.formData
          );
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
        await this.getBranches();
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                partner_technician_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiPartner_technician.show(this.id);
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
