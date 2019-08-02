import Vue from 'vue';
import Vuex from 'vuex'
import Author from './modules/author'
import User from './modules/user'
import ShowUser from './modules/showUser'
Vue.use(Vuex);

const store = new Vuex.Store({
    // 初始化数据
    state: {
        bb: ''
    },
    // 同步
    mutations: {
        aa (state, msg) {
            state.bb = msg;
        }
    },
    // 异步
    actions: {

    },
    // 计算属性
    getters: {

    },
    // 模块
    modules: {
        User,
        Author,
        ShowUser
    }
})
export default store;
