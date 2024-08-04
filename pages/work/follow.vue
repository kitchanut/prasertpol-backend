<template>
  <div>
    <v-row class="d-flex align-center px-3 pt-5">
      <v-btn
        color="lime"
        dark
        v-blur
        class="my-1"
        style="min-width: 0px; padding: 0 8px"
        @click="drawerSetting = !drawerSetting"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-btn
        :color="disableSort == false ? 'warning' : ''"
        :dark="disableSort == false ? true : false"
        v-blur
        class="ml-1 my-1"
        style="min-width: 0px; padding: 0 8px"
        @click="disableSort = !disableSort"
      >
        <v-icon>mdi-sort</v-icon>
      </v-btn>

      <v-btn @click="handleDownload()" color="success" class="ml-2 my-1" style="min-width: 0px; padding: 0 8px">
        <v-icon>mdi-microsoft-excel</v-icon>
      </v-btn>

      <v-btn @click="print()" color="primary" class="mx-2 my-1" style="min-width: 0px; padding: 0 8px">
        <v-icon>mdi-printer</v-icon>
      </v-btn>

      <v-col cols="2" class="my-1">
        <v-select
          v-model="work_status"
          :items="[
            {
              text: 'งานปัจจุบัน',
              value: -1,
            },
            {
              text: 'งานที่ปิดแล้ว',
              value: 'close',
            },
            {
              text: 'งานทั้งหมด',
              value: 'all',
            },
            {
              text: 'ค้นหาบางรายการ',
              value: 'search',
            },
          ]"
          item-text="text"
          item-value="value"
          dense
          outlined
          hide-details
        ></v-select>
      </v-col>

      <v-col cols="3" v-if="work_status == 'search'">
        <v-text-field
          v-model="searchInServer"
          label="ลำดับรถ ชื่อลูกค้า ทะเบียนรถ"
          outlined
          single-line
          hide-details=""
          dense
        ></v-text-field>
      </v-col>

      <v-col cols="7" v-if="work_status == 'close' || work_status == 'all'">
        <dateSelectMonthAll @timeSelect="selectTimeStart" />
      </v-col>
      <v-btn @click="initialize()" color="primary" class="mx-2 my-1" style="min-width: 0px; padding: 0 8px">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-row>
    <div class="mt-3"></div>
    <v-card id="followTable" outlined>
      <v-data-table
        :key="anIncreasingNumber"
        class="table-border"
        :headers="selectedHeaders"
        :items="filteredData"
        :loading="loading"
        :search="search"
        :footer-props="{
          'items-per-page-options': [5, 10, 20, 50, 100, -1],
        }"
        no-data-text="ไม่มีข้อมูล"
        loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
        @current-items="getFiltered"
        :mobile-breakpoint="0"
        dense
        show-select
      >
        <template v-for="(item, index) in selectedHeaders" v-slot:[`header.${item.value}`]="{ header }">
          <div style="display: inline-block; padding: 8px 0" :key="'text_' + index">
            {{ header.text }}
          </div>
          <div
            v-if="selectedHeaders[Number(selectedHeaders.length - 1)].value != header.value"
            class="noPrint"
            :key="index"
            style="float: right; z-index: 2000 !important"
            :style="disableSort ? 'margin-right: -26px;' : 'margin-right: -26px;'"
          >
            <v-menu
              :close-on-content-click="false"
              :nudge-width="0"
              offset-y
              transition="slide-y-transition"
              left
              fixed
              style="position: absolute; right: 0"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="grey"
                  v-blur
                  v-bind="attrs"
                  v-on="on"
                  icon
                  @mousedown="
                    header_value = item.value;
                    mouseStart = true;
                    startPixel = 0;
                  "
                  @mouseup="
                    mouseStart = false;
                    startPixel = 0;
                  "
                  @mousemove="mouseMove"
                  @mouseleave="
                    mouseStart = false;
                    startPixel = 0;
                  "
                >
                  <v-icon small> mdi-plus </v-icon>
                </v-btn>
              </template>
            </v-menu>
          </div>
        </template>

        <template v-for="(col, i) in filters" v-slot:[`header.${i}`]="{ header }">
          <div style="display: inline-block; padding: 8px 0" :key="col.id">
            {{ header.text }}
          </div>
          <div v-if="!disableSort" style="float: right" :key="col.id">
            <v-menu
              :close-on-content-click="false"
              :nudge-width="200"
              offset-y
              transition="slide-y-transition"
              left
              fixed
              style="position: absolute; right: 0"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="grey" icon v-bind="attrs" v-on="on">
                  <v-icon
                    small
                    :color="
                      activeFilters[header.value] && activeFilters[header.value].length < filters[header.value].length
                        ? 'red'
                        : 'default'
                    "
                  >
                    mdi-filter-variant
                  </v-icon>
                </v-btn>
              </template>

              <v-list
                v-if="
                  header.value == 'appointment_date' ||
                  header.value == 'contract_date' ||
                  header.value == 'booking_date' ||
                  header.value == 'appointment_bank_date' ||
                  header.value == 'appointment_book_date' ||
                  header.value == 'appointment_transfer_date' ||
                  header.value == 'appointment_sentbook_date' ||
                  header.value == 'appointment_money_date' ||
                  header.value == 'car_tax_date' ||
                  header.value == 'car_insurance'
                "
              >
                <v-list-item-group multiple v-model="activeFilters[header.value]" class="py-2">
                  <!-- <template v-for="item in filters[header.value]"> -->
                  <v-list-item v-for="item in filters[header.value]" :key="`${item}`" :value="item">
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active" :true-value="item" color="primary" dense></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                  <!-- </template> -->
                </v-list-item-group>
                <div class="pl-2 pr-2">
                  <v-date-picker v-model="dates[header.value]" range elevation="1" locale="TH">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dates[header.value] = []"> ล้าง </v-btn>
                  </v-date-picker>
                </div>
              </v-list>

              <v-list v-else flat dense class="pa-0">
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-btn text block @click="toggleAll(header.value)" color="success">Toggle all</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn text block @click="clearAll(header.value)" color="warning">Clear all</v-btn>
                  </v-col>
                </v-row>
                <v-divider></v-divider>

                <v-list-item-group multiple v-model="activeFilters[header.value]" class="py-2">
                  <v-list-item v-for="item in filters[header.value]" :key="`${item}`" :value="item">
                    <template v-slot:default="{ active, toggle }">
                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          :true-value="item"
                          @click="toggle"
                          color="primary"
                          dense
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </div>
          <div
            v-if="selectedHeaders[Number(selectedHeaders.length - 1)].value != header.value"
            class="noPrint"
            :key="col.i"
            style="float: right; z-index: 2000 !important"
            :style="disableSort ? 'margin-right: -26px;' : 'margin-right: -62px;'"
          >
            <v-menu
              :close-on-content-click="false"
              :nudge-width="0"
              offset-y
              transition="slide-y-transition"
              left
              fixed
              style="position: absolute; right: 0"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="grey"
                  v-blur
                  v-bind="attrs"
                  v-on="on"
                  icon
                  @mousedown="
                    header_value = i;
                    mouseStart = true;
                    startPixel = 0;
                  "
                  @mouseup="
                    mouseStart = false;
                    startPixel = 0;
                  "
                  @mousemove="mouseMove"
                  @mouseleave="
                    mouseStart = false;
                    startPixel = 0;
                  "
                >
                  <v-icon small> mdi-plus </v-icon>
                </v-btn>
              </template>
            </v-menu>
          </div>
        </template>

        <template v-slot:[`body.prepend`]>
          <tr>
            <th></th>
            <th v-for="(header, keyHeader) in selectedHeaders" :key="keyHeader" style="text-align: center">
              <v-chip v-if="header.value != 'actions'" small>
                {{ countField(header.value) }}
              </v-chip>
            </th>
          </tr>
        </template>

        <template v-slot:[`item.id`]="{ item }">
          <span>W{{ item.id }}</span>
        </template>

        <template v-slot:[`item.sale`]="{ item }">
          <a @click="editItem(item.id)" style="cursor: pointer">
            {{ item.sale }}
          </a>
        </template>

        <template v-slot:[`item.customer_name`]="{ item }">
          <a @click="editItem(item.id)" style="cursor: pointer">
            {{ item.customer_name }}
          </a>
        </template>

        <!-- ทราบข่าว -->
        <template v-slot:[`item.hear_from`]="{ item }">
          <a @click="editItem(item.id)" style="cursor: pointer">
            {{ item.hear_from }}
          </a>
        </template>

        <!-- ยอดจัดตั้งต้น -->
        <template v-slot:[`item.amount_price`]="{ item }">
          <div v-if="item.amount_price != ' '">
            {{ Number(item.amount_price).toLocaleString() }}
          </div>
        </template>

        <!-- ดาวน์ตั้งต้น -->
        <template v-slot:[`item.amount_down`]="{ item }">
          <div v-if="item.amount_down != ' '">
            {{ Number(item.amount_down).toLocaleString() }}
          </div>
        </template>

        <!-- ขายตั้งต้น -->
        <template v-slot:[`item.car_price_vat`]="{ item }">
          <div v-if="item.car_price_vat != ' '">
            {{ Number(item.car_price_vat).toLocaleString() }}
          </div>
        </template>

        <!-- วันจอง -->
        <template v-slot:[`item.booking_date`]="{ item }">
          <span
            v-if="item.booking_date != ' '"
            style="color: #ffc107; cursor: pointer"
            @click="Booking(item.car_no, item.id, item.car_id, item.customer_id, item.sale_id)"
          >
            {{ $moment(item.booking_date).format("DD/MM/YYYY") }}
          </span>
        </template>

        <!-- เงินจอง -->
        <template v-slot:[`item.deposit`]="{ item }">
          <a
            v-if="item.deposit != ' '"
            @click="Booking(item.car_no, item.id, item.car_id, item.customer_id, item.sale_id)"
          >
            {{ Number(item.deposit).toLocaleString() }}
          </a>
        </template>

        <!-- เงินดาวน์+F -->
        <template v-slot:[`item.down`]="{ item }">
          <a v-if="item.down >= 0">
            {{ Number(item.down).toLocaleString() }}
          </a>
        </template>

        <!-- ค่านำพา -->
        <template v-slot:[`item.commission`]="{ item }">
          <a
            v-if="Number(item.commission) > 0"
            @click="Booking(item.car_no, item.id, item.car_id, item.customer_id, item.sale_id)"
          >
            {{ Number(item.commission).toLocaleString() }}
          </a>
        </template>

        <!-- ประกัน -->

        <template v-slot:[`item.insurance`]="{ item }">
          <a v-if="Number(item.insurance) > 0" @click="Contract(item.car_no, item.id, item.car_id, item.customer_id)">
            {{ Number(item.insurance).toLocaleString() }}
          </a>
        </template>
        <!-- ยอดจัด -->
        <template v-slot:[`item.car_price_approve`]="{ item }">
          <a
            v-if="Number(item.car_price_approve) > 0"
            @click="Booking(item.car_no, item.id, item.car_id, item.customer_id, item.sale_id)"
          >
            {{ Number(item.car_price_approve).toLocaleString() }}
          </a>
        </template>

        <!-- ยอดจัด+Vat -->
        <template v-slot:[`item.car_price_approve_vat`]="{ item }">
          <a
            v-if="Number(item.car_price_approve_vat) > 0"
            @click="Booking(item.car_no, item.id, item.car_id, item.customer_id, item.sale_id)"
          >
            {{ Number(item.car_price_approve_vat).toLocaleString() }}
          </a>
        </template>

        <!-- ธนาคาร -->
        <template v-slot:[`item.bank_nick_name`]="{ item }">
          <div v-if="item.bank_nick_name != ' '" @click="AppointmentBank(item.car_no, item.id)" style="cursor: pointer">
            {{ item.bank_nick_name }}
          </div>
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="AppointmentBank(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- MTK -->
        <template v-slot:[`item.sale_name`]="{ item }">
          <div
            v-if="item.work_status > 3"
            @click="AppointmentBank(item.car_no, item.id)"
            class="warning--text"
            style="cursor: pointer"
          >
            {{ item.sale_name }}
          </div>
          <div v-else-if="item.work_status < 3 && item.sale_name != ' '">{{ item.sale_name }}</div>
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="AppointmentBank(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- วันเซนต์ -->
        <template v-slot:[`item.appointment_bank_date`]="{ item }">
          <span
            v-if="item.appointment_bank_date != ' '"
            style="color: #1976d2; cursor: pointer"
            @click="AppointmentBank(item.car_no, item.id)"
            >{{ $moment(item.appointment_bank_date).format("DD/MM/YYYY") }}</span
          >
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="AppointmentBank(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- เอกสาร ครบ/ไม่ครบ -->
        <template v-slot:[`item.appointment_bank_type`]="{ item }">
          <div
            v-if="item.appointment_bank_type == 'ครบ'"
            x-small
            class="success--text"
            rounded
            @click="AppointmentBank(item.car_no, item.id)"
            style="cursor: pointer"
          >
            {{ item.appointment_bank_type }}
          </div>
          <div
            v-if="item.appointment_bank_type == 'ไม่ครบ'"
            x-small
            class="red--text"
            rounded
            dark
            @click="AppointmentBank(item.car_no, item.id)"
            style="cursor: pointer"
          >
            == {{ item.appointment_bank_type }} ==
          </div>
          <div v-html="item.appointment_bank_list"></div>
          <span
            v-if="item.appointment_bank_type == ' '"
            x-small
            class="white--text"
            rounded
            dark
            @click="AppointmentBank(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- ผลเครดิต -->
        <template v-slot:[`item.credit`]="{ item }">
          <span
            v-if="item.credit != ' '"
            style="color: #1976d2; cursor: pointer"
            @click="AppointmentBank(item.car_no, item.id)"
            >{{ item.credit }}</span
          >
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="AppointmentBank(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- ยอดจัด -->
        <template v-slot:[`item.finance_price`]="{ item }">
          <a v-if="item.finance_price > 0" style="cursor: pointer" @click="BankApproved(item.car_no, item.id)">
            {{ Number(item.finance_price).toLocaleString() }}
          </a>
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="BankApproved(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- รวมยอดจัด (ยอดจัด*1.07) -->
        <template v-slot:[`item.finance_price_vat`]="{ item }">
          <a v-if="item.finance_price_vat > 0" style="cursor: pointer" @click="BankApproved(item.car_no, item.id)">
            {{ Number(item.finance_price_vat).toLocaleString() }}
          </a>
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="BankApproved(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- ซับดาวน์ -->
        <template v-slot:[`item.sub_down`]="{ item }">
          <a v-if="item.sub_down > 0" style="cursor: pointer; color: green" @click="BankApproved(item.car_no, item.id)">
            {{ Number(item.sub_down).toLocaleString() }}
          </a>
          <a
            v-else-if="item.sub_down < 0"
            style="cursor: pointer; color: red"
            @click="BankApproved(item.car_no, item.id)"
          >
            {{ Number(item.sub_down).toLocaleString() }}
          </a>
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="BankApproved(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- จัดได้ % -->
        <template v-slot:[`item.car_price_persen`]="{ item }">
          <a v-if="item.finance_price > 0" style="cursor: pointer" @click="BankApproved(item.car_no, item.id)">
            {{ item.car_price_persen }}%
          </a>
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="BankApproved(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- วันอนุมัติเบื้องต้น -->
        <template v-slot:[`item.pre_approve_date`]="{ item }">
          <span
            v-if="item.pre_approve_date != ' '"
            style="color: #fb962a; cursor: pointer"
            @click="PreApprove(item.id)"
          >
            {{ $moment(item.pre_approve_date).format("DD/MM/YYYY") }}
          </span>
          <span v-else x-small class="white--text" rounded dark @click="PreApprove(item.id)" style="cursor: pointer">
            + เพิ่ม
          </span>
        </template>

        <!-- วันอนุมัติ -->
        <template v-slot:[`item.appointment_date`]="{ item }">
          <span
            v-if="item.appointment_date != ' '"
            style="color: #ff1744; cursor: pointer"
            @click="BankApproved(item.car_no, item.id)"
          >
            {{ $moment(item.appointment_date).format("DD/MM/YYYY") }}
          </span>
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="BankApproved(item.car_no, item.id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- วันปล่อยรถ -->
        <template v-slot:[`item.contract_date`]="{ item }">
          <span
            v-if="item.contract_date != ' '"
            style="color: #4caf50; cursor: pointer"
            @click="Contract(item.car_no, item.id, item.car_id, item.customer_id)"
          >
            {{ $moment(item.contract_date).format("DD/MM/YYYY") }}
          </span>
          <span
            v-else
            x-small
            class="white--text"
            rounded
            dark
            @click="Contract(item.car_no, item.id, item.car_id, item.customer_id)"
            style="cursor: pointer"
          >
            + เพิ่ม
          </span>
        </template>

        <!-- ชุดโอนมา -->
        <template v-slot:[`item.appointment_book_date`]="{ item }">
          <span
            v-if="item.appointment_book_date != ' '"
            style="color: #cddc39; cursor: pointer"
            @click="CarTransferred(item.car_no, item.id)"
          >
            {{ $moment(item.appointment_book_date).format("DD/MM/YYYY") }}
          </span>
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

        <!-- โอนรถ -->
        <template v-slot:[`item.appointment_transfer_date`]="{ item }">
          <span
            v-if="item.appointment_transfer_date != ' '"
            style="color: #00bcd4; cursor: pointer"
            @click="CarTransferred(item.car_no, item.id)"
          >
            {{ $moment(item.appointment_transfer_date).format("DD/MM/YYYY") }}
          </span>
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

        <!-- ส่งเล่มทำเงิน -->
        <template v-slot:[`item.appointment_sentbook_date`]="{ item }">
          <span
            v-if="item.appointment_sentbook_date != ' '"
            style="color: #00bcd4; cursor: pointer"
            @click="CarTransferred(item.car_no, item.id)"
          >
            {{ $moment(item.appointment_sentbook_date).format("DD/MM/YYYY") }}
          </span>
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

        <!-- เงินเข้า -->
        <template v-slot:[`item.appointment_money_date`]="{ item }">
          <span
            v-if="item.appointment_money_date != ' '"
            style="color: #e91e63; cursor: pointer"
            @click="CarTransferred(item.car_no, item.id)"
          >
            {{ $moment(item.appointment_money_date).format("DD/MM/YYYY") }}
          </span>
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

        <!-- จำนวน -->
        <template v-slot:[`item.appointment_money_price`]="{ item }">
          <span
            v-if="item.appointment_money_price != ' '"
            style="color: green; cursor: pointer"
            @click="CarTransferred(item.car_no, item.id)"
          >
            {{ Number(item.appointment_money_price).toLocaleString() }}
          </span>
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

        <!-- งวดแรก -->
        <template v-slot:[`item.customer_payment_due`]="{ item }">
          <a
            v-if="item.customer_payment_due != ' '"
            style="cursor: pointer"
            @click="CarTransferred(item.car_no, item.id)"
          >
            {{ item.customer_payment_due }}
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

        <!-- งวดแรก จำนวน -->
        <template v-slot:[`item.customer_payment`]="{ item }">
          <a v-if="item.customer_payment != ' '" style="cursor: pointer" @click="CarTransferred(item.car_no, item.id)">
            {{ Number(item.customer_payment).toLocaleString() }}
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

        <template v-slot:[`item.note_page`]="{ item }">
          <a v-if="item.note_page != ' '" style="cursor: pointer" @click="CarTransferred(item.car_no, item.id)">
            {{ item.note_page }}
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

        <template v-slot:[`item.commission_mount`]="{ item }">
          <a v-if="item.commission_mount != ' '" style="cursor: pointer" @click="CarTransferred(item.car_no, item.id)">
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
            @success="initialize()"
          />
        </template>
      </v-data-table>
    </v-card>

    <v-navigation-drawer v-model="drawerSetting" absolute right temporary width="350">
      <v-list flat subheader>
        <v-row no-gutters>
          <v-col>
            <v-btn
              text
              @click="togleHeaderAll"
              block
              style="justify-content: start; font-weight: 400; font-size: 1rem; height: 42px"
            >
              <v-icon
                style="margin-right: 32px"
                :color="selectedHeaders.length > 0 ? 'blue darken-2' : 'grey darken-1'"
              >
                {{ icon }}
              </v-icon>
              เลือกทั้งหมด
            </v-btn>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col>
            <v-btn
              text
              @click="
                headers = headersDefault;
                selectHeaderAll();
              "
              block
              style="justify-content: start; font-weight: 400; font-size: 1rem; height: 42px"
            >
              <v-icon
                style="margin-right: 32px"
                :color="selectedHeaderIndexs.length > 0 ? 'blue darken-2' : 'grey darken-1'"
              >
                mdi-reload
              </v-icon>
              ค่าเริ่มต้น
            </v-btn>
          </v-col>
        </v-row>

        <v-divider class="mt-0 mb-3"></v-divider>

        <v-list-item-group v-if="renderComponent" v-model="selectedHeaderIndexs" multiple>
          <draggable v-model="headers" class="list-group" ghost-class="ghost" @end="handleEnd">
            <v-list-item v-for="(item, key) in headers" style="min-height: 24px" :key="key" :value="item.value">
              <template v-slot:default="{ active }">
                <v-list-item-action style="margin: 0px 32px 0px 0">
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content style="padding: 0px 0 !important">
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </draggable>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div class="v-btn--bottom v-btn--fixed v-btn--has-bg v-btn--right" style="z-index: 100">
      <v-speed-dial bottom="bottom" right="right">
        <template v-slot:activator>
          <v-btn @click="initializeReload()" color="blue darken-2" dark fab large>
            <v-icon> mdi-reload </v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
    </div>

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
import moment from "moment";
import draggable from "vuedraggable";

import dialogWork from "@/components/dialog/dialogWork";
import dialogBooking from "@/components/dialog/dialogBooking";
import dialogAppointment from "@/components/dialog/dialogAppointment";
import dialogPreApprove from "@/components/dialog/dialogPreApprove";
import dialogAppointmentBank from "@/components/dialog/dialogAppointmentBank";
import dialogContract from "@/components/dialog/dialogContract";
import dialogNote from "@/components/dialog/dialogNote";
import dialogRequestUpdate from "@/components/dialog/dialogRequestUpdate";

export default {
  components: {
    dialogWork,
    dialogBooking,
    dialogAppointment,
    dialogPreApprove,
    dialogAppointmentBank,
    dialogContract,
    dialogNote,
    dialogRequestUpdate,
    draggable,
  },
  data: () => ({
    loading: true,
    disableSort: false,
    drawerSetting: false,
    renderComponent: true,
    toggleView: "small",

    work_status: -1,
    searchInServer: "",

    timeStart: moment().startOf("years").format("YYYY-MM-DD HH:mm"),
    timeEnd: moment().endOf("years").format("YYYY-MM-DD HH:mm"),
    search: "",
    currentItems: [],
    tableWidth: 0,
    headersDefault: [],
    headers: [
      { text: "รหัสงาน", value: "id", width: "120px", align: "center" },
      { text: "สถานะหลัก", value: "work_status_name", width: "140px" },
      { text: "รอ", value: "pedding", width: "140px" },
      { text: "ลำดับรถ", value: "car_no", width: "120px", align: "center" },
      { text: "รุ่น", value: "car_series_name", width: "180px" },
      { text: "รุ่นย่อย", width: "250px", value: "car_serie_sub_name" },
      { text: "ปีรถ", value: "car_year", width: "120px", align: "center" },
      { text: "ทะเบียน", value: "car_regis", width: "120px", align: "center" },
      { text: "ทะเบียนใหม่", value: "car_regis_current", width: "120px", align: "center" },
      { text: "สี", value: "color_name", width: "120px" },
      { text: "ภาษี", value: "car_tax_date", width: "120px" },
      { text: "ประกัน", value: "car_insurance", width: "120px" },
      { text: "จัด", value: "amount_price", width: "120px", align: "right" },
      { text: "ดาวน์", value: "amount_down", width: "120px", align: "right" },
      { text: "ขาย", value: "car_price_vat", width: "120px", align: "right" },
      { text: "เซล", value: "sale", width: "140px" },
      { text: "ทีมเซล", value: "team_name", width: "140px" },
      { text: "ทีมสาขา", value: "branch_team_name", width: "140px" },
      { text: "สาขาย่อย", value: "branch_name", width: "140px" },
      { text: "ลูกค้า", value: "customer_name", width: "180px" },
      { text: "เบอร์ลูกค้า", value: "customer_tel", width: "120px" },
      { text: "จอง", value: "booking_date", width: "120px", align: "center" },
      { text: "เงินจอง", value: "deposit", width: "120px", align: "right" },
      { text: "ดาวน์+F", value: "down", width: "120px", align: "right" },
      { text: "ค่านำพา+อื่นๆ", value: "commission", width: "160px", align: "right" },
      { text: "สมาร์ทชัว+ประกัน", value: "insurance", width: "180px", align: "right" },
      { text: "ยอดจัด", value: "finance_price", width: "150px", align: "right" },
      { text: "รวมยอดจัด", value: "finance_price_vat", width: "150px", align: "right" },
      { text: "ซับดาวน์", value: "sub_down", width: "150px", align: "right" },
      { text: "เกรด", value: "customer_grade", width: "120px" },
      { text: "ทราบข่าว", value: "hear_from", width: "160px" },
      { text: "อาชีพลูกค้า", value: "customer_job", width: "160px" },
      { text: "วันที่ฝาก", value: "deposit_date", width: "120px", align: "center" },
      { text: "วันที่เซนต์", value: "appointment_date_before", width: "120px", align: "center" },
      { text: "วันที่เซนต์", value: "appointment_bank_date", width: "130px", align: "center" },
      { text: "ธนาคาร", value: "bank_nick_name", width: "120px", align: "center" },
      { text: "MKT", value: "sale_name", width: "140px" },
      { text: "เอกสาร", value: "appointment_bank_type", width: "180px" },
      { text: "วันที่เอกสารครบ", value: "appointment_bank_document_date", width: "150px", align: "center" },
      { text: "ผลเครดิต", value: "credit", width: "130px", align: "center" },
      { text: "จัดได้ %", value: "car_price_persen", width: "160px", align: "right" },
      { text: "อนุมัติเบื้องต้น", value: "pre_approve_date", width: "160px", align: "center" },
      { text: "อนุมัติ", value: "appointment_date", width: "140px", align: "center" },
      { text: "ปล่อยรถ", value: "contract_date", width: "150px", align: "center" },
      { text: "ชุดโอนมา", value: "appointment_book_date", width: "150px", align: "center" },
      { text: "โอน", value: "appointment_transfer_date", width: "150px", align: "center" },
      { text: "ส่งเล่มทำเงิน", value: "appointment_sentbook_date", width: "170px", align: "center" },
      { text: "เงินมา", value: "appointment_money_date", width: "150px", align: "center" },
      { text: "จำนวน", value: "appointment_money_price", width: "160px", align: "right" },
      { text: "งวดแรก", value: "customer_payment_due", width: "160px", align: "center" },
      { text: "จำนวน", value: "customer_payment", width: "160px", align: "right" },
      { text: "หน้าสมุด", value: "note_page", width: "140px", align: "center" },
      { text: "เดือนคอม", value: "commission_mount", width: "160px", align: "center" },
      { text: "หมายเหตุ (ส่วนกลาง)", value: "note", width: "220px" },
      { text: "หมายเหตุ (เซล)", value: "note_sale", width: "400px" },
      { text: "รายการอัพเดท", value: "request_update", width: "500px" },
    ],
    header_value: "",
    header_index: 0,
    mouseStart: false,
    startPixel: 0,
    moveDistance: 0,
    filters: {
      id: [],
      pedding: [],
      car_no: [],
      car_series_name: [],
      car_serie_sub_name: [],
      car_regis: [],
      work_status_name: [],
      car_year: [],
      color_name: [],
      amount_price: [],
      amount_down: [],
      car_price_vat: [],
      sale: [],
      branch_name: [],
      team_name: [],
      branch_team_name: [],
      customer_name: [],
      customer_grade: [],
      credit: [],
      hear_from: [],
      booking_date: [],
      deposit: [],
      down: [],
      commission: [],
      insurance: [],
      finance_price: [],
      car_price_persen: [],
      finance_price_vat: [],
      sub_down: [],
      appointment_bank_date: [],
      customer_job: [],
      bank_nick_name: [],
      sale_name: [],
      appointment_bank_type: [],
      pre_approve_date: [],
      deposit_date: [],
      appointment_date: [],
      contract_date: [],
      appointment_book_date: [],
      appointment_transfer_date: [],
      appointment_sentbook_date: [],
      appointment_money_date: [],
      appointment_money_price: [],
      customer_payment_due: [],
      customer_payment: [],
      commission_mount: [],
      note_page: [],
      request_update: [],
      car_tax_date: [],
      car_insurance: [],
    },
    activeFilters: {},
    activeFiltersTemp: {},
    data: [],
    dates: {
      booking_date: [],
      appointment_bank_date: [],
      pre_approve_date: [],
      deposit_date: [],
      appointment_date: [],
      appointment_bank_document_date: [],
      contract_date: [],
      appointment_book_date: [],
      appointment_transfer_date: [],
      appointment_sentbook_date: [],
      appointment_money_date: [],
      customer_payment_due: [],
      car_tax_date: [],
      car_insurance: [],
    },

    car_no: 0,
    idCar: 0,
    idWork: 0,
    idCustomer: 0,
    status_bank: 4,

    dialogWork: false,
    formTitleWork: "Add",
    actionWork: "add",

    dialogBooking: false,
    formTitleBooking: "Add",
    actionBooking: "check",

    dialogPreApprove: false,

    dialogAppointment: false,
    formTitleAppointment: "Add",
    actionAppointment: "check",
    anIncreasingNumber: 1,

    dialogAppointmentBank: false,
    formTitleAppointmentBank: "Add",
    actionAppointmentBank: "check",

    dialogContract: false,
    formTitleContract: "Add",
    actionContract: "check",

    dialogNote: false,
    idNote: "",

    pedding_main_items: [
      "รอจอง",
      "รอมัดจำ",
      "รอนัดทำสัญญา",
      "รอทำสัญญา",
      "รอเอกสาร",
      "รอแบงค์อนุมัติ",
      "รอปล่อยรถ",
      "ปล่อยรถแล้ว",
    ],
    pedding_items: ["รอรูปรถ", "รอเช็คเกอร์", "รอคนค้ำ", "รอคนซื้อแทน", "รอหารถ", "รอรถซ่อม"],
  }),

  computed: {
    selectedHeaderIndexs: {
      get() {
        return this.$store.state.selectedHeaderIndexs;
      },
      set(value) {
        this.$store.commit("setSelectedHeaderIndexs", value);
      },
    },
    selectedHeaders: {
      get() {
        return this.$store.state.selectedHeaders;
      },
      set(value) {
        this.$store.commit("setSelectedHeaders", value);
      },
    },
    tHeader() {
      return this.selectedHeaders.map(function (item) {
        return item.text;
      });
    },
    filteredData() {
      return this.data.filter((d) => {
        return Object.keys(this.activeFilters).every((key) => {
          if (
            key == "booking_date" ||
            key == "appointment_date" ||
            key == "contract_date" ||
            key == "appointment_bank_date" ||
            key == "appointment_book_date" ||
            key == "appointment_transfer_date" ||
            key == "appointment_sentbook_date" ||
            key == "appointment_money_date" ||
            key == "car_tax_date" ||
            key == "car_insurance"
          ) {
            if (this.dates[key].length > 0) {
              this.activeFilters[key] = [];
              let moments = this.dates[key].map((dd) => moment(dd));
              return (
                d[key] >= moment.min(moments).format("YYYY-MM-DD") && d[key] <= moment.max(moments).format("YYYY-MM-DD")
              );
            } else {
              if (this.activeFilters[key].length == 2) {
                return true;
              } else if (this.activeFilters[key].length == 1) {
                if (this.activeFilters[key][0] == " ") {
                  return d[key] == " ";
                } else {
                  return d[key] != " ";
                }
              }
            }
          } else {
            return this.activeFilters[key].includes(d[key]);
          }
        });
      });
    },
    likesAll() {
      return this.$store.state.selectedHeaders.length === this.headers.length;
    },
    likesSome() {
      return this.$store.state.selectedHeaders.length > 0 && !this.likesAll;
    },
    icon() {
      if (this.likesAll) return "mdi-close-box";
      if (this.likesSome) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
  },
  async mounted() {
    await this.initialize();
    $(".v-data-table__wrapper").scroll(function () {
      $(".wrapper1").scrollLeft($(".v-data-table__wrapper").scrollLeft());
    });
    $(".wrapper1").scroll(function () {
      $(".v-data-table__wrapper").scrollLeft($(".wrapper1").scrollLeft());
    });
    this.headersDefault = this.headers;
  },
  methods: {
    async initialize() {
      this.loading = true;
      const data = new FormData();
      if (this.work_status == "close" || this.work_status == "all") {
        data.append("timeStart", this.timeStart);
        data.append("timeEnd", this.timeEnd);
        data.append("work_status", this.work_status);
      } else if (this.work_status == "search") {
        data.append("search", this.searchInServer);
        data.append("work_status", "all");
      } else {
        data.append("work_status", this.work_status);
      }

      const response = await apiWorks.followWork(data);
      console.log(response.data);
      this.data = response.data.data;
      this.loading = false;
      this.tableWidth = $(".v-data-table-header").width();

      this.initFilters();
    },
    async initializeReload() {
      this.activeFiltersTemp = this.activeFilters;
      this.loading = true;
      const data = new FormData();
      if (this.work_status == "close" || this.work_status == "all") {
        data.append("timeStart", this.timeStart);
        data.append("timeEnd", this.timeEnd);
      } else if (this.work_status == "search") {
        data.append("search", this.searchInServer);
      }
      data.append("work_status", this.work_status);
      const response = await apiWorks.followWork(data);
      // console.log(response.data);
      this.data = response.data.data;
      this.loading = false;
      this.tableWidth = $(".v-data-table-header").width();

      this.initFilters();
      this.activeFilters = this.activeFiltersTemp;
    },
    selectTimeStart(time) {
      this.timeStart = time.timeStart;
      this.timeEnd = time.timeEnd;
      // this.initialize();
    },
    async handleEnd() {
      this.renderComponent = false;
      this.setSelectedHeaders();
      await this.$nextTick();
      this.renderComponent = true;
    },
    setSelectedHeaders() {
      // console.log(this.selectedHeaderIndexs);
      var selectedHeaderIndexs = this.selectedHeaderIndexs;
      var filteredArray = this.headers.filter(function (item, index) {
        return selectedHeaderIndexs.includes(item.value);
      });
      this.$store.commit("setSelectedHeaders", filteredArray);
    },
    countField(key) {
      return this.filteredData.reduce((total, x) => (x[key] != " " ? total + 1 : total), 0);
    },
    changeBank() {
      this.updateSaleFilters();
    },
    initFilters() {
      for (const [key] of Object.entries(this.filters)) {
        if (
          key == "booking_date" ||
          key == "appointment_date" ||
          key == "contract_date" ||
          key == "appointment_bank_date" ||
          key == "appointment_book_date" ||
          key == "appointment_transfer_date" ||
          key == "appointment_sentbook_date" ||
          key == "appointment_money_date" ||
          key == "car_tax_date" ||
          key == "car_insurance"
        ) {
          let date = this.data
            .map((d) => {
              return d[key];
            })
            .filter((value, index, self) => {
              return self.indexOf(value) === index;
            })
            .filter((value) => {
              return value !== " ";
            })
            .sort();
          let moments = date.map((d) => moment(d));

          this.filters[key] = [
            " ",
            moment.min(moments).format("DD/MM/YYYY") + "-" + moment.max(moments).format("DD/MM/YYYY"),
          ];
        } else {
          this.filters[key] = this.data
            .map((d) => {
              return d[key];
            })
            .filter((value, index, self) => {
              return self.indexOf(value) === index;
            });
          this.filters[key].sort();
        }
      }
      this.activeFilters = Object.assign({}, this.filters);
    },
    updateSaleFilters() {
      this.filters["sale_name"] = this.data
        .map((d) => {
          return d["sale_name"];
        })
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
      this.filters["sale_name"].sort();
      this.activeFilters["sale_name"] = this.filters["sale_name"];

      this.$nextTick(() => {
        this.filters["sale_name"] = this.filteredData
          .map((d) => {
            return d["sale_name"];
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
        this.filters["sale_name"].sort();
        this.activeFilters["sale_name"] = this.filters["sale_name"];
      });
    },
    togleHeaderAll() {
      this.$nextTick(() => {
        // console.log(this.likesAll);
        if (this.likesAll) {
          this.$store.commit("setSelectedHeaderIndexs", []);
        } else {
          let headers = [];
          this.headers.forEach((element, index) => {
            headers.push(element.value);
          });
          this.$store.commit("setSelectedHeaderIndexs", headers);
        }
      });
    },
    selectHeaderAll() {
      this.$nextTick(() => {
        let headers = [];
        this.headers.forEach((element, index) => {
          headers.push(element.value);
        });
        this.$store.commit("setSelectedHeaderIndexs", headers);
      });
    },
    toggleAll(col) {
      this.activeFilters[col] = this.data
        .map((d) => {
          return d[col];
        })
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
    },
    toggle() {
      this.$nextTick(() => {
        if (this.likesAll) {
          this.$store.commit("setSelectedHeaders", []);
        } else {
          this.$store.commit("setSelectedHeaders", this.headers);
        }
      });
    },
    clearAll(col) {
      this.activeFilters[col] = [];
    },
    mouseMove(event) {
      if (this.mouseStart && this.startPixel == 0) {
        this.header_index = this.selectedHeaders.findIndex((x) => x.value === this.header_value);
        this.startPixel = event.offsetX;
      }
      this.moveDistance = Number(event.offsetX - this.startPixel);
    },
    getFiltered(e) {
      this.currentItems = e;
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
        this.dialogBooking = true;
        this.actionBooking = "check";
        this.car_no = car_no;
      }
    },
    async Appointment(car_no, work_id) {
      // this.car_no = car_no;
      this.formTitleAppointment = "นัดวันทำสัญญา (" + car_no + ")";
      this.dialogAppointment = true;
      this.idWork = work_id;
      this.status_bank = 4;
      this.actionAppointment = "check";
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
    async Contract(car_no, work_id, car_id, customer_id) {
      this.formTitleContract = "ปล่อยรถ";
      this.idWork = work_id;
      this.idCar = car_id;
      this.car_no = car_no;

      this.idCustomer = customer_id;
      this.dialogContract = true;
      this.actionContract = "check";
    },
    async CarTransferred(car_no, work_id) {
      this.car_no = car_no;
      this.formTitleAppointmentBank = "ชุดโอนรถ (" + car_no + ")";
      this.dialogAppointmentBank = true;
      this.idWork = work_id;
      this.status_bank = 9;
      this.actionAppointmentBank = "check";
    },
    async note(id) {
      this.dialogNote = true;
      this.idNote = id;
    },
    // sortTheHeadersAndUpdateTheKey(evt) {
    //   this.$store.commit("rearrangeHeader", evt);
    //   this.anIncreasingNumber += 1;
    // },
    print() {
      window.print();
    },
    handleDownload() {
      const filterVal = [];
      const header = [];
      for (let index = 0; index < this.selectedHeaders.length; index++) {
        filterVal.push(this.selectedHeaders[index].value);
        header.push(this.selectedHeaders[index].text);
      }
      // console.log(moment().format("DD/MM/YYYY ( HH:mm น.)"));
      this.$nextTick(() => {
        import("@/vendor/Export2Excel").then((excel) => {
          const tHeader = header;
          const list = this.filteredData;
          const data = this.formatJson(filterVal, list);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "ตามงาน",
            autoWidth: true,
            bookType: "xlsx",
          });
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
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

      customAlart.TopSuccess();

      this.$nextTick(() => {
        this.initializeReload();
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
        customAlart.TopError();
      });
    },
  },
  watch: {
    selectedHeaderIndexs() {
      this.setSelectedHeaders();
    },
    selectedHeaders() {
      $(".v-data-table__wrapper").scroll(function () {
        $(".wrapper1").scrollLeft($(".v-data-table__wrapper").scrollLeft());
      });
      $(".wrapper1").scroll(function () {
        $(".v-data-table__wrapper").scrollLeft($(".wrapper1").scrollLeft());
      });
      console.log(this.selectedHeaders);
    },
    moveDistance() {
      if (this.header_index >= 0 && this.mouseStart) {
        var width = this.selectedHeaders[this.header_index].width.split("px");
        // this.selectedHeaders[this.header_index].width =
        //   Number(width[0]) + this.moveDistance + "px";

        this.$store.commit("setHeaderWidth", {
          index: this.header_index,
          width: Number(width[0]) + this.moveDistance + "px",
        });
      }
    },
    disableSort() {
      if (this.disableSort) {
        var divsToHide = document.getElementsByClassName("v-data-table-header__icon"); //divsToHide is an array
        for (var i = 0; i < divsToHide.length; i++) {
          divsToHide[i].style.display = "none"; // depending on what you're doing
        }
      } else {
        var divsToHide = document.getElementsByClassName("v-data-table-header__icon"); //divsToHide is an array
        for (var i = 0; i < divsToHide.length; i++) {
          divsToHide[i].style.display = "inline"; // depending on what you're doing
        }
      }
    },
  },
};
</script>

<style>
#followTable > .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding: 0 8px !important;
}

#followTable > .v-data-table > .v-data-table__wrapper > table > tbody > tr > th {
  padding: 0 8px !important;
}

#followTable > .v-data-table .v-data-table__wrapper > table > tbody > tr > td {
  padding: 0 8px !important;
}
@media print {
  body * {
    visibility: hidden;
  }

  #followTable,
  #followTable * {
    visibility: visible;
  }
  #followTable {
    margin-top: -139px;
    left: 0;
    top: 0;
  }

  .noPrint * {
    visibility: hidden !important;
  }
}
</style>
