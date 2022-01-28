<template>
  <div
    class="
      w-1/3
      h-96
      mx-auto
      mt-20
      bg-white
      p-5
      rounded
      shadow
      text-sm
    "
  >
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item label="Email (@)" prop="email">
        <el-input
          type="email"
          v-model="ruleForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password (*)" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
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
        pass: "",
        checkPass: "",
        email: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          return false;
        }
      });
    },
  },
};
</script>
