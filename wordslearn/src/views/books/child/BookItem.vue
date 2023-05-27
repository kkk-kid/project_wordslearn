<template>
    <el-tooltip class="item" effect="dark"  placement="top">
        <div slot="content">{{book.name}}<br/>简介：{{ book.intro }}<br/>适用人群：{{ book.suitableUsers }}</div>
        <div class="bookitem" @click="bookClick(book)" >
            <div><img src="https://pic3.zhimg.com/v2-4fc5ca746aa56334ad772504557907d1_r.jpg?source=1940ef5c" alt=""></div>
            <div class="bookinfo">{{book.name}}</div>
            <div class="bookinfo">简介：{{ book.intro }}</div>
            <div class="bookinfo">适用人群：{{ book.suitableUsers }}</div>
        </div>
    </el-tooltip>
    
    
</template>

<script>
import { getBook } from "@/network/books"

export default {
  name: 'BookItem',
  props: {
    book: {
        type: Object,
        default() {
            return {}
        }
    }
  },
  methods: {
    bookClick(book) {
        this.$router.push('/book'+book.name)
        //console.log(bookid)
        getBook(book.id,this.$store.state.userId).then(res => {
            let resdata=JSON.parse(JSON.stringify(res.data.words))
            console.log("书单",resdata)
            this.$store.commit('setcurrentWordsBookList',resdata)
            console.log(res)
            console.log('vuex',this.$store.state.currentWordsBookList)
        })
    }
  }
}
</script>

<style>
.bookitem{
    float: left;
    width: 200px;
    height: 300px;
    overflow: hidden;
    background-color: rgb(220, 215, 215);
    border-radius: 15px;
    margin: 26px;
    
}
.bookinfo{
    line-height: 20px;
    font-family:fantasy;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.bookitem  img {
    width: 100%;
}
</style>
