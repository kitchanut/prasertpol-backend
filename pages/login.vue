<template>
  <v-container fill-height fluid>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="4">
        <v-img contain aspect-ratio="1.3" :src="require('~/assets/images/prasertpol.png')"> </v-img>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card-title class="justify-center"> กรุณาลงชื่อเพื่อเข้าใช้งาน </v-card-title>

        <v-card-text class="text--primary mt-5">
          <v-form @submit.prevent="onClick()" autocomplete="on">
            <v-text-field
              prepend-inner-icon="mdi-account"
              single-line
              type="text"
              placeholder="ชื่อผู้ใช้งาน"
              v-model="user.email"
              id="user.email"
              name="user.email"
              dense
              outlined
              :rules="[(value) => !!value || 'กรุณาใส่ชื่อผู้ใช้งาน']"
            ></v-text-field>
            <v-text-field
              prepend-inner-icon="mdi-key-variant"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              single-line
              :type="show1 ? 'text' : 'password'"
              placeholder="รหัสผ่าน"
              v-model="user.password"
              id="user.password"
              name="user.password"
              dense
              outlined
              :rules="[(value) => !!value || 'กรุณาใส่รหัสผ่าน']"
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn block type="submit" color="primary" class="pt-5 pb-5" :loading="loading" :disabled="loading"
              >เข้าสู่ระบบ</v-btn
            >
          </v-form>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as apiBranches from "@/Api/apiBranches";
import * as apiBranch_teams from "@/Api/apiBranch_teams";

import * as customAlart from "@/customJS/customAlart";
import jwt_decode from "jwt-decode";

export default {
  layout: "full",
  name: "Login",
  auth: "guest",
  beforeCreate() {
    this.$vuetify.theme.dark = false;
  },
  data() {
    return {
      show1: false,
      user: {
        email: "",
        password: "",
        type: "web",
      },
      loading: false,
    };
  },
  methods: {
    async onClick() {
      this.loading = true;
      var keys = Object.keys(localStorage),
        i = keys.length;

      while (i--) {
        localStorage.removeItem(keys[i]);
      }

      try {
        let response = await this.$auth.loginWith("local", {
          headers: {
            Accept: "application/json",
          },
          data: this.user,
        });
        if (response.status == 200) {
          var decoded = await jwt_decode(response.data.access_token);

          this.$auth.$storage.setLocalStorage("userData-sub_group", decoded.sub_group);
          this.$auth.$storage.setLocalStorage("userData-user_code", decoded.user_code.user_code);
          this.$auth.$storage.setLocalStorage("userData-id", decoded.sub);
          this.$auth.$storage.setLocalStorage("userData-first_name", decoded.first_name);
          this.$auth.$storage.setLocalStorage("userData-last_name", decoded.last_name);

          this.$auth.$storage.setLocalStorage("userData-user_team", decoded.user_team.user_team);
          this.$auth.$storage.setLocalStorage("userData-user_team_id", decoded.user_team_id);
          this.$auth.$storage.setLocalStorage(
            "userData-user_group_permission",
            decoded.user_group_permission.user_group_permission
          );

          this.$auth.$storage.setLocalStorage("dialog-low-cars", true);
          this.$auth.$storage.setLocalStorage("userData-user_group_name", decoded.user_group_name.user_group_name);
          this.$auth.$storage.setLocalStorage("userData-branch_id", decoded.branch_id.branch_id);
          this.$auth.$storage.setLocalStorage("userData-branch_name", decoded.branch_name.branch_name);

          this.$auth.$storage.setLocalStorage("userDataOrg-user_team", decoded.user_team.user_team);
          this.$auth.$storage.setLocalStorage("userDataOrg-user_team_id", decoded.user_team_id);
          this.$auth.$storage.setLocalStorage(
            "userDataOrg-user_group_permission",
            decoded.user_group_permission.user_group_permission
          );
          this.$auth.$storage.setLocalStorage("userDataOrg-user_group_name", decoded.user_group_name.user_group_name);
          this.$auth.$storage.setLocalStorage("userDataOrg-branch_id", decoded.branch_id.branch_id);
          this.$auth.$storage.setLocalStorage("userDataOrg-branch_name", decoded.branch_name.branch_name);

          this.$auth.$storage.setLocalStorage("userDataOrg-branch_team_id", decoded.branch_team_id);
          this.$auth.$storage.setLocalStorage("userDataOrg-branch_team_name", decoded.branch_team.branch_team_name);

          this.$nextTick(async () => {
            if (decoded.user_group_permission.user_group_permission == -1) {
              await this.$router.push("/index_sale");
            } else if (decoded.user_group_permission.user_group_permission == 2) {
              await this.$router.push("/index_sale");
            } else if (decoded.user_group_permission.user_group_permission == 3) {
              await this.$router.push("/index_sale");
            } else if (decoded.user_group_permission.user_group_permission == 4) {
              await this.$router.push("/work/work_Technician");
            } else if (decoded.user_group_permission.user_group_permission == 5) {
              await this.$router.push("/work/work_Technician");
            } else if (decoded.user_group_permission.user_group_permission == 6) {
              await this.$router.push("/purchases/purchase_parts");
            } else if (decoded.user_group_permission.user_group_permission == 7) {
              await this.$router.push("/stock/stock_parts");
            } else if (decoded.user_group_permission.user_group_permission == 8) {
              await this.$router.push("/stock/stock_cars");
            } else if (decoded.user_group_permission.user_group_permission == 9) {
              await this.$router.push("/index_sale");
            } else if (decoded.user_group_permission.user_group_permission == 10) {
              await this.$router.push("/index_sale");
            } else if (decoded.user_group_permission.user_group_permission == 11) {
              await this.$router.push("/work/works");
            } else if (decoded.user_group_permission.user_group_permission == 12) {
              await this.$router.push("/work/works");
            } else if (decoded.user_group_permission.user_group_permission == 13) {
              await this.$router.push("settings/promotion");
            } else {
            }
          });
        }
      } catch (err) {
        if (err.response.status === 401) {
          customAlart.Errorlogin();
          this.loading = false;
        }
      }
      this.loading = false;
    },
  },
};
</script>

<style></style>
