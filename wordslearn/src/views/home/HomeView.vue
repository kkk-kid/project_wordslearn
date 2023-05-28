<template>
  <div class="homeview">
    <el-container >
      <el-aside width="10%">
        <HomeNavbar></HomeNavbar>
      </el-aside>
      <el-container>
        <el-header><SeachBar @searchword="searchword" :words="words"></SeachBar></el-header>
        <el-main>
          <div class="wordsdisplay">
              <WordShow></WordShow>
          </div>
                
        </el-main>
        <el-divider><i class="el-icon-orange"></i></el-divider>
        <el-main>
          <WordsAbout></WordsAbout>
        </el-main>
      </el-container>
      <el-aside width="40%">
        <StatiscWords></StatiscWords>       
        <CalenderCpn></CalenderCpn>
      </el-aside>
    </el-container>
    
  </div>
</template>

<script>
import {getWordMutidata} from "@/network/home"  //请求首页数据
import { getAllBooks } from '@/network/books';
import { getProfileInfo } from "@/network/profile";

import WordShow from "./child/WordShow.vue";
import WordsAbout from "./child/WordsAbout.vue"
import StatiscWords from "./child/StatiscWords.vue" //单词进度

import CalenderCpn from './child/calender.vue' //进度日历
import SeachBar from '@/components/commom/search/SeachBar.vue';  //搜索框
import HomeNavbar from './child/HomeNavbar.vue';   //侧边导航栏
export default {
  name: 'HomeView',
  components: {
    HomeNavbar,
    SeachBar,
    CalenderCpn,
    StatiscWords,
    WordsAbout,
    WordShow
  },
  created() {
    this.getBooksList()
    this.getHomeWords();
    this.con()
    this.getUserId()
  },
  data() {
    return {
      words: []
    }
  },
  methods: {
    con(){
      console.log(window.localStorage.getItem('Authorization'))
      console.log(this.$store.state.Authorization)
    },
    searchword(event){
      this.showword = event;
    },
    getHomeWords() {
      getWordMutidata(1).then(res => {
        //this.$store.commit('setAllWords',res.data);
        console.log(res)
        /*this.words.push(...res.data)*/
      })
    },
    getBooksList() {
      getAllBooks().then(res => {
        /*this.books.push(...res.data)*/
        this.$store.commit('setBookList',res.data)
        console.log(res)
      })
    },
    getUserId() {
      getProfileInfo().then(res => {
        console.log(res)
        this.$store.commit('setuserId',res.data.id) 
      })
    }
  },
}
</script>

<style scoped>
.homeview > .el-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

 .wordsdisplay{
  position: absolute;
  width: 46%;
  height:40%;
  line-height: 20px;
  overflow: hidden;
 }

  
</style>
