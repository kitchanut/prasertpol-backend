<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
      <v-card>
        <v-form
          ref="form"
          @submit.prevent="onAction(formData.id)"
          autocomplete="true"
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
                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="วันที่"
                    append-icon=""
                    v-model="formData.day_no"
                    id="formData.day_no"
                    name="formData.day_no"
                    type="number"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.money_month"
                    id="formData.money_month"
                    name="formData.money_month"
                    :items="$store.state.month_Select"
                    item-text="title"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="value"
                    label="เดือน"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.money_year"
                    id="formData.money_year"
                    name="formData.money_year"
                    :items="years"
                    item-text="value"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="value"
                    label="ปี ค.ศ"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <br />
              <br />
              <v-row class="d-flex justify-center">
                <h2>สาขาที่เพิ่มเงิน</h2>
              </v-row>

              <br />
              <br />
              <v-row
                v-for="(branch_detail, keys) in formData.branch_details"
                :key="keys"
              >
                <v-col cols="5">
                  <v-autocomplete
                    v-model="branch_detail.branch_id"
                    id="branch_detail.branch_id"
                    name="branch_detail.branch_id"
                    :items="branches"
                    item-text="branch_name"
                    item-value="id"
                    label="สาขา"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    @change="getMoney(branch_detail.branch_id, keys)"
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="ยกยอด"
                    readonly
                    type="number"
                    append-icon=""
                    v-model="branch_detail.branch_before_money"
                    id="branch_detail.branch_before_money"
                    name="branch_detail.branch_before_money"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    autocomplete="true"
                    label="เพิ่ม"
                    append-icon=""
                    type="number"
                    v-model="branch_detail.branch_money"
                    id="branch_detail.branch_money"
                    name="branch_detail.branch_money"
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
                  <v-btn color="green" block dark @click="add_row()">
                    <v-icon>mdi-plus</v-icon> เพิ่มสาขา
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiAdd_money from "@/Api/apiAdd_money";
import * as apiBranches from "@/Api/apiBranches";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {
        branch_details: {},
      },
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      years: [],
      branches: [],
    };
  },
  mounted() {},
  methods: {
    async getYearCurrent() {
      var max = new Date().getFullYear();
      var min = max - 50;
      for (var i = max; i >= min; i--) {
        this.years.push({ value: i });
      }
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.action == "add") {
          const response = await apiAdd_money.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }

          this.btnloading = false;
          this.formDataLoading = false;
        } else if (this.action == "edit") {
          const response = await apiAdd_money.update(this.id, this.formData);
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
    async getMoney(id, key) {
      // console.log(id);
      for (let index = 0; index < this.branches.length; index++) {
        if (this.branches[index].id == id) {
          // console.log(this.branches[index]);
          this.formData.branch_details[key].branch_before_money =
            this.branches[index].branch_money;
        }
      }
    },
    async add_row() {
      let data = {
        branch_id: "",
        branch_money: 0,
      };
      await this.formData.branch_details.push(data);
    },
    // ฟังชั่นลบแถว
    async rm_row(row) {
      await this.formData.branch_details.splice(row, 1);
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      await this.getYearCurrent();
      await this.getBranches();
      if (this.dialogDeleteComponent) {
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                user_id: this.user_id,
                branch_details: [{}],
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiAdd_money.show(this.id);
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
