const state = {
    usa_module: false,
    usa_navbar_product_list: [],
    usa_depo_usage_list: [],
    usa_depo_product_list: [],
    usa_depo_color_list: [],
    usa_depo_size_list: [],
    usa_depo_out_of_stock_list: [],
    usa_faq_list: [],
    usa_product_detail_list: [],
    usa_product_detail_photos_list:[]
    
}

const actions = {
    usa_module_load_act({ commit }, data) {
        commit('usa_module_load_mut',data)
    },
    usa_product_list_act({ commit }, data) {
        commit('usa_product_list_mut',data)
    },
    usa_home_list_act({ commit }, data) {
        commit('usa_home_list_mut',data)
    },
    usa_faq_list_act({ commit }, data) {
        commit('usa_faq_list_mut',data)
    },
    usa_product_detail_list_load({ commit }, data) {
        commit('usa_product_detail_list_act',data)
    }
}

const mutations = {
    usa_faq_list_mut(state,data) {
        state.usa_faq_list = data
    },
    usa_module_load_mut(state,data) {
        state.usa_module = data
    },
    usa_product_list_mut(state, data) {
        state.usa_navbar_product_list = data
    },
    usa_home_list_mut(state, data) {
        state.usa_depo_product_list = data.productList
        state.usa_depo_usage_list = data.usageList
        state.usa_depo_color_list = data.colorList
        state.usa_depo_size_list = data.sizeList
        state.usa_depo_out_of_stock_list = data.outOfStockList
    },
    usa_product_detail_list_act(state, data) {
        state.usa_product_detail_list = data.data
        state.usa_product_detail_photos_list = data.data[0].photos
    }
}

const getters = {
    usa_module(state) {
        return state.usa_module
    },
    usa_navbar_product_list(state) {
        return state.usa_navbar_product_list
    },
    usa_depo_usage_list(state) {
        return state.usa_depo_usage_list
    },
    usa_depo_product_list(state) {
        return state.usa_depo_product_list
    },
    usa_depo_color_list(state) {
        return state.usa_depo_color_list
    },
    usa_depo_size_list(state) {
        return state.usa_depo_size_list
    },
    usa_depo_out_of_stock_list(state) {
        return state.usa_depo_out_of_stock_list
    },
    usa_faq_list(state) {
        return state.usa_faq_list
    },
    usa_product_detail_list(state) {
        return state.usa_product_detail_list
    },
    usa_product_detail_photos_list(state) {
        return state.usa_product_detail_photos_list
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}