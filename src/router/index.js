import Vue from 'vue'
import VueRouter from 'vue-router'


import Master from '../components/Master.vue'
import login from '../views/login.vue'


import About from '../views/about.vue'
import homePage from '../views/homePage.vue'
import TechnologicalList from '../views/technologicalList.vue'
import webDesign from '../views/webDesign.vue'
import advertisingServices from '../views/advertisingServices.vue'
import advertisingMedia from '../views/advertisingMedia.vue'

Vue.use(VueRouter)



const routes = [{
        path: '/',
        redirect: '/homePage',
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/',
        name: 'Master',
        component: Master,
        children: [
            { path: '/homePage', component: homePage, name: '首页' },
            { path: '/TechnologicalList', component: TechnologicalList, name: '列表' },
            { path: '/About', component: About, name: '详情' },
            { path: '/webDesign', component: webDesign, name: '网页设计' },
            { path: '/advertisingServices', component: advertisingServices, name: '广告服务' },
            { path: '/advertisingMedia', component: advertisingMedia, name: '广告传媒' },
        ]
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router