<template>
    <div class="profileview">
        <el-container >
            <el-aside width="10%">
                <ProfileNavbar></ProfileNavbar>
            </el-aside>
            <el-main>
                <ProfileInfo></ProfileInfo>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import ProfileNavbar from './child/ProfileNavbar.vue';
import ProfileInfo from './child/ProfileInfo.vue';

export default {
  name: 'ProfileView',
  components: {
    ProfileNavbar,
    ProfileInfo
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .profileview > .el-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
