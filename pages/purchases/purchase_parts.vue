<template>
  <div v-if="user_group_permission == -1 || user_group_permission == 6 || user_group_permission == 11">
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
        <template v-slot:[`item.created_at`]="{ item }">
          {{ $moment(item.created_at).format("LLL") }}
          <br />
        </template>

        <template v-slot:[`item.sumValueAll`]="{ item }">
          {{
            Number(item.sumValueAll).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.po_active`]="{ item }">
          <h5 v-if="item.po_active == '1'" class="orange--text">รอรับเข้าคลัง</h5>
          <h5 v-else-if="item.po_active == '2'" class="blue--text">อยู่ในคลัง</h5>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="print_a4(item.id)">
                <v-list-item-title>ปริ้น</v-list-item-title>
              </v-list-item>

              <v-list-item @click="editItem(item.id)">
                <v-list-item-title>รับเข้าคลัง</v-list-item-title>
              </v-list-item>

              <v-list-item @click="deleteItem(item.id)">
                <v-list-item-title>ลบ</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
import * as apiPurchases from "@/Api/apiPurchases";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogPurchasePart";
export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: true,
      id: "",
      search: "",
      dialog: false,
      formTitle: "Add",
      action: "add",
      headers: [
        {
          text: "ลำดับ",
          value: "no",
          width: "7%",
          align: "center",
        },

        {
          text: "วันที่สั่ง",
          value: "created_at",
          width: "15%",
        },
        {
          text: "รหัส",
          value: "po_number",
          width: "13%",
        },
        {
          text: "ผู้สั่ง",
          value: "user.first_name",
          width: "13%",
        },

        {
          text: "รวมเป็นเงิน",
          value: "sumValueAll",
          width: "13%",
        },
        {
          text: "สาขา",
          value: "branch.branch_name",
          width: "10%",
        },

        {
          text: "สถานะ",
          value: "po_active",
          width: "10%",
        },
        {
          text: "จัดการ",
          value: "actions",
          sortable: false,
          width: "5%",
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
      const response = await apiPurchases.index();
      this.data = response.data;
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
      this.formTitle = "รับของเข้าคลัง";
      this.dialog = true;
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
    async print_a4(id) {
      let routeData = this.$router.resolve({
        name: "prints-print_purchasepart",
        query: { id: id },
      });
      window.open(routeData.href, "_blank");
    },
    async addError() {
      this.dialog = false;
      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiPurchases.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }

            await this.$nextTick(() => {
              this.getData();
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
