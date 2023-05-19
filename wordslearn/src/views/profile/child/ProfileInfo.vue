<template>
  <div>
    <el-card class="box-card" >
    <div slot="header" class="clearfix">
      <h1>个人资料</h1>     
      <el-button style="float: right; padding: 3px 0 width:20px" type="primary" @click="dialogFormVisible = true">修改资料</el-button>
      <el-dialog title="修改资料址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="昵称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" :placeholder="username"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-input v-model="form.sex" autocomplete="off" :placeholder="sex"></el-input>
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
    <div class="text item">用户名：<span>{{ username }}</span></div>
    <div class="text item">昵称：<span>{{ nickname }}</span></div>
    <div class="text item">性别：<span>{{ sex }}</span></div>
    <div class="text item">电话号码：<span>{{ phonenumber }}</span></div>
  </el-card>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',
  data() {
    return {
        username: 'Rachel',
        nickname: 'Rach',
        sex: 'f',
        phonenumber: '15804452365',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          sex: '',
          number: '',
        },
        formLabelWidth: '10%'
    }
  },
  methods: {
        checkClick(){
            this.dialogFormVisible = false;
            this.nickname = (this.form.name == "") ? this.nickname :this.form.name;
            this.sex = (this.form.sex == "")? this.sex : this.form.sex;
            this.phonenumber = (this.form.number=="")? this.phonenumber : this.form.number;
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