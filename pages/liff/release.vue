<template>
  <v-card>
    <v-form autocomplete="true" ref="form" @submit.prevent="onAction(formData.id)">
      <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

      <v-card-title primary-title> แจ้งปล่อยรถ</v-card-title>

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
          v-model="formData.car_no"
          id="formData.car_id"
          name="formData.car_id"
          :items="dataCar"
          item-text="car_no"
          item-value="car_no"
          label="ลำดับรถ*"
          no-data-text="ไม่มีข้อมูล"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-autocomplete>

        <v-menu
          ref="menuReleaseDate"
          v-model="menuReleaseDate"
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
              v-model="formData.release_date"
              label="วันที่ปล่อยรถ"
              v-bind="attrs"
              v-on="on"
              persistent-hint
              outlined
              dense
              hide-details
              readonly
              :rules="rule"
              clearable
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="formData.release_date"
            locale="th-TH"
            picker-date
            @input="menuReleaseDate = false"
          ></v-date-picker>
        </v-menu>

        <v-text-field
          class="mt-3"
          label="เงินดาวน์/ซื้อเงินสด*"
          type="number"
          v-model="formData.dow"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-text-field>

        <v-text-field
          class="mt-3"
          label="ค่างวดล่วงหน้า*"
          type="number"
          v-model="formData.advance_payment"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-text-field>

        <v-text-field
          class="mt-3"
          label="ค่าสมาร์ทชัว*"
          type="number"
          v-model="formData.insurance"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-text-field>

        <v-text-field
          class="mt-3"
          label="ค่าซื้อประกันอื่นๆ*"
          type="number"
          v-model="formData.insurance_other"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-text-field>

        <v-text-field
          class="mt-3"
          label="เงินอื่นๆ*"
          type="number"
          v-model="formData.other_receive"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-text-field>

        <v-text-field
          class="mt-3"
          label="รวมเงินที่ได้รับในวันปล่อยรถ*"
          type="number"
          v-model="formData.total_receive"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-text-field>

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
          accept="image/*"
          show-size
          outlined
          dense
          hide-details="auto"
          :rules="ruleMustImage"
        ></v-file-input>

        <v-file-input
          class="mt-3"
          v-model="sale_sheet"
          label="เอกสารสรุปงานขาย*"
          prepend-icon=""
          append-icon="mdi-image"
          accept="image/*"
          show-size
          outlined
          dense
          hide-details="auto"
          :rules="ruleMustImage"
        ></v-file-input>

        <v-file-input
          class="mt-3"
          v-model="release_img"
          label="รูปปล่อยรถ*"
          prepend-icon=""
          append-icon="mdi-image"
          accept="image/*"
          show-size
          outlined
          dense
          hide-details="auto"
          :rules="ruleMustImage"
        ></v-file-input>

        <v-file-input
          class="mt-3"
          label="ใบประกัน-ด้านหน้า*"
          v-model="insurance_font_sheet"
          prepend-icon=""
          append-icon="mdi-image"
          accept="image/*"
          show-size
          outlined
          dense
          hide-details="auto"
          :rules="ruleMustImage"
        ></v-file-input>

        <v-file-input
          class="mt-3"
          label="ใบประกัน-ด้านหลัง*"
          v-model="insurance_back_sheet"
          prepend-icon=""
          append-icon="mdi-image"
          accept="image/*"
          show-size
          outlined
          dense
          hide-details="auto"
          :rules="ruleMustImage"
        ></v-file-input>

        <v-file-input
          class="mt-3"
          v-model="receipt"
          label="ใบเสร็จรับเงิน"
          prepend-icon=""
          append-icon="mdi-image"
          accept="image/*"
          show-size
          outlined
          dense
          hide-details="auto"
          :rules="ruleImage"
        ></v-file-input>

        <v-file-input
          class="mt-3"
          v-model="slip"
          label="สลิปการโอนเงิน"
          prepend-icon=""
          append-icon="mdi-image"
          accept="image/*"
          show-size
          outlined
          dense
          hide-details="auto"
          :rules="ruleImage"
        ></v-file-input>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-btn dark block color="warning" @click="closeWindow"> ยกเลิก </v-btn>
          </v-col>
          <v-col>
            <v-btn block type="submit" color="success darken-1" :loading="loading"> บันทึก </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import * as apiRequestRelease from "@/Api/apiRequestRelease";
import * as apiCars from "@/Api/apiCars";
import * as apiLiff from "@/Api/apiLiff";
import * as customAlart from "@/customJS/customAlart";

export default {
  layout: "liff",
  auth: false,
  data() {
    return {
      serverUrl: process.env.serverUrl,
      loading: false,
      formDataLoading: false,
      menuReleaseDate: false,
      isCombine: false,
      dataCar: [],
      formData: {},
      id_card: null,
      sale_sheet: null,
      release_img: null,
      insurance_font_sheet: null,
      insurance_back_sheet: null,
      receipt: null,
      slip: null,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      ruleMustImage: [(value) => !!value, (value) => !value || value.size < 10000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
      ruleImage: [(value) => !value || value.size < 10000000 || "ขนาดรูปต้องน้อยกว่า 10 MB"],
    };
  },
  mounted() {
    this.initializeLiff(process.env.liff.release);
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
        this.formData.branch_name = response.data.data.branch.branch_team.branch_team_name;
      }

      // console.log(response.data);
    },
    async getCars() {
      const response = await apiCars.SelectCarNo();
      this.dataCar = response.data;
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.formDataLoading = true;

        let formData = new FormData();
        formData.append("formData", JSON.stringify(this.formData));
        formData.append("id_card", this.id_card);
        formData.append("sale_sheet", this.sale_sheet);
        formData.append("release_img", this.release_img);
        formData.append("insurance_font_sheet", this.insurance_font_sheet);
        formData.append("insurance_back_sheet", this.insurance_back_sheet);
        if (this.slip) {
          formData.append("slip", this.slip);
        }
        if (this.receipt) {
          formData.append("receipt", this.receipt);
        }

        const response = await apiRequestRelease.store(formData);
        // this.$refs.form.reset();

        if (response.status == 200) {
          customAlart.TopSuccess();

          if (!response.data.note) {
            response.data.note = "-";
          }

          var Messages = [
            {
              type: "text",
              text: "แจ้งปล่อยรถ: " + response.data.car_no,
            },
            {
              type: "flex",
              altText: "แจ้งปล่อยรถ: " + response.data.car_no,
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
                      text: "แจ้งปล่อยรถ",
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
                              text: "ลำดับรถ:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.car_no,
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
                              text: "วันที่ปล่อยรถ:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.release_date,
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
                              text: "เงินดาวน์/สด:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.dow + " บาท",
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
                              text: "งวดล่วงหน้า:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.advance_payment + " บาท",
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
                              text: "สมาร์ทชัว:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.insurance + " บาท",
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
                              text: "ประกันอื่น:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.insurance_other + " บาท",
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
                              text: "อื่นๆ:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.other_receive + " บาท",
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
                              text: "รวมรับ:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.total_receive + " บาท",
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
                        label: "เอกสารสรุปงานขาย",
                        uri: this.serverUrl + response.data.sale_sheet,
                      },
                      color: "#FFC107",
                    },
                    {
                      type: "button",
                      style: "primary",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: "รูปปล่อยรถ",
                        uri: this.serverUrl + response.data.release_img,
                      },
                      color: "#00BCD4",
                    },
                    {
                      type: "button",
                      style: "primary",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: "ใบประกัน-ด้านหน้า",
                        uri: this.serverUrl + response.data.insurance_font_sheet,
                      },
                      color: "#607D8B",
                    },
                    {
                      type: "button",
                      style: "primary",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: "ใบประกัน-ด้านหลัง",
                        uri: this.serverUrl + response.data.insurance_back_sheet,
                      },
                      color: "#607D8B",
                    },
                    {
                      type: "button",
                      style: "secondary",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: "ใบเสร็จ",
                        uri: this.serverUrl + response.data.receipt,
                      },
                    },
                    {
                      type: "button",
                      style: "secondary",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: "รูปสลิป",
                        uri: this.serverUrl + response.data.slip,
                      },
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
                          `?type=release&id=${response.data.id}`,
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
        this.$auth.$storage.setLocalStorage("userData-lineUUID", profile.userId);
        this.$auth.$storage.setLocalStorage("userData-linepictureUrl", profile.pictureUrl);
        this.$auth.$storage.setLocalStorage("userData-linedisplayName", profile.displayName);

        this.formData.lineUUID = profile.userId;
        this.formData.displayName = profile.displayName;
        this.formData.pictureUrl = profile.pictureUrl;
        this.formData.request_status = "pedding";

        this.checkUserLine();
        this.getCars();
      });
    },
    closeWindow() {
      liff.closeWindow();
    },
  },
};
</script>

<style></style>
