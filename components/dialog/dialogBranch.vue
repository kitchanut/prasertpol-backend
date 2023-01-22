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
              <v-text-field
                autocomplete="true"
                label="ชื่อบริษัท"
                append-icon=""
                v-model="formData.company_name"
                id="formData.company_name"
                name="formData.company_name"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>
              <v-row no-gutters class="mt-3">
                <v-col cols="6 pr-2">
                  <v-text-field
                    autocomplete="true"
                    label="รหัสสี"
                    append-icon=""
                    v-model="formData.branch_code_color"
                    id="formData.branch_code_color"
                    name="formData.branch_code_color"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="จำนวนเงิน"
                    type="number"
                    min="0"
                    append-icon=""
                    v-model="formData.branch_money"
                    id="formData.branch_money"
                    name="formData.branch_money"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row no-gutters class="mt-3">
                <v-col cols="6 pr-2">
                  <v-text-field
                    autocomplete="true"
                    label="ชื่อสาขา"
                    append-icon=""
                    v-model="formData.branch_name"
                    id="formData.branch_name"
                    name="formData.branch_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.branch_team_id"
                    id="formData.branch_team_id"
                    name="formData.branch_team_id"
                    :items="dataSelectBranch_teams"
                    item-text="branch_team_name"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    label="ทีมสาขา"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row no-gutters class="mt-3">
                <v-col cols="4 pr-2">
                  <v-text-field
                    autocomplete="true"
                    label="รหัสสาขา"
                    append-icon=""
                    v-model="formData.company_code"
                    id="formData.company_code"
                    name="formData.company_code"
                    outlined
                    type="number"
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="4">
                  <v-text-field
                    autocomplete="true"
                    label="เลขเสียภาษี"
                    append-icon=""
                    type="number"
                    v-model="formData.company_idvat"
                    id="formData.company_idvat"
                    name="formData.company_idvat"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="4 pl-2">
                  <v-text-field
                    autocomplete="true"
                    label="เบอร์ติดต่อ"
                    append-icon=""
                    type="number"
                    v-model="formData.branch_tel"
                    id="formData.branch_tel"
                    name="formData.branch_tel"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                class="mt-3"
                autocomplete="true"
                label="ที่อยู่"
                append-icon=""
                v-model="formData.company_address"
                id="formData.company_address"
                name="formData.company_address"
                outlined
                dense
                hide-details
                :rules="rule"
              >
              </v-text-field>

              <v-row no-gutters class="mt-3">
                <v-col cols="6 pr-2">
                  <v-autocomplete
                    v-model="formData.amphure_id"
                    id="formData.amphure_id"
                    name="formData.amphure_id"
                    :items="dataSelectAmphures"
                    item-text="name_th"
                    no-data-text="ไม่มีข้อมูล"
                    item-value="id"
                    @change="selectSeeAmphure"
                    label="อำเภอ"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <v-col cols="6">
                  <v-autocomplete
                    v-model="formData.district_id"
                    id="formData.district_id"
                    name="formData.district_id"
                    no-data-text="ไม่มีข้อมูล"
                    :items="dataSelectDistricts"
                    item-text="name_th"
                    item-value="id"
                    @change="selectSeeDistrict"
                    label="ตำบล"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>
              <v-row no-gutters class="mt-3">
                <v-col cols="6 pr-2">
                  <v-autocomplete
                    v-model="formData.province_id"
                    id="formData.province_id"
                    name="formData.province_id"
                    :items="dataProvinces"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="name_th"
                    item-value="id"
                    @change="selectSeeProvince"
                    label="จังหวัด"
                    outlined
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="รหัสไปรษณีย์"
                    append-icon=""
                    type="number"
                    v-model="formData.zip_code"
                    id="formData.zip_code"
                    name="formData.zip_code"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row no-gutters class="mt-3">
                <v-col cols="6 pr-2">
                  <v-text-field
                    autocomplete="true"
                    label="Facebook"
                    append-icon=""
                    type="text"
                    v-model="formData.facebook"
                    id="formData.facebook"
                    name="formData.facebook"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    label="Line"
                    append-icon=""
                    type="text"
                    v-model="formData.Line"
                    id="formData.Line"
                    name="formData.Line"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-radio-group
                class="mt-3"
                v-model="formData.branch_active"
                :rules="rule"
                id="formData.branch_active"
                name="formData.branch_active"
                row
                hide-details=""
              >
                <template>
                  <div class="mr-1">แสดงตอนเลือก:</div>
                </template>
                <v-radio label="เปิดใช้งาน" value="1"></v-radio>
                <v-radio label="ปิดการใช้งาน" color="red" value="2"></v-radio>
              </v-radio-group>

              <div class="d-flex flex-column justify-center">
                <v-file-input
                  accept="image/jpeg,image/png,image/jpg"
                  show-size
                  :label="
                    currentFile == null
                      ? 'เลือกรูปภาพ'
                      : imagePreviewURL == null
                      ? 'เลือกรูปภาพ'
                      : 'เลือกรูปใหม่'
                  "
                  @change="selectFile"
                ></v-file-input>
                <v-img
                  contain
                  v-if="currentFile != null || imagePreviewURL != null"
                  height="250px"
                  :src="imagePreviewURL"
                />
              </div>
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
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiBranches from "@/Api/apiBranches";
import * as apiBranch_teams from "@/Api/apiBranch_teams";
import * as apiProvinces from "@/Api/apiProvinces";
import * as apiAmphures from "@/Api/apiAmphures";
import * as apiDistricts from "@/Api/apiDistricts";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/branchs/",

      btnloading: true,
      formDataLoading: false,
      formData: {},
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      dataProvinces: [],
      dataAmphures: [],
      dataSelectBranch_teams: [],
      dataSelectAmphures: [],
      dataDistricts: [],
      dataSelectDistricts: [],
      currentFile: null,
      imagePreviewURL: null,
    };
  },
  mounted() {
    // this.imagePreviewURL = null;
    // this.currentFile = null;
    this.getBranch_teams();
    this.getProvinces();
    this.getAmphures();
    this.getDistricts();
    this.loading = false;
  },
  methods: {
    selectFile(payload) {
      // console.log(payload);
      if (payload != null) {
        this.currentFile = payload;
        const file = payload; // in case vuetify file input
        if (file) {
          this.imagePreviewURL = URL.createObjectURL(file);
          URL.revokeObjectURL(file); // free memory
        } else {
          this.imagePreviewURL = null;
        }
      }
    },
    async getBranch_teams() {
      const response = await apiBranch_teams.select();
      this.dataSelectBranch_teams = response.data;
    },
    async getProvinces() {
      const response = await apiProvinces.select();
      this.dataProvinces = response.data;
    },
    async getAmphures() {
      const response = await apiAmphures.select();
      // console.log(response);
      this.dataAmphures = response.data;
      this.dataSelectAmphures = response.data;
    },
    async getDistricts() {
      const response = await apiDistricts.select();
      this.dataDistricts = response.data;
    },
    async selectSeeProvince() {
      this.dataSelectAmphures = [];
      for (let index = 0; index < this.dataAmphures.length; index++) {
        if (this.dataAmphures[index].province_id == this.formData.province_id) {
          this.dataSelectAmphures.push(this.dataAmphures[index]);
        }
      }
    },
    async selectSeeAmphure() {
      // console.log(this.formData.amphure_id);
      this.dataSelectDistricts = [];
      for (let index = 0; index < this.dataDistricts.length; index++) {
        if (this.dataDistricts[index].amphure_id == this.formData.amphure_id) {
          this.dataSelectDistricts.push(this.dataDistricts[index]);
        }
      }

      for (let index = 0; index < this.dataAmphures.length; index++) {
        if (this.dataAmphures[index].id == this.formData.amphure_id) {
          this.formData.province_id = this.dataAmphures[index].province_id;
          // console.log(this.dataAmphures[index]);
        }
      }
    },
    async selectSeeDistrict() {
      this.formData.zip_code = "";
      for (let index = 0; index < this.dataDistricts.length; index++) {
        if (this.dataDistricts[index].id == this.formData.district_id) {
          // this.dataSelectDistricts.push(this.dataDistricts[index]);
          this.formData.zip_code = this.dataDistricts[index].zip_code;
        }
      }
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        const data = new FormData();
        data.append("formData", JSON.stringify(this.formData));
        data.append("qr_code", this.currentFile);

        if (this.action == "add") {
          const response = await apiBranches.store(data);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        } else if (this.action == "edit") {
          data.append("_method", "PATCH");

          const response = await apiBranches.update(this.id, data);
          // console.log(response);
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
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        this.imagePreviewURL = null;
        this.currentFile = null;

        if (this.action == "add") {
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = {
                branch_active: "1",
              };
            });
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiBranches.show(this.id);
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              if (response.data.qr_code != undefined) {
                this.imagePreviewURL =
                  this.serverUrl +
                  response.data.id +
                  "/" +
                  response.data.qr_code;
              }

              this.selectSeeAmphure();
              this.selectSeeDistrict();
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
