<template>
    <div class="app-wapper">
        <van-nav-bar
                v-if="showNavBar"
                :left-arrow="$route.path != '/home'"
                @click-left="onClickGoBack"
                :title="$route.meta.title"
                right-text="退出登录"
                @click-right="onClickLogout"
                class="van-doc-nav-bar"/>
        <van-notice-bar
                text="特大喜讯,来客蜜商城上线了,优惠多多!"
                left-icon="volume-o"
        />
        <router-view></router-view>
    </div>
</template>

<script>
    import {removeToken} from '@/utils/auth'
    import * as login from '@/api/login'

    export default {
        name: 'Layout',
        data() {
            return {
                showNavBar: false
            }
        },
        methods: {
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
</style>