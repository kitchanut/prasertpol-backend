<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 2 ||
      user_group_permission == 9 ||
      user_group_permission == 11
    "
  >
    <v-card>
      <v-card-title>
        <v-col cols="9">
          <v-row>
            <v-col cols="6">
              <v-autocomplete
                v-model="money_month"
                :items="$store.state.month_Select"
                @change="getData"
                item-text="title"
                no-data-text="ไม่มีข้อมูล"
                item-value="value"
                label="เดือน"
                outlined
                dense
                hide-details
              ></v-autocomplete>
            </v-col>

            <v-col cols="6">
              <v-autocomplete
                v-model="money_year"
                :items="years"
                item-text="value"
                @change="getData"
                no-data-text="ไม่มีข้อมูล"
                item-value="value"
                label="ปี ค.ศ"
                outlined
                dense
                hide-details
              ></v-autocomplete>
            </v-col>
          </v-row>
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
        <template v-slot:[`item.money_month`]="{ item }">
          <h5>
            {{ $store.state.months_th[Number(item.Add_money.money_month - 1)] }}
          </h5>
        </template>
        <template v-slot:[`item.money_year`]="{ item }">
          <h5>
            {{ item.Add_money.money_year }}
          </h5>
        </template>

        <template v-slot:[`item.branch_money`]="{ item }">
          {{
            Number(item.branch_money).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.branch_before_money`]="{ item }">
          {{
            Number(item.branch_before_money).toLocaleString("th-TH", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </template>

        <template v-slot:[`item.created_at`]="{ item }">
          <h5>
            {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
          </h5>
        </template>
      </v-data-table>
    </v-card>

    <dialogAddmoney
      :dialog="dialogDialogAddmoney"
      :id="idDialogAddmoney"
      :action="actionDialogAddmoney"
      :formTitle="formTitleDialogAddmoney"
      @cancleItem="dialogDialogAddmoney = false"
    />
  </div>
</template>

<script>
import * as apiAdd_money from "@/Api/apiAdd_money";
import dialogAddmoney from "@/components/dialog/dialogAdd_money";

export default {
  components: {
    dialogAddmoney,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),

      idDialogAddmoney: "",
      formTitleDialogAddmoney: "Add",
      actionDialogAddmoney: "add",
      dialogDialogAddmoney: false,

      search: "",
      loading: false,
      headers: [
        {
          text: "ลำดับ",
          value: "no",
          align: "center",
        },
        {
          text: "วันที่",
          value: "day_no",
        },
        {
          text: "สาขา",
          value: "branch.branch_name",
        },
        {
          text: "เดือน",
          value: "money_month",
        },
        {
          text: "ปี",
          value: "money_year",
        },
        {
          text: "ยกยอด (บ.)",
          value: "branch_before_money",
        },
        {
          text: "เพิ่ม (บ.)",
          value: "branch_money",
        },
        {
          text: "โดย",
          value: "Add_money.user.first_name",
        },
        {
          text: "เพิ่มวันที่",
          value: "created_at",
        },
      ],
      data: [],
      years: [],
      branches: [],
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      money_month: null,
      money_year: null,
    };
  },
  mounted() {
    this.getYearCurrent();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async editItem(item) {
      this.formTitleDialogAddmoney = "ดูข้อมูล";
      this.dialogDialogAddmoney = true;
      this.idDialogAddmoney = item;
      this.actionDialogAddmoney = "edit";
    },
    async getYearCurrent() {
      var max = new Date().getFullYear();
      var min = max - 50;
      for (var i = max; i >= min; i--) {
        this.years.push({ value: i });
      }
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiAdd_money.destroy(id);
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

    async getData() {
      // console.log(this.money_month);
      // console.log(this.money_year);

      if (this.money_month != null && this.money_year != null) {
        this.loading = true;
        this.data = [];
        const data = new FormData();
        data.append("money_month", this.money_month);
        data.append("money_year", this.money_year);
        const response = await apiAdd_money.get_report_addmoney(data);
        // console.log(response);
        if (this.user_group_permission == 2) {
          let newArray = [];
          for (let index = 0; index < response.data.length; index++) {
            if (response.data[index].branch["id"] == this.branch_id) {
              newArray.push(response.data[index]);
            }
          }
          this.data = newArray;
        } else {
          this.data = await response.data;
        }
        this.loading = false;
      }
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
