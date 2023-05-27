<template>
    <div class="wordslist">
        <table>
            <thead>
                <tr>
                    <th scope="col" class="word">单词</th>
                    <th scope="col" class="feature">例子</th>
                    <th scope="col" class="interpret">中文释义</th>
                    <th scope="col" class="forgetTime">不记得次数</th>
                    <th scope="col" class="isFamiliar">熟悉程度</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="index-1" :id="item.id">
                    <td>{{ item.value }}</td>
                    <td>{{ item.example}}</td>
                    <td>{{ item.meaningChinese}}</td>
                    <td>{{ item.forgetTime }}</td>
                    <td>{{ Familiar(item.isFamiliar) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'WordsList',
  props: {
    toword: {
        type: String,
        default() {
            return ''
        }
    },
    bookdid: {
        type: Number
    }
  },
  data () {
    return {
        tableData: [],
        
    }
  },
  created(){
    this.settableData()
    console.log('current',this.$store.state.currentWordsBookList)
  },
  
  watch:{
    toword: {
        handler(toward){
            var id = 0;
            var flag = false;
            for(let i = 0; i < this.tableData.length;i++){
                if(toward==this.tableData[i].value){
                    id = this.tableData[i].id;
                    flag = true;
                }               
            }
            console.log(id);
            if(flag){
                //滚动到指定位置
                let target = document.getElementById(id)
                console.log('单词target',target)
                target.style.color='blue'
                target.scrollIntoView({
                behavior: "smooth", // 平滑过渡
                block: "start"      // 上边框与视窗顶部平齐
                })
                setTimeout(() => {
                    target.style.color='black'
                },3000)
            }
            else alert("不存在该单词")
        }
            
    }
  },
  methods: {
    settableData() {
        /*let resdata=JSON.parse(JSON.stringify(this.$store.state.currentWordsBookList))
        console.log('shuzu',resdata)*/
        setTimeout(() => {
            this.tableData = this.$store.state.currentWordsBookList   
            console.log('table',this.tableData)
        },150)  
    },
    Familiar(x) {
        if(x == 1) return '记得'
        else if(x==2) return '模糊'
        else return '不记得'
    }
  }
  
}
</script>

<style>
table {
    border-collapse: collapse;
    border: 1px solid rgb(200, 200, 200);
    border-collapse:collapse;
    font-size: 20px;
    width: 100%;
    text-align: left;
    border-right: none;
    border-left: none;
}
.word{
    width: 20%;
    text-align: left;
}
.feature{
    width: 20%;
    text-align: left;
}
thead,

tbody {
    background-color: #fff;
    font-size: 15px;
    border-right: none;
    border-left: none;
}
th{
    height: 30px;
}
td,th {
    border: 1px solid rgb(190, 190, 190);
    padding: 5px 10px;
    border-left: none;
    border-right: none;
}

td {
    text-align: left;
    border-left: none;
    border-right: none;
}

</style>
