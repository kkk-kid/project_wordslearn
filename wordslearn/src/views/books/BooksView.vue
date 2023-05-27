<template>
    <div class="booksview">
      <div class="head"> <el-button type="primary" @click="returnClick()">返回主页</el-button></div>
      <BookItem v-for="(item) in books" :key="item.id" :book="item"></BookItem> 
    </div>
</template>

<script>
import { getAllBooks } from '@/network/books';

import BookItem from './child/BookItem.vue';

export default {
  name: 'BooksView',
  components: {
    BookItem ,
  },
  created() {
    this.getBooksList()
  },
  data(){
    return {
      books: [
        
      ]
    }
  },
  methods: {
    returnClick() {
      this.$router.push('/home')
    },
    getBooksList() {
      getAllBooks().then(res => {
        this.books.push(...res.data)
        this.$store.commit('setBookList',res.data)
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.el-button{
  margin-top: 1%;
  margin-left: 26px;
}
</style>
