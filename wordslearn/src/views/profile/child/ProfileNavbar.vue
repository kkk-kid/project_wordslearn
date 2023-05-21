<template>
    <div class="homenavbar">
      <el-menu
        :router=true
        default-active="/profile"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-avatar> user </el-avatar>
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/profile">
          <i class="el-icon-user-solid"></i>
          <span slot="title">个人资料</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-s-tools"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </div>
  </template>
  
  <script lang='ts'>
  export default {
      name: 'ProfileNavbar',
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
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
  