<template>
    <br/>
    <br/>
    <div class="columns">
        <div class="column">
            <photos :photos="usa_product_detail_photos_list"></photos>
        </div>
        <div class="column">
            <card :usa_product_detail="usa_product_detail" :usa_product_detail_list="usa_product_detail_list"></card>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import photos from '../../components/productsdetail/photos'
import card from '../../components/usa/shared/card.vue'
export default {
    components: {
        photos,
        card
    },
    computed: {
        ...mapGetters([
            'usa_product_detail_list',
            'usa_product_detail_photos_list',
            'usa_product_detail'
        ])
    }
}
</script>