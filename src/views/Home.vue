<template>
    <div class="columns">
        
        <div class="column is-3">
            <slide></slide>
        </div>
        <div class="column is-9">
            <div class="gridContainer">
                    <categoryProduct class="gridElement"  v-for="item in categoryList" :key="item" :category="item"></categoryProduct>

            </div>
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
.gridContainer {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
}

.gridElement {
    padding: 20px;
    font-size: 30px;
    text-align: center;
}

@media screen and (min-width:1201px) {
    .gridElement {
            padding: 20px;
            font-size: 30px;
            text-align: center;
        }


}
@media  screen and (min-width:577px) and (max-width:1200px) {
    .gridElement {
            padding: 20px;
            font-size: 30px;
            text-align: center;
        }
}


@media screen and (max-width:576px) {
    .gridContainer {
            display: block;
            width:100%;
            height:auto;
            padding: 10px;
        }
    
        .gridElement {
            width: 390px;
            height: 300px;
            padding: 20px;
            font-size: 30px;
            text-align: center;
        }
}
</style>