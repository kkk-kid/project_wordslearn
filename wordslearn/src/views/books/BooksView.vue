<template>
    <div class="booksview">
      
      <BookItem v-for="(item) in books" :key="item.id" :book="item"></BookItem> 
    </div>
</template>

<script>
import BookItem from './child/BookItem.vue';

export default {
  name: 'BooksView',
  components: {
    BookItem ,
  },
  data(){
    return {
      books: [
        {id: 1, name: '四级词汇'},
        {id: 2, name: '六级词汇'},
        {id: 3, name: '学术英语'},
        {id: 4, name: '雅思词汇'},
        {id: 5, name: '托福词汇'},
        {id: 6, name: '大学生专业英语八级等级考试'},
        {id: 7, name: '新东方助学九年义务教育一条龙服务'},
        {id: 8, name: '四级词汇'},
        {id: 9, name: '四级词汇'},
        {id: 10, name: '四级词汇'},
        {id: 11, name: '四级词汇'},
        {id: 12, name: '四级词汇'},
        {id: 13, name: '四级词汇'},
        {id: 14, name: '四级词汇'},
        {id: 15, name: '四级词汇'},
        {id: 16, name: '四级词汇'},
        {id: 17, name: '四级词汇'},
      ]
    }
  }
}
</script>

<style>

</style>
