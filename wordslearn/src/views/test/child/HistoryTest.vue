<template>
    <div class="historytest">
        <el-collapse>
            <el-collapse-item :title="'测试'+(index+1)" :name="index" v-for="(item,index) in list" :key="index">
                <tr>
                    <th>测试数量</th>
                    <th>测试正确率</th>
                    <th>测试日期</th>
                    <th>测试单词</th>
                </tr>
                <tr>
                    <td>{{ item.testNumber }}</td>
                    <td>{{ item.accuracy }}%</td>
                    <td>{{ item.startTime }}</td>
                    <td>
                        <el-popover
                            placement="bottom"
                            title="测试内容"
                            width="200"
                            trigger="click">
                            <div slot="">
                                <tr>
                                    <th>单词</th>
                                    <th>中文释义</th>
                                </tr>
                                <tr v-for="w in getWord(item.wordVOList)" :key="w.id">
                                    <td>{{ w.value }}</td>
                                    <td>{{ w.meaning }}</td>
                                </tr>
                            </div>
                            <el-button slot="reference">查看</el-button>
                        </el-popover>
                    </td>
                </tr>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
//import { getProfileInfo } from '@/network/profile';
import { getHistoryTest } from '@/network/test';


export default {
  name: 'HistoryTest',
  data() {
      return {
        list: []
      };
    },
    created() {
        this.getTest() 
  },
  methods: {
        getTest() {
            getHistoryTest(this.$store.state.userId).then(res => {
                console.log(res.data)
                this.list = res.data
            })
        },
        getWord(item) {
            let newlist = []
            for(let i=0;i<item.length;i++){
                
                newlist.push({value:item[i].value, meaning: item[i].meaningChinese})
            }
            
            return newlist
        }
  },
  computed: {
    
  }
}
</script>

<style scoped>

.el-collapse{
    line-height: 100px;
    font-size: 20px;
    border-radius: 15px;
}
th{
    width: 100px;
}
.el-button{
    background-color: rgb(127, 181, 209);
}
</style>
