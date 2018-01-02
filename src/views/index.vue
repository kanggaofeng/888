<template>
  <div class="wrap">
    <router-view ></router-view>
    <ul class="nav">
      <router-link :tag="'li'" :to="{name:'home'}">
        <span class="iconfont icon-shouye"> </span>
        <span>首页</span>
      </router-link>
      <router-link :tag="'li'" :to="{name:'catagory'}">
        <span class="iconfont icon-saoma"></span>
        <span>分类</span>
      </router-link>
      <router-link :tag="'li'" :to="{name:'cart'}">
        <span class="iconfont icon-gouwuche"></span>
        <span>购物车</span>
      </router-link>
      <router-link :tag="'li'" :to="{name:'mine'}">
        <span class="iconfont icon-wode"></span>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default{


  }
</script>
<style >
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,html{
   height: 100%;
  width: 100%;
}
.wrap{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.container{
  width: 100%;
  height: 100%;
  flex: 1;
  background: #eeeeee;

}
.nav{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: 1px solid #eeeeee;
  padding: .05rem;
  padding-top: .05rem;
}
.nav li{
  flex: 1;

}
.nav li span{
  display: block;
}
.router-link-active{
  color: red;
}
</style>

