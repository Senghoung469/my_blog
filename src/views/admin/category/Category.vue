<template>
  <div>
    <Navbar />
    <div class="w-3/4 mx-auto pl-5 pr-5 mt-8">
      <div class="grid grid-cols-12 gap-x-1">
        <div class="col-span-3 flex-shrink">
          <Sidebar />
          <el-dialog
            title="Form"
            :visible.sync="dialogVisible"
            width="40%"
            :modal-append-to-body="true"
          >
            <span>This is a message</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >Save</el-button
              >
            </span>
          </el-dialog>
        </div>
        <div class="col-span-9">
          <div class="w-full bg-white p-5 leading-6">
            <div class="flex items-center">
              <el-row class="pr-10">
                <router-link :to="{ name: 'category-create' }">
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
                    >Add Category</el-button
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
              <!-- <el-table-column prop="id" label="ID" /> -->
              <el-table-column
                prop="id"
                type="index"
                label="N⁰"
                width="100"
              ></el-table-column>
              <el-table-column prop="name" label="Name" width="300">
              </el-table-column>
              <el-table-column prop="description" label="Note" width="450">
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
                    >Detail</el-button
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
      .get("http://localhost:8000/api/v1/categories", {
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
            name: "category-update",
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
            .delete(`http://localhost:8000/api/v1/category/${id}`, {
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
                .get("http://localhost:8000/api/v1/categories", {
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
      this.dialogVisible = true;
    },
  },
};
</script>
