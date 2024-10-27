<template>
  <v-container>
    <v-dialog
      v-model="dialogDeleteComponent"
      id="dialogDeleteComponent"
      name="dialogDeleteComponent"
      width="500px"
      :fullscreen="$vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm' ? true : false"
    >
      <v-card>
        <v-form autocomplete="true" ref="form" @submit.prevent="onAction(formData.id)">
          <v-toolbar color="primary" dark flat> หมายเหตุ </v-toolbar>

          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <div>สถานที่ปล่อยรถ:</div>
            <v-textarea v-model="formData.release_location" outlined dense hide-details rows="3"> </v-textarea>

            <div class="mt-3">หมายเหตุ (เซล):</div>
            <v-textarea v-model="formData.note_sale" outlined dense hide-details> </v-textarea>

            <div
              class="mt-3"
              v-show="user_group_permission == -1 || user_group_permission == 9 || user_group_permission == 10"
            >
              <div>หมายเหตุ (ส่วนกลาง):</div>
              <v-textarea v-model="formData.note" outlined dense hide-details> </v-textarea>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">ยกเลิก</v-btn>
            <v-btn type="submit" color="success darken-1" text :loading="btnloading">บันทึก</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiWorks from "@/Api/apiWorks";

export default {
  components: {},
  props: ["dialogNote", "idNote"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      dialogDeleteComponent: false,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
    };
  },
  mounted() {},
  methods: {
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        const response = await apiWorks.updateNote(this.idNote, this.formData);
        // console.log(response);
        this.$refs.form.reset();

        if (response.status == 200) {
          this.$emit("success", "note");
        } else {
          this.$emit("error", "note");
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
  },
  watch: {
    async dialogNote() {
      this.dialogDeleteComponent = this.dialogNote;

      if (this.dialogNote) {
        this.formDataLoading = true;
        const response = await apiWorks.show(this.idNote);
        // console.log(response);
        this.formData.note = response.data.note;
        this.formData.note_sale = response.data.note_sale;
        this.formData.release_location = response.data.release_location;

        this.formDataLoading = false;
        this.loading = false;
      }
      this.btnloading = false;
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
