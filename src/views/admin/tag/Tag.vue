<template>
  <div>
    <Navbar />
    <div class="lg:w-3/4 mx-auto pl-5 pr-5 mt-8">
      <div class="grid lg:grid-cols-12 md:grid-cols-12 gap-x-1 gap-y-1">
        <div class="lg:col-span-3 sm:col-span-12 md:col-span-12">
          <Sidebar />
          <el-dialog
            title="Detail Record"
            :visible.sync="dialogVisible"
            v-if="this.dialogVisible == true"
            class="w-3/6 mx-auto"
          >
            <div class="space-y-4 font-sans text-justify">
              <div class="font-medium">
                Tag Name:
                <span class="font-normal">{{ this.dataDetail.name }}</span>
              </div>
              <div class="font-medium">
                Created At:
                <span class="font-normal">{{
                  this.$moment(this.dataDetail.created_at).format("DD-MM-YYYY")
                }}</span>
              </div>
              <div class="font-medium">
                Updated At:
                <span class="font-normal">{{
                  this.$moment(this.dataDetail.updated_at).format("DD-MM-YYYY")
                }}</span>
              </div>
            </div>
          </el-dialog>
        </div>
        <div class="lg:col-span-9 sm:col-span-12">
          <div class="w-full bg-white p-5 leading-6">
            <div class="flex items-center">
              <el-row class="pr-10">
                <router-link :to="{ name: 'tag-create' }">
                  <el-button
                    type="button"
                    class="
                      bg-indigo-800
                      text-white text-sm
                      hover:bg-indigo-800 hover:text-white
                      focus:bg-indigo-700
                      focus:text-white
                      focus:border-transparent
                      rounded
                      font-sans
                      outline-none
                      py-2
                      px-2
                    "
                    >Add Tag</el-button
                  >
                </router-link>
              </el-row>
            </div>
            <el-table
              :data="this.tableData"
              empty-text="No Data"
              size="medium"
              stripe
              style="width: 100%"
              class="mt-5"
            >
              <el-table-column
                prop="id"
                type="index"
                label="N⁰"
                width="200"
              ></el-table-column>
              <el-table-column prop="name" label="Tag Name" width="400">
              </el-table-column>
              <el-table-column fixed="right" label="Operation" width="150">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    @click.prevent="handleEdit(scope.row.id)"
                    >Edit</el-button
                  >
                  <el-button
                    type="text"
                    size="small"
                    class="text-red-500 hover:text-red-400 focus:text-red-500"
                    @click.prevent="handleDelete(scope.row.id)"
                    >Remove</el-button
                  >
                  <el-button
                    type="text"
                    size="small"
                    @click.prevent="handleDetail(scope.row.id)"
                    >View</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
export default {
  data() {
    return {
      tableData: null,
      dataDetail: null,
      message: null,
      dialogVisible: false,
    };
  },
  components: {
    Sidebar,
    Navbar,
  },
  mounted() {
    this.$axios
      .get(`${process.env.VUE_APP_ROOT_API}/tags`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => (this.tableData = response.data.data));
  },
  methods: {
    // Handle update
    handleEdit(id) {
      this.$confirm(
        "This will permanently update the file. Continue?",
        "Message",
        {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          type: "message",
        }
      )
        .then(() => {
          this.$router.push({
            name: "tag-update",
            params: { id: id },
          });
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "Update canceled",
          });
        });
    },
    // Handle Delete
    handleDelete(id) {
      this.$confirm(
        "This will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          type: "warning",
        }
      )
        .then(() => {
          // Delete record
          this.$axios
            .delete(`${process.env.VUE_APP_ROOT_API}/tag/${id}`, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            })
            .then(() => {
              this.$message({
                type: "success",
                message: "Delete completed",
              });
              // Reload data tables
              this.$axios
                .get(`${process.env.VUE_APP_ROOT_API}/tags`, {
                  headers: {
                    Authorization:
                      "Bearer " + localStorage.getItem("access_token"),
                  },
                })
                .then((response) => (this.tableData = response.data.data));
            });
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "Delete canceled",
          });
        });
    },
    // Handle view detail
    handleDetail(id) {
      // Load data detail
      this.$axios
        .get(`${process.env.VUE_APP_ROOT_API}/tag/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          this.dataDetail = response.data;
          this.dialogVisible = true;
        });
    },
  },
};
</script>
