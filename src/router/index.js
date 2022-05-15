import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from "@/views/layout";

const routes = [
    {path: '/404', component: () => import(/* webpackChunkName: "login" */ '../views/404')},
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [{path: 'index', component: () => import(/* webpackChunkName: "home" */ '../views/index')}],
    },
    {path: '/login', component: () => import(/* webpackChunkName: "login" */ '../views/login')},
    {path: '/wallet', component: () => import(/* webpackChunkName: "login" */ '../views/wallet')},
    {path: '/customer', component: () => import(/* webpackChunkName: "login" */ '../views/customer')},
    {path: '/home', component: () => import(/* webpackChunkName: "login" */ '../views/home')},
    // {path: '/*', redirect: '/404'}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
