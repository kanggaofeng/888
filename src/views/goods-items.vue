<template>
    <dl class="goods-item clear" @click="go_detial">
        <dt><img :src="'http://www.lb717.com'+data.obj_data" alt=""></dt>
        <dd>
            <p class="goods-info">
                {{data.goods_name}}
            </p>

            <p class="goods-price clear">
                <span class="price">{{data.discount_price}}</span>
                <span class="iconfont icon-gouwuche cart" @click.stop="addcart"></span>
            </p>

        </dd>

    </dl>
</template>

<script>
// 组织事件冒泡 加 stop 他点击的是时候
// 点击的图片 跳路由的时候 把params 传过来
import { getCook_key } from "../utils/untial.js";
export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    addcart() {
      //alert(55) 点滚物车的 时候
      //点的时候 让他 获取 数据 用 axios,
      var vm = this
      this.axios.post("/user/Cart/addCart", {
        token:getCook_key('token'),
        goods_id:this.data.goods_id,
        attr_id:1,
      }).then(res => {
        console.log(res)
       if(res.data.code==1001){
        this.$toasted.show('购物车添加成功')
          this.$store.commit('updated_cart_list',this.data)
       }
       if(res.data.code==1000){
          this.$router.push({name:'login'});
          return;
        }
      });
    },
    go_detial() {
      // 每个商品都有 固定的id  传过去
      // this.$router.push('/detial',{
      //   id:this.data.goods_id
      // })
      this.$router.push({
        name: "detial",
        params: {
          id: this.data.goods_id
        }
      });
    }
  },
  created() {
  //  console.log(this.data);
  }
};
//http://www.lb717.com//public/upload/temp/2017/07-17/a1324f85faeab4bb134a74f5d9f1b1e4.jpg
//http://www.lb717.com/public/upload/temp/2017/07-10/2fd4aaa9dc8720412f105b2519ece2c4.jpg
</script>
<style scoped>
.goods-item {
  width: 49%;
  float: left;
  overflow: hidden;
  float: left;
  background: #fff;
  margin: 0.5%;
}
.goods-item img {
  width: 100%;
  height: 100%;
}
.goods-item dd {
  line-height: 1.5;
}
.goods-item dt {
  height: 3rem;
}
.goods-info {
  text-align: center;
  font-size: 0.24rem;
  height: 0.4rem;
  overflow: hidden;
}
.price {
  float: left;
  padding: 5px 20px;
  font-size: 0.32rem;
}
.cart {
  float: right;
  padding: 5px 20px;
}
</style>
