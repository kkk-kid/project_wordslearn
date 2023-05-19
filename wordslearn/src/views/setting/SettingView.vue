<template>
    <div class="settingview">
        <el-container >
            <el-aside width="10%">
                <SettingNavbar></SettingNavbar>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>

<script>
import SettingNavbar from './child/SettingNavbar.vue';

export default {
  name: 'SettingView',
  components: {
    SettingNavbar,
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
  .settingview > .el-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
