<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 4 ||
      user_group_permission == 5 ||
      user_group_permission == 8
    "
  >
    <v-card>
      <v-card-title>
        <v-col
          cols="3"
          v-if="user_group_permission == -1 || user_group_permission == 8"
        >
          <v-autocomplete
            v-model="branch_id"
            :items="branches"
            item-text="branch_name"
            item-value="id"
            label="สาขา"
            outlined
            dense
            hide-details
            @change="selectBranch"
            no-data-text="ไม่มีข้อมูล"
          >
          </v-autocomplete>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="3">
          <v-text-field
            v-model="search"
id="search"
name="search"
            append-icon="mdi-magnify"
            label="ค้นหา"
            single-line
            hide-details
          >
          </v-text-field>
        </v-col>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="10"
        :search="search"
        show-expand
        no-data-text="ยังไม่มีการเพิ่มข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
      >
        <template v-slot:expanded-item="{ item }">
          <td :colspan="headers.length">
            <p>งานของ: {{ item.repair_type == 4 ? "ช่าง" : "บิ้ว" }}</p>
            <p>พนักงานซ่อม: {{ item.user.first_name }}</p>
            <p>ซ่อมตอน: {{ item.job_type == 1 ? "ก่อนขาย" : "หลังขาย" }}</p>
          </td>
        </template>

        <template v-slot:[`item.job_technician_id`]="{ item }">
          <h5>
            {{ "J" + item.id }}
          </h5>
        </template>

        <template v-slot:[`item.timer`]="{ item }">
          <div v-if="item.job_status == 1">
            <span>
              {{ item.created_at }}
            </span>
          </div>

          <div v-if="item.job_status == 2">
            <h5>
              {{ $moment(item.job_start).fromNow() }}
            </h5>
          </div>

          <div v-if="item.job_status == 3">
            <h5>
              {{ $moment(item.job_pasue).fromNow() }}
            </h5>
          </div>

          <div v-if="item.job_status == 4">
            <h5>
              {{ $moment(item.job_end).fromNow() }}
            </h5>
          </div>

          <div v-if="item.job_status == 5">
            <h5>
              {{ $moment(item.job_cancel).fromNow() }}
            </h5>
          </div>
        </template>

        <template v-slot:[`item.work_status`]="{ item }">
          <v-btn v-if="item.job_status == '1'" x-small color="orange" dark
            >รอเริ่มงาน</v-btn
          >
          <v-btn v-if="item.job_status == '2'" x-small color="blue" dark
            >กำลังซ่อม</v-btn
          >
          <v-btn v-if="item.job_status == '3'" x-small color="blue-grey" dark
            >พักงาน</v-btn
          >
          <v-btn v-if="item.job_status == '4'" x-small color="success" dark
            >ทำเสร็จแล้ว</v-btn
          >
          <v-btn v-if="item.job_status == '5'" x-small color="red" dark
            >ยกเลิก</v-btn
          >
        </template>

        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-menu offset-y v-if="item.job_status < '4'">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                v-if="
                  user_group_permission == 4 ||
                  user_group_permission == 5 ||
                  user_group_permission == -1
                "
              >
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                @click="startJob(item.id, item.carlift_id, item.repair_time, 2)"
                v-if="item.job_status == 1"
              >
                <v-list-item-title>เริ่มงาน</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click="
                  cancelJob(item.id, item.carlift_id, item.repair_time, 5)
                "
                v-if="item.job_status == 1"
              >
                <v-list-item-title>ยกเลิก</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click="pauseJob(item.id, item.carlift_id, item.repair_time, 3)"
                v-if="item.job_status == 2"
              >
                <v-list-item-title>พักงาน</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click="startJob(item.id, item.carlift_id, item.repair_time, 2)"
                v-if="item.job_status == 3"
              >
                <v-list-item-title>เริ่มงานช่างอีกครั้ง</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click="endJob(item.id, item.carlift_id, item.repair_time, 4)"
                v-if="item.job_status == 2"
              >
                <v-list-item-title>เสร็จงาน</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>

      <dialogNew
        :formTitle="formTitle"
        :id="id"
        :repair_time="repair_time"
        :job_status="job_status"
        :dialog="dialog"
        :carlift_id="carlift_id"
        @cancleItem="dialog = false"
        @success="addSuccess"
        @error="addError"
      />
    </v-card>
  </div>
</template>

<script>
import * as apiJobTechnician from "@/Api/apiJobTechnician";
import * as customAlart from "@/customJS/customAlart";
import * as apiBranches from "@/Api/apiBranches";
import moment from "moment";
import dialogNew from "@/components/dialog/dialogJobDetail";
export default {
  components: {
    dialogNew,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
      loading: true,
      search: "",
      formTitle: "",
      id: "",
      repair_time: "",
      job_status: "",
      dialog: "",
      carlift_id: "",
      selectOnsee: 4,
      moment: moment,
      headers: [
        { text: "ลำดับ", value: "no", align: "center" },
        { text: "รหัสงาน", value: "job_technician_id" },
        { text: "ลำดับรถ", value: "cars.car_no" },
        { text: "ทะเบียน", value: "cars.car_regis" },
        { text: "ลิฟท์ซ่อม", value: "car_lift.carlift_name" },
        { text: "คนดูแล", value: "car_lift.carlift_name" },
        { text: "รายการซ่อม", value: "repair.repair_name" },
        { text: "เวลา", value: "timer" },
        { text: "สถานะ", value: "work_status" },
        { text: "จัดการ", value: "actions", sortable: false, width: "10%" },
        {
          text: "เพิ่มเติม",
          sortable: false,
          value: "data-table-expand",
          width: "10%",
        },
      ],
      data: [],
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),

      branches: [],
    };
  },
  beforeMount() {},
  async mounted() {
    await this.getBranches();
    this.getData();
  },
  beforeUpdate() {},
  computed: {
    tHeader() {
      return this.headers.map(function (item) {
        return item.text;
      });
    },
  },
  methods: {
    async selectBranch() {
      await this.getData();
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
      // console.log(response);
    },
    async getData() {
      const data = new FormData();
      data.append("branch_id", this.branch_id);

      const response = await apiJobTechnician.selectWhereBranch(data);

      let newData = [];
      if (this.user_group_permission == -1 || this.user_group_permission == 8) {
        newData = response.data;
      } else {
        for (let index = 0; index < response.data.length; index++) {
          if (this.user_id == response.data[index].user_id) {
            newData.push(response.data[index]);
          }
        }
      }

      this.data = newData;
      this.loading = false;
    },
    async startJob(id, carlift_id, repair_time, job_status) {
      this.$nextTick(() => {
        this.formTitle = "รายการซ่อม";
        this.id = id;
        this.carlift_id = carlift_id;
        this.repair_time = repair_time;
        this.job_status = job_status;
        this.dialog = true;
      });
    },

    async pauseJob(id, carlift_id, repair_time, job_status) {
      var isConfirmed = customAlart.ConfirmedStatus();
      await isConfirmed.then((result) => {
        if (result == true) {
          const response = apiJobTechnician.updateOnJob(id, job_status);
          response.then((res) => {
            // console.log(res.data);
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },

    async endJob(id, carlift_id, repair_time, job_status) {
      var isConfirmed = customAlart.ConfirmedStatus();
      await isConfirmed.then(async (result) => {
        if (result == true) {
          const response = apiJobTechnician.updateOnJob(id, job_status);
          response.then((res) => {
            // console.log(res.data);
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },
    async cancelJob(id, carlift_id, repair_time, job_status) {
      var isConfirmed = customAlart.ConfirmedStatus();
      await isConfirmed.then((result) => {
        if (result == true) {
          const response = apiJobTechnician.updateOnJob(id, job_status);
          response.then((res) => {
            // console.log(res);
            if (res.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
            this.$nextTick(() => {
              this.getData();
            });
          });
        }
      });
    },

    async addSuccess(value) {
      if (value == "Job") {
        this.dialog = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
      });
    },
    async addError(value) {
      if (value == "Job") {
        this.dialog = false;
      }
      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
  },
  watch: {
    data() {
      const self = this;
      return this.data.map(function (item) {
        item.no =
          self.data
            .map(function (x) {
              return x.id;
            })
            .indexOf(item.id) + 1;
      });
    },
    async selectOnsee() {
      await this.getData();
      // console.log(value);
    },
  },
};
</script>

<style></style>
