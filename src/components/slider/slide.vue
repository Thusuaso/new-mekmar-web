<template>
    <div class="galleria">
        <div style="margin-bottom:15px;">
            <a :href="'/usa'" target="_blank" @click="usaClick">
                <img :src="'https://cdn.mekmarimage.com/logo/mekmarusa-logo.webp'" />
            </a>
            
        </div>
        <el-carousel :interval="4000" arrow="always">
            <el-carousel-item v-for="item in slideFourList" :key="item">
                <img v-if="dis_en" :src="item.slide_webp" />
                <img v-else-if="dis_fr" :src="item.slide_webp_fr" />
                <img v-else-if="dis_es" :src="item.slide_webp_es"/>
            
            </el-carousel-item>
        </el-carousel>
        <el-carousel :interval="4000" arrow="always">
            <el-carousel-item v-for="item in slideOneList" :key="item">
                <img v-if="dis_en" :src="item.slide_webp" />
                <img v-else-if="dis_fr" :src="item.slide_webp" />
                <img v-else-if="dis_es" :src="item.slide_webp" />
        
            </el-carousel-item>
        </el-carousel>

        <el-carousel :interval="4000" arrow="always">
            <el-carousel-item v-for="item in slideTwoList" :key="item">
                <img v-if="dis_en" :src="item.slide_webp" />
                <img v-else-if="dis_fr" :src="item.slide_webp" />
                <img v-else-if="dis_es" :src="item.slide_webp" />
        
            </el-carousel-item>
        </el-carousel>
        <el-carousel :interval="4000" arrow="always">
            <el-carousel-item v-for="item in slideThreeList" :key="item">
                <img v-if="dis_en" :src="item.slide_webp" />
                <img v-else-if="dis_fr" :src="item.slide_webp" />
                <img v-else-if="dis_es" :src="item.slide_webp" />
        
            </el-carousel-item>
        </el-carousel>


    </div>    
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters([
            'slideOneList',
            'slideTwoList',
            'slideThreeList',
            'slideFourList',
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
.galleria{
    margin-top:25px;
    margin-left:20px;
}
.galleriaImg{
    display: block;
}
.galleriaTitle{
    margin-bottom: .5rem;
    text-align:center;
}
</style>