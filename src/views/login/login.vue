
<template>
    <div class="login">
      <h1>
        <span>登录</span><span class="rig" @click="go_to_register" >注册</span>
      </h1>
      <div>用户：<input type="text" v-model.trim="user" placeholder="请输入正确的手机号"></div>
      <div>密码：<input type="password" v-model.trim="pwd" placeholder="请输入密码"></div>
      <button @click="go_to_login" class="btn">登录</button>
    </div>

</template>
<script>
import {setCookie} from '../../utils/untial'

export default {
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    go_to_register(){
      this.$router.push({name:'register'})
    },
    go_to_login: function() {
      var reg_user = /^1[3578]\{9}$/;
      var reg_pwd = /\d{6,12}/;
      //下面用到个插件 做弹出框的
      if (this.user == "") {
        this.$toasted.show("请输入用户信息");
        return;
      }
      if (this.pwd == "") {
        this.$toasted.show("请输入密码");
        return;
      }

      this.$http
        .post("/mobile/user/login", {
          user: this.user,
          pwd: this.pwd
        })
        .then(res => {
          console.log(res);
          if (res.data.msg == "scuess") {
            setCookie("token", res.data.token);
             this.$toasted.error('登录成功')
            this.$router.push("/index/mine");
          }else{
            this.$toasted.error('登录失败')
          }
        });
    }
  }
};
</script>
<style scoped>
.login {
  font-size: 0.32rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login div {
  margin: 0.5rem;
}
.rig{
  float: right;
  color: yellow;
}
h1{
  padding: 0 .2rem;
  line-height: .6rem;
  border-bottom: 1px solid #cccccc;
}
.btn{
  outline:none;
  border: none;
  padding: .1rem .2rem;
}
</style>
