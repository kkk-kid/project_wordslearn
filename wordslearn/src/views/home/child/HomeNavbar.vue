<template>
  <div class="homenavbar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-avatar> user </el-avatar>
      <el-menu-item index="2">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人资料</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang='ts'>
export default {
    name: 'HomeNavbar',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.el-menu-vertical-demo{
    position: absolute;
    height: 100%;
    width: 10%;
}
</style>
