<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red" fab x-small dark v-bind="attrs" v-on="on"> <v-icon> mdi-delete </v-icon> </v-btn>
    </template>

    <v-card>
      <v-toolbar color="red" dark flat dense style="font-size: 20px" height="6"> </v-toolbar>
      <h3 class="text-center" style="font-size: 22px; margin: 10px">ยืนยันการลบ ?</h3>
      <v-divider></v-divider>
      <v-card-text class="mt-5 text-center" style="font-size: 18px; margin-bottom: 40px">
        <p>ลบแล้วไม่สามารถกู้ข้อมูลได้ !</p>
        <p>กรุณากรอกคำว่า <b>"delete" </b> เพื่อยืนยัน</p>
        <br />
        <v-row class="d-flex justify-center">
          <v-col cols="8"
            ><v-text-field color="red" v-model="confirmText" single-line outlined dense hide-details></v-text-field
          ></v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="red darken-1" text @click="cancleDelete()"> <v-icon left>mdi-close</v-icon>ยกเลิก </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text :disabled="confirmText == 'delete' ? false : true" @click="deleteItem()">
          <v-icon left>mdi-check</v-icon>ยืนยัน
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      confirmText: "",
    };
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem");
      this.dialog = false;
    },
    cancleDelete() {
      this.$emit("cancleItem");
      this.dialog = false;
    },
  },
};
</script>
