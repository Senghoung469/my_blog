<template>
  <el-menu default-active="2" class="rounded-b-sm tracking-wide text-gray-100">
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>Category</span>
      </template>
      <el-menu-item-group title="Group Categories">
        <router-link :to="{ name: 'category' }"
          ><el-menu-item index="1-1">Category</el-menu-item></router-link
        >
        <router-link :to="{ name: 'tag' }">
          <el-menu-item index="1-2">Tag</el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
    <router-link :to="{ name: 'post' }">
      <el-menu-item index="3">
        <i class="el-icon-menu"></i> Post Article
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>