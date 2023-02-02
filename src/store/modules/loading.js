const state = {
    fullscreenLoading:false,
}

const actions = {
    fullScreenLoadingAct({ commit }, data) {
        commit('fullScreenLoadingMut',data)
    }
}

const mutations = {
    fullScreenLoadingMut(state, data) {
        state.fullscreenLoading = data
    }
}

const getters = {
    fullscreenLoading(state) {
        return state.fullscreenLoading
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}