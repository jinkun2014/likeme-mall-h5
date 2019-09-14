<template>
    <div>
        <div class="van-nav-bar van-nav-bar--fixed" style="z-index: 1;" :style="navBgStyle">
            <div class="van-nav-bar__left">
                <div class="nav-button-bg nav-button-bg__left" @click="goBack" :style="navBtnBgStyle">
                    <van-icon name="arrow-left" size="22px" :color="navBtnColor"/>
                </div>
            </div>
            <div class="van-nav-bar__title" style="width:40%;">
                <van-tabs v-model="activeIndex" :border="false" background="transparent" line-height="1" @click="goAnchor">
                    <van-tab title="宝贝"></van-tab>
                    <van-tab title="评价"></van-tab>
                    <van-tab title="详情"></van-tab>
                </van-tabs>
            </div>
            <div class="van-nav-bar__right">
                <div class="nav-button-bg nav-button-bg__right" @click="onClickCart" :style="navBtnBgStyle">
                    <van-icon name="shopping-cart" size="22px" :color="navBtnColor"/>
                </div>
            </div>
        </div>
        <div class="goods">
            <van-swipe class="goods-swipe" :autoplay="3000">
                <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                    <img :src="thumb">
                </van-swipe-item>
            </van-swipe>
            <van-cell-group ref="anchor0">
                <van-cell>
                    <div class="goods-title">{{ goods.title }}</div>
                    <div class="goods-price">{{ formatPrice(goods.price) }}</div>
                </van-cell>
                <van-cell class="goods-express">
                    <van-col span="10">运费：{{ goods.express }}</van-col>
                    <van-col span="14">剩余：{{ goods.remain }}</van-col>
                </van-cell>
            </van-cell-group>


            <van-cell-group class="goods-cell-group">
                <van-cell value="进入店铺" icon="shop-o" is-link>
                    <template slot="title">
                        <span class="van-cell-text">有赞的店</span>
                        <van-tag class="goods-tag" type="danger">官方</van-tag>
                    </template>
                </van-cell>
                <van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>
            </van-cell-group>

            <van-cell-group ref="anchor1" class="goods-cell-group">
                <van-cell title="查看商品评价" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="评价" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="评价" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="评价" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="评价" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="评价" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="评价" is-link @click="sorry"/>
            </van-cell-group>

            <van-cell-group ref="anchor2" class="goods-cell-group">
                <van-cell title="查看商品详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
                <van-cell title="详情" is-link @click="sorry"/>
            </van-cell-group>

            <van-goods-action>
                <van-goods-action-icon icon="chat-o" @click="sorry">
                    客服
                </van-goods-action-icon>
                <van-goods-action-icon icon="cart-o" @click="onClickCart">
                    购物车
                </van-goods-action-icon>
                <van-goods-action-button type="warning" @click="showSku">
                    加入购物车
                </van-goods-action-button>
                <van-goods-action-button type="danger" @click="sorry">
                    立即购买
                </van-goods-action-button>
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navBgStyle: 'background: rgba(255, 255, 255, 0)',
                navBtnBgStyle: 'background: rgba(0, 0, 0, 0.4)',
                navBtnColor: '#fff',
                activeIndex: 0,
                goods: {
                    title: '美国伽力果（约680g/3个）',
                    price: 2680,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                        'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                    ],
                    indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                }
            };
        },
        mounted() {
            // 参考: https://www.cnblogs.com/leiting/p/10337313.html
            window.addEventListener('scroll', this.handleScroll) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
        },
        methods: {
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
                                required: '0', // 是否必填 '1' 表示必填
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
            goBack() {
                this.$router.back(-1)
            },
            goAnchor(index) { // 也可以用scrollIntoView方法， 但由于这里头部设置了固定定位，所以用了这种方法
                // document.querySelector('#anchor'+index).scrollIntoView()
                this.activeIndex = index;
                document.body.scrollTop = this.$refs['anchor' + index].offsetTop - 100
                document.documentElement.scrollTop = this.$refs['anchor' + index].offsetTop - 100
            },
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
                const anchorOffset0 = this.$refs.anchor0 && this.$refs.anchor0.offsetTop - 100;
                const anchorOffset1 = this.$refs.anchor1 && this.$refs.anchor1.offsetTop - 100;
                const anchorOffset2 = this.$refs.anchor2 && this.$refs.anchor2.offsetTop - 100;
                if (scrollTop > anchorOffset0 && scrollTop < anchorOffset1) {
                    this.activeIndex = 0
                }
                if (scrollTop > anchorOffset1 && scrollTop < anchorOffset2) {
                    this.activeIndex = 1
                }
                if (scrollTop > anchorOffset2) {
                    this.activeIndex = 2
                }
                if (scrollTop < 200) {
                    this.navBgStyle = 'background: rgba(255, 255, 255, ' + (scrollTop / 200.0) + ')'
                    this.navBtnBgStyle = 'background: rgba(0, 0, 0, ' + (0.4-0.4*(scrollTop / 200.0)) + ')'
                    this.navBtnColor = '#fff'
                } else {
                    this.navBgStyle = 'background: rgba(255, 255, 255, 1)'
                    this.navBtnBgStyle = 'background: rgba(0, 0, 0, 0)'
                    this.navBtnColor = '#000'
                }
            },
            formatPrice() {
                return '¥' + (this.goods.price / 100).toFixed(2);
            },
            onClickCart() {
                this.$router.replace({path: '/card'});
            },
            sorry() {
            }
        }
    };
</script>

<style lang="less" scoped>
    .nav {
        &-button-bg {
            line-height: 32px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            position: fixed;
            top: 7px;
            background-color: rgba(0, 0, 0, 0.4);
            &__left {
                left: 12px;
            }
            &__right {
                right: 12px;
            }
        }
    }

    .goods {
        padding-bottom: 50px;
        &-swipe {
            img {
                height: 300px;
                width: 100%;
                display: block;
            }
        }
        &-title {
            font-size: 16px;
        }
        &-price {
            color: #f44;
        }
        &-express {
            color: #999;
            font-size: 12px;
            padding: 5px 15px;
        }
        &-cell-group {
            margin: 15px 0;
            .van-cell__value {
                color: #999;
            }
        }
        &-tag {
            margin-left: 5px;
        }
    }
</style>