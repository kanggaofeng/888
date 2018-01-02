<template>
  <div class="container">

      <header class="header">
      <div>717</div>
      <div><input type="text" placeholder="请输入您购买的东西" @focus="serch"></div>
      <div>我的店铺</div>
      <div>消息</div>
    </header>

  <div class="aa" ref="shikou" v-on:scroll='getScroller'>
      <section class="main">
      <div ref="scrollerheight">
      <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../../img/banner.png" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="../../img/banner.png" alt="">
                </div>
            </div>
          <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>

      </div>
      <div class="cen1">
          <div>
        <span>王</span>
        <span>你好</span>
      </div>
      <div>
        <span>姐</span>
        <span>你好</span>
      </div>
      <div>
        <span>接</span>
        <span>你好</span>
      </div>
      <div>
        <span>杨</span>
        <span>你好</span>
      </div>
      <div>
        <span>凯</span>
        <span>你好</span>
      </div>
      <div>
        <span>康</span>
        <span>你好</span>
      </div>
      <div>
        <span> 高</span>
        <span>你好</span>
      </div>
      <div>
        <span>峰</span>
        <span>你好</span>
      </div>
      </div>
    <div class="cen2">
        <div class="left">
          <div>动态</div>
          <div>商城</div>
        </div>
         <div class="right">
        <div class="info">
          <p>717安全食品商城周年庆,暑假放假嗨不停好吃好玩</p>
          <p>717社区服务功能上线了,抢红包,放心食品,陪你度过假期</p>
        </div>
      </div>
      </div>
    <div class="cen3">
      <img src="../../img/1111_02.jpg" alt="">
    </div>
    <div class="coupon">
					<div class="coupon-left">
					<img src="../../img/home1.png" alt="">
					</div>
					<div class="coupon-right">
						<div class="coupon-right-top">
              	<img src="../../img/gaodian.png" alt="">
						</div>
						<div class="coupon-right-bottom">
              	<img src="../../img/ruwei.png" alt="">
						</div>
					</div>
				</div>
         <div class="good-lists clear">
              <goods-item v-for="(x,i) in goods_list" :data="x" :key="i"></goods-item>
        </div>
       <div id="tip">{{remind}}</div>
      </div>
      <!-- <add-scuesss>购物车添加成功</add-scuesss> -->
    </section>
  </div>
  </div>

</template>
<script>

import goods_item from "../goods-items.vue";
import add_scuesss from "../add_scuesss.vue";


export default {
  name: "home",
  data() {
    return {
      goods_list: [],
      channel_id: 2,
      flag: true,
      remind: "上啦加载更多...",
    };
  },
  methods: {
    serch:function(){
      this.$router.push('/search')
    },
    getScroller: function() {
      if (!this.flag) return;
      //  console.log(this.$refs.shikou.scrollTop)
      let { scrollerheight, shikou } = this.$refs;
      let scrollerheights = scrollerheight.offsetHeight;
      let shikouheight = shikou.offsetHeight;
      let scrollerTop = shikou.scrollTop;
      if (scrollerheights - (shikouheight + scrollerTop) <= 30) {
        // 通过开关来控制
        this.flag = false;
        // console.log(6666)
        var vm = this;
        this.axios
          .post("/mall/index/getGoodsChannel", { channel_id: ++vm.channel_id })
          .then(res => {
            vm.goods_list = vm.goods_list.concat(res.data.data.data);
         //   console.log(vm.goods_list)
             vm.flag = true
              if (res.data.data.data.length==0){
          vm.remind = '已经没有底线了'
        }
          });
      }
    }
  },
  updated: function() {
    //dom 生成在页面上 必须用这个 属性
    this.$nextTick(function() {
     // console.log(this.$refs.scrollerheight.offsetHeight);
    });
  },
  mounted: function() {
   // console.log(this.$refs.shikou.offsetHeight);
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      autoplay: 1000
    });
    var vm = this;
    this.axios
      .post("/mall/index/getGoodsChannel", { channel_id:2 })
      .then(res => {
        vm.goods_list = res.data.data.data;
      //  console.log(vm.goods_list)
      });
  },
  components: {
    "goods-item": goods_item,
    "add-scuesss":add_scuesss
  }
};
</script>
<style scoped src="../../common/home.css">
 .good-lists {
  margin-top: 0.1rem;
}

</style>
