<template>
  <div>
    <nav
      class="
        flex
        justify-between
        items-center
        p-2
        pr-8
        pl-8
        bg-white
        shadow-sm
        my-1 bg-slate-100 font-normal tracking-wide
      "
    >
      <div>
        <a
          href="#"
          class="text-md"
        >
          <img
            src="https://www.codecheef.org/user/img/website-logo.png?ezimgfmt=rs:258x66/rscb2/ng:webp/ngcb2"
          />
        </a>
      </div>
      <div
        class="space-x-4 flex tracking-wide items-center"
      >
        <el-dropdown>
          <span class="el-dropdown-link">
            LARAVEL TUTORIAL<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Blog</el-dropdown-item>
            <router-link :to="{ name: 'dashboard' }">
              <el-dropdown-item> Dashboard </el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
        <router-link :to="{ name: 'dashboard' }">
              <el-dropdown-item> Vue & Firebase </el-dropdown-item>
            </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>