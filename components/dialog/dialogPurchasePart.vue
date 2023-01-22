<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" content-class="v-dialog--custom">
      <v-card>
        <v-form
          autocomplete="true"
          :readonly="isReadonly"
          ref="form"
          @submit.prevent="onAction(formData.id)"
        >
          <v-toolbar color="primary" dark flat>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitle }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items v-if="this.action != 'history'">
              <v-btn
                type="submit"
                :loading="btnloading"
                dark
                text
                style="font-size: 18px"
              >
                {{ this.action == "add" ? "บันทึก" : "รับเข้าคลัง" }}
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
            <v-fab-transition>
              <v-btn
                v-show="ShowBotton"
                color="green"
                fab
                dark
                absolute
                right
                style="bottom: 20px"
                @click="add_row()"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>

            <v-container>
              <v-row class="d-flex justify-center">
                <h2>ใบสั่งซื้ออะไหล่</h2>
              </v-row>
              <br />
              <v-row>
                <v-col cols="8"> </v-col>

                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="เลขใบเสร็จ"
                    append-icon=""
                    v-model="formData.po_number"
                    id="formData.po_number"
                    name="formData.po_number"
                    outlined
                    readonly
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                  <v-spacer class="ma-3"></v-spacer>
                  <v-menu
                    ref="menuDateBuy"
                    v-model="menuDateBuy"
                    id="menuDateBuy"
                    name="menuDateBuy"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.po_date"
                        id="formData.po_date"
                        name="formData.po_date"
                        label="วันที่สั่งซื้อ"
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flat
                        :rules="rule"
                        clearable
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.po_date"
                      id="formData.po_date"
                      name="formData.po_date"
                      locale="th-TH"
                      picker-date
                      @input="menuDateBuy = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row class="d-flex">
                <v-col>
                  <v-autocomplete
                    readonly
                    v-show="ShowBotton"
                    v-model="selectBranch"
                    id="selectBranch"
                    name="selectBranch"
                    :items="branch"
                    @change="SelectBranchs"
                    item-text="branch_name"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    label="ซื้อในนามสาขา"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>

                <v-col>
                  <v-autocomplete
                    v-show="ShowBotton"
                    v-model="selectPartner"
                    id="selectPartner"
                    name="selectPartner"
                    :items="partner"
                    @change="SelectPartners"
                    item-text="partner_companie_name"
                    item-value="id"
                    label="บริษัทคู่ค้า"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row class="d-flex">
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ซื้อในนาม"
                    v-model="formData.company_name"
                    id="formData.company_name"
                    name="formData.company_name"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ซื้อสินค้าจากบริษัท"
                    v-model="formData.partner_companie_name"
                    id="formData.partner_companie_name"
                    name="formData.partner_companie_name"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row class="d-flex">
                <v-col>
                  <v-row class="d-flex">
                    <v-col>
                      <v-text-field
                        autocomplete="true"
                        label="เบอร์ติดต่อ"
                        v-model="formData.branch_tel"
                        id="formData.branch_tel"
                        name="formData.branch_tel"
                        append-icon=""
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        autocomplete="true"
                        label="เลขผู้เสียภาษี"
                        v-model="formData.company_idvat"
                        id="formData.company_idvat"
                        name="formData.company_idvat"
                        append-icon=""
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col>
                  <v-row class="d-flex">
                    <v-col>
                      <v-text-field
                        autocomplete="true"
                        label="เบอร์ติดต่อ"
                        v-model="formData.partner_companie_tel"
                        id="formData.partner_companie_tel"
                        name="formData.partner_companie_tel"
                        append-icon=""
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        autocomplete="true"
                        label="เลขผู้เสียภาษี"
                        v-model="formData.partner_companie_idvat"
                        id="formData.partner_companie_idvat"
                        name="formData.partner_companie_idvat"
                        append-icon=""
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-row class="d-flex">
                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ที่อยู่"
                    v-model="formData.company_address"
                    id="formData.company_address"
                    name="formData.company_address"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    autocomplete="true"
                    label="ที่อยู่"
                    v-model="formData.partner_companie_address"
                    id="formData.partner_companie_address"
                    name="formData.partner_companie_address"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <br />
              <br />

              <v-row class="d-flex justify-center">
                <h2>รายการสั่งซื้อ</h2>
              </v-row>
              <br />

              <v-row
                class="mt-2"
                v-for="(purchase_detail, keys) in formData.purchase_details"
                :key="keys"
              >
                <v-col cols="2">
                  <v-autocomplete
                    v-model="purchase_detail.type"
                    id="purchase_detail.type"
                    name="purchase_detail.type"
                    :items="type"
                    item-text="name"
                    item-value="id"
                    label="ประเภท"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    v-if="formData.purchase_details[keys].type == 1"
                    label="ไม่ต้องเลือก"
                    disabled
                    append-icon=""
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                  <v-autocomplete
                    v-if="formData.purchase_details[keys].type == 2"
                    v-model="purchase_detail.car_id"
                    id="purchase_detail.car_id"
                    name="purchase_detail.car_id"
                    :items="dataCar"
                    item-text="car_no"
                    item-value="id"
                    label="ลำดับรถ"
                    no-data-text="ไม่มีข้อมูล"
                    :filter="filterObject"
                    outlined
                    dense
                    hide-details
                  >
                    <template slot="selection" slot-scope="{ item }">
                      {{ item.car_no }} ({{ item.car_regis }})
                    </template>

                    <template slot="item" slot-scope="{ item }">
                      {{ item.car_no }} ({{ item.car_regis }})
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="2">
                  <v-autocomplete
                    v-model="purchase_detail.car_part_id"
                    id="purchase_detail.car_part_id"
                    name="purchase_detail.car_part_id"
                    :items="carParts"
                    item-text="car_part_name"
                    item-value="id"
                    label="อะไหล่"
                    @change="selectCarPart(purchase_detail.car_part_id, keys)"
                    outlined
                    no-data-text="ไม่มีข้อมูล"
                    dense
                    hide-details
                    :rules="rule"
                  >
                    <template v-slot:append-item>
                      <selectAddCarPart
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="1">
                  <v-text-field
                    autocomplete="true"
                    v-model="purchase_detail.car_part_amount"
                    id="purchase_detail.car_part_amount"
                    name="purchase_detail.car_part_amount"
                    :readonly="
                      purchase_detail.car_part_id == null ? true : false
                    "
                    type="number"
                    label="จำนวน"
                    @change="fuctionSumValue(keys)"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-text-field
                    autocomplete="true"
                    v-model="purchase_detail.unit_name"
                    id="purchase_detail.unit_name"
                    name="purchase_detail.unit_name"
                    label="หน่วย"
                    readonly
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-text-field
                    autocomplete="true"
                    label="ราคาต่อหน่วย"
                    :readonly="
                      purchase_detail.car_part_id == null ? true : false
                    "
                    @change="fuctionSumValue(keys)"
                    v-model="purchase_detail.car_part_price"
                    id="purchase_detail.car_part_price"
                    name="purchase_detail.car_part_price"
                    type="number"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    v-model="purchase_detail.sumValue"
                    id="purchase_detail.sumValue"
                    name="purchase_detail.sumValue"
                    label="รวม"
                    readonly
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col v-show="ShowBotton" cols="1">
                  <v-btn
                    color="red"
                    class="mt-1"
                    fab
                    x-small
                    dark
                    @click="rm_row(keys)"
                  >
                    <v-icon> mdi-delete </v-icon>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="d-flex">
                <v-col cols="9"> </v-col>
                <v-col cols="2">
                  <v-text-field
                    autocomplete="true"
                    v-model="formData.sumValueAll"
                    id="formData.sumValueAll"
                    name="formData.sumValueAll"
                    readonly
                    type="number"
                    label="รวมราคาทั้งหมด"
                    append-icon=""
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="1"> </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiPurchases from "@/Api/apiPurchases";
import * as apiCar_parts from "@/Api/apiCar_parts";
import * as apiBranches from "@/Api/apiBranches";
import * as apiPartner_company from "@/Api/apiPartner_company";
import * as customAlart from "@/customJS/customAlart";
import * as apiUnit from "@/Api/apiUnit";
import * as apiCars from "@/Api/apiCars";

import selectAddCarPart from "@/components/selectAdd/selectAddCarPart";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  components: {
    selectAddCarPart,
  },

  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      menuDateBuy: false,

      formData: {
        purchase_details: [{}],
      },
      ShowBotton: true,
      carParts: [],
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      dataCar: [],
      getDataCar: [],
      type: [
        { id: 1, name: "คลัง" },
        { id: 2, name: "รถ" },
      ],
      partner: [],
      branch: [],
      dataUnit: [],
      selectPartner: "",
      selectBranch: "",
      isReadonly: false,
      disabledInputCar: false,
    };
  },
  mounted() {},
  methods: {
    filterObject(item, queryText, itemText) {
      return (
        item.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) >
          -1 ||
        item.car_regis
          .toLocaleLowerCase()
          .indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    async getCars() {
      const response = await apiCars.selectall();
      this.dataCar = response.data;
    },

    async getUnit() {
      const response = await apiUnit.index();
      this.dataUnit = response.data;
    },
    async getCarParts() {
      const response = await apiCar_parts.select();
      this.carParts = response.data;
    },
    async getBranch() {
      const response = await apiBranches.select();
      this.branch = response.data;
    },
    async getPartner() {
      const response = await apiPartner_company.select();
      this.partner = response.data;
    },
    async SelectBranchs(idBranch) {
      // console.log(idBranch);

      this.formData.company_name = "";
      this.formData.branch_tel = "";
      this.formData.company_idvat = "";
      this.formData.company_address = "";
      this.$nextTick(() => {
        for (let index = 0; index < this.branch.length; index++) {
          if (this.branch[index].id == idBranch) {
            // console.log(this.branch[index]);
            if (this.branch[index].id == idBranch) {
              this.formData.company_name = this.branch[index].company_name;
              this.formData.branch_tel = this.branch[index].branch_tel;
              this.formData.company_idvat = this.branch[index].company_idvat;
              this.formData.company_address =
                this.branch[index].company_address;
            }
            break;
          }
        }
      });
    },
    async SelectPartners(idPartner) {
      // console.log(idPartner);

      this.formData.partner_companie_name = "";
      this.formData.partner_companie_tel = "";
      this.formData.partner_companie_idvat = "";
      this.formData.partner_companie_address = "";

      for (let index = 0; index < this.partner.length; index++) {
        if (this.partner[index].id == idPartner) {
          // console.log(this.partner[index]);
          this.formData.partner_companie_name =
            this.partner[index].partner_companie_name;
          this.formData.partner_companie_tel =
            this.partner[index].partner_companie_tel;
          this.formData.partner_companie_idvat =
            this.partner[index].partner_companie_idvat;
          this.formData.partner_companie_address =
            this.partner[index].partner_companie_address;
          break;
        }
      }
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        // console.log(this.action);

        if (this.action == "add") {
          const response = await apiPurchases.store(this.formData);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          var isConfirmed = customAlart.ConfirmedStock();
          await isConfirmed.then(async (result) => {
            if (result == true) {
              const response = await apiPurchases.update(id, this.formData);
              // console.log(response);
              this.$refs.form.reset();
              if (response.status == 200) {
                this.$emit("success");
              } else {
                this.$emit("error");
              }
            }
          });
        }
        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
    async fuctionSumValue(keys) {
      let rowSumValue = [];

      this.formData.purchase_details[keys].sumValue =
        Number(this.formData.purchase_details[keys].car_part_price) *
        Number(this.formData.purchase_details[keys].car_part_amount);

      for (
        let index = 0;
        index < this.formData.purchase_details.length;
        index++
      ) {
        rowSumValue.push(this.formData.purchase_details[index].sumValue);
      }

      this.formData.sumValueAll = rowSumValue.reduce(function (
        previous,
        current
      ) {
        return previous + current;
      },
      0);
    },
    async addSuccess(value) {
      if (value == "AddCarPart") {
        await this.getCarParts();
        await this.getUnit();
      }
    },
    async addError(value) {
      if (value == "AddCarPart") {
        await this.getCarParts();
        await this.getUnit();
      }
    },
    async selectCarPart(idPart, keys) {
      this.formData.purchase_details[keys].car_part_price = "";
      this.formData.purchase_details[keys].unit_name = "";
      this.formData.purchase_details[keys].car_part_amount = "";
      this.formData.purchase_details[keys].sumValue = "";

      // // console.log(keys);
      for (let index = 0; index < this.carParts.length; index++) {
        if (this.carParts[index].id == idPart) {
          // console.log(this.carParts[index].unit_id);
          for (let index2 = 0; index2 < this.dataUnit.length; index2++) {
            if (this.dataUnit[index2].id == this.carParts[index].unit_id) {
              // console.log(this.dataUnit[index2]);
              this.formData.purchase_details[keys].unit_name =
                this.dataUnit[index2].unit_name;
              this.formData.purchase_details[keys].car_part_price =
                this.carParts[index].car_part_price;
              break;
            }
          }
        }
      }
    },
    async add_row() {
      let data = {
        type: 1,
        car_id: "",
        unit_name: "",
        car_part_id: "",
        car_part_price: "",
        car_part_amount: "",
        sumValue: "",
      };
      this.formData.purchase_details.push(data);
    },
    // ฟังชั่นลบแถว
    async rm_row(row) {
      this.formData.purchase_details.splice(row, 1);
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialogDeleteComponent) {
        this.formDataLoading = true;
        this.getCarParts();
        await this.getBranch();
        this.getPartner();
        this.getUnit();
        this.getCars();
        this.loading = false;

        if (this.action == "add") {
          this.ShowBotton = true;
          this.isReadonly = false;
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                po_number: "PO-" + new Date().getTime(),
                branch_id:
                  this.$auth.$storage.getLocalStorage("userData-branch_id"),
                user_id: this.$auth.$storage.getLocalStorage("userData-id"),
                po_active: 1,
                purchase_details: [
                  {
                    type: 1,
                    car_id: "",
                    unit_name: "",
                    car_part_id: "",
                    car_part_price: "",
                    car_part_amount: "",
                    sumValue: "",
                  },
                ],
              };
            });
          });
        } else if (this.action == "edit" || this.action == "history") {
          this.ShowBotton = false;
          this.isReadonly = true;
          const response = await apiPurchases.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              self.formData.po_active = 2;
              self.formData.user_id =
                this.$auth.$storage.getLocalStorage("userData-id");
              self.selectPartner = 1;
            });
          });
        }
        this.$nextTick(() => {
          this.selectBranch = 1;
          this.SelectBranchs(1);
        });
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

<style>
.v-input--selection-controls {
  margin-top: 0px !important;
  padding-top: 0px !important;
}
</style>
