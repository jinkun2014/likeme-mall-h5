<template>
    <div style="padding-bottom: 50px">
        <van-tree-select
                height="calc(100vh - 50px)"
                :items="items"
                :main-active-index.sync="activeIndex">
            <template slot="content">
                <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad">
                    <van-cell
                            v-for="item in list"
                            :key="item"
                            :title="item"/>
                </van-list>
            </template>
        </van-tree-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: 0,
                items: [{text: '分组 1'}, {text: '分组 2'}, {text: '分组 3'}, {text: '分组 4'},],
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                loading: false,
                finished: false
            }
        },
        methods: {
            onLoad() {
                console.info(`onLoad:${this.activeIndex}`)
                // // 异步更新数据
                // setTimeout(() => {
                //     for (let i = 0; i < 10; i++) {
                //         this.list.push(this.list.length + 1);
                //     }
                //     // 加载状态结束
                //     this.loading = false;
                //
                //     // 数据全部加载完成
                //     if (this.list.length >= 40) {
                //         this.finished = true;
                //     }
                // }, 1000);
            },
        }
    }
</script>

<style scoped>

</style>