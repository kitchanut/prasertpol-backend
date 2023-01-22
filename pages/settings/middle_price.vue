<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 9">
    <v-card>
      <v-card-title>
        <template>
          <v-btn color="primary" dark @click.stop="AddItem()">
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn>

          <v-row class="ml-2">
            <v-col>
              <v-autocomplete
                v-model="car_serie_id"
                :items="carSerie"
                no-data-text="ไม่มีข้อมูล"
                @change="getCarSerieSub"
                item-text="car_series_name"
                item-value="id"
                placeholder="เลือกรุ่นรถ"
                label="รุ่นรถ"
                outlined
                dense
                hide-details
              >
              </v-autocomplete>
            </v-col>
            <v-col>
              <v-autocomplete
                v-model="car_serie_sub_id"
                :items="carSerieSub"
                item-text="car_serie_sub_name"
                item-value="id"
                label="รุ่นย่อย"
                @change="getData"
                no-data-text="ไม่มีข้อมูล"
                placeholder="เลือกรุ่นย่อย"
                outlined
                dense
                hide-details
              >
              </v-autocomplete>
            </v-col>
          </v-row>
        </template>

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
          >
          </v-text-field>
        </v-col>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
      >
        <template v-slot:[`item.amount_down_start`]="{ item }">
          {{
            Number(item.amount_down_start).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.amount_down_end`]="{ item }">
          {{
            Number(item.amount_down_end).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.car_gear`]="{ item }">
          <h5 v-if="item.car_gear == '1'" class="green--text">AT</h5>
          <h5 v-if="item.car_gear == '2'" class="orange--text">MT</h5>
        </template>

        <template v-slot:[`item.middle_price_active`]="{ item }">
          <v-btn
            v-if="item.middle_price_active == '1'"
            x-small
            color="success"
            dark
            >เปิดใช้งาน</v-btn
          >
          <v-btn v-else x-small color="red" dark>ปิดการใช้งาน</v-btn>
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" fab x-small dark @click="editItem(item.id)">
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
        @cancleItem="dialog = false"
        @success="addSuccess()"
        @error="addError()"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiMiddle_price from "@/Api/apiMiddle_price";
import * as customAlart from "@/customJS/customAlart";
import * as apiCar_series from "@/Api/apiCar_series";
import * as apiCar_serie_sub from "@/Api/apiCar_serie_sub";
import dialogNew from "@/components/dialog/dialogMiddle_price";

export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      loading: true,
      search: "",
      dialog: false,
      id: "",
      formTitle: "Add",
      action: "add",
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      headers: [
        { text: "ลำดับ", value: "no", width: "7%", align: "center" },
        { text: "รุ่น", value: "car_serie.car_series_name", width: "15%" },
        {
          text: "รุ่นย่อย",
          value: "car_serie_sub.car_serie_sub_name",
          width: "10%",
        },
        {
          text: "เกียร์",
          value: "car_gear",
          width: "10%",
        },

        {
          text: "ปีผลิต (ค.ศ)",
          value: "year",
          width: "10%",
        },
        { text: "สถานะ", value: "middle_price_active", width: "5%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
      ],
      carSerie: [],
      carSerieSub: [],
      car_serie_id: null,
      car_serie_sub_id: null,
      data: [],
      getfirst: true,
      dataMiddle: [],
    };
  },
  mounted() {
    this.getData();
    this.getCarseries();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async getCarseries() {
      this.carSerie = [];
      const response = await apiCar_series.select();
      this.carSerie = response.data;
      // this.loading = false;
      await this.getCarSerieSub();
    },
    async getCarSerieSub() {
      this.carSerieSub = [];
      if (Number.isInteger(this.car_serie_id) == true) {
        const response = await apiCar_serie_sub.select(this.car_serie_id);
        this.carSerieSub = response.data;
      }
    },
    async getData() {
      if (this.getfirst == true) {
        const response = await apiMiddle_price.index();
        this.data = response.data;
        this.dataMiddle = response.data;
        this.getfirst = false;
      } else {
        if (
          Number.isInteger(this.car_serie_id) == true &&
          Number.isInteger(this.car_serie_sub_id) == true
        ) {
          this.data = [];
          for (let index = 0; index < this.dataMiddle.length; index++) {
            if (
              this.car_serie_id == this.dataMiddle[index].car_serie_id &&
              this.car_serie_sub_id == this.dataMiddle[index].car_serie_sub_id
            ) {
              this.data.push(this.dataMiddle[index]);
            }
          }
        }
      }
      // console.log(this.data);
      this.loading = false;
    },
    async AddItem() {
      this.formTitle = "เพิ่มข้อมูล";
      this.dialog = true;
      this.id = "";
      this.action = "add";
    },
    async editItem(item) {
      this.formTitle = "แก้ไขข้อมูล";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },

    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiMiddle_price.destroy(id);
          respone.then(async (res) => {
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
    async addSuccess() {
      this.dialog = false;
      this.getfirst = true;
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
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
