<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      width="230"
      :expand-on-hover="miniVariant"
    >
      <v-list>
        <div v-for="(item, i) in items" :key="i">
          <div v-if="item.level == 'all' || item.level.includes(userData.user_group_permission)">
            <v-list-item v-if="!item.children" :to="item.to" :color="colorChange">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>

            <v-list-group v-else v-model="item.active" :prepend-icon="item.icon" no-action color="primary">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="subItem in item.children" :key="subItem.title" :to="subItem.to" color="primary">
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="primary" dark height="55">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />
      <v-spacer />

      <v-btn icon @click="logout()">
        <v-icon center>mdi-logout</v-icon>
      </v-btn>

      <v-menu left bottom :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list width="250px">
          <v-list-item>
            <v-list-item-content style="padding: 6px 0">
              <v-list-item-title> ชื่อ: {{ userData.first_name }} {{ userData.last_name }} </v-list-item-title>

              <v-list-item-title> ตำแหน่ง: {{ userData.user_group_name }} </v-list-item-title>

              <v-list-item-subtitle> รหัส: {{ userData.user_code }} </v-list-item-subtitle>
              <v-list-item-subtitle> สาขา: {{ userData.branch_name }} </v-list-item-subtitle>
              <v-list-item-subtitle v-if="userData.user_team"> ทีม: {{ userData.user_team }} </v-list-item-subtitle>
              <br />

              <!-- <v-list-item-subtitle v-if="sub_groups.length > 0">
                <v-row class="mt-1">
                  <v-col cols="12" class="pb-0">
                    <v-select
                      v-model="sub_id"
                      :items="sub_groups"
                      item-value="id"
                      label="เปลื่ยนตำแหน่ง"
                      single-line
                      outlined
                      dense
                      no-data-text="ไม่มีข้อมูล"
                      hide-details
                      @change="change_sub"
                    >
                      <template slot="selection" slot-scope="{ item }">
                        {{ item.branches.branch_name }} ({{ item.user_groups.user_group_name }})
                      </template>

                      <template slot="item" slot-scope="{ item }">
                        {{ item.branches.branch_name }} ({{ item.user_groups.user_group_name }})
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="12" class="pt-1">
                    <v-btn block small outlined color="primary" class="pt-5 pb-5" @click="groupOrg"
                      >กลับตำแหน่งหลัก</v-btn
                    >
                  </v-col>
                </v-row>
              </v-list-item-subtitle> -->

              <v-row v-if="userData.user_group_permission == 2 || userData.user_group_permission == 3">
                <v-col>
                  <v-btn block small color="primary" class="mt-1 pt-5 pb-5" to="/mobile/work">ใช้งานบนมือถือ</v-btn>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <div class="pa-3">
        <nuxt />
      </div>
    </v-main>

    <v-dialog v-model="$nuxt.isOffline" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text class="pt-2">
          กรุณาตรวจสอบการเชื่อมต่ออินเตอร์เน็ต
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      serverUrl: process.env.serverUrl + "/",
      // sub_groups: [],
      sub_id: this.$auth.$storage.getLocalStorage("userData-sub_id"),
      clipped: true,
      drawer: true,
      fixed: false,
      example: false,
      colorChange: "primary",
      items: [
        {
          icon: "mdi-chart-areaspline",
          title: "ภาพรวม",
          to: "/index_sale",
          level: [-1, 2, 3, 9, 10, 11],
          listActive: "",
          active: false,
          classActive: "",
        },
        {
          icon: "mdi-book-clock",
          title: "ประวัติ",
          to: "/request/log",
          level: [-1, 2, 3, 9, 10, 11],
          listActive: "",
          active: false,
          classActive: "",
        },

        {
          icon: "mdi-book-edit",
          title: "รวมงาน",
          to: "/work/works",
          level: [-1, 9, 10, 11],
          listActive: "",
          active: false,
          classActive: "",
        },

        {
          icon: "mdi-book-edit",
          title: "รวมงาน",
          level: [2, 3, 12],
          listActive: "",
          classActive: "",
          to: "/work/works",
          active: false,
        },
        {
          icon: "mdi-book-heart",
          title: "ตามงาน",
          level: [-1, 9, 10, 11],
          listActive: "",
          classActive: "",
          to: "/work/follow",
          active: false,
        },

        {
          icon: "mdi-currency-usd",
          title: "งวดรถ",
          level: [-1, 2, 3],
          listActive: "",
          classActive: "",
          to: "/installments",
          active: false,
        },

        {
          icon: "mdi-account-voice",
          title: "ต่อรอง",
          level: [-1, 2, 3],
          listActive: "",
          classActive: "",
          to: "/negotiations",
          active: false,
        },
        {
          icon: "mdi-file",
          title: "ใบกำกับ",
          level: [-1, 10],
          listActive: "",
          classActive: "",
          to: "/check/receive_money",
          active: false,
        },

        {
          icon: "mdi-car-multiple",
          title: "คลังรถยนต์",
          to: "",
          level: [-1, 2, 3, 8, 9, 10, 11, 12, 13],
          listActive: "",
          classActive: "",
          active: false,
          to: "/stock/stock_cars",
        },

        {
          icon: "mdi-upload",
          title: "ค่าใช้จ่าย",
          to: "",
          level: [-1, 11],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            { title: "ค่าใช้จ่ายตัวรถ", to: "/withdraw/payment_car" },
            // { title: "เพิ่มเงินสาขา", to: "/settings/branches" },
            // { title: "เพิ่มค่าใช้จ่ายสาขา", to: "/withdraw/withdraw_money" },
            // { title: "ค่าคอมมิชชั่น", to: "/commission/commission" },
            // { title: "ราคาซ่อม (อู่ใน)", to: "/settings/repair_prices" },
            // { title: "ราคาซ่อม (อู่นอก)", to: "/settings/repair_prices_outdoor" },
          ],
        },
        {
          icon: "mdi-download",
          title: "รายรับ",
          to: "",
          level: [-1, 11],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            { title: "รายรับทั้งหมด", to: "/incomes/income" },
            { title: "ใบสำคัญรับเงิน", to: "/incomes/financial" },
          ],
        },

        {
          icon: "mdi-currency-usd",
          title: "ราคากลาง",
          to: "/settings/middle_price",
          level: [-1, 9],
          listActive: "",
          classActive: "",
          active: false,
        },
        {
          icon: "mdi-car-clock",
          title: "เก็บราคา",
          to: "/record/price_record",
          level: [-1, 9],
          listActive: "",
          classActive: "",
          active: false,
        },
        {
          icon: "mdi-text-to-speech",
          title: "โปรโมชั่น",
          to: "",
          level: [13],
          listActive: "",
          classActive: "",
          active: false,
          to: "/settings/promotion",
        },
        {
          icon: "mdi-car-cog",
          title: "งานซ่อม",
          to: "",
          level: [-1, 8],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            {
              title: "งานของช่าง/บิ้ว",
              to: "/work/work_Technician",
            },
            {
              title: "งานซ่อมภายนอก",
              to: "/work/work_Technician_pathner",
            },
          ],
        },
        {
          icon: "mdi-account",
          title: "ลูกค้า",
          to: "",
          level: [-1, 2, 3],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            {
              title: "ข้อมูลลูกค้าเยี่ยมชม",
              to: "/customer/customerVisits",
            },
            {
              title: "ข้อมูลลูกค้าเบื้องต้น",
              to: "/customer/customers",
            },
            {
              title: "ข้อมูลลูกค้ารายบุคคล",
              to: "/customer/customerDetails",
            },
          ],
        },

        {
          icon: "mdi-cash-multiple",
          title: "ค่าคอมมิชชั่น",
          to: "/commission/commission",
          level: [9],
          listActive: "",
          classActive: "",
          active: false,
        },
        {
          icon: "mdi-file-outline",
          title: "รายงาน",
          to: "",
          level: [-1, 9],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            { title: "ซื้อรถ", to: "/reports/report_purchase_car" },
            { title: "ขายรถ", to: "/reports/report_sale_car" },
            { title: "จอง", to: "/reports/report_booking" },
            { title: "ยกเลิก", to: "/reports/report_work_cancle" },
            { title: "จองซ้อนกัน", to: "/reports/report_booking_duplicate" },
            { title: "คอมมิชชัน", to: "/reports/report_commission" },
            { title: "รายรับ", to: "/reports/report_income" },
            { title: "รายจ่าย", to: "/reports/report_expense" },
            { title: "กำไร/ขาดทุน", to: "/reports/report_profit" },
            { title: "แจ้งรับเงิน", to: "/reports/report_request_receive_money" },
            { title: "แจ้งเบิกเงิน", to: "/reports/report_request_withdraw_money" },

            // { title: "งานซื้อขายรถ", to: "/reports/report_workings" },
            // { title: "ยกเลิกการจอง", to: "/reports/report_cancel_workings" },
            // { title: "ซ่อม (อู่ใน)", to: "/reports/report_repairs" },
            // { title: "ซ่อม (อู่นอก)", to: "/reports/repair_prices_outdoor" },

            // {
            //   title: "สั่งซื้ออะไหล่",
            //   to: "/reports/report_purchase_POparts",
            // },
            // { title: "อะไหล่", to: "/reports/report_stock_parts" },
            // { title: "รถยนต์", to: "/reports/report_cars" },
            // {
            //   title: "เพิ่มเงินให้สาขา",
            //   to: "/reports/report_add_moneys",
            // },
            // {
            //   title: "ค่าใช้จ่ายของสาขา",
            //   to: "/reports/report_withdraw_money",
            // },
            // {
            //   title: "รายรับตัวรถ",
            //   to: "/reports/report_income",
            // },
          ],
        },

        {
          icon: "mdi-file-outline",
          title: "รายงาน",
          to: "",
          level: [13],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            { title: "จอง", to: "/reports/report_booking" },
            { title: "ขายรถ", to: "/reports/report_sale_car" },
          ],
        },

        {
          icon: "mdi-file-outline",
          title: "รายงาน",
          to: "",
          level: [8],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            { title: "การซื้อรถ", to: "/reports/report_purchase_car" },
            { title: "การขายรถ", to: "/reports/report_sale_car" },
          ],
        },
        {
          icon: "mdi-file-outline",
          title: "รายงาน",
          to: "",
          level: [10],
          listActive: "",
          classActive: "",
          active: false,
          children: [],
        },
        {
          icon: "mdi-file-outline",
          title: "รายงาน",
          to: "",
          level: [11],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            {
              title: "ค่าใช้จ่ายของสาขา",
              to: "/reports/report_withdraw_money",
            },
            {
              title: "รายรับตัวรถ",
              to: "/reports/report_income",
            },
            // { title: "ซ่อม (อู่ใน)", to: "/reports/report_repairs" },
          ],
        },
        {
          icon: "mdi-cog",
          title: "ตั้งค่า",
          level: [-1],
          listActive: "",
          classActive: "",
          to: "",
          active: false,
          children: [
            { title: "โปรโมชั่น", to: "/settings/promotion" },
            { title: "ช่วงดาวน์", to: "/settings/amount_down" },
            { title: "ช่วงผ่อน", to: "/settings/amount_slacken" },
            { title: "สีของรถ", to: "/settings/colors" },
            { title: "ชนิดเชื้อเพลิง", to: "/settings/fuels" },
            { title: "คู่ค้า (ธนาคาร)", to: "/settings/partner_bank" },
            {
              title: "คู่ค้าสาขา (ธนาคาร)",
              to: "/settings/partner_bank_branch",
            },
            { title: "คู่ค้า (รถยนต์)", to: "/settings/partner_car" },
            { title: "คู่ค้า (อะไหล่)", to: "/settings/partner_company" },
            { title: "คู่ค้า (อู่รถ)", to: "/settings/partner_technician" },
            { title: "ประเภทอะไหล่", to: "/settings/car_part_types" },
            { title: "หน่วย", to: "/settings/units" },
            { title: "อะไหล่", to: "/settings/car_parts" },
            { title: "รายการซ่อม", to: "/settings/repair_lists" },
            { title: "ประเภทรถ", to: "/settings/car_types" },
            { title: "ยี่ห้อรถ", to: "/settings/car_models" },
            { title: "รุ่นรถ", to: "/settings/car_series" },
            { title: "รุ่นย่อยรถ", to: "/settings/car_serie_subs" },
            { title: "รถเหลือน้อย", to: "/settings/low_cars" },

            { title: "ลิฟท์ซ่อมรถ", to: "/settings/car_lift" },
            { title: "ทีมสาขา", to: "/settings/branch_teams" },
            { title: "สาขาย่อย", to: "/settings/branches" },
            { title: "ทีมเซล", to: "/settings/user_teams" },
            { title: "ตำแหน่ง", to: "/settings/user_groups" },
            { title: "ผู้ใช้งานไลน์", to: "/settings/user_line" },
            { title: "ผู้ใช้งานในระบบ", to: "/settings/users" },
          ],
        },
        {
          icon: "mdi-cog",
          title: "ตั้งค่า",
          to: "",
          level: [2],
          listActive: "",
          classActive: "",
          active: false,
          children: [
            // { title: "ทีมเซล", to: "/settings/user_teams" },
            { title: "ผู้ใช้งานในระบบ", to: "/settings/users" },
          ],
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: `ประเสริฐผลยูสด์คาร์`,
      userData: {
        first_name: "",
        last_name: "",
        user_group_name: "",
        branch_name: "",
        user_group_permission: "",
        user_team: "",
        user_code: "",
      },
    };
  },
  computed: {
    sub_groups() {
      if (this.$auth.$storage.getLocalStorage("userData-sub_group")) {
        return this.$auth.$storage.getLocalStorage("userData-sub_group");
      } else {
        return [];
      }
    },
  },
  async mounted() {
    await this.getlocalUser();
    if (this.userData.user_group_permission == 3) {
      this.title = `ประเสริฐผลยูสด์คาร์ [${this.$auth.$storage.getLocalStorage("userData-branch_name")}]`;
    } else {
      this.title = `ประเสริฐผลยูสด์คาร์ [${this.$auth.$storage.getLocalStorage("userDataOrg-branch_team_name")}]`;
    }

    this.checkRoute();
  },
  methods: {
    async groupOrg() {
      await this.$auth.$storage.setLocalStorage("userData-sub_id", null);
      await this.$auth.$storage.setLocalStorage(
        "userData-user_team_id",
        this.$auth.$storage.getLocalStorage("userDataOrg-user_team_id")
      );
      await this.$auth.$storage.setLocalStorage(
        "userData-user_group_permission",
        this.$auth.$storage.getLocalStorage("userDataOrg-user_group_permission")
      );
      await this.$auth.$storage.setLocalStorage(
        "userData-user_group_name",
        this.$auth.$storage.getLocalStorage("userDataOrg-user_group_name")
      );
      await this.$auth.$storage.setLocalStorage(
        "userData-branch_id",
        this.$auth.$storage.getLocalStorage("userDataOrg-branch_id")
      );
      await this.$auth.$storage.setLocalStorage(
        "userData-branch_name",
        this.$auth.$storage.getLocalStorage("userDataOrg-branch_name")
      );
      await this.$auth.$storage.setLocalStorage(
        "userData-user_team",
        this.$auth.$storage.getLocalStorage("userDataOrg-user_team")
      );

      await this.goToRoute(this.$auth.$storage.getLocalStorage("userDataOrg-user_group_permission"));
    },
    async change_sub(id) {
      for (let index = 0; index < this.sub_groups.length; index++) {
        if (this.sub_groups[index].id == id) {
          // console.log(this.sub_groups[index]);
          this.$nextTick(async () => {
            // this.$auth.$storage.getLocalStorage("userData-sub_id"),
            await this.$auth.$storage.setLocalStorage("userData-sub_id", id);
            await this.$auth.$storage.setLocalStorage("userData-user_team_id", this.sub_groups[index].user_team_id);
            await this.$auth.$storage.setLocalStorage(
              "userData-user_group_permission",
              this.sub_groups[index].user_groups.user_group_permission
            );
            await this.$auth.$storage.setLocalStorage(
              "userData-user_group_name",
              this.sub_groups[index].user_groups.user_group_name
            );
            await this.$auth.$storage.setLocalStorage("userData-branch_id", this.sub_groups[index].branch_id);
            await this.$auth.$storage.setLocalStorage(
              "userData-branch_name",
              this.sub_groups[index].branches.branch_name
            );
            if (this.sub_groups[index].user_teams) {
              await this.$auth.$storage.setLocalStorage(
                "userData-user_team",
                this.sub_groups[index].user_teams.team_name
              );
            }

            await this.goToRoute(this.sub_groups[index].user_groups.user_group_permission);
          });
        }
      }
      // this.$router.app.refresh();
      // this.$router.push("/");
      // this.sub_id = id;
    },
    async goToRoute(user_group_permission) {
      this.$nextTick(async () => {
        if (user_group_permission == -1) {
          await this.$router.push("/");
        } else if (user_group_permission == 2) {
          await this.$router.push("/index_sale");
        } else if (user_group_permission == 3) {
          await this.$router.push("/work/works");
        } else if (user_group_permission == 4) {
          await this.$router.push("/work/work_Technician");
        } else if (user_group_permission == 5) {
          await this.$router.push("/work/work_Technician");
        } else if (user_group_permission == 6) {
          await this.$router.push("/purchases/purchase_parts");
        } else if (user_group_permission == 7) {
          await this.$router.push("/stock/stock_parts");
        } else if (user_group_permission == 8) {
          await this.$router.push("/stock/stock_cars");
        } else if (user_group_permission == 9) {
          await this.$router.push("/");
        } else if (user_group_permission == 10) {
          await this.$router.push("/index_sale");
        } else if (user_group_permission == 11) {
          await this.$router.push("/work/works");
        } else if (user_group_permission == 12) {
          await this.$router.push("/work/works");
        } else if (user_group_permission == 13) {
          await this.$router.push("settings/promotion");
        } else {
          console.log("error", decoded);
        }
      });
      // console.log(user_group_permission);
      location.reload();
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    async logout() {
      var keys = Object.keys(localStorage),
        i = keys.length;
      while (i--) {
        localStorage.removeItem(keys[i]);
      }
      this.$nextTick(() => {
        $nuxt.$auth.logout();
      });
    },
    checkRoute() {
      const self = this;
      this.items.map(function (item) {
        var res = self.$route.path.split("/");
        if (item.listActive.includes("/" + res[1] + "/" + res[2] + "/")) {
          item.classActive = "v-list-item--active";
        } else {
          item.classActive = "";
        }
        if (item.children) {
          const self2 = self;
          item.active = false;
          item.children.map(function (children) {
            if (self2.$route.path == children.to) {
              item.active = true;
            }
          });
        }
      });
    },
    async getlocalUser() {
      this.userData.first_name = await this.$auth.$storage.getLocalStorage("userData-first_name");
      this.userData.user_code = await this.$auth.$storage.getLocalStorage("userData-user_code");
      this.userData.last_name = await this.$auth.$storage.getLocalStorage("userData-last_name");
      this.userData.user_group_name = await this.$auth.$storage.getLocalStorage("userData-user_group_name");
      if (this.userData.user_group_permission == 3) {
        this.userData.branch_name = await this.$auth.$storage.getLocalStorage("userData-branch_name");
      } else {
        this.userData.branch_name = this.$auth.$storage.getLocalStorage("userDataOrg-branch_team_name");
      }

      this.userData.user_team = await this.$auth.$storage.getLocalStorage("userData-user_team");
      this.userData.user_group_permission = await this.$auth.$storage.getLocalStorage("userData-user_group_permission");
    },
    onMutate() {
      let height = 0;
      const toolbar = this.$refs.toolbar;
      if (toolbar) {
        height = `${toolbar.$el.offsetHeight}px`;
      }
      document.documentElement.style.setProperty("--toolbarHeight", height);
    },
  },

  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>
<style scoped></style>
