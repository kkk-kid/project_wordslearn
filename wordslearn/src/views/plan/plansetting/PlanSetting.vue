<template>
    <div class="plansetting">
        <table>           
            <tbody>
                <tr>
                    <td>开始日期</td>
                    <td>
                        
                            <el-date-picker
                                v-model="selectBookdate"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd">
                            </el-date-picker>
                        
                    </td>
                    <td><el-button @click="dialogTableVisible1 = true">修改</el-button></td>
                </tr>
                <tr>
                    <td>计划天数</td>
                    <td>{{ planDays }}</td>
                    <td><el-button @click="dialogTableVisible2 = true">修改</el-button></td>
                </tr>
                <tr>
                    <td>日单词量</td>
                    
                    <td>{{ perDayNumber }}</td>
                    <td><el-button @click="dialogTableVisible3 = true">修改</el-button></td>
                </tr>
                <tr>
                    <td>选择单词书</td>
                    <td>{{ this.$store.state.BookList[wordbookId-1].name }}</td>
                    <td><el-button @click="dialogTableVisible4 = true">修改</el-button></td>
                </tr>      
                             
            </tbody>
        </table>
        <div>
            <el-dialog title="修改开始日期" :visible.sync="dialogTableVisible1">
                            <el-form :model="formStartDate" >
                                <el-form-item label="开始日期" >
                                    <el-date-picker
                                        v-model="formStartDate"
                                        type="date"
                                        placeholder="选择日期"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd">
                                    </el-date-picker>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogTableVisible1 = false">取 消</el-button>
                                    <el-button type="primary" @click="checkClick1()">确 定</el-button>
                             </div>
            </el-dialog>
            <el-dialog title="修改计划天数" :visible.sync="dialogTableVisible2">
                            <el-form :model="formPlanDays" >
                                <el-form-item label="计划天数" >
                                    <el-input v-model="formPlanDays" autocomplete="off" :placeholder="planDays"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogTableVisible2 = false">取 消</el-button>
                                    <el-button type="primary" @click="checkClick2()">确 定</el-button>
                            </div>
            </el-dialog>
            <el-dialog title="修改每日单词量" :visible.sync="dialogTableVisible3">
                            <el-form :model="formPerDayNumber" >
                                <el-form-item label="日单词量" >
                                    <el-input v-model="formPerDayNumber" autocomplete="off" :placeholder="perDayNumber"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogTableVisible3 = false">取 消</el-button>
                                    <el-button type="primary" @click="checkClick3()">确 定</el-button>
                            </div>
            </el-dialog>
            <el-dialog title="修改选择单词书" :visible.sync="dialogTableVisible4">
                            <el-form :model="formSelectBook" >
                                <el-form-item label="选择单词书" >
                                    <select name="books" id="book-select" v-model="formSelectBook" >
                                        <option :value="item" 
                                            v-for="item in this.$store.state.BookList" 
                                            :label="item.name"
                                            :key="item.id"
                                            >{{ item.name }}</option>           
                                    </select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogTableVisible4 = false">取 消</el-button>
                                    <el-button type="primary" @click="checkClick4()">确 定</el-button>
                            </div>
            </el-dialog>
        </div>
        
    </div>
</template>

<script>
import { postLearnPlan } from '@/network/plan';
import { getWordLearnPlan } from '@/network/home';


export default {
  name: 'PlanSetting',
  data() {     
      return {
        wordbookId: 0,
        selectBook: new Number,
        selectBookdate: '',
        planDays: new Number,
        perDayNumber: new Number,
        
        dialogTableVisible1: false,
        dialogTableVisible2: false,
        dialogTableVisible3: false,
        dialogTableVisible4: false,
        dialogFormVisible: false,
        
        formSelectBook: '',
        formStartDate: '',
        formPlanDays: '',
        formPerDayNumber: '',

        formLabelWidth: '100px'
      };
    },
    created() {
        this.getPlan()
        console.log('计划单词书',this.$store.state.BookList)
    },
    methods: {
        getPlan(){
            getWordLearnPlan(this.$store.state.userId).then(res => {
                this.selectBookdate = res.data.startDate
                this.planDays = res.data.totalDays
                this.perDayNumber = res.data.wordsPerDay
                this.wordbookId = res.data.wordbookId
                console.log('获得',res.data)
            })
        },
        checkClick1() {
            postLearnPlan(this.$store.state.userId,this.formStartDate,this.planDays,this.perDayNumber,this.wordbookId)
            this.dialogTableVisible1 = false
            setTimeout(() => {
                this.getPlan()
            },800)
        },
        checkClick2() {
            postLearnPlan(this.$store.state.userId,this.selectBookdate,this.formPlanDays,this.perDayNumber,this.wordbookId)
            this.dialogTableVisible2 = false
            
            setTimeout(() => {
                this.getPlan()
            },800)
        },
        checkClick3() {
            postLearnPlan(this.$store.state.userId,this.selectBookdate,this.planDays,this.formPerDayNumber,this.wordbookId)
            this.dialogTableVisible3 = false
            
            setTimeout(() => {
                this.getPlan()
            },800)
        },
        checkClick4() {
            postLearnPlan(this.$store.state.userId,this.selectBookdate,this.planDays,this.perDayNumber,this.formSelectBook.id)
            this.dialogTableVisible4 = false
            
            setTimeout(() => {
                this.getPlan()
            },800)
        },
    },
   
}
</script>

<style>
.plansetting > table {
    border-collapse: collapse;
    border: 1px solid rgb(200, 200, 200);
    border-collapse:collapse;
    line-height: 100px;
    width: 100%;
    text-align: left;
    border: none;
    
}


tbody {
    font-size: 20px;
    border: none;
    
}

td {
    border: 1px solid rgb(190, 190, 190);
    padding: 5px 10px;
    border: none;
    width: 50px;
    height: 30px;
    text-align: left;
    border-left: none;
    border-right: none;
    
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

.el-input{
    width: 130px;
}

</style>
