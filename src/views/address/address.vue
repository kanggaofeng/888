<template>
<div class="container">
 <header-aa>收货地址</header-aa>
 <div class="main">
   <address-item v-for="(val,ind) in data" :key="ind" :dataval="val"></address-item>
   <div class="add">
     <h1 @click="add">添加地址</h1>
   </div>
 </div>
</div>
</template>
<script>
import header from '../header/header.vue';
import address_item from './dizhi';
import {getCook_key} from '../../utils/untial.js'
export default {
  data(){
    return{
      data:[]
    }
  },
 components:{
    'header-aa':header,
    'address-item':address_item,
  },
  methods:{
    add:function(){
      this.$router.push('address_list')
    }
  },
  created(){

        this.axios.post('/get/address',{token:getCook_key('token')}).then(res => {
          console.log(res)
            if(res){
                this.data = res.data
                console.log(this.data)
            }
        })
    },
}
</script>
<style lang="scss" scoped>
.container{
  width: 100%;

}
.add{
  width: 100%;
  h1{
  font-size: .36rem;
  background: red;
  color: white;
  border-radius: .12rem;
  width: 40%;
  text-align: center;
  margin: auto;
  margin-top: .2rem;
}
}


</style>



