<template>
    <div class="wordstest">
      <el-container>
        <el-aside width="20%">
            <TestNavbar></TestNavbar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
</template>

<script>
import TestNavbar from './child/TestNavbar.vue';

export default {
  name: 'WordsTest',
  components: {
    TestNavbar,
  }
}
</script>

<style scoped>
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  .el-container {
    position: absolute;
    margin-bottom: 40px;
    height: 100%;
    width: 100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
