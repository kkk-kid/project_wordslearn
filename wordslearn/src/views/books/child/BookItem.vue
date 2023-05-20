<template>
    <el-tooltip class="item" effect="dark" :content="book.name" placement="top">
        <div class="bookitem" @click="bookClick(book.name)" >
            <div><img src="https://img.zcool.cn/community/01ee5c5ad994d8a80120927b142b2a.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100" alt=""></div>
            <div class="bookinfo">{{book.name}}</div>
        </div>
    </el-tooltip>

    
</template>

<script>
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
    bookClick(bookname) {
        this.$router.push('/book'+bookname)
        console.log(bookname)
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
    background-color: rgb(215, 220, 224);
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
