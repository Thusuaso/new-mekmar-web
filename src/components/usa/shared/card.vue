<template>
    <div class="appMain">
        <div class="appRestiricted">
            <ul class="appUl">
                <li class="appLi">
                    <span class="appSpan1">{{ usa_product_detail.sale_price }}: </span><span class="appSpan2">${{ usa_product_detail_list[0].fiyat }} / sqft</span>
                </li>
                <li class="appLi">
                    <span class="appSpan1">{{ usa_product_detail.sku }}: </span><span class="appSpan2">{{ usa_product_detail_list[0].skuNo }}</span>
                </li>
                <li class="appLi">
                    <span class="appSpan1">{{ usa_product_detail.in_stock }}: </span><span class="appSpan2">{{ usa_product_detail_list[0].stok }} sqft available</span>
                </li>
                <li class="appLi">
                    <span class="appSpan1" style="width:100%;">
                        
                        
                        <el-progress :percentage="usa_product_detail_list[0].oran" :format="format" />
                    
                    
                    </span><span class="appSpan2" style="width:0%;"></span>
                </li>
                <li class="appLi">
                    <span class="appSpan1">{{ usa_product_detail.size }}: </span><span class="appSpan2">{{ usa_product_detail_list[0].size }}</span>
                </li>
                <li class="appLi">
                    <span class="appSpan1">{{ usa_product_detail.surface }} & {{usa_product_detail.edge}}: </span><span class="appSpan2">{{ usa_product_detail_list[0].surface }}</span>
                </li>                
            </ul>
        </div>
    </div>
    <hr/>
    <div class="appMain">
        <div class="appRestiricted">
            <ul class="appUl">
                <li class="appLi">
                    <span class="appSpan1">{{ usa_product_detail.per_box}}: </span> <span class="appSpan2">
                        {{ usa_product_detail_list[0].kutudetay_en }}
                        </span>
                </li>
                <li class="appLi">
                    <span class="appSpan1">{{ usa_product_detail.per_create }}: </span> <span class="appSpan2">{{ usa_product_detail_list[0].kasadetay_en }}</span>
                </li>
            </ul>
        </div>
    </div>
    <h1 class="header">{{ usa_product_detail.description}} </h1>
    <p>
        {{ usa_product_detail_list[0].aciklama_en }}
    </p>
    <hr />
    <h1 class="header">{{ usa_product_detail.delivery_terms }} </h1>
    <p>
        {{ usa_product_detail.delivery_depo_title }}
    </p>
</template>
<script>
import {mapGetters} from 'vuex'
export default {

    props: ['usa_product_detail'],
    computed: {
        ...mapGetters([
            'usa_product_detail_list'
        ])
    }
}
</script>

<style scoped>

p{
    font-size:15px;
    text-indent: 25px;
    text-align: justify;
}
.appMain {
    width: 100%;
    height: auto;
    margin: 0px auto;
    padding: 0px;
    border: none;
    text-align: left;
    vertical-align: top;
    text-decoration: none;
}

.appRestiricted {
    width: calc(100%);
    height: auto;
    margin: 0px auto;
    padding: 0px;
    border: none;
    text-align: center;
    vertical-align: top;
    text-decoration: none;
}

.appUl {
    display: inline-block;
    float: left;
    width: 100%;
    height: auto;
    margin: 0px auto;
    padding: 0px;
    border: none;
    text-align: left;
}

.appLi {
    display: inline-block;
    float: left;
    width: 48%;
    height: auto;
    border: 1px solid #e9e7e7;
    margin-top: 5px;
    margin-right: 10px;
    padding: 5px 5px;
    border-radius: 4px;
    background-color: #efefef;
}

.appSpan1 {
    display: inline-block;
    float: left;
    width: 40%;
    font-weight: bold;
    font-size: 15px;

}

.appSpan2 {
    display: inline-block;
    width: 60%;
    padding-left: 0px;
}
</style>