<style>
    .goods-meta {
        padding: 2px 4px;
    }

    .goods-title {
        line-height: 20px;
        white-space: inherit;
        font-size: 14px;
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
                    <div>
                        <van-image
                                src="https://img.yzcdn.cn/vant/apple-1.jpg"
                                height="160"
                                fit="cover"
                                @click="showGoods"/>
                        <div class="goods-meta">
                            <div class="goods-title">超级电视机超超级电视机超级电视机超级电视机级电视机超级电视机</div>
                            <div>
                                <div style="float: left;">
                                    <div class="goods-price-new">￥ 122.00</div>
                                    <div class="goods-price-old">
                                        ￥ 100.00
                                    </div>
                                </div>
                                <div class="right" style="float: right;line-height: 34px;padding-top: 7px">
                                    <van-icon name="cart-o" size="20px" @click="showSku"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-grid-item>
            </van-grid>
        </van-list>
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
                active: 0
            }
        },
        methods: {
            showGoods() {
                this.$router.push({path: '/goods'})
            },
            showSku() {
                const sku = {
                    display: true,
                    content: {
                        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                        tree: [
                            {
                                k: '颜色', // skuKeyName：规格类目名称
                                v: [
                                    {
                                        id: '1', // skuValueId：规格值 id
                                        name: '红色', // skuValueName：规格值名称
                                        imgUrl: 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                                    },
                                    {
                                        id: '2',
                                        name: '蓝色',
                                        imgUrl: 'https://img.yzcdn.cn/2.jpg'
                                    }
                                ],
                                k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                            },
                            {
                                k: '大小', // skuKeyName：规格类目名称
                                v: [
                                    {
                                        id: '1', // skuValueId：规格值 id
                                        name: '大', // skuValueName：规格值名称
                                    },
                                    {
                                        id: '2',
                                        name: '小',
                                    }
                                ],
                                k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                            }
                        ],
                        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                        list: [
                            {
                                id: 1, // skuId，下单时后端需要
                                price: 1100, // 价格（单位分）
                                s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                                s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
                                s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                                stock_num: 110 // 当前 sku 组合对应的库存
                            },
                            {
                                id: 1, // skuId，下单时后端需要
                                price: 1100, // 价格（单位分）
                                s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                                s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
                                s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                                stock_num: 110 // 当前 sku 组合对应的库存
                            },
                            {
                                id: 2, // skuId，下单时后端需要
                                price: 1200, // 价格（单位分）
                                s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
                                s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
                                s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                                stock_num: 120 // 当前 sku 组合对应的库存
                            },
                            {
                                id: 2, // skuId，下单时后端需要
                                price: 1200, // 价格（单位分）
                                s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
                                s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
                                s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                                stock_num: 120 // 当前 sku 组合对应的库存
                            }
                        ],
                        price: '1.00', // 默认价格（单位元）
                        stock_num: 227, // 商品总库存
                        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                        none_sku: false, // 是否无规格商品
                        messages: [
                            {
                                // 商品留言
                                datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                                multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                                name: '留言', // 留言名称
                                type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                                required: '1', // 是否必填 '1' 表示必填
                                placeholder: '' // 可选值，占位文本
                            }
                        ],
                        hide_stock: false // 是否隐藏剩余库存
                    },
                    goods: {
                        // 商品标题
                        title: '测试商品',
                        // 默认商品 sku 缩略图
                        picture: 'https://img.yzcdn.cn/2.jpg'
                    }
                }

                this.$store.dispatch('layout/showSku', sku)
                    .then(() => {

                    }).catch(() => {

                })
            },
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
                }, 1000);
            },
            async onClickLogout() {
                await login.logout()
                removeToken()
                this.$router.replace({path: '/login'})
            }
        }
    }
</script>