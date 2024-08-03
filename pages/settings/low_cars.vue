<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="2" class="mt-3">
            <v-btn color="primary" dark @click.stop="AddItem()">
              <v-icon left>mdi-plus</v-icon>
              เพิ่มรายการ
            </v-btn>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.active`]="{ item }">
          <v-btn v-if="item.active == '1'" x-small color="success" dark>แสดง</v-btn>
          <v-btn v-else x-small color="red" dark>ไม่</v-btn>
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" fab x-small dark @click="editItem(item.id)">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <dialogAddLowCars
        :dialog="dialogDialogAddLowCars"
        :id="idDialogAddOutlay"
        :action="actionDialogAddLowCars"
        :formTitle="formTitleDialogAddLowCars"
        @cancleItem="dialogDialogAddLowCars = false"
        @success="addSuccess"
        @error="addError"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiLow_cars from "@/Api/apiLow_cars";
import * as customAlart from "@/customJS/customAlart";
import dialogAddLowCars from "@/components/dialog/dialogAdd_lowCars";

export default {
  components: {
    dialogAddLowCars,
  },
  data() {
    return {
      loading: true,
      search: "",
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      idDialogAddOutlay: "",
      formTitleDialogAddLowCars: "Add",
      actionDialogAddLowCars: "add",
      dialogDialogAddLowCars: false,
      data: [],
      headers: [
        { text: "ลำดับ", value: "no", width: "7%", align: "center" },
        { text: "ยี่ห้อ", value: "car_models.car_model_name", width: "15%" },
        { text: "รุ่น", value: "car_series.car_series_name", width: "15%" },
        { text: "รุ่นย่อย", value: "car_serie_sub.car_serie_sub_name", width: "15%" },
        { text: "ปีผลิต", value: "years", width: "5%" },
        { text: "สถานะ", value: "active", width: "5%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiLow_cars.destroy(id);
          respone.then(async (res) => {
            // console.log(res);
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },

    async AddItem() {
      this.formTitleDialogAddLowCars = "เพิ่มข้อมูล";
      this.dialogDialogAddLowCars = true;
      this.idDialogAddOutlay = "";
      this.actionDialogAddLowCars = "add";
    },

    async getData() {
      this.loading = true;
      this.data = [];
      const response = await apiLow_cars.index();
      // console.log(response.data);
      this.data = await response.data;
      this.loading = false;
    },
    async editItem(item) {
      this.formTitleDialogAddLowCars = "แก้ไข";
      this.dialogDialogAddLowCars = true;
      this.idDialogAddOutlay = item;
      this.actionDialogAddLowCars = "edit";
    },

    async addSuccess(value) {
      if (value == "Low_cars") {
        this.dialogDialogAddLowCars = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
        // console.log(this.dialogDialogAddLowCars);
      });
    },
    async addError(value) {
      if (value == "Low_cars") {
        this.dialogDialogAddLowCars = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
  },
  watch: {
    data() {
      const self = this;
      return this.data.map(function (item) {
        item.no =
          self.data
            .map(function (x) {
              return x.id;
            })
            .indexOf(item.id) + 1;
      });
    },
  },
};
</script>

<style></style>
