const state = {

    isMacOs : false
}

const actions = {

    platformKontrol({commit}){

        commit('platformKontrolMut');
    }
}

const mutations = {

    platformKontrolMut(state){

       const mobile = (/iphone|ipad|ipod\sce|palm/i.test(navigator.userAgent.toLowerCase()));

       if(mobile) state.isMacOs = true;

       if(!mobile){

         const platform = navigator.platform;

         if(platform.toLowerCase().indexOf("mac") > -1) {

           state.isMacOs = true;
         }
       }



    }
}

const getters = {

    getMacDurum(state){

        return state.isMacOs;
    }
}

export default {

    state,
    actions,
    mutations,
    getters
}
