<template>
  <div class="searchbar">
    <el-input v-model="state" placeholder="请输入要查询的单词" suffix-icon="el-icon-search" @keyup.enter.native="checkSearch"></el-input>
  </div>
</template>

<script>
import { postSearch } from "@/network/search"

export default {
 name: 'SearchBar',
  data() {
      return {
        state: '',
      };
    },
    methods: {
      checkSearch() {  //回车确认，查找单词
        console.log(this.state);
        //this.$emit('searchword',this.state)
        if(this.state == '') alert('查询单词不能为空！')
        else {
            postSearch(this.state).then(res => {
            console.log(res)
            if(res.code == 523) alert("该单词未收录或不存在")
            else this.$store.commit('setcurrentShowWord',res.data)
          })
        }
        
        
      }
    },
}
</script>

<style>
.el-autocomplete{
  position: absolute;
  width: 80%;
}
</style>
