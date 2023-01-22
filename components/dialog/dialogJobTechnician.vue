<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="70%">
      <v-card>
        <v-form autocomplete="true" ref="form" @submit.prevent="onAction()">
          <v-toolbar color="primary" dark flat>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title> {{ formTitleJobTechnician }} </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                type="submit"
                :loading="btnloading"
                dark
                text
                style="font-size: 18px"
              >
                บันทึก
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-progress-linear
            v-if="formDataLoading"
            indeterminate
            color="yellow darken-2"
          >
          </v-progress-linear>
          <v-card-text>
            <v-row v-if="idWork != 0" class="d-flex flex-row">
              <v-col> </v-col>
              <v-col align="end">
                <h3>รหัสงาน: W{{ idWork }}</h3>
                <h3>ลำดับรถ: {{ car_no }}</h3>
              </v-col>
            </v-row>

            <div v-show="formData.action == 'add' ? true : false">
              <!-- <div v-show="formData.action == 'add' ? true : false"> -->
              <v-row class="d-flex">
                <v-col align="center" justify="center">
                  <h3>ข้อมูลรถ</h3>
                </v-col>
              </v-row>

              <v-row class="d-flex">
                <v-col align="center" justify="center">
                  <v-col cols="12">
                    <v-text-field
                      autocomplete="true"
                      label="เลขไมค์ตอนซ่อม"
                      v-model="car_mileage"
                      id="car_mileage"
                      name="car_mileage"
                      @change="carMileage"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-col>

                <v-col align="center" justify="center">
                  <v-col cols="12">
                    <v-text-field
                      autocomplete="true"
                      label="ประกันคงเหลือ"
                      v-model="car_mileage_balance"
                      id="car_mileage_balance"
                      name="car_mileage_balance"
                      @change="carMileageBlance"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-col>
              </v-row>

              <v-row class="d-flex">
                <v-col align="center" justify="center">
                  <v-col cols="12">
                    <v-textarea
                      rows="2"
                      label="รายการที่ต้องทำ"
                      v-model="todo_list"
                      id="todo_list"
                      name="todo_list"
                      append-icon=""
                      outlined
                      dense
                      hide-details
                    >
                    </v-textarea>
                  </v-col>
                </v-col>
              </v-row>
            </div>

            <v-row class="d-flex">
              <v-col align="center" justify="center">
                <h3>รายการซ่อม</h3>
              </v-col>
            </v-row>

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">ลิฟท์ซ่อมรถ</th>
                    <th class="text-center">รายการซ่อม</th>
                    <th class="text-center">ใช้เวลา</th>
                    <th class="text-center">งานของ</th>
                    <th class="text-center">พนักงาน</th>
                    <th class="text-center">หมายเหตุ</th>
                    <th class="text-center">จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(repair_detail, keys) in formData.repair_details"
                    :key="keys"
                  >
                    <td>
                      <v-autocomplete
                        v-model="repair_detail.carlift_id"
                        id="repair_detail.carlift_id"
                        name="repair_detail.carlift_id"
                        :items="car_lift"
                        no-data-text="ไม่มีข้อมูล"
                        item-text="carlift_name"
                        item-value="id"
                        label="ลิฟท์ซ่อมรถ"
                        hide-details
                        :rules="rule"
                      ></v-autocomplete>
                    </td>
                    <td>
                      <v-autocomplete
                        no-data-text="ไม่มีข้อมูล"
                        v-model="repair_detail.repair_id"
                        id="repair_detail.repair_id"
                        name="repair_detail.repair_id"
                        :items="repair_lists"
                        item-text="repair_name"
                        item-value="id"
                        label="ชื่อรายการ"
                        @change="repairSelect(repair_detail.repair_id, keys)"
                        hide-details
                        :rules="rule"
                      >
                      </v-autocomplete>
                    </td>

                    <td>
                      <v-text-field
                        autocomplete="true"
                        label="ใช้เวลา"
                        v-model="repair_detail.repair_time"
                        id="repair_detail.repair_time"
                        name="repair_detail.repair_time"
                        append-icon=""
                        disabled
                        hide-details
                      >
                      </v-text-field>
                    </td>

                    <td>
                      <v-autocomplete
                        v-model="repair_detail.repair_type"
                        id="repair_detail.repair_type"
                        name="repair_detail.repair_type"
                        @change="
                          selectRepair_type(repair_detail.repair_type, keys)
                        "
                        :items="technician"
                        item-text="description"
                        no-data-text="ไม่มีข้อมูล"
                        item-value="id"
                        label="งานของ"
                        hide-details
                      ></v-autocomplete>
                    </td>

                    <td>
                      <v-autocomplete
                        v-model="repair_detail.user_id"
                        id="repair_detail.user_id"
                        name="repair_detail.user_id"
                        :items="TechnicianBuildSelect[keys]"
                        item-text="first_name"
                        item-value="id"
                        no-data-text="ไม่มีข้อมูล"
                        label="พนักงานงาน/บิ้ว"
                        hide-details
                      ></v-autocomplete>
                    </td>

                    <td>
                      <v-text-field
                        autocomplete="true"
                        label="หมายเหตุ"
                        v-model="repair_detail.note"
                        id="repair_detail.note"
                        name="repair_detail.note"
                        append-icon=""
                        hide-details
                      >
                      </v-text-field>
                    </td>

                    <td>
                      <v-btn
                        color="red"
                        class="mt-1"
                        fab
                        x-small
                        dark
                        @click="rm_row(keys)"
                      >
                        <v-icon> mdi-delete </v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-row class="d-flex">
              <v-col align="center" justify="center">
                <v-col>
                  <v-btn color="green" block dark @click="add_row()">
                    <v-icon>mdi-plus</v-icon> เพิ่มรายการ
                  </v-btn>
                </v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiJobTechnician from "@/Api/apiJobTechnician";
import * as apiUsers from "@/Api/apiUsers";
import * as apiRepair_lists from "@/Api/apiRepair_lists";
import * as apiCar_lift from "@/Api/apiCar_lift";
import moment from "moment";

export default {
  props: [
    "dialogJobTechnician",
    "actionJobTechnician",
    "idCar",
    "idWork",
    "jobType",
    "car_no",
    "formTitleJobTechnician",
  ],
  data() {
    return {
      btnloading: true,
      dialogDeleteComponent: false,
      formDataLoading: false,
      formData: {
        repair_details: [],
      },
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      TechnicianBuild: [],
      TechnicianBuildSelect: [],
      technician: [
        { id: "4", description: "ช่าง" },
        { id: "5", description: "บิ้ว" },
      ],
      repair_lists: [],
      car_lift: [],
      car_id: 0,
      car_mileage: 0,
      car_mileage_balance: 0,
      todo_list: "",
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
    };
  },
  mounted() {},
  methods: {
    async carlift() {
      const response = await apiCar_lift.select();
      this.car_lift = response.data;
    },
    async repairSelect(value, keys) {
      this.formData.repair_details[keys].repair_type = "";
      this.TechnicianBuildSelect[keys] = [];
      // this.formData.repair_details[keys].user_id = null;
      // console.log(this.formData.repair_details[keys].user_id);
      for (var i = 0; i < this.repair_lists.length; i++) {
        if (this.repair_lists[i].id == value) {
          // console.log(this.repair_lists[i].repair_time);
          this.formData.repair_details[keys].repair_time =
            this.repair_lists[i].repair_time;
          break;
        }
      }
    },
    async carMileage(value) {
      if (value != null) {
        this.car_mileage = value;
        this.formData.repair_details = [];
      }
    },
    async carMileageBlance(value) {
      if (value != null) {
        this.car_mileage_balance = value;
        this.formData.repair_details = [];
      }
    },
    async selectRepair_type(type, keys, user_id) {
      // console.log(type, keys, user_id);
      this.TechnicianBuildSelect[keys] = [];
      this.formData.repair_details[keys].user_id = "";
      for (let index = 0; index < this.TechnicianBuild.length; index++) {
        if (this.TechnicianBuild[index].user_group_id == type) {
          await this.TechnicianBuildSelect[keys].push(
            this.TechnicianBuild[index]
          );
          if (user_id != null) {
            this.formData.repair_details[keys].user_id = user_id;
          }
          break;
        }
      }
      // console.log(this.TechnicianBuildSelect[keys]);
    },
    async getRepairlists() {
      const response = await apiRepair_lists.select();
      this.repair_lists = response.data;
      this.loading = false;
    },
    async getTechnicianBuild() {
      const response = await apiUsers.selectTechnicianBuild(
        this.$auth.$storage.getLocalStorage("userData-branch_id")
      );
      this.TechnicianBuild = await response.data;
      this.loading = false;
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.formDataLoading = true;
        this.btnloading = true;
        if (this.formData.action == "add") {
          const response = await apiJobTechnician.store(this.formData);
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Job");
          } else {
            this.$emit("error", "Job");
          }
        } else if (this.formData.action == "edit") {
          const response = await apiJobTechnician.update(
            this.formData.id,
            this.formData
          );
          // console.log(response);
          this.$refs.form.reset();
          if (response.status == 200) {
            this.$emit("success", "Job");
          } else {
            this.$emit("error", "Job");
          }
        }
        this.btnloading = false;
        this.formDataLoading = false;
      }
    },

    async add_row() {
      let data = {
        user_id: "",
        working_id: this.working_id,
        repair_id: "",
        repair_time: "",
        repair_type: "",
        car_mileage: this.car_mileage,
        car_mileage_balance: this.car_mileage_balance,
        job_type: this.jobType,
        car_id: this.car_id,
        branch_id: this.branch_id,
      };
      // console.log(data);
      await this.formData.repair_details.push(data);
    },
    // ฟังชั่นลบแถว
    async rm_row(keys) {
      if (this.formData.repair_details[keys].repair_type == 1) {
        this.formData.time -= this.formData.repair_details[keys].repair_time;
      } else if (this.formData.repair_details[keys].repair_type == 2) {
        this.formData.timeBuild -=
          this.formData.repair_details[keys].repair_time;
      }
      await this.formData.repair_details.splice(keys, 1);
    },
  },
  watch: {
    async dialogJobTechnician() {
      this.dialogDeleteComponent = this.dialogJobTechnician;
      if (this.dialogJobTechnician) {
        this.formDataLoading = true;
        this.carlift();
        this.getRepairlists();
        await this.getTechnicianBuild();

        if (this.actionJobTechnician == "check") {
          const response = await apiJobTechnician.checkTechnician(
            this.idWork,
            this.idCar
          );
          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              if (response.data.action == "add") {
                self.formData.action = response.data.action;
                self.formData.repair_details = [];
                self.working_id = response.data.working_id;
                self.car_id = response.data.car_id;
                self.car_mileage = response.data.car_mileage;
                self.car_mileage_balance = response.data.car_mileage_balance;
              } else if (response.data.action == "edit") {
                self.formData = await response.data;
                self.car_mileage = response.data.car_mileage;
                self.car_mileage_balance = response.data.car_mileage_balance;
                self.car_id = response.data.id;
                self.working_id = response.data.working_id;
                this.$nextTick(async () => {
                  this.formData.repair_details.forEach(async (item, index) => {
                    this.selectRepair_type(
                      item.repair_type,
                      index,
                      item.user_id
                    );
                  });
                });
              }
              self.todo_list = response.data.todo_list;
            });
          });
          // console.log(response);
        }

        this.formDataLoading = false;
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
