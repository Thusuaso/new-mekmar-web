<template>
    <br/>
    <div class="columns">
        <div class="column is-3" id="filters">
            <usageFilters
            :header="usa_product_list.list1_title"
            :filterList="usa_depo_usage_list"
            ></usageFilters>
            <usageFilters :header="usa_product_list.list2_title" :filterList="usa_depo_color_list"></usageFilters>
            <usageFilters :header="usa_product_list.list3_title" :filterList="usa_depo_size_list"></usageFilters>
        </div>
        <div class="column is-9">
            <h1 style="text-align:center;font-size:20px;font-weight: bold;">{{usa_product_list.header_title}}</h1>

            <ul class="cards" v-if="dis_en">
                <div class="grid gridColumn">
                    <products class="col-4 gridElement" v-for="item in usa_depo_product_list" :key="item" :urunadi="item.urunadi_en" :imageUrl="item.imagePath"
                        :size="item.size" :fiyat="item.fiyat" :link="'/usa/detail/' + item.urunadi_en + '/' + item.id" :stock="item.stok">
                    </products>
                </div>
                
            
            </ul>

            
            <ul class="cards" v-if="dis_fr">
                <div class="grid gridColumn">
                        <products class="col-4 gridElement" v-for="item in usa_depo_product_list" :key="item" :urunadi="item.urunadi_fr" :imageUrl="item.imagePath"
                            :size="item.size" :fiyat="item.fiyat" :link="'/fr/usa/detail/' + item.urunadi_en + '/' + item.id"
                            :stock="item.stok"></products>
                </div>
                
            </ul>
            <ul class="cards" v-if="dis_es">
                <div class="grid gridColumn">
                    <products class="col-4 gridElement" v-for="item in usa_depo_product_list" :key="item" :urunadi="item.urunadi_es" :imageUrl="item.imagePath"
                        :size="item.size" :fiyat="item.fiyat" :link="'/es/usa/detail/' + item.urunadi_en + '/' + item.id"
                        :stock="item.stok"></products>
                </div>
                
            </ul>
            <br/>
            <h1 style="text-align:center;font-size:20px;font-weight: bold;">
                {{usa_product_list.footer_title}}
            </h1>
            <ul class="cards" v-if="dis_en">
                <div class="grid gridColumn">
                    <products class="col-4 gridElement" v-for="item in usa_depo_out_of_stock_list" :key="item" :urunadi="item.urunadi_en" :imageUrl="item.imagePath"
                        :size="item.size" :fiyat="item.fiyat" :link="'/usa/detail/' + item.urunadi_en + '/' + item.id" :stock="item.stok">
                    </products>
                </div>
                
            </ul>
            <ul class="cards" v-else-if="dis_fr">
                <div class="grid gridColumn">
                    <products class="col-4 gridElement" v-for="item in usa_depo_out_of_stock_list" :key="item" :urunadi="item.urunadi_fr" :imageUrl="item.imagePath"
                        :size="item.size" :fiyat="item.fiyat" :link="'/fr/usa/detail/' + item.urunadi_en + '/' + item.id"
                        :stock="item.stok"></products>
                </div>
                
            </ul>
            <ul class="cards" v-else-if="dis_es">
                <div class="grid gridColumn">
                    <products class="col-4 gridElement" v-for="item in usa_depo_out_of_stock_list" :key="item" :urunadi="item.urunadi_es" :imageUrl="item.imagePath"
                        :size="item.size" :fiyat="item.fiyat" :link="'/es/usa/detail/' + item.urunadi_en + '/' + item.id"
                        :stock="item.stok"></products>
                </div>
                
            </ul>

        </div>
    </div>
</template>

<script>
import products from './Products.vue'
import { mapGetters } from 'vuex'
import usageFilters from '../../components/usa/filters/usageFilters'
export default {
    computed: {
        ...mapGetters([
            'usa_depo_product_list',
            'usa_depo_usage_list',
            'usa_depo_color_list',
            'usa_depo_size_list',
            'usa_depo_out_of_stock_list',
            'dis_en',
            'dis_fr',
            'dis_es',
            'usa_product_list'
        ])
    },
    components: {
        products,
        usageFilters
    }
}
</script>

<style scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
}
@media screen and (max-width:576px) {
    .gridColumn{
        display:block;
        width:100%;

    }
    .gridElement{
        display:block;
        width:100%;
    }
    #filters{
        display:none;
    }
}
</style>