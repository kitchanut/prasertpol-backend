<template>
  <v-card>
    <v-form autocomplete="true" ref="form" @submit.prevent="onAction(formData.id)">
      <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

      <v-card-title primary-title> แจ้งอัพเดทข้อมูล</v-card-title>

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
          :filter="filterObject"
          :items="dataWorking"
          item-value="id"
          label="ลำดับรถ*"
          single-line
          v-model="formData.working_id"
          outlined
          dense
          hide-details
          @change="formData.car_no = dataWorking.find((x) => x.id == formData.working_id).cars.car_no"
        >
          <template slot="selection" slot-scope="{ item }">
            {{ item.cars.car_no }} | {{ item.customer ? item.customer.customer_name : "ยังไม่เลือกลูกค้า" }}
          </template>
          <template slot="item" slot-scope="{ item }">
            W{{ item.id }} | {{ item.cars.car_no }} |
            {{ item.customer ? item.customer.customer_name : "ยังไม่เลือกลูกค้า" }}</template
          >
        </v-autocomplete>

        <!-- <v-autocomplete
          class="mt-3"
          v-model="formData.car_no"
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
        </v-autocomplete> -->

        <v-textarea
          class="mt-3"
          rows="2"
          v-model="formData.note"
          outlined
          label="รายละเอียด*"
          dense
          hide-details=""
          :rules="rule"
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
import * as apiRequestUpdate from "@/Api/apiRequestUpdate";
import * as apiWorks from "@/Api/apiWorks";
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
      isCombine: false,
      // dataCar: [],
      dataWorking: [],
      formData: {},
      id_card: null,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
    };
  },
  mounted() {
    this.initializeLiff(process.env.liff.update);
  },
  methods: {
    async getDataWork() {
      const response = await apiWorks.activeWorkingID();
      this.dataWorking = response.data;
      //   console.log(this.dataWorking);
    },
    filterObject(item, queryText, itemText) {
      return item.cars.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1;
    },
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

      this.getDataWork();
    },
    // async getCars() {
    //   const response = await apiCars.SelectCarNo();
    //   this.dataCar = response.data;
    // },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.formDataLoading = true;

        let formData = new FormData();
        formData.append("formData", JSON.stringify(this.formData));
        formData.append("id_card", this.id_card);

        const response = await apiRequestUpdate.store(formData);
        console.log(response.data);
        // this.$refs.form.reset();

        if (response.status == 200) {
          customAlart.TopSuccess();

          if (!response.data.note) {
            response.data.note = "-";
          }

          var Messages = [
            {
              type: "text",
              text: "แจ้งอัพเดทข้อมูล: " + response.data.car_no,
            },
            {
              type: "flex",
              altText: "แจ้งอัพเดทข้อมูล: " + response.data.car_no,
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
                      text: "แจ้งอัพเดทข้อมูล",
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
                              text: "รายละเอียด:",
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
                          `?type=update&id=${response.data.id}`,
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
        this.$auth.$storage.setLocalStorage("userData-lineUUID", profile.userId);
        this.$auth.$storage.setLocalStorage("userData-linepictureUrl", profile.pictureUrl);
        this.$auth.$storage.setLocalStorage("userData-linedisplayName", profile.displayName);

        this.formData.lineUUID = profile.userId;
        this.formData.displayName = profile.displayName;
        this.formData.pictureUrl = profile.pictureUrl;
        this.formData.request_status = "pedding";

        this.checkUserLine();
        // this.getCars();
      });
    },
    closeWindow() {
      liff.closeWindow();
    },
  },
};
</script>

<style></style>
