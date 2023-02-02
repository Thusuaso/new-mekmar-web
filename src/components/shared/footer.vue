<template>
    <div class="columns">
        <div class="column is-4">
            <h1 class="title">{{ aboutData.title }}</h1>
            <p class="aboutDescription">
                {{ aboutData.description }}
            </p>
            <ul class="aboutDataItems">
                <li v-for="item in aboutData.items" :key="item" class="aboutDataItem">
                    >> {{item.value}}
                </li>
            </ul>
            <br/>
            <div class="socialMedias">
                <div class="socialMedia">
                    <a href="https://www.facebook.com/mekmar" target="_blank">
                        <i class="fab fa-facebook-square fa-lg " id="facebook"></i>
                    </a>
                </div>
                <div class="socialMedia">
                    <a href="https://twitter.com/MekmarMarble" target="_blank">
                        <i class="fab fa-twitter fa-lg" id="twitter"></i>
                    </a>
                </div>
                <div class="socialMedia">
                    <a href="https://www.youtube.com/channel/UCYz9dfb0A44hUzNiMwNQQFA" target="_blank">
                        <i class="fab fa-youtube fa-lg" id="youtube"></i>
                    </a>
                </div>
                <div class="socialMedia">
                    <a href="https://www.instagram.com/mekmarnaturalstone/" target="_blank">
                        <i class="fab fa-instagram fa-lg" id="instagram"></i>
                    </a>
                </div>
                <div class="socialMedia">
                    <a href="https://tr.pinterest.com/export10499/" target="_blank">
                        <i class="fab fa-pinterest fa-lg" id="pinterest"></i>
                    </a>
                </div>
                    

            </div>
        </div>
        <div class="column is-4" style="text-align:center;">
            <Galleria :value="newsData.photos" :numVisible="7"
                containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true"
                :showThumbnails="false" v-model:visible="displayCustom" v-model:activeIndex="activeIndex">
                <template #item="slotProps">
                    <img :src="slotProps.item.webpB" style="width: 100%; display: block;" />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.webpS" style="display: block;" />

                </template>

            </Galleria>
                <h1 class="header">{{ newsData.title}}</h1>

            <div class="grid">
                <div v-for="image of newsData.photos" class="col-4" :key="image">
                    
                    <img :src="image.webpB" style="cursor: pointer;border-radius: 5px;" width="150" height="150" @click="imageClick(image.index)" />
                </div>
            </div>
        </div>
        <div class="column is-4">
            <h1 class="title">{{ personelData.title }}</h1>
            <card v-for="personel in personelData.items" :key="personel" :personel="personel" style="margin-bottom:15px;"></card>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import card from '@/components/shared/card'
export default {
    data() {
        return {
            activeIndex: 0,
            displayCustom: false,
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
      }  
    },
    components: {
        card
    },
    computed: {
        ...mapGetters([
            'aboutData',
            'personelData',
            'newsData'
        ])
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index
            this.displayCustom = true
        }
    }
}
</script>

<style scoped>
.socialMedias{
    width:100%;
    height:auto;
}
.socialMedia{
    display:inline-block;
    float: left;
    width:50px;
    height:auto;

}
@media screen and (max-width:576px) {
    .socialMedias{
        width:100%;
    }
    .socialMedia{
        display:block;
        width:40px;
    }
}
.title{
    text-align: center;
    font-size:21px;
    color:gray;
}
.aboutDescription{
    font-size:16px;
    text-align: justify;
    padding-bottom:5px;
    line-height: 32px;
}
.aboutDataItem{
    text-align: justify;
    font-size:14px;
    line-height:25px;
}
.aboutDataItems{
    padding-left:15px;
}
</style>