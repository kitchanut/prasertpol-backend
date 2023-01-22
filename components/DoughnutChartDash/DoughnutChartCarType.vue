<template>
  <div class="d-flex flex-column justify-center">
    <!-- <v-row>
      <v-col cols="3">
        <v-autocomplete
          :disabled="disabledTime"
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
            <v-text-fieldad
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
            ></v-text-fieldad>
          </template>
          <v-date-picker
            v-model="timeEnd"
            locale="th-TH"
            picker-date
            @input="menuTimeEnd = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col class="small">
        <h1>{{ middleText }}</h1>
        <DoughnutChartBranch :chart-data="chartData" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DoughnutChartBranch from "@/components/DoughnutChart/DoughnutChartBranch";

export default {
  props: ["chartData", "middleText"],
  components: {
    // Pie
    DoughnutChartBranch,
  },
};
</script>

<style></style>
