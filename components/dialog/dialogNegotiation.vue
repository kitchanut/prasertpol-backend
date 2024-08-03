<template>
  <span>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on"> Click Me </v-btn> -->
        <v-btn v-if="action == 'add'" color="primary" dark v-bind="attrs" v-on="on" style="height: 40px">
          <v-icon left>mdi-plus</v-icon>
          เพิ่มรายการใหม่
        </v-btn>
        <v-btn v-if="action == 'edit'" color="primary" fab x-small dark v-bind="attrs" v-on="on">
          <v-icon> mdi-pencil </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-form ref="form" @submit.prevent="onAction()" autocomplete="true">
          <v-toolbar color="primary" dark flat> {{ formTitle }} {{ id }} </v-toolbar>
          <v-card-text>
            <v-card outlined class="mt-3">
              <v-card-text>
                <h3 class="mb-3">ข้อมูลการยื่นอนุมัติ</h3>
                <v-autocomplete
                  :filter="filterObject"
                  :items="dataWorking"
                  item-value="id"
                  label="กรุณาเลือกลำดับงาน"
                  single-line
                  v-model="formData.working_id"
                  outlined
                  dense
                  hide-details
                >
                  <template slot="selection" slot-scope="{ item }">
                    {{ item.cars.car_no }} | {{ item.customer.customer_name }}
                  </template>
                  <template slot="item" slot-scope="{ item }">
                    W{{ item.id }} | {{ item.cars.car_no }} | {{ item.customer.customer_name }}</template
                  >
                </v-autocomplete>

                <v-text-field
                  class="mt-3"
                  autocomplete="true"
                  label="ยอดจัด"
                  type="number"
                  min="0"
                  v-model="formData.finance_price"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="เงินดาวน์"
                  type="number"
                  v-model="formData.down"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="ราคาขายรถ"
                  type="number"
                  v-model="formData.car_price"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-textarea
                  class="mt-3"
                  rows="2"
                  label="รายละเอียด (ถ้ามี)"
                  v-model="formData.details"
                  outlined
                  dense
                  hide-details
                ></v-textarea>
              </v-card-text>
            </v-card>

            <v-card outlined class="mt-3">
              <v-card-text>
                <h3 class="mb-3">ข้อมูลการอนุมัติของแบงค์</h3>

                <v-text-field
                  class="mt-3"
                  autocomplete="true"
                  label="ยอดจัด"
                  type="number"
                  min="0"
                  v-model="formData.bank_finance_price"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="เงินดาวน์"
                  type="number"
                  v-model="formData.bank_down"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="ราคาขายรถ"
                  type="number"
                  v-model="formData.bank_car_price"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-textarea
                  class="mt-3"
                  rows="2"
                  label="รายละเอียด (ถ้ามี)"
                  v-model="formData.bank_details"
                  outlined
                  dense
                  hide-details
                ></v-textarea>
              </v-card-text>
            </v-card>

            <v-card class="mt-3" outlined>
              <v-card-text>
                <h3 class="mb-3">ข้อมูลการต่อรองราคา</h3>
                <v-text-field
                  label="ยอดจัด"
                  type="number"
                  min="0"
                  v-model="formData.negotiation_finance_price"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="เงินดาวน์"
                  type="number"
                  v-model="formData.negotiation_down"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="ราคาขายรถ"
                  type="number"
                  v-model="formData.negotiation_car_price"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-text-field>

                <v-textarea
                  class="mt-3"
                  rows="2"
                  label="รายละเอียดการต่อรองราคา (ถ้ามี)"
                  v-model="formData.negotiation_details"
                  outlined
                  dense
                  hide-details
                ></v-textarea>
              </v-card-text>
            </v-card>

            <v-card v-if="user_group_permission == -1 && action == 'edit'" class="mt-3" outlined>
              <v-card-text>
                <h3 class="mb-3">ผลการต่อรอง</h3>
                <v-text-field
                  label="ยอดจัด"
                  type="number"
                  min="0"
                  v-model="formData.negotiation_result_finance_price"
                  outlined
                  dense
                  hide-details
                  :disabled="user_group_permission == -1 ? false : true"
                  :rules="rule"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="เงินดาวน์"
                  type="number"
                  v-model="formData.negotiation_result_down"
                  outlined
                  dense
                  hide-details
                  :disabled="user_group_permission == -1 ? false : true"
                  :rules="rule"
                >
                </v-text-field>

                <v-text-field
                  class="mt-3"
                  label="ราคาขายรถ"
                  type="number"
                  v-model="formData.negotiation_result_car_price"
                  outlined
                  dense
                  hide-details
                  :disabled="user_group_permission == -1 ? false : true"
                  :rules="rule"
                >
                </v-text-field>

                <v-textarea
                  class="mt-3"
                  rows="2"
                  label="รายละเอียดผลการต่อรอง (ถ้ามี)"
                  v-model="formData.negotiation_result_details"
                  outlined
                  dense
                  hide-details
                  :disabled="user_group_permission == -1 ? false : true"
                ></v-textarea>
              </v-card-text>
            </v-card>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">ยกเลิก</v-btn>
            <v-btn type="submit" color="success darken-1" text :loading="formDataLoading">บันทึก </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </span>
</template>
<script>
import * as apiNegotiations from "@/Api/apiNegotiations";
import * as apiWorks from "@/Api/apiWorks";
export default {
  props: ["id", "action"],
  data() {
    return {
      dialog: false,
      formTitle: "",
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      formData: {},
      dataWorking: [],
      formDataLoading: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
    };
  },
  mounted() {
    this.getDataWork();
  },
  methods: {
    async getDataWork() {
      const response = await apiWorks.activeWorkingID();
      this.dataWorking = response.data;
      //   console.log(this.dataWorking);
    },
    filterObject(item, queryText, itemText) {
      return item.cars.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1;
    },
    async onAction() {
      if (this.$refs.form.validate()) {
        this.formDataLoading = true;
        if (this.action == "add") {
          const response = await apiNegotiations.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          const response = await apiNegotiations.update(this.id, this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        }
        this.dialog = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.$nextTick(() => {
          this.formData = {};
          this.$refs.form.reset();
        });
        this.$nextTick(async () => {
          if (this.action == "add") {
            this.formTitle = "เพิ่มข้อมูล";
          } else {
            this.formDataLoading = true;
            this.formTitle = "แก้ไขข้อมูล";
            const response = await apiNegotiations.show(this.id);
            this.formData = response.data;
            this.formDataLoading = false;
          }
        });
      }
    },
  },
};
</script>
