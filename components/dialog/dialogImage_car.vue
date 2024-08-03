<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" width="600px">
      <v-carousel cycle height="auto" hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-for="(imageCar, keys) in imageCars" :key="keys">
          <v-sheet>
            <a :key="keys" :href="serverUrl + imageCar.car_id + '/' + imageCar.image_name" target="_blank">
              <img
                contain
                width="600px"
                height="auto"
                :key="keys"
                :alt="serverUrl + imageCar.car_id + '/' + imageCar.image_name"
                :src="serverUrl + imageCar.car_id + '/' + imageCar.image_name"
              />
            </a>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiCars from "@/Api/apiCars";

export default {
  props: ["dialog", "id"],
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/cars/",
      dialogDeleteComponent: false,
      imageCars: [],
    };
  },
  mounted() {},
  methods: {},
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialogDeleteComponent) {
        // console.log(this.id);
        const response = await apiCars.ImageCar(this.id);
        this.imageCars = await response.data;
      }
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
