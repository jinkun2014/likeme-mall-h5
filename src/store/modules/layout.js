const state = {
    sku: {
        display: false,
        content: {},
        goods: {}
    },
}

const mutations = {
    SHOW_SKU: (state, sku) => {
        state.sku = sku
    }
}

const actions = {
    showSku({commit}, sku) {
        commit('SHOW_SKU', sku)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
