<template>
    <div class="bookview">
      <el-container style="height: 100%; border: 1px solid #eee">
  
        <el-container>
          <el-header style="text-align: left; font-size: 12px">
              <BookSearchBar></BookSearchBar>
          </el-header>    
          <el-main>
              <el-table :data="tableData">
                  <el-table-column prop="word" label="单词" width="140"></el-table-column>
                  
                  <el-table-column prop="feature" label="词性" width="120"></el-table-column>
        
                  <el-table-column prop="interpret" label="中文释义"></el-table-column>
        
              </el-table>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import BookSearchBar from "./child/BookSearchBar.vue"

export default {
  name: 'BookView',
  components: {
    BookSearchBar,
  },
  computed: {
    bookname(){
      return this.$route.params.bookname;
    }
  },
  data() {
      const item = {
        word: 'word',
        feature: 'noun',
        interpret: '文字，文档，词语'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
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
</style>
