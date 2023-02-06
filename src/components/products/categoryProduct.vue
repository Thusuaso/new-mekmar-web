<template>
    <!-- <div class="categoryMain">
            <router-link :to="('/products/' + category.category_link)" v-if="dis_en">
                <img class="categoryImage" :src="category.category_foto_en"  :alt="category.category_foto_en"/>
            </router-link>
            <router-link :to="('/fr/products/' + category.category_link)" v-else-if="dis_fr">
                <img class="categoryImage"  :src="category.category_foto_fr" :alt="category.category_foto_fr" />
            </router-link>
            <router-link :to="('/es/products/' + category.category_link)" v-else-if="dis_es">
                <img class="categoryImage"  :src="category.category_foto_es"  :alt="category.category_foto_es"/>
            </router-link>
    </div> -->

            <router-link :to="('/products/' + category.category_link)" v-if="dis_en">
                <img class="categoryImage" :src="category.category_foto_en" :alt="category.category_foto_en" />
            </router-link>
            <router-link :to="('/fr/products/' + category.category_link)" v-else-if="dis_fr">
                <img class="categoryImage" :src="category.category_foto_fr" :alt="category.category_foto_fr" />
            </router-link>
            <router-link :to="('/es/products/' + category.category_link)" v-else-if="dis_es">
                <img class="categoryImage" :src="category.category_foto_es" :alt="category.category_foto_es" />
            </router-link>







</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: ['category'],
    computed: {
        ...mapGetters([
            'dis_en',
            'dis_fr',
            'dis_es',
        ])
    },
    methods: {
        
    }
        
}
</script>

<style scoped>
.categoryImage{
    width:280px;
    height:auto;
    cursor:pointer;
    filter: drop-shadow(16px 16px 20px black) invert(20%);
    transform:scale(1);
        transition: all 1s 0s ease-in-out;
        margin-left:35px;
}
.categoryImage:hover {
    width: 280px;
    height: auto;
    filter: none;
    transform: scale(0.9);
}


@media screen and (max-width:576px) {
    .categoryImage {
            width: 300px;
            height: auto;
            cursor: pointer;
            filter: drop-shadow(16px 16px 20px black) invert(20%);
            transform: scale(1);
            transition: all 1s 0s ease-in-out;
            margin-left: -10px;
        }
    
        .categoryImage:hover {
            width: 300px;
            height: auto;
            filter: none;
            transform: scale(0.9);
            margin-left: -10px;
        }
}
</style>
