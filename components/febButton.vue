<template>
  <div class="v-btn--bottom v-btn--fixed v-btn--has-bg v-btn--right">
    <v-speed-dial
      v-model="fab"
      :bottom="bottom"
      :right="right"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn @click="update()" color="blue darken-2" dark fab>
          <v-icon> mdi-reload </v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
  </div>
</template>
<script>
export default {
  data() {
    return {
      direction: "left",
      fab: false,
      hover: true,
      right: true,
      bottom: true,
      transition: "slide-y-reverse-transition",
    };
  },
  methods: {
    update() {
      this.$emit("success", "Car");
      this.$emit("disbleBtn");
    },
  },
};
</script>
<style>
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
