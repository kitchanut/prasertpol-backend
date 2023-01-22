<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="70%">
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
                    :readonly="action == 'edit' ? true : false"
                    v-model="formData.car_id"
                    id="formData.car_id"
                    name="formData.car_id"
                    :items="dataCar"
                    item-text="car_no"
                    item-value="id"
                    label="ค้นหาตามลำดับรถ"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                  >
                    <template slot="selection" slot-scope="{ item }">
                      ลำดับ: {{ item.car_no }} ( {{ item.car_regis }} )
                    </template>

                    <template slot="item" slot-scope="{ item }">
                      ลำดับ: {{ item.car_no }} ( {{ item.car_regis }} )
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  "
                  cols="6"
                >
                  <v-radio-group
                    v-model="formData.withdraw_tpye"
                    id="formData.withdraw_tpye"
                    name="formData.withdraw_tpye"
                    :readonly="action == 'edit' ? true : false"
                    row
                  >
                    <template>
                      <div>ประเภท:</div>
                    </template>
                    <v-radio label="ซ่อม" value="1"></v-radio>
                    <v-radio label="ขาย" value="2"></v-radio>
                    <v-radio label="มอบให้ลูกค้า" value="3"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.car_part_id"
                    id="formData.car_part_id"
                    name="formData.car_part_id"
                    :items="parts"
                    @change="selectOnsee"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="car_part_name"
                    item-value="car_part_id"
                    label="อะไหล่"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="ในคลังมี"
                    readonly
                    append-icon=""
                    v-model="stockValue"
                    id="stockValue"
                    name="stockValue"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    :label="
                      formData.withdraw_part_status == 3
                        ? 'จำนวนที่ต้องคืน'
                        : 'จำนวนที่ต้องการ'
                    "
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

                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    :label="
                      formData.withdraw_part_status == 3 ? 'ได้คืน' : 'เบิกได้'
                    "
                    @input="checkWithdraw"
                    append-icon=""
                    v-model="formData.withdraw_part_amount"
                    id="formData.withdraw_part_amount"
                    name="formData.withdraw_part_amount"
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
                    label="คงเหลือ"
                    readonly
                    append-icon=""
                    v-model="formData.balance_part_amount"
                    id="formData.balance_part_amount"
                    name="formData.balance_part_amount"
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
              >{{
                action == "add"
                  ? "บันทึก"
                  : formData.withdraw_part_status == 3
                  ? "คืนอะไหล่"
                  : "เบิก"
              }}</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiStock_part from "@/Api/apiStock_part";
import * as apiWithdraw_part from "@/Api/apiWithdraw_part";
import * as apiCars from "@/Api/apiCars";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      parts: [],
      stockValue: "",
      dataCar: [],
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
    };
  },
  computed: {},
  mounted() {
    this.getStockPart(this.branch_id);
  },
  methods: {
    async getCars() {
      const response = await apiCars.selectall();
      this.dataCar = response.data;
    },

    async getStockPart(idBranch) {
      const response = await apiStock_part.select(idBranch);
      // console.log(response);
      this.parts = response.data;
      this.loading = false;
    },
    async selectOnsee(id) {
      this.stockValue = "";
      for (let index = 0; index < this.parts.length; index++) {
        if (this.parts[index].car_part_id == id) {
          // console.log(this.parts[index]);
          this.stockValue = this.parts[index].car_part_amount;
          break;
        }
      }
    },
    async checkWithdraw(value) {
      if (value != null) {
        this.formData.balance_part_amount =
          this.formData.car_part_amount - value;
      }
      // console.log(value);
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        if (this.action == "add") {
          const response = await apiWithdraw_part.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "withdraw");
          } else {
            this.$emit("error", "withdraw");
          }
        } else if (this.action == "edit") {
          // console.log(this.formData.withdraw_part_status);
          const response = await apiWithdraw_part.update(id, this.formData);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "withdraw");
          } else {
            this.$emit("error", "withdraw");
          }

          // console.log(this.formData.balance_part_amount);
          // console.log(this.formData.withdraw_part_status)
          this.getStockPart(this.branch_id);
        }
      }
      this.btnloading = false;
      this.formDataLoading = false;
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        this.formDataLoading = true;
        this.getCars();
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                user_id: this.$auth.$storage.getLocalStorage("userData-id"),
                branch_id: this.branch_id,
                withdraw_tpye: "1",
                withdraw_part_status: 1,
              };
            });
          });
        } else if (this.action == "edit") {
          const response = await apiWithdraw_part.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = response.data;
              await self.selectOnsee(response.data.car_part_id);
            });
          });
        }
        this.formDataLoading = false;
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

<style scoped>
.v-input--selection-controls {
  margin-top: 0px !important;
  padding-top: 0px !important;
}
</style>
