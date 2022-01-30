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
    this.token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTcyYTBiNzU1ZWU1ZTAwOTNkZWU2NjgxMDE4ZjVhMmRiMWQ3OGNjNGMwZWYzNTFlZjRkMTMzZjE4NzIwODJkYjczMTFkZmE2ZWQ5M2NkMzMiLCJpYXQiOjE2NDMyMDYwMzYuNTQyOTc0LCJuYmYiOjE2NDMyMDYwMzYuNTQyOTc5LCJleHAiOjE2NDMzNzg4MzYuNDU1OTk3LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.WCwn7vliBW8yls68LgpmWY7NaPlULEQ5an1wAQ_QrX7AGR9y5wk7r84dFW0L43ey9BHtGlHx23rTXbOPjBzGX0AgqclebuWxfQq4qZM8L62Lule3D2UsKc0zxkfR3tRUdJcop0pdxB6sE-snBzTKgiV7pKUWAKPUDthcwT-5V9-rGuglqBVB1uC-3nVWBOse8ERjWA54OFSjuqEhDezbUTrCkvVF2es-S3mWr_xIJ4m44is7GHHR7_qppPcNQRWf_YWCgUMIXSwkQ-VvomjlnZ95tQdJ_D9QYZsB4Yy7-ro_FpM0skFmn3TO2IXN1spWMBZ06V1CrYKiN-13J7oZ7wKSY2vTk8J8za1sDIwJ9bXTcOirBqexKRY7u2HGxeef6c7gTufTwI_c0O4yho77YmzKs-YQgOvzqBmPD_hSnJS71QdqYHQXyNX40EzsUJ7_T5T-wE0ha8JQWVIgcrU1rfeY7ke9EImIbCqBi-5bNjQbnutk2q8cm4cakQkad19Pa7mGRj5lnS4b1ED2zIiT5Up6GwLppQVZ8loDR8sryZub4m3FK2Cx7WiH_uJxvQMVIEet-cAIfoy85PXc4LvFMyH5ZDnrFjIkRSLnJqyW0_GZ5Q6un8SVPKqrv-LVPgSFjya723zI83ys_XkPcB7NpIYHkqhgW7qDTyXm4Pfry6o";
    this.$axios
      .get("http://localhost:8000/api/v1/users", {
        headers: { Authorization: "Bearer " + this.token },
      })
      .then((response) => (this.tableData = response.data.data));
  },
};
</script>
