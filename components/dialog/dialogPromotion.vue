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
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อโปรโมชัน"
                    append-icon=""
                    v-model="formData.promotion_name"
                    id="formData.promotion_name"
                    name="formData.promotion_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ลิงค์โปรโมชั่น"
                    append-icon=""
                    v-model="formData.promotion_link_facebook"
                    id="formData.promotion_link_facebook"
                    name="formData.promotion_link_facebook"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-textarea
                    rows="2"
                    label="คำอธิบายโปรโมชั่น"
                    append-icon=""
                    v-model="formData.promotion_detail"
                    id="formData.promotion_detail"
                    name="formData.promotion_detail"
                    outlined
                    dense
                    hide-details
                  >
                  </v-textarea>
                </v-col>
              </v-row>

              <v-radio-group
                v-model="formData.promotion_active"
                id="formData.promotion_active"
                name="formData.promotion_active"
                :rules="rule"
                row
              >
                <template>
                  <div class="mr-1">แสดงโปรโมชั่น:</div>
                </template>

                <v-radio label="เปิดใช้งาน" value="1"></v-radio>
                <v-radio label="ปิดการใช้งาน" color="red" value="2"></v-radio>
              </v-radio-group>
              <div class="d-flex flex-column justify-center">
                <v-file-input
                  accept="image/*,.pdf"
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
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiPromotion from "@/Api/apiPromotion";
export default {
  props: ["dialog", "action", "id", "formTitle"],
  components: {},
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/promotions/",
      btnloading: true,
      formDataLoading: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
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
        this.formDataLoading = true;

        const data = new FormData();
        data.append("formData", JSON.stringify(this.formData));
        data.append("Image", this.currentFile);

        if (this.action == "add") {
          const response = await apiPromotion.store(data);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          data.append("_method", "PATCH");

          const response = await apiPromotion.update(id, data);
          // console.log(response);
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
      if (this.dialogDeleteComponent) {
        this.imagePreviewURL = null;
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                promotion_link_facebook: this.$store.state.linkFacebook,
                promotion_active: "1",
                user_id: this.$auth.$storage.getLocalStorage("userData-id"),
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiPromotion.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              if (response.data.promotion_image != null) {
                this.imagePreviewURL =
                  this.serverUrl +
                  response.data.id +
                  "/" +
                  response.data.promotion_image;
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
