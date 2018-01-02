<template>
  <div class="container">
   <h1>购物车</h1>
    <go-shop v-for="(x,index) in $store.state.cart_list" :key='index' :data='x'></go-shop>
  </div>
</template>

<script>
import go_shop from './go_shop/go_shop.vue'
  export default{
    components:{
      'go-shop':go_shop
    }
  }
</script>
<style scoped>
h1{
  text-align: center;
  font-size: .22rem;
  line-height: .6rem;
  border-bottom: 1px solid #eeeeee;
}
</style>
