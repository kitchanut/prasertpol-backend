<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 6 || user_group_permission == 8">
    <v-card>
      <v-card-title>
        <template>
          <v-btn color="primary" dark @click.stop="AddItem()">
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn>
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
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.car_img`]="{ item }">
          <v-btn icon v-if="item.img_id_first != 0">
            <v-avatar size="40" @click="showImg(serverUrl + item.img_id_first)">
              <v-img :src="serverUrl + item.img_id_first"> </v-img>
            </v-avatar>
          </v-btn>
        </template>
        <template v-slot:[`item.car_price_vat`]="{ item }">
          {{
            Number(item.car_price_vat).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.car_buy_vat`]="{ item }">
          {{
            Number(item.car_buy_vat).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>
        <template v-slot:[`item.car_stock`]="{ item }">
          <h5 v-if="item.car_stock == '1'" class="orange--text">รอรับเข้าคลัง</h5>
        </template>

        <template v-slot:[`item.booking_status`]="{ item }">
          <h5 v-if="item.booking_status == '1'" class="green--text">ยังไม่จอง</h5>
          <h5 v-if="item.booking_status == '0'" class="orange--text">จอง</h5>
        </template>

        <template v-slot:[`item.car_active`]="{ item }">
          <h5 v-if="item.car_active == '1'" class="green--text">แสดง</h5>
          <h5 v-if="item.car_active == '0'" class="orange--text">ไม่แสดง</h5>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="editItem(item.id)">
                <v-list-item-title>รับเข้าคลัง/แก้ไข</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>

      <dialogNew
        :dialog="dialog"
        :id="id"
        :stock="stock"
        :action="action"
        :formTitle="formTitle"
        @cancleItem="dialog = false"
        @success="addSuccess()"
        @error="addError()"
      />

      <dialogImage :dialog="dialogImg" :imgUrl="imgUrl" @cancleItem="dialogImg = false" />
    </v-card>
  </div>
</template>

<script>
import * as apiCars from "@/Api/apiCars";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogPurchaseCar";
import dialogImage from "@/components/dialog/dialogImage";

export default {
  components: {
    dialogNew,
    dialogImage,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      serverUrl: process.env.serverUrl,
      loading: true,
      id: "",
      search: "",
      dialog: false,
      formTitle: "Add",
      action: "add",
      stock: true,
      formData: {},
      imgUrl: "",
      dialogImg: false,
      headers: [
        {
          text: "รูปภาพ",
          value: "car_img",
        },
        {
          text: "รถคันที่",
          value: "car_no",
          align: "center",
        },

        {
          text: "ทะเบียน",
          value: "car_regis",
        },
        {
          text: "ประเภท",
          value: "car_types.car_type_name",
        },
        {
          text: "ค่ายรถ",
          value: "car_models.car_model_name",
        },
        {
          text: "รุ่น",
          value: "car_series.car_series_name",
        },
        {
          text: "รุ่นย่อย",
          value: "car_serie_sub.car_serie_sub_name",
        },
        {
          text: "ราคาซื้อ",
          value: "car_buy_vat",
        },

        {
          text: "ราคาขาย",
          value: "car_price_vat",
        },
        {
          text: "การจอง",
          value: "booking_status",
        },
        {
          text: "หน้าร้าน",
          value: "car_active",
        },
        {
          text: "สถานะ",
          value: "car_stock",
        },
        {
          text: "วันที่ซื้อ",
          value: "car_date_buy",
        },
        {
          text: "จัดการ",
          value: "actions",
          sortable: false,
          width: "10%",
        },
      ],
      data: [],
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
    async getData() {
      // this.data = [];
      const response = await apiCars.index();
      this.data = response.data;
      // console.log(response);
      this.loading = false;
    },

    async AddItem() {
      this.formTitle = "เพิ่มข้อมูล";
      this.dialog = true;
      this.stock = false;
      this.id = "";
      this.action = "add";
    },
    async editItem(item) {
      this.formTitle = "แก้ไขข้อมูล";
      this.dialog = true;
      this.stock = true;
      this.id = item;
      this.action = "edit";
    },
    async addSuccess() {
      this.dialog = false;
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
    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiCars.destroy(id);
          // console.log(respone);
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
      this.$nextTick(async () => {
        await this.getData();
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
