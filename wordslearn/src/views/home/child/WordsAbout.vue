<template>
    <div class="wordabout" >
        <div @click="funClick('/books')">
            <el-col :span="8">
                <el-card shadow="hover">
                    单词书
                </el-card>
            </el-col>
        </div>
        <div @click="funClick('/test')">
            <el-col :span="8">
                <el-card shadow="hover" >
                    单词自测
                </el-card>
            </el-col>
        </div>
        <div @click="funClick('/plan')">
            <el-col :span="8">
                <el-card shadow="hover">
                    单词计划
                </el-card>
            </el-col>
        </div>
        
        
    </div>
</template>

<script>
export default {
  name: 'WordsAbout',
  methods: {
    funClick(index) {
        console.log('push')
        this.$router.push(index);
    }
  }
}
</script>

<style>
.wordabout{
    position: absolute;
    width: 40%;
    margin-left: 3%;
}
</style>
