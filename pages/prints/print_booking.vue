<template>
  <div size="A4">
    <v-card class="elevation-0">
      <v-form ref="form">
        <div align="center">
          <h2>เอกสารสรุปงานขาย</h2>
        </div>
        <v-card-text class="b-solid-t">
          <div>
            <!-- กรอบข้อมูลช่อง 1 -->
            <v-row class="d-flex flex-row">
              <v-col class="text-right">
                <h5>
                  ชื่อเซล:
                  <span>{{
                    formData.sale == null ? "" : formData.sale.first_name
                  }}</span>
                  <!-- &nbsp; เบอร์โทร:
                  <span>{{
                    formData.sale == null ? "" : formData.sale.tel
                  }}</span> -->

                  &nbsp; สาขา:
                  <span>{{
                    formData.sale_branch == null
                      ? ""
                      : formData.sale_branch.branch_name
                  }}</span>
                </h5>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-row">
              <v-col col="2">
                <h5>
                  ลำดับรถ: <span>{{ formData.car_no }}</span>
                </h5>
              </v-col>
              <v-col col="2">
                <h5>
                  ยี่ห้อรถ: <span>{{ formData.car_model_name }}</span>
                </h5>
              </v-col>
              <v-col col="2">
                <h5>
                  รุ่น: <span>{{ formData.car_series_name }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  รุ่นย่อย: <span>{{ formData.car_serie_sub_name }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 2 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ปี: <span>{{ formData.car_year }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  สี: <span>{{ formData.color_name }}</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  ทะเบียน: <span>{{ formData.car_regis }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  เลขตัวถัง: <span>{{ formData.car_no_body }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  เลขเครื่อง: <span>{{ formData.car_no_engine }}</span>
                </h5>
              </v-col>
            </v-row>
            <!-- กรอบข้อมูลช่อง 3 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  จองวันที่:
                  <span>{{
                    formData.created_at == null
                      ? ""
                      : $moment(formData.created_at)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                  }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  จำนวน:
                  <span>{{
                      formData.customer_bath_pledge == undefined
                        ? 0
                        : formData.customer_bath_pledge
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col>
                <h5>
                  โอนเงินวันที่:
                  <span>
                    {{
                      formData.customer_bath_date_transfer == null
                        ? ""
                        : $moment(formData.customer_bath_date_transfer)
                            .add(543, "year")
                            .format("DD MMMM YYYY")
                    }}</span>
                </h5>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  เซ็นต์วันที่:
                  <span>
                    {{
                      formData.customer_bath_date_signed == null
                        ? ""
                        : $moment(formData.customer_bath_date_signed)
                            .add(543, "year")
                            .format("DD MMMM YYYY")
                    }}
                  </span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ปล่อยวันที่:
                  <span>
                    {{
                      formData.customer_car_date_release == null
                        ? ""
                        : $moment(formData.customer_car_date_release)
                            .add(543, "year")
                            .format("DD MMMM YYYY")
                    }}
                  </span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->
            <!-- กรอบข้อมูลช่อง 4 -->
            <v-row class="d-flex flex-row space">
              <v-col cols="9">
                <h5>
                  ราคากลาง:
                  <span>{{
                      formData.price_middle == undefined
                        ? 0
                        : Number(formData.price_middle).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>

              <v-col cols="3">
                <h5>
                  จัดได้:
                  <span>{{
                      formData.persen == undefined
                        ? 0
                        : Number(formData.persen).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                  </span>
                  &nbsp;%
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 5 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ราคาเดิม:
                  <span>{{
                      formData.price_original == undefined
                        ? 0
                        : Number(formData.price_original).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>

              <v-col>
                <h5>
                  ดาวน์:
                  <span>{{
                      formData.price_original_deposit == undefined
                        ? 0
                        : Number(
                            formData.price_original_deposit
                          ).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ยอดจัด:
                  <span>{{
                      formData.price_original_aggregate == undefined
                        ? 0
                        : Number(
                            formData.price_original_aggregate
                          ).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 6 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ราคาปิด:
                  <span>{{
                      formData.price_close == undefined
                        ? 0
                        : Number(formData.price_close).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>

              <v-col>
                <h5>
                  ดาวน์:
                  <span>{{
                      formData.amount_slacken == undefined
                        ? 0
                        : Number(formData.amount_slacken).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ค้างดาวน์:
                  <span>{{
                      formData.price_hole_down == undefined
                        ? 0
                        : Number(formData.price_hole_down).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ยอดจัด:
                  <span>{{
                      formData.price_close_aggregate == undefined
                        ? 0
                        : Number(formData.price_close_aggregate).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 7 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ดอกเบี้ย:
                  <span>{{
                      formData.interest == undefined ? 0 : formData.interest
                    }}
                    %</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  ค่างวด/เดือน:
                  <span>{{
                      formData.amount_down == undefined
                        ? 0
                        : Number(formData.amount_down).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col>
                <h5>
                  เป็นจำนวน/เดือน:
                  <span>{{
                      formData.payment_term_month == undefined
                        ? 0
                        : Number(formData.payment_term_month).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ธนาคาร: <span>{{ formData.bank }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 8 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ผู้เซ็นต์: <span>{{ formData.penname }}</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  ผลเครดิต: <span>{{ formData.credit_result }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 9 -->
            <v-row class="d-flex flex-row space">
              <v-col col="5">
                <h5>
                  ผู้ซื้อ ชื่อ-นามสกุล:
                  <span>{{ formData.customer_name }}</span>
                </h5>
              </v-col>

              <v-col col="2">
                <h5>
                  อายุ:
                  <span>{{
                    543 +
                    Number(new Date().getFullYear()) -
                    Number(formData.customer_birthday_year)
                  }}</span>
                </h5>
              </v-col>
              <v-col col="5">
                <h5>
                  เบอร์โทร: <span>{{ formData.customer_tel }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 10 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  Facebook: <span>{{ formData.customer_facebook }}</span>
                </h5>
              </v-col>

              <v-col cols="3">
                <h5>
                  Line: <span>{{ formData.customer_line }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  E-mail: <span>{{ formData.customer_email }}</span>
                </h5>
              </v-col>
            </v-row>
            <!-- กรอบข้อมูลช่อง 11 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ที่อยู่ตามทะเบียนบ้าน:
                  <span>
                    {{ formData.customer_address }}
                    &nbsp;
                    {{
                      formData.Amphure == null ? "" : formData.Amphure.name_th
                    }}
                    &nbsp;
                    {{
                      formData.District == null ? "" : formData.District.name_th
                    }}
                    &nbsp;
                    {{
                      formData.Province == null ? "" : formData.Province.name_th
                    }}
                  </span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 12 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ที่อยู่ปัจจุบัน:
                  <span>
                    {{ formData.customer_address_current }}
                    &nbsp;
                    {{
                      formData.Amphure_current == null
                        ? ""
                        : formData.Amphure_current.name_th
                    }}
                    &nbsp;
                    {{
                      formData.District_current == null
                        ? ""
                        : formData.District_current.name_th
                    }}
                    &nbsp;
                    {{
                      formData.Province_current == null
                        ? ""
                        : formData.Province_current.name_th
                    }}
                  </span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->
            <!-- กรอบข้อมูลช่อง 13 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  อายุงานกี่เดือน:
                  <span>{{
                    formData.customer_work_age == undefined
                      ? 0
                      : formData.customer_work_age
                  }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  รายได้:
                  <span>{{
                    formData.customer_income == undefined ||
                    formData.customer_income == null
                      ? 0
                      : Number(formData.customer_income).toLocaleString(
                          "th-TH",
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }
                        )
                  }}</span>
                  &nbsp; บาท/เดือน
                </h5>
              </v-col>
              <v-col>
                <h5>
                  รายได้:
                  <span>{{
                    formData.customer_income == undefined ||
                    formData.customer_income == null
                      ? 0
                      : (Number(formData.customer_income) / 31).toLocaleString(
                          "th-TH",
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }
                        )
                  }}</span>
                  บาท/วัน
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 14 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  รับเงินเดือน:
                  <span>{{
                    formData.customer_receive_money_type == 1
                      ? "เข้าบัญชี"
                      : "เงินสด"
                  }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  สลิปเงินเดือน:
                  <span>{{
                    formData.customer_slip_money == 1 ? "มี" : "ไม่มี"
                  }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  หนังสือรับรองเงินเดือน:
                  <span>{{
                    formData.customer_receive_evidence == 1 ? "มี" : "ไม่มี"
                  }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 16 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  อาชีพ:
                  <div v-if="formData.customer_job != 5">
                    <span v-if="formData.customer_job == 1">ข้าราชการ</span>
                    <span v-if="formData.customer_job == 2">พนักงานเอกชน</span>
                    <span v-if="formData.customer_job == 3">เกษตร</span>
                    <span v-if="formData.customer_job == 4">ค้าขาย</span>
                  </div>
                </h5>
              </v-col>
              <v-col v-if="formData.customer_job == 5">
                <span>{{ formData.customer_job_list }}</span>
              </v-col>

              <v-col>
                <h5>
                  มีที่ทำกิน:
                  <span>{{
                    formData.customer_land_all == undefined
                      ? 0
                      : formData.customer_land_all
                  }}</span>
                  ไร่
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ที่ตัวเอง:
                  <span>{{
                    formData.customer_land_domin == undefined
                      ? 0
                      : formData.customer_land_domin
                  }}</span>
                  ไร่
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ที่เช่า:
                  <span>{{
                    formData.customer_land_hire == undefined
                      ? 0
                      : formData.customer_land_hire
                  }}</span>
                  ไร่
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 19 -->

            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>มีค่าใช้จ่ายอะไรบ้าง</h5>
              </v-col>
              <v-col>
                <h5>
                  ค่าเช่าบ้าน:
                  <span>{{
                    formData.customer_value_home == undefined
                      ? 0
                      : Number(formData.customer_value_home).toLocaleString(
                          "th-TH",
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }
                        )
                  }}</span>&nbsp; บาท/เดือน
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ค่าผ่อนรถ:
                  <span>{{
                    formData.customer_value_car == undefined
                      ? 0
                      : Number(formData.customer_value_car).toLocaleString(
                          "th-TH",
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }
                        )
                  }}</span>&nbsp; บาท/เดือน
                </h5>
              </v-col>
              <v-col>
                <h5>
                  อื่นๆ:
                  <span>{{
                    formData.customer_value_ete == undefined
                      ? 0
                      : Number(formData.customer_value_ete).toLocaleString(
                          "th-TH",
                          {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }
                        )
                  }}</span>&nbsp; บาท/เดือน
                </h5>
              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 20 -->

            <!--  -->

            <!-- กรอบข้อมูลช่อง 21 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  มีประวัติการผ่อน:
                  <span>{{
                    formData.customer_receive_evidence == 1 ? "มี" : "ไม่มี"
                  }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  เกิน 30 วัน:
                  <span>{{
                    formData.customer_installment_slow == undefined
                      ? 0
                      : formData.customer_installment_slow
                  }}</span>
                  ครั้ง
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ไม่เกิน 30 วัน:
                  <span>{{
                    formData.customer_installment_nmt == undefined
                      ? 0
                      : formData.customer_installment_nmt
                  }}</span>
                  ครั้ง
                </h5>
              </v-col>
              <v-col cols="4">
                <h5>
                  3 เดือน ตรวจเครดิตมา:
                  <span>{{
                    formData.customer_installment_check == undefined
                      ? 0
                      : formData.customer_installment_check
                  }}</span>
                  ครั้ง
                </h5>
              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 22 -->

            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  บุคคลอ้างอิง
                  <span>{{ formData.customer_refer_name }}</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  เบอร์โทร: <span>{{ formData.customer_refer_tel }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  เกี่ยวข้องเป็น:
                  <span>{{ formData.customer_refer_related }}</span>
                </h5>
              </v-col>
            </v-row>

            <!--  -->

            <!-- กรอบข้อมูลช่อง 23 -->
            <v-row class="d-flex flex-row space">
              <v-col cols="5">
                <h5>
                  อาชีพ:

                  <div v-if="formData.customer_refer_job != 5">
                    <span v-if="formData.customer_refer_job == 1">ข้าราชการ</span>
                    <span v-if="formData.customer_refer_job == 2">พนักงานเอกชน</span>
                    <span v-if="formData.customer_refer_job == 3">เกษตร</span>
                    <span v-if="formData.customer_refer_job == 4">ค้าขาย</span>
                  </div>
                </h5>
              </v-col>

              <v-col v-if="formData.customer_refer_job == 5">
                <span>{{ formData.customer_refer_job_list }}</span>
              </v-col>

              <v-col cols="7">
                <h5>
                  ที่อยู่:

                  <span>
                    <span>
                      {{ formData.customer_refer_address }}
                      &nbsp;
                      {{
                        formData.Amphure_ref == null
                          ? ""
                          : formData.Amphure_ref.name_th
                      }}
                      &nbsp;
                      {{
                        formData.District_ref == null
                          ? ""
                          : formData.District_ref.name_th
                      }}
                      &nbsp;
                      {{
                        formData.Province_ref == null
                          ? ""
                          : formData.Province_ref.name_th
                      }}
                    </span>
                  </span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 25 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>รายการที่ต้องทำ: <span>{{formData.todo_list}} </span></h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 26 -->
            <v-row class="d-flex flex-row space">
              <v-col cols="3">
                <h5>
                  รถตีเทิร์นราคา:
                  <span>{{
                      formData.price_hitting_car == undefined
                        ? 0
                        : Number(formData.price_hitting_car).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col cols="3">
                <h5>
                  เล่มรถ:
                  <span>{{
                    formData.price_hitting_car == 1 ? "มีเล่ม" : "ไม่มีเล่ม"
                  }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  ยอดปิด:
                  <span>
                    {{
                      formData.price_hitting_car_close == undefined
                        ? 0
                        : Number(
                            formData.price_hitting_car_close
                          ).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                  </span>
                  บ.(ค่าโอน 1,500 มัดจำเล่ม 10,000 บาท)
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 27 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  หักดาวน์:
                  <span>{{
                      formData.payment_less == undefined
                        ? 0
                        : Number(formData.payment_less).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col>
                <h5>
                  คงเหลือ:
                  <span>{{
                      formData.payment_balance == undefined
                        ? 0
                        : Number(formData.payment_balance).toLocaleString(
                            "th-TH",
                            {
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }
                          )
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col>
                <h5>
                  โอนเข้าบัญชี: <span>{{ formData.payment_bookbank }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ทราบข่าวมาจาก:
                  <span v-if="formData.hear_from_type == 1">หน้าร้าน </span>
                  <span v-if="formData.hear_from_type == 2">เพจบริษัท </span>
                  <span v-if="formData.hear_from_type == 3">ลูกค้าเก่าแนะนำ
                  </span>
                  <span v-if="formData.hear_from_type == 4">นายหน้า </span>
                  <span v-if="formData.hear_from_type == 5">ใบปลิว </span>
                  <span v-if="formData.hear_from_type == 6">Marketplace/ไลน์/เพจส่วนตัว
                  </span>
                  <span v-if="formData.hear_from_type == 7">ออนไลน์ </span>
                </h5>
              </v-col>
            </v-row>

            <!-- กรอบข้อมูลช่อง 28 -->
            <v-row class="d-flex flex-row space">
              <v-col cols="6">
                <h5>
                  ค่าคอม/ค่าน้ำมัน/ค่านำพา:
                  <span>
                    {{
                      formData.commission == undefined ||
                      formData.commission == null
                        ? 0
                        : Number(formData.commission).toLocaleString("th-TH", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                    }}
                  </span>
                  &nbsp;บ.
                </h5>
              </v-col>
              <v-col cols="3">
                <h5>
                  ชื่อ: <span>{{ formData.commission_name }}</span>
                </h5>
              </v-col>
              <v-col cols="3">
                <h5>
                  โทร: <span>{{ formData.commission_tel }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 29 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ครั้งที่:
                  <span>{{
                    formData.commission_round == undefined
                      ? 0
                      : formData.commission_round
                  }}</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  โอนเข้าบัญชี: <span>{{ formData.commission_bookbank }}</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  ที่อยู่: <span>{{ formData.commission_address }}</span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 30 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  วันที่อนุมัติ:
                  <!-- <span>

                     {{ formData.date_appro }}

                   </span> -->

                  <span>
                    {{
                      formData.date_appro == null
                        ? ""
                        : $moment(formData.date_appro)
                            .add(543, "year")
                            .format("DD MMMM YYYY")
                    }}
                  </span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  <!-- ตรวจรถวันที่: <span>{{ formData.date_check_car }}</span> -->
                  ตรวจรถวันที่:
                  <span>
                    {{
                      formData.date_check_car == null
                        ? ""
                        : $moment(formData.date_check_car)
                            .add(543, "year")
                            .format("DD MMMM YYYY")
                    }}
                  </span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  เลขไมค์: <span>{{ formData.car_mileage }}</span>
                  กม.
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 31 -->
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  ประกันภัยประเภท: <span>{{ formData.insurance_type }}</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  วันที่แจ้ง:
                  <!-- <span>{{ formData.date_noti }}</span> -->
                  <span>
                    {{
                      formData.date_noti == null
                        ? ""
                        : $moment(formData.date_noti)
                            .add(543, "year")
                            .format("DD MMMM YYYY")
                    }}
                  </span>
                </h5>
              </v-col>
            </v-row>
            <!--  -->

            <!-- กรอบข้อมูลช่อง 32 -->
            <v-row
              class="d-flex flex-row space1"
              style="border-top: 1px solid black"
            >
              <v-col
                cols="12"
                align="center"
              >
                <h2>สิ่งที่ต้องมีก่อนปล่อยให้ลูกค้า</h2>
              </v-col>
              <v-col>
                <h5>
                  1.ป้ายภาษี:
                  <span>{{ formData.sign_tex == 1 ? "มี" : "ไม่มี" }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  2.วันครบภาษี:
                  <span>{{
                    formData.tex_date == null
                      ? ""
                      : $moment(formData.tex_date)
                          .add(543, "year")
                          .format("DD MMMM YYYY")
                  }}</span>
                </h5>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  3.พรบ: <span>{{ formData.act == 1 ? "มี" : "ไม่มี" }}</span>
                </h5>
              </v-col>

              <v-col>
                <h5>
                  4.หน้าเล่มคู่มือ:
                  <span>{{ formData.manual == 1 ? "มี" : "ไม่มี" }}</span>
                </h5>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-row space">
              <v-col>
                <h5>
                  5.เลขลอก.:
                  <span>{{ formData.number_peel == 1 ? "มี" : "ไม่มี" }}</span>
                </h5>
              </v-col>
              <v-col>
                <h5>
                  6.ป้ายทะเบียน:
                  <span>{{ formData.sign_license == 1 ? "มี" : "ไม่มี" }}</span>
                </h5>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-form>

      <br />
      <v-btn
        class="noprint"
        block
        dark
        elevation="2"
        style="width: 100%"
        color="red darken-1"
        onclick="window.print();"
      >
        <span>ปริ้น</span>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import * as apiBookings from "@/Api/apiBookings";
export default {
  layout: "print",
  data() {
    return {
      formData: {},
    };
  },
  async mounted() {
    this.print();
    // console.log($nuxt.$route.name);
  },
  methods: {
    async print() {
      // console.log(this.idBooking);
      const response = await apiBookings.printBooking(
        this.$route.query.idBooking
      );
      this.$refs.form.reset();
      this.formData = response.data;
      console.log(response.data);
    },
  },
};
</script>

<style>
/* .row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -30px !important;
} */
.v-text-field--outlined fieldset {
  border: 0;
}

.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100% !important;
  padding: 8px !important;
}

div[size="A4"] {
  background: white;
  width: 21cm;
  height: 29.7cm;
  display: block;
  margin: 0 auto;
  /* margin-bottom: 0.5cm; */
  /* border-style: solid;
  border-width: thin; */
}
@media print {
  html,
  body {
    width: 210mm;
    height: 297mm;
    font-family: "Taviraj", serif;
  }
  .noprint {
    visibility: hidden;
  }
  @page :footer {
    display: none;
  }

  @page :header {
    display: none;
  }
  /* ... the rest of the rules ... */
}
p {
  font-size: 18px !important;
  font-weight: normal !important;
}
span {
  font-size: 14px !important;
  font-weight: bold !important;
}
h2,
h5,
h4,
h5 {
  font-weight: 100 !important;
}
h5 {
  font-size: 14px !important;
  font-weight: lighter !important;
  font-family: "Taviraj", serif;
}
.space {
  margin-top: 0% !important;
}
.space1 {
  margin-top: 2% !important;
}
.b-solid-t {
  border-style: solid;
  border-width: thin;
}
.mg {
  margin: 0;
}
</style>
