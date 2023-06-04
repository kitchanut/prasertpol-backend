<template>
  <v-row class="py-2">
    <v-col cols="3">
      <v-autocomplete
        v-model="selectYear"
        :items="yearSelect"
        no-data-text="ไม่มีข้อมูล"
        item-text="title"
        item-value="value"
        label="ช่วงเวลา"
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
      timeSelect: [
        { value: -1, title: "ทั้งหมด" },
        { value: 1, title: "มกราคม" },
        { value: 2, title: "กุมภาพันธ์" },
        { value: 3, title: "มีนาคม" },
        { value: 4, title: "เมษายน" },
        { value: 5, title: "พฤษภาคม" },
        { value: 6, title: "มิถุนายน" },
        { value: 7, title: "กรกฎาคม" },
        { value: 8, title: "สิงหาคม" },
        { value: 9, title: "กันยายน" },
        { value: 10, title: "ตุลาคม" },
        { value: 11, title: "พฤศจิกายน" },
        { value: 12, title: "ธันวาคม" },
      ],
      yearSelect: this.$store.state.yearSelect,
      menuTimeStart: false,
      menuTimeEnd: false,
      selectYear: 1,
      year: Number(moment().format("YYYY")),
      selectTime: -1,
      timeStart: moment().startOf("years").format("YYYY-MM-DD HH:mm"),
      timeEnd: moment().endOf("years").format("YYYY-MM-DD HH:mm"),
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
      if (this.selectTime == -1) {
        this.timeStart = moment()
          .add(diffYear, "years")
          .startOf("years")
          .format("YYYY-MM-DD HH:mm");
        this.timeEnd = moment()
          .add(diffYear, "years")
          .endOf("years")
          .format("YYYY-MM-DD HH:mm");
        this.returnDate();
      } else {
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
      }
    },
  },
};
</script>
    <style lang=""></style>
    