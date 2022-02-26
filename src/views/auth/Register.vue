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
        lg:w-1/3
        md:w-1/3
        sm:w-1/2
        w-2/3
        mt-5
        mx-auto
        bg-white
        p-5
        rounded-2xl
        shadow-sm
        text-sm
      "
    >
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item label="Username" prop="name">
          <el-input
            type="text"
            v-model="ruleForm.name"
            autocomplete="off"
            placeholder="Enter username"
          ></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input
            type="email"
            v-model="ruleForm.email"
            autocomplete="off"
            placeholder="Enter email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="Enter password"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="Enter confirm password"
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
            :loading="isLoading"
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.password) {
        console.log(value);
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      isLoading: false,
      ruleForm: {
        password: "",
        name: "",
        email: "",
        checkPass: null,
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "change",
          },
          {
            min: 8,
            max: 100,
            message: "Length should be 8 to 100",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input Activity password",
            trigger: "change",
          },
          {
            min: 8,
            max: 100,
            message: "Length should be 8 to 100",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "Please input Activity email",
            trigger: "change",
          },
          {
            type: "email",
            message: "Please input type email",
            trigger: "change",
          },
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.signup();
        } else {
          console.log("submit error");
        }
      });
    },
    signup: function () {
      this.isLoading = true;
      let grant_type = "password";
      let client_id = "1";
      let client_secret = "ZCPWHVtbdzBHWyRedRHA7QV18MVZPMi74N0Gd6No";
      let name = this.ruleForm.name;
      let email = this.ruleForm.email;
      let password = this.ruleForm.password;

      this.$store
        .dispatch("signup", {
          grant_type,
          client_id,
          client_secret,
          email,
          password,
          name,
        })
        .then(() => {
          this.$message({
            showClose: true,
            message: "Congrats, you registered successfully.",
            type: "success",
          });
          this.isLoading = false;
          this.$router.push("/admin/dashboard");
        })
        .catch((err) => {
          this.$message.error("Oops, register is failed! " + err);
          this.isLoading = false;
        });
    },
  },
};
</script>