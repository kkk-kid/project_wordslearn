<template>
  <div class="wordstest">
    <el-container>
      <el-aside width="20%">
          <LearnNavbar></LearnNavbar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LearnNavbar from './child/LearnNavbar.vue';

export default {
name: 'LearnView',
components: {
  LearnNavbar,
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
  background-color: #E9EEF3;
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
