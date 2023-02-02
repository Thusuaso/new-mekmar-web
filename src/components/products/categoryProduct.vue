<template>
    <div class="categoryMain">
        <div class="categoryRestricted">
            <router-link :to="('/products/' + category.category_link)" v-if="dis_en" target="_blank">
                <img class="categoryImage" :src="category.category_foto_en"  :alt="category.category_foto_en"/>
            </router-link>
            <router-link :to="('/fr/products/' + category.category_link)" v-else-if="dis_fr" target="_blank">
                <img class="categoryImage"  :src="category.category_foto_fr" :alt="category.category_foto_fr" />
            </router-link>
            <router-link :to="('/es/products/' + category.category_link)" v-else-if="dis_es" target="_blank">
                <img class="categoryImage"  :src="category.category_foto_es"  :alt="category.category_foto_es"/>
            </router-link>
        </div>
    </div>
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
.categoryMain{
    width:230px;
    height:230px;
    margin:0 auto;
    padding:auto;
    vertical-align: top;
    text-decoration: none;
    
}

.categoryImage{
    width:230px;
    text-align:center;
    cursor:pointer;
    filter: drop-shadow(16px 16px 20px black) invert(20%);
    transform:scale(1);
        transition: all 1s 0s ease-in-out;
}
.categoryImage:hover {
    filter: none;
    transform: scale(1.1);
}
</style>