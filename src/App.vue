<template>
  <div id="app" class="font-normal">
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style>
body{
  background: #e7e7e756
}
.el-table__body-wrapper::-webkit-scrollbar {
  height: 10px;
  cursor: pointer;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #eeeeee;
  border-radius: 5px;
}
</style>