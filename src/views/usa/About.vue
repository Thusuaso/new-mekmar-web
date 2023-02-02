<template>
    <div class="container" >
        
            <h1 class="header">{{ usa_about_page.title }}</h1>
            <div class="element">
                <ul v-for="item in usa_about_page.items" :key="item">
                    <li><span style="font-weight:bold;">>></span> {{item.value}}</li>
                </ul>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'usa_about_page'
        ])
    }
}
</script>
<style scoped>
.container{
    display:block;
    width:100%;
    height:auto;
    
}
.element{
    width:49%;
    margin-left:25%;
    text-align:justify;
}
.element>li{
    font-size:12px;
}
</style>