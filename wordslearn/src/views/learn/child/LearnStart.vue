<template>
    <div class="teststart">
        <div class="title">
            <h1>背单词</h1>
        </div>
        <el-divider style="background-color: black;"></el-divider>
        <div>
            <el-button type="primary" round @click="startClick">开始</el-button>
        </div>
    </div>
</template>

<script>
import { postLearnStart } from '@/network/learn';
import { getProfileInfo } from '@/network/profile';

export default {
  name: 'TestStart',
  created() {
    getProfileInfo().then(res => {
        console.log(res.data.id)
        this.$store.commit('setuserId',res.data.id)
    })
  },
  methods: {
    startClick(){
        let learnModule = Object.assign({},this.$store.state.learnModule)
        console.log(this.$store.state.userId,learnModule.learnNumber,learnModule.learnBook,learnModule.learnChoice)
        postLearnStart(this.$store.state.userId,learnModule.learnNumber,learnModule.learnBook,learnModule.learnChoice).then(res => {
            console.log(res)
            this.$store.commit('setlearnList',res.data.wordList)
        })
        setTimeout(() => {
                this.$router.push('/learn/learncontent')
        },1000)
        
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
