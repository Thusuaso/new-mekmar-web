<template>
    <div class="table">
        <h1 class="tableHeader">
            {{header}}
        </h1>
        <ul v-if="dis_en">
            <li v-for="item in filterList" :key="item">
                <a :href="item.link" class="link">
                    <div class="container">
                        <p class="element" >{{ item.name}}</p>
                    </div>
                </a>
                

            </li>
        </ul>
        <ul v-else-if="dis_fr">
            <li v-for="item in filterList" :key="item">
                <a :href="'/fr' + item.link" class="link">
                    <div class="container">
                        <p class="element">{{ item.name_fr}}</p>
                    </div>
                </a>
        
        
            </li>
        </ul>
        <ul v-else-if="dis_es">
            <li v-for="item in filterList" :key="item">
                <a :href="'/es' + item.link" class="link">
                    <div class="container">
                        <p class="element">{{ item.name_es}}</p>
                    </div>
                </a>
        
        
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props: ['filterList','header'],
    computed: {
        ...mapGetters([
            'dis_en',
            'dis_fr',
            'dis_es'
        ])
    }
}
</script>


<style scoped>

.link{
    color:black;
    background-color: white;
}
.table{
    width:270px;
    height:auto;
    margin:0px;
    padding:0px;
    overflow:hidden;
    vertical-align:middle;
    text-decoration: none;
    border:1px solid blue;
    margin-top:66px;

}
.container{
    
    width:100%;
    height:auto;
}
.element{
    display: inline-block;
    float: left;
    width:100%;
    height:auto;
    padding-left:10px;
}
.tableHeader{
    font-size:20px;
    font-weight:bold;
    background-color:azure;
    color:black;
    text-align:center;
    vertical-align: top;
    text-decoration: none;

}
li{
    background-color:white;
}
li:hover{
    background-color:#ccc;
}
</style>