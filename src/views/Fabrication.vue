<template>
    <div>
        <h2 class="header">{{ fabrication_page.header1 }}</h2>
        <Carousel v-if="!mobile_width" :value="categoryOne" :numVisible="4" :numScroll="4"
            :responsiveOptions="responsiveOptions" orientation="horizontal" :circular="true">
            <template #item="slotProps">
                <div>
                    <div>
                        <div>
                            <Image :src="slotProps.data.webpB" alt="Image Text" @click="isClickedShow()"
                                style="cursor:pointer;">
                                <template #indicator>
                                    Preview Content
                                </template>
                            </Image>
                        </div>
                        <div style="width:100%;">
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-if="dis_en">
                                {{ slotProps.data.titleEn }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_fr">
                                {{ slotProps.data.titleFr }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_es">
                                {{ slotProps.data.titleEs }}</div>
        
                        </div>
                        <Dialog v-model:visible="image_form" :modal="true">
                            <Galleria :value="fabricationList" :responsiveOptions="responsiveOptions" :numVisible="5"
                                containerStyle="max-width: 640px" :showItemNavigators="true" :showThumbnails="false">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.webpB" style="width: 100%; display: block;" />
                                </template>
                            </Galleria>
                        </Dialog>
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel v-else :value="categoryOne" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            orientation="horizontal"  verticalViewPortHeight="330px">
            <template #item="slotProps">
                <div>
                    <div>
                        <div>
                            <Image :src="slotProps.data.webpB" alt="Image Text" @click="isClickedShow()"
                                style="cursor:pointer;">
        
                            </Image>
                        </div>
                        <div style="width:100%;">
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-if="dis_en">
                                {{ slotProps.data.titleEn }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_fr">
                                {{ slotProps.data.titleFr }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_es">
                                {{ slotProps.data.titleEs }}</div>
        
                        </div>
                        <Dialog v-model:visible="image_form" :modal="true">
                            <Galleria :value="fabricationList" :responsiveOptions="responsiveOptions" :numVisible="5"
                                containerStyle="max-width: 640px" :showItemNavigators="true" :showThumbnails="false">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.webpB" style="width: 100%; display: block;" />
                                </template>
                            </Galleria>
                        </Dialog>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    <div>
        <h2 class="header">{{ fabrication_page.header2 }}</h2>

        <Carousel v-if="!mobile_width" :value="categoryTwo" :numVisible="4" :numScroll="4"
            :responsiveOptions="responsiveOptions" orientation="horizontal" :circular="true" >
            <template #item="slotProps">
                <div>
                    <div>
                        <div>
                            <Image :src="slotProps.data.webpB" alt="Image Text" @click="isClickedShow()"
                                style="cursor:pointer;">
                                <template #indicator>
                                    Preview Content
                                </template>
                            </Image>
                        </div>
                        <div style="width:100%;">
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-if="dis_en">
                                {{ slotProps.data.titleEn }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_fr">
                                {{ slotProps.data.titleFr }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_es">
                                {{ slotProps.data.titleEs }}</div>
    
                        </div>
                        <Dialog v-model:visible="image_form" :modal="true">
                            <Galleria :value="fabricationList" :responsiveOptions="responsiveOptions" :numVisible="5"
                                containerStyle="max-width: 640px" :showItemNavigators="true" :showThumbnails="false">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.webpB" style="width: 100%; display: block;" />
                                </template>
                            </Galleria>
                        </Dialog>
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel v-else :value="categoryTwo" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            orientation="horizontal"  verticalViewPortHeight="330px">
            <template #item="slotProps">
                <div>
                    <div>
                        <div>
                            <Image :src="slotProps.data.webpB" alt="Image Text" @click="isClickedShow()"
                                style="cursor:pointer;">
    
                            </Image>
                        </div>
                        <div style="width:100%;">
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-if="dis_en">
                                {{ slotProps.data.titleEn }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_fr">
                                {{ slotProps.data.titleFr }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_es">
                                {{ slotProps.data.titleEs }}</div>
    
                        </div>
                        <Dialog v-model:visible="image_form" :modal="true">
                            <Galleria :value="fabricationList" :responsiveOptions="responsiveOptions" :numVisible="5"
                                containerStyle="max-width: 640px" :showItemNavigators="true" :showThumbnails="false">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.webpB" style="width: 100%; display: block;" />
                                </template>
                            </Galleria>
                        </Dialog>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    <div>
        <h2 class="header">{{ fabrication_page.header3 }}</h2>

        <Carousel v-if="!mobile_width" :value="categoryThree" :numVisible="4" :numScroll="4"
            :responsiveOptions="responsiveOptions" orientation="horizontal" :circular="true" >
            <template #item="slotProps">
                <div>
                    <div>
                        <div>
                            <Image :src="slotProps.data.webpB" alt="Image Text" @click="isClickedShow()"
                                style="cursor:pointer;">
                                <template #indicator>
                                    Preview Content
                                </template>
                            </Image>
                        </div>
                        <div style="width:100%;">
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-if="dis_en">
                                {{ slotProps.data.titleEn }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_fr">
                                {{ slotProps.data.titleFr }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_es">
                                {{ slotProps.data.titleEs }}</div>
    
                        </div>
                        <Dialog v-model:visible="image_form" :modal="true">
                            <Galleria :value="fabricationList" :responsiveOptions="responsiveOptions" :numVisible="5"
                                containerStyle="max-width: 640px" :showItemNavigators="true" :showThumbnails="false">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.webpB" style="width: 100%; display: block;" />
                                </template>
                            </Galleria>
                        </Dialog>
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel v-else :value="categoryThree" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            orientation="horizontal" verticalViewPortHeight="330px">
            <template #item="slotProps">
                <div>
                    <div>
                        <div>
                            <Image :src="slotProps.data.webpB" alt="Image Text" @click="isClickedShow()"
                                style="cursor:pointer;">
    
                            </Image>
                        </div>
                        <div style="width:100%;">
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-if="dis_en">
                                {{ slotProps.data.titleEn }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_fr">
                                {{ slotProps.data.titleFr }}</div>
                            <div style="width:calc(100% - 50px);text-align:center;margin-left:25px;" v-else-if="dis_es">
                                {{ slotProps.data.titleEs }}</div>
    
                        </div>
                        <Dialog v-model:visible="image_form" :modal="true">
                            <Galleria :value="fabricationList" :responsiveOptions="responsiveOptions" :numVisible="5"
                                containerStyle="max-width: 640px" :showItemNavigators="true" :showThumbnails="false">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.webpB" style="width: 100%; display: block;" />
                                </template>
                            </Galleria>
                        </Dialog>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    
    
</template>
<script>
import store from '@/store'
import service from "@/service/home"
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters([
            'fabricationList',
            'dis_en',
            'dis_fr',
            'dis_es',
            'mobile_width',
            'fabrication_page'
      ])  
    },
    beforeRouteEnter(to, from, next) {
        store.dispatch('fullScreenLoadingAct', true)

        service.getFabricationList().then(data => {
            store.dispatch("fabrication_load_act", data)
            store.dispatch('fullScreenLoadingAct', false)

        })
        next()
    },

    data() {
        return {
            image_form:false,
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
            ],
            categoryOne: [],
            categoryTwo: [],
            categoryThree:[]
        }
    },
    methods: {
        isClickedShow() {
            this.image_form = true
        }
    },
    mounted() {
        this.categoryOne = this.fabricationList.filter(x => x.line == 1)
        this.categoryTwo = this.fabricationList.filter(x => x.line == 2)
        this.categoryThree = this.fabricationList.filter(x => x.line == 3)


    }
}
</script>
<style scoped>
.header{
    font-size:18px;
    font-weight:bold;
    text-align:center;
}
</style>