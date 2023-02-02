<template>
    <div>
        <h1 class="header">
            {{ product_detail.benzerurun_title }}
        </h1>
        <div class="columns">
            <div class="column" v-for="item in benzer_urun_list.imageList" :key = item>
                <a :href="item.link_en">
                    <img class="imgClass" :src="item.webp" alt="Image Text" />
                </a>
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
            'benzer_urun_list'
        ])
    }

}
</script>

<style scoped>
.imgClass{
    width:270px;
    height:200px;
    filter: drop-shadow(16px 16px 20px black) invert(15%);
        transition: all 1s 0s ease-in-out;
}
.imgClass:hover{
    filter: none;
}
@media screen and (max-width:576px) {
    .imgClass{
        width:100%;
        height:auto;
    }
}
</style>