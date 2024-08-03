<template>
  <v-card>
    <v-card-text>
      <v-row class="d-flex">
        <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="d-flex align-center"></v-col>
        <v-spacer></v-spacer>
        <v-col xs="12" sm="12" md="6" lg="4" xl="4" class="d-flex align-center">
          <v-text-field
            v-model="search"
            id="search"
            name="search"
            append-icon="mdi-magnify"
            label="ค้นหา"
            single-line
            hide-details
            outlined
            dense
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-data-table :headers="headers" :items="data" :search="search" :loading="loading" dense>
      <template v-slot:[`item.working_id`]="{ item }"> W{{ item.working_id }} </template>
      <template v-slot:[`item.installment_date_1`]="{ item }">
        <div :style="$moment(item.installment_date_1).isSame(new Date(), 'month') ? 'color: blue' : ''">
          {{ item.installment_date_1 }}
        </div>
        <span :style="item.installment_pay_1 < item.installment_value_1 ? `color: red` : 'color: green'">
          {{ item.installment_pay_1 }}
        </span>
        / <span>{{ item.installment_value_1 }}</span>
      </template>
      <template v-slot:[`item.installment_date_2`]="{ item }">
        <div :style="$moment(item.installment_date_2).isSame(new Date(), 'month') ? 'color: blue' : ''">
          {{ item.installment_date_2 }}
        </div>
        <span :style="item.installment_pay_2 < item.installment_value_2 ? `color: red` : 'color: green'">
          {{ item.installment_pay_2 }}
        </span>
        / <span>{{ item.installment_value_2 }}</span>
      </template>
      <template v-slot:[`item.installment_date_3`]="{ item }">
        <div :style="$moment(item.installment_date_3).isSame(new Date(), 'month') ? 'color: blue' : ''">
          {{ item.installment_date_3 }}
        </div>
        <span :style="item.installment_pay_3 < item.installment_value_3 ? `color: red` : 'color: green'">
          {{ item.installment_pay_3 }}
        </span>
        / <span>{{ item.installment_value_3 }}</span>
      </template>
      <template v-slot:[`item.installment_date_4`]="{ item }">
        <div :style="$moment(item.installment_date_4).isSame(new Date(), 'month') ? 'color: blue' : ''">
          {{ item.installment_date_4 }}
        </div>
        <span :style="item.installment_pay_4 < item.installment_value_4 ? `color: red` : 'color: green'">
          {{ item.installment_pay_4 }}
        </span>
        / <span>{{ item.installment_value_4 }}</span>
      </template>
      <template v-slot:[`item.installment_date_5`]="{ item }">
        <div :style="$moment(item.installment_date_5).isSame(new Date(), 'month') ? 'color: blue' : ''">
          {{ item.installment_date_5 }}
        </div>
        <span :style="item.installment_pay_5 < item.installment_value_5 ? `color: red` : 'color: green'">
          {{ item.installment_pay_5 }}
        </span>
        / <span>{{ item.installment_value_5 }}</span>
      </template>
      <template v-slot:[`item.installment_date_6`]="{ item }">
        <div :style="$moment(item.installment_date_6).isSame(new Date(), 'month') ? 'color: blue' : ''">
          {{ item.installment_date_6 }}
        </div>
        <span :style="item.installment_pay_6 < item.installment_value_6 ? `color: red` : 'color: green'">
          {{ item.installment_pay_6 }}
        </span>
        / <span>{{ item.installment_value_6 }}</span>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <dialogInstallment appearance="pencil" :working_id="item.working_id" :car_no="item.working.cars.car_no" />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import * as apiInstallments from "@/Api/apiInstallments";
export default {
  data() {
    return {
      loading: false,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),
      search: "",
      headers: [
        // { text: "ลำดับ", value: "no" },
        { text: "ลำดับงาน", value: "working_id" },
        { text: "ลำดับรถ", value: "working.cars.car_no" },
        { text: "ลูกค้า", value: "working.customer_name" },
        { text: "เซล", value: "working.sale.first_name" },
        { text: "สาขาย่อย", value: "working.branch.branch_name" },
        { text: "งวดที่ 1", value: "installment_date_1" },
        { text: "งวดที่ 2", value: "installment_date_2" },
        { text: "งวดที่ 3", value: "installment_date_3" },
        { text: "งวดที่ 4", value: "installment_date_4" },
        { text: "งวดที่ 5", value: "installment_date_5" },
        { text: "งวดที่ 6", value: "installment_date_6" },
        { text: "จัดการ", value: "actions", width: "5%" },
      ],
      data: [],
    };
  },
  async mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      const response = await apiInstallments.getByUser(this.user_group_permission, this.user_id, this.branch_id);
      this.data = response.data;
      console.log(response.data);
      this.loading = false;
    },
  },
};
</script>
