<template>
    <div class="appMain">
        <div class="appRestiricted">
            <ul class="appUl">
                <li class="appLi">
                    <span class="appSpan1">{{ product_detail.tab_1_code }}</span> <span class="appSpan2">{{ categoryProductDetail.product_code }}</span>
                </li>
                <li class="appLi">
                    <span class="appSpan1">{{ product_detail.tab_1_country }}</span> <span class="appSpan2">TURKEY</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="appMain">
        <div class="appRestiricted">
            <ul class="appUl">
                <li class="appLi">
                    <span class="appSpan1">{{ product_detail.tab_1_stonetype }}</span> <span class="appSpan2">{{ stoneType(categoryProductDetail.product_stoneType)}}</span>
                </li>
                <li class="appLi">
                    <span class="appSpan1">{{ product_detail.tab_1_varitaion }}</span> <span class="appSpan2">{{ variationType(categoryProductDetail.product_stoneType)}}</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="columns">
        <div class="column is-12">
            <h1 class="header">{{ product_detail.description }}</h1>
            <p v-if="dis_en" class="description">
                {{ categoryProductDetail.product_description_en }}
            </p>
            <p v-else-if="dis_fr">
                {{ categoryProductDetail.product_description_fr }}
            </p>
            <p v-else-if="dis_es">
                {{ categoryProductDetail.product_description_es }}
            </p>
        </div>
    </div>
</template>
<script>
import { mapGetters} from "vuex"
export default {
    props: ['product_detail'],
    computed: {
        ...mapGetters([
            'categoryProductDetail',
            'dis_en',
            'dis_fr',
            'dis_es',
            'productsList'
        ])
    },
    methods: {
        variationType(varType){
            if (varType == 1) {
                return 'MEDIUM'
            }
            else {
                return 'MINIMUM'
            }
            
        },
        
        stoneType(typeId) {
            if (this.dis_en) {
                return this.productsList.find(x => x.id == typeId).category_en
            } else if (this.dis_fr) {
                return this.productsList.find(x => x.id == typeId).category_fr
            } else if (this.dis_es) {
                return this.productsList.find(x => x.id == typeId).category_es
            }
            
        }
    }

}
</script>


<style scoped>
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
    width: 50%;
    font-weight: bold;
    font-size:15px;

}

.appSpan2 {
    display: inline-block;
    float: right;
    width: 50%;
    padding-left: 30px;
}
@media screen and (max-width:576px) {
    .appLi{
        display: block;
        float: left;
        width:100%;
    }
    .appSpan1{
        display:block;
        width:60%;
    }
        .appSpan2 {
            display: block;
            width: 40%;
        }
}
</style>