<template>
  <v-row class="py-2">
    <!-- <v-col cols="3" v-show="user_group_permission == 2 ? false : true">
      <v-autocomplete
        v-model="branch_id"
        :items="branches"
        item-text="branch_name"
        item-value="id"
        label="สาขา"
        no-data-text="ไม่มีข้อมูล"
        outlined
        dense
        hide-details
        @change="returnDate"
      >
      </v-autocomplete>
    </v-col> -->
    <v-col cols="4">
      <v-autocomplete
        v-model="selectTime"
        :items="timeSelect"
        no-data-text="ไม่มีข้อมูล"
        item-text="title"
        item-value="value"
        label="ช่วงเวลา:"
        @change="changeSelectTime"
        outlined
        dense
        hide-details
      >
      </v-autocomplete>
    </v-col>

    <v-col cols="4">
      <v-menu
        ref="menuTimeStart"
        v-model="menuTimeStart"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="timeStart"
            label="วันที่เริ่มต้น"
            v-bind="attrs"
            v-on="on"
            persistent-hint
            prepend-icon=""
            outlined
            dense
            hide-details
            flathide-details
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="timeStart"
          locale="th-TH"
          picker-date
          @change="changeSelectTime"
          @input="menuTimeStart = false"
        ></v-date-picker>
      </v-menu>
    </v-col>

    <v-col cols="4">
      <v-menu
        ref="menuTimeEnd"
        v-model="menuTimeEnd"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="timeEnd"
            label="วันที่สิ้นสุด"
            v-bind="attrs"
            v-on="on"
            persistent-hint
            prepend-icon=""
            outlined
            dense
            hide-details
            flathide-details
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="timeEnd"
          locale="th-TH"
          picker-date
          @change="changeSelectTime"
          @input="menuTimeEnd = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>
<script>
import moment from "moment";
// import * as apiBranches from "@/Api/apiBranches";

export default {
  data() {
    return {
      timeSelect: this.$store.state.timeSelect,
      menuTimeStart: false,
      menuTimeEnd: false,
      selectTime: 1,
      timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      // branches: [],
      // branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      // user_group_permission: this.$auth.$storage.getLocalStorage(
      //   "userData-user_group_permission"
      // ),
    };
  },
  mounted() {
    // this.getBranches();
  },
  methods: {
    async returnDate() {
      this.$emit("timeSelect", {
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
      });
    },
    // async getBranches() {
    //   const response = await apiBranches.select();
    //   this.branches = response.data;
    //   this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
    //   await this.returnDate();
    // },
    async changeSelectTime(value) {
      if (value == 1) {
        this.timeStart = moment().startOf("day").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 2) {
        this.timeStart = moment().startOf("day").add(-1, "days").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").add(-1, "days").format("YYYY-MM-DD HH:mm");
      } else if (value == 3) {
        this.timeStart = moment().startOf("day").add(-7, "days").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 4) {
        this.timeStart = moment().startOf("day").add(-30, "days").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 5) {
        this.timeStart = moment().startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("months").format("YYYY-MM-DD HH:mm");
      } else if (value == 6) {
        this.timeStart = moment().add(-1, "months").startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().add(-1, "months").endOf("months").format("YYYY-MM-DD HH:mm");
      } else if (value == 7) {
        this.timeStart = moment().add(-3, "months").startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 8) {
        this.timeStart = moment().add(-6, "months").startOf("months").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 9) {
        this.timeStart = moment().startOf("years").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      } else if (value == 10) {
        this.timeStart = moment().add(-3, "years").startOf("years").format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment().endOf("day").format("YYYY-MM-DD HH:mm");
      }
      this.returnDate();
    },
  },
};
</script>
<style lang=""></style>
