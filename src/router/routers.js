import home from '../views/home/home.vue';
import catagory from "../views/catagory/catagory.vue";
import cart from "../views/cart.vue";
import mine from "../views/mine/mine.vue";
import index from '../views/index.vue';
import search from '../views/search/search.vue'
import detial from "../views/detial/detial.vue";
import login from "../views/login/login.vue";
import register from "../views/register/register.vue";
import address from "../views/address/address.vue";
import address_list from "../views/address/add_list.vue";
let routes = [{
        path: "/",
        redirect: "/index/home"
    },
    {
        name: "index",
        path: "/index",
        component: index,
        children: [{
                name: "home",
                path: "home",
                component: home
            },
            {
                name: "catagory",
                path: "catagory",
                component: catagory
            },
            {
                name: "cart",
                path: "cart",
                component: cart
            },
            {
                name: "mine",
                path: "mine",
                component: mine
            }
        ]
    },
    {
        name: "search",
        path: "/search",
        component: search
    },
    {
        name: "detial",
        path: "/detial",
        component: detial
    },
    {
        name: "login",
        path: "/login",
        component: login
    },
    {
        name: "register",
        path: "/register",
        component: register
    },
    {
        name: "address",
        path: "/address",
        component: address
    },
    {
        name: "address_list",
        path: "/address_list",
        component: address_list
    },
];
export default routes