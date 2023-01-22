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
                  <v-autocomplete
                    v-model="formData.car_part_id"
                    id="formData.car_part_id"
                    name="formData.car_part_id"
                    :items="carParts"
                    item-text="car_part_name"
                    item-value="id"
                    label="อะไหล่"
                    outlined
                    dense
                    no-data-text="ไม่มีข้อมูล"
                    hide-details
                    :rules="rule"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="จำนวน"
                    append-icon=""
                    v-model="formData.car_part_amount"
                    id="formData.car_part_amount"
                    name="formData.car_part_amount"
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
import * as apiStock_part from "@/Api/apiStock_part";
import * as apiCar_parts from "@/Api/apiCar_parts";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      carParts: [],
    };
  },
  mounted() {},
  methods: {
    async getCarParts() {
      const response = await apiCar_parts.select();
      this.carParts = response.data;
      this.loading = false;
    },

    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        if (this.action == "add") {
        } else if (this.action == "edit") {
          const response = await apiStock_part.update(id, this.formData);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "StockPart");
          } else {
            this.$emit("error", "StockPart");
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
        this.getCarParts();

        if (this.action == "add") {
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiStock_part.show(this.id);
          // console.log(response)
          await this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              self.formData.stock_type = 3;
              self.formData.car_part_amount_before =
                response.data.car_part_amount;
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
