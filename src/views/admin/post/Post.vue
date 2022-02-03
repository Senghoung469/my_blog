<template>
  <div>
    <Navbar />
    <div class="w-full mx-auto pl-5 pr-5">
      <div class="grid grid-cols-12 gap-x-1">
        <div class="col-span-2 flex-shrink">
          <Sidebar />
        </div>
        <div class="col-span-10">
          <div class="w-full bg-white rounded shadow h-full p-5 leading-6">
            <div class="flex justify-between">
              <el-row class="pr-10">
                <router-link :to="{ name: 'post-create' }">
                  <el-button type="primary">Create Post</el-button>
                </router-link>
              </el-row>
            </div>
            <el-table :data="this.tableData" style="width: 100%" class="mt-5">
              <el-table-column prop="id" label="Id" width="100">
              </el-table-column>
              <el-table-column prop="title" label="Title" width="250">
              </el-table-column>
              <el-table-column prop="user_id" label="Author" width="200">
              </el-table-column>
              <el-table-column
                prop="description"
                label="Description"
                width="200"
              >
              </el-table-column>
              <el-table-column prop="thumbnail" label="Thumbnail" width="150">
              </el-table-column>
              <el-table-column prop="status" label="Status" width="100">
              </el-table-column>
              <el-table-column fixed="right" label="Operation" width="120">
                <template>
                  <el-button type="text" size="small">Detail</el-button>
                  <el-button type="text" size="small">Edit</el-button>
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
      token: null,
      tableData: null,
    };
  },
  components: {
    Sidebar,
    Navbar,
  },
  mounted() {
    this.$axios
      .get("http://localhost:8000/api/v1/users", {
        headers: { Authorization: "Bearer " + localStorage.getItem('token') },
      })
      .then((response) => (this.tableData = response.data.data));
  },
};
</script>
