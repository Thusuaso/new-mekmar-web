import dilService from '@/service/dilService';

const state = {
    categoryList: [],
    productsList: [],
    slideOneList: [],
    slideTwoList: [],
    slideThreeList: [],
    slideFourList:[],
    aboutData :'',
    newsData :'',
    personelData :'',
    navData :'',
    product_list :'',
    product_detail :'',
    link:'',
    usa_link :'',
    about_page :'',
    contact_page :'',
    usa_navbar :'',
    usa_product_list :'',
    usa_product_detail :'',
    usa_about_page :'',
    usa_salesTeam :'',
    order :'',
    dis_fr:false, 
    dis_en:false,
    dis_es: false,
    contact_page_personel: [],
    fabricationList: [],
    videosListCategory1: [],
    videosListCategory2: [],
    videosListCategory3: [],
    videosListFranceCategory:[],
    categoryDetail: [],
    categoryDetailFilter: [],
    categoryDetailColor: [],
    categoryDetailColorList: [],
    categoryDetailFinishList: [],
    categoryDetailFinishAllSum:0,
    categoryProductDetail:[],
    categoryProductDetailPhotos: [],
    categoryProductDetailSuggested: [],
    categoryProductDetailEbats: [],
    categoryDetailColorAllSum: 0,
    benzer_urun_list: [],
    usa_contact_page: [],
    mobile_width: false,
    fabrication_page: [],
    videos_page: []

}

const actions = {
    category_load_act({ commit }, data) {
        commit('category_load_mut',data)
    },
    products_load_act({ commit }, data) {
        commit('products_load_mut',data)
    },
    slides_load_act({ commit }, data) {
        commit('slides_load_mut',data)
    },
    loadMainData({ commit }) {
        let dil = localStorage.getItem('mekmar-dil');
        if(!dil || dil == 'en') localStorage.setItem('mekmar-dil','en')
        if(dil == 'fr') localStorage.setItem('mekmar-dil','fr')
        if(dil == 'es') localStorage.setItem('mekmar-dil','es')
        const data = dilService.getMainPage(dil)
        commit('mainDataMut',{...data,dil:dil}); 
    },
    fabrication_load_act({ commit }, data) {
        commit('fabrication_load_mut',data)
    },
    videos_load_act({ commit }, data) {
        commit('videos_load_mut',data)
    },
    category_detail_load_act({ commit }, data) {
        commit('category_detail_load_mut',data)
    },
    category_detail_filter_load_act({ commit }, data) {
      commit('category_detail_filter_load_mut',data)  
    },
    category_detail_color_load_act({ commit }, data) {
        commit('category_detail_color_load_mut',data)
    },
    category_detail_color_list_load_act({ commit }, data) {
        commit('category_detail_color_list_load_mut',data)
    }, category_product_detail_load_act({ commit }, data) {
        commit('category_product_detail_load_mut',data)
    },
    windows_mobile_width_act({ commit }, data) {
        commit('windows_mobile_width_mut',data)
    },

}

const mutations = {

    category_load_mut(state,data) {
        state.categoryList = data
    },
    products_load_mut(state, data) {
        state.productsList = data
    },
    slides_load_mut(state, data) {
        state.slideOneList = data.slideOne
        state.slideTwoList = data.slideTwo
        state.slideThreeList = data.slideThree
        state.slideFourList = data.slideFour
    },
    mainDataMut(state, data) {
        state.aboutData = data.footer.about;
        state.newsData = data.footer.news;
        state.personelData = data.footer.salesTeam;
        state.navData = data.navigation;
        state.product_list = data.product_list;
        state.product_detail = data.product_detail;
        state.link = data.link;
        state.contact_page_personel = data.contact_page_team
        state.usa_link = data.usa_link;
        state.about_page = data.about_page;
        state.contact_page = data.contact_page;
        state.fabrication_page = data.fabrication_page
        state.videos_page = data.videos_page
        state.usa_navbar = data.usa_navbar;
        state.usa_product_list = data.usa_product_list;
        state.usa_product_detail = data.usa_product_detail;
        state.usa_about_page = data.usa_about_page;
        state.usa_contact_page = data.usa_contact_page
        state.usa_salesTeam = data.usa_salesTeam;
        state.order = data.order;
        state.benzer_urun_list = data.benzer_urun_list

        

        state.dis_fr = false 
        state.dis_en = false
        state.dis_es = false
    
        if(data.dil == "en") {
        
        state.dis_en = true;
        }
        if(data.dil == "fr") {
        state.dis_fr = true;
        }
        if(data.dil == "es") {
        state.dis_es = true;
        }

    
    },
    fabrication_load_mut(state, data) {
        state.fabricationList = data
    },
    videos_load_mut(state, data) {
        state.videosListCategory1 = data.filter(x => x.category == 1)
        state.videosListCategory2 = data.filter(x => x.category == 2)
        state.videosListCategory3 = data.filter(x => x.category == 3 && x.isFrance == 0)
        state.videosListFranceCategory = data.filter(x => x.category ==3 && x.isFrance == 1)
    },
    category_detail_load_mut(state, data) {
        state.categoryDetail = data
    },
    category_detail_filter_load_mut(state, data) {
      state.categoryDetailFilter = data
    },
    category_detail_color_load_mut(state, data) {
        state.categoryDetailColor = data.colorList
        state.categoryDetailFinishList = data.finishList
        state.categoryDetailColorAllSum = 0
        state.categoryDetailFinishAllSum = 0
        for(let i of data.colorList){
            state.categoryDetailColorAllSum += i.color_en_count
        }
        for (let i of data.finishList) {
            state.categoryDetailFinishAllSum += i.finish_count
        }
    },

    category_detail_color_list_load_mut(state, data) {
        state.categoryDetailColorList = data
    },
    category_product_detail_load_mut(state, data) {
        state.categoryProductDetail = data.productDetail[0]
        state.categoryProductDetailPhotos = data.productPhotos
        state.categoryProductDetailSuggested = data.productSuggested
        state.categoryProductDetailEbats = data.productDimension
    },
    windows_mobile_width_mut(state, data) {
        console.log(data)
        state.mobile_width = data
    }
}

const getters = {
    usa_contact_page(state) {
      return state.usa_contact_page  
    },
    categoryList(state) {
        return state.categoryList
    }, 
    productsList(state) {
        return state.productsList
    },
    slideOneList(state) {
        return state.slideOneList
    },
    slideTwoList(state) {
        return state.slideTwoList
    },
    slideThreeList(state) {
        return state.slideThreeList
    },
    slideFourList(state) {
        return state.slideFourList
    },
    aboutData(state) {
        return state.aboutData
    },
    newsData(state) {
        return state.newsData
    },
    personelData(state) {
        return state.personelData
    },
    navData(state) {
        return state.navData
    },
    product_list(state) {
        return state.product_list
    },
    product_detail(state) {
        return state.product_detail
    },
    link(state) {
        return state.link
    },
    usa_link(state) {
        return state.usa_link
    },
    about_page(state) {
        return state.about_page
    },
    contact_page(state) {
        return state.contact_page
    },
    fabrication_page(state) {
        return state.fabrication_page
    },
    usa_navbar(state) {
        return state.usa_navbar
    },
    usa_product_list(state) {
        return state.usa_product_list
    },
    usa_product_detail(state) {
        return state.usa_product_detail
    },
    usa_about_page(state) {
        return state.usa_about_page
    },
    usa_salesTeam(state) {
        return state.usa_salesTeam
    },
    order(state) {
        return state.order
    },
    dis_fr(state) {
        return state.dis_fr
    },
    dis_en(state) {
        return state.dis_en
    },
    dis_es(state) {
        return state.dis_es
    },
    contact_page_personel(state) {
        return state.contact_page_personel
    },
    fabricationList(state) {
        return state.fabricationList
    },
    videosListCategory1(state) {
        return state.videosListCategory1
    },
    videosListCategory2(state) {
        return state.videosListCategory2
    },
    videosListCategory3(state) {
        return state.videosListCategory3
    },
    videosListFranceCategory(state) {
        return state.videosListFranceCategory
    },
    categoryDetail(state) {
        return state.categoryDetail
    },
    categoryDetailColor(state) {
        return state.categoryDetailColor
    },
    categoryDetailColorList(state) {
        return state.categoryDetailColorList
    },
    categoryProductDetail(state) {
        return state.categoryProductDetail
    },
    categoryProductDetailPhotos(state) {
        return state.categoryProductDetailPhotos
    },
    categoryProductDetailSuggested(state) {
        return state.categoryProductDetailSuggested
    },
    categoryProductDetailEbats(state) {
        return state.categoryProductDetailEbats
    },
    categoryDetailFilter(state) {
        return state.categoryDetailFilter
    },
    categoryDetailColorAllSum(state) {
        return state.categoryDetailColorAllSum
    },
    categoryDetailFinishList(state) {
        return state.categoryDetailFinishList
    },
    categoryDetailFinishAllSum(state) {
        return state.categoryDetailFinishAllSum
    },
    benzer_urun_list(state) {
        return state.benzer_urun_list
    },
    mobile_width(state) {
        return state.mobile_width
    },
    videos_page(state) {
        return state.videos_page
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}