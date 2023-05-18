<template>
    <div class="statiscwords">
        <el-col :span="8">
            <el-card shadow="never">
                <div><h3>总共已背</h3></div>
                <span>1</span>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="always">
                <div><h3>今日需背</h3></div>
                <span>1</span>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="never">
                <div><h3>目标数量</h3></div>
                <span>1</span>
            </el-card>
        </el-col>
    </div>
        
</template>

<script>


export default {
  name: 'StatiscWords',
}
</script>

<style>

.statiscwords{
    line-height: 70px;
}

</style>
