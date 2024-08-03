<template>
  <v-container>
    <v-dialog v-model="dialogDeleteComponent" max-width="50%">
      <v-card>
        <v-form autocomplete="on" ref="form" @submit.prevent="onAction(formData.id)">
          <v-toolbar color="primary" dark flat>
            {{ formTitle }}
          </v-toolbar>
          <v-progress-linear v-if="formDataLoading" indeterminate color="yellow darken-2"> </v-progress-linear>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="ชื่อผุ้ใช้งาน"
                    v-model="formData.email"
                    id="formData.email"
                    name="formData.email"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Password"
                    type="Password"
                    v-model="formData.password"
                    id="formData.password"
                    name="formData.password"
                    outlined
                    dense
                    hide-details
                    :rules="this.$props.action == 'edit' ? [] : rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="ชื่อ"
                    append-icon=""
                    v-model="formData.first_name"
                    id="formData.first_name"
                    name="formData.first_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="สกุล"
                    append-icon=""
                    v-model="formData.last_name"
                    id="formData.last_name"
                    name="formData.last_name"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="ธนาคาร"
                    type="text"
                    v-model="formData.bank"
                    id="formData.bank"
                    name="formData.bank"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="เลขบัญชี"
                    type="text"
                    v-model="formData.bank_no"
                    id="formData.bank_no"
                    name="formData.bank_no"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="รหัสลับ"
                    type="text"
                    v-model="formData.user_code"
                    id="formData.user_code"
                    name="formData.user_code"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="เบอร์ติดต่อ"
                    type="number"
                    v-model="formData.tel"
                    id="formData.tel"
                    name="formData.tel"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col col="12" class="text-center">
                  <span>ตำแหน่ง/สาขาหลัก</span>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-autocomplete
                    :readonly="user_group_permission == 2 ? true : false"
                    v-model="formData.user_group_id"
                    id="formData.user_group_id"
                    name="formData.user_group_id"
                    :items="user_groups"
                    item-text="user_group_name"
                    item-value="id"
                    label="ตำแหน่ง"
                    outlined
                    dense
                    no-data-text="ไม่มีข้อมูล"
                    hide-details
                    :rules="rule"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.branch_team_id"
                    :items="branch_teams"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="branch_team_name"
                    item-value="id"
                    label="ทีมสาขา"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                    @change="changeBranch_teams"
                  >
                  </v-autocomplete>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.branch_id"
                    :items="branches"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="branch_name"
                    item-value="id"
                    label="สาขาย่อย"
                    outlined
                    dense
                    hide-details
                    :rules="rule"
                    @change="changeUser_teams"
                    @click="clickUser_teams"
                  >
                  </v-autocomplete>
                </v-col>

                <v-col cols="4">
                  <v-autocomplete
                    v-model="formData.user_team_id"
                    :items="user_teams"
                    no-data-text="ไม่มีข้อมูล"
                    item-text="team_name"
                    item-value="id"
                    label="ทีม"
                    outlined
                    clearable
                    dense
                    hide-details
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-row v-if="user_group_permission == -1">
                <v-col xs="12" sm="12" md="12" xl="12" class="text-center">
                  <v-btn color="green" dark @click="add_row()">
                    <span> ตำแหน่ง/สาขาย่อย <v-icon>mdi-plus</v-icon> </span>
                  </v-btn>
                </v-col>
                <v-col xs="12" sm="12" md="12" xl="12">
                  <v-row v-for="(user_sub_group, keys) in formData.user_sub_groups" :key="keys">
                    <v-col xs="12" sm="12" md="6" lg="6" xl="4">
                      <v-autocomplete
                        v-model="user_sub_group.user_group_id"
                        id="user_sub_group.user_group_id"
                        name="user_sub_group.user_group_id"
                        :items="user_sub_group.user_groups"
                        item-text="user_group_name"
                        item-value="id"
                        label="ตำแหน่ง"
                        outlined
                        dense
                        no-data-text="ไม่มีข้อมูล"
                        hide-details
                        :rules="rule"
                      ></v-autocomplete>
                    </v-col>
                    <v-col xs="12" sm="12" md="6" lg="6" xl="4">
                      <v-autocomplete
                        v-model="user_sub_group.branch_id"
                        id="user_sub_group.branch_id"
                        name="user_sub_group.branch_id"
                        :items="user_sub_group.branches"
                        item-text="branch_name"
                        item-value="id"
                        label="สาขา"
                        outlined
                        dense
                        no-data-text="ไม่มีข้อมูล"
                        hide-details
                        @change="changeUser_teams_sub(user_sub_group.branch_id, keys)"
                        :rules="rule"
                      ></v-autocomplete>
                    </v-col>
                    <v-col xs="12" sm="12" md="6" lg="6" xl="4" v-if="user_sub_group.user_group_id == 3">
                      <v-autocomplete
                        v-model="user_sub_group.user_team_id"
                        id="user_sub_group.user_team_id"
                        name="user_sub_group.user_team_id"
                        :items="user_sub_group.user_teams"
                        item-text="team_name"
                        item-value="id"
                        label="ทีม"
                        outlined
                        dense
                        no-data-text="ไม่มีข้อมูล"
                        hide-details
                      ></v-autocomplete>
                    </v-col>
                    <v-col xs="12" sm="12" md="6" lg="6" xl="4">
                      <v-radio-group
                        v-model="user_sub_group.active"
                        id="user_sub_group.active"
                        name="user_sub_group.active"
                        row
                      >
                        <template>
                          <div class="mr-1">เปิดใช้:</div>
                        </template>
                        <v-radio label="ใช่" value="1"></v-radio>
                        <v-radio label="ไม่" color="red" value="2"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <br />
              <v-radio-group v-model="formData.user_active" id="formData.user_active" name="formData.user_active" row>
                <template>
                  <div class="mr-1">อนุญาติให้เข้าใช้งานระบบ:</div>
                </template>
                <v-radio label="เปิดใช้งาน" value="1"></v-radio>
                <v-radio label="ปิดการใช้งาน" color="red" value="2"></v-radio>
              </v-radio-group>

              <div class="d-flex flex-column justify-center">
                <v-file-input
                  accept="image/jpeg,image/png,image/jpg"
                  show-size
                  :label="
                    currentFile == null ? 'เลือกรูปภาพ' : imagePreviewURL == null ? 'เลือกรูปภาพ' : 'เลือกรูปใหม่'
                  "
                  @change="selectFile"
                ></v-file-input>
                <v-img
                  contain
                  v-if="currentFile != null || imagePreviewURL != null || currentFile != '' || imagePreviewURL != ''"
                  height="250px"
                  width="250px"
                  :src="imagePreviewURL"
                />
              </div>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('cancleItem')">ยกเลิก</v-btn>
            <v-btn type="submit" color="success darken-1" text :loading="btnloading">บันทึก</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as apiUsers from "@/Api/apiUsers";
import * as apiUser_groups from "@/Api/apiUser_groups";
import * as apiUser_teams from "@/Api/apiUser_teams";
import * as apiBranches from "@/Api/apiBranches";
import * as apiBranch_teams from "@/Api/apiBranch_teams";
import * as customAlart from "@/customJS/customAlart";

export default {
  props: ["dialog", "action", "id", "formTitle"],
  data() {
    return {
      serverUrl: process.env.serverUrl + "/assets/images/users/",
      btnloading: true,
      formDataLoading: false,
      formData: {
        user_sub_groups: [],
      },
      branch_teams: [],
      branches: [],
      branche_masters: [],
      user_groups: [],
      user_teams_all: [],
      user_teams: [],
      user_image: "",
      rule: [(value) => !!value || "กรุณาใส่ข้อมูล"],
      dialogDeleteComponent: false,
      currentFile: null,
      imagePreviewURL: null,
      team_show: true,
      user_group_permission: this.$auth.$storage.getLocalStorage("userData-user_group_permission"),
      user_id: this.$auth.$storage.getLocalStorage("userData-id"),

      branch_id: this.$auth.$storage.getLocalStorage("userData-branch_id"),
      clickUser_teams_check: 0,
    };
  },
  mounted() {
    this.getBranch_teams();
    this.getBranches();
    this.getUser_group();
    this.getUser_teams();
  },
  methods: {
    selectFile(payload) {
      // console.log(payload);
      if (payload != null) {
        this.currentFile = payload;
        const file = payload; // in case vuetify file input
        if (file) {
          this.imagePreviewURL = URL.createObjectURL(file);
          URL.revokeObjectURL(file); // free memory
        } else {
          this.imagePreviewURL = null;
        }
      }
    },
    async getUser_teams() {
      const response = await apiUser_teams.select();
      this.user_teams_all = response.data;
      this.loading = false;
    },
    changeBranch_teams() {
      this.branches = this.branche_masters.filter((item) => {
        return item.branch_team_id == this.formData.branch_team_id;
      });
    },
    async changeUser_teams(branch_id) {
      let new_teams = [];
      for (let index = 0; index < this.user_teams_all.length; index++) {
        if (this.user_teams_all[index].branch_id == branch_id) new_teams.push(this.user_teams_all[index]);
      }
      this.user_teams = new_teams;
      if (this.clickUser_teams_check == 1) {
        this.formData.user_team_id = null;
      }
      // console.log(branch_id);
    },
    clickUser_teams() {
      this.clickUser_teams_check = 1;
    },

    async changeUser_teams_sub(branch_id, key) {
      let new_teams = [];
      for (let index = 0; index < this.user_teams_all.length; index++) {
        if (this.user_teams_all[index].branch_id == branch_id) new_teams.push(this.user_teams_all[index]);
      }
      this.formData.user_sub_groups[key].user_teams = new_teams;
    },
    async getUser_group() {
      const response = await apiUser_groups.select();
      let new_array = [];
      if (this.user_group_permission == -1) {
        new_array = response.data;
      } else {
        for (let index = 0; index < response.data.length; index++) {
          if (response.data[index].id != 1) {
            new_array.push(response.data[index]);
          }
        }
      }

      this.user_groups = new_array;

      // console.log(response.data);
      this.loading = false;
    },
    async getBranches() {
      const response = await apiBranches.select();
      this.branches = response.data;
      this.branche_masters = response.data;
      this.loading = false;
      // console.log(response.data);
    },
    async getBranch_teams() {
      const response = await apiBranch_teams.index();
      this.branch_teams = response.data.filter((item) => {
        return item.branch_team_active == "1";
      });
      // this.loading = false;
      console.log(response.data);
    },
    async onAction(id) {
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        this.formDataLoading = true;

        const data = new FormData();
        data.append("formData", JSON.stringify(this.formData));
        data.append("Image", this.currentFile);

        if (this.action == "add") {
          const response = await apiUsers.store(data);
          // console.log(response)
          if (response.data == "success") {
            if (response.status == 200) {
              this.$emit("success");
            } else {
              this.$emit("error");
            }
          } else {
            if (response.data == "ชื่อผู้ใช้งานซ้ำ") {
              customAlart.DuplicateEmail();
            } else if (response.data == "รหัสลับซ้ำ") {
              customAlart.DuplicateCode();
            }
          }
        } else if (this.action == "edit") {
          data.append("_method", "PATCH");

          const response = await apiUsers.update(id, data);
          // console.log(response);
          this.$refs.form.reset();

          if (response.status == 200) {
            this.$emit("success");
          } else {
            this.$emit("error");
          }
        }

        this.btnloading = false;
        this.formDataLoading = false;
      }
    },
    async add_row() {
      let data = {
        user_id: this.user_id,
        user_group_id: null,
        user_groups: this.user_groups,
        branch_id: null,
        branches: this.branches,
        user_team_id: null,
        user_teams: this.user_teams,
        active: "1",
      };
      await this.formData.user_sub_groups.push(data);
    },
  },
  watch: {
    async dialog() {
      this.dialogDeleteComponent = this.dialog;
      if (this.dialogDeleteComponent) {
        this.imagePreviewURL = null;
        if (this.action == "add") {
          this.$nextTick(async () => {
            this.$refs.form.reset();
            const self = this;
            if (this.user_group_permission == 2) {
              this.$nextTick(async () => {
                self.formData = {
                  user_group_id: 3,
                  branch_id: this.branch_id,
                  user_active: "1",
                  user_sub_groups: [],
                };
              });
            } else {
              this.$nextTick(async () => {
                self.formData = {
                  user_active: "1",
                  user_sub_groups: [],
                };
              });
            }
            setTimeout(() => {
              this.changeUser_teams(this.branch_id);
            }, 1000);
          });
        } else if (this.action == "edit") {
          this.formDataLoading = true;
          const response = await apiUsers.show(this.id);

          // console.log(response);
          this.$nextTick(() => {
            this.$refs.form.reset();
            const self = this;
            this.$nextTick(async () => {
              self.formData = await response.data;
              if (response.data.user_image != undefined) {
                this.imagePreviewURL = this.serverUrl + "/" + response.data.user_image;
              }
            });
          });
          // await this.changeUser_teams(response.data.branch_id);
          setTimeout(() => {
            this.changeUser_teams(response.data.branch_id);
          }, 1000);

          this.formDataLoading = false;
        }
      }
      this.btnloading = false;
    },
    dialogDeleteComponent() {
      if (!this.dialogDeleteComponent) {
        this.$emit("cancleItem");
      }
    },
    // formData() {
    //   if (this.formData.user_group_id == 3) {
    //     this.team_show = true;
    //   } else {
    //     this.team_show = false;
    //     this.formData.user_team_id = 0;
    //   }
    // },
  },
};
</script>

<style></style>
