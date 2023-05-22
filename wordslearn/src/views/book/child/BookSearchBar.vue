<template>
    <div class="searchbar">
      <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
      @keyup.enter.native="checkSearch"
      suffix-icon="el-icon-search"
      >
    </el-autocomplete>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookSearchBar',
    data() {
        return {
          restaurants: [],
          state: '',
          timeout:  null
        };
      },
      methods: {
        loadAll() {
          return [
          {id: 1 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 2 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 3 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 4 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 5 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 6 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 7 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 8 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 9 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 10 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 11 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 12 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 13 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 14 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 15 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 16 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 17 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 18 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 19 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 20 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 21 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 22 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 23 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 24 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 25 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 26 ,value: 'hello', feature: 'noun', interpret: '你好'},
        {id: 27 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 28 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 29 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 30 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 31 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 32 ,value: 'word', feature: 'noun', interpret: '文字，文档，词语'},
          ];
        },
        querySearchAsync(queryString, cb) {
          var restaurants = this.restaurants;    
          var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(results);
          }, 1000 );
        },
        createStateFilter(queryString) {
          return (state) => {  
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        handleSelect(item) {  //选中下拉列表内容
          console.log(item);
          this.$emit('searchword',this.state)
        },
        checkSearch() {  //回车确认，查找单词
          /*console.log(this.state);*/
          this.$emit('searchword',this.state)
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
  }
  </script>
  
  <style scoped>
  .el-autocomplete{
    position: absolute;
    width: 80%;
  }
  </style>
  