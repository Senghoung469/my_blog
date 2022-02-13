<template>
  <div>
    <Navbar />
    <div class="w-3/4 mx-auto pl-5 pr-5 mt-8">
      <div class="grid grid-cols-12 gap-x-1">
        <div class="col-span-3 flex-shrink">
          <Sidebar />
        </div>
        <div class="col-span-9">
          <div class="w-full bg-white rounded p-5 leading-6">
            <div class="flex justify-between">
              <el-row class="pr-10">
                <router-link :to="{ name: 'post-create' }">
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
                    >Create Post</el-button
                  >
                </router-link>
              </el-row>
            </div>
            <el-table
              :data="this.tableData"
              show-header="true"
              empty-text="No Data"
              lazy="true"
              size="medium"
              class="w-full mt-5"
            >
              <el-table-column prop="id" label="ID" width="100">
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
              <el-table-column prop="thumbnail" label="Thumbnail" width="200">
              </el-table-column>
              <el-table-column prop="status" label="Status" width="100">
              </el-table-column>
              <el-table-column fixed="right" label="Operation" width="150">
                <template>
                  <el-button type="text" size="small">Edit</el-button>
                  <el-button
                    type="text"
                    size="small"
                    class="text-red-500 hover:text-red-400 focus:text-red-500"
                    >Remove</el-button
                  >
                  <el-button type="text" size="small">Detail</el-button>
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
      .get("http://localhost:8000/api/v1/post", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => (this.tableData = response.data.data));
  },
};
</script>
