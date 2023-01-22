<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" content-class="v-dialog--custom">
      <v-card>
        <v-form
          ref="form"
          autocomplete="true"
          @submit.prevent="onAction(formData.id)"
        >
          <v-toolbar color="primary" dark flat>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitle }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                type="submit"
                dark
                text
                :loading="btnloading"
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
            <v-fab-transition>
              <v-btn
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
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                  <v-autocomplete
                    v-model="formData.customer_id"
                    id="formData.customer_id"
                    name="formData.customer_id"
                    :items="customer"
                    no-data-text="ไม่มีข้อมูล"
                    :disabled="this.action == 'edit' ? true : false"
                    item-text="customer_name"
                    item-value="id"
                    label="ชื่อ-นามสกุล"
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
                      <selectAddCustomer
                        @success="addSuccess"
                        @error="addError"
                      />
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row
                v-for="(car_detail, keys) in formData.car_details"
                :key="keys"
              >
                <v-col cols="11">
                  <v-row>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="4" xl="4">
                      <v-autocomplete
                        v-model="car_detail.know_type"
                        id="car_detail.know_type"
                        name="car_detail.know_type"
                        :items="know_types"
                        item-text="know_type_name"
                        item-value="id"
                        no-data-text="ไม่มีข้อมูล"
                        label="ทราบข่าว"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-autocomplete>
                    </v-col>

                    <v-col cols="12" xs="12" sm="12" md="3" lg="4" xl="4">
                      <v-autocomplete
                        v-model="car_detail.car_types_id"
                        id="car_detail.car_types_id"
                        name="car_detail.car_types_id"
                        :items="carType"
                        @change="eventSelectType(keys)"
                        item-text="car_type_name"
                        item-value="id"
                        no-data-text="ไม่มีข้อมูล"
                        label="ประเภทรถ"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                        <template slot="selection" slot-scope="{ item }">
                          {{ item.car_type_name }} ({{ item.car_type_name_en }})
                        </template>

                        <template slot="item" slot-scope="{ item }">
                          {{ item.car_type_name }} ({{ item.car_type_name_en }})
                        </template>

                        <template v-slot:append-item>
                          <selectAddCarType
                            @success="addSuccess"
                            @error="addError"
                          />
                        </template>
                      </v-autocomplete>
                    </v-col>

                    <v-col cols="12" xs="12" sm="12" md="3" lg="4" xl="4">
                      <v-autocomplete
                        v-model="car_detail.car_models_id"
                        id="car_detail.car_models_id"
                        name="car_detail.car_models_id"
                        :items="carModel"
                        @change="eventSelectModel(keys)"
                        item-text="car_model_name"
                        no-data-text="ไม่มีข้อมูล"
                        item-value="id"
                        label="ยี่ห้อ"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                        <template v-slot:append-item>
                          <selectAddCarModel
                            @success="addSuccess"
                            @error="addError"
                          />
                        </template>
                      </v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="4" xl="4">
                      <v-autocomplete
                        v-model="car_detail.car_serie_id"
                        id="car_detail.car_serie_id"
                        name="car_detail.car_serie_id"
                        :items="carSerie[keys]"
                        @change="getCarSerieSub(keys)"
                        item-text="car_series_name"
                        no-data-text="ไม่มีข้อมูล"
                        item-value="id"
                        label="รุ่นรถ"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                        return-object
                      >
                        <template v-slot:append-item>
                          <selectAddCarSerie
                            @success="addSuccess"
                            @error="addError"
                          />
                        </template>
                      </v-autocomplete>
                    </v-col>

                    <v-col cols="12" xs="12" sm="12" md="3" lg="4" xl="4">
                      <v-autocomplete
                        v-model="car_detail.car_serie_sub_id"
                        id="car_detail.car_serie_sub_id"
                        name="car_detail.car_serie_sub_id"
                        :items="carSerieSub[keys]"
                        item-text="car_serie_sub_name"
                        item-value="id"
                        label="รุ่นย่อย"
                        no-data-text="ไม่มีข้อมูล"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                        <template v-slot:append-item>
                          <selectAddCarSerieSub
                            @success="addSuccess"
                            @error="addError"
                          />
                        </template>
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="4" xl="4">
                      <v-text-field
                        autocomplete="true"
                        label="ปีผลิต"
                        append-icon=""
                        v-model="car_detail.car_year"
                        id="car_detail.car_year"
                        name="car_detail.car_year"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
                      <v-autocomplete
                        v-model="car_detail.amount_down_id"
                        id="car_detail.amount_down_id"
                        name="car_detail.amount_down_id"
                        :items="dataAmountDown"
                        item-text="amount_down_name"
                        item-value="id"
                        label="งวดผ่อน"
                        no-data-text="ไม่มีข้อมูล"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
                      <v-autocomplete
                        v-model="car_detail.amount_slacken_id"
                        id="car_detail.amount_slacken_id"
                        name="car_detail.amount_slacken_id"
                        :items="dataSlacken"
                        item-text="amount_slacken_name"
                        item-value="id"
                        label="ราคาดาวน์"
                        no-data-text="ไม่มีข้อมูล"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
                      <v-text-field
                        autocomplete="true"
                        label="สนใจราคาเริ่มต้น (บ.)"
                        append-icon=""
                        v-model="car_detail.customer_bath_start"
                        id="car_detail.customer_bath_start"
                        name="car_detail.customer_bath_start"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
                      <v-text-field
                        autocomplete="true"
                        label="สนใจราคาสิ้นสุด (บ.)"
                        append-icon=""
                        v-model="car_detail.customer_bath_end"
                        id="car_detail.customer_bath_end"
                        name="car_detail.customer_bath_end"
                        outlined
                        dense
                        hide-details
                        :rules="rule"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="1" class="d-flex align-center">
                  <v-btn color="red" dark @click="rm_row(keys)">
                    <v-icon> mdi-delete </v-icon>
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
import * as apiCustomers from "@/Api/apiCustomers";
import * as apiCustomer_visit from "@/Api/apiCustomer_visit";
import * as apiCar_types from "@/Api/apiCar_types";
import * as apiCar_models from "@/Api/apiCar_models";
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";
import * as apiAmount_down from "@/Api/apiAmount_down";
import * as apiAmount_slacken from "@/Api/apiAmount_slacken";

import selectAddCarModel from "@/components/selectAdd/selectAddCarModel";
import selectAddCarType from "@/components/selectAdd/selectAddCarType";
import selectAddCustomer from "@/components/selectAdd/selectAddCustomer";
import selectAddCarSerie from "@/components/selectAdd/selectAddCarSerie";
import selectAddCarSerieSub from "@/components/selectAdd/selectAddCarSerieSub";

export default {
  components: {
    selectAddCarModel,
    selectAddCarType,
    selectAddCustomer,
    selectAddCarSerie,
    selectAddCarSerieSub,
  },
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formTitleModel: "เพิ่มข้อมูล",
      formData: {
        car_details: [{}],
      },
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      customer: [],
      carType: [],
      carModel: [],
      carSerie: [],
      dataCarSeries: [],
      carSerieSub: [],
      dataCarSerieSubs: [],
      dataAmountDown: [],
      dataSlacken: [],
      know_types: [
        { id: 1, know_type_name: "หน้าร้าน" },
        { id: 2, know_type_name: "เพจบริษัท" },
        { id: 3, know_type_name: "ลูกค้าเก่าแนะนำ" },
        { id: 4, know_type_name: "นายหน้า" },
        { id: 5, know_type_name: "ใบปลิว" },
        { id: 6, know_type_name: "Marketplace/ไลน์/เพจส่วนตัว" },
      ],

      dialogDeleteComponent: false,
    };
  },

  mounted() {},
  methods: {
    async getSlacken() {
      const response = await apiAmount_slacken.select();
      // console.log(response);
      this.dataSlacken = response.data;
    },
    async getAmountDown() {
      const response = await apiAmount_down.select();
      // console.log(response);
      this.dataAmountDown = response.data;
    },
    async getCustomer() {
      const response = await apiCustomers.index();
      this.customer = response.data;
    },
    async getCartypes() {
      const response = await apiCar_types.select();
      this.carType = response.data;
    },
    async getCarmodels() {
      const response = await apiCar_models.select();
      this.carModel = response.data;
    },
    async getCarSeries() {
      const response = await apiCar_series.select();
      this.dataCarSeries = response.data;
    },
    async getDataCarSerieSubs() {
      const response = await apiCar_serie_sub.selectAll();
      // console.log(response);
      this.dataCarSerieSubs = response.data;
    },
    async eventSelectType(keys) {
      await this.getCarseries(keys);
    },
    async eventSelectModel(keys) {
      await this.getCarseries(keys);
    },
    async getCarseries(keys) {
      this.carSerie[keys] = [];
      if (
        Number.isInteger(this.formData.car_details[keys].car_types_id) ==
          true &&
        Number.isInteger(this.formData.car_details[keys].car_models_id) == true
      ) {
        for (let index = 0; index < this.dataCarSeries.length; index++) {
          if (
            this.dataCarSeries[index].car_type_id ==
              this.formData.car_details[keys].car_types_id &&
            this.dataCarSeries[index].car_model_id ==
              this.formData.car_details[keys].car_models_id
          ) {
            await this.carSerie[keys].push(this.dataCarSeries[index]);
          }
        }
      }
      this.loading = false;
    },
    async getCarSerieSub(keys) {
      // console.log(this.formData.car_details[keys]);
      this.carSerieSub[keys] = [];
      for (let index = 0; index < this.dataCarSerieSubs.length; index++) {
        // console.log(this.dataCarSerieSubs[index]);
        if (
          this.dataCarSerieSubs[index].car_serie_id ==
          this.formData.car_details[keys].car_serie_id.id
        ) {
          // console.log(this.dataCarSerieSubs[index]);
          this.carSerieSub[keys].push(this.dataCarSerieSubs[index]);
        }
      }
    },
    async addSuccess(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      } else if (value == "AddCarType") {
        await this.getCartypes();
      } else if (value == "AddCarModel") {
        await this.getCarmodels();
      } else if (value == "AddCarSerie") {
        await this.getCarseries();
      } else if (value == "AddCarSerieSub") {
        await this.getDataCarSerieSubs();
      }
    },
    async addError(value) {
      if (value == "AddCustomer") {
        await this.getCustomer();
      } else if (value == "AddCarType") {
        await this.getCartypes();
      } else if (value == "AddCarModel") {
        await this.getCarmodels();
      } else if (value == "AddCarSerie") {
        await this.getCarseries();
      } else if (value == "AddCarSerieSub") {
        await this.getDataCarSerieSubs();
      }
    },

    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        if (this.action == "add") {
          const response = await apiCustomer_visit.store(this.formData);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          const response = await apiCustomer_visit.update(
            this.id,
            this.formData
          );
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
    async add_row() {
      let data = {
        know_type: "1",
        car_types_id: "",
        car_models_id: "",
        car_serie_id: "",
        car_serie_sub_id: "",
        car_year: "",
        amount_down_id: "",
        customer_bath_start: "",
        customer_bath_end: "",
      };
      this.formData.car_details.push(data);
    },
    async rm_row(row) {
      this.formData.car_details.splice(row, 1);
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialog) {
        this.getCustomer();
        this.getCartypes();
        this.getCarmodels();
        this.getCarSeries();
        this.getDataCarSerieSubs();
        this.getAmountDown();
        this.getSlacken();

        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                user_id: this.$auth.$storage.getLocalStorage("userData-id"),
                branch_id:
                  this.$auth.$storage.getLocalStorage("userData-branch_id"),
                car_details: [
                  {
                    car_types_id: "",
                    car_models_id: "",
                    car_serie_id: "",
                    car_serie_sub_id: "",
                    car_year: "",
                    amount_down_id: "",
                    customer_bath_start: "",
                    customer_bath_end: "",
                  },
                ],
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiCustomer_visit.show(this.id);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              this.getCarseries();
              this.getCarSerieSub();
            });
          });
          this.formDataLoading = false;
        }
      } else {
        this.$emit("cancleItem");
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
