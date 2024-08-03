<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      id="dialogDeleteComponent"
      name="dialogDeleteComponent"
      width="500px"
      :fullscreen="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' ? true : false"
    >
      <v-card>
        <v-form autocomplete="true" ref="form" @submit.prevent="onAction(formData.id)">
          <v-toolbar color="primary" dark flat>
            {{ formTitleWork }}
          </v-toolbar>

          <!-- {{ formData }} -->

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <div v-if="actionWork != 'cancel'">
              <v-row>
                <v-col cols="12">
                  <v-autocomplete
                    :filter="filterObject"
                    v-model="formData.car_id"
                    id="formData.car_id"
                    name="formData.car_id"
                    :items="dataCar"
                    item-text="car_no"
                    item-value="id"
                    label="ลำดับรถ"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template slot="selection" slot-scope="{ item }">
                      {{ item.car_no }} ({{ item.car_regis }})
                    </template>

                    <template slot="item" slot-scope="{ item }"> {{ item.car_no }} ({{ item.car_regis }}) </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row
                v-if="actionWork == 'edit' && car_id_master != formData.car_id"
                class="rounded ma-auto mt-3"
                style="border-style: solid; border-width: 1px; border-color: gray"
              >
                <v-col>
                  <v-radio-group v-model="formDataChangCar.sign_type" :rules="rule" hide-details>
                    <template>
                      <div class="mr-1">การทำสัญญา (กรณีเปลี่ยนคัน):</div>
                    </template>

                    <v-radio label="เซนต์เดิม" value="เซนต์เดิม"></v-radio>
                    <v-radio label="เซนต์ใหม่" color="green" value="เซนต์ใหม่"></v-radio>
                    <v-radio label="ยังไม่เซนต์" color="red" value="ยังไม่เซนต์"></v-radio>
                  </v-radio-group>

                  <v-card class="mt-3" v-if="formDataChangCar.sign_type == 'เซนต์ใหม่'" outlined>
                    <v-card-text>
                      <v-menu
                        ref="menuSignDate"
                        v-model="menuSignDate"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            class="mt-3"
                            autocomplete="true"
                            v-model="formDataChangCar.sign_date"
                            label="วันที่เซนต์สัญญา*"
                            v-bind="attrs"
                            v-on="on"
                            persistent-hint
                            outlined
                            dense
                            hide-details
                            :rules="rule"
                            readonly
                            clearable
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="formDataChangCar.sign_date"
                          locale="th-TH"
                          picker-date
                          @input="menuSignDate = false"
                        ></v-date-picker>
                      </v-menu>

                      <v-select
                        class="mt-3"
                        v-model="formDataChangCar.bank_name"
                        @change="change_branch(formDataChangCar.bank_name)"
                        :items="dataBank"
                        item-text="bank_name"
                        no-data-text="ไม่มีข้อมูล"
                        item-value="bank_name"
                        label="ธนาคาร*"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      ></v-select>

                      <v-select
                        class="mt-3"
                        v-model="formDataChangCar.bank_branch_name"
                        :items="dataBank_branch"
                        item-text="bank_branch_name"
                        no-data-text="ไม่มีข้อมูล"
                        item-value="bank_branch_name"
                        label="สาขาธนาคาร*"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      ></v-select>

                      <v-text-field
                        class="mt-3"
                        label="ชื่อ MKT*"
                        v-model="formDataChangCar.mtk_name"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>

                      <v-text-field
                        class="mt-3"
                        label="เบอร์โทร MTK*"
                        v-model="formDataChangCar.mtk_tel"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>

                      <v-text-field
                        class="mt-3"
                        label="ผลเครดิต*"
                        v-model="formDataChangCar.credit"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>

                      <v-radio-group class="mt-3" v-model="formDataChangCar.document" :rules="rule" hide-details row>
                        <template>
                          <div class="mr-1">เอกสาร:</div>
                        </template>

                        <v-radio label="ครบ" value="ครบ"></v-radio>
                        <v-radio label="ไม่ครบ" color="red" value="ไม่ครบ"></v-radio>
                      </v-radio-group>

                      <v-textarea
                        v-if="formDataChangCar.document == 'ไม่ครบ'"
                        class="mt-3"
                        rows="2"
                        label="รายการเอกสารที่ไม่ครบ"
                        v-model="formDataChangCar.document_list"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-textarea>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="pt-0">
                  <v-autocomplete
                    v-model="formData.customer_id"
                    id="formData.customer_id"
                    name="formData.customer_id"
                    :items="customer"
                    item-text="customer_name"
                    item-value="id"
                    label="ผู้ซื้อ"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template slot="selection" slot-scope="{ item }">
                      {{ item.customer_name }} ({{ item.customer_nickname }})
                    </template>

                    <template slot="item" slot-scope="{ item }">
                      {{ item.customer_name }} ({{ item.customer_nickname }})
                    </template>

                    <template v-slot:append-item>
                      <selectAddCustomer @success="addSuccess" @error="addError" />
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="pt-0">
                  <v-autocomplete
                    :readonly="
                      user_group_permission == -1 || user_group_permission == 2 || formData.sale_id == null
                        ? false
                        : true
                    "
                    v-model="formData.sale_id"
                    :items="datauserSale"
                    item-text="name"
                    item-value="id"
                    label="เซล"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row class="rounded ma-auto mt-3" style="border-style: solid; border-width: 1px; border-color: gray">
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                  <v-radio-group
                    v-model="formData.hear_from_type"
                    id="formData.hear_from_type"
                    name="formData.hear_from_type"
                    :rules="rule"
                    hide-details=""
                  >
                    <template>
                      <div>ทราบข่าวมาจาก:</div>
                    </template>
                    <v-radio value="1" label="หน้าร้าน"></v-radio>
                    <v-radio value="2" label="เพจบริษัท"></v-radio>
                    <v-radio value="3" label="ลูกค้าเก่าแนะนำ"></v-radio>
                    <v-radio value="4" label="นายหน้า"></v-radio>
                    <v-radio value="5" label="ใบปลิว"></v-radio>
                    <v-radio value="6" label="Marketplace/ไลน์/เพจส่วนตัว"></v-radio>
                    <v-radio value="7" label="เว็บไซต์"></v-radio>
                    <v-radio value="8" label="tiktok"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="pt-0">
                  <v-textarea
                    rows="2"
                    label="สิ่งที่ลูกค้าต้องการ"
                    append-icon=""
                    v-model="formData.todo_list"
                    id="formData.todo_list"
                    name="formData.todo_list"
                    outlined
                    dense
                    hide-details
                  >
                  </v-textarea>
                </v-col>
              </v-row>

              <v-file-input
                v-if="
                  actionWork == 'edit' &&
                  (car_id_master != formData.car_id || customer_id_master != formData.customer_id)
                "
                class="mt-3"
                label="รูปบัตรประจำตัวประชาชนลูกค้าปัจจุบัน*"
                v-model="id_card"
                prepend-icon=""
                append-icon="mdi-image"
                show-size
                outlined
                dense
                hide-details=""
                :rules="ruleMustImage"
              ></v-file-input>

              <v-file-input
                v-if="
                  actionWork == 'edit' &&
                  (car_id_master != formData.car_id || customer_id_master != formData.customer_id)
                "
                class="mt-3"
                v-model="sale_sheet"
                label="เอกสารสรุปการขาย*"
                prepend-icon=""
                append-icon="mdi-image"
                show-size
                outlined
                dense
                hide-details=""
                :rules="ruleMustImage"
              ></v-file-input>
            </div>

            <v-row v-if="actionWork == 'cancel'">
              <v-col cols="12">
                <v-textarea
                  rows="3"
                  label="เหตุผลที่ยกเลิก"
                  append-icon=""
                  v-model="formData.cancel_list"
                  id="formData.cancel_list"
                  name="formData.cancel_list"
                  outlined
                  dense
                  hide-details
                  :rules="cancel_rule"
                >
                </v-textarea>
              </v-col>
              <v-col class="pt-0">
                <v-file-input
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
              </v-col>
            </v-row>

            <!-- {{formData}} -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">ยกเลิก</v-btn>
            <v-btn type="submit" color="success darken-1" text :loading="btnloading">บันทึก</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiWorks from "@/Api/apiWorks";
import * as apiCustomers from "@/Api/apiCustomers";
import * as apiUsers from "@/Api/apiUsers";
import * as apiCars from "@/Api/apiCars";
import * as apiBank from "@/Api/apiBank";
import * as apiBank_branch from "@/Api/apiBank_branch";
import selectAddCustomer from "@/components/selectAdd/selectAddCustomer";

export default {
  components: {
    selectAddCustomer,
  },
  props: ["dialogWork", "actionWork", "idWork", "formTitleWork"],
  data() {
    return {
      menuSignDate: false,
      btnloading: true,
      formDataLoading: false,
      customer_id_master: 0,
      car_id_master: 0,
      dataBank: [],
      dataBank_branch: [],
      dataBank_branch_all: [],
      formData: {},
      formDataChangCar: {
        sign_type: null,
      },
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dataCar: [],
      datauserSale: [],
      customer: [],
      cancel_rule: [],
      dialogDeleteComponent: false,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      id_card: null,
      sale_sheet: null,
      ruleMustImage: [(value) => !!value, (value) => !value || value.size < 11000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
    };
  },
  mounted() {
    this.getCars();
    this.getSale();
    this.getCustomer();
    this.getBank();
    this.getBank_branch();
  },
  methods: {
    filterObject(item, queryText, itemText) {
      return (
        item.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1 ||
        item.car_regis.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    async getCustomer() {
      const response = await apiCustomers.index();
      this.customer = response.data;
    },
    async selectCustomer(value) {
      const response = await apiCustomers.SelectCustomer(value);
      this.formData.customer_name = await response.data.customer_name;
      this.formData.customer_tel = await response.data.customer_tel;
    },
    async getCars() {
      const response = await apiCars.selectAll();
      this.dataCar = response.data;
    },
    async getSale() {
      const response = await apiUsers.selectSale();
      this.datauserSale = response.data.map(function (item) {
        var newItem = {};
        newItem.id = item.id;
        newItem.name = item.first_name + " " + item.last_name + " (" + item.user_code + ")";
        return newItem;
      });

      // console.log(this.datauserSale);
    },
    async getBank() {
      const response = await apiBank.select();
      this.dataBank = await response.data;
    },
    async getBank_branch() {
      const response = await apiBank_branch.select();
      this.dataBank_branch_all = await response.data;
      // this.dataPreviewBanks = await response.data;
    },
    async change_branch(bank_name) {
      const bank = this.dataBank.filter((item) => {
        return item.bank_name == bank_name;
      });

      let newArray = [];
      for (let index = 0; index < this.dataBank_branch_all.length; index++) {
        if (this.dataBank_branch_all[index].bank_id == bank[0].id) {
          newArray.push(this.dataBank_branch_all[index]);
        }
      }
      this.dataBank_branch = newArray;
    },
    async addSuccess(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      }
    },
    async addError(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      }
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.actionWork == "add") {
          const response = await apiWorks.store(this.formData);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "work");
          } else {
            this.$emit("error", "work");
          }
        } else if (this.actionWork == "edit") {
          let formData = new FormData();
          formData.append("_method", "PUT");
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("formDataChangCar", JSON.stringify(this.formDataChangCar));
          formData.append("id_card", this.id_card);
          formData.append("sale_sheet", this.sale_sheet);
          const response = await apiWorks.update(this.idWork, formData);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "work");
          } else {
            this.$emit("error", "work");
          }
        } else if (this.actionWork == "cancel") {
          let formData = new FormData();
          formData.append("formData", JSON.stringify(this.formData));
          formData.append("id_card", this.id_card);
          const response = await apiWorks.cancel(formData);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success", "work");
          } else {
            this.$emit("error", "work");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    async dialogWork() {
      this.dialogDeleteComponent = this.dialogWork;

      if (this.dialogWork) {
        if (this.actionWork == "add") {
          this.formDataLoading = true;
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                work_status: 1,
                hear_from_type: "1",
                sale_id: self.$auth.$storage.getLocalStorage("userData-id"),
                sale_code: self.$auth.$storage.getLocalStorage("userData-user_code"),
              };
            });
          });
          this.formDataLoading = false;
        } else if (this.actionWork == "edit") {
          this.formDataLoading = true;
          const response = await apiWorks.show(this.idWork);

          this.customer_id_master = response.data.customer_id;
          this.car_id_master = response.data.car_id;
          this.formData = response.data;
          this.formDataLoading = false;
        } else if (this.actionWork == "cancel") {
          this.formDataLoading = true;
          const response = await apiWorks.show(this.idWork);

          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              self.formData.status_del = 0;
              self.cancel_rule = [(value) => !!value || "กรุณาใส่ข้อมูล"];
            });
          });
          // console.log(this.formData);

          this.formDataLoading = false;
        }
        this.loading = false;
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
