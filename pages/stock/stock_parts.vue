<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 7 ||
      user_group_permission == 6 ||
      user_group_permission == 11
    "
  >
    <!-- <div v-if="countGuide != 0">
      <v-card>
        <h2 class="ml-1 red--text">ระบบแนะนำ กรุณาซื้อรายการดังนี้</h2>
        <v-col v-for="(guideBuy, keys) in guideBuys" :key="keys">
          <v-row class="ml-5">
            {{ guideBuy.branch }} &nbsp;
            <p>{{ guideBuy.name }}</p>
            &nbsp;อยู่ในคลังมี&nbsp;
            <p class="red--text">{{ guideBuy.value }}</p>
          </v-row>
        </v-col>
      </v-card>
    </div> -->
    <br />
    <div>
      <v-card>
        <v-card-title>
          <template>
            <v-col cols="5" v-if="user_group_permission == -1">
              <v-autocomplete
                v-model="branch_id"
                :items="branches"
                item-text="branch_name"
                item-value="id"
                label="สาขา"
                @change="selectSee"
                no-data-text="ไม่มีข้อมูล"
                outlined
                dense
                hide-details
              >
              </v-autocomplete>
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

        <v-data-table
          :headers="headers"
          :items="data"
          :items-per-page="10"
          :search="search"
          :loading="loading"
          no-data-text="ยังไม่มีการเพิ่มข้อมูล"
          loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        >
          <template v-slot:[`item.car_part_amount`]="{ item }">
            <div v-if="item.car_part_amount <= 10">
              <h5 class="red--text">
                {{
                  Number(item.car_part_amount).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </h5>
            </div>

            <div v-if="item.car_part_amount > 10">
              {{
                Number(item.car_part_amount).toLocaleString("th-TH", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })
              }}
            </div>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-btn color="primary" fab x-small dark @click="editItem(item.id)">
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>

    <dialogNew
      :dialog="dialog"
      :id="id"
      :action="action"
      :formTitle="formTitle"
      @cancleItem="dialog = false"
      @success="addSuccess"
      @error="addError"
    />
  </div>
</template>

<script>
import * as apiStock_part from "@/Api/apiStock_part";
import * as customAlart from "@/customJS/customAlart";
import * as apiBranches from "@/Api/apiBranches";
import dialogNew from "@/components/dialog/dialogStockPart";

export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      loading: true,
      search: "",

      id: "",
      dialog: false,
      formTitle: "Add",
      action: "add",
      branches: [],
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      headers: [
        { text: "ลำดับ", value: "no", width: "7%", align: "center" },
        { text: "ชื่ออะไหล่", value: "car_part.car_part_name", width: "15%" },
        { text: "จำนวน", value: "car_part_amount", width: "15%" },
        { text: "สาขา", value: "branch.branch_name", width: "15%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "12%" },
      ],
      data: [],
      dataParts: [],
      // guideBuys: [],
      countGuide: 0,
    };
  },
  async mounted() {
    await this.getBranches();
    await this.getDataParts();
    this.selectSee();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async getDataParts() {
      const response = await apiStock_part.index();
      this.dataParts = response.data;
      this.loading = false;
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      await this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
      this.loading = false;
      // console.log(response);
    },
    async editItem(item) {
      this.formTitle = "ปรับสินค้าในสต็อก";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },
    async selectSee(value) {
      this.data = [];
      // this.guideBuys = [];
      this.countGuide = 0;
      if (value == 0) {
        this.data = this.dataParts;
        // for (let index = 0; index < this.dataParts.length; index++) {
        //   if (this.dataParts[index].car_part_amount < 10) {
        //     this.guideBuys.push({
        //       branch: this.data[index]["branch"]["branch_name"],
        //       name: this.dataParts[index]["car_part"]["car_part_name"],
        //       value: this.dataParts[index].car_part_amount,
        //     });
        //     this.countGuide++;
        //   }
        // }
      } else {
        for (let index = 0; index < this.dataParts.length; index++) {
          if (this.dataParts[index].branch_id == this.branch_id) {
            this.data.push(this.dataParts[index]);
          }
        }

        // for (let index = 0; index < this.data.length; index++) {
        //   if (this.data[index].car_part_amount < 10) {
        //     this.guideBuys.push({
        //       branch: this.data[index]["branch"]["branch_name"],
        //       name: this.data[index]["car_part"]["car_part_name"],
        //       value: this.data[index].car_part_amount,
        //     });
        //     this.countGuide++;
        //   }
        // }
      }
    },
    addSuccess(value) {
      if (value == "StockPart") {
        this.dialog = false;
      }
      this.$nextTick(async () => {
        await this.getDataParts();
        this.selectSee();
        customAlart.TopSuccess();
      });
    },
    addError(value) {
      if (value == "StockPart") {
        this.dialog = false;
      }
      this.$nextTick(async () => {
        await this.getDataParts();
        // this.selectSee();
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
