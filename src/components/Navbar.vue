<template>
  <div>
    <nav
      class="
        flex
        fixed
        w-full
        justify-between
        items-center
        p-2
        pr-8
        pl-8
        bg-white
        tracking-wide
        z-20
        shadow-sm
      "
      v-if="this.width > 768"
    >
      <div>
        <router-link :to="{ name: 'home' }">
          <img
            src="https://www.codecheef.org/user/img/website-logo.png?ezimgfmt=rs:258x66/rscb2/ng:webp/ngcb2"
          />
        </router-link>
      </div>
      <div
        class="
          space-x-5
          flex
          items-center
          font-medium
          text-gray-500 text-md
          leading-6
          tracking-wide
        "
      >
        <div>
          <router-link to="#" class="hover:text-indigo-700 text-indigo-800"
            >Laravel8</router-link
          >
        </div>
        <div>
          <router-link to="#" class="hover:text-indigo-700 text-indigo-800"
            >How-to</router-link
          >
        </div>
        <div>
          <router-link to="#" class="hover:text-indigo-700 text-indigo-800"
            >Tutorial</router-link
          >
        </div>
        <div v-if="auth != null">
          <el-dropdown trigger="hover">
            <span
              class="hover:text-indigo-700 text-indigo-800 cursor-pointer"
              style="font-size: 16px"
            >
              {{ auth.data.name }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="w-52 space-y-2">
              <div>
                <el-dropdown-item icon="el-icon-user">Profile</el-dropdown-item>
              </div>
              <div @click="logout()">
                <el-dropdown-item icon="el-icon-close"
                  >Log out</el-dropdown-item
                >
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </nav>
    <nav v-else></nav>
    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: null,
      width: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    if (localStorage.getItem("access_token")) {
      this.$axios
        .get(`${process.env.VUE_APP_ROOT_API}/user/active`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          this.auth = response;
        });
    }
  },
  methods: {
    onResize(e) {
      this.width = window.innerWidth;
    },
    logout() {
      localStorage.removeItem("access_token");
      window.location.reload();
    },
  },
};
</script>