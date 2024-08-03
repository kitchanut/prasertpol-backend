<template>
  <v-dialog v-model="dialog" fullscreen persistent transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <div
        v-if="appearance == 'text'"
        x-small
        class="white--text"
        rounded
        dark
        v-bind="attrs"
        v-on="on"
        style="cursor: pointer"
      >
        + เพิ่ม
      </div>
      <div
        v-if="appearance == 'text-blue'"
        x-small
        class="blue--text"
        rounded
        dark
        v-bind="attrs"
        v-on="on"
        style="cursor: pointer"
      >
        + เพิ่มประกัน
      </div>
      <v-btn v-if="appearance == 'pencil'" color="primary" fab x-small dark v-bind="attrs" v-on="on">
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
      <v-list-item v-if="appearance == 'list'" v-bind="attrs" v-on="on" style="cursor: pointer">
        <v-list-item-title style="color: blue">ประกันภัยรถยนต์</v-list-item-title>
      </v-list-item>
    </template>
    <v-card>
      <v-toolbar flat dark color="primary">
        <div class="container" style="align-items: center; display: flex; position: relative; padding: 0px">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>ข้อมูลประกันภัยรถยนต์: {{ car_no }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </div>
      </v-toolbar>
      <v-container>
        <v-card outlined :loading="loading">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center" width="5%">ลำดับ</th>
                  <th class="text-left" width="12%">ประเภท</th>
                  <th class="text-left" width="8%">ชั้น</th>
                  <th class="text-left">บริษัทประกัน</th>
                  <th class="text-left" width="12%">วันเริ่มประกัน</th>
                  <th class="text-left" width="12%">วันสิ้นสุด</th>
                  <th class="text-left" width="15%">ผู้ทำรายการ</th>
                  <th class="text-left" width="10%">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, key) in data" :key="key">
                  <td align="center">{{ item.no }}</td>
                  <td>
                    <span v-if="item.insurance_type == 'in'">ประกันของบริษัท</span>
                    <span v-if="item.insurance_type == 'out'">ประกันภายนอก</span>
                  </td>
                  <td>{{ item.insurance_class }}</td>
                  <td>{{ item.insurance_company }}</td>
                  <td>{{ item.insurance_start }}</td>
                  <td>{{ item.insurance_end }}</td>
                  <td>{{ item.user.first_name }}</td>
                  <td>
                    <dialogInsurance
                      appearance="pencil"
                      action="edit"
                      :id="item.id"
                      @success="
                        getData();
                        $emit('success');
                      "
                    />
                    <v-btn color="red" fab x-small dark @click="deleteItem(item.id)">
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                  </td>
                </tr>
                <tr v-if="data.length == 0">
                  <td colspan="8" class="text-center">ไม่มีข้อมูล</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>

        <dialogInsurance
          appearance="text"
          action="add"
          :car_id="car_id"
          @success="
            getData();
            $emit('success');
          "
        />
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import * as apiInsurances from "@/Api/apiInsurances";
import dialogInsurance from "@/components/dialog/dialogInsurance";
import * as customAlart from "@/customJS/customAlart";
export default {
  props: ["appearance", "car_id", "car_no"],
  components: {
    dialogInsurance,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      data: [],
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      const response = await apiInsurances.getByCar(this.car_id);
      this.data = response.data;
      this.data.map((item, index) => {
        item.no = index + 1;
      });
      this.loading = false;
    },
    async deleteItem(id) {
      var isConfirmed = customAlart.Confirmed();
      await isConfirmed.then((result) => {
        if (result == true) {
          const respone = apiInsurances.destroy(id);
          respone.then(async (res) => {
            if (res.status == 200) {
              customAlart.TopSuccess();
              this.getData();
            } else {
              customAlart.TopError();
            }
          });
        }
      });
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.getData();
      }
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse; /* IE7 and lower */
  border-spacing: 0;
  width: 100%;
}

th:first-child {
  border-radius: 4px 0 0 0;
}

th:last-child {
  border-radius: 0 4px 0 0;
}

th:only-child {
  border-radius: 4px 4px 0 0;
}

.bordered {
  border: solid rgba(0, 0, 0, 0.3) 1px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.bordered th {
  font-weight: 600;
  background-color: #eee;
}
</style>
