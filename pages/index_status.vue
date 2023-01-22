<template>
  <div>
    <v-card>
      <v-card-title>
        แยกรายสถานะ
      </v-card-title>
      <template>

        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                  ทีมสาขา
                </th>
                <th class="text-center">
                  1.สนใจ
                </th>
                <th class="text-center">
                  2.จอง
                </th>
                <th class="text-center">
                  3.มัดจำ
                </th>
                <th class="text-center">
                  4.รอทำสัญญา
                </th>

                <th class="text-center">
                  5.ทำสัญญาแล้ว/รอแบงค์อนุมัติ
                </th>

                <th
                  class="text-center"
                  style="color: green"
                >
                  เอกสารครบ
                </th>
                <th
                  class="text-center"
                  style="color: red"
                >
                  เอกสารไม่ครบ
                </th>

                <th class="text-center">
                  6.ไม่อนุมัติ
                </th>
                <th class="text-center">
                  7.อนุมัติ
                </th>
                <th class="text-center">
                  8.ปล่อยรถ
                </th>
                <th class="text-center">
                  9.รอตรวจสอบ
                </th>
                <th class="text-center">
                  10.รอปิดงาน
                </th>
                <th class="text-center">
                  ส่งเล่มทำเงิน
                </th>
                <th
                  class="text-center"
                  style="color: red"
                >
                  ยังไม่ได้รับเงิน
                </th>
                <th class="text-center">
                  รวมทุกสถานะ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ทั้งหมด</td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(1, 'all')}}</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(2, 'all')}}</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(3, 'all')}}</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(4, 'all')}}</b></v-chip>
                </td>

                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(5, 'all')}}</b></v-chip>
                </td>

                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate('appointment_bank_type_success', 'all')}}</b></v-chip>
                </td>

                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate('appointment_bank_type', 'all')}}</b></v-chip>
                </td>

                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(6, 'all')}} </b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(7, 'all')}} </b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(8, 'all')}} </b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(9, 'all')}} </b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate(10, 'all')}} </b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate('appointment_sentbook_date', 'all')}}</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate('appointment_money_price', 'all')}}</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countFieldSeparate('all', 'all')}}</b></v-chip>
                </td>

              </tr>
              <tr
                v-for="(item, index) in branchTeams"
                :key="index"
              >
                <td>{{ item.branch_team_name }}</td>
                <td align="center">{{countFieldSeparate(1, item.branch_team_name)}}</td>
                <td align="center">
                  <div>{{countFieldSeparate(2, item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div>{{countFieldSeparate(3, item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div>{{countFieldSeparate(4, item.branch_team_name)}}</div>
                </td>

                <td align="center">
                  <div>{{countFieldSeparate(5, item.branch_team_name)}}</div>
                </td>

                <td align="center">
                  <div
                    style="color: green"
                    v-if="countFieldSeparate('appointment_bank_type_success', item.branch_team_name) > 0"
                  >{{countFieldSeparate('appointment_bank_type_success', item.branch_team_name)}}</div>
                  <div v-else>{{countFieldSeparate('appointment_bank_type_success', item.branch_team_name)}}</div>
                </td>

                <td align="center">
                  <div
                    style="color: red"
                    v-if="countFieldSeparate('appointment_bank_type', item.branch_team_name) > 0"
                  >{{countFieldSeparate('appointment_bank_type', item.branch_team_name)}}</div>
                  <div v-else>{{countFieldSeparate('appointment_bank_type', item.branch_team_name)}}</div>
                </td>

                <td align="center">
                  <div>{{countFieldSeparate(6, item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div>{{countFieldSeparate(7, item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div>{{countFieldSeparate(8, item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div>{{countFieldSeparate(9, item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div>{{countFieldSeparate(10, item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div>{{countFieldSeparate('appointment_sentbook_date', item.branch_team_name)}}</div>
                </td>

                <td align="center">
                  <div
                    style="color: red"
                    v-if="countFieldSeparate('appointment_sentbook_date', item.branch_team_name) - countFieldSeparate('appointment_money_price', item.branch_team_name) > 0"
                  >{{countFieldSeparate('appointment_money_price', item.branch_team_name)}}</div>
                  <div v-else>{{countFieldSeparate('appointment_money_price', item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div>{{countFieldSeparate('all', item.branch_team_name)}}</div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </v-card>

    <v-card class="mt-5">
      <v-card-title>
        สถานะแบบต่อเนื่อง
      </v-card-title>
      <template>

        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                  ทีมสาขา
                </th>
                <th class="text-center">
                  สนใจ
                </th>
                <th class="text-center">
                  จอง
                </th>
                <th class="text-center">
                  เซนต์สัญญา
                </th>
                <th class="text-center">
                  เอกสารครบ
                </th>
                <th class="text-center">
                  เอกสารไม่ครบ
                </th>
                <th class="text-center">
                  อนุมัติ
                </th>
                <th class="text-center">
                  ปล่อยรถ
                </th>
                <th class="text-center">
                  ส่งเล่มทำเงิน
                </th>
                <th class="text-center">
                  ได้รับเงินแล้ว
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ทั้งหมด</td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField(1, 'all')}}</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField(2, 'all')}} ({{countField(1, 'all') - countField(2, 'all')}})</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField(5, 'all')}} ({{countField(2, 'all') - countField(5, 'all')}})</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField('appointment_bank_type_success', 'all')}}</b></v-chip>
                </td>

                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField('appointment_bank_type', 'all')}}</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField(7, 'all')}} ({{countField(5, 'all') - countField(7, 'all')}})</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField(8, 'all')}} ({{countField(7, 'all') - countField(8, 'all')}})</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField('appointment_sentbook_date', 'all')}} ({{countField(8, 'all') - countField('appointment_sentbook_date', 'all')}})</b></v-chip>
                </td>
                <td align="center">
                  <v-chip
                    class="ma-2"
                    small
                  ><b>{{countField('appointment_money_price', 'all')}} ({{countField('appointment_sentbook_date', 'all') - countField('appointment_money_price', 'all')}})</b></v-chip>
                </td>

              </tr>
              <tr
                v-for="(item, index) in branchTeams"
                :key="index"
              >
                <td>{{ item.branch_team_name }}</td>
                <td align="center">{{countField(1, item.branch_team_name)}}</td>
                <td align="center">
                  <div v-if="countField(1, item.branch_team_name) == countField(2, item.branch_team_name)">{{countField(2, item.branch_team_name)}}</div>
                  <div
                    v-else
                    style="color: red"
                  >{{countField(2, item.branch_team_name)}} ({{countField(1, item.branch_team_name) - countField(2, item.branch_team_name)}})</div>
                </td>
                <td align="center">
                  <div v-if="countField(2, item.branch_team_name) == countField(5, item.branch_team_name)">{{countField(5, item.branch_team_name)}}</div>
                  <div
                    v-else
                    style="color: red"
                  >{{countField(5, item.branch_team_name)}} ({{countField(2, item.branch_team_name) - countField(5, item.branch_team_name)}})</div>
                </td>
                <td align="center">
                  <div v-if="countField('appointment_bank_type_success', item.branch_team_name) == 0">{{countField('appointment_bank_type_success', item.branch_team_name)}}</div>
                  <div
                    v-else
                    style="color: green"
                  >{{countField('appointment_bank_type_success', item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div v-if="countField('appointment_bank_type', item.branch_team_name) == 0">{{countField('appointment_bank_type', item.branch_team_name)}}</div>
                  <div
                    v-else
                    style="color: red"
                  >{{countField('appointment_bank_type', item.branch_team_name)}}</div>
                </td>
                <td align="center">
                  <div v-if="countField(5, item.branch_team_name) == countField(7, item.branch_team_name)">{{countField(7, item.branch_team_name)}}</div>
                  <div
                    v-else
                    style="color: red"
                  >{{countField(7, item.branch_team_name)}} ({{countField(5, item.branch_team_name) - countField(7, item.branch_team_name)}})</div>
                </td>

                <td align="center">
                  <div v-if="countField(7, item.branch_team_name) == countField(8, item.branch_team_name)">{{countField(8, item.branch_team_name)}}</div>
                  <div
                    v-else
                    style="color: red"
                  >{{countField(8, item.branch_team_name)}} ({{countField(7, item.branch_team_name) - countField(8, item.branch_team_name)}})</div>
                </td>

                <td align="center">
                  <div v-if="countField('appointment_sentbook_date', item.branch_team_name) == countField(8, item.branch_team_name)">{{countField('appointment_sentbook_date', item.branch_team_name)}}</div>
                  <div
                    v-else
                    style="color: red"
                  >{{countField('appointment_sentbook_date', item.branch_team_name)}} ({{countField(8, item.branch_team_name) - countField('appointment_sentbook_date', item.branch_team_name)}})</div>
                </td>

                <td align="center">
                  <div v-if="countField('appointment_money_price', item.branch_team_name) == countField('appointment_sentbook_date', item.branch_team_name)">{{countField('appointment_money_price', item.branch_team_name)}}</div>
                  <div
                    v-else
                    style="color: red"
                  >{{countField('appointment_money_price', item.branch_team_name)}} ({{countField('appointment_sentbook_date', item.branch_team_name) - countField('appointment_money_price', item.branch_team_name)}})</div>
                </td>

              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </v-card>
  </div>
</template>

<script>
import * as apiBranch_teams from "@/Api/apiBranch_teams";
import * as apiWorks from "@/Api/apiWorks";
export default {
  data() {
    return {
      loading: false,
      data: [],
      branchTeams: [],
    };
  },
  mounted() {
    this.getBranchTeam();
    this.getData();
  },
  methods: {
    async getBranchTeam() {
      this.loading = true;
      const response = await apiBranch_teams.index();
      this.branchTeams = response.data.filter((d) => {
        return d.branch_team_active == 1;
      });
      this.loading = false;
    },
    async getData() {
      this.loading = true;
      const response = await apiWorks.followWork();
      // console.log(response.data);
      this.data = response.data.data;
      this.loading = false;
    },
    countField(key, branchTeams) {
      if (key == 1 || key == 2 || key == 5 || key == 7 || key == 8) {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .reduce((total, x) => (x.work_status >= key ? total + 1 : total), 0);
      } else if (key == "appointment_bank_type") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.work_status >= 5;
          })
          .reduce(
            (total, x) =>
              x.appointment_bank_type == "ไม่ครบ" ? total + 1 : total,
            0
          );
      } else if (key == "appointment_bank_type_success") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.work_status >= 5;
          })
          .reduce(
            (total, x) =>
              x.appointment_bank_type == "ครบ" ? total + 1 : total,
            0
          );
      } else if (key == "appointment_sentbook_date") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.appointment_sentbook_date != " ";
          })
          .reduce(
            (total, x) =>
              x.appointment_sentbook_date != " " ? total + 1 : total,
            0
          );
      } else if (key == "appointment_money_price") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.appointment_sentbook_date != " ";
          })
          .reduce(
            (total, x) => (x.appointment_money_price > 0 ? total + 1 : total),
            0
          );
      }
    },
    countFieldSeparate(key, branchTeams) {
      if (key == "appointment_bank_type") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.work_status >= 5;
          })
          .reduce(
            (total, x) =>
              x.appointment_bank_type == "ไม่ครบ" ? total + 1 : total,
            0
          );
      } else if (key == "appointment_bank_type_success") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.work_status == 5;
          })
          .reduce(
            (total, x) =>
              x.appointment_bank_type == "ครบ" ? total + 1 : total,
            0
          );
      } else if (key == "appointment_sentbook_date") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.appointment_sentbook_date != " ";
          })
          .reduce(
            (total, x) =>
              x.appointment_sentbook_date != " " ? total + 1 : total,
            0
          );
      } else if (key == "appointment_money_price") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.appointment_sentbook_date != " ";
          })
          .reduce(
            (total, x) => (x.appointment_money_price <= 0 ? total + 1 : total),
            0
          );
      } else if (key == "all") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.work_status >= 1;
          })
          .reduce((total, x) => (x.work_status >= 1 ? total + 1 : total), 0);
      } else {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .reduce((total, x) => (x.work_status == key ? total + 1 : total), 0);
      }
    },
  },
};
</script>

<style>
</style>
