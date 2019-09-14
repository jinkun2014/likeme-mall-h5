<template>
    <div class="app-wapper">
        <van-nav-bar
                v-if="$route.meta.navBar"
                :left-arrow="$route.path != '/home'"
                @click-left="onClickGoBack"
                :title="$route.meta.title"
                right-text="退出登录"
                @click-right="onClickLogout"
                class="van-doc-nav-bar"/>
        <div v-if="$route.meta.noticeBar && noticeBar.display"
             style="position: fixed;top: 0;left: 0;z-index: 1;width:100%">
            <van-notice-bar
                    :text="noticeBar.content"
                    mode="closeable"
                    left-icon="volume-o"
                    @close="onNoticeBarClose"/>
        </div>
        <router-view :class="{'show-notice-bar':$route.meta.noticeBar && noticeBar.display}"></router-view>
        <van-tabbar route v-if="$route.meta.tabBar">
            <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="apps-o">商品分类</van-tabbar-item>
            <van-tabbar-item to="/card" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/me" icon="user-o">个人中心</van-tabbar-item>
        </van-tabbar>
        <van-sku
                v-model="sku.display"
                :sku="sku.content"
                :goods="sku.goods"
                :close-on-click-overlay="true"
        />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {removeToken} from '@/utils/auth'
    import * as login from '@/api/login'

    export default {
        name: 'Layout',
        computed: {
            ...mapGetters([
                'sku',
            ])
        },
        data() {
            return {
                showNavBar: false,
                noticeBar: {
                    display: true,
                    content: '特大喜讯,来客蜜商城上线了,优惠多多!'
                }
            }
        },
        methods: {
            onNoticeBarClose() {
                this.noticeBar.display = false;
            },
            onClickGoBack() {
                this.$router.back(-1)
            },
            async onClickLogout() {
                await login.logout()
                removeToken()
                this.$router.replace({path: '/login'})
            }
        },
    }
</script>

<style scoped>
    .app-wapper {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .van-doc-nav-bar {
        height: 50px;
        line-height: 50px;
    }

    .van-doc-nav-bar .van-nav-bar__title {
        font-size: 18px;
        text-transform: capitalize;
    }

    .show-notice-bar {
        margin-top: 40px;
    }

    .show-tabbar {
        margin-bottom: 50px;
    }
</style>