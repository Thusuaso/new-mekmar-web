<template>
    <h1 class="header">{{about_page.header}}</h1>
    <div class="columns">
        <div class="column">
            <div class="columns">
                <div class="column">
                    <h3 class="header2">{{ about_page.title_1 }}</h3>
                    <ul>
                        <li v-for="val in about_page.items_1" :key="val" class="description">
                            >> {{val.value}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h3 class="header2">{{ about_page.title_2 }}</h3>
                    <ul>
                        <li v-for="val in about_page.items_2" :key="val" class="description">
                            >> {{val.value}}
                        </li>
                    </ul>
                </div>
            </div>
            <p class="text-justify" style="font-size: 15px;margin-left:5px;">
                {{ about_page.pdfTitle }}
                <a href="https://cdn.mekmarimage.com/mekmar-profile/MEKMAR%20PROFILE.pdf" target="_blank">
                    <i class="fas fa-file-pdf fa-1x"></i>
                </a>
            </p>
        </div>
        <div class="column">
            <figure class="image is-16by9">
                <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/l2oZBA1o9ZM" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
        </div>
    </div>
    
</template>


<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters([
            'about_page'
        ])
    }
    
}
</script>

<style scoped>

</style>