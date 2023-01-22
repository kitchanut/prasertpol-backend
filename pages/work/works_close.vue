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
    <v-card>
      <v-card-text>
        <!-- <v-row v-if="
            $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'
          ">
          <v-col
            cols="12"
            v-if="
              (user_group_permission == -1 && data.length > 0) ||
              (user_group_permission == 8 && data.length > 0) ||
              (user_group_permission == 10 && data.length > 0) ||
              (user_group_permission == 11 && data.length > 0)
            "
          >
            <v-btn
              v-if="data.length > 0"
              @click="handleDownload()"
              color="success"
              class="ml-2"
            >
              <v-icon left>mdi-microsoft-excel</v-icon>
              Excel
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 2 ||
                user_group_permission == 3 ||
                user_group_permission == 10
              "
              color="primary"
              dark
              @click.stop="AddItem()"
            >
              <v-icon left>mdi-plus</v-icon>
              เพิ่มรายการใหม่
            </v-btn>
          </v-col>

          <v-col
            cols="12"
            v-if="
              user_group_permission == -1 ||
              user_group_permission == 9 ||
              user_group_permission == 10 ||
              user_group_permission == 11
            "
          >
            <v-autocomplete
              v-model="branch_team_id"
              :items="dataSelectBranch_teams"
              item-text="branch_team_name"
              item-value="id"
              label="ทีมสาขา"
              no-data-text="ไม่มีข้อมูล"
              outlined
              dense
              hide-details
              @change="changeBranch_team"
            >
            </v-autocomplete>
          </v-col>

          <v-col
            cols="12"
            v-if="
              user_group_permission == -1 ||
              user_group_permission == 9 ||
              user_group_permission == 10 ||
              user_group_permission == 11
            "
          >
            <v-autocomplete
              v-model="branch_id"
              :items="branches"
              item-text="branch_name"
              item-value="id"
              label="สาขาย่อย"
              no-data-text="ไม่มีข้อมูล"
              outlined
              dense
              hide-details
              @change="selectBranch"
            >
            </v-autocomplete>
          </v-col>
          <v-col
            cols="12"
            v-if="
              user_group_permission == -1 ||
              user_group_permission == 9 ||
              user_group_permission == 10 ||
              user_group_permission == 11
            "
          >
            <v-autocomplete
              v-model="user_team_id"
              :items="user_teams"
              no-data-text="ไม่มีข้อมูล"
              item-text="team_name"
              item-value="id"
              label="ทีมเซล"
              outlined
              dense
              hide-details
              @change="select_user_team"
            >
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            cols="2"
            v-if="
              (user_group_permission == -1 && data.length > 0) ||
              (user_group_permission == 8 && data.length > 0) ||
              (user_group_permission == 10 && data.length > 0) ||
              (user_group_permission == 11 && data.length > 0)
            "
          >
            <v-btn
              @click="handleDownload()"
              color="success"
              class="ml-2"
              block
            >
              <v-icon left>mdi-microsoft-excel</v-icon>
              Excel
            </v-btn>
          </v-col>

          <v-col cols="2">
            <v-btn
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 2 ||
                user_group_permission == 3 ||
                user_group_permission == 10
              "
              color="primary"
              dark
              @click.stop="AddItem()"
              block
            >
              <v-icon left>mdi-plus</v-icon>
              เพิ่มรายการใหม่
            </v-btn>
          </v-col>

          <v-col
            cols="3"
            v-if="
              user_group_permission == -1 ||
              user_group_permission == 9 ||
              user_group_permission == 10 ||
              user_group_permission == 11
            "
          >
            <v-autocomplete
              v-model="branch_team_id"
              :items="dataSelectBranch_teams"
              item-text="branch_team_name"
              item-value="id"
              label="ทีมสาขา"
              no-data-text="ไม่มีข้อมูล"
              outlined
              dense
              hide-details
              @change="changeBranch_team"
            >
            </v-autocomplete>
          </v-col>

          <v-col
            cols="3"
            v-if="
              user_group_permission == -1 ||
              user_group_permission == 9 ||
              user_group_permission == 10 ||
              user_group_permission == 11
            "
          >
            <v-autocomplete
              v-model="branch_id"
              :items="branches"
              item-text="branch_name"
              item-value="id"
              label="สาขาย่อย"
              no-data-text="ไม่มีข้อมูล"
              outlined
              dense
              hide-details
              @change="selectBranch"
            >
            </v-autocomplete>
          </v-col>
          <v-col
            cols="2"
            v-if="
              user_group_permission == -1 ||
              user_group_permission == 9 ||
              user_group_permission == 10 ||
              user_group_permission == 11
            "
          >
            <v-autocomplete
              v-model="user_team_id"
              :items="user_teams"
              no-data-text="ไม่มีข้อมูล"
              item-text="team_name"
              item-value="id"
              label="ทีมเซล"
              outlined
              dense
              hide-details
              @change="select_user_team"
            >
            </v-autocomplete>
          </v-col>
        </v-row>
        <br />

        <v-row v-if="
            user_group_permission == -1 ||
            user_group_permission == 9 ||
            user_group_permission == 10 ||
            user_group_permission == 11
          ">
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
        <br /> -->

        <v-row class="d-flex align-end">
          <!-- <v-col>
            <v-text-field
              v-model="searchIDCar"
              label="ค้นหาลำดับรถ"
              single-line
              hide-details
            >
            </v-text-field>

          </v-col>
          <v-col>
            <v-btn
              small
              color="primary"
              :loading="loading"
              @click="getData()"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col> -->

          <!-- <dateSelect2 @timeSelect="selectTimeStart" /> -->

          <v-spacer></v-spacer>
          <v-col xs="12" sm="12" md="6" lg="4" xl="4">
            <v-text-field
              v-model="search"
              id="search"
              name="search"
              label="ลำดับรถ รหัสงาน ทะเบียน ชื่อลูกค้า"
              single-line
              hide-details
              @keyup.enter="getData()"
            >
            </v-text-field>
          </v-col>
          <v-btn class="mx-2" fab dark small color="primary" @click="getData()">
            <v-icon dark> mdi-magnify </v-icon>
          </v-btn>
        </v-row>
        <br />
        <!-- <v-tabs
          grow
          v-model="selectTab"
          @change="getData"
        >
          <v-tab>
            <v-badge
              color="green"
              :content="content_all"
            > ทั้งหมด </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_1"
            > สนใจ </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_2"
            > จอง </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_3"
            > มัดจำ </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_4"
            > รอทำสัญญา </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_5"
            >
              รอแบงค์อนุมัติ
            </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_6"
            > ไม่อนุมัติ </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_7"
            > อนุมัติแล้ว </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_8"
            > รอชุดโอน </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_9"
            > รอตรวจสอบ </v-badge>
          </v-tab>

          <v-tab>
            <v-badge
              color="green"
              :content="content_10"
            > รอปิดงาน </v-badge>
          </v-tab>

          <v-tab v-if="
              user_group_permission == -1 ||
              user_group_permission == 9 ||
              user_group_permission == 10 ||
              user_group_permission == 11
            ">
            <v-badge
              color="green"
              :content="content_11"
            >
              งานที่ปิดแล้ว
            </v-badge>
          </v-tab>
        </v-tabs> -->
        <div id="mycontainer">
          <div id="outer">
            <div
              class="wrapper1"
              style="overflow-x: scroll; overflow-y: hidden"
            >
              <div :style="'width:' + tableWidth + 'px; height: 20px;'"></div>
            </div>

            <v-data-table
              :headers="showHeaders"
              :items="data"
              :items-per-page="item_per_page"
              :footer-props="{
                'items-per-page-options': [5, 10, 20, 50, 100, -1],
              }"
              :loading="loading"
              :multi-sort="true"
              no-data-text="ไม่มีข้อมูล"
              loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
              :mobile-breakpoint="0"
              dense
            >
              <template v-slot:[`item.customer`]="{ item }">
                <h5 v-if="item.customer_id == null" class="red--text">
                  {{ item.customer_name }}
                </h5>
                <h5 v-else class="green--text">{{ item.customer_name }}</h5>
              </template>

              <template v-slot:[`item.hear_from_type`]="{ item }">
                <h5 v-if="item.hear_from_type == 1">หน้าร้าน</h5>
                <h5 v-if="item.hear_from_type == 2">เพจบริษัท</h5>
                <h5 v-if="item.hear_from_type == 3">ลูกค้าเก่าแนะนำ</h5>
                <h5 v-if="item.hear_from_type == 4">นายหน้า</h5>
                <h5 v-if="item.hear_from_type == 5">ใบปลิว</h5>
                <h5 v-if="item.hear_from_type == 6">
                  Marketplace/ไลน์/เพจส่วนตัว
                </h5>
                <h5 v-if="item.hear_from_type == 7">ออนไลน์</h5>
              </template>

              <template v-slot:[`item.sale`]="{ item }">
                <h5
                  v-if="item.sale_id == null || item.sale_id == 0"
                  class="red--text"
                >
                  ยังไม่เลือก
                </h5>
                <h5 v-else>
                  <v-btn
                    dark
                    x-small
                    class="mx-1"
                    color="green"
                    @click="getSale(item.sale_id)"
                  >
                    {{ item.sale == null ? "" : item.sale.first_name }}
                  </v-btn>
                </h5>
              </template>

              <template v-slot:[`item.branch.branch_name`]="{ item }">
                <h5
                  v-if="item.sale_id == null || item.sale_id == 0"
                  class="red--text"
                >
                  {{ item.branch.branch_name }}
                </h5>
                <h5 v-else>
                  {{ item.branch.branch_name }}
                </h5>
              </template>

              <template v-slot:[`item.appointment_bank_type`]="{ item }">
                <v-btn
                  v-if="item.appointment_bank_type == 1"
                  class="mt-1"
                  x-small
                  color="green"
                  dark
                  >ครบ</v-btn
                >
                <v-btn
                  v-if="item.appointment_bank_type == 2"
                  class="mt-1"
                  x-small
                  color="red"
                  dark
                  >ไม่ครบ</v-btn
                >
              </template>

              <template v-slot:[`item.work_status`]="{ item }">
                <div>
                  <v-btn
                    v-if="item.work_status == '1'"
                    x-small
                    color="primary"
                    dark
                    >ลูกค้าสนใจ</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '2'"
                    x-small
                    color="primary"
                    dark
                    >ยืนยันการจอง</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '3'"
                    x-small
                    color="primary"
                    dark
                    >วางมัดจำแล้ว</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '4'"
                    x-small
                    color="primary"
                    dark
                    >นัดทำสัญญาแล้ว</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '5'"
                    x-small
                    color="primary"
                    dark
                    >รอแบงค์อนุมัติ</v-btn
                  >
                  <v-btn v-if="item.work_status == '6'" x-small color="red" dark
                    >แบงค์ไม่อนุมัติ</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '7'"
                    x-small
                    color="primary"
                    dark
                    >แบงค์อนุมัติแล้ว</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '8'"
                    x-small
                    color="primary"
                    dark
                    >รอชุดโอน</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '9'"
                    x-small
                    color="warning"
                    dark
                    >รอตรวจสอบ</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '10'"
                    x-small
                    color="warning"
                    dark
                    >รอปิดงาน</v-btn
                  >
                  <v-btn
                    v-if="item.work_status == '11'"
                    x-small
                    color="success"
                    dark
                    >ปิดงาน</v-btn
                  >
                </div>

                <v-btn
                  v-if="item.pathner_job_technician == 1"
                  class="mt-1"
                  x-small
                  color="red"
                  dark
                  >มีงานซ่อมนอก</v-btn
                >

                <span v-if="item.contract == null"></span>
                <span v-else>
                  <v-btn
                    v-if="
                      item.contract.contract_bath_hold != 0 &&
                      item.contract.contract_bath_hold != null
                    "
                    class="mt-1"
                    x-small
                    color="red"
                    dark
                    >ค้างดาวน์: {{ item.contract.contract_bath_hold }}</v-btn
                  >
                </span>

                <span v-if="item.job_fix != 0">
                  <v-btn class="mt-1" x-small color="red" dark>มีงานซ่อม</v-btn>
                </span>

                <div v-if="item.contract != null">
                  <span v-if="item.appointment_book_date == null">
                    <v-btn class="mt-1" x-small color="red" dark>ชุดโอน</v-btn>
                  </span>

                  <span v-if="item.appointment_transfer_date == null">
                    <v-btn class="mt-1" x-small color="red" dark>โอนรถ</v-btn>
                  </span>

                  <span v-if="item.appointment_money_date == null">
                    <v-btn class="mt-1" x-small color="red" dark>ได้เงิน</v-btn>
                  </span>

                  <span v-if="item.appointment_mkt_date == null">
                    <v-btn class="mt-1" x-small color="red" dark>MRT</v-btn>
                  </span>
                </div>
              </template>

              <template v-slot:[`item.created_at`]="{ item }">
                <span
                  style="color: red"
                  v-if="
                    $moment().unix() >
                    Number($moment(item.created_at).unix()) + 25200
                  "
                >
                  {{ $moment(item.created_at).fromNow(true) }}
                </span>
                <span style="color: blue" v-else>
                  {{ $moment(item.created_at).fromNow(true) }}
                </span>
              </template>

              <template v-slot:[`item.updated_at`]="{ item }">
                {{ $moment(item.updated_at).fromNow(true) }}
              </template>

              <template v-slot:[`item.contract.contract_date`]="{ item }">
                <span v-if="item.contract != null">
                  {{
                    $moment(item.contract.contract_date).format("DD/MM/YYYY")
                  }}
                </span>
              </template>

              <template v-slot:[`item.appointment_date`]="{ item }">
                <span v-if="item.appointment_date != null">
                  {{ $moment(item.appointment_date).format("DD/MM/YYYY") }}
                </span>
              </template>

              <template v-slot:[`item.appointment_money_date`]="{ item }">
                <span v-if="item.appointment_money_date != null">
                  {{
                    $moment(item.appointment_money_date).format("DD/MM/YYYY")
                  }}
                </span>
              </template>

              <template v-slot:[`item.appointment_book_date`]="{ item }">
                <span v-if="item.appointment_book_date != null">
                  {{ $moment(item.appointment_book_date).format("DD/MM/YYYY") }}
                </span>
              </template>

              <template v-slot:[`item.appointment_transfer_date`]="{ item }">
                <span v-if="item.appointment_transfer_date != null">
                  {{
                    $moment(item.appointment_transfer_date).format("DD/MM/YYYY")
                  }}
                </span>
              </template>

              <template
                v-slot:[`item.appointment_banks.appointment_sentbook_date`]="{
                  item,
                }"
              >
                <span v-if="item.appointment_banks != null">
                  <div v-if="item.appointment_banks.appointment_sentbook_date">
                    {{
                      $moment(
                        item.appointment_banks.appointment_sentbook_date
                      ).format("DD/MM/YYYY")
                    }}
                  </div>
                </span>
              </template>

              <template v-slot:[`item.appointment_mkt_date`]="{ item }">
                <span v-if="item.appointment_mkt_date != null">
                  {{ $moment(item.appointment_mkt_date).format("DD/MM/YYYY") }}
                </span>
              </template>

              <template v-slot:[`item.appointment_banks.car_price`]="{ item }">
                <span v-if="item.appointment_banks != null">
                  {{
                    Number(item.appointment_banks.car_price).toLocaleString(
                      "th-TH",
                      {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }
                    )
                  }}</span
                >
                <span v-else>0</span>
              </template>

              <template v-slot:[`item.bookings.amount_slacken`]="{ item }">
                <span v-if="item.bookings != null">
                  {{
                    Number(item.bookings.amount_slacken).toLocaleString(
                      "th-TH",
                      {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }
                    )
                  }}</span
                >
                <span v-else>0</span>
              </template>
              <template
                v-slot:[`item.appointment_banks.appointment_money_price`]="{
                  item,
                }"
              >
                <span v-if="item.appointment_banks != null">
                  {{
                    Number(
                      item.appointment_banks.appointment_money_price
                    ).toLocaleString("th-TH", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}</span
                >
                <span v-else>0</span>
              </template>

              <!-- <template v-slot:item.actions="{ item }"> -->
              <template v-slot:[`item.actions`]="{ item }">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      @click="editItem(item.id)"
                      v-if="
                        (item.work_status < 7 && user_group_permission == 3) ||
                        (item.work_status < 7 && user_group_permission == 2) ||
                        user_group_permission == -1
                      "
                    >
                      <v-list-item-title>ลูกค้าสนใจ</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 2 ||
                        user_group_permission == 3 ||
                        user_group_permission == 9 ||
                        user_group_permission == 10
                      "
                      @click="
                        Booking(
                          item.cars.car_no,
                          item.id,
                          item.car_id,
                          item.customer_id,
                          item.sale_id
                        )
                      "
                    >
                      <v-list-item-title>{{
                        item.work_status > 1 ? "ดูข้อมูลการจอง" : "จอง"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 2 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 2 && user_group_permission == 2) ||
                        (item.work_status >= 2 && user_group_permission == 3) ||
                        (item.work_status >= 2 && user_group_permission == 9) ||
                        (item.work_status >= 2 &&
                          user_group_permission == 11) ||
                        (item.work_status >= 2 && user_group_permission == 10)
                      "
                      @click="Financial(item.cars.car_no, item.id, '1')"
                    >
                      <v-list-item-title>{{
                        item.work_status > 2 ? "ดูข้อมูลวางมัดจำ" : "วางมัดจำ"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 3 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 3 && user_group_permission == 2) ||
                        (item.work_status >= 3 && user_group_permission == 3) ||
                        (item.work_status >= 3 && user_group_permission == 9) ||
                        (item.work_status >= 3 &&
                          user_group_permission == 10) ||
                        (item.work_status >= 3 && user_group_permission == 11)
                      "
                      @click="ReceiveDown(item.car_no, item.id)"
                    >
                      <v-list-item-title style="color: green">{{
                        item.work_status > 3
                          ? "ใบสำคัญรับเงิน"
                          : "ใบสำคัญรับเงิน"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        item.work_status >= 3 && user_group_permission == -1
                      "
                      @click="
                        JobTechnician(item.cars.car_no, item.id, item.car_id)
                      "
                    >
                      <v-list-item-title>{{
                        item.work_status > 3
                          ? "ดูข้อมูลซ่อม (อู่ใน)"
                          : "แจ้งซ่อม (อู่ใน)"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        item.work_status >= 3 && user_group_permission == -1
                      "
                      @click="
                        PathnerJobTechnician(
                          item.cars.car_no,
                          item.id,
                          item.car_id,
                          item.car_stock
                        )
                      "
                    >
                      <v-list-item-title>แจ้งซ่อม (อู่นอก)</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 3 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 3 && user_group_permission == 2) ||
                        (item.work_status >= 3 && user_group_permission == 3) ||
                        (item.work_status >= 3 && user_group_permission == 10)
                      "
                      @click="Appointment(item.cars.car_no, item.id)"
                    >
                      <v-list-item-title>{{
                        item.work_status > 3
                          ? "ดูวันนัดทำสัญญากับแบงค์"
                          : "วันนัดทำสัญญากับแบงค์"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 4 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 4 && user_group_permission == 2) ||
                        (item.work_status >= 4 && user_group_permission == 3) ||
                        (item.work_status >= 4 && user_group_permission == 9) ||
                        (item.work_status >= 4 &&
                          user_group_permission == 10) ||
                        (item.work_status >= 4 && user_group_permission == 11)
                      "
                      @click="AppointmentBank(item.cars.car_no, item.id)"
                    >
                      <v-list-item-title>{{
                        item.work_status > 4
                          ? "ดูวันที่ทำสัญญากับแบงค์"
                          : "วันที่ทำสัญญากับแบงค์"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 5 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 5 && user_group_permission == 9) ||
                        (item.work_status >= 5 && user_group_permission == 10)
                      "
                      @click="BankApproved(item.cars.car_no, item.id)"
                    >
                      <v-list-item-title>{{
                        item.work_status > 5
                          ? "ดูข้อมูลแบงค์อนุมัติ"
                          : "แบงค์อนุมัติ"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 5 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 5 && user_group_permission == 9) ||
                        (item.work_status >= 5 && user_group_permission == 10)
                      "
                      @click="BankUnApproved(item.cars.car_no, item.id)"
                    >
                      <v-list-item-title>แบงค์ไม่อนุมัติ</v-list-item-title>
                    </v-list-item>

                    <!-- <v-list-item
                      v-if="
                        (item.work_status >= 7 && user_group_permission == -1) ||
                        (item.work_status >= 7 && user_group_permission == 2) ||
                        (item.work_status >= 7 && user_group_permission == 3) ||
                        (item.work_status >= 7 && user_group_permission == 9) ||
                        (item.work_status >= 7 && user_group_permission == 10) ||
                        (item.work_status >= 7 && user_group_permission == 11)
                      "
                      @click="Financial(item.cars.car_no, item.id, '2')"
                    >
                      <v-list-item-title>{{
                        item.work_status > 7
                          ? "ดูข้อมูลเงินดาวน์"
                          : "วางเงินดาวน์"
                      }}</v-list-item-title>
                    </v-list-item> -->

                    <!-- <v-list-item
                      v-if="
                        (item.work_status >= 7 && user_group_permission == -1) ||
                        (item.work_status >= 7 && user_group_permission == 2) ||
                        (item.work_status >= 7 && user_group_permission == 3) ||
                        (item.work_status >= 7 && user_group_permission == 9) ||
                        (item.work_status >= 7 && user_group_permission == 10) ||
                        (item.work_status >= 7 && user_group_permission == 11)
                      "
                      @click="Financial(item.cars.car_no, item.id, '3')"
                    >
                      <v-list-item-title>{{
                        item.work_status > 7
                          ? "ดูข้อมูลชำระเงินสด"
                          : "ชำระเงินสด"
                      }}</v-list-item-title>
                    </v-list-item> -->

                    <v-list-item
                      v-if="
                        (item.work_status >= 7 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 7 && user_group_permission == 2) ||
                        (item.work_status >= 7 && user_group_permission == 3) ||
                        (item.work_status >= 7 && user_group_permission == 9) ||
                        (item.work_status >= 7 &&
                          user_group_permission == 10) ||
                        (item.work_status >= 7 && user_group_permission == 11)
                      "
                      @click="
                        Contract(
                          item.cars.car_no,
                          item.id,
                          item.car_id,
                          item.customer_id
                        )
                      "
                    >
                      <v-list-item-title>{{
                        item.work_status > 7 ? "ดูข้อมูลปล่อยรถ" : "ปล่อยรถ"
                      }}</v-list-item-title>
                    </v-list-item>

                    <!-- <v-list-item
                      v-if="
                        (item.work_status >= 7 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 7 && user_group_permission == 2) ||
                        (item.work_status >= 7 && user_group_permission == 3) ||
                        (item.work_status >= 7 && user_group_permission == 9) ||
                        (item.work_status >= 7 &&
                          user_group_permission == 10) ||
                        (item.work_status >= 7 && user_group_permission == 11)
                      "
                      @click="ReceiveDown(item.car_no, item.id)"
                    >
                      <v-list-item-title>{{
                        item.work_status > 7
                          ? "เงินดาวน์/ซื้อเงินสด"
                          : "เงินดาวน์/ซื้อเงินสด"
                      }}</v-list-item-title>
                    </v-list-item> -->

                    <v-list-item
                      v-if="
                        (item.work_status >= 7 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 7 && user_group_permission == 2) ||
                        (item.work_status >= 7 && user_group_permission == 3) ||
                        (item.work_status >= 7 && user_group_permission == 9)
                      "
                      @click="
                        InsurCertificate(
                          item.cars.car_no,
                          item.id,
                          item.car_id,
                          item.customer_id
                        )
                      "
                    >
                      <v-list-item-title>{{
                        item.work_status > 7
                          ? "ดูข้อมูลใบประกันรถยนต์"
                          : "ใบประกันรถยนต์"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 7 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 7 && user_group_permission == 9) ||
                        (item.work_status >= 7 && user_group_permission == 10)
                      "
                      @click="ReceivingMoney(item.id, 1)"
                    >
                      <v-list-item-title>
                        {{
                          item.work_status > 7
                            ? "ดูข้อมูลบันทึกการรับเงิน (ค่าตัวรถ)"
                            : "บันทึกการรับเงิน (ค่าตัวรถ)"
                        }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 7 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 7 && user_group_permission == 9) ||
                        (item.work_status >= 7 && user_group_permission == 10)
                      "
                      @click="ReceivingMoney(item.id, 2)"
                    >
                      <v-list-item-title>
                        {{
                          item.work_status > 7
                            ? "ดูข้อมูลบันทึกการรับเงิน (ค่าคอม)"
                            : "บันทึกการรับเงิน (ค่าคอม)"
                        }}
                      </v-list-item-title>
                    </v-list-item>

                    <!-- <v-list-item
                      v-if="
                        (item.work_status == 8 &&
                          user_group_permission == -1) ||
                        (item.work_status == 8 && user_group_permission == 10)
                      "
                      @click="CarTransferred(item.cars.car_no, item.id)"
                    >
                      <v-list-item-title>โอนสำเร็จ</v-list-item-title>
                    </v-list-item> -->

                    <v-list-item
                      v-if="
                        (item.work_status >= 8 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 8 && user_group_permission == 9) ||
                        (item.work_status >= 8 &&
                          user_group_permission == 10) ||
                        (item.work_status >= 5 && user_group_permission == 11)
                      "
                      @click="CarTransferred(item.cars.car_no, item.id)"
                    >
                      <v-list-item-title>{{
                        item.work_status > 8 ? "ดูข้อมูลชุดโอน" : "ชุดโอน"
                      }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status == 9 &&
                          user_group_permission == -1) ||
                        (item.work_status == 9 &&
                          user_group_permission == 10) ||
                        (item.work_status == 9 && user_group_permission == 11)
                      "
                      @click="update_status(item.id, item.work_status)"
                    >
                      <v-list-item-title
                        >ยืนยันการบันทึกเอกสารครบถ้วน</v-list-item-title
                      >
                    </v-list-item>

                    <v-list-item
                      v-if="
                        (item.work_status >= 10 &&
                          user_group_permission == -1) ||
                        (item.work_status >= 10 &&
                          user_group_permission == 10) ||
                        (item.work_status >= 10 && user_group_permission == 11)
                      "
                      @click="
                        CarEndJob(
                          item.cars.car_no,
                          item.id,
                          item.contract.contract_bath_hold,
                          item.appointment_bank_type,
                          item.pathner_job_technician,
                          item.job_fix,
                          item.appointment_money_date,
                          item.appointment_book_date
                        )
                      "
                    >
                      <v-list-item-title>ปิดงาน</v-list-item-title>
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

                    <v-list-item
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 9
                      "
                      @click="AllInfoCar(item.car_id, item.car_no)"
                    >
                      <v-list-item-title>ภาพรวมของรถ</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      @click="deleteItem(item.id)"
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 10 ||
                        item.work_status <= 7
                      "
                    >
                      <v-list-item-title>ยกเลิก</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      @click="update_status(item.id, item.work_status)"
                      v-if="
                        user_group_permission == -1 ||
                        user_group_permission == 10
                      "
                    >
                      <v-list-item-title>อัพเดตสถานะ</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                      @click="rollback_status(item.id, item.work_status)"
                      v-if="
                        (user_group_permission == -1 ||
                          user_group_permission == 10) &&
                        item.work_status > 2
                      "
                    >
                      <v-list-item-title>ถอยสถานะ</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </div>
        </div>
      </v-card-text>
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

    <dialogMiniUser
      :dialog="dialogMiniUser"
      :id="sale_id"
      @cancleItem="dialogMiniUser = false"
    />

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
import dialogAppointmentBank from "@/components/dialog/dialogAppointmentBank";
import dialogInsurCertificate from "@/components/dialog/dialogInsurCertificate";
import dialogPathnerJobTechnician from "@/components/dialog/dialogPathnerJobTechnician";
import dialogReceivingMoney from "@/components/dialog/dialogReceivingMoney";
import dialogNote from "@/components/dialog/dialogNote";

import dialogMiniUser from "@/components/dialog/dialogMini_user";
// import dateSelect2 from "@/components/DateSelect/dateSelect2";

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
    dialogAppointmentBank,
    dialogInsurCertificate,
    dialogReceivingMoney,

    dialogNote,

    // dateSelect2,
  },
  data() {
    return {
      loading: false,
      // timeStart: moment().startOf("day").format("YYYY-MM-DD HH:mm"),
      // timeEnd: moment().endOf("day").format("YYYY-MM-DD HH:mm"),
      btnUpdate: true,
      item_per_page: 10,
      tableWidth: 0,

      searchIDCar: "",

      search: "",
      branch_team_id: 0,
      dataSelectBranch_teams: [],
      // height: "80vh",

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
      user_group_permission: this.$auth.$storage.getLocalStorage(
        "userData-user_group_permission"
      ),
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
      selectTab: 11,
      content_all: "0",
      content_1: "0",
      content_2: "0",
      content_3: "0",
      content_4: "0",
      content_5: "0",
      content_6: "0",
      content_7: "0",
      content_8: "0",
      content_9: "0",
      content_10: "0",
      content_11: "0",
      timer: "",
    };
  },
  beforeMount() {
    if (this.user_group_permission == 2 || this.user_group_permission == 3) {
      this.branch_id =
        this.$auth.$storage.getLocalStorage("userData-branch_id");
    } else {
      this.branch_id = 0;
    }
  },
  async mounted() {
    this.getUser_teams();
    this.getBranches();
    this.getBranch_teams();
    // console.log(this.branch_id);
    // this.getData();
    this.fileExcel_name();

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
    // this.headers = Object.values(this.headersMap);
    if (
      this.user_group_permission == -1 ||
      this.user_group_permission == 9 ||
      this.user_group_permission == 10 ||
      this.user_group_permission == 11
    ) {
      this.headers = [
        {
          text: "จัดการ",
          value: "actions",
          sortable: false,
          class: "textOneLine sticky-header",
        },
        {
          text: "รหัสงาน",
          value: "codeWorking",
          class: "textOneLine sticky-header",
          align: "center",
        },
        {
          text: "ลำดับรถ",
          value: "cars.car_no",
          class: "textOneLine sticky-header",
        },
        {
          text: "ยี่ห้อ",
          value: "cars.car_models.car_model_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "รุ่น",
          value: "cars.car_series.car_series_name",
          class: "textOneLine sticky-header",
          width: "150px",
        },
        {
          text: "รุ่นย่อย",
          value: "cars.car_serie_sub.car_serie_sub_name",
          class: "textOneLine sticky-header",
          width: "200px",
        },
        {
          text: "ทะเบียน",
          value: "cars.car_regis",
          class: "textOneLine sticky-header",
        },

        {
          text: "ปีรถ",
          value: "cars.car_year",
          class: "textOneLine sticky-header",
        },
        {
          text: "สี",
          value: "cars.color.color_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "ดาวน์+F",
          value: "bookings.amount_slacken",
          class: "textOneLine sticky-header",
        },
        {
          text: "ลูกค้า",
          width: "200px",
          value: "customer_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "อาชีพลูกค้า",
          value: "customer_job",
          width: "160px",
        },
        {
          text: "เบอร์ลูกค้า",
          value: "customer_tel",
          class: "textOneLine sticky-header",
        },
        { text: "เซล", value: "sale", class: "textOneLine sticky-header" },
        {
          text: "ทีมเซล",
          value: "team.team_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "สาขาย่อย",
          value: "branch.branch_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "ทีมสาขา",
          value: "branch_team.branch_team_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "เวลาจอง",
          value: "created_at",
          class: "textOneLine sticky-header",
        },
        {
          text: "ทราบข่าว",
          value: "hear_from_type",
          class: "textOneLine sticky-header",
        },
        {
          text: "เวลาอัพเดต",
          value: "updated_at",
          class: "textOneLine sticky-header",
        },

        {
          text: "ชื่อ MKT",
          value: "appointments.sale_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "เบอร์ MKT",
          value: "appointments.sale_tel",
          class: "textOneLine sticky-header",
        },
        {
          text: "ธนาคาร",
          value: "banks.bank_name",
          class: "textOneLine sticky-header",
          width: "200px",
        },
        {
          text: "สาขาธนาคาร",
          value: "bank_branchs.bank_branch_name",
          class: "textOneLine sticky-header",
        },
        {
          text: "เอกสาร",
          value: "appointment_bank_type",
          class: "textOneLine sticky-header",
        },
        {
          text: "อนุมัติ",
          value: "appointment_date",
          class: "textOneLine sticky-header",
        },
        {
          text: "วันปล่อยรถ",
          value: "contract.contract_date",
          class: "textOneLine sticky-header",
        },
        {
          text: "ชุดโอน",
          value: "appointment_book_date",
          class: "textOneLine sticky-header",
        },
        {
          text: "โอนรถ",
          value: "appointment_transfer_date",
          class: "textOneLine sticky-header",
        },
        {
          text: "ส่งเล่มทำเงิน",
          value: "appointment_banks.appointment_sentbook_date",
          class: "textOneLine sticky-header",
        },
        {
          text: "ได้เงิน",
          value: "appointment_money_date",
          class: "textOneLine sticky-header",
        },
        {
          text: "ค่าตัวรถ",
          value: "appointment_banks.car_price",
          class: "textOneLine sticky-header",
        },
        {
          text: "เงินเข้า",
          value: "appointment_banks.appointment_money_price",
          class: "textOneLine sticky-header",
        },
        {
          text: "ค่า MKT",
          value: "appointment_mkt_date",
          class: "textOneLine sticky-header",
        },
        {
          text: "%",
          value: "appointment_banks.car_price_persen",
          class: "textOneLine sticky-header",
        },
        {
          text: "สถานะ",
          value: "work_status",
          class: "textOneLine sticky-header",
          width: "250px",
        },
      ];
    } else {
      this.headers = [
        {
          text: "จัดการ",
          value: "actions",
          sortable: false,
          class: "textOneLine",
        },
        {
          text: "รหัสงาน",
          value: "codeWorking",
          align: "center",
          class: "textOneLine",
        },
        { text: "ลำดับรถ", value: "cars.car_no", class: "textOneLine" },
        {
          text: "ยี่ห้อ",
          value: "cars.car_models.car_model_name",
          class: "textOneLine",
        },
        {
          text: "รุ่น",
          value: "cars.car_series.car_series_name",
          class: "textOneLine",
          width: "160px",
        },
        {
          text: "รุ่นย่อย",
          value: "cars.car_serie_sub.car_serie_sub_name",
          class: "textOneLine",
          width: "200px",
        },
        { text: "ทะเบียน", value: "cars.car_regis", class: "textOneLine" },

        { text: "ปีรถ", value: "cars.car_year", class: "textOneLine" },
        { text: "สี", value: "cars.color.color_name", class: "textOneLine" },
        {
          text: "ลูกค้า",
          value: "customer_name",
          width: "200px",
          class: "textOneLine",
        },
        {
          text: "อาชีพลูกค้า",
          value: "customer_job",
          width: "160px",
        },
        { text: "เบอร์ลูกค้า", value: "customer_tel", class: "textOneLine" },
        { text: "เซล", value: "sale", class: "textOneLine" },
        { text: "ทีม", value: "team.team_name", class: "textOneLine" },
        { text: "เวลาจอง", value: "created_at", class: "textOneLine" },
        { text: "ทราบข่าว", value: "hear_from_type", class: "textOneLine" },
        { text: "เวลาอัพเดต", value: "updated_at", class: "textOneLine" },
        {
          text: "วันปล่อยรถ",
          value: "contract.contract_date",
          class: "textOneLine",
        },
        {
          text: "สถานะ",
          value: "work_status",
          class: "textOneLine",
          width: "250px",
        },
        { text: "สาขาย่อย", value: "branch.branch_name", class: "textOneLine" },
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
    //Done to get the ordered headers
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
  },
  methods: {
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
        for (
          let index = 0;
          index < this.dataSelectBranch_teams.length;
          index++
        ) {
          if (this.dataSelectBranch_teams[index].id == branch_team_id) {
            this.branch_team_name =
              this.dataSelectBranch_teams[index].branch_team_name;
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
        let user_team_id = this.$auth.$storage.getLocalStorage(
          "userData-user_team_id"
        );
        if (user_team_id == null) {
          this.user_team_id = 0;
        } else {
          this.user_team_id = user_team_id;
        }
      } else {
        this.user_team_id = 0;
      }
      // this.user_teams = response.data;
      this.user_teams_all = response.data;
      // console.log(response.data);
      this.user_teams.push({ id: 0, team_name: "ทั้งหมด" });
      // this.loading = false;
    },

    async changeUser_teams() {
      this.$nextTick(() => {
        let new_teams = [];
        if (this.branch_id == 0) {
          this.new_teams = this.user_teams_all;
        } else {
          for (let index = 0; index < this.user_teams_all.length; index++) {
            if (this.user_teams_all[index].branch_id == this.branch_id)
              new_teams.push(this.user_teams_all[index]);
          }
        }

        this.user_teams = new_teams;
        this.user_teams.push({ id: 0, team_name: "ทั้งหมด" });
      });
      // console.log(branch_id);
      this.fileExcel_name();
    },
    async select_user_team() {
      await this.getData();
      this.fileExcel_name();
    },
    async selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      this.getData();
    },
    async getData() {
      this.loading = true;

      this.content_all = "0";
      this.content_1 = "0";
      this.content_2 = "0";
      this.content_3 = "0";
      this.content_4 = "0";
      this.content_5 = "0";
      this.content_6 = "0";
      this.content_7 = "0";
      this.content_8 = "0";
      this.content_9 = "0";
      this.content_10 = "0";
      this.content_11 = "0";

      const data = new FormData();
      // data.append("car_no", this.searchIDCar);
      data.append("branch_team_id", this.branch_team_id);
      data.append("user_team_id", this.user_team_id);
      data.append("branch_id", this.branch_id);
      if (this.user_group_permission == 3) {
        data.append("user_id", this.user_id);
      } else {
        data.append("user_id", 0);
      }
      data.append("work_status", this.selectTab);
      data.append("user_group_permission", this.user_group_permission);

      data.append("search", this.search);

      // data.append("timeStart", this.timeStart);
      // data.append("timeEnd", this.timeEnd);

      const response = await apiWorks.selectWhereClose(data);
      console.log(response.data);

      this.data = response.data.dataWorking;

      this.loading = false;

      this.$nextTick(() => {
        this.tableWidth = $(".v-data-table-header").width();
      });
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
        // console.log(car_no);
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
      // console.log("55");
      this.car_no = car_no;

      this.formTitleAppointmentBank = "ทำสัญญากับแบงค์ (" + car_no + ")";
      this.dialogAppointmentBank = true;
      this.idWork = work_id;
      this.status_bank = 5;
      this.actionAppointmentBank = "check";
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
      this.formTitleContract = "สัญญาขายรถยนต์";
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

    async CarEndJob(
      car_no,
      work_id,
      price_hole_down,
      appointment_bank_type,
      pathner_job_technician,
      job_fix,
      appointment_money_date,
      appointment_book_date
    ) {
      if (
        price_hole_down == 0 &&
        appointment_bank_type == 1 &&
        pathner_job_technician == 0 &&
        job_fix == 0 &&
        appointment_money_date != null &&
        appointment_book_date != null
      ) {
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
      // console.log(this.showHeaders);
      for (let index = 0; index < this.showHeaders.length; index++) {
        // console.log(this.showHeaders[index].value);
        filterVal.push(this.showHeaders[index].value);
      }
      // console.log(moment().format("DD/MM/YYYY ( HH:mm น.)"));
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = this.tHeader;
          const list = this.data;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename:
              "ทีม: " +
              this.branch_team_name +
              "สาขาย่อย: " +
              this.branch_name +
              "(" +
              moment().format("DD/MM/YYYY ( HH:mm น.)") +
              ")",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      // console.log(this.$store.state.status_working)
      // return jsonData.map((v) =>
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j == "codeWorking") {
            // console.log(v)
            return v.codeWorking;
          } else if (j == "customer") {
            if (v.customer_id == null) {
              return "ยังไม่ได้เลือก";
            } else {
              return v.customer_name;
            }
          } else if (j == "sale") {
            if (v.sale_id == null) {
              return "ยังไม่ได้เลือก";
            } else {
              return v.sale == null ? "ยังไม่ได้เลือก" : v.sale.first_name;
            }
          } else if (j == "appointments.sale_name") {
            if (v.appointments == null) {
              return "ยังไม่ได้เลือก";
            } else {
              return v.appointments.sale_name;
            }
          } else if (j == "appointments.sale_tel") {
            if (v.appointments == null) {
              return "ยังไม่ได้เลือก";
            } else {
              return v.appointments.sale_tel;
            }
          } else if (j == "cars.car_year") {
            return v.cars.car_year;
          } else if (j == "appointment_banks.car_price") {
            if (v.appointment_banks == null) {
              return 0;
            } else {
              return v.appointment_banks.car_price;
            }
          } else if (j == "branch_team.branch_team_name") {
            if (v.branch_team == null) {
              return "";
            } else {
              return v.branch_team.branch_team_name;
            }
          } else if (j == " appointment_banks.appointment_money_price") {
            if (v.appointment_banks == null) {
              return 0;
            } else {
              return v.appointment_banks.appointment_money_price;
            }
          } else if (j == "appointment_banks.car_price_persen") {
            if (v.appointment_banks == null) {
              return 0;
            } else {
              return v.appointment_banks.car_price_persen;
            }
          } else if (j == "banks.bank_name") {
            if (v.banks == null) {
              return "ยังไม่ได้เลือก";
            } else {
              return v.banks.bank_name;
            }
          } else if (j == "bookings.amount_slacken") {
            if (v.bookings == null) {
              return "";
            } else {
              return v.bookings.amount_slacken;
            }
          } else if (j == "bank_branchs.bank_branch_name") {
            if (v.bank_branchs == null) {
              return "ยังไม่ได้เลือก";
            } else {
              return v.bank_branchs.bank_branch_name;
            }
          } else if (j == "appointments.sale_tel") {
            if (v.appointments == null) {
              return "ยังไม่ได้เลือก";
            } else {
              return v.appointments.sale_tel;
            }
          } else if (j == "appointment_bank_type") {
            if (v.appointment_bank_type == 1) {
              return "ครบ";
            } else {
              return "ไม่ครบ";
            }
          } else if (j == "contract.contract_date") {
            if (v.contract == null) {
              return "";
            } else {
              return moment(v.contract.contract_date).format("DD/MM/YYYY");
            }
          } else if (j == "created_at") {
            // return moment(v.created_at).format("DD/MM/YYYY ( HH:mm น.)");
            return moment(v.created_at).format("DD/MM/YYYY ( HH:mm น.)");
          } else if (j == "updated_at") {
            // return moment(v.updated_at).format("DD/MM/YYYY ( HH:mm น.)");
            return moment(v.updated_at).format("DD/MM/YYYY ( HH:mm น.)");
          } else if (j == "team.team_name") {
            return v.team == null ? "-" : v.team.team_name;
          } else if (j == "hear_from_type") {
            // console.log(v.hear_from_type)
            return this.$store.state.hear_from_type[Number(v[j])];
          } else if (j == "branch.branch_name") {
            return v.branch.branch_name;
          } else if (j == "cars.car_regis") {
            return v.cars.car_regis;
          } else if (j == "cars.car_no") {
            return v.cars.car_no;
          } else if (j == "cars.car_models.car_model_name") {
            // return v.car_models.car_model_name;
            if (v.cars.car_models == null) {
              return "ยี่ห้อไม่ถูกต้อง";
            } else {
              return v.cars.car_models.car_model_name;
            }
          } else if (j == "cars.car_series.car_series_name") {
            // return v.car_series.car_series_name;
            if (v.cars.car_series == null) {
              return "รุ่นไม่ถูกต้อง";
            } else {
              return v.cars.car_series.car_series_name;
            }
          } else if (j == "cars.car_serie_sub.car_serie_sub_name") {
            if (v.cars.car_serie_sub == null) {
              return "รุ่นย่อยไม่ถูกต้อง";
            } else {
              return v.cars.car_serie_sub.car_serie_sub_name;
            }
          } else if (j == "cars.color.color_name") {
            return v.cars.color.color_name;
          } else if (j == "work_status") {
            // return this.$store.state.status_working[Number(j) + 1];
            // return this.$store.state.status_working[Number(j) + 1];
            return this.$store.state.status_working[Number(v[j])];
          } else {
            return v[j];
          }
        })
      );
    },
    async ReceivingMoney(work_id, receivingMoney_type) {
      this.formTitleReceivingMoney =
        receivingMoney_type == 1
          ? "เอกสารรับเงิน (ค่าตัวรถ)"
          : "เอกสารรับเงิน (ค่าคอม)";
      this.idWork = work_id;
      this.receivingMoney_type = receivingMoney_type;
      this.dialogReceivingMoney = true;
      this.actionReceivingMoney = "check";
    },
    async addSuccess(value) {
      // console.log(value);
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
        if (item.customer) {
          if (item.customer.customer_job == 1) {
            item.customer_job = "ข้าราชการ";
          } else if (item.customer.customer_job == 2) {
            item.customer_job = "พนักงานเอกชน";
          } else if (item.customer.customer_job == 3) {
            item.customer_job = "เกษตกร";
          } else if (item.customer.customer_job == 4) {
            item.customer_job = "ค้าขาย";
          } else if (item.customer.customer_job == 5) {
            item.customer_job = "อื่น ๆ - " + item.customer.customer_job_list;
          }
        }
      });
    },

    // height() {
    //   // console.log(this.height);
    //   this.height = document.getElementById("outer").clientHeight;
    //   window.removeEventListener("resize", this.onResize);
    // },
    // data() {
    //   clearInterval(this.timer);
    // },
  },
};
</script>

<style scoped>
.v-data-table /deep/ .sticky-header {
  position: sticky;
  position: -webkit-sticky;
  top: var(--toolbarHeight);
}

/* .v-data-table /deep/ .v-data-table__wrapper {
  overflow: unset;
} */
</style>
