<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
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
                <v-col>
                  <h2>ลำดับรถ: {{ car_no }}</h2>
                </v-col>
              </v-row>
              <br />
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="true"
                    label="ค่าคอม"
                    append-icon=""
                    type="number"
                    v-model="formData.commission"
                    id="formData.commission"
                    name="formData.commission"
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
import * as apiReceiving_money from "@/Api/apiReceiving_money";

export default {
  props: ["car_no", "dialog", "action", "id", "formTitle"],
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
        const data = new FormData();
        data.append("formData", JSON.stringify(this.formData));
        if (this.action == "add") {
          // const response = await apiReceiving_money.store(this.formData);
          // this.$refs.form.reset();
          // if (response.status == 200) {
          //   this.$emit("success");
          // } else {
          //   this.$emit("error");
          // }
        } else if (this.action == "edit") {
          data.append("_method", "PATCH");
          const response = await apiReceiving_money.update(id, data);
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
          // this.$nextTick(() => {
          //   this.$refs.form.reset();
          //   const self = this;
          //   this.$nextTick(async () => {
          //     self.formData = {
          //       unit_active: "1",
          //     };
          //   });
          // });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiReceiving_money.show(this.id);
          // console.log(this.id);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              this.formData.user_id =
                this.$auth.$storage.getLocalStorage("userData-id");
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
