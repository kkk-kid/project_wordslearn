<template>
    <div class="testsetting">
      <tr>
          <td class="info">测试数量</td>
          <td><el-input v-model="testNumber" placeholder="请输入测试数量"></el-input></td>
      </tr>
      <tr>
          <td class="info">中英比例</td>
          <td><el-progress :percentage="percentage" :color="customColor"></el-progress></td>
          <td>
            <el-button-group>
                <el-button icon="el-icon-minus" @click="decrease"></el-button>
                <el-button icon="el-icon-plus" @click="increase"></el-button>
            </el-button-group>
          </td>
      </tr>
      <tr>
          <td class="info">测试内容</td>
          <td>
              <el-checkbox-group v-model="testContent">
                  <el-checkbox-button v-for="city in cities" :label="city" :key="city" >{{city}}</el-checkbox-button>
              </el-checkbox-group>
          </td>
      </tr>
      <tr>
          <td class="info">选择单词书</td>
          <td class="bookselect">
            <select name="pets" id="pet-select" v-model="selectBook" >
                  <option :value="item" v-for="item in options" :key="item.id">{{ item.name }}</option>
            </select>
          </td>
      </tr>
    </div>
</template>

<script>
import { getAllBooks } from '@/network/books';

const selectContent = ['单词书', '已背单词', '未背单词'];
export default {
  name: 'TestSetting',
  computed: {
    options() {
        return this.$store.state.BookList
    }
  },
  created() {
    this.getBooksList()
  },
  watch: {
    testNumber: {
      handler(testNumber) {
        let module = {testNumber:Number(testNumber),
                        testChoice:this.testContent,
                        testBook:Number(this.selectBook.id),
                        testPercentage: Number(this.percentage)
                      }
        this.$store.commit('settestModule',module)
        console.log('词数量改变',Object.assign({},this.$store.state.testModule))     
      }
    },
    percentage: {
        handler(percentage) {
          let module = {testNumber:Number(this.testNumber),
                        testChoice:this.testContent,
                        testBook:Number(this.selectBook.id),
                        testPercentage: percentage
                      }
        this.$store.commit('settestModule',module)
        console.log('比例改变',Object.assign({},this.$store.state.testModule)) 
        }
    },
    testContent: {
    handler(testContent) {
      let module = {testNumber:Number(this.testNumber),
                    testChoice:testContent,
                    testBook:Number(this.selectBook.id),
                    testPercentage: Number(this.percentage)
                  }
      this.$store.commit('settestModule',module)
      console.log('词内容改变',Object.assign({},this.$store.state.testModule))
      
    }
  },
  selectBook: {
    handler(selectBook) {
      let module = {testNumber:Number(this.testNumber),
                    testChoice:this.testContent,
                    testBook:Number(selectBook.id),
                    testPercentage: Number(this.percentage)
                  }
      this.$store.commit('settestModule',module)  
      console.log('词书改变',Object.assign({},this.$store.state.testModule))
    }
  }
},
  data () {
      return {
        testContent: [],
        cities: selectContent,
        selectBook: '',
        testNumber: '',
        percentage: 20,
        customColor: '#409eff',
      };
    },
  methods: {
    getBooksList() {
      getAllBooks().then(res => {
        this.$store.commit('setBookList',res.data)
      })
    },
    increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
  }
}
</script>

<style>
.testcontent,.selectbooks,.timeselect{
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
