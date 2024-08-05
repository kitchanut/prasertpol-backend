<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" width="600px">
      <!-- <v-card> -->
      <img width="600px" height="auto" :src="imgUrl" />
      <!-- </v-card> -->
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: ["dialog", "imgUrl"],
  data() {
    return {
      dialogDeleteComponent: false,
    };
  },
  mounted() {},
  methods: {},
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
    },
    dialogDeleteComponent() {
      if (!this.dialogDeleteComponent) {
        this.$emit("cancleItem");
      }
    },
  },
};
</script>

<style></style>
