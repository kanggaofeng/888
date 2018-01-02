import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);
import state from './state'
import mutations from "./mutations";

//import Vuex, { Store } from "vuex";
let store = new Vuex.Store({
    state: state,
    getters: {

    },
    mutations: mutations
})
export default store