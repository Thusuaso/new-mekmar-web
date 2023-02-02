<template>
    <div>
        <el-carousel :interval="4000" type="card" height="500px" width="450px">
            <el-carousel-item v-for="item in photos" :key="item" style="height:500px;width:450px;">
                <img :src="item.product_jpeg" style="height:500px;width:450px;" @click="isClickDisplay(item.index)"/>
            </el-carousel-item>
        </el-carousel>

        <Galleria :value="photos" :numVisible="7" containerStyle="max-width: 850px" :circular="true" :fullScreen="true"
            :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayCustom"
            v-model:activeIndex="activeIndex">
            <template #item="slotProps">
                <img :src="slotProps.item.product_jpeg" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.product_jpeg" style="display: block;" />
        
            </template>
        
        </Galleria>
    </div>
</template>

<script>
export default {
    props: ['photos'],
    computed: {

    },
    data() {
        return {
            displayCustom:false,
            activeIndex:5,
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
            ]
        }
    },
    methods: {
        isClickDisplay(index) {
            this.activeIndex = index
            this.displayCustom = true
        }
    }
}
</script>

<style scoped>
.el-carousel__item h1 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>