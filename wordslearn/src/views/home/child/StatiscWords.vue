<template>
    <div class="statiscwords">
        <el-col :span="8">
            <el-card shadow="never">
                <div><h3>总共已背</h3></div>
                <span>{{ $store.state.plan.finishedWords }}</span>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="always">
                <div><h3>今日已背</h3></div>
                <span>{{$store.state.plan.todayFinishedWords }}</span>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="never">
                <div><h3>今日需背</h3></div>
                <span>{{ $store.state.plan.wordsPerDay }}</span>
            </el-card>
        </el-col>
    </div>
        
</template>

<script>


export default {
  name: 'StatiscWords',
  data() {
    return {
        finishedWords: 0,
        todayneeded: 0,
        targetnumber: 0
    }
  },
  computed: {
    
  }
}
</script>

<style>

.statiscwords{
    line-height: 70px;
}

</style>
