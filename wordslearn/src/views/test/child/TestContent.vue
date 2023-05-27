<template>
    <div class="testcontent">
      <div class="block"   v-for="(item) in testList" :key="item.id" >
              <div v-if="item.fin == false">
                    <div class="head">
                        <h3>{{ item.title }}</h3>  
                        <el-statistic :value="deadline" time-indices format="mm:ss"></el-statistic>                     
                    </div>
                    <el-divider></el-divider>
                    <div class="selectchoise">
                        <label for="select1" @click="ansClick(item,item.title,'firstOption')">
                            <input type="radio"  v-model="radio" value="item.firstOption" id="item.firstOption"/>
                            <span>{{ item.firstOption }}</span>
                        </label>      
                                                               
                        <label for="select2" @click="ansClick(item,item.title,'secondOption')">
                            <input type="radio"  v-model="radio" value="item.secondOption" id="secondOption"/>
                            <span>{{ item.secondOption }}</span>
                        </label>
                            
                        <label for="select3" @click="ansClick(item,item.title,'thirdOption')">
                            <input type="radio"  v-model="radio" value="item.thirdOption" id="thirdOption"/>
                            <span>{{ item.thirdOption }}</span>
                        </label>
                                            
                        <label for="select4" @click="ansClick(item,item.title,'fourOption')">
                            <input type="radio"  v-model="radio" value="item.fourOption" id="fourOption"/>
                            <span>{{ item.fourOption }}</span>
                        </label>
                    </div>
                  </div>    
                </div>
    </div>
</template>

<script>
import { postTestResult } from '@/network/test'

export default {
  name: 'TestContent',
  created() {
    console.log(this.$store.state.testList)
    this.testList = this.$store.state.testList.testQuestionVOS
    this.timeOut()
  },
  beforeDestroy() {
          clearInterval(this.timer);
          this.timer = null
  },
  data() {
    return {
      testList: {},
      radio: '',
      count: 0,
      userAns: []
    }
  },
  computed: {
    deadline() {
      return Date.now() + 1000*this.$store.state.testList.testMinutes
    }
  },
  methods: {
    ansClick(item,ans) {
      console.log(item.testQuestionId) 
      console.log('ans',ans)
      item.fin = true
      this.userAns.push({wordId: parseInt(item.wordId),
                        choice: ans,
                        isEnglishChooseChinese: item.isEnglishChooseChinese
      })
      this.count += 1
      if(this.count >= this.testList.length) {
          alert('测试结束')
          this.$router.replace('/test/testresult')
          console.log('用户答案',this.$store.state.userId,this.$store.state.testList.testId,this.userAns)
          setTimeout(() => {
            postTestResult(this.$store.state.userId,this.$store.state.testList.testId,this.userAns).then(res => {
              console.log(res)
              this.$store.commit('settestResult',res.data)
            })
          },500)
      }
    },
    timeOut() {
        let time = this.$store.state.testList.testMinutes;
        //const TIME_count = this.$store.state.testList.testMinutes;
            this.timer = setInterval(() => {
            if(time > 1) time -= 1
            else {
              alert('测试时间到')
              this.$router.replace('/test/testresult')
              postTestResult(this.$store.state.userId,this.$store.state.testList.testId,this.userAns).then(res => {
              console.log(res)
              this.$store.commit('settestResult',res.data)
              clearInterval(this.timer);
              this.timer = null
            })
            }
        },1000)
    }
  }
}
</script>

<style scoped>

.testcontent{
  position: relative;
}

.block > div {
    background-color: #fff;
    width:500px;
    height: 800px;
}
.block{
  
  margin-left: 25%;
  
  position: absolute;
}


.selectchoise{
  line-height: 60px;
}
.selectchoise  span{
  margin: 10px;
  
}
.selectchoise input{
    display: none;
}
.selectchoise input + span {
    display: inline-block;
    width: 80%;
    height: 60px;
    border-radius: 4px;
    background-color: #dddddd22;
    text-align: center;
    margin-right: 5px;
    font-size: 24px;
    border: 1px solid #ddd;
}
.selectchoise input:checked + span {
    color: #1aa1e4;
    border: 1px solid #1aa1e4;
    background-color: #1aa1e411;
}

</style>
