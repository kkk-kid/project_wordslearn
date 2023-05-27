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
          return this.$store.state.currentWordsBookList
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
  