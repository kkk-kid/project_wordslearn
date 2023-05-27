<template>
    <div class="bookview">
      <el-container style="height: 100%; border: 1px solid #eee">
  
        <el-container>
          <el-header style="text-align: left; font-size: 12px">
              <BookSearchBar @searchword="searchword" :bookdid="bookid"></BookSearchBar>
          </el-header>    
          <el-main>
              <WordsList :toword="toword" @scrollword="scrollword" :bookdid="bookid"></WordsList>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import BookSearchBar from "./child/BookSearchBar.vue"
import WordsList from "./child/WordsList.vue"

export default {
  name: 'BookView',
  components: {
    BookSearchBar,
    WordsList
  },
  data(){
    return {
      toword: '',
    }
  },
  computed: {
    bookid(){
      return Number(this.$route.params.bookid);
    }
  },
  methods: {
    searchword(event){
      console.log(this.toword)
      console.log(event);
      this.toword = event;
    },
    scrollword(id){
      console.log(id)
      
    }
  },
  
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;

  }
    
  
  .el-aside {
    color: #333;
  }
  .WordsList{
    width: 100%;
  }
</style>
