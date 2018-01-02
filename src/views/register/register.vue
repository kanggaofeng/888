<template>
    <div class="register">
      <h1>
        <span>注册</span><span class="rig"  @click="go_deng">登录</span>
      </h1>
      <div>用户：<input type="text" v-model.trim="user" placeholder="请输入正确的手机号"></div>
      <div>密码：<input type="password" v-model.trim="pwd" placeholder="请输入密码"></div>
      <input type="submit" value="注册" class="btn" @click="go_to_register">
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    go_deng(){
      this.$router.replace({
        name:'login'
      })
    },
    go_to_register() {
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
        .post("/mobile/user/register", {
          user: this.user,
          pwd: this.pwd
        })
        .then(res => {
          console.log(res)
         if(res.data=='scuess'){
           this.$toasted.error('注册成功,请点击登录')
         }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  font-size: 0.32rem;
}

.login div {
  margin: 0.1rem;
}
.register {
  .btn {
    padding: 0.1rem 0.2rem;
    background: orange;
    outline: none;
    border: none;
    border-radius: 0.12rem;
  }
  div {
    margin-bottom: 0.1rem;
  }
}
.login div {
  margin: 0.5rem;
}
.rig{
  float: right;
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
