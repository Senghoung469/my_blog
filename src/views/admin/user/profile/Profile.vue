<template>
  <div>
    <Navbar />
    <div class="w-3/4 mx-auto pl-5 pr-5 mt-8">
      <div class="grid lg:grid-cols-12 md:grid-cols-12 gap-x-1 gap-y-1">
        <div class="lg:col-span-3 sm:col-span-12">
          <Sidebar />
        </div>
        <div class="lg:col-span-9 sm:col-span-12">
          <div class="p-5 bg-white">
            <div class="flex justify-between items-center">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="150px"
                class="w-11/12"
              >
                <el-form-item label="Name" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="email">
                  <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                  <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="Confirm Password" prop="confirm_password">
                  <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
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
                      px-5
                    "
                    @click="submitForm('ruleForm')"
                    >Save</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
              </el-form>
            </div>
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
      dialogVisible: false,
      message: null,
      ruleForm: {
        name: null,
        email: null,
        password: null,
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: false,
            message: "Please input Activity email",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.$axios
      .get(`${process.env.VUE_APP_ROOT_API}/categories`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => (this.tableData = response.data.data));
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(`${process.env.VUE_APP_ROOT_API}/category`, this.ruleForm, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            })
            .then((response) => {
              this.message = response.data.message;
              this.dialogVisible = true;
              this.resetForm(formName);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  components: {
    Sidebar,
    Navbar,
  },
};
</script>
