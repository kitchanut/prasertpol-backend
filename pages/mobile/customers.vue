<template>
  <div v-if="
      user_group_permission == -1 ||
      user_group_permission == 2 ||
      user_group_permission == 3
    ">
    <v-card>
      <v-card-title>
        <template>
          <v-btn
            color="primary"
            dark
            @click.stop="AddItem()"
          >
            <v-icon left>mdi-plus</v-icon>
            เพิ่มรายการใหม่
          </v-btn>
        </template>

        <v-spacer></v-spacer>

        <v-col cols="12">
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
        :mobile-breakpoint="0"
      >
        <template v-slot:[`item.customer_job`]="{ item }">
          <h5
            v-if="item.customer_job == '1'"
            class="brown--text"
          >ข้าราชการ</h5>
          <h5
            v-else-if="item.customer_job == '2'"
            class="blue--text"
          >
            พนักงานเอกชน
          </h5>
          <h5
            v-else-if="item.customer_job == '3'"
            class="green--text"
          >
            เกษตรกรกร
          </h5>
          <h5
            v-else-if="item.customer_job == '4'"
            class="pink--text"
          >
            ค้าขาย
          </h5>
          <h5
            v-else-if="item.customer_job == '5'"
            class="purple--text"
          >
            อื่น ๆ
          </h5>
          <h5
            v-else
            class="red--text"
          >ยังไม่เลือก</h5>
        </template>

        <template v-slot:[`item.customer_birthday_year`]="{ item }">
          <h5
            v-if="
              item.customer_birthday_year == null ||
              item.customer_birthday_year == ''
            "
            class="red--text"
          >
            ยังไม่เลือก
          </h5>
          <div v-else>
            {{
              new Date().getFullYear() +
              543 -
              Number(item.customer_birthday_year)
            }}
          </div>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            color="primary"
            fab
            x-small
            dark
            @click="editItem(item.id)"
          >
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn
            color="red"
            fab
            x-small
            dark
            @click="deleteItem(item.id)"
          >
            <v-icon> mdi-delete </v-icon>
          </v-btn>
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
import * as apiCustomers from "@/Api/apiCustomers";
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogCustomer";

export default {
  layout: "mobile",
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      search: "",
      loading: true,
      id: "",
      dialog: false,
      formTitle: "Add",
      action: "add",
      headers: [
        { text: "ลำดับ", value: "no", align: "center" },
        { text: "ชื่อลูกค้า", value: "customer_name" },
        { text: "นามแฝง", value: "customer_nickname" },
        { text: "อายุ", value: "customer_birthday_year" },
        { text: "อาชีพ", value: "customer_job" },
        { text: "เบอร์ติดต่อ", value: "customer_tel" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
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
    async addSuccess() {
      this.dialog = false;
      await this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      await this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },

    async getData() {
      const response = await apiCustomers.index();
      this.data = response.data;
      // console.log(this.data);
      this.loading = false;
    },

    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiCustomers.destroy(id);
          respone.then((res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
          });
        }
      });
      await this.$nextTick(() => {
        this.getData();
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
