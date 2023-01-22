<template>
  <v-row class="d-flex flex-row">
    <v-col>
      <v-text-field
        label="ที่อยู่ตามทะเบียนบ้าน"
        v-model="formData.customer_address"
        append-icon=""
        outlined
        dense
        hide-details
        :rules="rule"
      >
      </v-text-field>
    </v-col>

    <v-col>
      <v-autocomplete
        v-model="formData.amphure_id"
        :items="dataSelectAmphures"
        item-text="name_th"
        item-value="id"
        no-data-text="ไม่มีข้อมูล"
        @change="selectSeeAmphure"
        label="อำเภอ"
        outlined
        dense
        hide-details
        :rules="rule"
      >
      </v-autocomplete>
    </v-col>

    <v-col>
      <v-autocomplete
        v-model="formData.district_id"
        :items="dataSelectDistricts"
        item-text="name_th"
        item-value="id"
        no-data-text="ไม่มีข้อมูล"
        @change="selectSeeDistrict"
        label="ตำบล"
        outlined
        dense
        hide-details
        :rules="rule"
      >
      </v-autocomplete>
    </v-col>

    <v-col>
      <v-autocomplete
        v-model="formData.province_id"
        :items="dataProvinces"
        item-text="name_th"
        item-value="id"
        @change="selectSeeProvince"
        label="จังหวัด"
        no-data-text="ไม่มีข้อมูล"
        outlined
        dense
        hide-details
        :rules="rule"
      >
      </v-autocomplete>
    </v-col>

    <v-col>
      <v-text-field
        label="รหัสไปรษณีย์"
        append-icon=""
        v-model="formData.zip_code"
        outlined
        dense
        hide-details
        onkeypress="return  (event.charCode >= 48 && event.charCode <= 57)"
        :rules="rule"
      >
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["amphure_id", "district_id", "province_id", "zip_code"],

  data() {
    return {
      formData: {},
      dataProvinces: [],
      dataAmphures: [],
      dataDistricts: [],

      dataSelectAmphures: [],
      dataSelectDistricts: [],
    };
  },
  async mounted() {
    await this.getProvinces();
    await this.getAmphures();
    await this.getDistricts();
  },
  methods: {
    async getProvinces() {
      const response = await apiProvinces.select();
      this.dataProvinces = response.data;
    },
    async getAmphures() {
      const response = await apiAmphures.select();
      this.dataAmphures = response.data;
      this.dataSelectAmphures = response.data;
    },
    async getDistricts() {
      const response = await apiDistricts.select();
      this.dataDistricts = response.data;
    },
    async selectSeeProvince() {
      this.dataSelectAmphures = [];
      for (let index = 0; index < this.dataAmphures.length; index++) {
        if (this.dataAmphures[index].province_id == this.formData.province_id) {
          this.dataSelectAmphures.push(this.dataAmphures[index]);
        }
      }
    },

    async selectSeeAmphure() {
      // console.log(this.formData.amphure_id);
      this.dataSelectDistricts = [];
      for (let index = 0; index < this.dataDistricts.length; index++) {
        if (this.dataDistricts[index].amphure_id == this.formData.amphure_id) {
          this.dataSelectDistricts.push(this.dataDistricts[index]);
        }
      }

      for (let index = 0; index < this.dataAmphures.length; index++) {
        if (this.dataAmphures[index].id == this.formData.amphure_id) {
          this.formData.province_id = this.dataAmphures[index].province_id;
          // console.log(this.dataAmphures[index]);
        }
      }
    },

    async selectSeeDistrict() {
      this.formData.zip_code = "";
      for (let index = 0; index < this.dataDistricts.length; index++) {
        if (this.dataDistricts[index].id == this.formData.district_id) {
          // this.dataSelectDistricts.push(this.dataDistricts[index]);
          this.formData.zip_code = this.dataDistricts[index].zip_code;
        }
      }
    },
  },
};
</script>
<style></style>
