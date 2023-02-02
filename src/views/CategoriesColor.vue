<template>
    <div class="columns">
        <div class="column is-3">
                <categoryFilter></categoryFilter>
        </div>
        <div class="column is-9">
            <div class="categoryMain">
                <div class="categoryMainRestricted">
                    <div class="categoryImg" v-for="img in categoryDetailColorList" :key="img">
                        <Image :src="img.webp" alt="Image Text" imageStyle="width:300px;height:200px;" />
                    </div>
                </div>
            </div>
        </div>  
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
import categoryFilter from '@/components/categorydetail/categoryFilter.vue'
import service from "@/service/home"
export default {
    computed: {
        ...mapGetters([
        'categoryDetailColorList'
      ])  
    },
    components: {
        categoryFilter
    },
    created() {
        this.$store.dispatch('fullScreenLoadingAct', true)

        service.getCategoryDetailColorList(this.$route.params.category, this.$route.params.color).then(data => {
            this.$store.dispatch("category_detail_color_list_load_act", data)
            this.$store.dispatch('fullScreenLoadingAct', false)

        })
    }
}
</script>

<style scoped>
.categoryMain {
    width: 100%;
    height: auto;
    margin: 0px auto;
    padding: 0px;
    border: none;
    overflow: hidden;
    text-align: center;
    vertical-align: top;
    text-decoration: none;
}

.categoryMainRestricted {

    width: calc(100% - 100px);
    height: auto;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    text-align: center;
    vertical-align: top;
    text-decoration: none;

}

.categoryImg {
    display: inline-block;
    float: left;
    width: 280px;
    height: 200px;
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>