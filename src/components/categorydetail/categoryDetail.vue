<template>
    <div class="categoryMain" v-if="!isFilter">
        <div class="categoryMainRestricted">
            <div class="categoryImg" v-for="item in categoryDetail" :key="item" >
                <a :href="('/products/detail/' + $route.params.category + '/' + item.productLink)" v-if="dis_en">
                    <div class="container">
                        <Image  :src="item.webp" :alt="item.productNameEn" imageStyle="width:330px;height:200px;cursor:pointer;"  />
                        <div class="bottom-left">{{ item.productNameEn }}</div>
                    </div>
                </a>
                <a :href="('/fr/products/detail/' + $route.params.category + '/' + item.productLink)" v-else-if="dis_fr">
                        <div class="container">
                            <Image :src="item.webp" :alt="item.productNameFr" imageStyle="width:330px;height:200px;cursor:pointer;" />
                            <div class="bottom-left">{{ item.productNameFr }}</div>
                        </div>
                </a>
                <a :href="('/es/products/detail/' + $route.params.category + '/' + item.productLink)" v-else-if="dis_es">
                    
                    <div class="container">
                        <Image :src="item.webp" :alt="item.productNameEs" imageStyle="width:330px;height:200px;cursor:pointer;" />
                        <div class="bottom-left">{{ item.productNameEs }}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="categoryMain" v-else-if="isFilter">
        <div class="categoryMainRestricted">
            <div class="categoryImg" v-for="item in categoryDetailFilter" :key="item">
                <a :href="('/products/detail/' + $route.params.category + '/' + item.productLink)" v-if="dis_en">
                    <div class="container">
                        <Image :src="item.webp" :alt="item.productNameEn" imageStyle="width:300px;height:200px;cursor:pointer;" />
                        <div class="bottom-left">{{ item.productNameEn}}</div>
                    </div>
                </a>
                <a :href="('/fr/products/detail/' + $route.params.category + '/' + item.productLink)" v-else-if="dis_fr">
                    <div class="container">
                        <Image :src="item.webp" :alt="item.productNameFr" imageStyle="width:300px;height:200px;cursor:pointer;" />
                        <div class="bottom-left">{{ item.productNameFr }}</div>
                    </div>
                </a>
                <a :href="('/es/products/detail/' + $route.params.category + '/' + item.productLink)" v-else-if="dis_es">
    
                    <div class="container">
                        <Image :src="item.webp" :alt="item.productNameEs" imageStyle="width:300px;height:200px;cursor:pointer;" />
                        <div class="bottom-left">{{ item.productNameEs }}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
import service from '@/service/home'

export default {
    data() {
        return {
            isFilter:false
        }
    },
    computed: {
        ...mapGetters([
            'categoryDetail',
            'categoryDetailFilter',
            'categoryDetailColor',
            'dis_en',
            'dis_fr',
            'dis_es'
        ])
    },
    created() {
        service.getCategoryDetail(this.$route.params.category).then(data => {
            this.$store.dispatch('category_detail_load_act', data)
        })        
    },
    methods: {
    },
    mounted() {
        this.emitter.on('colorFilterValue', data => {
            if (data == 'All') {
                service.getCategoryDetail(this.$route.params.category).then(data => {
                    this.$store.dispatch('category_detail_load_act', data)
                })
                this.isFilter = false
            } else {
                const result = this.categoryDetail.filter(x => x.productColorEn == data);
                this.$store.dispatch("category_detail_filter_load_act", result)
                this.isFilter = true
            }
            
        })
    
        this.emitter.on('finishEmitter', data => {
            this.isFilter = data
        })
    }
}
</script>

<style scoped>
.container {
    position: relative;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px black;
    filter: drop-shadow(16px 16px 20px black) invert(15%);
    transform:scale(1);
    transition: all 1s 0s ease-in-out;
}
.container:hover {
    position: relative;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px black;
    transform: scale(0.9);
    filter: none;
}

/* Bottom left text */
.bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
    font-weight: bold;
    
}
.categoryMain{
    width:100%;
    height:auto;
    margin:0px auto;
    padding:0px;
    border:none;
    overflow:hidden;
    text-align:center;
    vertical-align:top;
    text-decoration: none;
}
.categoryMainRestricted{
    
    width:calc(100% - 100px);
    height:auto;
    margin:0px;
    padding:0px;
    overflow:hidden;
    text-align:center;
    vertical-align: top;
    text-decoration: none;

}
@media screen and (max-width:576px) {
    .categoryMainRestricted{
        width:100%;
        margin-left:25px;
    }
}
.categoryImg{
    display: inline-block;
    float: left;
    width:280px;
    height:200px;
    margin-right:10px;
    margin-bottom:10px;
}
</style>