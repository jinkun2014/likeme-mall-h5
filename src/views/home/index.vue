<style>
    .goods-meta {
        padding: 2px 0;
    }

    .goods-title {
        margin: 5px 0 2px;
        line-height: 20px;
        white-space: inherit;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .goods-price-new {
        word-wrap: break-word;
        word-break: break-word;
        line-height: 16px;
        white-space: inherit;
        font-size: 14px;
        padding: 1px 0;
    }

    .goods-price-old {
        word-wrap: break-word;
        word-break: break-word;
        line-height: 14px;
        white-space: inherit;
        font-size: 12px;
        text-decoration: line-through;
        color: #ccc;
        padding: 1px 0;
    }

    .van-grid-item .van-grid-item__content {
        padding: 0 0;
    }
</style>
<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <van-image
                        lazy-load
                        width="100%"
                        height="200"
                        fit="cover"
                        :src="image"
                />
            </van-swipe-item>
        </van-swipe>
        <!--<van-grid :column-num="2">-->
        <!--<van-grid-item-->
        <!--v-for="item in items"-->
        <!--:key="item.key"-->
        <!--:icon="item.icon"-->
        <!--:text="item.text"-->
        <!--:to="item.to"/>-->
        <!--</van-grid>-->
        <van-divider>分享多多,惊喜多多!</van-divider>

        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                style="margin-bottom: 50px">
            <!--<van-cell-->
            <!--v-for="item in list"-->
            <!--:key="item"-->
            <!--:title="item"-->
            <!--/>-->
            <van-grid :border="false" :column-num="2" :gutter="10">
                <van-grid-item v-for="item in list">
                    <div class="goods">
                        <van-image
                                src="https://img.yzcdn.cn/vant/apple-1.jpg"
                                height="160"
                                fit="cover"/>
                        <div class="goods-meta">
                            <div class="goods-title">超级电视机超超级电视机超级电视机超级电视机级电视机超级电视机</div>
                            <div class="goods-price-new">￥ 122.00</div>
                            <div class="goods-price-old">￥ 100.00</div>
                        </div>
                    </div>
                </van-grid-item>
            </van-grid>
        </van-list>
        <van-tabbar>
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import {removeToken} from '@/utils/auth'
    import * as login from '@/api/login'

    export default {
        data() {
            return {
                title: '',
                items: [
                    {
                        key: 'vip',
                        icon: 'friends',
                        text: 'VIP订单',
                        to: '/vipOrder/create'
                    },
                ],
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                list: [],
                loading: false,
                finished: false,
            }
        },
        methods: {
            onLoad() {
                console.info(`onLoad`)
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 2000);
            },
            async onClickLogout() {
                await login.logout()
                removeToken()
                this.$router.replace({path: '/login'})
            }
        }
    }
</script>