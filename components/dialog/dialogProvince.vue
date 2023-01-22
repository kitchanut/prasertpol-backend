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
                  <v-autocomplete
                    v-model="formData.geography_id"
                    id="formData.geography_id"
                    name="formData.geography_id"
                    :items="dataGeographie"
                    item-text="name"
                    item-value="id"
                    label="ภาค"
                    outlined
                    dense
                    no-data-text="ไม่มีข้อมูล"
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อจังหวัด"
                    append-icon=""
                    v-model="formData.name_th"
                    id="formData.name_th"
                    name="formData.name_th"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อจังหวัดอังกฤษ"
                    append-icon=""
                    v-model="formData.name_en"
                    id="formData.name_en"
                    name="formData.name_en"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="รหัสจังหวัด"
                    append-icon=""
                    v-model="formData.code"
                    id="formData.code"
                    name="formData.code"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
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
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiGeographies from "@/Api/apiGeographies";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      dialogDeleteComponent: false,
      dataGeographie: [],
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
    };
  },
  mounted() {
    this.getGeographies();
  },
  methods: {
    async getGeographies() {
      const response = await apiGeographies.select();
      this.dataGeographie = response.data;
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        if (this.action == "add") {
          const response = await apiProvinces.store(this.formData);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiProvinces.update(id, this.formData);
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
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiProvinces.show(this.id);
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
