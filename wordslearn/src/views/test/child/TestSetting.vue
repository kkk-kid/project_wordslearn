<template>
    <div class="testsetting">
      <div class="timeselect">
        <el-header><h2>测试时间</h2></el-header>
        <el-main>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-main>
      </div>
      <div class="testcontent">
        <el-container>
            <el-header ><h2>测试内容</h2></el-header>
            <el-main>
              <el-checkbox-group v-model="checkboxGroup">
                  <el-checkbox-button v-for="city in cities" :label="city" :key="city" >{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </el-main>
        </el-container>
      </div>
      <div class="selectbooks">
          <el-header ><h2>选择单词书</h2></el-header>
            <el-main>
              <SelectBooks></SelectBooks>
            </el-main>
      </div>
      
    </div>
</template>

<script>
import SelectBooks from "./SelectBooks.vue"

const cityOptions = ['单词书', '已背单词', '未背单词'];
export default {
  name: 'TestSetting',
  components:{
    SelectBooks
  },
  data () {
      return {
        checkboxGroup: [],
        cities: cityOptions,
        input: '',
      };
    },
  methods: {
    
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
.el-header{
  line-height: 40px;
}
.el-main{
  line-height: 0;
  
}
</style>
