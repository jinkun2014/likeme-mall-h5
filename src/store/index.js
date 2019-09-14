import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import layout from './modules/layout'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        layout
    },
    getters
})

export default store