<template>
    <div class="signin">
        <div>
            <div><h1>账号登陆</h1></div>
            <div class="info">
            <tr>
                <td>账号</td>
                <td><el-input v-model="username" placeholder="请输入内容"></el-input></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><el-input placeholder="请输入密码" v-model="password" show-password></el-input></td>
            </tr>
            <tr>
                <td></td>
                <td><el-button type="primary" @click="Login()">登录</el-button>   </td>
            </tr>
            <tr>
                <td></td>
                <td><el-button type="primary" @click="RClick()">注册</el-button></td>
            </tr>
                
                
                  
        </div>
        </div>

    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { postLogin } from '@/network/login';

export default {
  name: 'SignIn',
  data() {
    return {
        username: '',
        password: '',
        usertoken: ''
    }
  },
  methods: {
    RClick(){
        this.$router.push('/login/register')
    },
    ...mapMutations(['changeLogin']),
    Login() {
        let _this = this;
        if (this.username === '' || this.password === '') {
            alert('账号或密码不能为空');
        } else {
            postLogin(_this.username,_this.password).then(res => {
            //console.log(res.data);
            _this.userToken =  res.data.token;
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken });
            _this.$store.commit('changeLogin',{ Authorization: _this.userToken })
            _this.$router.push('/home');
            alert('登录成功');
            }).catch(err => {
                
            alert('账号或密码错误');
            console.log(err);
        });
      }
    }
  }
}
</script>

<style scoped>
.signin{
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
.signin > div{
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
