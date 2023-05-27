<template>
    <div class="learncontent">
      <div class="block"   v-for="(item) in learn" :key="item.id" >
              <div v-if="item.fin == false">
                    <div class="head">
                        <h3>{{ item.value }}</h3>                     
                    </div>
                    <el-divider></el-divider>
                    <div class="cover" @click="item.iscover=true" v-if="item.iscover==false"></div>
                    <div class="content" @click="item.iscover=false">
                        <div>中文释义：{{ item.meaningChinese }}</div>
                        <div>例子：{{ item.example }}</div>
                    </div>
                    <div class="selectchoise" @click="item.iscover=false">
                        <label for="select1" @click="ansClick(item,1)">
                            <input type="radio"  v-model="radio" value="1" id="select1"/>
                            <span>记得</span>
                        </label>      
                                                               
                        <label for="select2" @click="ansClick(item,2)">
                            <input type="radio"  v-model="radio" value="2" id="select2"/>
                            <span>模糊</span>
                        </label>
                            
                        <label for="select3" @click="ansClick(item,3)">
                            <input type="radio"  v-model="radio" value="3" id="select3"/>
                            <span>不记得</span>
                        </label>                                                                   
                    </div>
                  </div>    
                </div>
    </div>
</template>

<script>
import {postLearnResult} from "@/network/learn"

export default {
  name: 'learnContent',
  data() {
    return {
      radio: '',
      count: 0,
      learnList: new Set()
    }
  },
  created() {
      console.log(this.$store.state.learnList)
  },
  computed: {
      learn() {
        return this.$store.state.learnList
      }
  },
  methods: {
    ansClick(item,value) {
      console.log(item) 
      item.fin = true;   
      this.count +=1; 
      console.log(value)
      this.learnList.add({wordId:item.id, rememberState: value})
      if(this.count >= this.learn.length) {
        this.$router.push('/learn/learnstart')
        console.log(this.learnList)
        postLearnResult(this.$store.state.userId,this.learnList).then(res => {
          console.log(res)
        })
      }
    }
  }
}
</script>

<style scoped>

.learncontent{
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
  line-height: 40px;
}
.selectchoise  span{
  margin: 20px;
  
}
.selectchoise input{
    display: none;
}
.selectchoise input + span {
    display: inline-block;
    width: 80%;
    height: 40px;
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

.content{
  
  width: 100%;
  height: 40%;
}
.cover{
  background-color: #fff;
  width: 100%;
  height: 70%;
  position: absolute;
}
</style>
