// import './font/iconfont.css'
import "./common/swiper.css";
import "./common/swiper.js";
import './common/reset.css'
import Vue from 'vue'
import Toasted from "vue-toasted";
Vue.use(Toasted, {
    position: "top-center",
    duration: 2000,
    containerClass: "status-wrapper",
    theme: "bubble",
    singleton: 'false',
    onComplete: function() {
        //  console.log("toasted over");
    }
});
import App from './App.vue'
import router from './router/router.config.js'
import './font/iconfont.css'
import axios from './axios/axios.js'
import store from "./store/store.js";
// import { setCookie } from "./utils/untial.js";
// setCookie('token', '88888888888888888');
new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
})