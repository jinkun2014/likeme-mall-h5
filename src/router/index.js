import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('@/layout/index'),
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index'),
                meta: {title: '首页', navBar: false, noticeBar: true, tabBar: true},
            },
            {
                path: 'category',
                component: () => import('@/views/category/index'),
                meta: {title: '商品分类', navBar: false, noticeBar: false, tabBar: true},
            },
            {
                path: 'card',
                component: () => import('@/views/card/index'),
                meta: {title: '购物车', navBar: false, noticeBar: false, tabBar: true},
            },
            {
                path: 'me',
                component: () => import('@/views/me/index'),
                meta: {title: '个人中心', navBar: false, noticeBar: false, tabBar: true},
            },
            {
                path: 'goods',
                component: () => import('@/views/goods/index'),
                meta: {title: '商品详情', navBar: false, noticeBar: false, tabBar: false},
            },
            {
                path: 'vipOrder/create',
                component: () => import('@/views/vipOrder/detail'),
                meta: {title: 'VIP订单'},
            },
        ]
    },
    {
        path: '/login',
        // component: () => import('@/views/login/index_username_password'),
        component: () => import('@/views/login/index_phone_code'),
        meta: {title: '登录'}
    },
]

const router = new Router({
    routes: routes
})

export default router