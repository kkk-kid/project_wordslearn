<template>
    <div>
      <el-calendar>
        <template
            slot="dateCell"
            slot-scope="{data}">
            <p :class="data.isSelected" >
              {{ data.day.split('-').slice(2).join('-') }}              
            </p>
            <div v-for="(item,index) in dateContent" :key="index">
                <el-row v-if="item == data.day">
                    <span><el-tag type="success">已背词</el-tag></span>
                </el-row>  
            </div>
            
        </template>
  </el-calendar>
    </div>
</template>

<script>
import {getWordLearnPlan} from "@/network/home"
export default {
  name: 'CalenderCpn',
  data(){
    return {
      startDate: '',
      dateContent: [],
      dateNoContent: [],
      wordsPerDay: 0,
      totalDays: 0,
      finishedWords: 0,
      startdate: '',
      enddate: '',
    }
  },
  mounted() {
      this.getPlan()
  },
  methods: {
    getPlan() {
      getWordLearnPlan(this.$store.state.userId).then(res => {
          this.$store.commit('setPlan',res.data)
          /*this.wordsPerDay = res.data.wordsPerDay
          this.finishedWords = res.data.finishedWords*/
          
          console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>
 .is-selected {
    color: #1989FA;
  }
.el-calendar{
  
  margin-top: 15%;
  line-height: 0;
}



</style>
