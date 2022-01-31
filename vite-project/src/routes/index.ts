import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('pages/home/Home.vue')
    },
    {
        path: '/title',
        name: 'Title',
        component: () => import('@/pages/home/H.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/register/Register.vue')
    },
    {
        path: '/fast',
        name: 'Fast',
        component: () => import('@/pages/fast/Fast.vue')
    }

]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
