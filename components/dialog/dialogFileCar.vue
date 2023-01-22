<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="70%">
      <v-card>
        <v-form ref="form" autocomplete="true">
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
              <v-row>
                <v-col cols="6">
                  <span>
                    พรบ. ล่าสุด:
                    <span style="font-weight: 800">
                      {{
                        $moment(tex_date)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                      }}
                    </span>
                  </span>
                </v-col>
                <v-col cols="6">
                  <v-menu
                    ref="menuDate_buy"
                    v-model="menuDate_act"
                    id="menuDate_act"
                    name="menuDate_act"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.tex_date"
                        id="formData.tex_date"
                        name="formData.tex_date"
                        label="พรบ."
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flat
                        @change="changeDate"
                        clearable
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.tex_date"
                      id="formData.tex_date"
                      name="formData.tex_date"
                      locale="th-TH"
                      picker-date
                      @change="changeDate"
                      @input="menuDate_act = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <span>
                    เล่มโอน. ล่าสุด:
                    <span style="font-weight: 800">
                      {{
                        $moment(car_date_book)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                      }}
                    </span>
                  </span>
                </v-col>
                <v-col cols="6">
                  <v-menu
                    ref="menuDate_buy"
                    v-model="menuDate_book"
                    id="menuDate_book"
                    name="menuDate_book"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="formData.car_date_book"
                        id="formData.car_date_book"
                        name="formData.car_date_book"
                        label="เล่มทะเบียน"
                        readonly
                        @change="changeDate"
                        clearable
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                        flat
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.car_date_book"
                      id="formData.car_date_book"
                      name="formData.car_date_book"
                      locale="th-TH"
                      picker-date
                      @change="changeDate"
                      @input="menuDate_book = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <br />
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    class="mt-2"
                    label="ชื่อไฟล์"
                    append-icon=""
                    v-model="name"
                    id="name"
                    name="name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-file-input
                    v-if="name != null"
                    v-model="file_name"
                    id="file_name"
                    name="file_name"
                    accept=".pdf"
                    show-size
                    label="เลือกไฟล์"
                    @change="selectFile"
                  ></v-file-input>
                </v-col>
              </v-row>
              <br />
              <br />
              <v-row class="d-flex justify-center">
                <h2>ไฟล์รถทั้งหมด</h2>
              </v-row>
              <br />
              <v-row v-for="(file_car, keys) in file_cars" :key="keys">
                <v-col cols="3">
                  <span>
                    ชื่อไฟล์:
                    <span style="font-weight: 800">
                      {{ file_car.name }}
                    </span>
                  </span>
                </v-col>

                <v-col cols="3">
                  <span>
                    คนเพิ่ม:
                    <span style="font-weight: 800">
                      {{
                        file_car.user == null ? "" : file_car.user.first_name
                      }}
                    </span>
                  </span>
                </v-col>

                <v-col cols="3">
                  <span>
                    วันที่:
                    <span style="font-weight: 800">
                      {{
                        $moment(file_car.created_at)
                          .add(543, "year")
                          .format("DD MMMM YYYY HH:mm")
                      }}
                    </span>
                  </span>
                </v-col>

                <v-col cols="2">
                  <!-- <a
                    target="_blank"
                    :href="serverUrl + file_car.id + '/' + formData.car_pop"
                  >
                    <h2 class="blue--text">คลิกเพื่อดูไฟล์</h2>
                  </a> -->
                  <a :href="serverUrl + file_car.file_name" target="_blank">
                    <span style="font-weight: 800" class="blue--text"
                      >คลิกเพื่อดูไฟล์</span
                    >
                  </a>
                </v-col>

                <v-col cols="1">
                  <!-- <v-btn color="red" fab x-small dark @click="rm_row(keys)">
                    <v-icon> mdi-delete </v-icon>
                  </v-btn> -->
                  <v-btn
                    color="red"
                    fab
                    x-small
                    dark
                    @click="deleteFile(file_car.id, file_car.car_id)"
                  >
                    <v-icon> mdi-delete </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <br />
              <br />
              <v-row v-if="file_cars.length > 15">
                <v-col cols="6">
                  <v-text-field
                    autocomplete="true"
                    class="mt-2"
                    label="ชื่อไฟล์"
                    append-icon=""
                    v-model="name"
                    id="name"
                    name="name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-file-input
                    v-if="name != null"
                    v-model="file_name"
                    id="file_name"
                    name="file_name"
                    accept=".pdf"
                    show-size
                    label="เลือกไฟล์"
                    @change="selectFile"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')"
              >ปิด</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiFile_car from "@/Api/apiFile_car";
import * as customAlart from "@/customJS/customAlart";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/cars/",
      btnloading: true,
      formDataLoading: false,
      formData: {},
      dialogDeleteComponent: false,
      menuDate_act: false,
      menuDate_book: false,
      tex_date: "",
      car_date_book: "",
      file_cars: [],
      name: null,
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      file_name: null,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
    };
  },
  mounted() {},
  methods: {
    selectFile(payload) {
      // console.log(payload);
      if (payload != null) {
        const data = new FormData();
        data.append("car_id", this.id);
        data.append("name", this.name);
        data.append("user_id", this.user_id);
        data.append("file", payload);
        this.$nextTick(async () => {
          const response = await apiFile_car.upload_file_car(data);
          this.file_cars = response.data;
          // console.log(response);
          this.$nextTick(() => {
            if (response.status == 200) {
              customAlart.TopSuccess();
              this.name = null;
              this.file_name = null;
            } else {
              customAlart.TopError();
            }
          });
        });
      }
    },
    async changeDate() {
      const data = new FormData();
      data.append("car_id", this.id);
      data.append("formData", JSON.stringify(this.formData));
      const response = await apiFile_car.change_date_file_car(data);
      this.$nextTick(() => {
        if (response.status == 200) {
          customAlart.TopSuccess();
          this.file_cars = response.data;
        } else {
          customAlart.TopError();
        }
      });
    },
    async deleteFile(id, car_id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then(async (result) => {
        if (result == true) {
          const data = new FormData();
          data.append("id", id);
          data.append("car_id", car_id);
          const response = await apiFile_car.delete_file_car(data);
          if (response.status == 200) {
            customAlart.TopSuccess();
            this.file_cars = response.data;
          } else {
            customAlart.TopError();
          }
        }
      });
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialogDeleteComponent) {
        this.file_cars = [];
        const data = new FormData();
        data.append("car_id", this.id);
        const response = await apiFile_car.file_car(data);
        this.$nextTick(() => {
          this.$refs.form.reset();
          this.formData = response.data.car;
          this.car_date_book = response.data.car.car_date_book;
          this.tex_date = response.data.car.tex_date;
          this.file_cars = response.data.car_file;
        });
        // console.log(response);
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
