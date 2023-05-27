<template>
    <div class="wordsplan">
      <el-container>
      <el-main width="60%">
        
          <PlanSetting></PlanSetting>
        
      </el-main>
      <el-aside width="40%">
        <StatiscWords></StatiscWords>       
        <CalenderCpn></CalenderCpn>
      </el-aside>
    </el-container>
    </div>
</template>

<script>
import StatiscWords from '../home/child/StatiscWords.vue';
import CalenderCpn from '../home/child/calender.vue';
import PlanSetting from './plansetting/PlanSetting.vue'

export default {
  name: 'WordsPlane',
  components: {
    StatiscWords,
    CalenderCpn,
    PlanSetting
  }
}
</script>

<style>

.wordsplan{
  text-align: center;
  
}
body > .el-container {
    margin-bottom: 40px;
  }

  .wordsplan > .el-container {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 0;
}
</style>
