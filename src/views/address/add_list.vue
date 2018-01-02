<template>

  <div id="container">
    <header-aa>收货人</header-aa>
    <div id="main">
      <div class="cen1">
       <div> <input type="text" placeholder="收货人姓名" v-model.trim="name"></div>
        <div>
          <input type="text" placeholder="手机号" v-model.trim="phone">
        </div>
      </div>
      <div class="cen2">
        <select name="" id="" v-model="selected_sheng">
          <option value="1">请选择省</option>
          <option v-for="(val,ind)  in sheng" :key='ind' :value="val">{{val}}</option>
        </select>
        <select name="" id="" v-model="selected_city">
          <option value="1">请选择市</option>
            <option v-for="(val,ind)  in city" :key='ind' :value="val.name">{{val.name}}</option>
        </select>
      </div>
      <div class="cen3">
          <select name="" id="" v-model="selected_area">
          <option value="1">请选择区</option>
           <option v-for="(val,ind)  in area" :key='ind' :value="val">{{val}}</option>
        </select>
      </div>
      <div class="cen4">
        <input type="text" placeholder="详细地址" v-model.trim="address_di">
        <span ><i class="default">√</i><i>设为默认地址</i></span>
      </div>
      <div class="bao">
         <button class="btn" @click="save">保存</button>
      </div>
		</div>
	</div>
</template>
<script>
import header from "../header/header.vue";
import { getCook_key } from "../../utils/untial.js";
export default {
  data() {
    return {
      name: "",
      phone: "",
      sheng: [],
      city: [],
      area: [],
      selected_sheng: "",
      selected_city: "",
      selected_area: "",
      info: "",
      address_di: "  "
    };
  },
  components: {
    "header-aa": header
  },
  created: function() {
    this.axios.get("/user/districts/index").then(res => {
     // console.log(res.data);
      this.info = res.data.data;
      res.data.data.forEach((val, ind) => {
        this.sheng.push(val.name);
      });
    });
  },
  watch: {
    selected_sheng: function(newval) {
      console.log(newval);
      this.info.forEach(item => {
        if (item.name == newval) {
          this.city = item.city;
          //console.log(this.city);
        }
      });
    },
    selected_city: function(newval) {
      this.city.forEach(item => {
        if (item.name == newval) {
          this.area = item.area;
        }
      });
    }
  },
  methods: {
    save() {
      let name_reg = /[\w+\u4e00-\u9fa5]/;
      let phone_reg = /^1[3578]\d{9}$/;
      // if (!name_reg.test(this.name)) {
      //   this.$toasted.show("请填写正确的名字");
      //   return;
      // }
      // if (!phone_reg.test(this.phone)) {
      //   this.$toasted.show("请填写正确的手机号码");
      //   return;
      // }

      // if (!this.selected_sheng || !this.selected_city || !this.selected_area) {
      //   this.$toasted.show("请选择省市区信息");
      //   return;
      // }
      // if (!this.address_di) {
      //   this.$toasted.show("请填写街道信息");
      //   return;
      // }
      var vm = this;
      this.axios
        .post("/user/address", {
          name: this.name,
          phone: this.phone,
          address: [
            this.selected_sheng,
            this.selected_city,
            this.selected_area,
            this.address_di
          ],
          token: getCook_key("token")
        })
        .then(function(res) {
          console.log(res.data);
          if (res.data.code == "1000") {
            vm.$router.push({ name: "login", query: { from: vm.$route.name } });
            return;
          }
          if (res.data.code == "1001") {
            vm.$router.push({ name: "address" });
          }
          //失效的时候
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.bao {
  width: 100%;
  text-align: center;
  .btn {
    padding: 0.1rem 0.8rem;
    background: red;
    outline: none;
    border: none;
    border-radius: 0.12rem;
    color: white;
  }
}
.cen2 {
  display: flex;
  margin: 0.2rem;
  select {
    width: 30%;
    text-align: center;
    height: 0.66rem;
  }
  select:nth-child(2) {
    margin-left: 0.4rem;
  }
}
.cen3 {
  margin: 0.2rem;
  select {
    width: 100%;
    height: 0.66rem;
  }
}
.cen4 {
  margin: 0.2rem;
  input {
    width: 100%;
    height: 0.66rem;
  }
  .default {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    border: 1px solid black;
    text-align: center;
    line-height: 0.4rem;
  }
  span {
    display: inline-block;
    padding-top: 0.2rem;
  }
}
input {
  border: none;
  outline: none;
  border: 1px solid #cccccc;
  padding: 0 0.1rem;
}
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  font-size: 0.26rem;
}
.cen1 {
  div {
    margin: 0.2rem;
    input {
      background: white;
      width: 100%;
      height: 0.66rem;
    }
  }
}
#main {
  flex: 1;
  padding: 0.1rem;
}
</style>




