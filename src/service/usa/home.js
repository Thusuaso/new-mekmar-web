import axios from "@/helper/customAxios"

const service = {

    getProductCategoryList() {
        return axios.get("usa/home/categoryProductList").then(res=>res.data)
    },
    getUsaProductsMainPage() {
        return axios.get("usa/home/usaProductList").then(res=>res.data)
    },
    getUsageOfAreaFilterProduct(name) {
        return axios.get("usa/home/usageOfAreProductList/" + name).then(res=>res.data)
    },
    getColorFilterProduct(name) {
        return axios.get("usa/home/colorProductList/" + name).then(res=>res.data)
    },
    getSizeFilterProduct(name) {
        return axios.get("usa/home/sizeProductList/" + name).then(res=>res.data)
    },
    getCategoryProduct(name) {
        return axios.get("usa/home/categoryProductList/" + name).then(res=>res.data)
    },
    getUsaFaqList() {
        return axios.get('/usa/home/faqList').then(res=>res.data)
    },
    getUsaProductDetailList(id) {
        return axios.get('/usa/home/productDetailList/' + id)
    }



}

export default service