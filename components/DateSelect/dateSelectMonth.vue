<template>
  <v-row>
    <v-col cols="3">
      <v-autocomplete
        v-model="selectYear"
        :items="yearSelect"
        no-data-text="ไม่มีข้อมูล"
        item-text="title"
        item-value="value"
        @change="changeSelectTime"
        outlined
        dense
        hide-details
      >
      </v-autocomplete>
    </v-col>

    <v-col cols="3">
      <v-autocomplete
        v-model="selectTime"
        :items="timeSelect"
        no-data-text="ไม่มีข้อมูล"
        item-text="title"
        item-value="value"
        label="เดือน:"
        @change="changeSelectTime"
        outlined
        dense
        hide-details
      >
      </v-autocomplete>
    </v-col>

    <v-col cols="3">
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
          @change="returnDate"
          @input="menuTimeStart = false"
        ></v-date-picker>
      </v-menu>
    </v-col>

    <v-col cols="3">
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
          @change="returnDate"
          @input="menuTimeEnd = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      timeSelect: this.$store.state.month_Select,
      yearSelect: this.$store.state.yearSelect,
      menuTimeStart: false,
      menuTimeEnd: false,
      selectYear: 1,
      year: Number(moment().format("YYYY")),
      selectTime: Number(moment().format("M")),
      timeStart: moment().startOf("months").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("months").format("YYYY-MM-DD HH:mm"),
    };
  },
  mounted() {},
  methods: {
    async returnDate() {
      this.$emit("timeSelect", {
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
      });
    },

    async changeSelectTime(value) {
      var diffMonth = value - Number(moment().format("M"));
      var diffYear = 1 - this.selectYear;
      this.timeStart = moment()
        .add(diffMonth, "months")
        .add(diffYear, "years")
        .startOf("months")
        .format("YYYY-MM-DD HH:mm");
      this.timeEnd = moment()
        .add(diffMonth, "months")
        .add(diffYear, "years")
        .endOf("months")
        .format("YYYY-MM-DD HH:mm");
      this.returnDate();
    },
  },
};
</script>
<style lang=""></style>
