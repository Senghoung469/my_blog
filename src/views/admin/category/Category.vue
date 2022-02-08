<template>
  <div>
    <Navbar />
    <div class="w-3/4 mx-auto pl-5 pr-5 mt-8">
      <div class="grid grid-cols-12 gap-x-1">
        <div class="col-span-3 flex-shrink">
          <Sidebar />
        </div>
        <div class="col-span-9">
          <div class="w-full bg-white p-5 leading-6">
            <div class="flex justify-between">
              <el-row class="pr-10">
                <el-button type="primary" class="pr-16"
                  >Create Category</el-button
                >
              </el-row>
            </div>
            <el-table
              :data="this.tableData"
              stripe
              style="width: 100%"
              class="mt-5"
            >
              <el-table-column prop="id" label="Id" width="100">
              </el-table-column>
              <el-table-column prop="name" label="Name" width="300">
              </el-table-column>
              <el-table-column prop="description" label="Note" width="450">
              </el-table-column>
              <el-table-column fixed="right" label="Operation" width="150">
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
      .get("http://localhost:8000/api/v1/categories", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => (this.tableData = response.data.data));
  },
};
</script>
