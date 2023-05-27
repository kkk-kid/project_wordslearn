<template>
    <div class="register">
        <div>
            <div><h1>账号登陆</h1></div>
            <div class="info">
            <tr>
                <td>账号</td>
                <td><el-input v-model="input1" placeholder="请输入内容"></el-input></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><el-input placeholder="请输入密码" v-model="input2" show-password></el-input></td>
            </tr>
            <tr>
                <td>邮箱</td>
                <td><el-input v-model="input3" placeholder="请输入内容"></el-input></td>
            </tr>
            <tr>
                <td>电话</td>
                <td><el-input v-model="input4" placeholder="请输入内容"></el-input></td>
            </tr>
            <tr>
                <td>性别</td>
                <td><el-input v-model="input5" placeholder="请输入内容"></el-input></td>
            </tr>
            <tr>
                <td></td>
                <td><el-button type="primary" @click="Register()">注册</el-button></td>
            </tr>
                
                
                  
        </div>
        </div>

    </div>
</template>

<script>
import { postRegister } from '@/network/register';

export default {
  name: 'RegisterFrame',
  data() {
    return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: ''
    }
  },
  methods: {
    Register() {
        if(this.input5 == '男')
        {
            postRegister(this.input1,this.input2,this.input3,this.input4,1).then(res => {
                console.log(res)
                alert(res.msg)
                this.$router.replace('/login/signin')
            }).catch(err => {
                alert(err)
            })
        }
        else {
            postRegister(this.input1,this.input2,this.input3,this.input4,0).then(res => {
                console.log(res)
                alert(res.msg)
                this.$router.replace('/login/signin')
            }).catch(err => {
                alert(err)
            })
        }
    }
  }
}
</script>

<style scoped>
.register{
    margin-top: 10%;
    padding-top: 5%;
    text-align: center;
    background-color: rgb(255, 255, 255);
    margin-left: 60%;
    width: 30%;
    height: 500px;
    border-radius: 15px;
    opacity: 0.8;
}
.register > div{
    margin-left: 6%;
    
}
.el-input{
    width: 300px;
    
}
.el-button{
    width: 300px;
    margin-top: 15px;
}
tr td{
    width: 100px;
    height: 60px;
}
</style>
