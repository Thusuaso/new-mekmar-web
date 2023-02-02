<template>
    <div >
            <h1 v-if="dis_en" class="header">{{ categoryProductDetail.product_name_en }}</h1>
            <h1 v-else-if="dis_fr" class="header">{{ categoryProductDetail.product_name_fr }}</h1>
            <h1 v-else-if="dis_es" class="header">{{ categoryProductDetail.product_name_es }}</h1>

            <div class="columns">
                <div class="column is-6">
                    <photos :photos="categoryProductDetailPhotos"></photos>
                </div>
                <div class="column is-6">
                    <detail></detail>
                </div>

            </div>
            <div class="columns">
                <div class="column is-12">
                    <interestedin></interestedin>
                </div>
            </div>
            <div class="columns">
                <div class="column is-12">
                    <suggested></suggested>
                </div>
            </div>


    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import service from '@/service/home'
import photos from '@/components/productsdetail/photos.vue'
import suggested from '@/components/productsdetail/suggested.vue'
import interestedin from '@/components/productsdetail/interestedin.vue'
import detail from '@/components/productsdetail/detail.vue'


export default {
    components: {
        photos,
        suggested,
        interestedin,
        detail
    },
    computed: {
        ...mapGetters([
            'categoryProductDetail',
            'dis_en',
            'dis_fr',
            'dis_es',
            'categoryProductDetailPhotos'
        ])
    },
    created() {
        service.getCategoryProductDetail(this.$route.params.productName).then(data => {
            this.$store.dispatch('category_product_detail_load_act', data)
        })
    }
}
</script>

<style scoped>

</style>