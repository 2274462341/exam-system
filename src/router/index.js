import Vue from 'vue'
import Router from 'vue-router'
import error from '@/components/error'
import Login from '@/views/Login'
import mainRouter from './main'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/error',
            name: 'error',
            component: error
        },
        ...mainRouter
    ]
})
