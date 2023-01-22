<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 9 ||
      user_group_permission == 11
    "
  >
    <v-card>
      <v-card-title>
        <v-col cols="5">
          <v-autocomplete
            :filter="filterObject"
            no-data-text="ไม่มีข้อมูล"
            :items="dataCar"
            item-text="car_no"
            item-value="id"
            label="ค้นหาตามลำดับรถ"
            @change="selectSee"
            v-model="car_id"
            outlined
            dense
            hide-details
          >
            <template slot="selection" slot-scope="{ item }">
              {{ item.car_no }} ({{ item.car_regis }})
            </template>

            <template slot="item" slot-scope="{ item }">
              {{ item.car_no }} ({{ item.car_regis }})
            </template>
          </v-autocomplete>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="3">
          <v-text-field
            v-model="search"
id="search"
name="search"
            append-icon="mdi-magnify"
            label="ค้นหา"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
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
        <template v-slot:[`item.job_technician_id`]="{ item }">
          {{ "J" + item.job_technician_id }}
        </template>

        <template v-slot:[`item.created_at`]="{ item }">
          {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
        </template>

        <template v-slot:[`item.typeRepair`]="{ item }">
          <h5 v-if="item.job_type == 1" class="blue--text">ก่อนขาย</h5>
          <h5 v-if="item.job_type == 2" class="red--text">หลังขาย</h5>
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            color="primary"
            fab
            x-small
            dark
            @click="
              editItem(item.id, item.repair.repair_name, item.car_part_buy)
            "
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <!-- <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
          <v-icon> mdi-delete </v-icon>
        </v-btn> -->
        </template>
      </v-data-table>

      <dialogNew
        :dialog="dialog"
        :id="id"
        :action="action"
        :formTitle="formTitle"
        :repair_name="repair_name"
        :car_part_buy="car_part_buy"
        @cancleItem="dialog = false"
        @success="addSuccess()"
        @error="addError()"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiCars from "@/Api/apiCars";
import * as apiRepair_price from "@/Api/apiRepair_price";
import * as customAlart from "@/customJS/customAlart";

import dialogNew from "@/components/dialog/dialogRepairPrice";

export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      loading: false,
      search: "",
      dialog: false,
      id: "",
      repair_name: "",
      car_part_buy: "",

      formTitle: "Add",
      action: "add",
      headers: [
        { text: "ลำดับ", value: "no", align: "center" },
        { text: "เวลา", value: "created_at" },
        { text: "รหัสงานช่าง", value: "job_technician_id" },
        { text: "รายการซ่อม", value: "repair.repair_name" },
        { text: "ราคาประมาณ", value: "car_part_buy" },
        { text: "ราคาจริง", value: "price" },
        { text: "ซ่อมตอน", value: "typeRepair" },
        // { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
      data: [],
      dataCar: [],
      car_id: "",
    };
  },
  mounted() {
    this.getDataCar();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    filterObject(item, queryText, itemText) {
      return (
        item.car_no.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) >
          -1 ||
        item.car_regis
          .toLocaleLowerCase()
          .indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    async getDataCar() {
      const response = await apiCars.selectall();
      // console.log(response)
      this.dataCar = await response.data;
    },
    async selectSee() {
      this.data = [];
      this.loading = true;
      const response = await apiRepair_price.selectWhereCar(this.car_id);
      // console.log(response)

      this.data = await response.data;
      this.loading = false;
    },
    async editItem(item, repair_name, car_part_buy) {
      this.formTitle = "แก้ไขราคาซ่อมของงาน: J" + item;
      this.repair_name = repair_name;
      this.car_part_buy = car_part_buy;
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },
    async addSuccess() {
      this.dialog = false;
      this.$nextTick(() => {
        this.selectSee();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      this.$nextTick(() => {
        this.selectSee();
        customAlart.TopError();
      });
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiRepair_price.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            this.$nextTick(() => {
              this.selectSee();
            });
          });
        }
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
