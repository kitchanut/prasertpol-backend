<template>
  <v-dialog v-model="dialog" width="500px">
    <template v-slot:activator="{ on, attrs }">
      <!-- <div
        v-if="appearance == 'text'"
        x-small
        class="white--text"
        rounded
        dark
        v-bind="attrs"
        v-on="on"
        style="cursor: pointer"
      >
        + เพิ่มรายการ
      </div> -->
      <v-btn v-if="appearance == 'text'" class="mt-3" text color="primary" v-bind="attrs" v-on="on">
        <v-icon left> mdi-plus </v-icon>
        เพิ่มรายการ
      </v-btn>
      <v-btn v-else-if="appearance == 'pencil'" color="primary" fab x-small dark v-bind="attrs" v-on="on">
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
      <v-list-item v-else-if="appearance == 'list'" v-bind="attrs" v-on="on" style="cursor: pointer">
        <v-list-item-title style="color: blue">ประกันภัยรถยนต์</v-list-item-title>
      </v-list-item>
    </template>
    <v-card :loading="loading">
      <v-form ref="form" @submit.prevent="onAction()">
        <v-toolbar flat dark color="primary">
          <div class="container" style="align-items: center; display: flex; position: relative; padding: 0px">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>ข้อมูลประกันภัยรถยนต์</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn type="submit" dark text :loading="loading" style="font-size: 18px"> บันทึก </v-btn>
          </div>
        </v-toolbar>
        <v-card-text>
          <v-radio-group class="mt-3" v-model="formData.insurance_type" row hide-details :rules="[(v) => !!v]">
            <v-radio label="ประกันของบริษัท" value="in"></v-radio>
            <v-radio label="ประกันภายนอก" value="out"></v-radio>
          </v-radio-group>

          <v-text-field
            class="mt-3"
            v-model="formData.insurance_company"
            label="บริษัทประกัน"
            outlined
            dense
            hide-details
            :rules="[(v) => !!v]"
          >
          </v-text-field>

          <v-select
            class="mt-3"
            :items="['ป.1', 'ป.2', 'ป.2+', 'ป3', 'ป3+']"
            v-model="formData.insurance_class"
            label="ชนิดประกัน"
            outlined
            dense
            hide-details
            :rules="[(v) => !!v]"
          ></v-select>

          <v-dialog v-model="menuDate_insurance_start" width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="mt-3"
                v-model="formData.insurance_start"
                label="วันเริ่มประกัน"
                v-bind="attrs"
                v-on="on"
                readonly
                outlined
                dense
                hide-details
                clearable
                :rules="[(v) => !!v]"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="formData.insurance_start"
              locale="th-TH"
              picker-date
              @input="menuDate_insurance_start = false"
            ></v-date-picker>
          </v-dialog>

          <v-dialog v-model="menuDate_insurance_end" width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="mt-3"
                v-model="formData.insurance_end"
                label="วันสิ้นสุดประกัน"
                v-bind="attrs"
                v-on="on"
                readonly
                outlined
                dense
                hide-details
                clearable
                :rules="[(v) => !!v]"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="formData.insurance_end"
              locale="th-TH"
              picker-date
              @input="menuDate_insurance_end = false"
            ></v-date-picker>
          </v-dialog>
        </v-card-text>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import * as apiInsurances from "@/Api/apiInsurances";
export default {
  props: ["id", "car_id", "action", "appearance"],
  data() {
    return {
      dialog: false,
      loading: false,
      menuDate_insurance_start: false,
      menuDate_insurance_end: false,
      formData: {},
    };
  },
  methods: {
    async onAction() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        if (this.action == "add") {
          const response = await apiInsurances.store(this.formData);
          console.log(response);
          response.status == 200 ? this.$emit("success") : this.$emit("error");
        } else if (this.action == "edit") {
          const response = await apiInsurances.update(this.id, this.formData);
          response.status == 200 ? this.$emit("success") : this.$emit("error");
        }
        this.dialog = false;
        this.loading = false;
      }
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
        this.$nextTick(async () => {
          if (this.action == "add") {
            this.formData.car_id = this.car_id;
            this.formData.insurance_type = "in";
          } else {
            this.loading = true;
            const response = await apiInsurances.show(this.id);
            this.formData = response.data;
            this.loading = false;
          }
        });
      }
    },
  },
};
</script>

<style scoped></style>
