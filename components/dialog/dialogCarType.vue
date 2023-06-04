<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" width="500px">
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
              <v-text-field
                autocomplete="true"
                label="ไอคอน"
                append-icon=""
                v-model="formData.car_type_icon"
                id="formData.car_type_icon"
                name="formData.car_type_icon"
                outlined
                dense
                hide-details
              >
              </v-text-field>

              <v-text-field
                class="mt-3"
                autocomplete="true"
                label="รหัสสี"
                append-icon=""
                v-model="formData.car_type_code_color"
                id="formData.car_type_code_color"
                name="formData.car_type_code_color"
                outlined
                dense
                hide-details
              >
              </v-text-field>

              <v-select
                class="mt-3"
                :items="[
                  {
                    value: 1,
                    text: 'เก๋ง',
                  },
                  {
                    value: 2,
                    text: 'กระบะ',
                  },
                ]"
                item-value="value"
                item-text="text"
                v-model="formData.car_type_main"
                label="ประเภทหลัก"
                outlined
                dense
                hide-details=""
              ></v-select>

              <v-text-field
                class="mt-3"
                autocomplete="true"
                label="ประเภทรถไทย"
                append-icon=""
                v-model="formData.car_type_name"
                id="formData.car_type_name"
                name="formData.car_type_name"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-text-field
                class="mt-3"
                autocomplete="true"
                label="ประเภทรถอังกฤษ"
                append-icon=""
                v-model="formData.car_type_name_en"
                id="formData.car_type_name_en"
                name="formData.car_type_name_en"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-radio-group
                class="mt-3"
                v-model="formData.car_type_active"
                id="formData.car_type_active"
                name="formData.car_type_active"
                :rules="rule"
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
import * as apiCar_types from "@/Api/apiCar_types";

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
        if (this.action == "add") {
          const response = await apiCar_types.store(this.formData);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiCar_types.update(id, this.formData);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
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
      if (this.dialogDeleteComponent) {
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await {
                car_type_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiCar_types.show(this.id);
          await this.$nextTick(() => {
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
