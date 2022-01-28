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
        leading-6
        shadow
        my-1 bg-slate-100 font-sans tracking-wide
      "
    >
      <div>
        <a
          href="#"
          class="text-md font-medium tracking-tighter"
          style="font-family: Khmer OS Muol"
        >
          <img
            src="https://www.codecheef.org/user/img/website-logo.png?ezimgfmt=rs:258x66/rscb2/ng:webp/ngcb2"
          />
        </a>
      </div>
      <div
        class="space-x-4 flex font-medium tracking-wide items-center"
        style="font-family: Khmer OS Siemreap"
      >
        <a href="#">
          <span>News</span>
        </a>
        <a href="#">Laravel</a>
        <a href="#">Lesson</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            Chit Senghoung<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Blog</el-dropdown-item>
            <router-link :to="{ name: 'dashboard' }">
              <el-dropdown-item> Dashboard </el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>