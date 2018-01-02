<template>
   <header class="header">
     <span @click="back">←</span>
      <h1><slot></slot></h1>
    </header>
</template>
<script>
export default {
 methods:{
      back(){
          this.$router.back()
      }
  }
}
</script>
<style scoped>
.header {
  background: #fff;
  height: .8rem;
  font-size: .26rem;
  text-align: center;
  line-height: .8rem;
  color: #333333;
  border-bottom: 1px solid #cccccc;
  padding: 0 .1rem;
}
span{
  font-weight: bold;
  float: left;

}
</style>


