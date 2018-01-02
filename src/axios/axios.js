import axios from "axios";
import Vue from "vue";
//console.log(mode)
//console.log(process) // 看他里面的 env 现在是dev 里面没插件空的 自己加个
if (mode == "development") {
    axios.defaults.baseURL = "http://localhost:3000";
} else {
    axios.defaults.baseURL = "http://www.lb717.com";
}
Vue.prototype.axios = axios;
Vue.prototype.$http = axios;