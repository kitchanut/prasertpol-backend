<template>
  <v-app light>
    <v-app-bar app :dark="dark" :flat="flat" :color="color">
      <v-container class="d-flex flex-row">
        <router-link to="/" style="text-decoration: none; color: inherit">
          <v-row align="center" justify="start" class="pa-2">
            <v-avatar size="80" class="my-logo mr-3" :color="color">
              <img :src="require('@/assets/images/prasertpol.png')" alt="parsetpol" />
            </v-avatar>
            <v-toolbar-title
              v-if="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'"
              v-text="''"
            ></v-toolbar-title>
            <v-toolbar-title v-else v-text="title" />
          </v-row>
        </router-link>
      </v-container>
    </v-app-bar>

    <v-main style="margin-top: 10px; margin-bottom: 70px">
      <!-- <v-container> -->
      <div>
        <nuxt />
      </div>
      <!-- </v-container> -->
    </v-main>

    <v-bottom-navigation fixed align="center" justify="start">
      <v-avatar
        v-if="$nuxt.$route.path == '/mobile/work'"
        size="80"
        class="my-mainmanu"
        :color="theme"
        style="margin-top: -13px"
        dark
      >
        <v-btn style="height: 100px; background-color: transparent" to="/mobile/work">
          <span style="color: #ffffff">รวมงาน</span>

          <v-icon style="color: #ffffff">mdi-book-edit</v-icon>
        </v-btn>
      </v-avatar>

      <v-btn v-else class="pa-0" to="/mobile/work" style="height: auto; background-color: transparent">
        <span>รวมงาน</span>

        <v-icon>mdi-book-edit</v-icon>
      </v-btn>

      <v-avatar
        v-if="$nuxt.$route.path == '/mobile/stock'"
        size="80"
        class="my-mainmanu"
        :color="theme"
        style="margin-top: -13px"
        dark
      >
        <v-btn style="height: 100px; background-color: transparent" to="/mobile/stock">
          <span style="color: #ffffff">คลังรถ</span>

          <v-icon style="color: #ffffff">mdi-car-multiple</v-icon>
        </v-btn>
      </v-avatar>

      <v-btn v-else class="pa-0" to="/mobile/stock" style="height: auto; background-color: transparent">
        <span>คลังรถ</span>

        <v-icon>mdi-car-multiple</v-icon>
      </v-btn>

      <v-avatar
        v-if="$nuxt.$route.path == '/mobile/customerVisits'"
        size="80"
        class="my-mainmanu"
        :color="theme"
        style="margin-top: -13px"
        dark
      >
        <v-btn style="height: 100px; background-color: transparent" to="/mobile/customerVisits">
          <span style="color: #ffffff">เยี่ยมชม</span>

          <v-icon style="color: #ffffff">mdi-store</v-icon>
        </v-btn>
      </v-avatar>

      <v-btn v-else class="pa-0" to="/mobile/customerVisits" style="height: auto; background-color: transparent">
        <span>เยี่ยมชม</span>

        <v-icon>mdi-store</v-icon>
      </v-btn>

      <v-avatar
        v-if="$nuxt.$route.path == '/mobile/customers' || $nuxt.$route.path == '/mobile/customerDetails'"
        size="80"
        class="my-mainmanu"
        :color="theme"
        style="margin-top: -13px"
        dark
      >
        <v-menu top :offset-y="true">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="pa-0" v-bind="attrs" v-on="on" style="background-color: transparent">
              <span style="color: #ffffff">ลูกค้า</span>

              <v-icon style="color: #ffffff">mdi-account-group</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item to="/mobile/customers">
              <v-list-item-title>เบื้องต้น</v-list-item-title>
            </v-list-item>
            <v-list-item to="/mobile/customerDetails">
              <v-list-item-title>ลูกค้า</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-avatar>

      <v-menu v-else top :offset-y="true">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="pa-0" v-bind="attrs" v-on="on" style="height: auto; background-color: transparent">
            <span>ลูกค้า</span>

            <v-icon>mdi-account-group</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/mobile/customers">
            <v-list-item-title>เบื้องต้น</v-list-item-title>
          </v-list-item>
          <v-list-item to="/mobile/customerDetails">
            <v-list-item-title>ลูกค้า</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn class="pa-0" to="/work/works" style="height: auto; background-color: transparent">
        <span>คอม</span>

        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <!-- <v-btn
        @click.stop="drawer = !drawer"
        class="pa-0"
      >
        <span>เมนู</span>

        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-bottom-navigation>

    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} การบริหารจัดการแบบมีส่วนร่วมและพัฒนาต้นแบบวิสาหกิจชุมชนด้วยเทคโนโลยีทางการเงิน(Fintech) กรณีศึกษา: วิสาหกิจชุมชนลานมันหนองแวงสักหลัก ตำบลท่าพระ จังหวัดขอนแก่น</span>
    </v-footer> -->
  </v-app>
</template>

<script>
// import dialogLoader from '@/components/dialog-loader'

export default {
  auth: false,
  components: {
    // dialogLoader,
  },
  data() {
    return {
      theme: "red",
      serverUrl: process.env.serverUrl,
      items: [
        // {
        //   icon: 'mdi-apps',
        //   title: 'หน้าแรก',
        //   to: '/m/m-dashboard',
        //   level: 'trader',
        //   listActive: '',
        //   active: false,
        // },
      ],
      dark: true,
      color: "red",
      flat: false,
      title: "ประเสริฐผลยูสด์คาร์",
    };
  },
  mounted() {
    // this.dialogLoader = true
  },
  methods: {
    async logout() {
      // $nuxt.$auth.logout();
      // console.log(this.$auth.$storage.getLocalStorage);
      var keys = Object.keys(localStorage),
        i = keys.length;

      while (i--) {
        localStorage.removeItem(keys[i]);
      }
      this.$nextTick(() => {
        $nuxt.$auth.logout();
      });
      // console.log(values);
    },
  },

  watch: {},
};
</script>

<style scoped>
html {
  overflow-y: auto;
}

.my-mainmanu {
  /* border: 5px solid #f44336; */
  /* border-radius: 50px; */
  z-index: 1000;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>

<style>
.v-item-group.v-bottom-navigation .v-btn .v-btn__content {
  flex-direction: column-reverse;
  height: 2rem !important;
}
.v-item-group.v-bottom-navigation .v-btn {
  min-width: 74px;
}

.my-logo {
  border: 5px solid #f44336;
  z-index: -100;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>
