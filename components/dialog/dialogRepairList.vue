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
            <v-btn icon dark @click="$emit('cancleItem')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitle }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                type="submit"
                :loading="btnloading"
                dark
                text
                style="font-size: 18px"
              >
                บันทึก
              </v-btn>
            </v-toolbar-items>
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
                    label="ชื่อ"
                    append-icon=""
                    v-model="formData.repair_name"
                    id="formData.repair_name"
                    name="formData.repair_name"
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
                    label="เวลาที่ใช้ในการทำ (นาที)"
                    append-icon=""
                    v-model="formData.repair_time"
                    id="formData.repair_time"
                    name="formData.repair_time"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <br />
              <v-row class="d-flex justify-center">
                <h2>อะไหล่ที่ใช้ซ่อม</h2>
              </v-row>
              <br />

              <v-row
                v-for="(purchase_detail, keys) in formData.repair_details"
                :key="keys"
              >
                <v-col cols="7">
                  <v-autocomplete
                    v-model="purchase_detail.car_part_id"
                    id="purchase_detail.car_part_id"
                    name="purchase_detail.car_part_id"
                    :items="carParts"
                    item-text="car_part_name"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    label="อะไหล่"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="จำนวน"
                    append-icon=""
                    v-model="purchase_detail.car_part_value"
                    id="purchase_detail.car_part_value"
                    name="purchase_detail.car_part_value"
                    type="number"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-btn color="red" fab x-small dark @click="rm_row(keys)">
                    <v-icon> mdi-delete </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <br />
              <v-row class="d-flex">
                <v-col>
                  <v-btn color="green" block @click="add_row()">
                    <v-icon color="white">mdi-plus</v-icon>
                    <span style="color: white">เพิ่มรายการ</span>
                  </v-btn>
                </v-col>
              </v-row>
              <br />

              <v-radio-group
                v-model="formData.repair_active"
                :rules="rule"
                id="formData.repair_active"
                name="formData.repair_active"
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
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiRepair_lists from "@/Api/apiRepair_lists";
import * as apiCar_parts from "@/Api/apiCar_parts";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {
        repair_details: {},
      },
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      carParts: [],
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
          const response = await apiRepair_lists.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiRepair_lists.update(this.id, this.formData);
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
    async getCarParts() {
      const response = await apiCar_parts.select();
      this.carParts = response.data;
      //   console.log(this.data)
      this.loading = false;
    },
    async add_row() {
      let data = {
        car_part_id: "",
      };
      await this.formData.repair_details.push(data);
    },
    // ฟังชั่นลบแถว
    async rm_row(row) {
      await this.formData.repair_details.splice(row, 1);
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;

      if (this.dialogDeleteComponent) {
        this.getCarParts();

        if (this.action == "add") {
          await this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await {
                repair_details: [{}],
                repair_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiRepair_lists.show(this.id);
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
