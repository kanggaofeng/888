<template>
<transition name="dong">
<div class="addscuess" v-if='$store.state.status_bar_active'>
    <!-- <p class="addscuess_info">
      1232
    </p> -->
    <slot class="addscuess_info"></slot>
  </div>
</transition>

</template>
<script>
export default {
  // props:{
  //   "isActive":{
  //     required:true,
  //     type:Boolean
  //   }
  // },
  mounted:function(){

  }
}
</script>
<style scoped>
.addscuess{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  background:rgba(0, 0, 0, 0.7);
  text-align: center;
  line-height: .7rem;
  height: .7rem;
  width: 70%;
  border-radius: .12rem;
  color: #ffffff;
}
.dong-enter,.dong-leave-to{
  opacity: 0;
}
.dong-leave,.dong-enter-to{
  opacity: 1;
}
.dong-enter-active,.dong-leave-active{
  transition: opacity linear 1s;
}

</style>

