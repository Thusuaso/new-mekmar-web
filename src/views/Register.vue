<template>
    <div class="container">
        <div class="containerRestricted">
            <input type="text" v-model="user.name" placeholder="Name"/>
            <input type="text" v-model="user.username" placeholder="Username" />
            <input type="text" v-model="user.email" placeholder="Email" />
            <input type="text" v-model="user.phone" placeholder="Phone"/>
            <Button class="p-button-help" @click="register" label="Register" />
        </div>
    </div>
</template>
<script>
import service from "@/service/home";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            user: {
                name: "",
                username: "",
                email: "",
                phone:""
            },
        }
    },
    validations() {
        return {
            user: {
                name: {
                    required
                },
                username: {
                    required
                },
                email: {
                    required,
                    email
                },
                phone: {
                    required
                }
            }
        }
    },
    methods: {

        register() {
            if (this.user.name != "" && this.user.username != "" && this.user.email != "" && this.user.phone != "") {
                this.$store.dispatch('fullScreenLoadingAct', true)

                service.setRegister(this.user).then(data => {
                    if (data.status) {
                        this.$store.dispatch('fullScreenLoadingAct', false)

                        this.$toast.add({ severity: 'success', summary: 'Register', detail: 'Register Successful', life: 2500 });
                        localStorage.setItem('login_', data.status)
                        this.$router.push('/')
                    } else {
                        this.$store.dispatch('fullScreenLoadingAct', false)

                        this.$toast.add({ severity: 'error', summary: 'Register', detail: 'Register Error, Please Try Again', life: 2500 });
                        localStorage.setItem('login_', data.status)
                    }
                })  
            } else {
                this.$toast.add({severity:'error',summary: 'Register', detail: 'Register Error, Please Fill in The Information'})
            }
            
        }
    },
    watch: {
        
    }

}
</script>

<style scoped>
.container{
    width:100%;
    height:auto;
    margin:0px;
    margin-left:500px;
    padding:0px;
    border:none;
    overflow: none;
    text-align: center;
    vertical-align: top;
    text-decoration: none;

}
.containerRestricted{
    width:30%;
    height:auto;
    padding: 0px;
    border: none;
    overflow: none;
    vertical-align: top;
    text-decoration: none;
    text-align:center;

}
input{
    width: 150px;
    height: 30px;
    margin: 0px;
    padding: 0px;
    margin: 10px 10px 10px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 5px;
}
</style>