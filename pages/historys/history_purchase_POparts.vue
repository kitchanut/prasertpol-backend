<template>
  <div v-if="user_group_permission == -1">
    <v-card>
      <v-card-title>
        <template cols="12">
          <v-col cols="4">
            <v-autocomplete
              :disabled="waitingPushdata"
              :items="dataPOnumber"
              item-text="po_number"
              item-value="id"
              label="ค้นหาตามรหัส"
              no-data-text="ไม่มีข้อมูล"
              @change="selectSee"
              :search-input.sync="search_number"
              outlined
              dense
              hide-details
            >
            </v-autocomplete>
          </v-col>

          <v-col v-if="purchase_id != ''" @click="editItem(purchase_id)" cols="1">
            <v-btn color="primary" dark>ดูรายการอะไหล่</v-btn>
          </v-col>
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
          ></v-text-field>
        </v-col>
      </v-card-title>

      <template v-if="purchase_id != ''">
        <v-form :readonly="isReadonly" ref="form">
          <div>
            <v-row class="d-flex justify-center">
              <h2>ข้อมูลการสั่งซื้ออะไหล่</h2>
            </v-row>
            <br />

            <v-row class="d-flex">
              <v-col>
                <v-text-field
                  label="ซื้อในนาม"
                  v-model="formData.company_name"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  label="ซื้อสินค้าจากบริษัท"
                  v-model="formData.partner_companie_name"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>

            <v-row class="d-flex">
              <v-col>
                <v-row class="d-flex">
                  <v-col>
                    <v-text-field
                      label="เบอร์ติดต่อ"
                      v-model="formData.branch_tel"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="เลขผู้เสียภาษี"
                      v-model="formData.company_idvat"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>

              <v-col>
                <v-row class="d-flex">
                  <v-col>
                    <v-text-field
                      label="เบอร์ติดต่อ"
                      v-model="formData.partner_companie_tel"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="เลขผู้เสียภาษี"
                      v-model="formData.partner_companie_idvat"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row class="d-flex">
              <v-col>
                <v-text-field
                  label="ที่อยู่"
                  v-model="formData.company_address"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  label="ที่อยู่"
                  v-model="formData.partner_companie_address"
                  append-icon=""
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
              </v-col>
            </v-row>
          </div>
        </v-form>
      </template>
    </v-card>

    <br />
    <v-card>
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        :loading="loading"
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:[`item.updated_at`]="{ item }">
          <h5>
            {{ $moment(item.updated_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>

        <template v-slot:[`item.sumValueAll`]="{ item }">
          <div v-if="item.po_active == '1'">
            {{
              Number(item.sumValueAll).toLocaleString("th-TH", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            }}
          </div>
        </template>

        <template v-slot:[`item.po_active`]="{ item }">
          <div class="blue--text" v-if="item.po_active == 1">สร้างเอกสาร</div>
          <div class="green--text" v-if="item.po_active == 2">รับอะไหล่เข้าคลังแล้ว</div>
        </template>
      </v-data-table>
    </v-card>
    <dialogNew :dialog="dialog" :id="id" :action="action" :formTitle="formTitle" @cancleItem="dialog = false" />
  </div>
</template>

<script>
import * as apiPurchases from "@/Api/apiPurchases";
import * as apiTransition_purchase_part from "@/Api/apiTransition_purchase_part";
import dialogNew from "@/components/dialog/dialogPurchasePart";
export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: false,
      search: "",
      id: "",
      action: "",
      dialog: false,
      formData: "",
      isReadonly: true,
      formTitle: "ดูรายการสั่งซื้อ",
      purchase_id: "",
      headers: [
        { text: "ลำดับ", value: "no", align: "center" },
        // { text: "รหัสสั่งซื้อ", value: "po_number" },
        { text: "วันที่", value: "updated_at" },
        { text: "รายการ", value: "po_active" },
        {
          text: "ผู้สั่ง/ผู้รับ",
          value: "user.first_name",
        },
        {
          text: "เบอร์ติดต่อ",
          value: "user.tel",
        },
        {
          text: "สาขา",
          value: "branch.branch_name",
        },
        { text: "จำนวนเงิน (บ.)", value: "sumValueAll" },
      ],
      waitingPushdata: false,
      search_number: "",
      data: [],
      dataPOnumber: [],
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
    };
  },
  mounted() {},
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async selectSee(value) {
      this.data = [];
      this.purchase_id = "";
      this.loading = true;
      const getResponse = await apiTransition_purchase_part.selectWhereID(value);
      // console.log(this.dataPOnumber);
      this.formData = this.dataPOnumber[0];
      this.data = await getResponse.data;
      this.purchase_id = value;
      this.loading = false;
    },
    async editItem(item) {
      this.formTitle = "ดูรายการสั่งซื้อ";
      this.dialog = true;
      this.id = item;
      this.action = "history";
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
    async search_number(value) {
      if (value != null) {
        this.$nextTick(async () => {
          if (value.length > 0) {
            const response = await apiPurchases.selectPoNumber(value);
            this.dataPOnumber = await response.data;
          }
        });
      }
    },
  },
};
</script>

<style></style>
