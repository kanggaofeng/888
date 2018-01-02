<template>
<div class="cart-item">
    <div class="checked" @click="change">
        <span class="iconfont icon-xuanze"  :class="{'icon-check':isselected}"></span>
    </div>
    <div class="img">
        <span class="img-wrap">
          <img :src="'http://www.lb717.com'+data.obj_data" alt="">
        </span>
    </div>
    <div class="info">
        <p class="desc">{{data.goods_name}}</p>
        <div class="count-area">
            <div class="price"><sub>￥</sub>{{data.discount_price}}</div>
            <div class="count">
                <span class="iconfont icon-add" @click="jia">+</span>
                <span class="num">{{data.count}}</span>
                <span class="iconfont icon-move" @click="jian">-</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      isselected:true,
      aa:false,
      num:0
    }
  },
  props:{
    'data':{
      required:true,
      type:Object
    }
  },
  methods:{
    change(){
      this.isselected = !this.isselected;
    },
    jia(){
       this.$store.commit("jia", {
         goods_id:this.data.goods_id,
         count:++this.data.count
       });
       this.$forceUpdate()
    },
    jian(){
 this.$store.commit("jian", {
         goods_id:this.data.goods_id,
         count:--this.data.count
       });
       this.$forceUpdate()
    }
  },

}
</script>
<style scoped>
    .cart-item{
        display: flex;
        height: 2.4rem;
        width: 100%;
    }
    .checked{
        flex: 38;
        display: flex;

        align-items: center;
        justify-content: center;
    }
    .icon-check{
        color:#fff;
        background: #ff0000;
        border-color:#fff !important;
    }
    .icon-xuanze{
        display: inline-block;
        width: 0.46rem;
        height: 0.46rem;
        text-align: center;
        line-height: 0.46rem;
        border: 1px solid #ccc;
        border-radius: 100%;
        background: white;
    }
    .img{
        flex:100;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img-wrap{
        display: inline-block;
        width: 2rem;
        height: 2rem;
        border-radius: 0.1rem;
        border: 1px solid #ccc;
    }
    img{
        width: 100%;
    }
    .info{
        flex: 235;
        width: 0;
        padding: 0.2rem;
    }
    .desc{
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .desc,.count-area{
        height: 1rem;
        line-height: 1rem;
        font-size: 0.24rem;
    }
    .count-area{
        display: flex;
    }
    .price{
        flex:1;
        color: #ff0000;
        font-size: 0.32rem;
    }
    .count{
        width: 50%;
        flex: 1;
        display: flex;
        align-items: center;
    }
    .count span{
        flex: 1;
        border: 1px solid #ccc;
        height: 0.62rem;
        line-height: 0.62rem;
        text-align: center;
    }
    .count span:nth-of-type(2){
        flex:2;
    }
</style>
