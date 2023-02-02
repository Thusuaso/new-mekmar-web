<template>
    <div class="">
        <h1 class="header">
            {{ product_detail.onerilenurun_title }}
        </h1>
        <div class="categoryMain">
            <div class="categoryMainRestricted">
                <div class="categoryImg" v-for="item in categoryProductDetailSuggested" :key="item">
                    <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-if="dis_en">
                        <div class="container">
                            <Image :src="item.product_webp" alt="Image Text" imageStyle="width:330px;height:200px;cursor:pointer;" />
                            <div class="bottom-left">{{ item.product_name_en }}</div>
                        </div>
                    </a>
                    <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-else-if="dis_fr">
                        <div class="container">
                            <Image :src="item.product_webp" alt="Image Text" imageStyle="width:330px;height:200px;cursor:pointer;" />
                            <div class="bottom-left">{{ item.product_name_fr }}</div>
                        </div>
                    </a>
                    <a :href="'/products/detail/' + item.product_category_name + '/' + item.product_name_en" v-else-if="dis_es">
                        <div class="container">
                            <Image :src="item.product_webp" alt="Image Text" imageStyle="width:330px;height:200px;cursor:pointer;" />
                            <div class="bottom-left">{{ item.product_name_es }}</div>
                        </div>
                    </a>
                </div>
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

.categoryMain {
    width: 100%;
    height: auto;
    margin: 0px auto;
    padding: 0px;
    border: none;
    overflow: hidden;
    text-align: center;
    vertical-align: top;
    text-decoration: none;
}

.categoryMainRestricted {

    width: calc(100% - 100px);
    height: auto;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    text-align: center;
    vertical-align: top;
    text-decoration: none;
    margin-left:53px;

}

.categoryImg {
    display: inline-block;
    float: left;
    width: 280px;
    height: 200px;
    margin-left: 25px;
    margin-bottom: 10px;
}
@media screen and (max-width:576px) {
    .categoryMainRestricted{
        display:block;
        width:100%;
        margin:0px;
    }
    .categoryImg{
        width:100%;
        height:200px;
        margin:0px;
        margin-bottom:5px;
    }
}
</style>