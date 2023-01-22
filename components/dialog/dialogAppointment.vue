<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      :fullscreen="
        $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'
          ? true
          : false
      "
    >
      <v-card>
        <v-form ref="form" @submit.prevent="onAction()" autocomplete="true">
          <v-toolbar color="primary" dark flat>
            {{ formTitleAppointment }}
          </v-toolbar>

          <v-progress-linear
            v-if="formDataLoading"
            indeterminate
            color="yellow darken-2"
          >
          </v-progress-linear>

          <v-card-text>
            <!-- <v-container> -->

            <div v-if="status_bank == 4">
              <v-row class="mt-3">
                <v-col
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                  cols="12"
                  class="pt-0"
                >
                  <v-menu
                    ref="menuDateAppointment_date"
                    v-model="menuDateAppointment_date"
                    id="menuDateAppointment_date"
                    name="menuDateAppointment_date"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.appointment_date"
                        id="formData.appointment_date"
                        name="formData.appointment_date"
                        label="นัดทำสัญญาวันที่"
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flathide-details
                        :rules="rule"
                        clearable
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.appointment_date"
                      id="formData.appointment_date"
                      name="formData.appointment_date"
                      locale="th-TH"
                      picker-date
                      @input="menuDateAppointment_date = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                  cols="12"
                  class="pt-0"
                >
                  <v-autocomplete
                    v-model="formData.bank_id"
                    id="formData.bank_id"
                    name="formData.bank_id"
                    @change="change_branch(formData.bank_id)"
                    :items="dataBank"
                    item-text="bank_name"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    label="แบงค์ที่ทำสัญญา"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>

                <v-col
                  xs="12"
                  sm="12"
                  md="4"
                  lg="4"
                  xl="4"
                  cols="12"
                  class="pt-0"
                >
                  <v-autocomplete
                    v-model="formData.bank_branch_id"
                    id="formData.bank_branch_id"
                    name="formData.bank_branch_id"
                    :items="dataBank_branch"
                    item-text="bank_branch_name"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    label="สาขาแบงค์"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  cols="12"
                  class="pt-0"
                >
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อ MKT"
                    append-icon=""
                    v-model="formData.sale_name"
                    id="formData.sale_name"
                    name="formData.sale_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  cols="12"
                  class="pt-0"
                >
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์ติดต่อ"
                    append-icon=""
                    v-model="formData.sale_tel"
                    id="formData.sale_tel"
                    name="formData.sale_tel"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>

            <div v-if="status_bank == 6">
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    :readonly="
                      user_group_permission == 2 || user_group_permission == 3
                        ? true
                        : false
                    "
                    rows="2"
                    label="เหตุผลที่ไม่อนุมัติ"
                    append-icon=""
                    v-model="formData.bank_deny"
                    id="formData.bank_deny"
                    name="formData.bank_deny"
                    outlined
                    dense
                    hide-details
                  >
                  </v-textarea>
                </v-col>
              </v-row>
            </div>

            <v-row v-if="status_bank == 4" class="mt-5">
              <v-col cols="12">
                <h2 class="text-center">ตารางเทียบไฟแนนซ์</h2>
                <br />

                <v-simple-table v-if="dataPreviewBanks.length > 0">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="">ธนาคาร</th>
                        <th class="">ราคากลาง</th>
                        <th class="" width="10%">บวก (%)</th>
                        <th class="" width="10%">95%</th>
                        <th class="">รวมจัด</th>
                        <th class="" width="10%">90%</th>
                        <th class="" width="10%">85%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(dataPreviewBank, keys) in dataPreviewBanks"
                        :key="keys"
                      >
                        <td>{{ dataPreviewBank.bank_name }}</td>
                        <td>
                          {{
                            Number(dataPreviewBank.middle_price).toLocaleString(
                              "th-TH",
                              {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }
                            )
                          }}
                        </td>
                        <td>{{ dataPreviewBank.middle_plus }}</td>
                        <td>
                          {{
                            Number(dataPreviewBank.middle_price) * 0.95 == "NaN"
                              ? 0
                              : Number(
                                  dataPreviewBank.middle_price * 0.95
                                ).toLocaleString("th-TH", {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2,
                                })
                          }}
                        </td>
                        <td>
                          {{
                            Number(dataPreviewBank.amount_price).toLocaleString(
                              "th-TH",
                              {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }
                            )
                          }}
                        </td>

                        <td>
                          {{
                            Number(
                              dataPreviewBank.middle_price * 0.9
                            ).toLocaleString("th-TH", {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            })
                          }}
                        </td>
                        <td>
                          {{
                            Number(
                              dataPreviewBank.middle_price * 0.85
                            ).toLocaleString("th-TH", {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            })
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <h2 v-else class="text-center" style="color: red">
                  ไม่มีข้อมูลเทียบ
                </h2>
              </v-col>
            </v-row>
            <!-- </v-container> -->
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
import * as apiAppointment from "@/Api/apiAppointment";
import * as apiBank from "@/Api/apiBank";
import * as apiBank_branch from "@/Api/apiBank_branch";

export default {
  props: [
    "dialogAppointment",
    "actionAppointment",
    "idWork",
    "formTitleAppointment",
    "status_bank",
  ],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      menuDateAppointment_date: false,
      formData: {},
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dataBank: [],
      dataBank_branch: [],
      dataBank_branch_all: [],
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      dataPreviewBanks: [],
    };
  },
  mounted() {},
  methods: {
    async change_branch(bank_id) {
      // console.log(bank_id);
      let newArray = [];
      for (let index = 0; index < this.dataBank_branch_all.length; index++) {
        if (this.dataBank_branch_all[index].bank_id == bank_id) {
          newArray.push(this.dataBank_branch_all[index]);
        }
      }
      this.dataBank_branch = newArray;
    },
    async getBank() {
      const response = await apiBank.select();
      this.dataBank = await response.data;
      // this.dataPreviewBanks = await response.data;
    },
    async getBank_branch() {
      const response = await apiBank_branch.select();
      this.dataBank_branch_all = await response.data;
      // this.dataPreviewBanks = await response.data;
    },
    async onAction() {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        // console.log("1");
        if (this.formData.action == "add") {
          const response = await apiAppointment.store(this.formData);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Appointment");
          } else {
            this.$emit("error", "Appointment");
          }
        } else if (this.formData.action == "edit") {
          const response = await apiAppointment.update(
            this.formData.id,
            this.formData
          );
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Appointment");
          } else {
            this.$emit("error", "Appointment");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    async dialogAppointment() {
      this.dialogDeleteComponent = this.dialogAppointment;
      if (this.dialogDeleteComponent) {
        this.getBank();
        this.getBank_branch();
        if (this.actionAppointment == "check") {
          this.formDataLoading = true;
          const response = await apiAppointment.checkAppointment(this.idWork);
          // console.log(response);
          this.$nextTick(async () => {
            await this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              self.formData.work_status = this.status_bank;
              self.dataPreviewBanks = await response.data.dataPreviewBanks;
              // console.log(response.data.dataPreviewBanks);
              this.change_branch(response.data.bank_id);
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

<style>
h2 {
  font-weight: 300;
}
</style>
