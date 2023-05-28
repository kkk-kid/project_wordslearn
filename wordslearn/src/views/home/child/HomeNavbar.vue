<template>
  <div class="homenavbar">
    <el-menu
      :router=true
      default-active="/home"
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
      <el-menu-item index="/login/signin" @click="LogoutBtn()">
        <i class="el-icon-error"></i>
        <span slot="title">退出登录</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name: 'HomeNavbar',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      LogoutBtn() {  //退出登录
        localStorage.clear()
			  window.sessionStorage.clear()
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
.el-menu-item{
  text-align: left;
}
</style>
