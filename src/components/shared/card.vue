<template>
    <div class="card">
        <div class="cardRestricted">
            <div class="cardsSub">
                <div class="cardSub1">
                    <img class="cardImg" :src="personel.image"/>
                </div>
                <div class="cardSub2">
                    <ul>
                        <li><i :class="personel.icon" style="margin-right:12px;"></i><span>{{personel.name}}</span></li>
                        <li><i class="fa fa-duotone fa-book-open-reader" style="margin-right:7px;"></i><span>{{ personel.job }}</span></li>
                        <li><i class="fa-solid fa-envelope" style="margin-right:7px;"></i><span>
                        <a href="mailto:info@mekmar.com" class="link">
                            {{ personel.email }}
                        </a>
                        </span></li>
                        <li><i class="fa-brands fa-whatsapp" style="margin-right:7px;"></i><span><a :href="personel.watsappLink" class="link">{{ personel.whatsapp }}</a></span></li>


                    </ul>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['personel']
}
</script>
<style scoped>
.card{
    width:100%;
    height:auto;
    box-shadow: 2px 2px 5px gray;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
}
.cardRestricted{
    width:calc(100% - 40px);
}
.cardImg{
    margin-left:10px;
    border-radius: 50px;
    width:100px;
    height:100px;
}
.link{
    text-decoration: none;
    color:black;
}
.cardsSub{
    width:100%;
    height:auto;
    margin:0px;
    padding:0px;
    overflow: hidden;
    text-align:left;
    text-decoration: none;
    vertical-align: top;
}
.cardSub1 {
    display: inline-block;
    float: left;
    width: 30%;
    margin-right:10px;
    margin-top:8px;


}
.cardSub2{
    display: inline-block;
    float:left;
    width:65%;
    margin-top: 8px;
}
.cardSub>ul{
    display:block;
    float:left;
    width:100%;
    height:auto;
    text-align:left;
}
.cardSub>ul>li{
    display: block;
    float:left;
    width:50px;
    height:auto;
    text-align: left;

}
@media screen and (max-width:576px) {
    .cardRestricted{
        width:100%;
    }
    .cardImage{
        margin:0px;
        text-align:center;
    }
    .cardSub1{
        margin-right:15px;
    }
}
</style>