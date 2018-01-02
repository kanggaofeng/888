import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './routers'
import { getCook_key } from "../utils/untial.js";
var router = new VueRouter({
    routes: routes
})
router.beforeEach(function(to, from, next) {
    //有 cook 的时候 就让他 直接进入页面
    // 没有的时候 让他进入登录 页面
    // 利用他们的 钩子函数
    //console.log(1)
    var token;
    if (to.name == "mine") {
        console.log(2);
        token = getCook_key("token");
        if (token) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})
export default router;