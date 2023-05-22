<template>
    <div class="teststart">
        <div class="title">
            <h1>单词自测</h1>
        </div>
        <el-divider style="background-color: black;"></el-divider>
        <div>
            <el-button type="primary" round @click="startClick">开始测试</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TestStart',
  methods: {
    startClick(){
        this.$router.push('/test/testcontent')
    }
  }
}
</script>

<style scoped>
.teststart{
    position: absolute;
    margin-left: 10%;
    margin-top: 5%;
    border-radius: 15px;
    width: 50%;
    height: 70%;
    background-color: rgb(255, 255, 255);
}
.teststart > .title{
    height: 20%;
}
.el-button{
    margin-top: 30%;
    width: 200px;
    height: 50px;
}
</style>
