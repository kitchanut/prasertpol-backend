<template>
  <div
    v-if="
      user_group_permission == -1 ||
      user_group_permission == 2 ||
      user_group_permission == 3 ||
      user_group_permission == 9 ||
      user_group_permission == 10 ||
      user_group_permission == 11
    "
  >
    <v-card-text>
      <v-row>
        <v-btn
          :color="toggleView == 'small' ? 'lime' : ''"
          :dark="toggleView == 'small' ? true : false"
          v-blur
          class="my-1"
          style="min-width: 0px; padding: 0 8px"
          @click="toggleView = 'small'"
        >
          <v-icon>mdi-view-grid</v-icon>
        </v-btn>

        <v-btn
          :color="toggleView == 'large' ? 'lime' : ''"
          :dark="toggleView == 'large' ? true : false"
          v-blur
          class="ml-1 my-1"
          style="min-width: 0px; padding: 0 8px"
          @click="toggleView = 'large'"
        >
          <v-icon>mdi-apps</v-icon>
        </v-btn>

        <v-dialog v-model="dialogFilter" width="550">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 2 ||
                user_group_permission == 9 ||
                user_group_permission == 10 ||
                user_group_permission == 11
              "
              :color="
                branch_team_id != 0 ||
                branch_id != 0 ||
                user_team_id != 0 ||
                searchInServer != '' ||
                commission_mount != ''
                  ? 'warning'
                  : ''
              "
              v-blur
              class="ml-2 my-1"
              style="min-width: 0px; padding: 0 8px"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-toolbar color="warning" dark flat dense style="font-size: 20px" height="6"> </v-toolbar>

            <v-fab-transition>
              <v-btn icon absolute style="top: 10px; right: 10px" fab small @click="dialogFilter = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-fab-transition>

            <h3 class="text-center" style="font-size: 22px; margin: 10px">กรองข้อมูล</h3>

            <v-divider></v-divider>
            <v-card-text class="mt-5">
              <v-row no-gutters class="d-flex align-center mt-2">
                <v-col cols="4">ค้นหางาน:</v-col>
                <v-col cols="7">
                  <v-text-field
                    v-model="searchInServer"
                    label="ลำดับรถ ชื่อลูกค้า ทะเบียนรถ"
                    outlined
                    single-line
                    hide-details=""
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-btn color="primary" v-blur class="ml-2" style="min-width: 0px; padding: 0 8px" @click="getData">
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row
                v-if="
                  user_group_permission == -1 ||
                  user_group_permission == 9 ||
                  user_group_permission == 10 ||
                  user_group_permission == 11
                "
                no-gutters
                class="d-flex align-center mt-2"
              >
                <v-col cols="4">ทีมสาขา:</v-col>
                <v-col cols="8">
                  <v-autocomplete
                    v-model="branch_team_id"
                    :items="dataSelectBranch_teams"
                    item-text="branch_team_name"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                    @change="changeBranch_team"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row
                v-if="
                  user_group_permission == -1 ||
                  user_group_permission == 9 ||
                  user_group_permission == 10 ||
                  user_group_permission == 11
                "
                no-gutters
                class="d-flex align-center mt-2"
              >
                <v-col cols="4">สาขาย่อย:</v-col>
                <v-col cols="8">
                  <v-autocomplete
                    v-model="branch_id"
                    :items="branches"
                    item-text="branch_name"
                    item-value="id"
                    no-data-text="ไม่มีข้อมูล"
                    outlined
                    dense
                    hide-details
                    @change="selectBranch"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row
                v-if="
                  user_group_permission == -1 ||
                  user_group_permission == 9 ||
                  user_group_permission == 10 ||
                  user_group_permission == 11
                "
                no-gutters
                class="d-flex align-center mt-2"
              >
                <v-col cols="4">ทีมเซล:</v-col>
                <v-col cols="8">
                  <v-autocomplete
                    v-model="user_team_id"
                    :items="user_teams"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="team_name"
                    item-value="id"
                    outlined
                    dense
                    hide-details
                    @change="select_user_team"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>
              <v-row
                v-if="
                  user_group_permission == -1 ||
                  user_group_permission == 9 ||
                  user_group_permission == 10 ||
                  user_group_permission == 11
                "
                no-gutters
                class="d-flex align-center mt-2"
              >
                <v-col cols="4">เดือนคอม:</v-col>
                <v-col cols="8">
                  <v-dialog v-model="menuCommission_mount" width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        autocomplete="true"
                        v-model="commission_mount"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        persistent-hint
                        clearable
                        prepend-icon=""
                        outlined
                        dense
                        hide-details
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="commission_mount"
                      locale="th-TH"
                      type="month"
                      @input="
                        menuCommission_mount = false;
                        getData();
                      "
                    ></v-date-picker>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                color="warning"
                text
                @click="
                  branch_team_id = 0;
                  branch_id = 0;
                  user_team_id = 0;
                  searchInServer = '';
                  commission_mount = '';
                  getData();
                "
              >
                <v-icon left>mdi-replay</v-icon>ล้างข้อมูล
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn
          v-if="
            (user_group_permission == -1 && data.length > 0) ||
            (user_group_permission == 8 && data.length > 0) ||
            (user_group_permission == 10 && data.length > 0) ||
            (user_group_permission == 11 && data.length > 0)
          "
          @click="handleDownload()"
          color="success"
          class="ml-2 my-1"
          style="min-width: 0px; padding: 0 8px"
        >
          <v-icon>mdi-microsoft-excel</v-icon>
        </v-btn>

        <v-btn
          v-if="
            user_group_permission == -1 ||
            user_group_permission == 2 ||
            user_group_permission == 3 ||
            user_group_permission == 10
          "
          class="ml-2 my-1"
          color="primary"
          dark
          @click.stop="AddItem()"
        >
          <v-icon left>mdi-plus</v-icon>
          เพิ่มรายการ
        </v-btn>

        <v-spacer></v-spacer>

        <v-text-field
          v-if="data.length > 0"
          class="my-1"
          v-model="search"
          id="search"
          name="search"
          append-icon="mdi-magnify"
          label="ค้นหา"
          single-line
          outlined
          dense
          hide-details
        >
        </v-text-field>
      </v-row>

      <v-row
        v-if="
          toggleView == 'large' &&
          (user_group_permission == -1 ||
            user_group_permission == 9 ||
            user_group_permission == 10 ||
            user_group_permission == 11)
        "
        class="mt-3"
      >
        <v-col>
          <v-select
            v-model="selectedHeaders"
            :items="headers"
            label="แสดง/ซ่อน หัวข้อ"
            multiple
            outlined
            return-object
            hide-details=""
          >
          </v-select>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card outlined class="mt-3">
      <v-tabs class="mt-1" grow v-model="selectTab" @change="getData">
        <v-tab>
          <v-badge color="green" :content="content[0]"> ทั้งหมด </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[1]"> สนใจ </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[2]"> จอง </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[3]"> มัดจำ </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[4]"> รอทำสัญญา </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[5]"> รอแบงค์อนุมัติ </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[6]"> ไม่อนุมัติ </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[7]"> อนุมัติแล้ว </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[8]"> รอชุดโอน </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[9]"> รอตรวจสอบ </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" :content="content[10]"> รอปิดงาน </v-badge>
        </v-tab>
      </v-tabs>
      <div id="mycontainer">
        <div id="outer">
          <div class="wrapper1" style="overflow-x: scroll; overflow-y: hidden">
            <div :style="'width:' + tableWidth + 'px; height: 20px;'"></div>
          </div>

          <v-data-table
            class="table-border table-border-top"
            :headers="showHeaders"
            :items="data"
            :items-per-page="item_per_page"
            :footer-props="{
              'items-per-page-options': [5, 10, 20, 50, 100, -1],
            }"
            :search="search"
            :loading="loading"
            :multi-sort="true"
            no-data-text="ไม่มีข้อมูล"
            loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
            :mobile-breakpoint="0"
            dense
          >
            <template v-slot:[`item.work_status`]="{ item }">
              <div v-if="item.status_del == 0">
                <v-btn class="mt-1" small depressed color="red" dark>ยกเลิก</v-btn>
              </div>
              <div v-else>
                <v-chip v-if="item.work_status == '1'" small color="warning">รอจอง</v-chip>
                <v-chip v-if="item.work_status == '2'" small color="warning">รอมัดจำ</v-chip>
                <v-chip v-if="item.work_status == '3'" small color="secondary">รอนัดทำสัญญา</v-chip>
                <v-chip v-if="item.work_status == '4'" small color="secondary">รอทำสัญญา</v-chip>
                <v-chip v-if="item.work_status == '5'" small color="pink" dark>รอแบงค์อนุมัติ</v-chip>
                <v-chip v-if="item.work_status == '6'" small color="red">แบงค์ไม่อนุมัติ</v-chip>
                <v-chip v-if="item.work_status == '7'" small color="warning">รอปล่อยรถ</v-chip>
                <v-chip v-if="item.work_status == '8'" small color="primary">รอชุดโอน</v-chip>
                <v-chip v-if="item.work_status == '9'" small color="warning"> รอตรวจสอบ </v-chip>
                <v-chip v-if="item.work_status == '10'" small color="info">รอปิดงาน</v-chip>
                <v-chip v-if="item.work_status == '11'" small color="success">ปิดงาน</v-chip>
              </div>

              <v-chip v-if="item.pathner_job_technician == 1" x-small color="error" outlined>มีงานซ่อมนอก</v-chip>
              <v-chip v-if="item.job_fix != 0" x-small color="error" outlined>มีงานซ่อม</v-chip>
              <div v-if="item.contract != null">
                <v-chip v-if="item.appointment_book_date == ' '" x-small color="error" outlined>ชุดโอน</v-chip>
                <v-chip v-if="item.appointment_transfer_date == ' '" x-small color="error" outlined>โอนรถ</v-chip>
                <v-chip v-if="item.appointment_money_date == ' '" x-small color="error" outlined>ได้เงิน</v-chip>
                <v-chip v-if="item.appointment_mkt_date == ' '" x-small color="error" outlined>MRT</v-chip>
              </div>
            </template>
            <template v-slot:[`item.amount_price`]="{ item }">
              {{ Number(item.amount_price).toLocaleString() }}
            </template>
            <template v-slot:[`item.amount_down`]="{ item }">
              {{ Number(item.amount_down).toLocaleString() }}
            </template>
            <template v-slot:[`item.car_price_vat`]="{ item }">
              {{ Number(item.car_price_vat).toLocaleString() }}
            </template>
            <template v-slot:[`item.customer`]="{ item }">
              <h5 v-if="item.customer_id == null" class="red--text">
                {{ item.customer_name }}
              </h5>
              <h5 v-else class="green--text">{{ item.customer_name }}</h5>
            </template>

            <template v-slot:[`item.sale`]="{ item }">
              <h5 v-if="item.sale_id == null || item.sale_id == 0" class="red--text">ยังไม่เลือก</h5>
              <h5 v-else>
                <a
                  href="javascript:void(0)"
                  class="textOneLine"
                  style="font-size: 0.8rem"
                  @click="getSale(item.sale_id)"
                >
                  {{ item.sale == null ? "" : item.sale }}
                </a>
              </h5>
            </template>

            <template v-slot:[`item.branch_name`]="{ item }">
              <div v-if="item.sale_id == null || item.sale_id == 0" class="red--text">
                {{ item.branch_name }}
              </div>
              <div v-else>
                {{ item.branch_name }}
              </div>
            </template>

            <template v-slot:[`item.booking_date`]="{ item }">
              <div v-if="item.booking_date != ' '">{{ $moment(item.booking_date).format("YYYY-MM-DD") }}</div>
            </template>

            <template v-slot:[`item.deposit`]="{ item }">
              <div v-if="item.deposit != ' '">{{ Number(item.deposit).toLocaleString() }}</div>
            </template>

            <template v-slot:[`item.down`]="{ item }">
              <div v-if="item.down >= 0">{{ Number(item.down).toLocaleString() }}</div>
              <!-- <div v-else>{{ item.down }}</div> -->
            </template>

            <template v-slot:[`item.commission`]="{ item }">
              <div v-if="item.commission > 0">{{ Number(item.commission).toLocaleString() }}</div>
            </template>

            <template v-slot:[`item.insurance`]="{ item }">
              <div v-if="item.insurance > 0">{{ Number(item.insurance).toLocaleString() }}</div>
            </template>

            <template v-slot:[`item.finance_price`]="{ item }">
              <div v-if="item.finance_price > 0">{{ Number(item.finance_price).toLocaleString() }}</div>
            </template>

            <template v-slot:[`item.finance_price_vat`]="{ item }">
              <div v-if="item.finance_price > 0">{{ Number(item.finance_price * 1.07).toLocaleString() }}</div>
            </template>

            <template v-slot:[`item.appointment_bank_type`]="{ item }">
              <div v-if="item.appointment_bank_type == 'ครบ'" style="color: green" class="text-center">
                {{ item.appointment_bank_type }}
              </div>
              <div v-if="item.appointment_bank_type == 'ไม่ครบ'">
                <div style="color: red" class="text-center">{{ item.appointment_bank_type }}</div>
                <div v-html="item.appointment_bank_list" class="text-left"></div>
              </div>
            </template>

            <template v-slot:[`item.appointment_money_price`]="{ item }">
              <span v-if="item.appointment_money_price != ' '">
                {{
                  Number(item.appointment_money_price).toLocaleString("th-TH", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </span>
            </template>

            <template v-slot:[`item.commission_mount`]="{ item }">
              <a
                v-if="item.commission_mount != ' '"
                style="cursor: pointer"
                @click="CarTransferred(item.car_no, item.id)"
              >
                {{ item.commission_mount }}
              </a>
              <div
                v-else
                x-small
                class="white--text"
                rounded
                dark
                @click="CarTransferred(item.car_no, item.id)"
                style="cursor: pointer"
              >
                + เพิ่ม
              </div>
            </template>

            <template v-slot:[`item.monthly_payment`]="{ item }">
              <div v-if="item.monthly_payment > 0">{{ Number(item.monthly_payment).toLocaleString() }}</div>
            </template>

            <template v-slot:[`item.user`]="{ item }">
              <span style="font-size: 12px">{{ item.user }}</span>
            </template>

            <template v-slot:[`item.note`]="{ item }">
              <div v-if="item.note != ' '" v-html="item.note" @click="note(item.id)" style="cursor: pointer"></div>
              <div v-else x-small class="white--text" rounded dark @click="note(item.id)" style="cursor: pointer">
                + เพิ่ม
              </div>
            </template>

            <template v-slot:[`item.note_sale`]="{ item }">
              <div
                v-if="item.note_sale != ' '"
                @click="note(item.id)"
                v-html="item.note_sale"
                style="cursor: pointer"
              ></div>
              <div v-else x-small class="white--text" rounded dark @click="note(item.id)" style="cursor: pointer">
                + เพิ่ม
              </div>
            </template>

            <template v-slot:[`item.request_update`]="{ item }">
              <div v-for="item in item.request_update">
                <span style="color: blue">{{ item.created_at }}:</span> {{ item.note }}
              </div>
              <DialogRequestUpdate
                action="add"
                appearance="text"
                :working_id="item.id"
                :car_no="item.car_no"
                @success="getData()"
              />
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list class="work">
                  <v-list-item
                    @click="editItem(item.id)"
                    v-if="
                      (item.work_status < 7 && user_group_permission == 3) ||
                      (item.work_status < 7 && user_group_permission == 2) ||
                      user_group_permission == -1
                    "
                  >
                    <v-list-item-title>ดูข้อมูลลูกค้าสนใจ</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      user_group_permission == -1 ||
                      user_group_permission == 2 ||
                      user_group_permission == 3 ||
                      user_group_permission == 9 ||
                      user_group_permission == 10
                    "
                    @click="Booking(item.car_no, item.id, item.car_id, item.customer_id, item.sale_id)"
                  >
                    <v-list-item-title :style="item.work_status == 1 ? 'color:blue' : ''">{{
                      item.work_status > 1 ? "ดูข้อมูลการจอง" : "จอง"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 2 && user_group_permission == -1) ||
                      (item.work_status >= 2 && user_group_permission == 2) ||
                      (item.work_status >= 2 && user_group_permission == 3) ||
                      (item.work_status >= 2 && user_group_permission == 9) ||
                      (item.work_status >= 2 && user_group_permission == 11) ||
                      (item.work_status >= 2 && user_group_permission == 10)
                    "
                    @click="Financial(item.car_no, item.id, '1')"
                  >
                    <v-list-item-title :style="item.work_status == 2 ? 'color:blue' : ''">{{
                      item.work_status > 2 ? "ดูข้อมูลวางมัดจำ" : "วางมัดจำ"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 3 && user_group_permission == -1) ||
                      (item.work_status >= 3 && user_group_permission == 2) ||
                      (item.work_status >= 3 && user_group_permission == 3) ||
                      (item.work_status >= 3 && user_group_permission == 10)
                    "
                    @click="Appointment(item.car_no, item.id)"
                  >
                    <v-list-item-title :style="item.work_status == 3 ? 'color:blue' : ''">{{
                      item.work_status > 3 ? "ดูข้อมูลการฝาก/นัด" : "ฝาก/นัด"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 3 && user_group_permission == -1) ||
                      (item.work_status >= 3 && user_group_permission == 2) ||
                      (item.work_status >= 3 && user_group_permission == 3) ||
                      (item.work_status >= 3 && user_group_permission == 9) ||
                      (item.work_status >= 3 && user_group_permission == 10) ||
                      (item.work_status >= 3 && user_group_permission == 11)
                    "
                    @click="AppointmentBank(item.car_no, item.id)"
                  >
                    <v-list-item-title :style="item.work_status == 3 ? 'color:blue' : ''">{{
                      item.work_status > 3 ? `ดูข้อมูลการทำสัญญา (${item.appointment_bank_type})` : `ทำสัญญา`
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 5 && user_group_permission == -1) ||
                      (item.work_status >= 5 && user_group_permission == 9) ||
                      (item.work_status >= 5 && user_group_permission == 10)
                    "
                    @click="PreApprove(item.id)"
                  >
                    <v-list-item-title :style="item.work_status == 5 ? 'color:blue' : ''">{{
                      item.work_status > 5 ? "ดูข้อมูลอนุมัติเบื้องต้น" : "อนุมัติเบื้องต้น"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 5 && user_group_permission == -1) ||
                      (item.work_status >= 5 && user_group_permission == 9) ||
                      (item.work_status >= 5 && user_group_permission == 10)
                    "
                    @click="BankApproved(item.car_no, item.id)"
                  >
                    <v-list-item-title :style="item.work_status == 5 ? 'color:blue' : ''">{{
                      item.work_status > 5 ? "ดูข้อมูลแบงค์อนุมัติ" : "แบงค์อนุมัติ"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status == 5 && user_group_permission == -1) ||
                      (item.work_status == 5 && user_group_permission == 9) ||
                      (item.work_status == 5 && user_group_permission == 10)
                    "
                    @click="BankUnApproved(item.car_no, item.id)"
                  >
                    <v-list-item-title :style="item.work_status == 5 ? 'color:red' : ''"
                      >แบงค์ไม่อนุมัติ</v-list-item-title
                    >
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 7 && user_group_permission == -1) ||
                      (item.work_status >= 7 && user_group_permission == 2) ||
                      (item.work_status >= 7 && user_group_permission == 3) ||
                      (item.work_status >= 7 && user_group_permission == 9) ||
                      (item.work_status >= 7 && user_group_permission == 10) ||
                      (item.work_status >= 7 && user_group_permission == 11)
                    "
                    @click="Contract(item.car_no, item.id, item.car_id, item.customer_id)"
                  >
                    <v-list-item-title :style="item.work_status == 7 ? 'color:blue' : ''">{{
                      item.work_status > 7 ? "ดูข้อมูลปล่อยรถ" : "ปล่อยรถ"
                    }}</v-list-item-title>
                  </v-list-item>

                  <!-- <v-list-item
                    v-if="
                      (item.work_status >= 7 && user_group_permission == -1) ||
                      (item.work_status >= 7 && user_group_permission == 2) ||
                      (item.work_status >= 7 && user_group_permission == 3) ||
                      (item.work_status >= 7 && user_group_permission == 9)
                    "
                    @click="InsurCertificate(item.car_no, item.id, item.car_id, item.customer_id)"
                  >
                    <v-list-item-title :style="item.work_status == 7 ? 'color:blue' : ''">{{
                      item.work_status > 7 ? "ดูข้อมูลใบประกันรถยนต์" : "ใบประกันรถยนต์"
                    }}</v-list-item-title>
                  </v-list-item> -->

                  <v-list-item
                    v-if="
                      (item.work_status >= 7 && user_group_permission == -1) ||
                      (item.work_status >= 7 && user_group_permission == 9) ||
                      (item.work_status >= 7 && user_group_permission == 10) ||
                      (item.work_status >= 5 && user_group_permission == 11)
                    "
                    @click="CarTransferred(item.car_no, item.id)"
                  >
                    <v-list-item-title :style="item.work_status == 7 ? 'color:brown' : ''">{{
                      item.work_status > 7 ? "ดูข้อมูลชุดโอน" : "ชุดโอน"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 7 && user_group_permission == -1) ||
                      (item.work_status >= 7 && user_group_permission == 9) ||
                      (item.work_status >= 7 && user_group_permission == 10)
                    "
                    @click="ReceivingMoney(item.id, item.car_no, 1)"
                  >
                    <v-list-item-title :style="item.work_status == 7 ? 'color:green' : ''">
                      {{ item.work_status > 7 ? "ดูข้อมูลบันทึกการรับเงิน (ค่าตัวรถ)" : "บันทึกการรับเงิน (ค่าตัวรถ)" }}
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 7 && user_group_permission == -1) ||
                      (item.work_status >= 7 && user_group_permission == 9) ||
                      (item.work_status >= 7 && user_group_permission == 10)
                    "
                    @click="ReceivingMoney(item.id, item.car_no, 2)"
                  >
                    <v-list-item-title :style="item.work_status == 7 ? 'color:green' : ''">
                      {{ item.work_status > 7 ? "ดูข้อมูลบันทึกการรับเงิน (ค่าคอม)" : "บันทึกการรับเงิน (ค่าคอม)" }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    v-if="
                      (item.work_status == 9 && user_group_permission == -1) ||
                      (item.work_status == 9 && user_group_permission == 10) ||
                      (item.work_status == 9 && user_group_permission == 11)
                    "
                    @click="update_status(item.id, item.work_status)"
                  >
                    <v-list-item-title :style="item.work_status == 9 ? 'color:green' : ''"
                      >ยืนยันการบันทึกเอกสารครบถ้วน</v-list-item-title
                    >
                  </v-list-item>

                  <v-list-item
                    v-if="
                      (item.work_status >= 10 && user_group_permission == -1) ||
                      (item.work_status >= 10 && user_group_permission == 10) ||
                      (item.work_status >= 10 && user_group_permission == 11)
                    "
                    @click="
                      CarEndJob(
                        item.id,
                        item.appointment_book_date,
                        item.appointment_transfer_date,
                        item.appointment_sentbook_date,
                        item.appointment_money_date
                      )
                    "
                  >
                    <v-list-item-title :style="item.work_status == 10 ? 'color:green' : ''">ปิดงาน</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    @click="note(item.id)"
                    v-if="
                      user_group_permission == -1 ||
                      user_group_permission == 2 ||
                      user_group_permission == 3 ||
                      user_group_permission == 9 ||
                      user_group_permission == 10
                    "
                  >
                    <v-list-item-title>หมายเหตุ</v-list-item-title>
                  </v-list-item>

                  <v-divider></v-divider>
                  <v-list-item
                    v-if="
                      (item.work_status >= 3 && user_group_permission == -1) ||
                      (item.work_status >= 3 && user_group_permission == 2) ||
                      (item.work_status >= 3 && user_group_permission == 3) ||
                      (item.work_status >= 3 && user_group_permission == 9) ||
                      (item.work_status >= 3 && user_group_permission == 10) ||
                      (item.work_status >= 3 && user_group_permission == 11)
                    "
                    @click="ReceiveDown(item.car_no, item.id)"
                  >
                    <v-list-item-title style="color: green">{{
                      item.work_status > 3 ? "ใบสำคัญรับเงิน" : "ใบสำคัญรับเงิน"
                    }}</v-list-item-title>
                  </v-list-item>

                  <dialogInsurancesList
                    v-if="
                      (item.work_status >= 8 && user_group_permission == -1) ||
                      (item.work_status >= 8 && user_group_permission == 2) ||
                      (item.work_status >= 8 && user_group_permission == 3) ||
                      (item.work_status >= 8 && user_group_permission == 9)
                    "
                    appearance="list"
                    :car_id="item.car_id"
                    :car_no="item.car_no"
                  />

                  <dialogInstallment
                    v-if="
                      (item.work_status >= 8 && user_group_permission == -1) ||
                      (item.work_status >= 8 && user_group_permission == 2) ||
                      (item.work_status >= 8 && user_group_permission == 3) ||
                      (item.work_status >= 8 && user_group_permission == 9)
                    "
                    appearance="list"
                    :working_id="item.id"
                    :car_no="item.car_no"
                  />

                  <v-divider v-if="item.work_status >= 3 && user_group_permission == -1"></v-divider>
                  <v-list-item
                    v-if="item.work_status >= 3 && user_group_permission == -1"
                    @click="JobTechnician(item.car_no, item.id, item.car_id)"
                  >
                    <v-list-item-title>{{
                      item.work_status > 3 ? "ดูข้อมูลซ่อม (อู่ใน)" : "แจ้งซ่อม (อู่ใน)"
                    }}</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    v-if="item.work_status >= 3 && user_group_permission == -1"
                    @click="PathnerJobTechnician(item.car_no, item.id, item.car_id, item.car_stock)"
                  >
                    <v-list-item-title>แจ้งซ่อม (อู่นอก)</v-list-item-title>
                  </v-list-item>

                  <v-divider v-if="user_group_permission == -1 || user_group_permission == 9"></v-divider>
                  <v-list-item
                    v-if="user_group_permission == -1 || user_group_permission == 9"
                    @click="AllInfoCar(item.car_id, item.car_no)"
                  >
                    <v-list-item-title>ภาพรวมของรถ</v-list-item-title>
                  </v-list-item>
                  <v-divider v-if="user_group_permission == -1 || user_group_permission == 9"></v-divider>
                  <v-list-item
                    @click="deleteItem(item.id)"
                    v-if="user_group_permission == -1 || user_group_permission == 10 || item.work_status <= 7"
                  >
                    <v-list-item-title style="color: red">ยกเลิก</v-list-item-title>
                  </v-list-item>
                  <v-divider v-if="user_group_permission == -1 || user_group_permission == 9"></v-divider>
                  <v-list-item
                    @click="update_status(item.id, item.work_status)"
                    v-if="user_group_permission == -1 || user_group_permission == 10"
                  >
                    <v-list-item-title>อัพเดตสถานะ</v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    @click="rollback_status(item.id, item.work_status)"
                    v-if="(user_group_permission == -1 || user_group_permission == 10) && item.work_status > 2"
                  >
                    <v-list-item-title>ถอยสถานะ</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </div>
      </div>
    </v-card>

    <dialogWork
      :dialogWork="dialogWork"
      :idWork="idWork"
      :actionWork="actionWork"
      :formTitleWork="formTitleWork"
      @cancleItem="dialogWork = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogBooking
      :dialogBooking="dialogBooking"
      :idWork="idWork"
      :idCar="idCar"
      :car_no="car_no"
      :idCustomer="idCustomer"
      :actionBooking="actionBooking"
      :formTitleBooking="formTitleBooking"
      @cancleItem="dialogBooking = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogFinancial
      :dialogFinancial="dialogFinancial"
      :idWork="idWork"
      :car_no="car_no"
      :payment_type="payment_type"
      :actionFinancial="actionFinancial"
      :formTitleFinancial="formTitleFinancial"
      @cancleItem="dialogFinancial = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogReceiveDown
      :dialog="dialogReceiveDown"
      :idWork="idWork"
      :car_no="car_no"
      @cancleItem="dialogReceiveDown = false"
    />

    <dialogJobTechnician
      :dialogJobTechnician="dialogJobTechnician"
      :idWork="idWork"
      :jobType="jobType"
      :idCar="idCar"
      :car_no="car_no"
      :actionJobTechnician="actionJobTechnician"
      :formTitleJobTechnician="formTitleJobTechnician"
      @cancleItem="dialogJobTechnician = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogPathnerJobTechnician
      :dialogPathnerJobTechnician="dialogPathnerJobTechnician"
      :jobType="jobType"
      :idCar="idCar"
      :idWork="idWork"
      :car_no="car_no"
      :actionPathnerJobTechnician="actionPathnerJobTechnician"
      :formTitlePathnerJobTechnician="formTitlePathnerJobTechnician"
      @cancleItem="dialogPathnerJobTechnician = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogContract
      :dialogContract="dialogContract"
      :idWork="idWork"
      :idCar="idCar"
      :car_no="car_no"
      :idCustomer="idCustomer"
      :actionContract="actionContract"
      :formTitleContract="formTitleContract"
      @cancleItem="dialogContract = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogAppointment
      :dialogAppointment="dialogAppointment"
      :idWork="idWork"
      :car_no="car_no"
      :status_bank="status_bank"
      :actionAppointment="actionAppointment"
      :formTitleAppointment="formTitleAppointment"
      @cancleItem="dialogAppointment = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogPreApprove
      :dialog="dialogPreApprove"
      :working_id="idWork"
      @cancleItem="dialogPreApprove = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogAppointmentBank
      :dialogAppointmentBank="dialogAppointmentBank"
      :idWork="idWork"
      :car_no="car_no"
      :status_bank="status_bank"
      :actionAppointmentBank="actionAppointmentBank"
      :formTitleAppointmentBank="formTitleAppointmentBank"
      @cancleItem="dialogAppointmentBank = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogInsurCertificate
      :dialogInsurCertificate="dialogInsurCertificate"
      :idWork="idWork"
      :jobType="jobType"
      :car_no="car_no"
      :actionInsurCertificate="actionInsurCertificate"
      :formTitleInsurCertificate="formTitleInsurCertificate"
      @cancleItem="dialogInsurCertificate = false"
      @success="addSuccess"
      @error="addError"
    />

    <dialogMiniUser :dialog="dialogMiniUser" :id="sale_id" @cancleItem="dialogMiniUser = false" />

    <dialogReceivingMoney
      :dialogReceivingMoney="dialogReceivingMoney"
      :idWork="idWork"
      :car_no="car_no"
      :actionReceivingMoney="actionReceivingMoney"
      :receivingMoney_type="receivingMoney_type"
      :formTitleReceivingMoney="formTitleReceivingMoney"
      @cancleItem="dialogReceivingMoney = false"
      @success="addSuccess"
      @error="addError"
    />

    <febButtonWork
      v-if="user_group_permission == -1 || user_group_permission == 10"
      v-show="btnUpdate"
      @success="addSuccess"
      @disbleBtn="btnUpdate = false"
    />

    <dialogNote
      :dialogNote="dialogNote"
      :idNote="idNote"
      @cancleItem="dialogNote = false"
      @success="addSuccess"
      @error="addError"
    />
  </div>
</template>

<script>
import * as apiWorks from "@/Api/apiWorks";
import * as customAlart from "@/customJS/customAlart";
import * as apiBranches from "@/Api/apiBranches";
import * as apiBranch_teams from "@/Api/apiBranch_teams";
import * as apiUser_teams from "@/Api/apiUser_teams";

import dialogWork from "@/components/dialog/dialogWork";
import dialogBooking from "@/components/dialog/dialogBooking";
import dialogFinancial from "@/components/dialog/dialogFinancial";
import dialogReceiveDown from "@/components/dialog/dialogReceiveDown";
import dialogContract from "@/components/dialog/dialogContract";
import dialogJobTechnician from "@/components/dialog/dialogJobTechnician";
import dialogAppointment from "@/components/dialog/dialogAppointment";
import dialogPreApprove from "@/components/dialog/dialogPreApprove";
import dialogAppointmentBank from "@/components/dialog/dialogAppointmentBank";
import dialogInsurCertificate from "@/components/dialog/dialogInsurCertificate";
import dialogPathnerJobTechnician from "@/components/dialog/dialogPathnerJobTechnician";
import dialogReceivingMoney from "@/components/dialog/dialogReceivingMoney";
import dialogNote from "@/components/dialog/dialogNote";
import dialogRequestUpdate from "@/components/dialog/dialogRequestUpdate";
import dialogInsurancesList from "@/components/dialog/dialogInsurancesList";
import dialogInstallment from "@/components/dialog/dialogInstallment";

import dialogMiniUser from "@/components/dialog/dialogMini_user";
import febButtonWork from "@/components/febButtonWork";

import moment from "moment";

export default {
  components: {
    dialogWork,
    dialogBooking,
    dialogMiniUser,
    dialogFinancial,
    dialogReceiveDown,
    dialogContract,
    dialogJobTechnician,
    dialogPathnerJobTechnician,
    dialogAppointment,
    dialogPreApprove,
    dialogAppointmentBank,
    dialogInsurCertificate,
    dialogReceivingMoney,
    febButtonWork,
    dialogNote,
    dialogRequestUpdate,
    dialogInsurancesList,
    dialogInstallment,
  },
  data() {
    return {
      loading: false,
      btnUpdate: true,
      toggleView: "small",
      dialogFilter: false,
      item_per_page: 10,
      tableWidth: 0,

      searchInServer: "",

      search: "",
      branch_team_id: 0,
      dataSelectBranch_teams: [],
      menuCommission_mount: false,
      commission_mount: "",

      dialogMiniUser: false,
      sale_id: "",
      branches_all: [],
      btnloading: false,
      formDataLoading: false,
      idWork: "",
      idCustomer: "",
      idCar: "",
      car_no: "",
      jobType: 1,
      branch_name: "",

      dialogWork: false,
      formTitleWork: "Add",
      actionWork: "add",

      dialogBooking: false,
      formTitleBooking: "Add",
      actionBooking: "check",

      dialogFinancial: false,
      formTitleFinancial: "Add",
      actionFinancial: "check",
      payment_type: "1",

      dialogContract: false,
      formTitleContract: "Add",
      actionContract: "check",

      dialogReceiveDown: false,

      dialogJobTechnician: false,
      formTitleJobTechnician: "Add",
      actionJobTechnician: "check",

      dialogPathnerJobTechnician: false,
      formTitlePathnerJobTechnician: "Add",
      actionPathnerJobTechnician: "add",

      dialogAppointment: false,
      formTitleAppointment: "Add",
      actionAppointment: "check",

      dialogPreApprove: false,

      dialogAppointmentBank: false,
      formTitleAppointmentBank: "Add",
      actionAppointmentBank: "check",

      dialogInsurCertificate: false,
      formTitleInsurCertificate: "Add",
      actionInsurCertificate: "check",

      dialogReceivingMoney: false,
      formTitleReceivingMoney: "Add",
      actionReceivingMoney: "check",
      receivingMoney_type: 1,

      dialogNote: false,
      idNote: "",

      selectedHeaders: [],
      status_bank: 5,
      headers: [],
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      branch_team_name: "ทั้งหมด",
      headersMap: [],
      data: [],
      user_teams_all: [],
      user_teams: [],
      user_team_id: 0,
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      // moment: moment(),
      branch_id: 0,
      branches: [],
      selectTab: 0,
      content: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      timer: "",
    };
  },
  beforeMount() {
    if (this.user_group_permission == 2 || this.user_group_permission == 3) {
      this.branch_id = this.$auth.$storage.getLocalStorage("userData-branch_id");
    } else {
      this.branch_id = 0;
    }
  },
  async mounted() {
    this.getUser_teams();
    this.getBranches();
    this.getBranch_teams();
    this.getData();
    this.fileExcel_name();

    this.timer = setInterval(() => {
      this.getData();
    }, 600000);

    $(".v-data-table__wrapper").scroll(function () {
      $(".wrapper1").scrollLeft($(".v-data-table__wrapper").scrollLeft());
    });
    $(".wrapper1").scroll(function () {
      $(".v-data-table__wrapper").scrollLeft($(".wrapper1").scrollLeft());
    });
  },
  beforeDestroy() {
    // Clear Timer
    clearInterval(this.timer);
    // console.log("beforeDestroy");
  },

  beforeUpdate() {},
  created() {
    if (
      this.user_group_permission == -1 ||
      this.user_group_permission == 9 ||
      this.user_group_permission == 10 ||
      this.user_group_permission == 11
    ) {
      this.headers = [
        { text: "จัดการ", value: "actions", sortable: false, class: "textOneLine " },
        { text: "สถานะหลัก", value: "work_status", class: "textOneLine" },

        { text: "รหัสงาน", value: "codeWorking", class: "textOneLine", align: "center" },
        { text: "ลำดับรถ", value: "car_no", class: "textOneLine" },
        { text: "ยี่ห้อ", value: "car_model_name", class: "textOneLine" },
        { text: "รุ่น", value: "car_series_name", class: "textOneLine", width: "150px" },
        { text: "รุ่นย่อย", value: "car_serie_sub_name", class: "textOneLine", width: "200px" },
        { text: "ปีรถ", value: "car_year", class: "textOneLine" },
        { text: "ทะเบียน", value: "car_regis", class: "textOneLine" },
        { text: "ทะเบียนใหม่", value: "car_regis_current", class: "textOneLine" },
        { text: "สี", value: "color_name", class: "textOneLine", width: "100px" },
        { text: "จัด", value: "amount_price", class: "textOneLine ", align: "end" },
        { text: "ดาวน์", value: "amount_down", class: "textOneLine ", align: "end" },
        { text: "ขาย", value: "car_price_vat", class: "textOneLine ", align: "end" },
        { text: "เซล", value: "sale", class: "textOneLine " },
        { text: "ทีมเซล", value: "team_name", class: "textOneLine " },
        { text: "ทีมสาขา", value: "branch_team_name", class: "textOneLine " },
        { text: "สาขาย่อย", value: "branch_name", class: "textOneLine " },
        { text: "ลูกค้า", width: "200px", value: "customer_name", class: "textOneLine " },
        { text: "เบอร์ลูกค้า", value: "customer_tel", class: "textOneLine " },
        { text: "วันจอง", value: "booking_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "เงินจอง", value: "deposit", class: "textOneLine ", align: "end" },
        { text: "ดาวน์+F", value: "down", class: "textOneLine ", align: "end" },
        { text: "ค่านายหน้า", value: "commission", class: "textOneLine ", align: "end" },
        { text: "สมาร์ทชัว+ประกัน", value: "insurance", class: "textOneLine ", align: "end" },
        { text: "ยอดจัด", value: "finance_price", class: "textOneLine ", align: "end" },
        { text: "รวมยอดจัด", value: "finance_price_vat", class: "textOneLine ", align: "end" },
        { text: "เกรด", value: "customer_grade", class: "textOneLine " },
        { text: "ทราบข่าว", value: "hear_from", class: "textOneLine " },
        { text: "อาชีพลูกค้า", value: "customer_job", width: "160px" },
        { text: "วันที่ฝาก", value: "deposit_date", width: "120px", align: "center" },
        { text: "วันที่นัด", value: "appointment_date_before", width: "120px", align: "center" },
        { text: "วันที่เซนต์", value: "appointment_bank_date", width: "120px", align: "center" },
        { text: "MKT", value: "sale_name", class: "textOneLine ", align: "center" },
        { text: "ธนาคาร", value: "bank_nick_name", class: "textOneLine ", align: "center" },
        { text: "เอกสาร", value: "appointment_bank_type", class: "textOneLine ", width: "180px", align: "center" },
        { text: "วันที่เอกสารครบ", value: "appointment_bank_document_date", width: "120px", align: "center" },
        { text: "ผลเครดิต", value: "credit", width: "100px", align: "center" },
        { text: "จัดได้ %", value: "car_price_persen", width: "100px", align: "center" },
        { text: "อนุมัติเบื้องต้น", value: "pre_approve_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "อนุมัติ", value: "appointment_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "ปล่อยรถ", value: "contract_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "ชุดโอนมา", value: "appointment_book_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "โอนรถ", value: "appointment_transfer_date", class: "textOneLine ", width: "120px", align: "center" },
        {
          text: "ส่งเล่มทำเงิน",
          value: "appointment_sentbook_date",
          class: "textOneLine ",
          width: "120px",
          align: "center",
        },
        { text: "เงินมา", value: "appointment_money_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "จำนวน", value: "appointment_money_price", class: "textOneLine ", align: "end" },
        { text: "งวดแรก", value: "customer_payment_due", class: "textOneLine ", width: "120px", align: "center" },
        { text: "ค่างวด", value: "customer_payment", class: "textOneLine ", width: "120px", align: "center" },
        { text: "เดือนคอม", value: "commission_mount", class: "textOneLine ", width: "120px", align: "center" },
        { text: "หมายเหตุ (ส่วนกลาง)", value: "note", width: "220px" },
        { text: "หมายเหตุ (เซล)", value: "note_sale", width: "400px" },
        { text: "รายการอัพเดท", value: "request_update", width: "500px" },
        { text: "ผู้ลงข้อมูล", value: "user", class: "textOneLine " },
      ];
    } else {
      this.headers = [
        { text: "จัดการ", value: "actions", sortable: false, class: "textOneLine" },
        { text: "สถานะหลัก", value: "work_status", class: "textOneLine" },
        { text: "รหัสงาน", value: "codeWorking", align: "center", class: "textOneLine" },
        { text: "ลำดับรถ", value: "car_no", class: "textOneLine" },
        { text: "ยี่ห้อ", value: "car_model_name", class: "textOneLine" },
        { text: "รุ่น", value: "car_series_name", class: "textOneLine", width: "160px" },
        { text: "รุ่นย่อย", value: "car_serie_sub_name", class: "textOneLine", width: "200px" },
        { text: "ทะเบียน", value: "car_regis", class: "textOneLine" },
        { text: "ทะเบียนใหม่", value: "car_regis_current", class: "textOneLine" },
        { text: "ปีรถ", value: "car_year", class: "textOneLine" },
        { text: "สี", value: "color_name", class: "textOneLine" },
        { text: "ลูกค้า", value: "customer_name", width: "200px", class: "textOneLine" },
        { text: "เบอร์ลูกค้า", value: "customer_tel", class: "textOneLine" },
        { text: "เซล", value: "sale", class: "textOneLine" },
        { text: "ทีมเซล", value: "team_name", class: "textOneLine" },
        { text: "ทีมสาขา", value: "branch_team_name", class: "textOneLine " },
        { text: "สาขาย่อย", value: "branch_name", class: "textOneLine" },
        { text: "วันจอง", value: "booking_date", class: "textOneLine", width: "120px", align: "center" },
        { text: "เงินจอง", value: "deposit", class: "textOneLine ", align: "end" },
        { text: "ดาวน์+F", value: "down", class: "textOneLine ", align: "end" },
        { text: "ค่านายหน้า", value: "commission", class: "textOneLine ", align: "end" },
        { text: "สมาร์ทชัว+ประกัน", value: "", class: "textOneLine ", align: "end" },
        { text: "ยอดจัด", value: "finance_price", class: "textOneLine ", align: "end" },
        { text: "รวมยอดจัด", value: "finance_price_vat", class: "textOneLine ", align: "end" },
        { text: "ทราบข่าว", value: "hear_from", class: "textOneLine" },
        { text: "อาชีพลูกค้า", value: "customer_job", width: "160px" },
        { text: "วันที่ฝาก", value: "deposit_date", width: "120px", align: "center" },
        { text: "วันที่เซนต์", value: "appointment_date_before", width: "120px", align: "center" },
        { text: "วันที่เซนต์", value: "appointment_bank_date", width: "120px", align: "center" },
        { text: "MKT", value: "sale_name", class: "textOneLine " },
        { text: "เบอร์ MKT", value: "sale_tel", class: "textOneLine " },
        { text: "ธนาคาร", value: "bank_nick_name", class: "textOneLine ", width: "140px" },
        { text: "สาขาธนาคาร", value: "bank_branch_name", class: "textOneLine ", align: "center" },
        { text: "เอกสาร", value: "appointment_bank_type", class: "textOneLine ", width: "180px", align: "center" },
        { text: "วันที่เอกสารครบ", value: "appointment_bank_document_date", width: "120px", align: "center" },
        { text: "ผลเครดิต", value: "credit", width: "100px", align: "center" },
        { text: "อนุมัติเบื้องต้น", value: "pre_approve_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "อนุมัติ", value: "appointment_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "ปล่อยรถ", value: "contract_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "ชุดโอนมา", value: "appointment_book_date", class: "textOneLine ", width: "120px", align: "center" },
        { text: "หมายเหตุ (เซล)", value: "note_sale", width: "400px" },
        { text: "รายการอัพเดท", value: "request_update", width: "500px" },
      ];
    }
    this.selectedHeaders = this.headers;
    window.addEventListener("resize", this.onResize);
    this.$nextTick(this.onResize);
  },
  computed: {
    tHeader() {
      return this.showHeaders.map(function (item) {
        return item.text;
      });
    },

    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
  },
  methods: {
    async getData() {
      this.loading = true;
      this.content = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
      const data = new FormData();

      // check permission
      if (this.user_group_permission == 2) {
        data.append("branch_team_id", this.$auth.$storage.getLocalStorage("userDataOrg-branch_team_id"));
      } else if (this.user_group_permission == 3) {
        data.append("user_id", this.user_id);
      } else {
        data.append("branch_team_id", this.branch_team_id);
        data.append("branch_id", this.branch_id);
        data.append("user_team_id", this.user_team_id);
      }

      // check search
      if (this.searchInServer) {
        data.append("search", this.searchInServer);
        data.append("work_status", "all");
      } else {
        data.append("work_status", this.selectTab);
      }

      data.append("user_group_permission", this.user_group_permission);
      data.append("commission_mount", this.commission_mount);

      const response = await apiWorks.followWork(data);
      // console.log(response.data);
      this.data = response.data.data;
      const badgeWorking = response.data.badgeWorking;

      badgeWorking.forEach((item) => {
        this.content[item.status] = item.content ?? 0;
      });

      this.loading = false;
      this.$nextTick(() => {
        this.tableWidth = $(".v-data-table-header").width();
      });
    },
    async getSale(sale_id) {
      this.dialogMiniUser = true;
      this.sale_id = sale_id;
    },
    async getBranch_teams() {
      const response = await apiBranch_teams.select();
      this.dataSelectBranch_teams = response.data;
      this.dataSelectBranch_teams.push({ id: 0, branch_team_name: "ทั้งหมด" });
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.branches_all = response.data;
      this.branches.push({ id: 0, branch_name: "ทั้งหมด" });
    },
    changeBranch_team(branch_team_id) {
      let newBranch = [];
      if (branch_team_id == 0) {
        newBranch = this.branches_all;
        this.branch_team_name = "ทั้งหมด";
      } else {
        for (let index = 0; index < this.branches_all.length; index++) {
          if (this.branches_all[index].branch_team_id == branch_team_id) {
            newBranch.push(this.branches_all[index]);
          }
        }
        for (let index = 0; index < this.dataSelectBranch_teams.length; index++) {
          if (this.dataSelectBranch_teams[index].id == branch_team_id) {
            this.branch_team_name = this.dataSelectBranch_teams[index].branch_team_name;
          }
        }
      }
      newBranch.push({ id: 0, branch_name: "ทั้งหมด" });

      this.$nextTick(() => {
        this.branches = newBranch;
        this.branch_id = 0;
        this.branch_team_id = branch_team_id;
        this.$nextTick(() => {
          this.getData();
        });
      });
    },
    async getUser_teams() {
      const response = await apiUser_teams.select();
      if (this.user_group_permission == 3 || this.user_group_permission == 2) {
        let user_team_id = this.$auth.$storage.getLocalStorage("userData-user_team_id");
        if (user_team_id == null) {
          this.user_team_id = 0;
        } else {
          this.user_team_id = user_team_id;
        }
      } else {
        this.user_team_id = 0;
      }
      this.user_teams_all = response.data;
      this.user_teams.push({ id: 0, team_name: "ทั้งหมด" });
    },
    async changeUser_teams() {
      this.$nextTick(() => {
        let new_teams = [];
        if (this.branch_id == 0) {
          this.new_teams = this.user_teams_all;
        } else {
          for (let index = 0; index < this.user_teams_all.length; index++) {
            if (this.user_teams_all[index].branch_id == this.branch_id) new_teams.push(this.user_teams_all[index]);
          }
        }
        this.user_teams = new_teams;
        this.user_teams.push({ id: 0, team_name: "ทั้งหมด" });
      });
      this.fileExcel_name();
    },
    async select_user_team() {
      await this.getData();
      this.fileExcel_name();
    },

    fileExcel_name() {
      for (let index = 0; index < this.branches.length; index++) {
        if (this.branch_id == this.branches[index].id) {
          this.branch_name = this.branches[index].branch_name;
        }
      }
    },
    async selectBranch() {
      await this.changeUser_teams();
      await this.getData();
      await this.fileExcel_name();
    },
    async AddItem() {
      this.formTitleWork = "เพิ่มข้อมูล";
      this.dialogWork = true;
      this.idWork = "";
      this.actionWork = "add";
    },
    async deleteItem(item) {
      this.formTitleWork = "ยกเลิกการจอง";
      this.dialogWork = true;
      this.idWork = item;
      this.actionWork = "cancel";
    },
    async editItem(item) {
      this.formTitleWork = "แก้ไขข้อมูล";
      this.dialogWork = true;
      this.idWork = item;
      this.actionWork = "edit";
    },
    async Booking(car_no, work_id, car_id, customer_id, sale_id) {
      if (customer_id == null || sale_id == null) {
        var isConfirmed = customAlart.checkSelect();
        await isConfirmed.then(async (result) => {
          if (result == true) {
            this.editItem(work_id);
          }
        });
      } else {
        this.formTitleBooking = "เอกสารสรุปการขาย ( ใบปะหน้า )";
        this.idWork = work_id;
        this.idCar = car_id;
        this.idCustomer = customer_id;
        this.idSale = sale_id;
        this.dialogBooking = true;
        this.actionBooking = "check";
        this.car_no = car_no;
      }
    },

    async Financial(car_no, work_id, payment_type) {
      this.formTitleFinancial = "หลักฐานการรับเงิน ธุระกิจการขายรถยนต์ใช้แล้ว";
      this.car_no = car_no;
      this.idWork = work_id;
      this.payment_type = payment_type;
      this.dialogFinancial = true;
      this.actionFinancial = "check";
    },

    async ReceiveDown(car_no, work_id) {
      this.car_no = car_no;
      this.idWork = work_id;
      this.dialogReceiveDown = true;
    },
    async Appointment(car_no, work_id) {
      // this.car_no = car_no;
      this.formTitleAppointment = "นัดวันทำสัญญา (" + car_no + ")";
      this.dialogAppointment = true;
      this.idWork = work_id;
      this.status_bank = 4;
      this.actionAppointment = "check";
    },
    async JobTechnician(car_no, work_id, car_id) {
      this.formTitleJobTechnician = "มอบหมายงาน";
      this.dialogJobTechnician = true;
      this.car_no = car_no;
      this.jobType = 1;
      this.idWork = work_id;
      this.idCar = car_id;
      this.actionJobTechnician = "check";
    },
    async PathnerJobTechnician(car_no, work_id, car_id, car_stock) {
      this.formTitlePathnerJobTechnician = "แจ้งซ่อม (อู่นอก)";
      this.dialogPathnerJobTechnician = true;
      this.idWork = work_id;
      this.car_no = car_no;

      this.jobType = car_stock == 3 ? 2 : 1;
      this.idCar = car_id;
      this.actionPathnerJobTechnician = "add";
    },
    async AppointmentBank(car_no, work_id) {
      this.car_no = car_no;

      this.formTitleAppointmentBank = "ทำสัญญากับแบงค์ (" + car_no + ")";
      this.dialogAppointmentBank = true;
      this.idWork = work_id;
      this.status_bank = 5;
      this.actionAppointmentBank = "check";
    },

    async PreApprove(working_id) {
      this.dialogPreApprove = true;
      this.idWork = working_id;
    },
    async BankApproved(car_no, work_id) {
      this.car_no = car_no;
      this.formTitleAppointmentBank = "แบงค์อนุมัติ (" + car_no + ")";
      this.dialogAppointmentBank = true;
      this.idWork = work_id;
      this.status_bank = 7;
      this.actionAppointmentBank = "check";
    },
    async BankUnApproved(car_no, work_id) {
      this.formTitleAppointment = "แบงค์ไม่อนุมัติเพราะ (" + car_no + ")";
      this.dialogAppointment = true;
      this.idWork = work_id;
      this.status_bank = 6;
      this.actionAppointment = "check";
    },
    async CarTransferred(car_no, work_id) {
      this.car_no = car_no;
      this.formTitleAppointmentBank = "ชุดโอนรถ (" + car_no + ")";
      this.dialogAppointmentBank = true;
      this.idWork = work_id;
      this.status_bank = 9;
      this.actionAppointmentBank = "check";
    },
    async Contract(car_no, work_id, car_id, customer_id) {
      this.formTitleContract = "ปล่อยรถ";
      this.idWork = work_id;
      this.idCar = car_id;
      this.car_no = car_no;

      this.idCustomer = customer_id;
      this.dialogContract = true;
      this.actionContract = "check";
    },
    async InsurCertificate(car_no, work_id, car_id, customer_id) {
      this.formTitleInsurCertificate = "ใบประกันรถยนต์";
      this.idWork = work_id;
      this.idCar = car_id;
      this.car_no = car_no;
      this.jobType = 2;
      this.idCustomer = customer_id;
      this.dialogInsurCertificate = true;
      this.actionInsurCertificate = "check";
    },

    async note(id) {
      this.dialogNote = true;
      this.idNote = id;
    },

    async update_status(id, status) {
      var isConfirmed = customAlart.ConfirmedStatus();
      await isConfirmed.then(async (result) => {
        if (result == true) {
          const respone = await apiWorks.updateStatusWorking(id, {
            work_status: Number(status) + 1,
          });
          if (respone.status == 200) {
            customAlart.TopSuccess();
          } else {
            customAlart.TopError();
          }
        }
      });
      this.$nextTick(async () => {
        await this.getData();
      });
    },

    async rollback_status(id, status) {
      var isConfirmed = customAlart.ConfirmedStatus();
      await isConfirmed.then(async (result) => {
        if (result == true) {
          const respone = await apiWorks.updateStatusWorking(id, {
            work_status: Number(status) - 1,
          });
          if (respone.status == 200) {
            customAlart.TopSuccess();
          } else {
            customAlart.TopError();
          }
        }
      });
      this.$nextTick(async () => {
        await this.getData();
      });
    },

    async CarEndJob(work_id, appointment_money_date) {
      if (appointment_money_date != " ") {
        var isConfirmed = customAlart.ConfirmedStatus();
        await isConfirmed.then(async (result) => {
          if (result == true) {
            const respone = await apiWorks.updateStatusWorking(work_id, {
              work_status: 11,
            });
            if (respone.status == 200) {
              customAlart.TopSuccess();
            } else {
              customAlart.TopError();
            }
          }
        });
        this.$nextTick(async () => {
          await this.getData();
        });
      } else {
        var isConfirmed = customAlart.ReceivingMoneyFail();
        await isConfirmed.then(async (result) => {});
      }
    },
    async AllInfoCar(id, car_no) {
      let routeData = this.$router.resolve({
        name: "infocar-infocar",
        query: { id: id, formTitleAllInfoCar: car_no },
      });
      window.open(routeData.href, "_blank");
    },
    handleDownload() {
      const filterVal = [];
      for (let index = 0; index < this.showHeaders.length; index++) {
        filterVal.push(this.showHeaders[index].value);
      }
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "รวมงาน " + "(" + moment().format("DD/MM/YYYY HH:mm") + ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "booking_date") {
            return moment(v.booking_date).format("YYYY-MM-DD");
          } else if (j == "work_status") {
            return this.$store.state.status_working[Number(v[j])];
          } else {
            return v[j];
          }
        })
      );
    },
    async ReceivingMoney(work_id, car_no, receivingMoney_type) {
      this.formTitleReceivingMoney = receivingMoney_type == 1 ? "เอกสารรับเงิน (ค่าตัวรถ)" : "เอกสารรับเงิน (ค่าคอม)";
      this.idWork = work_id;
      this.car_no = car_no;
      this.receivingMoney_type = receivingMoney_type;
      this.dialogReceivingMoney = true;
      this.actionReceivingMoney = "check";
    },
    async addSuccess(value) {
      if (value == "work") {
        this.dialogWork = false;
      } else if (value == "Booking") {
        this.dialogBooking = false;
      } else if (value == "Financial") {
        this.dialogFinancial = false;
      } else if (value == "Contract") {
        this.dialogContract = false;
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
      } else if (value == "Appointment") {
        this.dialogAppointment = false;
      } else if (value == "PreApprove") {
        this.dialogPreApprove = false;
      } else if (value == "AppointmentBank") {
        this.dialogAppointmentBank = false;
      } else if (value == "InsurCertificate") {
        this.dialogInsurCertificate = false;
      } else if (value == "Receiving_money") {
        this.dialogReceivingMoney = false;
      } else if (value == "note") {
        this.dialogNote = false;
      }

      this.$nextTick(() => {
        this.getData();
        customAlart.TopSuccess();
        this.btnUpdate = true;
      });
    },
    async addError(value) {
      if (value == "work") {
        this.dialogWork = false;
      } else if (value == "Booking") {
        this.dialogBooking = false;
      } else if (value == "Financial") {
        this.dialogFinancial = false;
      } else if (value == "Contract") {
        this.dialogContract = false;
      } else if (value == "Job") {
        this.dialogJobTechnician = false;
      } else if (value == "Job_pathner") {
        this.dialogPathnerJobTechnician = false;
      } else if (value == "Appointment") {
        this.dialogAppointment = false;
      } else if (value == "PreApprove") {
        this.dialogPreApprove = false;
      } else if (value == "AppointmentBank") {
        this.dialogAppointmentBank = false;
      } else if (value == "InsurCertificate") {
        this.dialogInsurCertificate = false;
      } else if (value == "Receiving_money") {
        this.dialogReceivingMoney = false;
      } else if (value == "note") {
        this.dialogNote = false;
      }

      this.$nextTick(() => {
        this.getData();
        customAlart.TopError();
      });
    },
  },
  watch: {
    data() {
      return this.data.map(function (item) {
        item.codeWorking = "W" + item.id;
      });
    },
  },
};
</script>

<style>
.work > .v-list-item {
  min-height: 42px;
}
</style>
