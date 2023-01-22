<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
      <v-card>
        <v-toolbar color="primary" dark flat>
          {{ formTitle }}
        </v-toolbar>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">ลิฟท์ซ่อมรถ</th>
                <th class="text-center">รายการซ่อม</th>
                <th class="text-center">ใช้เวลา</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(job, keys) in jobs" :key="keys">
                <td>
                  <h3 class="text-center">{{ job.car_lift.carlift_name }}</h3>
                </td>
                <td>
                  <h3 class="text-center">{{ job.repair.repair_name }}</h3>
                </td>
                <td>
                  <h3 class="text-center">{{ job.repair_time }}</h3>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('cancleItem')"
            >ยกเลิก</v-btn
          >
          <v-btn
            color="success darken-1"
            @click="confirmJob"
            text
            :loading="btnloading"
            >เริ่มงาน
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiJobTechnician from "@/Api/apiJobTechnician";
import * as customAlart from "@/customJS/customAlart";

export default {
  props: [
    "formTitle",
    "id",
    "time",
    "job_status",
    "dialog",
    "repair_type",
    "carlift_id",
  ],
  data() {
    return {
      btnloading: true,
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      jobs: [],
    };
  },

  mounted() {},
  methods: {
    async getData() {
      this.jobs = [];
      const response = await apiJobTechnician.selectJob(this.id);
      for (let index = 0; index < response.data.length; index++) {
        this.jobs.push(response.data[index]);
      }
    },
    async confirmJob() {
      this.btnloading = true;
      const response = await apiJobTechnician.updateOnJob(
        this.id,
        this.job_status
      );
      // console.log(response);
      if (response.data == 1) {
        customAlart.ErrorJob();
        // this.$emit("error", "Job");
      } else {
        if (response.status == 200) {
          this.$emit("success", "Job");
        } else {
          this.$emit("error", "Job");
        }
      }
      this.btnloading = false;
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialog) {
        await this.getData();
        this.btnloading = false;
      }
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
