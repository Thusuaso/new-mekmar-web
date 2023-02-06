<template>
    <div class="">
        <h1 class="header">
            {{ product_detail.onerilenurun_title }}
        </h1>
        <!-- <div class="categoryMain">
            <div class="categoryMainRestricted">
                <div class="categoryImg" v-for="item in categoryProductDetailSuggested" :key="item">
                    <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-if="dis_en">
                        <div class="container">
                            <Image class="containerSub" :src="item.product_webp" alt="Image Text" imageStyle="width:330px;height:200px;cursor:pointer;" />
                            <div class="bottom-left">{{ item.product_name_en }}</div>
                        </div>
                    </a>
                    <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-else-if="dis_fr">
                        <div class="container">
                            <Image class="containerSub" :src="item.product_webp" alt="Image Text" imageStyle="width:330px;height:200px;cursor:pointer;" />
                            <div class="bottom-left">{{ item.product_name_fr }}</div>
                        </div>
                    </a>
                    <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-else-if="dis_es">
                        <div class="container">
                            <Image class="containerSub" :src="item.product_webp" alt="Image Text" imageStyle="width:330px;height:200px;cursor:pointer;" />
                            <div class="bottom-left">{{ item.product_name_es }}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div> -->
        

        <div class="grid">
                    <div class="col-3 gridColumn" v-for="item in categoryProductDetailSuggested" :key="item">
                        <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-if="dis_en">
                            <div class="container">
                                <Image class="containerSub" :src="item.product_webp" alt="Image Text"
                                    imageStyle="width:330px;height:200px;cursor:pointer;" />
                                <div class="bottom-left">{{ item.product_name_en }}</div>
                            </div>
                        </a>
                        <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-else-if="dis_fr">
                            <div class="container">
                                <Image class="containerSub" :src="item.product_webp" alt="Image Text"
                                    imageStyle="width:330px;height:200px;cursor:pointer;" />
                                <div class="bottom-left">{{ item.product_name_fr }}</div>
                            </div>
                        </a>
                        <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-else-if="dis_es">
                            <div class="container">
                                <Image class="containerSub" :src="item.product_webp" alt="Image Text"
                                    imageStyle="width:330px;height:200px;cursor:pointer;" />
                                <div class="bottom-left">{{ item.product_name_es }}</div>
                            </div>
                        </a>
                    </div>
        </div>

    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'product_detail',
            'categoryProductDetailSuggested',
            'dis_en',
            'dis_fr',
            'dis_es'
        ])
    }
}
</script>

<style scoped>
.container {
    display:grid;
    position: relative;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px black;
    filter: drop-shadow(16px 16px 20px black) invert(25%);
    transform:scale(1);
        transition: all 1s 0s ease-in-out;
}
.container:hover {
    position: relative;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px black;
    transform: scale(1.1);
    filter: none;
}

/* Bottom left text */
.bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
    font-weight: bold;

}

.containerSub {

    grid-column: 3;

}


@media screen and (max-width:576px) {
    .grid{
        display:block;
        width:100%;

    }
    .gridColumn{
        width:100%;
        height:auto;
        margin-left:8px;
    }


        .container {
            display: grid;
            position: relative;
            text-align: center;
            color: white;
            text-shadow: 1px 1px 3px black;
            filter: none;
            transform: none;
            transition: none;
        }
    
        .container:hover {
            position: relative;
            text-align: center;
            color: white;
            text-shadow: 1px 1px 3px black;
            transform: none;
            filter: none;
        }



}
</style>