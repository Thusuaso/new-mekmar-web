<template>
    <br/>
    <br />
    <div class="columns">
        <div class="column is-2">
        </div>
        <div class="column is-1">
            <img class="imageMekmar" src="https://cdn.mekmarimage.com/logo/logo-mekmar.png" alt="Mekmar Logo" />
        </div>
        <div class="column is-9">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" v-if="dis_en">
    
                <router-link :to="'/'">
                    <el-menu-item index="1">{{ navData.home }}</el-menu-item>
                </router-link>
                <el-sub-menu index="2">
                    <template #title>{{ navData.product }}</template>
                    <!-- <router-link v-for="item in productsList" :key="item.id" :to="'/products/' + item.category_en">
                        <el-menu-item :index="'2-'+ item.id" >
                            {{ item.category_en }}
                        </el-menu-item>
                    </router-link> -->
                    <a :href="('/products/' + item.category_en)" v-for="item in productsList" :key="item.id">
                        <el-menu-item :index="'2-'+ item.id">
                            {{ item.category_en }}
                        </el-menu-item>
                    </a>
                </el-sub-menu>
                <router-link to="/about">
                    <el-menu-item index="3">
                        {{ navData.about }}
                    </el-menu-item>
                </router-link>
                <router-link to="/contact">
                    <el-menu-item index="4">{{ navData.contact }}</el-menu-item>
                </router-link>
                <router-link to="/fabrication">
                    <el-menu-item index="5">{{ navData.fabrication }}</el-menu-item>
                </router-link>
                <router-link to="/videos">
                    <el-menu-item index="6">{{ navData.videos }}</el-menu-item>
                
                
                </router-link>
                <router-link to="/galleria">
                    <el-menu-item index="7">{{ navData.galleria }}</el-menu-item>
                
                
                </router-link>
                    <el-menu-item index="8">
                        <a href="https://mekmar.com/static/assets/mekmar-catalog/catolog-page.html" rel="nofollow" target="_blank"> 
                            {{ navData.catalog }}

                        </a>
                    
                    </el-menu-item>
                <router-link :to="'/'" style="margin-left:90px;">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/eng-logo.png" />
                    </el-menu-item>
                </router-link>
                <router-link :to="'/fr'">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/fr-logo.png" />
                    </el-menu-item>
                </router-link>
                <router-link :to="'/es'">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/es-logo.png" />
                    </el-menu-item>
                </router-link>
            </el-menu>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" v-else-if="dis_fr">
            
                <router-link :to="'/fr'">
                    <el-menu-item index="1">{{ navData.home }}</el-menu-item>
                </router-link>
            

                <el-sub-menu index="2">
                    <template #title>{{ navData.product }}</template>
                    <!-- <router-link v-for="item in productsList" :key="item.id" :to="('/fr/products/' + item.category_en)">
                        <el-menu-item :index="'2-'+ item.id">
                            {{ item.category_fr }}
                        </el-menu-item>
                    </router-link> -->
                    <a :href="('/fr/products/' + item.category_en)" v-for="item in productsList" :key="item.id">
                        <el-menu-item :index="'2-'+ item.id">
                            {{ item.category_fr }}
                        </el-menu-item>
                    </a>
                </el-sub-menu>

                <router-link to="/fr/about">
                    <el-menu-item index="3">
                        {{ navData.about }}
                    </el-menu-item>
                </router-link>
                <router-link to="/fr/contact">
                    <el-menu-item index="4">{{ navData.contact }}</el-menu-item>
                </router-link>
                <router-link to="/fr/fabrication">
                    <el-menu-item index="5">{{ navData.fabrication }}</el-menu-item>
                </router-link>
                <router-link to="/fr/videos">
                    <el-menu-item index="6">{{ navData.videos }}</el-menu-item>
                </router-link>
                <router-link to="/fr/galleria">
                    <el-menu-item index="7">{{ navData.galleria }}</el-menu-item>
                </router-link>
                <el-menu-item index="8">
                    <a href="https://mekmar.com/static/assets/mekmar-catalog/catolog-page.html" rel="nofollow" target="_blank">
                        {{ navData.catalog }}
                
                    </a>

                </el-menu-item>
                <router-link :to="'/'" style="margin-left:90px;">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/eng-logo.png" />
                    </el-menu-item>
                </router-link>
                <router-link :to="'/fr'">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/fr-logo.png" />
                    </el-menu-item>
                </router-link>
                <router-link :to="'/es'">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/es-logo.png" />
                    </el-menu-item>
                </router-link>
            </el-menu>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" v-else-if="dis_es">
            
                <router-link :to="'/es'">
                    <el-menu-item index="1">{{ navData.home }}</el-menu-item>
                </router-link>
            
                <el-sub-menu index="2">
                    <template #title>{{ navData.product }}</template>
                    <!-- <router-link v-for="item in productsList" :key="item.id" :to="('/es/products/' + item.category_en)">
                        <el-menu-item :index="'2-'+ item.id">
                            {{ item.category_es }}
                        </el-menu-item>
                    </router-link> -->
                    <a :href="('/es/products/' + item.category_en)" v-for="item in productsList" :key="item.id">
                        <el-menu-item :index="'2-'+ item.id">
                            {{ item.category_es }}
                        </el-menu-item>
                    </a>
                </el-sub-menu>
                <router-link to="/es/about">
                    <el-menu-item index="3">
                        {{ navData.about }}
                    </el-menu-item>
                </router-link>
                <router-link to="/es/contact">
                    <el-menu-item index="4">{{ navData.contact }}</el-menu-item>
                </router-link>
                <router-link to="/es/fabrication">
                    <el-menu-item index="5">{{ navData.fabrication }}</el-menu-item>
                </router-link>
                <router-link to="/es/videos">
                    <el-menu-item index="6">{{ navData.videos }}</el-menu-item>
                </router-link>
                <router-link to="/es/galleria">
                    <el-menu-item index="7">{{ navData.galleria }}</el-menu-item>
                </router-link>
                <el-menu-item index="8">
                    <a href="https://mekmar.com/static/assets/mekmar-catalog/catolog-page.html" rel="nofollow" target="_blank"> 
                        {{ navData.catalog }}
                    </a>
                </el-menu-item>
                <router-link :to="'/'" style="margin-left:90px;">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/eng-logo.png" />
                    </el-menu-item>
                </router-link>
                <router-link :to="'/fr'">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/fr-logo.png" />
                    </el-menu-item>
                </router-link>
                <router-link :to="'/es'">
                    <el-menu-item index="1">
                        <img src="https://cdn.mekmarimage.com/logo/es-logo.png" />
                    </el-menu-item>
                </router-link>
            </el-menu>
        </div>
    </div>
</template>

<script>
import service from "@/service/home";
// import store from "@/store";
import { mapGetters } from "vuex";
export default {
    created() {
        service.getProductList().then(data => {
            this.$store.dispatch('products_load_act', data)
        })

    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'productsList',
            'getMacDurum',
            'dis_en',
            'dis_fr',
            'dis_es',
            'navData',
            'link'
        ])
    },
    methods: {
        
    }
}
</script>

<style scoped>
.imageMekmar{
    width:120px;
    height:50px;
}
</style>