<template>
        <!-- <h1 class="header">{{ videos_page.title1 }}</h1>
        <Carousel :value="videosListCategory1" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" orientation="horizontal" :circular="true">
            <template #item="slotProps">
                <iframe :src="slotProps.data.videoUrl"></iframe>
            </template>
        </Carousel>
        
        <br/>
        <h1 class="header">{{ videos_page.title2 }}</h1>

        <Carousel :value="videosListCategory2" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" orientation="horizontal" :circular="true">
            <template #item="slotProps">
                <iframe  :src="slotProps.data.videoUrl"></iframe>
            </template>
        </Carousel>
        <br />
        <h1 class="header" v-if="!dis_fr">{{ videos_page.title3 }}</h1>

        <Carousel :value="videosListCategory3" :numVisible="4" :numScroll="1" v-if="!dis_fr" :responsiveOptions="responsiveOptions" orientation="horizontal" :circular="true">
            <template #item="slotProps">
                <iframe  :src="slotProps.data.videoUrl"></iframe>
            </template>
        </Carousel>
        <br/>
        <h1 class="header" v-if="dis_fr">{{ videos_page.title3 }}</h1>

        <Carousel :value="videosListFranceCategory" :numVisible="4" :numScroll="1" v-if="dis_fr" :responsiveOptions="responsiveOptions" orientation="horizontal" :circular="true">
            <template #item="slotProps">
                <iframe  :src="slotProps.data.videoUrl"></iframe>
            </template>
        </Carousel> -->

        <Carousel :value="videosListCategory1" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px"
            :responsiveOptions="responsiveOptions" style="text-align:center;" circular autoplayInterval="3000">
            <template #header>
                {{ videos_page.title1 }}
            </template>
            <template #item="slotProps">
                <iframe style="width:450px;height:330px;text-align:center;" :src="slotProps.data.videoUrl"></iframe>

            </template>
        </Carousel>

        <Carousel :value="videosListCategory2" :numVisible="1" :numScroll="1" orientation="vertical"
            verticalViewPortHeight="330px" :responsiveOptions="responsiveOptions" style="text-align:center;" circular
            autoplayInterval="3000">
            <template #header>
                {{ videos_page.title2 }}
            </template>
            <template #item="slotProps">
                <iframe style="width:450px;height:330px;text-align:center;" :src="slotProps.data.videoUrl"></iframe>
        
            </template>
        </Carousel>

        <Carousel v-if="!dis_fr" :value="videosListCategory3" :numVisible="1" :numScroll="1" orientation="vertical"
            verticalViewPortHeight="330px" :responsiveOptions="responsiveOptions" style="text-align:center;" circular
            autoplayInterval="3000">
            <template #header>
                {{ videos_page.title3 }}
            </template>
            <template #item="slotProps">
                <iframe style="width:450px;height:330px;text-align:center;" :src="slotProps.data.videoUrl"></iframe>
        
            </template>
        </Carousel>
        <Carousel v-if="dis_fr" :value="videosListFranceCategory" :numVisible="1" :numScroll="1" orientation="vertical"
            verticalViewPortHeight="330px" :responsiveOptions="responsiveOptions" style="text-align:center;" circular
            autoplayInterval="3000">
            <template #header>
                {{ videos_page.title3 }}
            </template>
            <template #item="slotProps">
                <iframe style="width:450px;height:330px;text-align:center;" :src="slotProps.data.videoUrl"></iframe>
        
            </template>
        </Carousel>




</template>

<script>
import service from "@/service/home";
import store from "@/store"
import { mapGetters } from "vuex";
export default {
    beforeRouteEnter(to, from, next) {
        store.dispatch('fullScreenLoadingAct', true)

        service.getVideosList().then(data => {
            store.dispatch("videos_load_act", data)
            store.dispatch('fullScreenLoadingAct', false)

            next()
        })
    },
    data() {
        return {
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
      }  
    },
    computed: {
        ...mapGetters([
            'videosListCategory1',
            'videosListCategory2',
            'videosListCategory3',
            'videosListFranceCategory',
            'dis_fr',
            'videos_page'
        ])
    }
}
</script>

<style scoped>
.header {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}
</style>