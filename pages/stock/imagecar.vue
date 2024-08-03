<template>
  <div>
    <img v-for="item in data" :key="item.src" :src="item.src" width="400px" />
    <dialogLoader :dialogLoader="dialogLoader" />
  </div>
</template>

<script>
import * as apiCars from "@/Api/apiCars";
import dialogLoader from "@/components/dialog-loader";
export default {
  layout: "full",
  auth: false,
  components: {
    dialogLoader,
  },
  data() {
    return {
      dialogLoader: false,
      id: 0,
      data: [],
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    // console.log(this.$route.query.id);
    this.getData();
  },
  methods: {
    async getData() {
      this.dialogLoader = true;
      const response = await apiCars.ImageCar(this.id);
      this.data = response.data;
      this.dialogLoader = false;
    },
  },
};
</script>

<style></style>
