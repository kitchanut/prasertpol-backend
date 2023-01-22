<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
      <v-card>
        <v-form autocomplete="true" ref="form">
          <v-card-text>
            <v-container>
              <h4 class="text-center">ข้อมูลเซล</h4>
              <v-row>
                <v-col cols="6" xs="6" sm="6" md="3" lg="3" xl="3">
                  ชื่อ: {{ formData.first_name }}
                </v-col>
                <v-col cols="6" xs="6" sm="6" md="3" lg="3" xl="3">
                  นามสกุล: {{ formData.last_name }}
                </v-col>
                <v-col cols="6" xs="6" sm="6" md="3" lg="3" xl="3">
                  เบอร์: {{ formData.tel }}
                </v-col>
                <v-col cols="6" xs="6" sm="6" md="3" lg="3" xl="3">
                  สาขา:
                  {{
                    formData.branch == null ? "" : formData.branch.branch_name
                  }}
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiUsers from "@/Api/apiUsers";

export default {
  props: ["dialog", "id"],
  data() {
    return {
      btnloading: true,
      formDataLoading: false,
      formData: {},
      dialogDeleteComponent: false,
    };
  },
  mounted() {},
  methods: {},
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.$props.dialog) {
        const response = await apiUsers.show(this.id);
        // console.log(response.data);
        this.$nextTick(() => {
          this.$refs.form.reset();
          const self = this;
          this.$nextTick(async () => {
            self.formData = await response.data;
          });
        });
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
