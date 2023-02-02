<template>
    <div>
            <Galleria :value="gallery_photos_project" v-model:activeIndex="activeIndex"
                :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
                :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false"
                v-model:visible="displayCustom">
                <template #item="slotProps">

                    <a :href="slotProps.item.product_link" target="_blank">
                        <img :src="slotProps.item.image_link" :alt="slotProps.item.product_name"
                            style="width: 100%;height:700px; display: block;" />

                    </a>
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.image_link" :alt="slotProps.item.product_name" style="display: block;" />
                </template>
                <template #caption="{ item }">
                    <h4 style="margin-bottom: .5rem;">{{ item.product_name }}</h4>
                </template>
            </Galleria>


        <div v-if="galleryList" class="flex" style="margin-left:55px;">

            <div v-for="(image, index) of galleryList" class="flex-initial flex align-items-center justify-content-center m-2 px-5 py-3" :key="index">
                <div class="container" v-if="image.photosList.length > 0">
                    <img :src="image.project_image_link" :alt="image.project_name" class="image"
                        @click="imageClick(index, image.project_id)" />
                    <div class="centered">{{ image.project_name }}</div>

                </div>

            </div>
        </div>

    </div>






</template>
<script>

import service from '@/service/home';
export default {
    components: {
    },
    data() {
        return {
            gallery_photos_project: [],
            galleryList: [],
            activeIndex: 0,
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
            displayCustom: false,

        }
    },
    created() {
        this.$store.dispatch('fullScreenLoadingAct', true)

        service.getGalleriaPhotos().then(data => {
            this.galleryList = data
            this.$store.dispatch('fullScreenLoadingAct', false)


        })
    },
    methods: {
        imageClick(index, project_id) {
            this.activeIndex = index;
            this.displayCustom = true;
            this.gallery_photos_project = this.galleryList.filter(x => x.project_id == project_id)[0].photosList
        }
    }
}

</script>


<style scoped>
.container {
    position: relative;
    text-align: center;
    color: white;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    font-weight: bolder;
    color: white;
}

.image {
    cursor: pointer;
    width: 250px;
    height: 250px;
    filter: drop-shadow(16px 16px 20px black) invert(25%);
    transition: all 1s 0s ease-in-out;
}

.image:hover {
    filter: none;
    transform: scale(1.1);
}
</style>

