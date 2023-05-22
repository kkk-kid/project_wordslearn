<template>
    <div class="wordsplan">
      <el-container>
      <el-aside width="60%">
        <div class="setplan">
          <PlanSetting></PlanSetting>
        </div>
      </el-aside>
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
.setplan{
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: rgb(239, 239, 239);
  margin-top: 10%;
  margin-left: 5%;
  border-radius: 15px;
}
</style>
