<template>
  <div>
    <v-card>
      <v-progress-linear
        v-if="loading && user_group_permission != 2 && user_group_permission != 3"
        indeterminate
        color="yellow darken-2"
      ></v-progress-linear>
      <v-simple-table v-if="user_group_permission != 2 && user_group_permission != 3" dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th rowspan="2">ทีมสาขา</th>
              <th class="text-center" rowspan="2">ทั้งหมด</th>
              <th class="text-center" rowspan="2">รอจอง</th>
              <th class="text-center" rowspan="2">รอเซนต์</th>
              <!-- <th class="text-center">รออนุมัติ</th> -->
              <th class="text-center" colspan="2">รออนุมัติ</th>
              <th class="text-center" rowspan="2">รอปล่อย</th>
              <th class="text-center" rowspan="2">รอชุดโอน</th>
              <th class="text-center" rowspan="2">รอส่งเล่มทำเงิน</th>
              <th class="text-center" rowspan="2">รอรับเงิน</th>
              <th class="text-center" rowspan="2">รอปิดงาน</th>
            </tr>
            <tr>
              <th class="text-center" style="border-left: 1px solid #eee">เอกสารครบ</th>
              <th class="text-center">เอกสารไม่ครบ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ทั้งหมด</td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork("all", "all").length }}</b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork(1, "all").length }}</b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork("not_sign", "all").length }}</b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ filterWork("wait_approve", "all").length }}</b>
                </v-chip>
              </td>

              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork("not_document", "all").length }}</b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork(7, "all").length }}</b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork("wait_transfer_document", "all").length }}</b>
                </v-chip>
              </td>

              <td align="center">
                <v-chip class="ma-2" small>
                  <b>
                    {{ filterWork("wait_sentbook_date", "all").length }}
                  </b>
                </v-chip>
              </td>

              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork("wait_receive_money", "all").length }} </b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork("receive_money", "all").length }} </b>
                </v-chip>
              </td>
            </tr>
            <tr v-for="(item, index) in branchTeams" :key="index">
              <td>{{ item.branch_team_name }}</td>

              <td align="center">
                {{ filterWork("all", item.branch_team_name).length }}
              </td>
              <td align="center">
                <span v-if="filterWork(1, item.branch_team_name).length > 0">
                  {{ filterWork(1, item.branch_team_name).length }}
                </span>
              </td>
              <td align="center">
                <span v-if="filterWork('not_sign', item.branch_team_name).length > 0">
                  {{ filterWork("not_sign", item.branch_team_name).length }}
                </span>
              </td>
              <td align="center">
                <span v-if="filterWork('wait_approve', item.branch_team_name).length" style="color: green">
                  {{ filterWork("wait_approve", item.branch_team_name).length }}
                </span>
              </td>
              <td align="center">
                <span v-if="filterWork('not_document', item.branch_team_name).length" style="color: red">
                  {{ filterWork("not_document", item.branch_team_name).length }}
                </span>
              </td>
              <td align="center">
                <span v-if="filterWork(7, item.branch_team_name).length > 0">
                  {{ filterWork(7, item.branch_team_name).length }}
                </span>
              </td>

              <td align="center">
                <span v-if="filterWork('wait_transfer_document', item.branch_team_name).length > 0">
                  {{ filterWork("wait_transfer_document", item.branch_team_name).length }}
                </span>
              </td>

              <td align="center">
                <span v-if="filterWork('wait_sentbook_date', item.branch_team_name).length > 0">
                  {{ filterWork("wait_sentbook_date", item.branch_team_name).length }}
                </span>
              </td>

              <td align="center">
                <span v-if="filterWork('wait_receive_money', item.branch_team_name).length > 0">
                  {{ filterWork("wait_receive_money", item.branch_team_name).length }}
                </span>
              </td>

              <td align="center">
                <span v-if="filterWork('receive_money', item.branch_team_name).length > 0">
                  {{ filterWork("receive_money", item.branch_team_name).length }}
                </span>
              </td>
            </tr>
            <!-- <tr>
              <td>ทั้งหมด</td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ countField(1, "all") }}</b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ filterWork(1, "all").length }}</b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small>
                  <b>{{ countField(2, "all") }} ({{ countField(1, "all") - countField(2, "all") }})</b>
                </v-chip>
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField(5, "all") }} ({{ countField(2, "all") - countField(5, "all") }})</b></v-chip
                >
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField("appointment_bank_type_success", "all") }}</b></v-chip
                >
              </td>

              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField("appointment_bank_type", "all") }}</b></v-chip
                >
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField(7, "all") }} ({{ countField(5, "all") - countField(7, "all") }})</b></v-chip
                >
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b>{{ countField(8, "all") }} ({{ countField(7, "all") - countField(8, "all") }})</b></v-chip
                >
              </td>

              <td align="center">
                <v-chip class="ma-2" small>
                  <b>
                    {{ countField("receive_transfer_document", "all") }} ({{
                      countField(8, "all") - countField("receive_transfer_document", "all")
                    }})
                  </b>
                </v-chip>
              </td>

              <td align="center">
                <v-chip class="ma-2" small
                  ><b
                    >{{ countField("appointment_sentbook_date", "all") }} ({{
                      countField("receive_transfer_document", "all") - countField("appointment_sentbook_date", "all")
                    }})</b
                  ></v-chip
                >
              </td>
              <td align="center">
                <v-chip class="ma-2" small
                  ><b
                    >{{ countField("appointment_money_price", "all") }} ({{
                      countField("appointment_sentbook_date", "all") - countField("appointment_money_price", "all")
                    }})</b
                  ></v-chip
                >
              </td>
            </tr>
            <tr v-for="(item, index) in branchTeams" :key="index">
              <td>{{ item.branch_team_name }}</td>

              <td align="center">{{ countField(1, item.branch_team_name) }}</td>
              <td align="center">
                <span v-if="filterWork(1, item.branch_team_name).length > 0">
                  {{ filterWork(1, item.branch_team_name).length }}
                </span>
              </td>
              <td align="center">
                <div v-if="countField(1, item.branch_team_name) == countField(2, item.branch_team_name)">
                  {{ countField(2, item.branch_team_name) }}
                </div>
                <div v-else>
                  {{ countField(2, item.branch_team_name) }}
                  <span style="color: red">
                    ({{ countField(1, item.branch_team_name) - countField(2, item.branch_team_name) }})
                  </span>
                </div>
              </td>
              <td align="center">
                <div v-if="countField(2, item.branch_team_name) == countField(5, item.branch_team_name)">
                  {{ countField(5, item.branch_team_name) }}
                </div>
                <div v-else>
                  {{ countField(5, item.branch_team_name) }}
                  <span style="color: red">
                    ({{ countField(2, item.branch_team_name) - countField(5, item.branch_team_name) }})
                  </span>
                </div>
              </td>
              <td align="center">
                <div v-if="countField('appointment_bank_type_success', item.branch_team_name) == 0">
                  {{ countField("appointment_bank_type_success", item.branch_team_name) }}
                </div>
                <div v-else style="color: green">
                  {{ countField("appointment_bank_type_success", item.branch_team_name) }}
                </div>
              </td>
              <td align="center">
                <div v-if="countField('appointment_bank_type', item.branch_team_name) == 0">
                  {{ countField("appointment_bank_type", item.branch_team_name) }}
                </div>
                <div v-else style="color: red">{{ countField("appointment_bank_type", item.branch_team_name) }}</div>
              </td>
              <td align="center">
                <div v-if="countField(5, item.branch_team_name) == countField(7, item.branch_team_name)">
                  {{ countField(7, item.branch_team_name) }}
                </div>
                <div v-else>
                  {{ countField(7, item.branch_team_name) }}
                  <span style="color: red">
                    ({{ countField(5, item.branch_team_name) - countField(7, item.branch_team_name) }})
                  </span>
                </div>
              </td>

              <td align="center">
                <div v-if="countField(7, item.branch_team_name) == countField(8, item.branch_team_name)">
                  {{ countField(8, item.branch_team_name) }}
                </div>
                <div v-else>
                  {{ countField(8, item.branch_team_name) }}
                  <span style="color: red">
                    ({{ countField(7, item.branch_team_name) - countField(8, item.branch_team_name) }})
                  </span>
                </div>
              </td>

              <td align="center">
                <div
                  v-if="
                    countField('receive_transfer_document', item.branch_team_name) ==
                    countField(8, item.branch_team_name)
                  "
                >
                  {{ countField("receive_transfer_document", item.branch_team_name) }}
                </div>
                <div v-else>
                  {{ countField("receive_transfer_document", item.branch_team_name) }}
                  <span style="color: red">
                    ({{
                      countField(8, item.branch_team_name) -
                      countField("receive_transfer_document", item.branch_team_name)
                    }})
                  </span>
                </div>
              </td>

              <td align="center">
                <div
                  v-if="
                    countField('appointment_sentbook_date', item.branch_team_name) ==
                    countField('receive_transfer_document', item.branch_team_name)
                  "
                >
                  {{ countField("appointment_sentbook_date", item.branch_team_name) }}
                </div>
                <div v-else>
                  {{ countField("appointment_sentbook_date", item.branch_team_name) }}
                  <span style="color: red">
                    ({{
                      countField("receive_transfer_document", item.branch_team_name) -
                      countField("appointment_sentbook_date", item.branch_team_name)
                    }})
                  </span>
                </div>
              </td>

              <td align="center">
                <div
                  v-if="
                    countField('appointment_money_price', item.branch_team_name) ==
                    countField('appointment_sentbook_date', item.branch_team_name)
                  "
                >
                  {{ countField("appointment_money_price", item.branch_team_name) }}
                </div>
                <div v-else>
                  {{ countField("appointment_money_price", item.branch_team_name) }}
                  <span style="color: red">
                    ({{
                      countField("appointment_sentbook_date", item.branch_team_name) -
                      countField("appointment_money_price", item.branch_team_name)
                    }})
                  </span>
                </div>
              </td>
            </tr> -->
          </tbody>
        </template>
      </v-simple-table>

      <v-divider v-if="user_group_permission != 2 && user_group_permission != 3"></v-divider>
      <v-tabs v-model="tab" background-color="#eee" color="black">
        <v-tab>ทั้งหมด ({{ filterWork("all", "all").length }})</v-tab>
        <v-tab>รอจอง ({{ filterWork(1, "all").length }})</v-tab>
        <v-tab>รอเซนต์ ({{ filterWork("not_sign", "all").length }})</v-tab>
        <v-tab>เอกสารไม่ครบ ({{ filterWork("not_document", "all").length }})</v-tab>
        <v-tab>รออนุมัติ ({{ filterWork("wait_approve", "all").length }})</v-tab>
        <v-tab>รอปล่อยรถ ({{ filterWork(7, "all").length }})</v-tab>
        <v-tab>รอชุดโอน ({{ filterWork("wait_transfer_document", "all").length }})</v-tab>
        <v-tab>รอส่งเล่มทำเงิน ({{ filterWork("wait_sentbook_date", "all").length }})</v-tab>
        <v-tab>รอรับเงิน ({{ filterWork("wait_receive_money", "all").length }})</v-tab>
      </v-tabs>
      <v-progress-linear v-if="loading" indeterminate color="yellow darken-2"></v-progress-linear>
      <v-card-text>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-row>
              <v-col
                cols="12"
                v-for="(item, index) in branchTeams"
                :key="index"
                v-if="filterWork('all', item.branch_team_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.branch_team_name }} ({{ filterWork("all", item.branch_team_name).length }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th width="150px">เซล</th>
                          <th width="180px">ลำดับ</th>
                          <th>สถานะ</th>
                          <th width="180px">ลูกค้า</th>
                          <th>อัพเดทล่าสุด</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(filter, key) in filterWork('all', item.branch_team_name)" :key="key">
                          <td style="color: green">
                            <span v-if="key == 0">
                              {{ filterWork("all", item.branch_team_name)[key].sale }}
                            </span>
                            <span
                              v-else-if="
                                filterWork('all', item.branch_team_name)[key].sale !=
                                filterWork('all', item.branch_team_name)[key - 1].sale
                              "
                            >
                              {{ filterWork("all", item.branch_team_name)[key].sale }}
                            </span>
                          </td>
                          <td>
                            {{ filter.car_no }}
                          </td>
                          <td>
                            <v-chip v-if="filter.work_status == '1'" small color="warning">รอจอง</v-chip>
                            <v-chip v-if="filter.work_status == '2'" small color="warning">รอมัดจำ</v-chip>
                            <v-chip v-if="filter.work_status == '3'" small color="secondary">รอนัดทำสัญญา</v-chip>
                            <v-chip v-if="filter.work_status == '4'" small color="secondary">รอทำสัญญา</v-chip>
                            <v-chip v-if="filter.work_status == '5'" small color="pink" dark>รอแบงค์อนุมัติ</v-chip>
                            <v-chip v-if="filter.work_status == '6'" small color="red">แบงค์ไม่อนุมัติ</v-chip>
                            <v-chip v-if="filter.work_status == '7'" small color="warning">รอปล่อยรถ</v-chip>
                            <v-chip v-if="filter.work_status == '8'" small color="primary">รอชุดโอน</v-chip>
                            <v-chip v-if="filter.work_status == '9'" small color="info"> รอปิดงาน </v-chip>
                            <v-chip v-if="filter.work_status == '10'" small color="info">รอปิดงาน</v-chip>
                            <v-chip v-if="filter.work_status == '11'" small color="success">ปิดงาน</v-chip>
                          </td>
                          <td>{{ filter.customer_name }}</td>
                          <td>
                            <div v-if="filter.request_log.length">
                              <v-btn
                                color="primary"
                                icon
                                x-small
                                dark
                                @click="showLog(filter.request_log, filter.request_update, filter.car_no)"
                              >
                                <v-icon> mdi-information-variant </v-icon>
                              </v-btn>
                              <span style="color: blue">
                                {{ filter.request_log[filter.request_log.length - 1].created_at }}
                              </span>
                              <span
                                style="color: red"
                                v-if="
                                  $moment().unix() >
                                  Number($moment(filter.request_log[filter.request_log.length - 1].created_at).unix()) +
                                    notice_time
                                "
                              >
                                ({{
                                  $moment(filter.request_log[filter.request_log.length - 1].created_at).fromNow(true)
                                }})
                              </span>
                              <span v-else>
                                ({{
                                  $moment(filter.request_log[filter.request_log.length - 1].created_at).fromNow(true)
                                }})
                              </span>

                              > {{ filter.request_log[filter.request_log.length - 1].type }}
                              <span v-if="filter.request_log[filter.request_log.length - 1].type == 'อัพเดทข้อมูล'">
                                >
                                {{
                                  filter.request_update.find(
                                    (e) => e.id == filter.request_log[filter.request_log.length - 1].ref_id
                                  ).note
                                }}
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                cols="6"
                v-for="(item, index) in branchTeams"
                :key="index"
                v-if="filterWork(1, item.branch_team_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.branch_team_name }} ({{ filterWork(1, item.branch_team_name).length }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th width="25%">ลำดับ</th>
                          <th>ลูกค้า</th>
                          <th>วันทำรายการ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="filter in filterWork(1, item.branch_team_name)">
                          <td>
                            <v-tooltip color="primary" right v-if="filter.request_update.length > 0">
                              <template v-slot:activator="{ on, attrs }">
                                <span style="color: blue" v-bind="attrs" v-on="on">{{ filter.car_no }}</span>
                              </template>
                              <span>
                                <div v-for="note in filter.request_update">
                                  <span style="color: white">{{ note.created_at }} > </span> {{ note.note }}
                                </div>
                              </span>
                            </v-tooltip>
                            <span v-else>{{ filter.car_no }}</span>
                          </td>
                          <td>{{ filter.customer_name }}</td>
                          <td>
                            {{ filter.interested_at }}
                            <span
                              style="color: red"
                              v-if="$moment().unix() > Number($moment(filter.interested_at).unix()) + notice_time"
                            >
                              ({{ $moment(filter.interested_at).fromNow(true) }})
                            </span>
                            <span v-else> ({{ $moment(filter.interested_at).fromNow(true) }}) </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                cols="12"
                v-for="(item, index) in branchTeams"
                :key="index"
                v-if="filterWork('not_sign', item.branch_team_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.branch_team_name }} ({{ filterWork("not_sign", item.branch_team_name).length }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th width="150px">เซล</th>
                          <th width="180px">ลำดับ</th>
                          <th width="180px">ลูกค้า</th>
                          <th width="170px">วันจอง</th>
                          <th width="120px">วันนัดเซนต์</th>
                          <th>อัพเดทล่าสุด</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(filter, key) in filterWork('not_sign', item.branch_team_name)" :key="key">
                          <td style="color: green">
                            <span v-if="key == 0">
                              {{ filterWork("not_sign", item.branch_team_name)[key].sale }}
                            </span>
                            <span
                              v-else-if="
                                filterWork('not_sign', item.branch_team_name)[key].sale !=
                                filterWork('not_sign', item.branch_team_name)[key - 1].sale
                              "
                            >
                              {{ filterWork("not_sign", item.branch_team_name)[key].sale }}
                            </span>
                          </td>
                          <td>
                            {{ filter.car_no }}
                          </td>
                          <td>{{ filter.customer_name }}</td>
                          <td>
                            {{ filter.created_at }}
                            <span
                              style="color: red"
                              v-if="$moment().unix() > Number($moment(filter.created_at).unix()) + notice_time"
                            >
                              ({{ $moment(filter.created_at).fromNow(true) }})
                            </span>
                            <span v-else> ({{ $moment(filter.created_at).fromNow(true) }}) </span>
                          </td>
                          <td>
                            <span
                              style="color: red"
                              v-if="$moment().unix() > Number($moment(filter.appointment_date_before).unix())"
                            >
                              {{ filter.appointment_date_before }}
                            </span>
                            <span v-else>{{ filter.appointment_date_before }}</span>
                          </td>
                          <td>
                            <v-btn
                              color="primary"
                              icon
                              x-small
                              dark
                              @click="showLog(filter.request_log, filter.request_update, filter.car_no)"
                            >
                              <v-icon> mdi-information-variant </v-icon>
                            </v-btn>
                            <span style="color: blue">
                              {{ filter.request_log[filter.request_log.length - 1].created_at }}
                            </span>
                            <span
                              style="color: red"
                              v-if="
                                $moment().unix() >
                                Number($moment(filter.request_log[filter.request_log.length - 1].created_at).unix()) +
                                  notice_time
                              "
                            >
                              ({{
                                $moment(filter.request_log[filter.request_log.length - 1].created_at).fromNow(true)
                              }})
                            </span>
                            <span v-else>
                              ({{
                                $moment(filter.request_log[filter.request_log.length - 1].created_at).fromNow(true)
                              }})
                            </span>

                            > {{ filter.request_log[filter.request_log.length - 1].type }}
                            <span v-if="filter.request_log[filter.request_log.length - 1].type == 'อัพเดทข้อมูล'">
                              >
                              {{
                                filter.request_update.find(
                                  (e) => e.id == filter.request_log[filter.request_log.length - 1].ref_id
                                ).note
                              }}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                cols="12"
                v-for="(item, index) in branchTeams"
                :key="index"
                v-if="filterWork('not_document', item.branch_team_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.branch_team_name }} ({{ filterWork("not_document", item.branch_team_name).length }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th width="150px">เซล</th>
                          <th>ลำดับ</th>
                          <th width="180px">ลูกค้า</th>
                          <th width="180px">วันที่เซนต์</th>
                          <th>เอกสารที่ขาด</th>
                          <th>อัพเดทล่าสุด</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(filter, key) in filterWork('not_document', item.branch_team_name)" :key="key">
                          <td style="color: green">
                            <span v-if="key == 0">
                              {{ filterWork("not_document", item.branch_team_name)[key].sale }}
                            </span>
                            <span
                              v-else-if="
                                filterWork('not_document', item.branch_team_name)[key].sale !=
                                filterWork('not_document', item.branch_team_name)[key - 1].sale
                              "
                            >
                              {{ filterWork("not_document", item.branch_team_name)[key].sale }}
                            </span>
                          </td>
                          <td>
                            {{ filter.car_no }}
                          </td>
                          <td>{{ filter.customer_name }}</td>
                          <td>
                            {{ filter.appointment_bank_date }}
                            <span
                              style="color: red"
                              v-if="
                                $moment().unix() > Number($moment(filter.appointment_bank_date).unix()) + notice_time
                              "
                            >
                              ({{ $moment(filter.appointment_bank_date).fromNow(true) }})
                            </span>
                            <span v-else> ({{ $moment(filter.appointment_bank_date).fromNow(true) }}) </span>
                          </td>
                          <td style="color: red">
                            <div v-html="filter.appointment_bank_list" class="text-left"></div>
                          </td>
                          <td>
                            <v-btn
                              color="primary"
                              icon
                              x-small
                              dark
                              @click="showLog(filter.request_log, filter.request_update, filter.car_no)"
                            >
                              <v-icon> mdi-information-variant </v-icon>
                            </v-btn>
                            <span style="color: blue">
                              {{ filter.request_log[filter.request_log.length - 1].created_at }}
                            </span>
                            <span
                              style="color: red"
                              v-if="
                                $moment().unix() >
                                Number($moment(filter.request_log[filter.request_log.length - 1].created_at).unix()) +
                                  notice_time
                              "
                            >
                              ({{
                                $moment(filter.request_log[filter.request_log.length - 1].created_at).fromNow(true)
                              }})
                            </span>
                            <span v-else>
                              ({{
                                $moment(filter.request_log[filter.request_log.length - 1].created_at).fromNow(true)
                              }})
                            </span>

                            > {{ filter.request_log[filter.request_log.length - 1].type }}
                            <span v-if="filter.request_log[filter.request_log.length - 1].type == 'อัพเดทข้อมูล'">
                              >
                              {{
                                filter.request_update.find(
                                  (e) => e.id == filter.request_log[filter.request_log.length - 1].ref_id
                                ).note
                              }}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                cols="12"
                v-for="(item, index) in banks"
                :key="index"
                v-if="filterWork('wait_approve', '', item.bank_nick_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.bank_nick_name }} ({{ filterWork("wait_approve", "", item.bank_nick_name).length }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>

                  <v-data-table
                    :headers="headers"
                    :items="filterWork('wait_approve', '', item.bank_nick_name)"
                    multi-sort
                    :items-per-page="-1"
                    hide-default-footer
                    dense
                  >
                    <template v-slot:[`item.car_no`]="{ item }">
                      <v-tooltip color="primary" right v-if="item.request_update.length > 0">
                        <template v-slot:activator="{ on, attrs }">
                          <span style="color: blue" v-bind="attrs" v-on="on">{{ item.car_no }}</span>
                        </template>
                        <span>
                          <div v-for="note in item.request_update">
                            <span style="color: white">{{ note.created_at }} > </span> {{ note.note }}
                          </div>
                        </span>
                      </v-tooltip>
                      <span v-else>{{ item.car_no }}</span>
                    </template>
                    <template v-slot:[`item.appointment_bank_date`]="{ item }">
                      {{ item.appointment_bank_date }}
                      <span
                        style="color: red"
                        v-if="$moment().unix() > Number($moment(item.appointment_bank_date).unix()) + notice_time"
                      >
                        ({{ $moment(item.appointment_bank_date).fromNow(true) }})
                      </span>
                      <span v-else> ({{ $moment(item.appointment_bank_date).fromNow(true) }}) </span>
                    </template>
                    <template v-slot:[`item.appointment_bank_document_date`]="{ item }">
                      {{ item.appointment_bank_document_date }}
                      <span v-if="item.appointment_bank_document_date != ' '">
                        <span
                          style="color: red"
                          v-if="
                            $moment().unix() > Number($moment(item.appointment_bank_document_date).unix()) + notice_time
                          "
                        >
                          ({{ $moment(item.appointment_bank_document_date).fromNow(true) }})
                        </span>
                        <span v-else> ({{ $moment(item.appointment_bank_document_date).fromNow(true) }}) </span>
                      </span>
                    </template>
                  </v-data-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                cols="12"
                v-for="(item, index) in branchTeams"
                :key="index"
                v-if="filterWork(7, item.branch_team_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.branch_team_name }} ({{ filterWork(7, item.branch_team_name).length }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th>เซล</th>
                          <th>ลำดับ</th>
                          <th>ลูกค้า</th>
                          <th>วันอนุมัติ</th>
                          <th>อัพเดทล่าสุด</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(filter, key) in filterWork(7, item.branch_team_name)" :key="key">
                          <td style="color: green">
                            <span v-if="key == 0">
                              {{ filterWork("not_sign", item.branch_team_name)[key].sale }}
                            </span>
                            <span
                              v-else-if="
                                filterWork('not_sign', item.branch_team_name)[key].sale !=
                                filterWork('not_sign', item.branch_team_name)[key - 1].sale
                              "
                            >
                              {{ filterWork("not_sign", item.branch_team_name)[key].sale }}
                            </span>
                          </td>
                          <td>
                            {{ filter.car_no }}
                          </td>
                          <td>{{ filter.customer_name }}</td>
                          <td>
                            {{ filter.appointment_date }}
                            <span
                              style="color: red"
                              v-if="$moment().unix() > Number($moment(filter.appointment_date).unix()) + notice_time"
                            >
                              ({{ $moment(filter.appointment_date).fromNow(true) }})
                            </span>
                            <span v-else> ({{ $moment(filter.appointment_date).fromNow(true) }}) </span>
                          </td>
                          <td>
                            <v-btn
                              color="primary"
                              icon
                              x-small
                              dark
                              @click="showLog(filter.request_log, filter.request_update, filter.car_no)"
                            >
                              <v-icon> mdi-information-variant </v-icon>
                            </v-btn>
                            <span style="color: blue">
                              {{ filter.request_log[filter.request_log.length - 1].created_at }}
                            </span>
                            <span
                              style="color: red"
                              v-if="
                                $moment().unix() >
                                Number($moment(filter.request_log[filter.request_log.length - 1].created_at).unix()) +
                                  notice_time
                              "
                            >
                              ({{
                                $moment(filter.request_log[filter.request_log.length - 1].created_at).fromNow(true)
                              }})
                            </span>
                            <span v-else>
                              ({{
                                $moment(filter.request_log[filter.request_log.length - 1].created_at).fromNow(true)
                              }})
                            </span>

                            > {{ filter.request_log[filter.request_log.length - 1].type }}
                            <span v-if="filter.request_log[filter.request_log.length - 1].type == 'อัพเดทข้อมูล'">
                              >
                              {{
                                filter.request_update.find(
                                  (e) => e.id == filter.request_log[filter.request_log.length - 1].ref_id
                                ).note
                              }}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                cols="6"
                v-for="(item, index) in branchTeams"
                :key="index"
                v-if="filterWork('wait_transfer_document', item.branch_team_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.branch_team_name }} ({{
                        filterWork("wait_transfer_document", item.branch_team_name).length
                      }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th width="25%">ลำดับ</th>
                          <th>ลูกค้า</th>
                          <th>วันปล่อยรถ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="filter in filterWork('wait_transfer_document', item.branch_team_name)">
                          <td>
                            <v-tooltip color="primary" right v-if="filter.request_update.length > 0">
                              <template v-slot:activator="{ on, attrs }">
                                <span style="color: blue" v-bind="attrs" v-on="on">{{ filter.car_no }}</span>
                              </template>
                              <span>
                                <div v-for="note in filter.request_update">
                                  <span style="color: white">{{ note.created_at }} > </span> {{ note.note }}
                                </div>
                              </span>
                            </v-tooltip>
                            <span v-else>{{ filter.car_no }}</span>
                          </td>
                          <td>{{ filter.customer_name }}</td>
                          <td>
                            {{ filter.contract_date }}
                            <span
                              style="color: red"
                              v-if="$moment().unix() > Number($moment(filter.contract_date).unix()) + notice_time"
                            >
                              ({{ $moment(filter.contract_date).fromNow(true) }})
                            </span>
                            <span v-else> ({{ $moment(filter.contract_date).fromNow(true) }}) </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                cols="6"
                v-for="(item, index) in branchTeams"
                :key="index"
                v-if="filterWork('wait_sentbook_date', item.branch_team_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.branch_team_name }} ({{ filterWork("wait_sentbook_date", item.branch_team_name).length }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th width="25%">ลำดับ</th>
                          <th>ลูกค้า</th>
                          <th>วันรับชุดโอน</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="filter in filterWork('wait_sentbook_date', item.branch_team_name)">
                          <td>
                            <v-tooltip color="primary" right v-if="filter.request_update.length > 0">
                              <template v-slot:activator="{ on, attrs }">
                                <span style="color: blue" v-bind="attrs" v-on="on">{{ filter.car_no }}</span>
                              </template>
                              <span>
                                <div v-for="note in filter.request_update">
                                  <span style="color: white">{{ note.created_at }} > </span> {{ note.note }}
                                </div>
                              </span>
                            </v-tooltip>
                            <span v-else>{{ filter.car_no }}</span>
                          </td>
                          <td>{{ filter.customer_name }}</td>
                          <td>
                            {{ filter.appointment_book_date }}
                            <span
                              style="color: red"
                              v-if="
                                $moment().unix() > Number($moment(filter.appointment_book_date).unix()) + notice_time
                              "
                            >
                              ({{ $moment(filter.appointment_book_date).fromNow(true) }})
                            </span>
                            <span v-else> ({{ $moment(filter.appointment_book_date).fromNow(true) }}) </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                cols="6"
                v-for="(item, index) in branchTeams"
                :key="index"
                v-if="filterWork('wait_receive_money', item.branch_team_name).length > 0"
              >
                <v-card outlined height="100%">
                  <v-card-text>
                    <div style="font-weight: 900; color: blue">
                      {{ item.branch_team_name }} ({{ filterWork("wait_receive_money", item.branch_team_name).length }})
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th width="25%">ลำดับ</th>
                          <th>ลูกค้า</th>
                          <th>วันส่งเล่มทำเงิน</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="filter in filterWork('wait_receive_money', item.branch_team_name)">
                          <td>
                            <v-tooltip color="primary" right v-if="filter.request_update.length > 0">
                              <template v-slot:activator="{ on, attrs }">
                                <span style="color: blue" v-bind="attrs" v-on="on">{{ filter.car_no }}</span>
                              </template>
                              <span>
                                <div v-for="note in filter.request_update">
                                  <span style="color: white">{{ note.created_at }} > </span> {{ note.note }}
                                </div>
                              </span>
                            </v-tooltip>
                            <span v-else>{{ filter.car_no }}</span>
                          </td>
                          <td>{{ filter.customer_name }}</td>
                          <td>
                            {{ filter.appointment_sentbook_date }}
                            <span
                              style="color: red"
                              v-if="
                                $moment().unix() >
                                Number($moment(filter.appointment_sentbook_date).unix()) + notice_time
                              "
                            >
                              ({{ $moment(filter.appointment_sentbook_date).fromNow(true) }})
                            </span>
                            <span v-else> ({{ $moment(filter.appointment_sentbook_date).fromNow(true) }}) </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>

    <v-navigation-drawer v-model="drawerLog" fixed right width="800">
      <v-list-item>
        <v-list-item-action style="margin-right: 5px" @click="drawerLog = false">
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-title>ประวัติ [ {{ car_no }} ]</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item-content>
        <v-card-text class="px-5">
          <div v-for="log in logs">
            <v-btn color="primary" icon x-small dark @click="showData(log.type, log.ref_id)">
              <v-icon> mdi-information-variant </v-icon>
            </v-btn>
            <span style="color: blue">{{ log.created_at }}</span>
            <span style="color: red" v-if="$moment().unix() > Number($moment(log.created_at).unix()) + notice_time">
              ({{ $moment(log.created_at).fromNow(true) }})
            </span>
            <span v-else> ({{ $moment(log.created_at).fromNow(true) }}) </span>
            >
            <span v-if="log.note" :style="log.note.search('แก้ไข') == -1 ? 'color: green' : 'color: orange'">
              {{ log.note.search("แก้ไข") == -1 ? "สร้าง" : "แก้ไข" }}
            </span>
            <span v-else style="color: green">สร้าง</span>
            >
            {{ log.type }}
            <span v-if="log.type == 'อัพเดทข้อมูล'"> > {{ request_update.find((e) => e.id == log.ref_id).note }}</span>
          </div>
        </v-card-text>
      </v-list-item-content>
    </v-navigation-drawer>

    <drawerRequestLog
      :dialog="drawerRequestLog"
      :type="type"
      :id="id"
      @success="getData()"
      @cancleItem="drawerRequestLog = false"
    />
  </div>
</template>

<script>
import * as apiBranch_teams from "@/Api/apiBranch_teams";
import * as apiBank from "@/Api/apiBank";
import * as apiWorks from "@/Api/apiWorks";
import * as customAlart from "@/customJS/customAlart";
import drawerRequestLog from "@/components/dialog/drawerRequestLog";
export default {
  components: {
    drawerRequestLog,
  },
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      notice_time: 259200,
      loading: false,
      data: [],
      branchTeams: [],
      banks: [],
      tab: 0,
      headers: [
        {
          text: "ลำดับ",
          value: "car_no",
        },
        { text: "ทะเบียน", value: "car_regis" },
        { text: "รุ่น", value: "car_series_name" },
        { text: "สาขา", value: "bank_branch_name" },
        { text: "MKT", value: "sale_name" },
        { text: "ลูกค้า", value: "customer_name" },
        { text: "วันที่เซนต์", value: "appointment_bank_date", width: "170px" },
        { text: "วันที่เอกสารครบ", value: "appointment_bank_document_date", width: "170px" },
      ],
      items: [],
      pedding_main_items: ["รอเอกสาร", ""],
      pedding_items: ["รอรูปรถ", "รอเช็คเกอร์", "รอคนค้ำ", "รอคนซื้อแทน", "รอหารถ", "รอรถซ่อม", ""],

      drawerLog: false,
      drawerRequestLog: false,
      car_no: "",
      id: 0,
      type: "",
      logs: [],
      request_update: [],
    };
  },
  mounted() {
    this.getBranchTeam();
    this.getData();
    this.getBank();
  },
  methods: {
    async getBranchTeam() {
      this.loading = true;
      const response = await apiBranch_teams.index();
      this.branchTeams = response.data.filter((d) => {
        return d.branch_team_active == 1;
      });
      let data = {
        id: 0,
        branch_team_name: "ไม่พบทีมสาขา",
      };
      this.branchTeams.push(data);
    },
    async getBank() {
      const response = await apiBank.index();
      this.banks = response.data;
    },
    async getData() {
      this.loading = true;
      const data = new FormData();
      if (this.user_group_permission == 2) {
        data.append("branch_team_id", this.$auth.$storage.getLocalStorage("userDataOrg-branch_team_id"));
      } else if (this.user_group_permission == 3) {
        data.append("user_id", this.$auth.$storage.getLocalStorage("userData-id"));
      }
      data.append("user_group_permission", this.user_group_permission);
      const response = await apiWorks.followWork(data);
      console.log(response.data);
      this.data = response.data.data;
      this.loading = false;
    },
    showLog(logs, request_update, car_no) {
      this.car_no = car_no;
      this.logs = logs;
      this.request_update = request_update;
      this.drawerLog = true;
    },
    showData(type, id) {
      this.type = type;
      this.id = id;
      this.drawerRequestLog = true;
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
            return d.work_status == 5;
          })
          .reduce((total, x) => (x.appointment_bank_type == "ไม่ครบ" ? total + 1 : total), 0);
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
          .reduce((total, x) => (x.appointment_bank_type == "ครบ" ? total + 1 : total), 0);
      } else if (key == "receive_transfer_document") {
        return this.data
          .filter((d) => {
            if (branchTeams == "all") {
              return true;
            } else {
              return d.branch_team_name == branchTeams;
            }
          })
          .filter((d) => {
            return d.appointment_book_date != " " && d.work_status >= 8;
          })
          .reduce((total, x) => (x.appointment_book_date != " " ? total + 1 : total), 0);
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
          .reduce((total, x) => (x.appointment_sentbook_date != " " ? total + 1 : total), 0);
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
          .reduce((total, x) => (x.appointment_money_price > 0 ? total + 1 : total), 0);
      }
    },
    filterWork(key, name, bankNickName) {
      if (key == "all") {
        return this.data
          .filter((d) => {
            if (name == "all") {
              return true;
            } else {
              return d.branch_team_name == name;
            }
          })
          .sort((a, b) => a.sale.toLowerCase().localeCompare(b.sale.toLowerCase()));
      } else if (key == "not_sign") {
        return this.data
          .filter((d) => {
            if (name == "all") {
              return d.work_status >= 2 && d.work_status <= 4;
            } else {
              return d.branch_team_name == name && d.work_status >= 2 && d.work_status <= 4;
            }
          })
          .sort((a, b) => a.sale.toLowerCase().localeCompare(b.sale.toLowerCase()));
      } else if (key == "not_document") {
        return this.data
          .filter((d) => {
            if (name == "all") {
              return d.work_status == 5 && d.appointment_bank_type === "ไม่ครบ";
            } else {
              return d.branch_team_name == name && d.work_status == 5 && d.appointment_bank_type === "ไม่ครบ";
            }
          })
          .sort((a, b) => a.sale.toLowerCase().localeCompare(b.sale.toLowerCase()));
      } else if (key == "wait_approve") {
        const filter = this.data.filter((d) => {
          if (name == "all") {
            return d.work_status == 5 && d.appointment_bank_type === "ครบ";
          } else if (bankNickName) {
            return d.bank_nick_name == bankNickName && d.work_status == 5 && d.appointment_bank_type === "ครบ";
          } else {
            return d.branch_team_name == name && d.work_status == 5 && d.appointment_bank_type === "ครบ";
          }
        });
        return filter.sort((a, b) => {
          const nameA = a.bank_branch_name.toUpperCase();
          const nameB = b.bank_branch_name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else if (key == "wait_transfer_document") {
        return this.data.filter((d) => {
          if (name == "all") {
            return d.work_status >= 8 && d.appointment_book_date == " ";
          } else {
            return d.branch_team_name == name && d.work_status >= 8 && d.appointment_book_date == " ";
          }
        });
      } else if (key == "wait_sentbook_date") {
        return this.data.filter((d) => {
          if (name == "all") {
            return d.work_status >= 8 && d.appointment_book_date != " " && d.appointment_sentbook_date == " ";
          } else {
            return (
              d.branch_team_name == name &&
              d.work_status >= 8 &&
              d.appointment_book_date != " " &&
              d.appointment_sentbook_date == " "
            );
          }
        });
      } else if (key == "wait_receive_money") {
        return this.data.filter((d) => {
          if (name == "all") {
            return d.work_status >= 8 && d.appointment_sentbook_date != " " && d.appointment_money_date == " ";
          } else {
            return (
              d.branch_team_name == name &&
              d.work_status >= 8 &&
              d.appointment_sentbook_date != " " &&
              d.appointment_money_date == " "
            );
          }
        });
      } else if (key == "receive_money") {
        return this.data
          .filter((d) => {
            if (name == "all") {
              return true;
            } else {
              return d.branch_team_name == name;
            }
          })
          .filter((d) => {
            return d.appointment_money_date != " ";
          });
      } else if (key == 7) {
        return this.data
          .filter((d) => {
            if (name == "all") {
              return d.work_status == key;
            } else {
              return d.branch_team_name == name && d.work_status == key;
            }
          })
          .sort((a, b) => a.sale.toLowerCase().localeCompare(b.sale.toLowerCase()));
      } else {
        return this.data.filter((d) => {
          if (name == "all") {
            return d.work_status == key;
          } else {
            return d.branch_team_name == name && d.work_status == key;
          }
        });
      }
    },
  },
};
</script>

<style scoped>
th {
  border-bottom: 1px solid #eee;
}
th + th {
  border-left: 1px solid #eee;
}
td + td {
  border-left: 1px solid #eee;
}
</style>
