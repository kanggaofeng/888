<template>
  <div class="container">
  <header-aa>我的717商城</header-aa>
    <section class="main">
      <div class="cen1">
       <div class="cen1-info">
          <div>
          <img src="../../img/001_03.jpg" alt="">
        </div>
        <div class="zi">77546456544</div>
       </div>
      </div>
      <div class="cen2">
        <div class="left">我的店铺</div>
        <div class="right">></div>
      </div>
      <div class="cen3">
        <div>
          <div>
            <img src="../../img/001_05.jpg" alt="">
          </div>
          <div>
            带货款
          </div>
        </div>
        <div>
          <div>
            <img src="../../img/001_05.jpg" alt="">
          </div>
          <div>
            带人民币
          </div>
        </div><div>
          <div>
            <img src="../../img/001_05.jpg" alt="">
          </div>
          <div>
            带发货
          </div>
        </div><div>
          <div>
            <img src="../../img/001_05.jpg" alt="">
          </div>
          <div>
            带收货
          </div>
        </div><div>
          <div>
            <img src="../../img/001_05.jpg" alt="">
          </div>
          <div>
            带货款
          </div>
        </div>
      </div>
      <div class="cen4">
        <ul>
          <li>
           <p>
              <i class="iconfont icon-wode"></i>
              <span>我的社区</span>
           </p>
            <b>></b>
          </li>
          <li>
            <p>
              <i class="iconfont icon-wode"></i>
              <span>账户余额</span>
           </p>
            <b>></b>
          </li>
          <li @click="go_address">
             <p>
              <i class="iconfont icon-wode"></i>
              <span>地址管理</span>
           </p>
            <b>></b>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import header from '../header/header.vue'
export default {
  methods:{
    go_address:function(){
       this.$router.push('/address')
    }
  },
 components:{
   
      'header-aa':header
    }
};
</script>
<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
.cen3{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
      background: #fff;
    width: 100%;
    padding: 0.2rem 0;
  div{
    flex: 1;
  }
}
html,
body {
  background: #eeeeee;
  font-family: PingFangSC-Regular, sans-serif;
}
.cen1-info{
  width: 30%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.zi{
   font-size: .13rem*2;
}

.cen1{
  background: #fc6e41;
  height: 0.78rem*2;
  text-align:center;
 position: relative;
  width: 100%;
  div:nth-child(2){
    color: white;
  }
}
.cen2{
  border-bottom: 1px solid #cccccc;
  height: 0.47rem*2;
  line-height: 0.47rem*2 ;
  font-size: .15rem*2;
  color: #fc4646;
  display: flex;
  padding: 0 .2rem;
  background: #fff;
  .left{
    flex: 1;
  }

}
.cen4{
  margin-top: .1rem;
  background: #fff;
  ul{
    width: 100%;
   li{
     line-height: .75rem;
     border-bottom: 1px solid #ccc;
     display: flex;
     justify-content: space-between;
    p{
       padding: 0 .1rem;
    }
    b{
       padding: 0 .1rem;

    }
   }
  }
}
</style>



