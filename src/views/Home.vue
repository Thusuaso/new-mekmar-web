<template>
    <div class="columns">
        
        <div class="column is-3">
            <slide></slide>
        </div>
        <div class="column is-9" style="margin-left:60px;">
            <categoryProduct class="categoryProduct" v-for="item in categoryList" :key="item" :category="item"></categoryProduct>
        </div>
    </div>
</template>
<script>

import categoryProduct from "@/components/products/categoryProduct.vue";
import slide from "@/components/slider/slide.vue"
import { mapGetters } from "vuex";
export default {
    data() {
        return {

      }  
    },
    components: {
        categoryProduct,
        slide
    },
    computed: {
        ...mapGetters([
            'categoryList',
            'slide',
            'getMacDurum'
      ])  
    },
    created() {
        console.log(window.innerWidth)
        if (window.innerWidth < 576) {
            localStorage.setItem('mobil',true)
        } else {
            localStorage.setItem('mobil',false)
        }

    },

}
</script>
<style scoped>

.categoryProduct{
    display:inline-block;
    float:left;
    margin-top:25px;
    margin-right:85px;
    margin-bottom:35px;
}
.categoryProduct:hover{
    display: inline-block;
    float: left;
    margin-top: 25px;
    margin-right: 85px;
    margin-bottom: 35px;
}
</style>