<template>
    <div class="testnavbar">
        <el-col :span="12">
        <el-menu
            :router=true
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
                <el-menu-item index="/test/testqs" >
                    <i class="el-icon-s-management"></i>
                    <span slot="title">单词自测</span>
                </el-menu-item>
                <el-menu-item index="/test/testsetting">
                    <i class="el-icon-s-tools"></i>
                    <span slot="title">测试设置</span>
                </el-menu-item>
        </el-menu>
        </el-col>
    </div>
</template>

<script>
export default {
  name: 'TestNavbar',
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

<style>
.el-menu-vertical-demo{
    
    position: absolute;
    height: 100%;
    width: 20%;
}
.el-menu-item{
    margin-top: 20%;
}
</style>

