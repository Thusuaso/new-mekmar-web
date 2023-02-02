<template>

    <div class="columns">
        <div class="column">
            <div class="categoriesMain" v-if="dis_en">
                <h1>Colors</h1>
                <ul class="categoriesSub">
                    <li @click="filterColor('All')">
                        <div class="spanDiv">
                            <span class="span1">All</span><span class="span2">{{ categoryDetailColorAllSum }}</span>
                        </div>
                    </li>
                    <li v-for="item in categoryDetailColor" :key="item" @click="filterColor(item.color_en)">
                        <div class="spanDiv" >
                            <span class="span1">{{ item.color_en }}</span>  <span class="span2">{{ item.color_en_count }}</span>

                        </div>
                            
    
                    </li>
                </ul>
            </div>
            <div class="categoriesMain" v-else-if="dis_fr">
                <h1>Couleurs</h1>
                <ul class="categoriesSub">
                    <li @click="filterColor('All')">
                        <div class="spanDiv">
                            <span class="span1">Toutes</span><span class="span2">{{ categoryDetailColorAllSum }}</span>
                        </div>
                    </li>
                    <li v-for="item in categoryDetailColor" :key="item" @click="filterColor(item.color_en)">
                        <div class="spanDiv">
                            <span class="span1">{{ item.color_fr }}</span> <span class="span2">{{ item.color_fr_count }}</span>
                    
                        </div>
                    
                    
                    </li>
                </ul>
            </div>
            <div class="categoriesMain" v-else-if="dis_es">
                <h1>Colores</h1>
                <ul class="categoriesSub">
                    <li @click="filterColor('All')">
                        <div class="spanDiv">
                            <span class="span1">Todos</span><span class="span2">{{ categoryDetailColorAllSum }}</span>
                        </div>
                    </li>
                    <li v-for="item in categoryDetailColor" :key="item" @click="filterColor(item.color_en)">
                        <div class="spanDiv">
                            <span class="span1">{{ item.color_es }}</span> <span class="span2">{{ item.color_es_count }}</span>
                    
                        </div>
                    
                    
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="categoriesMain" v-if="dis_en">
                <h1>Finish</h1>
                <ul class="categoriesSub">
                    <li @click="filterFinish('All')">
                        <div class="spanDiv">
                            <span class="span1">All</span><span class="span2">{{ categoryDetailFinishAllSum }}</span>
                        </div>
                    </li>
                    <li v-for="item in categoryDetailFinishList" :key="item" @click="filterFinish(item.finish_en)">
                        <div class="spanDiv">
                            <span class="span1">{{ item.finish_en }}</span> <span class="span2">{{ item.finish_count
                            }}</span>
    
                        </div>

                    </li>
                </ul>
            </div>
            <div class="categoriesMain" v-else-if="dis_fr">
                <h1>Finir</h1>
                <ul class="categoriesSub">
                    <li @click="filterFinish('All')">
                        <div class="spanDiv">
                            <span class="span1">Toutes</span><span class="span2">{{ categoryDetailFinishAllSum }}</span>
                        </div>
                    </li>
                    <li v-for="item in categoryDetailFinishList" :key="item" @click="filterFinish(item.finish_en)">
                        <div class="spanDiv">
                            <span class="span1">{{ item.finish_fr }}</span> <span class="span2">{{ item.finish_count
                            }}</span>
                    
                        </div>
                    
                    </li>
                </ul>
            </div>
            <div class="categoriesMain" v-else-if="dis_es">
                <h1>Finalizar</h1>
                <ul class="categoriesSub">
                    <li @click="filterFinish('All')">
                        <div class="spanDiv">
                            <span class="span1">Todos</span><span class="span2">{{ categoryDetailFinishAllSum }}</span>
                        </div>
                    </li>
                    <li v-for="item in categoryDetailFinishList" :key="item" @click="filterFinish(item.finish_en)">
                        <div class="spanDiv">
                            <span class="span1">{{ item.finish_es }}</span> <span class="span2">{{ item.finish_count
                            }}</span>
                    
                        </div>
                    
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import service from '@/service/home'

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'categoryDetailColor',
            'dis_en',
            'dis_fr',
            'dis_es',
            'categoryDetailColorAllSum',
            'categoryDetailFinishList',
            'categoryDetailFinishAllSum'
        ])
    },
    created() {
        this.$store.dispatch('fullScreenLoadingAct', true)

        service.getCategoryDetailColor(this.$route.params.category).then(data => {
            this.$store.dispatch('category_detail_color_load_act', data)
            this.$store.dispatch('fullScreenLoadingAct', false)


        })

        
    },
    methods: {
        filterColor(color) {
            this.emitter.emit("colorFilterValue",color)
        },
        filterFinish(finish) {
            this.$store.dispatch('fullScreenLoadingAct', true)

            service.getCategoryProductFinish(this.$route.params.category, finish).then(data => {
                this.$store.dispatch('category_detail_load_act', data)
                this.$store.dispatch('fullScreenLoadingAct', false)

            })
            this.emitter.emit("finishEmitter", false)
        }

    },
    mounted() {

    }
}
</script>

<style scoped>
.spanDiv{
    width:100%;
    padding-left:10px;
    padding-top:5px;
    cursor:pointer;
}
.span1{
    width:50%;
}
.span2{
    float:right;
    width: 50%;
    text-align:center;
}
.spanDiv:hover{
    background-color:#fefbf0;
}
.categoriesMain{
    width: calc(100% - 100px);
    height:auto;
    margin:0px auto;
    padding:0px;
    overflow:hidden;
    border:none;
    text-align: left;
    vertical-align:top;
    text-decoration: none;
    border-radius: 10px;
    background-color: #eeeeee;
    box-shadow: 4px 4px 5px #ccc;
    border: 1px solid gray;

}
.categoriesSub{
    height:auto;
    
}
.categoriesSub>li>a{
    color:#999;
    text-decoration: none;
}
.categoriesSub>li>a:hover {
    text-decoration: none;
    color:#000;
}
.categoriesMain>h1{
    width:100%;
    height:30px;
    font-weight: bold;
    background-color:#fff2cc;
    text-align:center;
    border-bottom:3px solid gray;
}
</style>