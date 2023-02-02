<template>
    <div>
        <div class="appMain">
            <div class="appRestiricted">
                <ul class="appUl">
                    <li class="appLi" v-for="item in applicationList" :key="item">
                        <div v-if="dis_en">
                            <span class="appSpan1" >{{ item.name }}</span> <span class="appSpan2" >{{ item.value }}</span>

                        </div>
                        <div v-else-if="dis_fr">
                            <span class="appSpan1">{{ item.nameFr }}</span> <span class="appSpan2">{{ item.valueFr }}</span>

                        </div>
                        <div v-else-if="dis_es">
                            <span class="appSpan1">{{ item.nameEs }}</span> <span class="appSpan2">{{ item.valueEs }}</span>

                        </div>

                    </li>
                </ul>
            </div>
        </div>
        <div class="productSpecificationMain">
            <div class="productSpecificationRestrict">
                <h1 class="header" >
                    {{ product_detail.tab_2_specification }}
                </h1>
                <div class="columns">
                    <div class="column" v-for="item in applicationSymbol" :key="item">
                        <img :src="item.path"/>
                    </div>
                </div>
        
            </div>
        
        </div>
        <div class="" style="text-align:center;margin-top:25px;">
            <span>{{ product_detail.tab_2_test_report }}: </span> 
            <span><a :href="categoryProductDetail.product_test_rapor" target="_blank"><i class="pi pi-file-pdf" style="font-size: 20px"></i></a></span> 
            <span><img width="60" height="60" :src="'https://cdn.mekmarimage.com/logo/test-resport-logo.webp'" style="margin-left:20px;"/></span>
        </div>
    </div>
    
    
</template>
<script>
import {mapGetters} from "vuex"
export default {
    props: ['product_detail', 'applicationList', 'applicationSymbol', 'categoryProductDetail'],
    computed: {
        ...mapGetters([
            'dis_en',
            'dis_fr',
            'dis_es',

        ])
    }

}
</script>


<style scoped>
.appMain{
    width:100%;
    height:auto;
    margin:0px auto;
    padding:0px;
    border:none;
    text-align:left;
    vertical-align:top;
    text-decoration: none;
}
.appRestiricted {
    width: calc(100% - 50px);
    height: auto;
    margin: 0px auto;
    padding: 0px;
    border: none;
    text-align: center;
    vertical-align: top;
    text-decoration: none;
    margin-left:50px;
}
.appUl{
    display: inline-block;
    float:left;
    width:100%;
    height:auto;
    margin:0px auto;
    padding:0px;
    border:none;
    text-align: left;
}
.appLi{
    display:inline-block;
    float:left;
    width:45%;
    height:auto;
    border:1px solid #e9e7e7;
    margin-top:5px;
    margin-right:10px;
    padding:5px 5px;
    border-radius: 4px;
    background-color:#efefef;
}
.appSpan1{
    display: inline-block;
    float:left;
    width:50%;
    font-weight:bold;

}
.appSpan2{
    display: inline-block;
    float: right;
    width: 50%;
    padding-left:50px;
}
.productSpecificationMain{
    width:100%;
    height:auto;
    margin:0px auto;
    padding:0px;
    border:none;
}
.productSpecificationRestrict{
    width:calc(100%);
    height:auto;
    margin-left:25px;

}
@media screen and (max-width:576px) {
    .appLi{
        display:block;
        width:100%;
    }
    .appSpan1{
        display:block;
        width:70%;
    }
    .appRestiricted{
        width:100%;
        margin:0px;
    }
    .appSpan2{
        width: 30%;
    }

}
</style>