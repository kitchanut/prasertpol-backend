<template>
  <v-navigation-drawer v-model="drawerComponent" fixed right width="400">
    <v-list-item>
      <v-list-item-action style="margin-right: 5px" @click="$emit('cancleItem')">
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-close</v-icon>
        </v-btn>
      </v-list-item-action>
      <v-list-item-title>เอกสารประกอบ ({{ images.length + files.length }} ไฟล์)</v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>
    <v-progress-linear v-if="loading" indeterminate color="yellow darken-2"></v-progress-linear>
    <v-card-text style="flex-grow: 1; overflow: auto">
      <p class="mb-1">รูปภาพ ({{ images.length }})</p>
      <v-row no-gutters>
        <v-col cols="3 px-1 py-1" v-for="image in images" :key="image.id">
          <v-btn
            style="z-index: 1000"
            class="text-right"
            absolute
            icon
            x-small
            dark
            color="error"
            @click="deleteItem(image.id)"
          >
            <v-icon size="15">mdi-delete</v-icon>
          </v-btn>
          <v-img
            height="84"
            style="border-radius: 6px"
            cover
            :src="serverUrl + '/storage/app/' + image.path"
            @click="show()"
          >
          </v-img>
        </v-col>
        <v-col cols="3 px-1 py-1">
          <v-card outlined>
            <ImageUpload :id="id" :type="type" :loading="loadingImage" @success="getData()" />
          </v-card>
        </v-col>
      </v-row>
      <br />
      <br />

      <p class="mb-1">ไฟล์ ({{ files.length }})</p>
      <v-list-item
        v-for="file in files"
        :key="'file_' + file.id"
        :value="file.id"
        class="py-0 px-0"
        style="min-height: 0px"
      >
        <v-list-item-title>
          <v-btn class="mr-1" color="primary" icon small variant="text">
            <v-icon>mdi-file</v-icon>
          </v-btn>
          <a :href="serverUrl + '/storage/app/' + file.path" target="_blank">
            {{ file.name }}
          </a>
        </v-list-item-title>
        <v-list-item-action class="mt-1 mb-0">
          <v-btn color="red" fab x-small dark @click="deleteItem(file.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card-text>
  </v-navigation-drawer>
</template>
<script>
import * as apiUploads from "@/Api/apiUploads";
import * as customAlart from "@/customJS/customAlart";

export default {
  props: ["drawer", "type", "id"],
  data() {
    return {
      serverUrl: process.env.serverUrl,
      drawerComponent: false,
      loading: false,
      loadingImage: false,
      imageId: 0,
      dialogDelete: false,
      images: [],
      files: [],
      imageviewers: [],
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      const response = await apiUploads.index(this.id, this.type);
      this.images = [];
      this.files = [];
      await response.data.map((item) => {
        if (item.extension == "jpeg" || item.extension == "jpg" || item.extension == "png") {
          this.images.push(item);
        } else {
          this.files.push(item);
        }
      });
      this.imageviewers = [];
      this.images.forEach((element) => {
        this.imageviewers.push(this.serverUrl + "/storage/app/" + element.path);
      });
      this.loading = false;
    },
    show() {
      this.$viewerApi({
        images: this.imageviewers,
      });
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          this.loading = true;
          const response = apiUploads.destroy(id);
          response.then((res) => {
            // console.log(res);
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
            this.$nextTick(() => {
              this.getData();
            });
            this.loading = false;
          });
        }
      });
    },
  },
  watch: {
    async drawer() {
      this.drawerComponent = this.drawer;
      if (this.drawerComponent) {
        this.images = [];
        this.files = [];
        this.getData();
      } else {
        this.$emit("cancleItem");
      }
    },
  },
};
</script>
