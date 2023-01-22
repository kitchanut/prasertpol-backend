<template>
  <v-card>
    <v-form
      autocomplete="true"
      ref="form"
      @submit.prevent="onAction(formData.id)"
    >
      <v-progress-linear
        v-if="formDataLoading"
        indeterminate
        color="yellow darken-2"
      >
      </v-progress-linear>

      <v-card-title primary-title> แจ้งเปลี่ยนจอง</v-card-title>

      <v-card-text>
        <v-text-field
          label="ชื่อเล่นและชื่อจริงของเซล*"
          v-model="formData.sale_name"
          outlined
          dense
          hide-details
          :disabled="isCombine"
          :rules="rule"
        >
        </v-text-field>

        <v-text-field
          class="mt-3"
          label="สาขา*"
          v-model="formData.branch_name"
          outlined
          dense
          hide-details
          :disabled="isCombine"
          :rules="rule"
        >
        </v-text-field>

        <v-autocomplete
          class="mt-3"
          v-model="formData.car_no_old"
          :items="dataCar"
          item-text="car_no"
          item-value="car_no"
          label="ลำดับรถเก่า*"
          no-data-text="ไม่มีข้อมูล"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-autocomplete>

        <v-autocomplete
          class="mt-3"
          v-model="formData.car_no_new"
          :items="dataCar"
          item-text="car_no"
          item-value="car_no"
          label="ลำดับรถใหม่*"
          no-data-text="ไม่มีข้อมูล"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-autocomplete>

        <v-radio-group
          class="mt-3"
          v-model="formData.sign_type"
          :rules="rule"
          hide-details
        >
          <template>
            <div class="mr-1">การทำสัญญา:</div>
          </template>

          <v-radio label="เซนต์เดิม" value="เซนต์เดิม"></v-radio>
          <v-radio label="เซนต์ใหม่" color="green" value="เซนต์ใหม่"></v-radio>
          <v-radio
            label="ยังไม่เซนต์"
            color="red"
            value="ยังไม่เซนต์"
          ></v-radio>
        </v-radio-group>

        <v-card class="mt-3" v-if="formData.sign_type == 'เซนต์ใหม่'" outlined>
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
                  v-model="formData.sign_date"
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
                v-model="formData.sign_date"
                locale="th-TH"
                picker-date
                @input="menuSignDate = false"
              ></v-date-picker>
            </v-menu>

            <v-select
              class="mt-3"
              v-model="formData.bank_name"
              @change="change_branch(formData.bank_name)"
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
              v-model="formData.bank_branch_name"
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
              v-model="formData.mtk_name"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              label="เบอร์โทร MTK*"
              v-model="formData.mtk_tel"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-text-field
              class="mt-3"
              label="ผลเครดิต*"
              v-model="formData.credit"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-text-field>

            <v-radio-group
              class="mt-3"
              v-model="formData.document"
              :rules="rule"
              hide-details
              row
            >
              <template>
                <div class="mr-1">เอกสาร:</div>
              </template>

              <v-radio label="ครบ" value="ครบ"></v-radio>
              <v-radio label="ไม่ครบ" color="red" value="ไม่ครบ"></v-radio>
            </v-radio-group>

            <v-textarea
              v-if="formData.document == 'ไม่ครบ'"
              class="mt-3"
              rows="2"
              label="รายการเอกสารที่ไม่ครบ"
              v-model="formData.document_list"
              outlined
              dense
              hide-details
              :rules="rule"
            >
            </v-textarea>
          </v-card-text>
        </v-card>

        <v-textarea
          class="mt-3"
          rows="2"
          v-model="formData.note"
          outlined
          label="หมายเหตุ"
          dense
          hide-details=""
        ></v-textarea>

        <v-file-input
          class="mt-3"
          label="รูปบัตรประจำตัวประชาชนลูกค้า*"
          v-model="id_card"
          prepend-icon=""
          append-icon="mdi-image"
          show-size
          outlined
          dense
          hide-details=""
          :rules="rule"
        ></v-file-input>

        <v-file-input
          class="mt-3"
          v-model="booking_sheet"
          label="เอกสารสรุปงานขาย-คันใหม่*"
          prepend-icon=""
          append-icon="mdi-image"
          show-size
          outlined
          dense
          hide-details="auto"
          :rules="ruleMustImage"
        ></v-file-input>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-btn dark block color="warning" @click="closeWindow">
              ยกเลิก
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              block
              type="submit"
              color="success darken-1"
              :loading="loading"
            >
              บันทึก
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import * as apiRequestChangeCar from "@/Api/apiRequestChangeCar";
import * as apiCars from "@/Api/apiCars";
import * as apiLiff from "@/Api/apiLiff";
import * as apiBank from "@/Api/apiBank";
import * as apiBank_branch from "@/Api/apiBank_branch";
import * as customAlart from "@/customJS/customAlart";

export default {
  layout: "liff",
  auth: false,
  data() {
    return {
      serverUrl: process.env.serverUrl,
      loading: false,
      formDataLoading: false,
      menuSignDate: false,
      isCombine: false,
      dataCar: [],
      dataBank: [],
      dataBank_branch: [],
      dataBank_branch_all: [],
      formData: {},
      id_card: null,
      booking_sheet: null,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      ruleMustImage: [
        (value) => !!value,
        (value) => !value || value.size < 2000000 || "ขนาดรูปต้องน้อยกว่า 2 MB",
      ],
      ruleImage: [
        (value) => !value || value.size < 2000000 || "ขนาดรูปต้องน้อยกว่า 2 MB",
      ],
    };
  },
  mounted() {
    this.initializeLiff(process.env.liff.changeCar);
  },
  methods: {
    async checkUserLine() {
      let data = {
        lineUUID: this.formData.lineUUID,
        pictureUrl: this.formData.pictureUrl,
        displayName: this.formData.displayName,
      };
      const response = await apiLiff.check_register(data);
      this.isCombine = response.data.isCombine;
      if (this.isCombine) {
        this.formData.sale_name =
          response.data.data.first_name +
          " " +
          response.data.data.last_name +
          " (" +
          response.data.data.user_code +
          ")";
        this.formData.branch_name =
          response.data.data.branch.branch_team.branch_team_name;
      }

      // console.log(response.data);
    },
    async getCars() {
      const response = await apiCars.SelectCarNo();
      this.dataCar = response.data;
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
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.formDataLoading = true;

        let formData = new FormData();
        formData.append("formData", JSON.stringify(this.formData));
        formData.append("id_card", this.id_card);
        formData.append("booking_sheet", this.booking_sheet);

        const response = await apiRequestChangeCar.store(formData);
        console.log(response.data);
        // this.$refs.form.reset();

        if (response.status == 200) {
          customAlart.TopSuccess();

          if (!response.data.note) {
            response.data.note = "-";
          }

          if (!response.data.document_list) {
            response.data.document_list = "-";
          }

          if (response.data.sign_type != "เซนต์ใหม่") {
            var Messages = [
              {
                type: "text",
                text:
                  "แจ้งเปลี่ยนจอง: " +
                  response.data.car_no_old +
                  " เป็น " +
                  response.data.car_no_new,
              },
              {
                type: "flex",
                altText:
                  "แจ้งเปลี่ยนจอง: " +
                  response.data.car_no_old +
                  " เป็น " +
                  response.data.car_no_new,
                contents: {
                  type: "bubble",
                  hero: {
                    type: "image",
                    url: this.serverUrl + response.data.id_card,
                    size: "full",
                    aspectRatio: "20:13",
                    aspectMode: "cover",
                    action: {
                      type: "uri",
                      uri: this.serverUrl + response.data.id_card,
                    },
                  },
                  body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                      {
                        type: "text",
                        text: "แจ้งเปลี่ยนจอง",
                        weight: "bold",
                        size: "xl",
                      },
                      {
                        type: "box",
                        layout: "vertical",
                        margin: "lg",
                        spacing: "sm",
                        contents: [
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "xs",
                            contents: [
                              {
                                type: "text",
                                text: "ลำดับรถเดิม:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.car_no_old,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "xs",
                            contents: [
                              {
                                type: "text",
                                text: "ลำดับรถใหม่:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.car_no_new,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "ชื่อเซล:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.sale_name,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "สาขา:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.branch_name,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "เซนต์:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.sign_type,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "หมายเหตุ:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.note,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  footer: {
                    type: "box",
                    layout: "vertical",
                    spacing: "sm",
                    contents: [
                      {
                        type: "button",
                        style: "primary",
                        height: "sm",
                        action: {
                          type: "uri",
                          label: "รูปบัตรประจำตัวประชาชน",
                          uri: this.serverUrl + response.data.id_card,
                        },
                      },
                      {
                        type: "button",
                        style: "primary",
                        height: "sm",
                        action: {
                          type: "uri",
                          label: "เอกสารสรุปงานขาย-คันใหม่",
                          uri: this.serverUrl + response.data.booking_sheet,
                        },
                        color: "#FFC107",
                      },
                      {
                        type: "button",
                        style: "link",
                        height: "sm",
                        action: {
                          type: "uri",
                          label: "แชร์",
                          uri:
                            "https://liff.line.me/" +
                            process.env.liff.shareRequest +
                            `?type=changeCar&id=${response.data.id}`,
                        },
                      },
                      {
                        type: "box",
                        layout: "vertical",
                        contents: [],
                        margin: "sm",
                      },
                    ],
                    flex: 0,
                  },
                },
              },
            ];
          } else {
            var Messages = [
              {
                type: "text",
                text:
                  "แจ้งเปลี่ยนจอง: " +
                  response.data.car_no_old +
                  " เป็น " +
                  response.data.car_no_new,
              },
              {
                type: "flex",
                altText:
                  "แจ้งเปลี่ยนจอง: " +
                  response.data.car_no_old +
                  " เป็น " +
                  response.data.car_no_new,
                contents: {
                  type: "bubble",
                  hero: {
                    type: "image",
                    url: this.serverUrl + response.data.id_card,
                    size: "full",
                    aspectRatio: "20:13",
                    aspectMode: "cover",
                    action: {
                      type: "uri",
                      uri: this.serverUrl + response.data.id_card,
                    },
                  },
                  body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                      {
                        type: "text",
                        text: "แจ้งเปลี่ยนจอง",
                        weight: "bold",
                        size: "xl",
                      },
                      {
                        type: "box",
                        layout: "vertical",
                        margin: "lg",
                        spacing: "sm",
                        contents: [
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "xs",
                            contents: [
                              {
                                type: "text",
                                text: "ลำดับรถเดิม:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.car_no_old,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "xs",
                            contents: [
                              {
                                type: "text",
                                text: "ลำดับรถใหม่:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.car_no_new,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "ชื่อเซล:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.sale_name,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "สาขา:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.branch_name,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "เซนต์:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.sign_type,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "วันที่เซนต์:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.sign_date,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "ธนาคาร:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.bank_name,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "สาขา:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.bank_branch_name,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "MKT:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.mtk_name,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "Tel:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.mtk_tel,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "ผลเครดิต:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.credit,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "เอกสาร:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.document,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: " ",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.document_list,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                          {
                            type: "box",
                            layout: "baseline",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: "หมายเหตุ:",
                                color: "#aaaaaa",
                                size: "sm",
                                flex: 2,
                              },
                              {
                                type: "text",
                                text: response.data.note,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  footer: {
                    type: "box",
                    layout: "vertical",
                    spacing: "sm",
                    contents: [
                      {
                        type: "button",
                        style: "primary",
                        height: "sm",
                        action: {
                          type: "uri",
                          label: "รูปบัตรประจำตัวประชาชน",
                          uri: this.serverUrl + response.data.id_card,
                        },
                      },
                      {
                        type: "button",
                        style: "primary",
                        height: "sm",
                        action: {
                          type: "uri",
                          label: "เอกสารสรุปงานขาย-คันใหม่",
                          uri: this.serverUrl + response.data.booking_sheet,
                        },
                        color: "#FFC107",
                      },
                      {
                        type: "button",
                        style: "link",
                        height: "sm",
                        action: {
                          type: "uri",
                          label: "แชร์",
                          uri:
                            "https://liff.line.me/" +
                            process.env.liff.shareRequest +
                            `?type=changeCar&id=${response.data.id}`,
                        },
                      },
                      {
                        type: "box",
                        layout: "vertical",
                        contents: [],
                        margin: "sm",
                      },
                    ],
                    flex: 0,
                  },
                },
              },
            ];
          }

          liff
            .sendMessages(Messages)
            .then(function () {})
            .catch(function (error) {
              window.alert("Error sending message: " + error);
            });
        } else {
          customAlart.TopError();
        }

        this.loading = false;
        this.formDataLoading = false;

        await this.delay(1500);

        this.closeWindow();
      }
    },
    delay(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    },
    selectIDCard(payload) {
      this.id_card = payload;
    },
    selectBookingSheet(payload) {
      this.booking_sheet = payload;
    },
    initializeLiff(myLiffId) {
      liff.init({ liffId: myLiffId }, () => {
        if (liff.isLoggedIn()) {
          this.runApp();
        } else {
          liff.login();
        }
      });
    },
    runApp() {
      liff.getProfile().then(async (profile) => {
        // console.log(profile);
        this.$auth.$storage.setLocalStorage(
          "userData-lineUUID",
          profile.userId
        );
        this.$auth.$storage.setLocalStorage(
          "userData-linepictureUrl",
          profile.pictureUrl
        );
        this.$auth.$storage.setLocalStorage(
          "userData-linedisplayName",
          profile.displayName
        );

        this.formData.lineUUID = profile.userId;
        this.formData.displayName = profile.displayName;
        this.formData.pictureUrl = profile.pictureUrl;
        this.formData.request_status = "pedding";

        this.checkUserLine();
        this.getCars();
        this.getBank();
        this.getBank_branch();
      });
    },
    closeWindow() {
      liff.closeWindow();
    },
  },
};
</script>

<style>
</style>