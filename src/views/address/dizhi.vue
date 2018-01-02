<template>
  <div class="address_cen">
    <div>
      <span>{{dataval.name}}</span> <span> {{dataval.phone}}</span>
    </div>
    <div class="city">
      <span>{{dataval.address.join(' ')}}</span>
    </div>
    <div class="cen3">
      <div class="adddress_left">
        <span class="dui" :class="{'selected':isselected}" @click="change">√</span><span>设为默认</span>
      </div>
      <div class="adddress_right">
        <span>编辑</span><span>删除</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'address_item',
  props:{
    dataval:{
      type:Object,
      required:true
    }
  },
  data(){
      return{
         isselected:true
      }
    },
    methods:{
      change(){
           this.isselected = !this.isselected;
      }
    }
}
</script>
<style lang="scss" scoped>
span{
  padding: .1rem .15rem;
  margin: 0 .01rem;
}
.adddress_left,.adddress_right{
  display: flex;
  align-items: center;
}
.dui{
  border: 1px solid black;
  border-radius: 50%;
  display: block;
  padding: 0;
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}
.address_cen{
  border: 1px solid #cccccc;
  font-size: .23rem;
  line-height: .6rem;
  margin: .2rem;
}
.cen3{
  display: flex;
  .adddress_left{
    flex: 1;
  }
}
.city{
  border-bottom: 1px solid #cccccc;
}
.selected{
    background: #ff0000;
    border-color:#fff;
}
</style>
