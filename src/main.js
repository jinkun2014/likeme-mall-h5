import Vue from 'vue'
import router from './router'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import {Lazyload} from 'vant';

Vue.use(Lazyload);

import '@/permission' // permission control
import store from './store'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
