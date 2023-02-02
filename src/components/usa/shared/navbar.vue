<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <router-link to="/usa" v-if="dis_en">
                <el-menu-item index="1">
                    {{ usa_navbar.home}}
                </el-menu-item>
            </router-link>
            <router-link to="/fr/usa" v-else-if="dis_fr">
                <el-menu-item index="1">
                    {{ usa_navbar.home}}
                </el-menu-item>
            </router-link>
            <router-link to="/es/usa" v-else-if="dis_es">
                <el-menu-item index="1">
                    {{ usa_navbar.home}}
                </el-menu-item>
            </router-link>
           


            <el-sub-menu index="2" v-if="dis_en">
                <template #title>{{ usa_navbar.products }}</template>
                <a v-for="item in usa_navbar_product_list" :href="item.category_link" :key="item" >
                    <el-menu-item :index="'2-' + item.id">{{ item.category_en }}</el-menu-item>
                </a>
            </el-sub-menu>
            <el-sub-menu index="2" v-else-if="dis_fr">
                <template #title>{{ usa_navbar.products }}</template>
                <a v-for="item in usa_navbar_product_list" :href="'/fr' + item.category_link" :key="item">
                    <el-menu-item :index="'2-' + item.id">{{ item.category_fr }}</el-menu-item>
                </a>
            </el-sub-menu>
            <el-sub-menu index="2" v-else-if="dis_es">
                <template #title>{{ usa_navbar.products }}</template>
                <a v-for="item in usa_navbar_product_list" :href="'/es' + item.category_link" :key="item">
                    <el-menu-item :index="'2-' + item.id">{{ item.category_es }}</el-menu-item>
                </a>
            </el-sub-menu>

            <router-link to="/usa/about" v-if="dis_en">
                <el-menu-item index="3">
                    {{ usa_navbar.about}}
                </el-menu-item>
            </router-link>
            <router-link to="/fr/usa/about" v-else-if="dis_fr">
                <el-menu-item index="3">
                    {{ usa_navbar.about}}
                </el-menu-item>
            </router-link>
            <router-link to="/es/usa/about" v-else-if="dis_es">
                <el-menu-item index="3">
                    {{ usa_navbar.about}}
                </el-menu-item>
            </router-link>

            <router-link to="/usa/contact" v-if="dis_en">
                <el-menu-item index="4">
                    {{ usa_navbar.contact}}
                </el-menu-item>
            </router-link>
            <router-link to="/fr/usa/contact" v-else-if="dis_fr">
                <el-menu-item index="4">
                    {{ usa_navbar.contact }}
                </el-menu-item>
            </router-link>
            <router-link to="/es/usa/contact" v-else-if="dis_es">
                <el-menu-item index="4">
                    {{ usa_navbar.contact }}
                </el-menu-item>
            </router-link>
            <router-link to="/usa/faq" v-if="dis_en">
                <el-menu-item index="5">
                    {{ usa_navbar.faq}}
                </el-menu-item>
            </router-link>
            <router-link to="/fr/usa/faq" v-else-if="dis_fr">
                <el-menu-item index="5">
                    {{ usa_navbar.faq }}
                </el-menu-item>
            </router-link>
            <router-link to="/es/usa/faq" v-else-if="dis_es">
                <el-menu-item index="5">
                    {{ usa_navbar.faq }}
                </el-menu-item>
            </router-link>

            <router-link :to="'/usa'" style="margin-left:650px;">
                <el-menu-item index="4">
                    <img src="https://cdn.mekmarimage.com/logo/eng-logo.png" />
                </el-menu-item>
            </router-link>
            <router-link :to="'/fr/usa'">
                <el-menu-item index="5">
                    <img src="https://cdn.mekmarimage.com/logo/fr-logo.png" />
                </el-menu-item>
            </router-link>
            <router-link :to="'/es/usa'">
                <el-menu-item index="6">
                    <img src="https://cdn.mekmarimage.com/logo/es-logo.png" />
                </el-menu-item>
            </router-link>
            

        </el-menu>



      
    
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed: {
        ...mapGetters([
            'usa_navbar',
            'usa_navbar_product_list',
            'dis_en',
            'dis_fr',
            'dis_es'
        ])
    },
    created() {
        console.log(this.usa_navbar)
    }
}
</script>

<style scoped>

</style>