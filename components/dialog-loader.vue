<template>
  <v-dialog
    persistent
    width="300"
    v-model="dialogLoader"
  >
    <v-card
      color="red"
      dark
    >
      <v-card-text class="pt-2">
        กรุณารอสักครู่...
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialogLoader"],
  data() {
    return {};
  },
};
</script>

<style>
</style>
