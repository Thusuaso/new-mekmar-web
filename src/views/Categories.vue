<template>
    <div class="columns" v-if="mobil">

        <div class="column is-12">
            <categoryDetail></categoryDetail>
        </div>
    </div>
    <div class="columns" v-else>
        <div class="column is-3" >
            <categoryFilter></categoryFilter>
        </div>
        <div class="column is-9" >
            <categoryDetail></categoryDetail>
        </div>
    </div>
    
    
</template>

<script>
import categoryDetail from '@/components/categorydetail/categoryDetail.vue'
import categoryFilter from '@/components/categorydetail/categoryFilter.vue'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
        mobil:false,
      }
    },
    computed: {
      ...mapGetters([
        'mobile_width'
      ])  
    },
    components: {
        categoryDetail,
        categoryFilter
    },
    created() {
        if (window.innerWidth < 576) {
            this.mobil = true
        } else {
            this.mobil = false
        }
    }
}
</script>

<style scoped>

</style>