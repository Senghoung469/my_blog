<template>
  <div>
    <div class="flex justify-center mt-5">
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
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item label="Username" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input
            type="email"
            v-model="ruleForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
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
            type="button"
            :loading="ruleForm.isLoading"
            @click="submitForm('ruleForm')"
            >Register</el-button
          >
          <div class="text-center text-indigo-800">
            <router-link to="login" class="text-sm font-medium"
              >If you has been registered please login</router-link
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
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the username"));
      } else {
        callback();
      }
    };
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        isLoading: false,
        pass: "",
        checkPass: "",
        username: "",
        email: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.get("/oauth/clients").then((response) => {
            console.log(response.data);
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>