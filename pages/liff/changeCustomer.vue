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

      <v-card-title primary-title>แจ้งเปลี่ยนคนจอง</v-card-title>

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

        <v-text-field
          class="mt-3"
          label="ชื่อลูกค้าเดิม*"
          v-model="formData.customer_old"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-text-field>

        <v-text-field
          class="mt-3"
          label="ชื่อลูกค้าใหม่*"
          v-model="formData.customer_new"
          outlined
          dense
          hide-details
          :rules="rule"
        >
        </v-text-field>

        <v-select
          class="mt-3"
          v-model="formData.customer_job"
          label="อาชีพลูกค้าใหม่*"
          :items="['ข้าราชการ', 'พนักงานเอกชน', 'เกษตร', 'ค้าขาย', 'อื่น ๆ']"
          outlined
          dense
          hide-details=""
          :rules="rule"
        ></v-select>

        <v-text-field
          class="mt-3"
          v-if="formData.customer_job == 'อื่น ๆ'"
          autocomplete="true"
          label="ระบุอาชีพ*"
          v-model="formData.customer_job_list"
          id="formData.customer_job_list"
          name="formData.customer_job_list"
          append-icon=""
          outlined
          dense
          hide-details
          :rules="formData.customer_job == 'อื่น ๆ' ? rule : ''"
        >
        </v-text-field>

        <v-textarea
          class="mt-3"
          rows="2"
          v-model="formData.note"
          outlined
          label="เหตุผล*"
          dense
          hide-details=""
          :rules="rule"
        ></v-textarea>

        <v-file-input
          class="mt-3"
          label="รูปบัตรประจำตัวประชาชนลูกค้าใหม่*"
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
          class="mt-3"
          v-model="sale_sheet"
          label="เอกสารสรุปการขายใหม่*"
          prepend-icon=""
          append-icon="mdi-image"
          show-size
          outlined
          dense
          hide-details=""
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
import * as apiRequestChangeCustomer from "@/Api/apiRequestChangeCustomer";
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
    this.initializeLiff(process.env.liff.changeCustomer);
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
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.formDataLoading = true;

        let formData = new FormData();
        formData.append("formData", JSON.stringify(this.formData));
        formData.append("id_card", this.id_card);
        formData.append("sale_sheet", this.sale_sheet);

        const response = await apiRequestChangeCustomer.store(formData);
        // this.$refs.form.reset();

        if (response.status == 200) {
          customAlart.TopSuccess();

          if (!response.data.note) {
            response.data.note = "-";
          }

          var Messages = [
            {
              type: "text",
              text: "แจ้งเปลี่ยนคนจอง: " + response.data.car_no,
            },
            {
              type: "flex",
              altText: "แจ้งเปลี่ยนคนจอง: " + response.data.car_no,
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
                      text: "แจ้งเปลี่ยนคนจอง",
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
                              text: "คนเดิม:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.customer_old,
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
                              text: "คนใหม่:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.customer_new,
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
                              text: "อาชีพ:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.customer_job,
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
                              text: "เหตุผล:",
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
                        label: "รูปบัตรประจำตัวประชาชนคนใหม่",
                        uri: this.serverUrl + response.data.id_card,
                      },
                    },
                    {
                      type: "button",
                      style: "secondary",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: "ใบสรุปเอกสารการขายใหม่",
                        uri: this.serverUrl + response.data.sale_sheet,
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
                          `?type=changeCustomer&id=${response.data.id}`,
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