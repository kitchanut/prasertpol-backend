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

      <v-card-title primary-title>ฝากเซนต์</v-card-title>

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
          ref="menuDate"
          v-model="menuDate"
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
              v-model="formData.date"
              label="วันที่นัดเซนต์เอกสาร"
              v-bind="attrs"
              v-on="on"
              persistent-hint
              outlined
              dense
              hide-details
              flathide-details
              :rules="rule"
              readonly
              clearable
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="formData.date"
            locale="th-TH"
            picker-date
            @input="menuDate = false"
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
          label="ฝากเซนต์ที่*"
          v-model="formData.sign_at"
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
          show-size
          outlined
          dense
          hide-details=""
          :rules="rule"
          @change="selectIDCard"
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
import * as apiRequestSignDeposit from "@/Api/apiRequestSignDeposit";
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
      isCombine: false,
      menuDate: false,
      dataCar: [],
      dataBank: [],
      dataBank_branch: [],
      dataBank_branch_all: [],
      formData: {},
      id_card: null,
      booking_sheet: null,
      booking_slip: null,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
    };
  },
  mounted() {
    this.initializeLiff(process.env.liff.signDeposit);
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
      console.log(bank);
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

        const response = await apiRequestSignDeposit.store(formData);
        // this.$refs.form.reset();

        if (response.status == 200) {
          customAlart.TopSuccess();

          if (!response.data.note) {
            response.data.note = "-";
          }

          var Messages = [
            {
              type: "text",
              text: "ฝากเซนต์: " + response.data.car_no,
            },
            {
              type: "flex",
              altText: "ฝากเซนต์ : " + response.data.car_no,
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
                      text: "ฝากเซนต์",
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
                              text: "วันที่นัด:",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.date,
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
                              text: "เบอร์โทร",
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
                              text: "ฝากเซนต์ที่",
                              color: "#aaaaaa",
                              size: "sm",
                              flex: 2,
                            },
                            {
                              type: "text",
                              text: response.data.sign_at,
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
                      style: "link",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: "แชร์",
                        uri:
                          "https://liff.line.me/" +
                          process.env.liff.shareRequest +
                          `?type=signDeposit&id=${response.data.id}`,
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
    selectIDCard(payload) {
      this.id_card = payload;
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