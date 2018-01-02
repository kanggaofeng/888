<template>
    <div class="container">
        <header class="header">
            <div class="searchBox">
                <i class="iconfont icon-search_light"></i>
                <input type="text" class="search" id="searchName" placeholder="请输入您要购买的商品" v-model="list_shuang">
            </div>
            <span class="return" @click="search">搜索</span>
        </header>
        <div id="main">
            <nav class="nav">
                <span>最近搜索</span><i class="iconfont icon-guanbi1" @click="clear"></i>
            </nav>
            <div class="host-list">
                <p class="recode" v-if="isRecode">暂无搜索记录...</p>
                <div v-else>
                    <span v-for="(x,i) in historystorelist" :key="i">{{x}}</span>
                </div>
            </div>
            <div class="hot-list">
                <h4>大家都在搜</h4>
                <span>粽子</span>
                <span>锅巴</span>
                <span>酱</span>
                <span>小吃</span>
                <span>零食</span>
                <span>干果</span>
                <span>特产</span>
                <span>油</span>
                <span>大米</span>
                <span>面粉</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data:function(){
    return{
      isRecode:true,
      list_shuang:'',
      historystorelist:[]
    }
  },
  methods:{
    search(){
      // 我要把 搜索的东西放在里面；
      if(this.list_shuang=='')return
      // 获取本地数据
      let ls = localStorage;
      let historystore=ls.getItem('list_datas');
      if(historystore){
        historystore = JSON.parse(historystore)
      }else{
        historystore =[]
      }
      historystore.push(this.list_shuang)
      ls.setItem('list_datas',JSON.stringify(historystore))
      this.isRecode = false;
      this.historystorelist =  historystore
      this.list_shuang=''
    },
    clear(){
            localStorage.removeItem('list_datas');
            this.isRecode = true;
        }
  },
  mounted(){
    var h1 = localStorage.getItem('list_datas');
  console.log(h1)
    if(h1){
       this.isRecode=false;
    this.historystorelist = JSON.parse(h1)
    }

  }
}
</script>
<style scoped>
.container{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 0.88rem;
    border-bottom: 1px solid #ccc;
}
h4{
  line-height: 1rem;
}
.searchBox{
    width: 82%;
    display: inline-block;
    position: relative;
    line-height: .88rem;
}
.searchBox .iconfont{
    position: absolute;
    left:.5rem;
}
.search{
    width: 90%;
    height: 0.6rem;
    margin: 0 5%;
    border:none;
    border-radius: .1rem;
    background: #f5f5f5;
    padding-left: .7rem;
    font-size: .24rem;
}
.return {
    display: inline-block;
    background: #f5f5f5;
    width: 0.7rem;
    height: 0.5rem;
    text-align: center;
    line-height: .5rem;
    margin-top: 0.19rem;
    border-radius: .1rem;
    color:#666;
    font-size: 0.24rem;
}
.main{
    width: 100%;
    height: auto;
}
.nav{
    height: 0.7rem;
    font-size: .26rem;
    display: flex;
    justify-content: space-between;
    padding: 0 6%;
    align-items: center;
}
.host-list{
    min-height: 2rem;
    padding: 0 6%;
    font-size: .24rem;
}
.hot-list{
    padding: 0 6%;
    font-size: .24rem;
}
.hot-list span,.host-list span{
    display: inline-block;
    padding: .1rem .2rem;
    border:1px solid #ccc;
    border-radius: .1rem;
    color:#666;
    margin: .1rem .2rem .1rem 0;
}
</style>
