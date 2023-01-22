<template>
  <v-container v-if="Lowcars.length > 0">
    <v-dialog v-model="dialogDeleteComponent" max-width="90%">
      <v-card>
        <v-form autocomplete="true" ref="form">
          <v-toolbar color="primary" dark flat> จำนวนรถที่เหลือน้อย </v-toolbar>

          <v-progress-linear
            v-if="formDataLoading"
            indeterminate
            color="yellow darken-2"
          >
          </v-progress-linear>

          <v-card-text>
            <v-container>
              <v-data-table
                :headers="headers"
                :items="Lowcars"
                :items-per-page="10"
                :search="search"
                :loading="loading"
                loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
                no-data-text="ยังไม่มีการเพิ่มข้อมูล"
              >
              </v-data-table>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="alert('ever')"
              >เตือนครั้งต่อไป</v-btn
            >
            <v-btn color="green darken-1" text @click="alert('one')"
              >เตือนครั้งเดียว</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiLow_cars from "@/Api/apiLow_cars";

export default {
  data() {
    return {
      formDataLoading: true,
      loading: true,
      Lowcars: [],
      search: "",

      dialogDeleteComponent:
        this.$auth.$storage.getLocalStorage("dialog-low-cars"),
      headers: [
        { text: "ลำดับ", value: "no", width: "150px", align: "center" },
        { text: "ยี่ห้อ", value: "model_name", width: "200px" },
        { text: "รุ่น", value: "serie_name", width: "200px" },
        { text: "รุ่นย่อย", value: "serie_sub_name", width: "200px" },
        { text: "ปีผลิต", value: "years", width: "150x" },
        { text: "คงเหลือ", value: "number", width: "150px" },
      ],
    };
  },
  mounted() {
    if (this.dialogDeleteComponent == true) {
      this.getShowLow();
    }
  },
  methods: {
    async getShowLow() {
      this.loading = false;
      this.formDataLoading = false;
      const response = await apiLow_cars.show_low_cars();
      if (response.data > 0) {
        this.Lowcars = response.data;
      } else {
        this.dialogDeleteComponent = false;
        this.$auth.$storage.setLocalStorage("dialog-low-cars", false);
      }
      // console.log(response.data);
    },
    alert(type) {
      if (type == "one") {
        this.$auth.$storage.setLocalStorage("dialog-low-cars", false);
      } else if (type == "ever") {
        this.$auth.$storage.setLocalStorage("dialog-low-cars", true);
      }
      this.dialogDeleteComponent = false;
    },
  },
  watch: {
    Lowcars() {
      const self = this;
      return this.Lowcars.map(function (item) {
        item.no =
          self.Lowcars.map(function (x) {
            return x.id;
          }).indexOf(item.id) + 1;
      });
    },
  },
};
</script>

<style></style>
