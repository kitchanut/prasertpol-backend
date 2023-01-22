<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-title>
        <v-col cols="5">
          <v-autocomplete
            :filter="filterObject"
            :items="dataCar"
            item-text="car_no"
            :disabled="waitingPushdata"
            no-data-text="ไม่มีข้อมูล"
            item-value="id"
            @change="selectSee"
            label="ค้นหาตามลำดับรถ"
            outlined
            dense
            hide-details
          >
            <template
              slot="selection"
              slot-scope="{ item }"
            >
              {{ item.car_no }} ({{ item.car_regis }})
            </template>

            <template
              slot="item"
              slot-scope="{ item }"
            >
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
        show-expand
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.car_img`]="{ item }">
          <v-btn
            icon
            v-if="item.img_id_first != 0"
          >
            <v-avatar
              size="40"
              @click="showImg(serverUrl + item.img_id_first)"
            >
              <v-img :src="serverUrl + item.img_id_first"> </v-img>
            </v-avatar>
          </v-btn>
        </template>

        <template v-slot:[`item.created_at`]="{ item }">
          {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          <br />
        </template>

        <template v-slot:[`item.car_price`]="{ item }">
          {{
            Number(item.car_price).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.car_buy`]="{ item }">
          {{
            Number(item.car_buy).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.updated_at`]="{ item }">
          <h5>
            {{ $moment(item.updated_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.car_stock`]="{ item }">
          <h5
            v-if="item.car_stock == '1'"
            class="orange--text"
          >
            รอรับรถเข้าคลัง
          </h5>
          <h5
            v-if="item.car_stock == '2'"
            class="blue--text"
          >อยู่ในคลัง</h5>
          <h5
            v-if="item.car_stock == '3'"
            class="green--text"
          >ขายออกแล้ว</h5>
        </template>

        <template v-slot:expanded-item="{ item }">
          <tr>
            หน้าร้าน:
            {{
              item.car_active == 1 ? "แสดง" : "ไม่แสดง"
            }}
          </tr>
          <tr>
            ประเภอ:
            {{
              item.car_types.car_type_name
            }}
          </tr>
          <tr>
            ยี่ห้อ:
            {{
              item.car_models.car_model_name
            }}
          </tr>
          <tr>
            รุ่นย่อย:
            {{
              item.car_serie_sub.car_serie_sub_name
            }}
          </tr>
          <tr>
            ปี:
            {{
              item.car_year
            }}
          </tr>
          <tr>
            ราคาซื้อ:
            {{
              item.car_buy
            }}
          </tr>
        </template>
      </v-data-table>

      <dialogImage
        :dialog="dialogImg"
        :imgUrl="imgUrl"
        @cancleItem="dialogImg = false"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiTransition_cars from "@/Api/apiTransition_cars";
import dialogImage from "@/components/dialog/dialogImage";
export default {
  components: {
    dialogImage,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      serverUrl: process.env.serverUrl,

      loading: false,
      search: "",
      dialogImg: false,
      imgUrl: "",
      id: "",
      formTitle: "Add",
      action: "add",
      waitingPushdata: true,

      headers: [
        {
          text: "ลำดับ",
          value: "no",
          align: "center",
        },
        {
          text: "รูปภาพ",
          value: "car_img",
        },
        {
          text: "วันที่",
          value: "created_at",
        },
        {
          text: "ลำดับรถ",
          value: "car_no",
        },
        {
          text: "ทะเบียน",
          value: "car_regis",
        },
        {
          text: "รุ่น",
          value: "car_series.car_series_name",
        },

        {
          text: "สี",
          value: "color.color_name",
        },
        {
          text: "สาขา",
          value: "branch.branch_name",
        },

        {
          text: "สถานะ",
          value: "car_stock",
        },
        {
          text: "เพิ่มเติม",
          sortable: false,
          value: "data-table-expand",
          width: "10%",
        },
      ],
      branch_id:
        this.$auth.$storage.getLocalStorage("userData-branch_id") == 1
          ? 0
          : this.$auth.$storage.getLocalStorage("userData-branch_id"),
      data: [],
      dataCar: [],
    };
  },
  mounted() {
    this.getDataCar();
    this.loading = false;
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
      const response = await apiTransition_cars.car_regis(this.branch_id);
      // console.log(response);
      this.dataCar = response.data;
      this.waitingPushdata = false;
    },
    async selectSee(value) {
      this.data = [];
      this.loading = true;
      this.waitingPushdata = true;
      const response = await apiTransition_cars.selectWhereCar(value);
      // console.log(response);
      this.data = await response.data;
      this.loading = false;
      this.waitingPushdata = false;
    },
    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
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
