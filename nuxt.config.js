import colors from "vuetify/es5/util/colors";

// const serverUrl = "http://localhost/server";
// Laravel
const serverUrl =
  process.env.NODE_ENV !== "production" ? "http://localhost/psnkp-server" : "https://www.psnkp.co.th/server";

const serverUrlShop = "https://www.psnkp.co.th/";
const serverKey = "base64:qVDh/JchcJ9ZyjLO58QW0pszBCTo5lfozWG/g0bxynQ=";

import path from "path";
import fs from "fs";

export default {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "cert.pem")),
    },
  },
  router: {
    base: "/backend/",
    middleware: ["auth"],
  },
  vue: {
    config: {
      productionTip: true,
      devtools: false,
    },
  },
  generate: {
    dir: "backend",
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: "spa",
  ssr: false,

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "%s",
    title: "ประเสริฐผลยูสด์คาร์",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
      },
      { name: "apple-mobile-web-app-title", content: "prasertpol" },
      { name: "theme-color", content: "#1976D2" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript",
      },
      {
        // src: "https://static.line-scdn.net/liff/edge/versions/2.5.0/sdk.js"
        src: "https://static.line-scdn.net/liff/edge/2/sdk.js",
      },
    ],
  },

  pwa: {
    meta: {},
  },
  /*
   ** Global CSS
   */
  // css: ["~/assets/styles.css", "~/assets/fonts/Kanit.css"],
  // css: ["~/assets/styles.css", "~/assets/fonts/Tavira.css"],
  css: ["~/assets/styles.css"],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~/plugins/vue-gallery.client.js", "~/plugins/v-viewer.js", "~/plugins/vue-directives.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/vuetify",
    // Simple usage
    "@nuxtjs/moment",
  ],
  moment: {
    /* module options */
    locales: ["th"],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    "vue-sweetalert2/nuxt",
  ],
  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: serverUrl + "/api/auth/login",
            method: "post",
            propertyName: "access_token",
          },
          logout: {
            url: serverUrl + "/api/auth/logout",
            method: "post",
          },
          user: {
            url: serverUrl + "/api/me",
            method: "get",
            propertyName: "me",
          },
        },
      },
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      light: true,
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  env: {
    serverUrlShop: serverUrlShop,
    serverUrl: serverUrl,
    serverKey: serverKey,
    PrasertpolName: "ประเสริฐผลยูสด์คาร์",
    liff: {
      booking: process.env.NODE_ENV !== "production" ? "1657384096-GWgpdE3a" : "1657381597-P5naXw27",
      appointment: process.env.NODE_ENV !== "production" ? "1657384096-gxbqpRnv" : "1657381597-nXbA63Ko",
      signDeposit: process.env.NODE_ENV !== "production" ? "1657384096-MdR4XK3r" : "1657381597-y2JZRxAN",
      sign: process.env.NODE_ENV !== "production" ? "1657384096-qYDbnZkM" : "1657381597-2WGVzXPY",
      bankApprove: process.env.NODE_ENV !== "production" ? "1657384096-2lkL6Vge" : "1657381597-Mb2n0J3x",
      release: process.env.NODE_ENV !== "production" ? "1657384096-WKnNgq34" : "1657381597-lye41MpW",
      changeCar: process.env.NODE_ENV !== "production" ? "1657384096-lGJaNowL" : "1657381597-V9ezjWZ8",
      changeCustomer: process.env.NODE_ENV !== "production" ? "1657384096-REEbzOj3" : "1657381597-4mPBbdwv",
      update: process.env.NODE_ENV !== "production" ? "1657384096-rW1Mq06g" : "1657381597-POvX0Vk7",
      cancle: process.env.NODE_ENV !== "production" ? "1657384096-Krrqg0yR" : "1657381597-naP8jylD",
      money: process.env.NODE_ENV !== "production" ? "1657384096-pgzxEX4P" : "1657381597-k9PoxeG6",
      moneyWithdraw: process.env.NODE_ENV !== "production" ? "1657384096-o8ZPOVaL" : "1657381597-qaA3WErN",
      shareRequest: process.env.NODE_ENV !== "production" ? "1657384096-wdnbjaQk" : "1657381597-Kla8617N",
      shareImage: process.env.NODE_ENV !== "production" ? "1657384096-eEmk7wZ5" : "1657381597-rgo89b63",
      login: process.env.NODE_ENV !== "production" ? "1657384096-p9exyzYM" : "1657381597-y0ebAoMG",
    },
  },
};
