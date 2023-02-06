import axios from "@/helper/customAxios"

const service = {

    getCategoryList() {
        return axios.get("home/categoryList").then(res=>res.data)
    },
    getProductList() {
        return axios.get("home/productList").then(res=>res.data)
    },
    getSlideList() {
        return axios.get("home/slideList").then(res=>res.data)
    },
    getFabricationList() {
        return axios.get("home/fabricationList").then(res=>res.data)
    },
    getVideosList() {
        return axios.get("home/videosList").then(res=>res.data)
    },
    setSendMail(data) {
        return axios.post("/home/sendMail",data).then(res=>res.data)
    },
    getCategoryDetail(category) {
        return axios.get("home/categoryDetail/" + category).then(res=>res.data)
    },
    getCategoryDetailColor(category) {
        return axios.get("home/categoryDetailColor/" + category).then(res=>res.data)
    },
    getCategoryDetailColorList(category,color) {
        return axios.get("home/categoryDetailColorList/" + category  + '/'+  color).then(res=>res.data)
    },
    getCategoryProductDetail(id) {
        return axios.get("home/categoryProductDetail/" + id).then(res=>res.data)
    },
    getCategoryProductFinish(category, finish) {
        return axios.get(`home/categoryProductFinish/${category}/${finish}`).then(res=>res.data)
    },
    getLogin(username) {
        return axios.get('home/login/' + username).then(res => res.data);
    },
    setRegister(user) {
        return axios.post('home/register',user).then(res=>res.data)
    },
    
    getGalleriaPhotos() {
        return axios.get('/mekmar/galleria/getPhotos').then(res=>res.data)
    },
    getAllProducts() {
        return axios.get('/home/categoryDetailAll').then(res=>res.data)
    }


}

export default service