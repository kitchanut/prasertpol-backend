<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 9 ||
      user_group_permission == 2
    "
  >
    <v-card class="d-flex">
      <v-row class="pa-2">
        <v-col cols="9"> </v-col>
        <v-col cols="3">
          <v-autocomplete
            v-model="user_id"
            :items="user_sale"
            no-data-text="ไม่มีข้อมูล"
            item-text="first_name"
            item-value="id"
            label="เลือกบุคลฝ่ายขาย:"
            outlined
            dense
            hide-details
          >
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-card>
    <br />
    <v-row>
      <v-col>
        <DoughnutChartDashSale :user_id="user_id" />
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col>
        <BarChartDashSale :user_id="user_id" />
      </v-col>
    </v-row>
    <br />
  </div>
</template>

<script>
import * as apiUsers from "@/Api/apiUsers";
import DoughnutChartDashSale from "@/components/DoughnutChartDash/DoughnutChartDashSale";
import BarChartDashSale from "@/components/BarChartDash/BarChartDashSale";

export default {
  components: {
    // Doughnut
    DoughnutChartDashSale,
    BarChartDashSale,
  },
  data() {
    return {
      user_id: null,
      user_sale: [],
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
    };
  },
  mounted() {
    this.getUserSale();
  },
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async getUserSale() {
      const response = await apiUsers.selectSale();
      if (this.user_group_permission == 2) {
        let array = [];
        for (let index = 0; index < response.data.length; index++) {
          if (this.branch_id == response.data[index].branch_id) {
            array.push(response.data[index]);
          }
        }
        // console.log(this.branch_id);
        this.user_sale = array;
      } else {
        this.user_sale = response.data;
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
