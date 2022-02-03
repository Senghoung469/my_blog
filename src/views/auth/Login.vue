<template>
  <div class="w-1/3 h-96 mx-auto mt-20 bg-white p-5 rounded shadow text-sm">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :method="POST">
      <el-form-item label="Email (@)" prop="email">
        <el-input
          type="email"
          v-model="ruleForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password (*)" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="ruleForm.isLoading"
          type="primary"
          class="w-full rounded-sm"
          @click="submitForm('ruleForm')"
          >Login</el-button
        >
        <div class="text-center text-gray-400 mt-3">
          <router-link to="register" class="text-sm font-bold tracking-tight"
            >Do you want to register?</router-link
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the email"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        checkPass: "",
        email: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    login: function () {
      let grant_type = "password";
      let client_id = "1";
      let client_secret = "OU3sNHdhmGG1pLbPpsDQSObQTRpUauzrIuHW74C2";
      let username = this.ruleForm.email;
      let password = this.ruleForm.password;

      this.$store
        .dispatch("login", {
          grant_type,
          client_id,
          client_secret,
          username,
          password,
        })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
