<template>
    <div class="wordslist">
        <table>
            <thead>
                <tr>
                    <th scope="col" class="word">单词</th>
                    <th scope="col" class="feature">词性</th>
                    <th scope="col" class="interpret">中文释义</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key="index-1" :id="index">
                    <td>{{ item.word }}</td>
                    <td>{{ item.feature }}</td>
                    <td>{{ item.interpret }}</td>
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
    }
  },
  watch:{
    toword: {
        handler(toward){
            var id = 0;
            var flag = false;
            for(let i = 0; i < this.tableData.length;i++){
                if(toward==this.tableData[i].word){
                    id = this.tableData[i].id;
                    flag = true;
                }
                
            }
            console.log(id);
            if(flag){
                //滚动到指定位置
                let target = document.getElementById(id)
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
  data() {
      return {
        tableData: [
        {id: 0 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 1 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 2 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 3 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 4 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 5 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 6 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 7 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 8 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 9 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 10 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 11 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 12 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 13 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 14 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 15 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 16 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 17 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 18 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 19 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 20 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 21 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 22 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 23 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 24 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 25 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 26 ,word: 'hello', feature: 'noun', interpret: '你好'},
        {id: 27 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 28 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 29 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 30 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 31 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        {id: 32 ,word: 'word', feature: 'noun', interpret: '文字，文档，词语'},
        ]
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
