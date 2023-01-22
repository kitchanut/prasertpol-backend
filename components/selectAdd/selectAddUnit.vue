<template>
  <div>
    <v-list-item @click="AddItem()">
      <v-list-item-content>
        <v-list-item-title style="color: #1976d2">
          + เพิ่มข้อมูลใหม่
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <dialogNew
      :dialog="dialog"
      :id="id"
      :action="action"
      :formTitle="formTitle"
      @cancleItem="dialog = false"
      @success="addSuccess()"
      @error="addError()"
    />
  </div>
</template>

<script>
import * as customAlart from "@/customJS/customAlart";
import dialogNew from "@/components/dialog/dialogUnit";

export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      formTitle: "เพิ่มข้อมูล",
      dialog: false,
      id: "",
      action: "add",
    };
  },
  mounted() {},
  methods: {
    async AddItem() {
      this.formTitle = "เพิ่มข้อมูล";
      this.dialog = true;
      this.id = "";
      this.action = "add";
    },
    async addSuccess() {
      this.dialog = false;
      await this.$nextTick(() => {
        this.$emit("success", "AddUnit");
        customAlart.TopSuccess();
      });
    },
    async addError() {
      this.dialog = false;
      await this.$nextTick(() => {
        this.$emit("error", "AddUnit");
        customAlart.TopError();
      });
    },
  },
};
</script>
<style></style>
