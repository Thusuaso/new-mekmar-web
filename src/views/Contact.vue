<template>
            <div class="a-box" v-for="personel in contact_page_personel.personel" :key="personel">
                <div class="img-container">
                    <div class="img-inner">
                        <div class="inner-skew">
                            <img :src="personel.webp">
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <ul>
                        <li><i :class="personel.icon" style="margin-right:12px;"></i><span>{{personel.name}}</span></li>
                        <li><i class="fa fa-duotone fa-book-open-reader" style="margin-right:7px;"></i><span>{{ personel.job }}</span></li>
                        <li><i class="fa-solid fa-envelope" style="margin-right:7px;"></i><span>
                                <a href="mailto:info@mekmar.com" class="link">
                                    {{ personel.email }}
                                </a>
                            </span></li>
                        <li><i class="fa-brands fa-whatsapp" style="margin-right:7px;"></i><span><a :href="personel.watsappLink"
                                    class="link">{{ personel.whatsapp }}</a></span></li>
                    
                    
                    </ul>
                </div>
            </div>
            <br />
            <br />

            <div class="abouts">
                <div class="about">
                    <figure class="image is-16by9">
                        <iframe class="has-ratio" width="400" height="450" style="height:500px;"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0551059102695!2d29.15061031509215!3d37.81217821778004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7166da9d086c3%3A0x18ebec808bb03a9!2sMekmar+Marble+%26+Travertine!5e0!3m2!1sen!2str!4v1477648399064"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </figure>
                </div>
                <div class="about">
                    <formComp></formComp>
                </div>
            </div>


</template>
<script>
import { mapGetters } from "vuex";
import form from "@/components/contacts/form.vue"
export default {
    components: {
        formComp:form 
    },
    computed: {
        ...mapGetters([
            'contact_page',
            'contact_page_personel'
        ])
    }    
}
</script>

<style scoped>
.abouts{
    width:100%;
    height:auto;
    margin:0px;
    padding:0px;
    overflow: hidden;
    text-align:center;
    vertical-align:top;
    text-decoration: none;

}
.about{
    display: inline-block;
    float:left;
    width:50%;
    height:auto;
    margin:0px;
    padding:0px;
    overflow: hidden;
    text-align: center;
    vertical-align:top;
    text-decoration: none;
}
.link {
    text-decoration: none;
    color: black;
}
body {
            text-align: center;
            padding: 30px;
            background: #f8f4f2;
            font-family: Arial;
        }
    
        .a-box {
            display: inline-block;
            width: 240px;
            text-align: center;
            margin-left:150px;
        }
        
    
        .img-container {
            height: 230px;
            width: 200px;
            overflow: hidden;
            border-radius: 0px 0px 20px 20px;
            display: inline-block;
        }
    
        .img-container img {
            transform: skew(0deg, -13deg);
            height: 250px;
            margin: -5px 0px 0px -0px;
        }
    
        .inner-skew {
            display: inline-block;
            border-radius: 20px;
            overflow: hidden;
            padding: 0px;
            transform: skew(0deg, 12deg);
            font-size: 0px;
            margin: 30px 0px 30px 0px;
            background: #c8c2c2;
            height: 250px;
            width: 200px;
        }
        .text-container {
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
            padding: 120px 20px 20px 20px;
            border-radius: 20px;
            background: #fff;
            margin: -120px 0px 0px 0px;
            line-height: 19px;
            font-size: 14px;
        }
    
        .text-container h1 {
            margin: 20px 0px 10px 0px;
            color: #04bcff;
            font-size: 18px;
        }
    @media screen and (max-width:576px) {
        .a-box {
            display: block;
            width: 100%;
            text-align: center;
            margin-left: 0px;
        }

        .about {
            display: block;
            width: 100%;
            height: auto;
            margin-bottom:50px;
        }
    }
</style>