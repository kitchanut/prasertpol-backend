<template>
  <v-app light>
    <v-app-bar app dark flat color="red">
      <v-container class="d-flex flex-row">
        <router-link to="#" style="text-decoration: none; color: inherit">
          <v-row align="center" justify="start" class="pa-2">
            <v-avatar size="80" class="my-logo mr-3" color="red">
              <img :src="pictureUrl" />
            </v-avatar>
            <!-- <v-toolbar-title
              v-if="
                $vuetify.breakpoint.name == 'xs' ||
                $vuetify.breakpoint.name == 'sm'
              "
              v-text="''"
            ></v-toolbar-title>
            <v-toolbar-title v-else v-text="title" /> -->
            <v-toolbar-title v-text="displayName" />
          </v-row>
        </router-link>
      </v-container>
    </v-app-bar>

    <v-main style="height: 100%">
      <v-container style="padding: 25px 12px 12px 12px">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      displayName: this.$auth.$storage.getLocalStorage(
        "userData-linedisplayName"
      ),
      pictureUrl: this.$auth.$storage.getLocalStorage(
        "userData-linepictureUrl"
      ),
    };
  },
};
</script>

<style></style>
