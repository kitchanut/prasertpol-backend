<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 9 ||
      user_group_permission == 2 ||
      user_group_permission == 3 ||
      user_group_permission == 10 ||
      user_group_permission == 11
    "
  >
    <v-card outlined>
      <v-tabs
        v-if="user_group_permission != 2 && user_group_permission != 3"
        v-model="tab"
        background-color="#eee"
        color="black"
      >
        <v-tab>สถานะงาน</v-tab>
        <v-tab>การจอง</v-tab>
        <v-tab>ยอดซื้อขาย</v-tab>
        <v-tab>รุ่นรถขายดี</v-tab>
        <v-tab>คลังรถยนต์</v-tab>
        <v-tab>ภาษี</v-tab>
        <v-tab>ประกัน</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <ComWorkStatus />
        </v-tab-item>
        <v-tab-item>
          <BarChartDashSaleByBranch />
        </v-tab-item>
        <v-tab-item>
          <BarChartDashCar :branch_id="branch_id" />
        </v-tab-item>
        <v-tab-item>
          <BarChartDashTopCarSerie />
        </v-tab-item>
        <v-tab-item>
          <ComInventoryCar />
        </v-tab-item>
        <v-tab-item>
          <ComRegis />
        </v-tab-item>
        <v-tab-item>
          <ComInsurances />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <dialogNew />
  </div>
</template>

<script>
import * as apiBranches from "@/Api/apiBranches";
import * as apiBranch_teams from "@/Api/apiBranch_teams";

//
import ComWorkStatus from "@/components/Dashboard/ComWorkStatus.vue";
import ComInventoryCar from "@/components/Dashboard/ComInventoryCar.vue";
import ComRegis from "@/components/Dashboard/ComRegis.vue";
import ComInsurances from "@/components/Dashboard/ComInsurances.vue";

// Bar chart
import BarChartDashCar from "@/components/BarChartDash/BarChartDashCar";
import BarChartDashBranch from "@/components/BarChartDash/BarChartDashBranch";
import BarChartDashTopCarSerie from "@/components/BarChartDash/BarChartDashTopCarSerie";
import BarChartDashVisit from "@/components/BarChartDash/BarChartDashVisit";
import BarChartDashVisitCarType from "@/components/BarChartDash/BarChartDashVisitCarType";
import BarChartDashVisitCarModel from "@/components/BarChartDash/BarChartDashVisitCarModel";
import BarChartDashVisitCarSerie from "@/components/BarChartDash/BarChartDashVisitCarSerie";
import BarChartDashVisitCarSlacken from "@/components/BarChartDash/BarChartDashVisitCarSlacken";
import BarChartDashVisitCarDown from "@/components/BarChartDash/BarChartDashVisitCarDown";
import BarChartDashSaleByBranch from "@/components/BarChartDash/BarChartDashSaleByBranch";

// Doughnut chart
import DoughnutChartDashBranchCar from "@/components/DoughnutChartDash/DoughnutChartDashBranchCar";
import dialogNew from "@/components/dialog/dialogLowCars";

export default {
  components: {
    //Main
    ComWorkStatus,
    ComInventoryCar,
    ComRegis,
    ComInsurances,
    // Bar
    BarChartDashCar,
    BarChartDashBranch,
    BarChartDashTopCarSerie,
    BarChartDashVisit,
    BarChartDashVisitCarType,
    BarChartDashVisitCarModel,
    BarChartDashVisitCarSerie,
    BarChartDashVisitCarSlacken,
    BarChartDashVisitCarDown,
    BarChartDashSaleByBranch,
    // Doughnut
    DoughnutChartDashBranchCar,
    // alert
    dialogNew,
  },
  data() {
    return {
      tab: 0,
      branch_teams: [],
      branch_id:
        this.$auth.$storage.getLocalStorage("userData-user_group_permission") == "-1"
          ? 0
          : this.$auth.$storage.getLocalStorage("userData-branch_id"),
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      branch_team_id: 0,
      selectSee: 0,
    };
  },
  async mounted() {
    this.$nextTick(async () => {
      if (this.user_group_permission == -1) {
        await this.getBranch_teams();
      } else if (this.user_group_permission == 2) {
        await this.$router.push("/index_sale");
      } else if (this.user_group_permission == 3) {
        await this.$router.push("/index_sale");
      } else if (this.user_group_permission == 4) {
        await this.$router.push("/work/work_Technician");
      } else if (this.user_group_permission == 5) {
        await this.$router.push("/work/work_Technician");
      } else if (this.user_group_permission == 6) {
        await this.$router.push("/purchases/purchase_parts");
      } else if (this.user_group_permission == 7) {
        await this.$router.push("/stock/stock_parts");
      } else if (this.user_group_permission == 8) {
        await this.$router.push("/stock/stock_cars");
      } else if (this.user_group_permission == 9) {
        await this.getBranch_teams();
      } else if (this.user_group_permission == 10) {
        await this.$router.push("/index_sale");
      } else if (this.user_group_permission == 11) {
        await this.$router.push("/work/works");
      } else if (this.user_group_permission == 12) {
        await this.$router.push("/work/works");
      } else if (this.user_group_permission == 13) {
        await this.$router.push("settings/promotion");
      } else {
        // console.log("error", decoded);
      }
    });
  },
  computed: {},
  methods: {
    async getBranch_teams() {
      const response = await apiBranch_teams.select();
      this.branch_teams = response.data;
      this.branch_teams.unshift({
        id: -1,
        branch_team_name: "ทั้งหมด",
      });
    },
  },
  watch: {},
};
</script>

<style></style>
