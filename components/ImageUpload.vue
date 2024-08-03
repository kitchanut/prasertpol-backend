<template>
  <div class="uploader">
    <div class="file-input">
      <label for="'file'" style="display: flex; justify-content: center; align-items: center">
        <span v-if="!loadingComponent" style="font-size: 48px">+</span>
        <v-progress-circular v-else :size="50" color="amber" indeterminate></v-progress-circular>
      </label>
      <!-- <input v-model="files" type="file" id="'file'" @change="handleFileSelection($event)" /> -->

      <v-file-input
        v-show="false"
        id="'file'"
        prepend-icon=""
        hide-details
        @change="handleFileSelection($event)"
      ></v-file-input>
    </div>
  </div>
</template>

<script>
import * as apiUploads from "@/Api/apiUploads";
import * as customAlart from "@/customJS/customAlart";
export default {
  props: ["id", "type"],
  data: () => ({
    loading: false,
    loadingComponent: false,
    files: [],
  }),
  methods: {
    async handleFileSelection(event) {
      this.loadingComponent = true;
      this.files.push(event);
      let formDataNew = new FormData();
      formDataNew.append("formData", JSON.stringify({ id: this.id, type: this.type }));
      for (let i = 0; i < this.files.length; i++) {
        formDataNew.append("files[" + i + "]", this.files[i]);
      }
      const response = await apiUploads.store(formDataNew);
      if (response.status == 201) {
        this.$emit("success");
        customAlart.TopSuccess();
      } else {
        customAlart.TopError();
      }
      this.files = [];
      this.loadingComponent = false;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.uploader {
  width: 100%;
  background: #2196f3;
  color: #fff;
  padding: 40px;
  text-align: center;
  border-radius: 4px;
  border: thin solid #2196f3;
  font-size: 20px;

  .file-input {
    width: 100%;
    height: 100%;
    margin: auto;

    label,
    input {
      background: #fff;
      color: #2196f3;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      // padding-bottom: 7px;
      cursor: pointer;
    }

    input {
      opacity: 0;
      z-index: -2;
    }
  }
}
</style>
