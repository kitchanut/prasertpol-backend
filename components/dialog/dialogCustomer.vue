<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      width="550px"
      :fullscreen="
        $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'
          ? true
          : false
      "
    >
      <v-card>
        <v-form
          ref="form"
          autocomplete="true"
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
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อลูกค้า"
                    append-icon=""
                    v-model="formData.customer_name"
                    id="formData.customer_name"
                    name="formData.customer_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  class="pt-0"
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อเล่น"
                    append-icon=""
                    v-model="formData.customer_nickname"
                    id="formData.customer_nickname"
                    name="formData.customer_nickname"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  class="pt-0"
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ปีเกิด (พ.ศ.)"
                    append-icon=""
                    v-model="formData.customer_birthday_year"
                    id="formData.customer_birthday_year"
                    name="formData.customer_birthday_year"
                    onkeypress="return  (event.charCode >= 48 && event.charCode <= 57)"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  class="pt-0"
                  cols="12"
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์ติดต่อ"
                    append-icon=""
                    v-model="formData.customer_tel"
                    id="formData.customer_tel"
                    name="formData.customer_tel"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row
                class="d-flex flex-row rounded ma-auto mt-3 mb-3"
                style="
                  border-style: solid;
                  border-width: 1px;
                  border-color: gray;
                "
              >
                <v-col cols="12">
                  <v-radio-group
                    v-model="formData.customer_job"
                    id="formData.customer_job"
                    name="formData.customer_job"
                    :rules="[(value) => !!value]"
                    hide-details=""
                  >
                    <template>
                      <div>อาชีพ:</div>
                    </template>
                    <v-radio value="1" label="ข้าราชการ"></v-radio>
                    <v-radio value="2" label="พนักงานเอกชน"></v-radio>
                    <v-radio value="3" label="เกษตร"></v-radio>
                    <v-radio value="4" label="ค้าขาย"></v-radio>
                    <v-radio value="5" label="อื่น ๆ "></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col v-if="formData.customer_job == 5">
                  <v-text-field
                    autocomplete="true"
                    label="อาชีพ"
                    v-model="formData.customer_job_list"
                    id="formData.customer_job_list"
                    name="formData.customer_job_list"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
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
              >บันทึก
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiCustomers from "@/Api/apiCustomers";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_types from "@/Api/apiCar_types";

import selectAddCarModel from "@/components/selectAdd/selectAddCarModel";
import selectAddCarType from "@/components/selectAdd/selectAddCarType";

export default {
  components: {
    selectAddCarModel,
    selectAddCarType,
  },
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formTitleModel: "เพิ่มข้อมูล",
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      cartypes: [],
      carmodels: [],
      dialogDeleteComponent: false,
    };
  },

  mounted() {},
  methods: {
    async getCartypes() {
      const response = await apiCar_types.select();
      this.cartypes = response.data;
      this.loading = false;
    },
    async getCarmodels() {
      const response = await apiCar_models.select();
      this.carmodels = response.data;
      this.loading = false;
    },
    async addSuccess(value) {
      if (value == "AddCarType") {
        await this.getCartypes();
      } else if (value == "AddCarModel") {
        await this.getCarmodels();
      }
    },
    async addError(value) {
      if (value == "AddCarType") {
        await this.getCartypes();
      } else if (value == "AddCarModel") {
        await this.getCarmodels();
      }
    },

    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.action == "add") {
          const response = await apiCustomers.store(this.formData);
          this.$refs.form.reset();
          // console.log(response);
          if (response.status == 200) {
            this.$emit("success", "AddCustomer");
          } else {
            this.$emit("error", "AddCustomer");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiCustomers.update(this.id, this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "AddCustomer");
          } else {
            this.$emit("error", "AddCustomer");
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
      if (this.dialog) {
        this.getCartypes();
        this.getCarmodels();
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                customer_job: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiCustomers.show(this.id);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
            });
          });
          this.formDataLoading = false;
        }
      } else {
        this.$emit("cancleItem");
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
