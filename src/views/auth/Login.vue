<template>
  <div>
    <div class="flex justify-center mt-28">
      <img
        src="https://www.codecheef.org/user/img/website-logo.png?ezimgfmt=rs:258x66/rscb2/ng:webp/ngcb2"
        alt=""
      />
    </div>
    <div
      class="
        lg:w-1/4
        md:w-1/3
        sm:w-1/2
        w-2/3
        mt-5
        mx-auto
        bg-white
        p-5
        rounded
        shadow-sm
        text-sm
      "
    >
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        method="POST"
      >
        <el-form-item label="Email" prop="email">
          <el-input
            type="email"
            v-model="ruleForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="ruleForm.isLoading"
            type="button"
            class="
              w-full
              rounded
              bg-indigo-900
              text-white
              hover:bg-indigo-800 hover:text-white
              focus:bg-indigo-900 focus:text-white focus:border-transparent
              mt-5
              mb-5
            "
            @click="submitForm('ruleForm')"
            >Login</el-button
          >
          <div class="text-center text-indigo-800">
            <router-link to="register" class="text-sm font-medium"
              >Do you want to register?</router-link
            >
          </div>
        </el-form-item>
      </el-form>
    </div>
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
      let client_secret = "ZCPWHVtbdzBHWyRedRHA7QV18MVZPMi74N0Gd6No";
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
