<template>
  <div class="Learnsetting">
    <tr>
        <td class="info">背词数量</td>
        <td><el-input v-model="learnNumber" placeholder="请输入内容"></el-input></td>
    </tr>
    <tr>
        <td class="info">测试内容</td>
        <td>
            <el-checkbox-group v-model="checkboxGroup">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city" >{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </td>
    </tr>
    <tr>
        <td class="info">选择单词书</td>
        <td class="bookselect">
          <select name="books" id="book-select" v-model="selectBook" >                  
                  <option :value="item" v-for="item in this.$store.state.BookList" :key="item.id">{{ item.name }}</option>
            </select>
        </td>
    </tr>
    
  </div>
</template>

<script>
import { getAllBooks } from '@/network/books';

const cityOptions = ['单词书', '已背单词', '未背单词'];
export default {
  name: 'LearnSetting',
  created() {
    this.getBooksList
  },
  watch: {
    learnNumber: {
      handler(learnNumber) {
        let module = {learnNumber:Number(learnNumber),learnChoice:this.checkboxGroup,learnBook:Number(this.selectBook.id)}      
          this.$store.commit('setlearnModule',module)
          console.log('词数量改变',Object.assign({},this.$store.state.learnModule))      
      }
    },
  checkboxGroup: {
    handler(checkboxGroup) {
      let module = {learnNumber:Number(this.learnNumber),learnChoice:checkboxGroup,learnBook:Number(this.selectBook.id)}
      this.$store.commit('setlearnModule',module)
      console.log('词内容改变',Object.assign({},this.$store.state.learnModule))
      
    }
  },
  selectBook: {
    handler(selectBook) {
      let module = {learnNumber:Number(this.learnNumber),learnChoice:this.checkboxGroup,learnBook:Number(selectBook.id)}
      this.$store.commit('setlearnModule',module)  
      console.log('词书改变',Object.assign({},this.$store.state.learnModule))
    }
  }
},
computed: {
  options() {
      return this.$store.state.BookList
  }
},
data () {
    return {
      checkboxGroup: [],
      cities: cityOptions,
      learnNumber: '',
      selectBook: '',
    };
  },
methods: {
  getBooksList() {
      getAllBooks().then(res => {
        this.$store.commit('setBookList',res.data)
      })
    }
}
}
</script>

<style>
.Learncontent,.selectbooks,.timeselect{
background-color: rgb(255, 255, 255);
width: 50%;
border-radius: 15px;

}
.timeselect{
margin-bottom: 5px;
width: 20%;
}
.selectbooks{
width: 45%;

}
.selectbooks>.el-main{
text-align: left;
}

.el-main{
line-height: 0;

}
.info{
width: 100px;
}

.bookselect{
width:300px;
}
td{
  text-align: left;
}
select{
  height: 40px;
  border: #edecec;
  font-family: inherit;
  border-radius: 5px;
  
  outline-color:#ffffff;
}
select:focus-visible {
    /* outline: -webkit-focus-ring-color auto 1px; 这是谷歌浏览器的原生样式*/
    outline: none;
}

</style>
