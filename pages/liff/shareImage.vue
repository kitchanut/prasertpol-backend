<template>
  <v-container fill-height fluid>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="4">
        <v-img
          contain
          aspect-ratio="1.3"
          :src="require('~/assets/images/prasertpol.png')"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import * as apiCars from "@/Api/apiCars";

export default {
  layout: "full",
  auth: false,
  data() {
    return {
      myLiffId: process.env.liff.shareImage,
      serverUrl: process.env.serverUrl,
      id: "",
    };
  },
  mounted() {
    console.log(this.$route.query.id);

    this.init(this.$route.query.id);
  },
  methods: {
    async init(id) {
      var message = [];

      // const response = await apiCars.ImageCar(id);
      // message = this.flexMessage(response.data);
      // console.log(response.data);

      await liff.init({ liffId: this.myLiffId }, async () => {
        if (liff.isLoggedIn()) {
          const response = await apiCars.ImageCar(id);
          message = this.flexMessage(response.data);
          // console.log(response.data);
          await liff.shareTargetPicker(message);
          liff.closeWindow();
        } else {
          liff.login();
        }
      });
    },
    flexMessage(data) {
      var image = [];
      data.forEach((element) => {
        image.push({
          // type: "image",
          // originalContentUrl: element.src,
          // previewImageUrl: element.src,
          type: "image",
          url: element.src,
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
          action: {
            type: "uri",
            uri: element.src,
          },
        });
      });
      // console.log(image);
      return [
        {
          type: "flex",
          altText: "รูปรถ",
          contents: {
            type: "bubble",
            body: {
              type: "box",
              layout: "vertical",
              contents: image,
            },
          },
        },
      ];
    },
  },
};
</script>
  
  <style>
</style>