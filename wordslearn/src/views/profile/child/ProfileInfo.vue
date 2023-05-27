<template>
  <div>
    <el-card class="box-card" >
    <div slot="header" class="clearfix">
      <h1>个人资料</h1>     
      <el-button style="float: right; padding: 3px 0 width:20px" type="primary" @click="dialogFormVisible = true">修改资料</el-button>
      <el-dialog title="修改资料址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-input v-model="form.sex" autocomplete="off" :placeholder="sex"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.mail" autocomplete="off" :placeholder="mail"></el-input>
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth">
                    <el-input v-model="form.number" autocomplete="off" :placeholder="phonenumber"></el-input>
                </el-form-item>
                
        </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="checkClick()">确 定</el-button>
    </div>
</el-dialog>


    </div>
    <div class="text item">用户编号：<span>{{ username }}</span></div>
    <div class="text item">用户名：<span>{{ nickname }}</span></div>
    <div class="text item">性别：<span>{{ sex }}</span></div>
    <div class="text item">电话：<span>{{ phonenumber }}</span></div>
    <div class="text item">邮箱：<span>{{ mail }}</span></div>
  </el-card>
  </div>
</template>

<script>
import {getProfileInfo,putProfileInfo} from "@/network/profile"

export default {
  name: 'ProfileInfo',
  data() {
    return {
        username: '',
        nickname: '',
        sex: '',
        phonenumber: '',
        mail: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          sex: '',
          number: '',
          mail: '',
        },
        formLabelWidth: '10%'
    }
  },
  created() {
    this.getinfo()
  },
  methods: {
        checkClick(){
            this.dialogFormVisible = false;
            new Promise(()=> {
              this.sex = (this.form.sex == "")? this.sex : this.form.sex;
              this.phonenumber = (this.form.number=="")? this.phonenumber : this.form.number;
              this.mail = (this.form.mail=="")? this.mail : this.form.mail;
              let gender;
              if(this.form.sex == '男') gender = 1;
              else gender = 0
              setTimeout(() => {
                putProfileInfo(this.username,gender,Number(this.phonenumber),this.mail)
                console.log(this.phonenumber)
              },2000)   
              setTimeout(() => {
                this.getinfo()
              },3000)         
            })
            
        },
        getinfo() {
          getProfileInfo().then(res => {         
                this.$store.commit('setuserId',res.data.id)    
                this.username = res.data.id;
                this.nickname = res.data.userName;
                this.sex = res.data.gender? '男' : '女';
                this.phonenumber = res.data.phone;
                this.mail = res.data.email
                console.log('res',res)                                              
          })
        }
    }
}
</script>

<style>
    .text {
      font-size: 24px;
      line-height: 200%;
      text-align: left;
    }
  
    .item {
      margin-bottom: 1px;
    }
  
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  
    .box-card {
      width: 50%;
      height: 800px;
      margin-left: 25%;
    }
</style>