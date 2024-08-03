<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="70%">
      <v-card>
        <v-form autocomplete="true" ref="form" @submit.prevent="onAction(formData.id)">
          <v-toolbar color="primary" dark flat>
            {{ formTitle }}
          </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <v-row v-if="action == 'add'">
              <v-col cols="12">
                <h2 class="text-center red--text">กรุณาเช็คข้อมูลก่อนเพิ่มทุกครั้งว่ามีซ้ำกันหรือไม่</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col :cols="action == 'add' ? 3 : 4">
                <v-autocomplete
                  v-model="formData.car_serie_id"
                  id="formData.car_serie_id"
                  name="formData.car_serie_id"
                  :items="carSerie"
                  no-data-text="ไม่มีข้อมูล"
                  @change="getCarSerieSub"
                  item-text="car_series_name"
                  item-value="id"
                  label="รุ่นรถ"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-autocomplete>
              </v-col>
              <v-col :cols="action == 'add' ? 3 : 4">
                <v-autocomplete
                  v-model="formData.car_serie_sub_id"
                  id="formData.car_serie_sub_id"
                  name="formData.car_serie_sub_id"
                  :items="carSerieSub"
                  item-text="car_serie_sub_name"
                  item-value="id"
                  label="รุ่นย่อย"
                  no-data-text="ไม่มีข้อมูล"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                >
                </v-autocomplete>
              </v-col>
              <v-col v-if="action == 'edit'">
                <v-autocomplete
                  v-model="formData.year"
                  id="formData.year"
                  name="formData.year"
                  :items="years_start"
                  item-text="value"
                  no-data-text="ไม่มีข้อมูล"
                  item-value="value"
                  label="ปีผลิต (ค.ศ)"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                ></v-autocomplete>
              </v-col>

              <v-col cols="3" v-if="action == 'add'">
                <v-autocomplete
                  v-model="formData.years_start"
                  id="formData.years_start"
                  name="formData.years_start"
                  :items="years_start"
                  item-text="value"
                  no-data-text="ไม่มีข้อมูล"
                  item-value="value"
                  label="ตั้งค่าปีผลิตเริ่มต้น (ค.ศ)"
                  @change="selectYears_start(formData.years_start)"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                ></v-autocomplete>
              </v-col>

              <v-col cols="3" v-if="action == 'add' && formData.years_start != null">
                <v-autocomplete
                  v-model="formData.years_end"
                  id="formData.years_end"
                  name="formData.years_end"
                  :items="years_end"
                  item-text="value"
                  no-data-text="ไม่มีข้อมูล"
                  item-value="value"
                  label="ตั้งค่าปีผลิตสิ้นสุด (ค.ศ)"
                  outlined
                  dense
                  hide-details
                  :rules="rule"
                ></v-autocomplete>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-radio-group v-model="formData.car_gear" :rules="[(value) => !!value]" row>
                  <template>
                    <div class="mr-1">เกียร์รถ:</div>
                  </template>
                  <v-radio label="อัตโนมัติ (AT)" value="1"></v-radio>
                  <v-radio label="ธรรมดา (MT)" value="2"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="6">
                <v-radio-group v-model="formData.middle_price_active" :rules="[(value) => !!value]" row>
                  <template>
                    <div class="mr-1">แสดงตอนเลือก:</div>
                  </template>
                  <v-radio label="เปิดใช้งาน" value="1"></v-radio>
                  <v-radio label="ปิดการใช้งาน" color="red" value="2"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <v-card :loading="formDataLoading" outlined>
              <v-card-text>
                <h2 class="text-center">ราคากลาง</h2>
                <h2 v-show="false" class="text-center"> {{ fix_amount_price }}</h2>
              </v-card-text>
              <v-divider></v-divider>
              <v-radio-group v-model="formData.selected">
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>ธนาคาร</th>
                        <th>ธนาคารให้ (บ.)</th>
                        <th>บวก (%)</th>
                        <th>คูณ (%)</th>
                        <th>รวมจัด (บ.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(middle_price_detail, keys) in formData.middle_price_details" :key="keys">
                        <td>
                          <!-- <v-radio :key="keys" :value="middle_price_detail.id" :label="middle_price_detail.bank_name">
                          </v-radio> -->
                          <v-radio :value="middle_price_detail.id" :label="middle_price_detail.bank_nick_name">
                          </v-radio>
                        </td>
                        <td>
                          <v-text-field
                            dense
                            min="0"
                            type="number"
                            v-model="middle_price_detail.middle_price"
                            @keyup="cal_car(keys)"
                            outlined
                            hide-details
                          ></v-text-field>
                        </td>
                        <td>
                          <v-text-field
                            dense
                            min="0"
                            type="number"
                            v-model="middle_price_detail.middle_plus"
                            @keyup="cal_car(keys)"
                            outlined
                            hide-details
                          ></v-text-field>
                        </td>
                        <td>
                          <v-text-field
                            dense
                            min="0"
                            type="number"
                            v-model="middle_price_detail.middle_multiply"
                            @keyup="cal_car(keys)"
                            outlined
                            hide-details
                          ></v-text-field>
                        </td>
                        <td>
                          <v-text-field
                            dense
                            min="0"
                            type="number"
                            v-model="middle_price_detail.amount_price"
                            outlined
                            hide-details
                          ></v-text-field>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>

                <!-- <v-row v-for="(middle_price_detail, keys) in formData.middle_price_details" :key="keys">
                  <v-col col="5">
                    <v-row>
                      <v-col>
                        <v-text-field v-show="false">{{ middle_price_detail.id }}</v-text-field>
                        <v-radio :key="keys" :value="middle_price_detail.id" :label="middle_price_detail.bank_name">
                        </v-radio>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col col="2">
                    <v-text-field
                      autocomplete="true"
                      label="ธนาคารให้ (บ.)"
                      dense
                      min="0"
                      type="number"
                      v-model="middle_price_detail.middle_price"
                      id="middle_price_detail.middle_price"
                      name="middle_price_detail.middle_price"
                      @keyup="cal_car(keys)"
                      outlined
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col col="1">
                    <v-text-field
                      autocomplete="true"
                      label="บวก (%)"
                      dense
                      min="0"
                      type="number"
                      v-model="middle_price_detail.middle_plus"
                      id="middle_price_detail.middle_plus"
                      name="middle_price_detail.middle_plus"
                      @keyup="cal_car(keys)"
                      outlined
                      hide-details
                    ></v-text-field>
                  </v-col>

                  <v-col col="1">
                    <v-text-field
                      autocomplete="true"
                      label="คูณ (%)"
                      dense
                      min="0"
                      type="number"
                      v-model="middle_price_detail.middle_multiply"
                      id="middle_price_detail.middle_multiply"
                      name="middle_price_detail.middle_multiply"
                      @keyup="cal_car(keys)"
                      outlined
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col col="3">
                    <v-text-field
                      autocomplete="true"
                      label="รวมจัด (บ.)"
                      dense
                      min="0"
                      type="number"
                      v-model="middle_price_detail.amount_price"
                      id="middle_price_detail.amount_price"
                      name="middle_price_detail.amount_price"
                      outlined
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row> -->
              </v-radio-group>
            </v-card>
          </v-card-text>

          <v-divider></v-divider>
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
import * as apiMiddle_price from "@/Api/apiMiddle_price";
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";
import * as apiBank from "@/Api/apiBank";
import * as customAlart from "@/customJS/customAlart";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      carSerie: [],
      carSerieSub: [],
      years_start: [],
      years_end: [],
      fix_amount_price: 0,
    };
  },
  async mounted() {},
  methods: {
    async getBank() {
      const response = await apiBank.select();
      if (response.data.length > 0) {
        this.formData.selected = response.data[0].id;
      }
      for (let index = 0; index < response.data.length; index++) {
        response.data[index].middle_plus = 0;
        response.data[index].middle_multiply = 0;
        response.data[index].middle_price = 0;
        response.data[index].amount_price = 0;
      }
      this.formData.middle_price_details = response.data;
      this.$forceUpdate();
    },
    async getCarseries() {
      this.carSerie = [];
      const response = await apiCar_series.select();
      this.carSerie = response.data;
      // this.loading = false;
      await this.getCarSerieSub();
    },
    async getYearCurrent() {
      var max = new Date().getFullYear();
      var min = max - 50;

      for (var i = max; i >= min; i--) {
        this.years_start.push({ value: i });
      }
    },
    async getCarSerieSub() {
      this.carSerieSub = [];
      if (Number.isInteger(this.formData.car_serie_id) == true) {
        const response = await apiCar_serie_sub.select(this.formData.car_serie_id);
        this.carSerieSub = response.data;
      }
    },
    async selectYears_start(value) {
      this.years_end = [];
      var max = new Date().getFullYear();
      for (let index = 0; index <= max - value; index++) {
        this.years_end.push({ value: Number(value) + index });
      }
    },
    async cal_car(keys) {
      let plus =
        (parseFloat(this.formData.middle_price_details[keys].middle_plus) / 100) *
        parseFloat(this.formData.middle_price_details[keys].middle_price);
      let new_middle = parseFloat(plus) + parseFloat(this.formData.middle_price_details[keys].middle_price);
      let amount_price =
        (parseFloat(this.formData.middle_price_details[keys].middle_multiply) / 100) * parseFloat(new_middle);
      if (!isNaN(amount_price)) {
        this.formData.middle_price_details[keys].amount_price = amount_price;
        this.fix_amount_price = amount_price;
        // console.log(this.formData.middle_price_details[keys].amount_price);
      }
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;
        console.log(this.formData);
        if (this.action == "add") {
          const response = await apiMiddle_price.store(this.formData);
          // console.log(response);

          if (response.status == 200) {
            this.$emit("success");
            this.$refs.form.reset();
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          const response = await apiMiddle_price.update(id, this.formData);
          console.log(response);

          if (response.status == 200) {
            this.$emit("success");
            this.$refs.form.reset();
          } else {
            this.$emit("error");
          }
        }
        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        this.formDataLoading = true;
        await this.getYearCurrent();
        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                car_gear: "1",
                middle_price_active: "1",
              };
            });
          });
          await this.getBank();
        } else if (this.action == "edit") {
          const response = await apiMiddle_price.show(this.id);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
            });
          });
        }
        await this.getCarseries();
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
h1,
h2,
h3,
h4 {
  font-weight: 30;
}
</style>
