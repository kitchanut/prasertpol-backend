<template>
  <div>
    <!-- <v-dialog v-model="dialogDeleteComponent" fullscreen> -->
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-btn text @click="closeWindow()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title> ข้อมูลรถ </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-card outlined>
              <v-card-text>
                <v-row>
                  <v-col cols="9">
                    <h1 class="text-center" style="padding-left: 100px">
                      ข้อมูลรถ
                      <v-btn v-if="user_group_permission == -1" color="primary" fab x-small dark @click="editItem(id)">
                        <v-icon> mdi-pencil </v-icon>
                      </v-btn>
                    </h1>
                  </v-col>
                  <v-col class="d-flex justify-end">
                    <v-card outlined height="120" width="150">
                      <v-img
                        @click="getAllImg(id)"
                        cover
                        width="150"
                        height="120"
                        :src="serverUrl + formDataBuy.queryCar.img_id_first"
                      >
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-qrcode</v-icon>
                      ลำดับรถ:
                      <span>
                        {{ formDataBuy.queryCar == null ? "" : formDataBuy.queryCar.car_no }}
                      </span>
                    </h3></v-col
                  >
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car </v-icon>
                      ประเภทรถ:
                      <span>
                        {{
                          formDataBuy.queryCar.car_types == null
                            ? ""
                            : formDataBuy.queryCar.car_types.car_type_name +
                              formDataBuy.queryCar.car_types.car_type_name_en
                        }}
                      </span>
                    </h3>
                  </v-col>

                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car </v-icon>
                      ยี่ห้อรถ:
                      <span>
                        {{
                          formDataBuy.queryCar.car_models == null ? "" : formDataBuy.queryCar.car_models.car_model_name
                        }}
                      </span>
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car-multiple </v-icon>
                      รุ่น:
                      <span>{{
                        formDataBuy.queryCar.car_series == null ? "" : formDataBuy.queryCar.car_series.car_series_name
                      }}</span>
                    </h3>
                  </v-col>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car-connected </v-icon>
                      รุ่นย่อย:
                      <span>{{
                        formDataBuy.queryCar.car_serie_sub == null
                          ? ""
                          : formDataBuy.queryCar.car_serie_sub.car_serie_sub_name
                      }}</span>
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-engine </v-icon>
                      เครื่องยนต์:
                      <span
                        >{{
                          formDataBuy.queryCar.car_engine_amount == null ? "" : formDataBuy.queryCar.car_engine_amount
                        }}
                        CC</span
                      >
                    </h3>
                  </v-col>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-engine </v-icon>
                      เลขเครื่อง:
                      <span>{{
                        formDataBuy.queryCar.car_no_engine == null ? "" : formDataBuy.queryCar.car_no_engine
                      }}</span>
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-engine </v-icon>
                      เลขตัวถัง:
                      <span>{{
                        formDataBuy.queryCar.car_no_body == null ? "" : formDataBuy.queryCar.car_no_body
                      }}</span>
                    </h3>
                  </v-col>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car-shift-pattern </v-icon>
                      เกียร์:
                      <span
                        >{{
                          formDataBuy.queryCar.car_gear == null
                            ? ""
                            : formDataBuy.queryCar.car_gear == 1
                            ? "อัตโนมัติ (AT)"
                            : "ธรรมดา (MT)"
                        }}
                      </span>
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car-arrow-right </v-icon>
                      ปีผลิต:
                      <span> {{ formDataBuy.queryCar.car_year == null ? "" : formDataBuy.queryCar.car_year }}</span>
                    </h3>
                  </v-col>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car-arrow-right </v-icon>

                      ปีจดทะเบียน:
                      <span>
                        {{
                          formDataBuy.queryCar.car_mark_year == null
                            ? ""
                            : $moment(formDataBuy.queryCar.car_mark_year).format("DD/MM/YYYY")
                        }}
                      </span>
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-speedometer </v-icon>
                      เลขไมค์:
                      <span>
                        {{
                          formDataBuy.queryCar.car_mileage == null
                            ? ""
                            : Number(formDataBuy.queryCar.car_mileage).toLocaleString("th-TH")
                        }}
                      </span>
                      กม.
                    </h3>
                  </v-col>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-speedometer </v-icon>
                      เลขไมค์ประกัน:
                      <span>
                        {{
                          formDataBuy.queryCar.car_mileage_balance == null
                            ? ""
                            : Number(formDataBuy.queryCar.car_mileage_balance).toLocaleString("th-TH")
                        }}
                      </span>
                      กม.
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-card-bulleted-settings-outline </v-icon>
                      ทะเบียนเก่า:
                      <span>
                        {{ formDataBuy.queryCar.car_regis == null ? "" : formDataBuy.queryCar.car_regis }}
                      </span>
                    </h3>
                  </v-col>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-map-marker </v-icon>
                      ทะเบียนจังหวัด:
                      <span>
                        {{ formDataBuy.queryCar.province == null ? "" : formDataBuy.queryCar.province.name_th }}
                      </span>
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-card-bulleted-settings-outline </v-icon>
                      ทะเบียนใหม่:
                      <span>
                        {{
                          formDataBuy.queryCar.car_regis_current == null ? "" : formDataBuy.queryCar.car_regis_current
                        }}
                      </span>
                    </h3>
                  </v-col>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-map-marker </v-icon>
                      ทะเบียนจังหวัด:
                      <span>
                        {{
                          formDataBuy.queryCar.province_current == null
                            ? ""
                            : formDataBuy.queryCar.province_current.name_th
                        }}
                      </span>
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car-turbocharger </v-icon>
                      ใช้เชื้อเพลิง:
                      <span>
                        {{
                          formDataBuy.queryCar.fuel_type == null
                            ? ""
                            : formDataBuy.queryCar.fuel_type == 1
                            ? "น้ำมัน"
                            : formDataBuy.queryCar.fuel_type == 2
                            ? "ไฟฟ้า"
                            : "น้ำมัน/ไฟฟ้า"
                        }}
                      </span>
                    </h3>
                  </v-col>
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-car-tire-alert </v-icon>
                      ชนิดเชื้อเพลิง:
                      <span>
                        {{ formDataBuy.queryCar.fuels == null ? "" : formDataBuy.queryCar.fuels.fuel_name }}
                      </span>
                    </h3>
                  </v-col>
                </v-row>

                <v-row no-gutters class="mt-2">
                  <v-col cols="6">
                    <h3>
                      <v-icon left> mdi-map-marker</v-icon>
                      สาขา:
                      <span>
                        {{ formDataBuy.branch == null ? "" : formDataBuy.branch.branch_name }}
                      </span>
                    </h3>
                  </v-col>
                  <v-col cols="6"> </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-card class="mt-3" outlined>
              <v-card-text>
                <h1 class="text-center">ไฟล์รถทั้งหมด</h1>
              </v-card-text>
              <v-divider></v-divider>
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>ชื่อไฟล์</th>
                      <th>คนเพิ่ม</th>
                      <th>วันที่</th>
                      <th>ไฟล์</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(file_car, keys) in file_cars" :key="keys">
                      <td>{{ file_car.name }}</td>
                      <td>{{ file_car.user == null ? "" : file_car.user.first_name }}</td>
                      <td>{{ $moment(file_car.created_at).add(543, "year").format("DD MMMM YYYY HH:mm") }}</td>
                      <td>
                        <a :href="serverUrlFile + file_car.file_name" target="_blank">
                          <span style="font-weight: 800" class="blue--text">ดูไฟล์</span>
                        </a>
                      </td>
                    </tr>
                    <tr v-if="file_cars.length == 0">
                      <td colspan="4"><div class="text-center">ไม่มีข้อมูล</div></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-row v-if="user_group_permission == -1 || user_group_permission == 9" class="mb-3">
              <v-col cols="6">
                <v-card outlined>
                  <v-card-text>
                    <h1 class="text-center">การซื้อรถ</h1>
                    <br />

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>สั่งซื้อโดย:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{
                        formDataBuy.user == null ? "" : formDataBuy.user.first_name
                      }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ซื้อรถจาก:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{ formDataBuy.partner_car.partner_car_name }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>สั่งซื้อวันที่:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{
                        $moment(formDataBuy.queryCar.car_date_buy).format("DD/MM/YYYY")
                      }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ดาวน์:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">
                        {{
                          Number(formDataBuy.queryCar.amount_down).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>งวดผ่อน:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          Number(formDataBuy.queryCar.amount_slacken).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.</v-col
                      >
                    </v-row>

                    <v-divider></v-divider>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>เข้าก่อน Vat:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          Number(formDataBuy.queryCar.car_buy_vat).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.</v-col
                      >
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>เข้ารวม Vat:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          Number(formDataBuy.queryCar.car_buy).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.</v-col
                      >
                    </v-row>

                    <v-divider></v-divider>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ราคาขาย:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          Number(formDataBuy.queryCar.car_price_vat).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.</v-col
                      >
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ราคาจัด:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          Number(formDataBuy.queryCar.amount_price).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.</v-col
                      >
                    </v-row>

                    <v-divider></v-divider>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>บวก:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">
                        {{
                          Number(formDataBuy.queryCar.car_price_plus).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        %
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>คูณ:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          Number(formDataBuy.queryCar.car_price_multiply).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        %</v-col
                      >
                    </v-row>

                    <v-divider></v-divider>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ค่าดำเนินการ:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          Number(formDataBuy.queryCar.amount_overCost).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.</v-col
                      >
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>คชจ:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          Number(formDataBuy.queryCar.sumExpensesWithoutCar).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.</v-col
                      >
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>รวม:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end"
                        >{{
                          (
                            Number(formDataBuy.queryCar.amount_overCost) +
                            Number(formDataBuy.queryCar.sumExpensesWithoutCar)
                          ).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                        บ.</v-col
                      >
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card outlined>
                  <v-card-text>
                    <h1 class="text-center">การขาย</h1>
                    <br />

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>รหัสงาน:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{ formDataBuy.saleDetail.working_id }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ขายโดย:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{ formDataBuy.saleDetail.sale_name }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ขายให้กับ:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{ formDataBuy.saleDetail.customer_name }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ยื่นเรื่องซื้อวันที่:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{
                        formDataBuy.saleDetail.sale_booking == "ยังไม่มีข้อมูล"
                          ? "ยังไม่มีข้อมูล"
                          : $moment(formDataBuy.saleDetail.sale_booking).format("DD/MM/YYYY ( HH:mm น.)")
                      }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ปล่อยรถเมื่อ:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{
                        formDataBuy.saleDetail.sale_date == "ยังไม่มีข้อมูล"
                          ? "ยังไม่มีข้อมูล"
                          : $moment(formDataBuy.saleDetail.sale_date).format("DD/MM/YYYY ( HH:mm น.)")
                      }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ราคาขาย:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{
                        typeof formDataBuy.saleDetail.sale_price == "number"
                          ? Number(formDataBuy.saleDetail.sale_price).toLocaleString("th-TH", {
                              maximumFractionDigits: 0,
                              minimumFractionDigits: 0,
                            }) + " บ."
                          : formDataBuy.saleDetail.sale_price
                      }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ธนาคาร:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{ formDataBuy.saleDetail.bank_nick_name }}</v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>จัดได้%:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end">{{ formDataBuy.saleDetail.car_price_persen }}%</v-col>
                    </v-row>
                  </v-card-text>
                </v-card>

                <v-card outlined class="mt-5 pb-4">
                  <v-card-text>
                    <h1 class="text-center">กำไร/ขาดทุน</h1>
                    <br />
                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>รายรับสุทธิ:</h3>
                      </v-col>
                      <v-col
                        class="d-flex justify-end"
                        style="color: rgba(54, 162, 235, 1); font-size: 16px; font-weight: 500"
                      >
                        {{ Number(formDataBuy.queryCar.income).toLocaleString() }}
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>ค่าใช้จ่ายสุทธิ:</h3>
                      </v-col>
                      <v-col class="d-flex justify-end" style="color: grey; font-size: 16px; font-weight: 500">
                        {{ Number(formDataBuy.queryCar.sumOverAllExpenses).toLocaleString() }}
                      </v-col>
                    </v-row>

                    <v-row no-gutters>
                      <v-col cols="5">
                        <h3>กำไรสุทธิ:</h3>
                      </v-col>
                      <v-col
                        class="d-flex justify-end"
                        style="font-size: 16px; font-weight: 500"
                        :style="
                          Number(formDataBuy.queryCar.income) - Number(formDataBuy.queryCar.sumOverAllExpenses) > 0
                            ? 'color:green'
                            : 'color:red'
                        "
                      >
                        {{
                          (
                            Number(formDataBuy.queryCar.income) - Number(formDataBuy.queryCar.sumOverAllExpenses)
                          ).toLocaleString()
                        }}
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-card
              :height="user_group_permission == -1 || user_group_permission == 9 ? '' : '100%'"
              outlined
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 2 ||
                user_group_permission == 3 ||
                user_group_permission == 8 ||
                user_group_permission == 9 ||
                user_group_permission == 10 ||
                user_group_permission == 11
              "
            >
              <v-card-text>
                <h1 class="text-center">การจอง</h1>
              </v-card-text>
              <v-divider></v-divider>
              <v-data-table
                :headers="BookingHeaders"
                :items="formDataBuy.dataBooking"
                :items-per-page="10"
                :search="search_booking"
                :loading="loading"
                dense
                no-data-text="ยังไม่มีการเพิ่มข้อมูล"
                loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
              >
                <template v-slot:[`item.codeWorking`]="{ item }">
                  <h5>W{{ item.id }}</h5>
                </template>

                <template v-slot:[`item.customer`]="{ item }">
                  <h5 v-if="item.customer_id == null" class="red--text">
                    {{ item.customer_name }}
                    <!-- <br />
                        {{ item.customer_tel }} -->
                  </h5>
                  <h5 v-else class="green--text">
                    {{ item.customer_name }}
                    <!-- <br />
                        {{ item.customer_tel }} -->
                  </h5>
                </template>

                <template v-slot:[`item.sale`]="{ item }">
                  <h5 v-if="item.sale_id == null || item.sale_id == 0" class="red--text">ยังไม่เลือก</h5>
                  <h5 v-else class="green--text">
                    {{ item.sale.first_name }}
                  </h5>
                </template>
                <template v-slot:[`item.appointment_bank_type`]="{ item }">
                  <v-btn v-if="item.appointment_bank_type == 1" class="mt-1" x-small color="green" dark>ครบ</v-btn>
                  <v-btn v-if="item.appointment_bank_type == 2" class="mt-1" x-small color="red" dark>ไม่ครบ</v-btn>
                </template>
                <template v-slot:[`item.work_status`]="{ item }">
                  <v-chip v-if="item.status_del == 0" class="ml-1" label small color="error"> ยกเลิก </v-chip>
                  <v-chip v-else-if="item.work_status == '1'" label small> ลูกค้าสนใจ </v-chip>
                  <v-chip v-else-if="item.work_status == '2'" label small> จอง </v-chip>
                  <v-chip v-else-if="item.work_status == '3'" label small color="primary"> วางมัดจำแล้ว </v-chip>
                  <v-chip v-else-if="item.work_status == '4'" label small color="primary"> นัดทำสัญญาแล้ว </v-chip>
                  <v-chip v-else-if="item.work_status == '5'" label small color="warning"> รอแบงค์อนุมัติ </v-chip>
                  <v-chip v-else-if="item.work_status == '6'" label small color="warning"> แบงค์ไม่อนุมัติ </v-chip>
                  <v-chip v-else-if="item.work_status == '7'" label small color="primary"> แบงค์อนุมัติแล้ว </v-chip>
                  <v-chip v-else-if="item.work_status == '8'" label small color="success"> ปล่อยรถ </v-chip>
                  <v-chip v-else-if="item.work_status == '9'" label small color="success"> โอนรถสำเร็จ </v-chip>
                  <v-chip v-else-if="item.work_status == '10'" label small color="success"> รับเงินแล้ว </v-chip>
                  <v-chip v-else-if="item.work_status == '11'" label small color="success"> ปิดงาน </v-chip>
                </template>

                <template v-slot:[`item.created_at`]="{ item }">
                  <span
                    style="color: red"
                    v-if="$moment().unix() > Number($moment(item.created_at).unix()) + 604800 && item.created_at != ' '"
                  >
                    {{ $moment().diff($moment(item.created_at), "days") }}
                    วัน
                  </span>

                  <span
                    style="color: blue"
                    v-else-if="
                      $moment().unix() > Number($moment(item.created_at).unix()) + 86400 && item.created_at != ' '
                    "
                  >
                    {{ $moment().diff($moment(item.created_at), "days") }}
                    วัน
                  </span>

                  <span style="color: blue" v-else-if="item.created_at != ' '">
                    {{ $moment(item.created_at).fromNow(true) }}
                  </span>
                </template>

                <template v-slot:[`item.appointment_date`]="{ item }">
                  <span v-if="item.appointment_date != null">
                    {{ $moment(item.appointment_date).format("DD/MM/YYYY") }}
                  </span>
                </template>

                <template v-slot:[`item.appointment_money_date`]="{ item }">
                  <span v-if="item.appointment_money_date != null">
                    {{ $moment(item.appointment_money_date).format("DD/MM/YYYY") }}
                  </span>
                </template>

                <template v-slot:[`item.appointment_book_date`]="{ item }">
                  <span v-if="item.appointment_book_date != null">
                    {{ $moment(item.appointment_book_date).format("DD/MM/YYYY") }}
                  </span>
                </template>

                <template v-slot:[`item.appointment_mkt_date`]="{ item }">
                  <span v-if="item.appointment_mkt_date != null">
                    {{ $moment(item.appointment_mkt_date).format("DD/MM/YYYY") }}
                  </span>
                </template>

                <template v-slot:[`item.car_price`]="{ item }">
                  {{
                    Number(item.car_price).toLocaleString("th-TH", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card outlined class="mb-3">
              <v-card-text>
                <h1 class="text-center">ตารางเทียบไฟแนนซ์</h1>
              </v-card-text>
              <v-divider v-if="formDataBuy.dataPreviewBanks.length > 0"></v-divider>
              <v-simple-table v-if="formDataBuy.dataPreviewBanks.length > 0" dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="">ธนาคาร</th>
                      <th class="text-right">ราคากลาง</th>
                      <th class="text-center">บวก (%)</th>
                      <th class="text-center">คูณ (%)</th>
                      <th class="text-right">รวมจัด</th>
                      <th class="text-right" width="10%">95%</th>
                      <th class="text-right" width="10%">90%</th>
                      <th class="text-right" width="10%">85%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(dataPreviewBank, keys) in formDataBuy.dataPreviewBanks"
                      :key="keys"
                      :style="dataPreviewBank.isSelected ? 'color:green; font-weight: bold' : ''"
                    >
                      <td>{{ dataPreviewBank.bank_name.bank_name }}</td>
                      <td align="end">
                        {{
                          Number(dataPreviewBank.middle_price).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="center">
                        {{
                          Number(dataPreviewBank.middle_plus).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="center">
                        {{
                          Number(dataPreviewBank.middle_multiply).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="end">
                        {{
                          Number(dataPreviewBank.amount_price).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="end">
                        {{
                          Number(dataPreviewBank.middle_price) * 0.95 == "NaN"
                            ? 0
                            : Number(dataPreviewBank.middle_price * 0.95).toLocaleString("th-TH", {
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                              })
                        }}
                      </td>
                      <td align="end">
                        {{
                          Number(dataPreviewBank.middle_price * 0.9).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                      <td align="end">
                        {{
                          Number(dataPreviewBank.middle_price * 0.85).toLocaleString("th-TH", {
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          })
                        }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <h2 v-else class="text-center py-3" style="color: red">ไม่มีข้อมูลเทียบ</h2>
            </v-card>

            <v-card
              outlined
              class="mb-3"
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 8 ||
                user_group_permission == 9 ||
                user_group_permission == 10 ||
                user_group_permission == 11
              "
            >
              <v-card-text>
                <v-row>
                  <v-col>
                    <h1 class="text-center" style="padding-left: 200px">
                      ค่าใช้จ่ายตัวรถ
                      <v-btn
                        v-if="user_group_permission == -1 || user_group_permission == 10"
                        color="primary"
                        fab
                        x-small
                        dark
                        @click="editItem(id)"
                      >
                        <v-icon> mdi-pencil </v-icon>
                      </v-btn>
                    </h1>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="search_outlay"
                      append-icon="mdi-magnify"
                      label="ค้นหา"
                      single-line
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-data-table
                :headers="OutlayHeaders"
                :items="dataOutlay"
                :items-per-page="10"
                :search="search_outlay"
                :loading="loading"
                no-data-text="ยังไม่มีการเพิ่มข้อมูล"
                loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
                dense
              >
                <template v-slot:[`item.file`]="{ item }">
                  <div v-if="item.file == null">
                    <span>-</span>
                  </div>
                  <div v-else>
                    <v-btn icon>
                      <v-avatar size="40" @click="showImg(serverUrl + item.file)">
                        <v-img :src="serverUrl + item.file"> </v-img>
                      </v-avatar>
                    </v-btn>
                  </div>
                </template>
                <template v-slot:[`item.date`]="{ item }">
                  <span>
                    {{ $moment(item.date).format("DD/MM/YYYY") }}
                  </span>
                </template>

                <template v-slot:[`item.money`]="{ item }">
                  {{
                    Number(item.money).toLocaleString("th-TH", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </template>

                <template v-slot:[`item.type`]="{ item }">
                  <span v-if="item.type == 1">ค่าตัวรถ</span>
                  <span v-else-if="item.type == 2">รถ</span>
                  <span v-else-if="item.type == 3">ค่าซ่อมก่อนขาย</span>
                  <span v-else-if="item.type == 4">ค่าซ่อมหลังขาย</span>
                  <span v-else-if="item.type == 5">ค่าคอม</span>
                  <span v-else-if="item.type == 6">ค่าจ้างคนค้ำ</span>
                  <span v-else-if="item.type == 7">ค่านำพา</span>
                  <span v-else-if="item.type == 8">ค่าซื้อแทน</span>
                  <span v-else-if="item.type == 9">ค่าน้ำมัน</span>
                  <span v-else-if="item.type == 10">ค่าสี</span>
                  <span v-else-if="item.type == 11">ค่าขนส่ง</span>
                  <span v-else-if="item.type == 12">ค่าส่งเสริมการขาย</span>
                  <span v-else-if="item.type == 13">คืนเงิน</span>
                  <span v-else-if="item.type == 14">ค่างวด</span>
                  <span v-else>อื่น ๆ</span>
                </template>

                <!-- <template v-slot:[`item.broken`]="{ item }">
                  <span v-if="item.broken == 1">ไม่</span>
                  <span v-else>หัก</span>
                </template>

                <template v-slot:[`item.type_bill`]="{ item }">
                  <span v-if="item.type_bill == 1">เงินสด</span>
                  <span v-else>ใบกำกับภาษี</span>
                </template> -->

                <template v-slot:[`item.actions`]="{ item }">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="deleteItem(item.id)">
                        <v-list-item-title>ลบ</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-data-table>
            </v-card>

            <v-card
              outlined
              class="mb-3"
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 8 ||
                user_group_permission == 9 ||
                user_group_permission == 10 ||
                user_group_permission == 11
              "
            >
              <v-card-text>
                <h1 class="text-center">รายรับ</h1>
              </v-card-text>
              <v-divider></v-divider>
              <v-data-table
                :headers="IncomeHeaders"
                :items="dataIncome"
                :items-per-page="10"
                :loading="loading"
                no-data-text="ยังไม่มีการเพิ่มข้อมูล"
                loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
                dense
              >
                <!-- <template v-slot:[`item.file`]="{ item }">
                      <div v-if="item.file == null">
                        <span>-</span>
                      </div>
                      <div v-else>
                        <v-btn icon>
                          <v-avatar size="40" @click="showImg(serverUrl + item.file)">
                            <v-img :src="serverUrl + item.file"> </v-img>
                          </v-avatar>
                        </v-btn>
                      </div>
                    </template> -->

                <template v-slot:[`item.date`]="{ item }">
                  <span>
                    {{ $moment(item.date).format("DD/MM/YYYY") }}
                  </span>
                </template>

                <template v-slot:[`item.working_id`]="{ item }">
                  <span v-if="item.working_id"> W{{ item.working_id }}</span>
                </template>

                <template v-slot:[`item.no`]="{ item }">
                  {{ item.no }}
                  <v-icon v-if="item.main_type == 'ใบสำคัญรับเงิน'" color="primary" size="20">mdi-file</v-icon>
                </template>

                <template v-slot:[`item.money`]="{ item }">
                  {{
                    Number(item.money).toLocaleString("th-TH", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </template>

                <template v-slot:[`item.type`]="{ item }">
                  <span v-if="item.type == 1">ตัวรถ</span>
                  <span v-else>อื่น ๆ</span>
                </template>

                <template v-slot:[`item.type_bill`]="{ item }">
                  <span v-if="item.type_bill == 1">เงินสด</span>
                  <span v-else>ใบกำกับภาษี</span>
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="deleteItemIncome(item.id)">
                        <v-list-item-title>ลบ</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-data-table>
            </v-card>

            <v-card
              class="mb-3"
              outlined
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 8 ||
                user_group_permission == 9 ||
                user_group_permission == 10 ||
                user_group_permission == 11
              "
            >
              <v-card-text>
                <v-row>
                  <v-col>
                    <h1 class="text-center pt-2" style="padding-left: 200px">ประวัติซ่อม (อู่นอก)</h1>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="search_repair"
                      append-icon="mdi-magnify"
                      label="ค้นหา"
                      single-line
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-data-table
                :headers="RepairHeaders_out"
                :items="dataRepair_out"
                :items-per-page="10"
                :search="search_repair_out"
                :loading="loading"
                dense
                no-data-text="ยังไม่มีการเพิ่มข้อมูล"
                loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
              >
                <template v-slot:[`item.created_at`]="{ item }">
                  {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
                </template>
                <template v-slot:[`item.working_id`]="{ item }">
                  <span v-if="item.working_id == 0"> - </span>
                  <span v-else> W:{{ item.working_id }} </span>
                </template>
                <template v-slot:[`item.job_technician_pathner_list`]="{ item }">
                  <div v-html="item.job_technician_pathner_list"></div>
                </template>
                <template v-slot:[`item.job_price`]="{ item }">
                  {{ Number(item.job_price).toLocaleString() }}
                </template>

                <template v-slot:[`item.typeRepair`]="{ item }">
                  <h5 v-if="item.job_type == 1" class="blue--text">ก่อนขาย</h5>
                  <h5 v-if="item.job_type == 2" class="red--text">หลังขาย</h5>
                </template>
              </v-data-table>
            </v-card>
            <v-card
              class="mb-3"
              outlined
              v-if="
                user_group_permission == -1 ||
                user_group_permission == 8 ||
                user_group_permission == 9 ||
                user_group_permission == 10 ||
                user_group_permission == 11
              "
            >
              <v-card-text>
                <v-row>
                  <v-col>
                    <h1 class="text-center" style="padding-left: 200px">ประวัติซ่อม (อู่ใน)</h1>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="search_repair"
                      append-icon="mdi-magnify"
                      label="ค้นหา"
                      single-line
                      outlined
                      dense
                      hide-details
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-data-table
                :headers="RepairHeaders"
                :items="dataRepair"
                :items-per-page="10"
                :loading="loading"
                :search="search_repair"
                dense
                no-data-text="ยังไม่มีการเพิ่มข้อมูล"
                loading-text="กำลังโหลดข้อมูลกรุณารอสักครู่"
              >
                <template v-slot:[`item.job_technician_id`]="{ item }">
                  {{ "J" + item.job_technician_id }}
                </template>

                <template v-slot:[`item.created_at`]="{ item }">
                  {{ $moment(item.created_at).format("DD/MM/YYYY ( HH:mm น.)") }}
                </template>
                <template v-slot:[`item.working_id`]="{ item }">
                  <span v-if="item.working_id == 0"> - </span>
                  <span v-else> W:{{ item.working_id }} </span>
                </template>
                <template v-slot:[`item.typeRepair`]="{ item }">
                  <h5 v-if="item.job_type == 1" class="blue--text">ก่อนขาย</h5>
                  <h5 v-if="item.job_type == 2" class="red--text">หลังขาย</h5>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
          <v-col cols="4">
            <cardRequestLog :car_no="formDataBuy.queryCar == null ? '' : formDataBuy.queryCar.car_no" />
          </v-col>
        </v-row>
      </v-card-text>

      <dialogNew
        :dialog="dialog"
        :id="id"
        :action="action"
        :formTitle="formTitle"
        @cancleItem="dialog = false"
        @success="addSuccess"
        @error="addError"
      />

      <dialogImage :dialog="dialogImg" :imgUrl="imgUrl" @cancleItem="dialogImg = false" />

      <dialogImageCar :dialog="dialogImg_car" :id="id" @cancleItem="dialogImg_car = false" />
    </v-card>
    <!-- </v-dialog> -->
  </div>
</template>

<script>
import moment from "moment";
import * as apiCars from "@/Api/apiCars";
import * as apiJobTechnician from "@/Api/apiJobTechnician";
import * as apiPathner_job_technician from "@/Api/apiPathner_job_technician";
import * as apiOutlay_costs from "@/Api/apiOutlay_costs";
import * as apiAdd_income from "@/Api/apiAdd_income";
import * as apiFile_car from "@/Api/apiFile_car";
import * as customAlart from "@/customJS/customAlart";

import dialogNew from "@/components/dialog/dialogPurchaseCar";
import BarChartPriceCar from "@/components/BarChart/BarChartPriceCar";
import dialogImage from "@/components/dialog/dialogImage";
import dialogImageCar from "@/components/dialog/dialogImage_car";
import cardRequestLog from "@/components/dialog/cardRequestLog";

export default {
  // props: ["dialog", "id", "formTitleAllInfoCar"],
  components: {
    BarChartPriceCar,
    dialogImage,
    dialogNew,
    dialogImageCar,
    cardRequestLog,
  },
  layout: "full",
  data() {
    return {
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      serverUrl: process.env.serverUrl,
      serverUrlFile: process.env.serverUrl + "/assets/images/cars/",
      formTitleAllInfoCar: "",

      dialog: false,
      formTitle: "Add",
      action: "add",

      imgUrl: "",
      dialogImg: false,
      dialogImg_car: false,
      search_booking: "",
      search_repair: "",
      search_repair_out: "",
      search_outlay: "",
      search_income: "",
      id: null,
      btnloading: false,
      formDataLoading: false,
      dialogDeleteComponent: false,
      dataRepair: [],
      dataRepair_out: [],
      moment: moment,
      customInput: 75,
      loading: true,

      file_cars: [],

      BookingHeaders: [
        { text: "รหัสงาน", value: "codeWorking", align: "center" },
        { text: "ผู้สนใจ", value: "customer" },
        { text: "เซล", value: "sale" },
        { text: "เวลาจอง", value: "created_at" },
        { text: "สาขา", value: "branch.branch_name" },
        { text: "สถานะ", value: "work_status" },
      ],
      RepairHeaders: [
        { text: "รหัสงาน", value: "working_id" },
        { text: "เวลา", value: "created_at" },
        { text: "รหัสงานช่าง", value: "job_technician_id" },
        { text: "รายการซ่อม", value: "repair.repair_name" },
        { text: "ราคาซ่อม", value: "price", align: "end" },
        { text: "ซ่อมตอน", value: "typeRepair" },
      ],
      RepairHeaders_out: [
        { text: "รหัสงาน", value: "working_id" },
        { text: "เสร็จวันที่", value: "expected_date_end" },
        { text: "ชื่ออู่", value: "partner_technicians.partner_technician" },
        { text: "รายการซ่อม", value: "job_technician_pathner_list" },
        { text: "ราคาซ่อม", value: "job_price", align: "end" },
        { text: "ซ่อมตอน", value: "typeRepair" },
        { text: "โดย", value: "user.first_name" },
      ],
      OutlayHeaders: [
        { text: "วันที่", value: "date", width: "120px" },
        { text: "ประเภท", value: "type", width: "12%" },
        { text: "ผู้รับเงิน", value: "shop", width: "15%" },
        { text: "รายการ", value: "detail" },
        { text: "จำนวนเงิน", value: "money", align: "end", width: "10%" },
        { text: "สาขา", value: "branch.branch_name", width: "150px" },
        { text: "โดย", value: "user.first_name", width: "12%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "3%" },
      ],
      dataOutlay: [],
      IncomeHeaders: [
        { text: "วันที่", value: "date", width: "7%" },
        { text: "รหัสงาน", value: "working_id", width: "10%" },
        { text: "เลขธุรกรรม", value: "no", width: "12%" },
        { text: "ร้านค้า/ลูกค้า", value: "shop", width: "20%" },
        { text: "รายการ", value: "detail" },
        { text: "จำนวนเงิน", value: "money", align: "end", width: "10%" },
        { text: "โดย", value: "user.first_name", width: "12%" },
        { text: "จัดการ", value: "actions", sortable: false, width: "3%" },
      ],

      dataIncome: [],
      dataProfiteCard: [],

      formDataBuy: {
        saleDetail: {},
        customer: [
          {
            customer_name: "",
          },
        ],
        working: [
          {
            created_at: "",
          },
        ],
        receiving_moneys: [
          {
            receiving_money_all: 0,
          },
        ],
        queryCar: [
          {
            car_models: [
              {
                car_model_name: "",
              },
            ],
            car_buy: 0,
            created_at: "",
          },
        ],

        partner_car: [
          {
            partner_car_name: "",
          },
        ],
        user: [
          {
            first_name: "",
          },
        ],
        sale: [
          {
            first_name: "",
          },
        ],
        dataPreviewBanks: [],
        dataBooking: [],
      },
      dataChart: null,
    };
  },
  async mounted() {
    this.loading = true;
    this.id = this.$route.query.id;
    this.formTitleAllInfoCar = this.$route.query.formTitleAllInfoCar;

    this.$nextTick(async () => {
      await this.detailBuy();
      await this.getFileCar();
      if (
        this.user_group_permission == "-1" ||
        this.user_group_permission == 8 ||
        this.user_group_permission == 9 ||
        this.user_group_permission == 10 ||
        this.user_group_permission == 11
      ) {
        await this.repair_in();
        await this.repair_out();
        await this.getOutlay();
        await this.getIncome();
      }
    });

    this.loading = false;
  },
  methods: {
    closeWindow: function () {
      window.open("", "_self").close();
    },
    showImg(url) {
      this.dialogImg = true;
      this.imgUrl = url;
    },
    async getFileCar() {
      const data = new FormData();
      data.append("car_id", this.id);
      const response = await apiFile_car.file_car(data);
      this.file_cars = response.data.car_file;
    },
    async repair_in() {
      const response = await apiJobTechnician.selectWhereCar(this.id);
      this.dataRepair = response.data;
    },
    async repair_out() {
      // const response = await apiJobTechnician.selectWhereCar(this.id);
      const response = await apiPathner_job_technician.selectWhereCar(this.id);
      this.dataRepair_out = response.data;
    },
    async getOutlay() {
      const data = new FormData();
      data.append("car_id", this.id);
      const response = await apiOutlay_costs.outlaycost_car(data);
      // console.log("dataOutlay", response.data);
      this.dataOutlay = response.data;
    },
    async deleteItem(id) {
      let text = "ยืนยันการทำรายการ!\nทำรายการแล้วไม่สามารถกู้คืนได้.";
      if (confirm(text) == true) {
        const respone = apiOutlay_costs.delete_outlay(id);
        respone.then(async (res) => {
          // console.log(res);
          if (res.status == 200) {
            customAlart.TopSuccess();

            this.$nextTick(() => {
              this.getOutlay();
            });
          } else {
            customAlart.TopError();
          }
        });
      }
    },
    async getIncome() {
      const data = new FormData();
      data.append("car_id", this.id);
      const response = await apiAdd_income.income_car(data);
      // console.log("income_car", response);
      this.dataIncome = response.data;
    },
    async deleteItemIncome(id) {
      let text = "ยืนยันการทำรายการ!\nทำรายการแล้วไม่สามารถกู้คืนได้.";
      if (confirm(text) == true) {
        const respone = apiAdd_income.delete_income(id);
        respone.then(async (res) => {
          if (res.status == 200) {
            customAlart.TopSuccess();

            this.$nextTick(() => {
              this.getIncome();
            });
          } else {
            customAlart.TopError();
          }
        });
      }
    },
    async editItem(item) {
      this.formTitle = "แก้ไขข้อมูล";
      this.dialog = true;
      this.id = item;
      this.action = "edit";
    },
    async getAllImg(car_id) {
      this.dialogImg_car = true;
      this.id = car_id;
    },
    async detailBuy() {
      const response = await apiCars.getAllinfo(this.id, this.user_group_permission);
      this.formDataBuy = response.data;
      this.dataProfiteCard = response.data.newDatas_price;
      // this.$nextTick(() => {
      //   const self = this;
      //   this.$nextTick(async () => {
      //     self.formDataBuy = await response.data;
      //   });
      // });

      this.$nextTick(() => {
        this.dataChart = {
          labels: response.data.newLabels_car,
          datasets: [
            {
              borderWidth: 1,
              backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
              borderColor: response.data.newColors_car,
              data: response.data.newDatas_price,
            },
          ],
        };
        this.customInput = 75;
      });
    },
    async addSuccess(value) {
      if (value == "Car") {
        this.dialog = false;
        this.$nextTick(async () => {
          this.id = this.$route.query.id;
          this.formTitleAllInfoCar = this.$route.query.formTitleAllInfoCar;

          this.$nextTick(async () => {
            await this.detailBuy();
            await this.repair_in();
            await this.repair_out();
            await this.getOutlay();
            await this.getIncome();
          });

          customAlart.TopSuccess();
        });
      }
    },
    async addError(value) {
      if (value == "Car") {
        this.dialog = false;
        this.$nextTick(async () => {
          this.id = this.$route.query.id;
          this.formTitleAllInfoCar = this.$route.query.formTitleAllInfoCar;

          this.$nextTick(async () => {
            await this.detailBuy();
            await this.repair_in();
            await this.repair_out();
            await this.getOutlay();
            await this.getIncome();
          });

          customAlart.TopError();
        });
      }
    },
  },
  watch: {
    dataRepair_out() {
      const self = this;
      return this.dataRepair_out.map(function (item) {
        item.no =
          self.dataRepair_out
            .map(function (x) {
              return x.id;
            })
            .indexOf(item.id) + 1;
      });
    },
    dataRepair() {
      const self = this;
      return this.dataRepair.map(function (item) {
        item.no =
          self.dataRepair
            .map(function (x) {
              return x.id;
            })
            .indexOf(item.id) + 1;
      });
    },

    dataOutlay() {
      const self = this;
      return this.dataOutlay.map(function (item) {
        item.row_no =
          self.dataOutlay
            .map(function (x) {
              return x.id;
            })
            .indexOf(item.id) + 1;
      });
    },
    dataIncome() {
      const self = this;
      return this.dataIncome.map(function (item) {
        item.row_no =
          self.dataIncome
            .map(function (x) {
              return x.id;
            })
            .indexOf(item.id) + 1;
      });
    },
    dialogDeleteComponent() {
      if (!this.dialogDeleteComponent) {
        this.$emit("cancleItem");
      }
    },
  },
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5 {
  font-weight: 300;
}
</style>
