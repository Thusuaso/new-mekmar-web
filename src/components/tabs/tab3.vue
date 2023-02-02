<template>
    <div class="appMain" v-if="login">
        <div class="appRestiricted" >
            <ul class="appUl" >
                <li class="appLi" v-for="item in categoryProductDetailEbats" :key="item">
                    <span class="appSpan1">{{ item.product_dimension }}</span> 
                    <span class="appSpan2" v-if="login">${{ item.product_price }} / {{ item.product_unit }} </span>

                </li>
            </ul>
            
        </div>
        
    </div>
    <div v-else class="appMain">
        <div class="appRestiricted">
            <Button class="p-button-primary" @click="$router.push('/login')" label="to see the prices please sign in" />
            or
            <Button class="p-button-info" @click="$router.push('/register')" label="register" />
        </div>
        
    </div>
    
</template>
<script>
import { mapGetters} from 'vuex'
export default {
    data() {
      return {
            login:false
        }
    },
    props: ['product_detail'],
    computed: {
        ...mapGetters([
            'categoryProductDetailEbats'
        ])
    },
    created() {
        this.login = localStorage.getItem('login_')
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
    width: calc(100% - 50px);
    height: auto;
    margin: 0px auto;
    padding: 0px;
    border: none;
    text-align: center;
    vertical-align: top;
    text-decoration: none;
    margin-left: 50px;
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
    width: 45%;
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

}

.appSpan2 {
    display: inline-block;
    float: right;
    width: 50%;
    padding-left: 50px;
}

@media screen and (max-width:576px) {
    .appRestiricted{
        display:block;
        width:100%;
        margin:0px;
        padding:0px;
    }
    .appLi{
        display:block;
        width:100%;
        margin:0px;
        margin-bottom:5px;
        padding:0px;
    }

}
</style>