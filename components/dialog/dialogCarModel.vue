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
                    label="รหัสสี"
                    append-icon=""
                    v-model="formData.car_model_code_color"
                    id="formData.car_model_code_color"
                    name="formData.car_model_code_color"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ยี่ห้อ"
                    append-icon=""
                    v-model="formData.car_model_name"
                    id="formData.car_model_name"
                    name="formData.car_model_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-radio-group
                v-model="formData.car_model_active"
                id="formData.car_model_active"
                name="formData.car_model_active"
                :rules="rule"
                row
              >
                <template>
                  <div class="mr-1">แสดงตอนเลือก:</div>
                </template>

                <v-radio label="เปิดใช้งาน" value="1"></v-radio>
                <v-radio label="ปิดการใช้งาน" color="red" value="2"></v-radio>
              </v-radio-group>

              <div class="d-flex flex-column justify-center">
                <v-file-input
                  accept="image/*"
                  show-size
                  :label="
                    currentFile == null
                      ? 'เลือกรูปภาพ'
                      : imagePreviewURL == null
                      ? 'เลือกรูปภาพ'
                      : 'เลือกรูปใหม่'
                  "
                  @change="selectFile"
                ></v-file-input>
                <v-img
                  contain
                  v-if="currentFile != null || imagePreviewURL != null"
                  height="250px"
                  :src="imagePreviewURL"
                />
              </div>
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
import * as apiCar_models from "@/Api/apiCar_models";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/car_models/",
      btnloading: true,
      formDataLoading: false,
      formData: {},
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      currentFile: null,
      imagePreviewURL: null,
    };
  },
  mounted() {},
  methods: {
    selectFile(payload) {
      // console.log(payload);
      this.currentFile = payload;
      const file = payload; // in case vuetify file input
      if (file) {
        this.imagePreviewURL = URL.createObjectURL(file);
        URL.revokeObjectURL(file); // free memory
      } else {
        this.imagePreviewURL = null;
      }
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;

        const data = new FormData();
        data.append("formData", JSON.stringify(this.formData));
        data.append("Image", this.currentFile);

        if (this.action == "add") {
          const response = await apiCar_models.store(data);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          data.append("_method", "PATCH");
          const response = await apiCar_models.update(id, data);
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
      if (this.$props.dialog) {
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                car_model_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          // console.log(this.id);
          this.formDataLoading = true;
          const response = await apiCar_models.show(this.id);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              if (response.data.car_model_image != null) {
                this.imagePreviewURL =
                  this.serverUrl +
                  response.data.id +
                  "/" +
                  response.data.car_model_image;
              }
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
