<template>
    <div>
        <ul v-if="dis_en">
            <li v-for="item in usa_faq_list" :key="item">
                <h1 style="font-weight:bold;">{{ item.question_en }}</h1>
                <p>
                    {{item.answer_en}}
                </p>
            </li>
        </ul>
        <ul v-else-if="dis_fr">
            <li v-for="item in usa_faq_list" :key="item">
                <h1 style="font-weight:bold;">{{ item.question_fr }}</h1>
                <p>
                    {{item.answer_fr}}
                </p>
            </li>
        </ul>
        <ul v-else-if="dis_es">
            <li v-for="item in usa_faq_list" :key="item">
                <h1 style="font-weight:bold;">{{ item.question_en }}</h1>
                <p>
                    {{item.answer_en}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'usa_faq_list',
            'dis_en',
            'dis_fr',
            'dis_es'
        ])
    }
}
</script>
<style scoped>
h1{
    text-align:justify;
}
p{
    text-align: justify;
    padding-left:20px;
}
div{
    width:80%;
    height:auto;
    margin-left:120px;
    margin-top:20px;
}
</style>