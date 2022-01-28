<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo h-auto rounded shadow"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>Authentication</span>
      </template>
      <el-menu-item-group title="Group Users">
        <el-menu-item index="1-1"
          ><router-link :to="{ name: 'post' }"
            >User</router-link
          ></el-menu-item
        >
        <el-menu-item index="1-2">Role one</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>Category</span>
      </template>
      <el-menu-item-group title="Group Categories">
        <router-link :to="{ name: 'category' }"
          ><el-menu-item index="1-1">Category</el-menu-item></router-link
        >
        <el-menu-item index="1-2">Sub Category</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3">
      <router-link :to="{ name: 'post' }"
        ><i class="el-icon-menu"></i> Post Content</router-link
      >
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>