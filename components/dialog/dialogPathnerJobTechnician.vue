<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
      <v-card>
        <v-form autocomplete="true" :readonly="isReadonly" ref="form" @submit.prevent="onAction(formData.id)">
          <v-toolbar color="primary" dark flat>
            {{ formTitlePathnerJobTechnician }}
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <v-container>
              <v-autocomplete
                v-model="formData.partner_technician_id"
                id="formData.partner_technician_id"
                name="formData.partner_technician_id"
                :items="dataPartner_technician"
                item-text="partner_technician"
                no-data-text="ไม่มีข้อมูล"
                item-value="id"
                label="มอบงานให้อู่"
                outlined
                dense
                hide-details
                :rules="rule"
              >
                <template v-slot:append-item>
                  <selectAddPartnerTechnician @success="addSuccess" @error="addError" />
                </template>
              </v-autocomplete>

              <v-row no-gutters class="mt-3">
                <v-col cols="6 pr-1">
                  <v-menu
                    :disabled="isReadonly"
                    v-model="menuDatecreated_at"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formData.created_at"
                        label="วันแจ้งซ่อม"
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        clearable
                        hide-details
                        flathide-details
                        :rules="rule"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.created_at"
                      locale="th-TH"
                      picker-date
                      @input="menuDatecreated_at = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6 pl-1">
                  <v-menu
                    :disabled="isReadonly"
                    v-model="menuDateExpected_date_end"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.expected_date_end"
                        label="คาดว่าจะเสร็จวันที่"
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        clearable
                        hide-details
                        flathide-details
                        :rules="rule"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.expected_date_end"
                      locale="th-TH"
                      picker-date
                      @input="menuDateExpected_date_end = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-text-field
                class="mt-3"
                label="จำนวนเงิน"
                v-model="formData.job_price"
                append-icon=""
                type="number"
                min="0"
                outlined
                dense
                hide-details
              >
              </v-text-field>

              <v-textarea
                class="mt-3"
                rows="10"
                label="รายการซ่อม"
                append-icon=""
                v-model="formData.job_technician_pathner_list"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-textarea>
            </v-container>
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
import * as apiPathner_job_technician from "@/Api/apiPathner_job_technician";
import * as apiPartner_technician from "@/Api/apiPartner_technician";
import selectAddPartnerTechnician from "@/components/selectAdd/selectAddPartner_technician";

import moment from "moment";

export default {
  components: {
    selectAddPartnerTechnician,
  },
  props: [
    "id",
    "idWork",
    "dialogPathnerJobTechnician",
    "actionPathnerJobTechnician",
    "idCar",
    "jobType",
    "formTitlePathnerJobTechnician",
  ],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      menuDatecreated_at: false,
      menuDateExpected_date_end: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      dataPartner_technician: [],
      isReadonly: false,
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      moment: moment,
    };
  },
  mounted() {
    // console.log();
  },
  methods: {
    async getPartner_technician() {
      const response = await apiPartner_technician.select();
      this.dataPartner_technician = response.data;
    },
    async addSuccess(value) {
      await this.getPartner_technician();
    },
    async addError(value) {
      await this.getPartner_technician();
    },

    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        if (this.actionPathnerJobTechnician == "add") {
          const response = await apiPathner_job_technician.store(this.formData);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Job_pathner");
          } else {
            this.$emit("error", "Job_pathner");
          }
        } else if (this.actionPathnerJobTechnician == "edit" || this.actionPathnerJobTechnician == "endJob") {
          const response = await apiPathner_job_technician.update(id, this.formData);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "Job_pathner");
          } else {
            this.$emit("error", "Job_pathner");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    async dialogPathnerJobTechnician() {
      this.dialogDeleteComponent = this.dialogPathnerJobTechnician;
      if (this.dialogPathnerJobTechnician) {
        this.getPartner_technician();
        if (this.actionPathnerJobTechnician == "add") {
          this.isReadonly = false;
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData.car_id = this.idCar;
              self.formData.user_id = this.user_id;
              self.formData.branch_id = this.branch_id;
              self.formData.job_type = this.jobType;
              self.formData.working_id = this.idWork;
              self.formData.job_technician_pathner_list =
                "กันชนหน้า, ฝากระโปรงหน้า,  แก้มหน้า L, กระจกมองข้าง L,  กระจกมองข้าง R, ประตูหน้า L,  ประตูหน้า R, ประตูหลัง L, ประตูหลัง R,ประตูหลัง R, แคป L, แคป R, บังโคลนหลัง R, บังโคลนหลัง L, แผงหลังเก๋ง, กระบะ L, กระบะ R, ฝาท้าย, ฝากระโปรงหลัง, กันชนหลัง, บังโคลนหน้า R, บังโคลนหน้า L, หลังคา, คานรับกันชนหน้า, ฐานรองแบต,ก้านปัดน้ำฝน,ขัดสี";
            });
          });
        } else if (this.actionPathnerJobTechnician == "edit") {
          this.isReadonly = false;
          this.formDataLoading = true;
          const response = await apiPathner_job_technician.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
            });
          });
          this.formDataLoading = false;
        } else if (this.actionPathnerJobTechnician == "endJob") {
          this.isReadonly = true;
          this.formDataLoading = true;
          const response = await apiPathner_job_technician.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              self.formData.date_end = moment().format("YYYY-MM-DD HH:mm:ss");
              self.formData.job_status = 2;
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
