import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name:'Home',
        component: () => import('pages/home/Home.vue')
    },
    {
        path: '/title',
        name:'Title',
        component: () => import('@/pages/home/H.vue')
    },

]

export default createRouter( {
    history:createWebHashHistory(),
    routes
})
