<template>
    <div>
        <h1 class="header">{{ videos_page.title1 }}</h1>
        <Carousel :value="videosListCategory1" :numVisible="3" :numScroll="1">
            <template #item="slotProps">
                <iframe width="420" height="315" :src="slotProps.data.videoUrl"></iframe>
            </template>
        </Carousel>
        
        <br/>
        <h1 class="header">{{ videos_page.title2 }}</h1>

        <Carousel :value="videosListCategory2" :numVisible="3" :numScroll="1">
            <template #item="slotProps">
                <iframe width="420" height="315" :src="slotProps.data.videoUrl"></iframe>
            </template>
        </Carousel>
        <br />
        <h1 class="header" v-if="!dis_fr">{{ videos_page.title3 }}</h1>

        <Carousel :value="videosListCategory3" :numVisible="3" :numScroll="1" v-if="!dis_fr">
            <template #item="slotProps">
                <iframe width="420" height="315" :src="slotProps.data.videoUrl"></iframe>
            </template>
        </Carousel>
        <br/>
        <h1 class="header" v-if="dis_fr">{{ videos_page.title3 }}</h1>

        <Carousel :value="videosListFranceCategory" :numVisible="3" :numScroll="1" v-if="dis_fr">
            <template #item="slotProps">
                <iframe width="420" height="315" :src="slotProps.data.videoUrl"></iframe>
            </template>
        </Carousel>
    </div>
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