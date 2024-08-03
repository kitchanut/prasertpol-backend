<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      :fullscreen="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' ? true : false"
      width="800px"
    >
      <v-card>
        <v-form ref="form" @submit.prevent="onAction()" autocomplete="true">
          <v-toolbar color="primary" dark flat>
            {{ formTitleAppointment }}
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <!-- <v-container> -->

            <div v-if="status_bank == 4">
              <v-radio-group v-model="formData.appointment_type" :rules="rule" row hide-details class="pb-2">
                <v-radio label="นัดทำสัญญา" value="นัดทำสัญญา"></v-radio>
                <v-radio label="ฝากเซนต์" value="ฝากเซนต์" color="green"></v-radio>
              </v-radio-group>

              <v-row v-if="formData.appointment_type == 'ฝากเซนต์'" class="mt-3" no-gutters>
                <v-col md="3" lg="3" xl="3" cols="12">
                  <v-menu
                    v-model="menuDateDeposit"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formData.deposit_date"
                        label="วันที่ฝาก"
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                        clearable
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.deposit_date"
                      locale="th-TH"
                      picker-date
                      @input="menuDateDeposit = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col class="pl-2">
                  <v-text-field
                    v-model="formData.appointment_location"
                    label="ฝากเซนต์ที่"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row no-gutters class="mt-3">
                <v-col md="3" lg="3" xl="3" cols="12">
                  <v-menu
                    v-model="menuDateAppointment_date"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formData.appointment_date"
                        label="วันที่นัดทำสัญญา"
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
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

                <v-col md="5" lg="5" xl="5" cols="12" class="px-2">
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

                <v-col xs="12" sm="12" md="4" lg="4" xl="4" cols="12">
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

              <v-row no-gutters class="mt-3">
                <v-col cols="8" class="pr-2">
                  <v-autocomplete
                    v-model="formData.bank_id"
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

                <v-col>
                  <v-autocomplete
                    v-model="formData.bank_branch_id"
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

              <v-file-input
                class="mt-5"
                label="รูปบัตรประจำตัวประชาชนลูกค้า*"
                v-model="id_card"
                prepend-icon=""
                append-icon="mdi-image"
                show-size
                outlined
                dense
                hide-details=""
                :rules="ruleMustImage"
              ></v-file-input>
            </div>

            <div v-if="status_bank == 6">
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    :readonly="user_group_permission == 2 || user_group_permission == 3 ? true : false"
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

            <v-card v-if="status_bank == 4" class="mt-5" outlined style="border-color: #aaa !important">
              <v-card-text>
                <h3 v-if="dataPreviewBanks.length > 0" class="text-center">ตารางเทียบไฟแนนซ์</h3>
                <h3 v-else class="text-center" style="color: red">ไม่มีพบราคากลาง</h3>
              </v-card-text>

              <v-divider v-if="dataPreviewBanks.length > 0"></v-divider>
              <v-simple-table v-if="dataPreviewBanks.length > 0" dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="">ธนาคาร</th>
                      <th class="text-right">ราคากลาง</th>
                      <th class="text-center" align="center">บวก (%)</th>
                      <th class="text-center" align="center">คูณ (%)</th>
                      <th class="text-right">รวมจัด</th>
                      <th class="text-right">95%</th>
                      <th class="text-right">90%</th>
                      <th class="text-right">85%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(dataPreviewBank, keys) in dataPreviewBanks"
                      :key="keys"
                      :style="dataPreviewBank.isSelected ? 'color:green; font-weight: bold' : ''"
                    >
                      <td>{{ dataPreviewBank.bank_name }}</td>
                      <td align="right">
                        {{
                          Number(dataPreviewBank.middle_price).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="center">
                        {{
                          Number(dataPreviewBank.middle_plus).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="center">
                        {{
                          Number(dataPreviewBank.middle_multiply).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="right">
                        {{
                          Number(dataPreviewBank.amount_price).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="right">
                        {{
                          Number(dataPreviewBank.middle_price) * 0.95 == "NaN"
                            ? 0
                            : Number(dataPreviewBank.middle_price * 0.95).toLocaleString("th-TH", {
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                              })
                        }}
                      </td>
                      <td align="right">
                        {{
                          Number(dataPreviewBank.middle_price * 0.9).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="right">
                        {{
                          Number(dataPreviewBank.middle_price * 0.85).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
            <!-- </v-container> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">ยกเลิก</v-btn>
            <v-btn type="submit" color="success darken-1" text :loading="btnloading">บันทึก </v-btn>
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
  props: ["dialogAppointment", "actionAppointment", "idWork", "formTitleAppointment", "status_bank"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      menuDateDeposit: false,
      menuDateAppointment_date: false,
      formData: {},
      dialogDeleteComponent: false,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dataBank: [],
      dataBank_branch: [],
      dataBank_branch_all: [],
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      dataPreviewBanks: [],
      id_card: null,
      ruleMustImage: [(value) => !!value, (value) => !value || value.size < 11000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
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
          let formData = new FormData();
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("id_card", this.id_card);
          const response = await apiAppointment.store(formData);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Appointment");
          } else {
            this.$emit("error", "Appointment");
          }
        } else if (this.formData.action == "edit") {
          let formData = new FormData();
          formData.append("_method", "PUT");
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("id_card", this.id_card);
          const response = await apiAppointment.update(this.formData.id, formData);
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
          console.log(response);
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
