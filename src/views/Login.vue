<template>
    <div class="loginMain">
        <div class="loginRestriction">
                <input type="text" v-model="username" placeholder="Username" @input="is_input"/>
                <Button class="p-button-primary" @click="login" label="Login" :disabled="is_button_disabled"/>
        </div>
    </div>
</template>

<script>
import service from "@/service/home";
export default {
    data() {
        return {
            username: "",
            is_button_disabled:true,
        }
    },
    methods: {
        is_input(event) {
            if (event.target.value.length > 0) {
                this.is_button_disabled = false;
            } else {
                this.is_button_disabled = true
            }
        },
        login() {
            service.getLogin(this.username).then(data => {
                if (data.status) {
                    localStorage.setItem('login_', data.status)
                    this.$toast.add({ severity: 'success', summary: 'Login', detail: 'Login Successful', life: 2500 });
                } else {
                    this.$toast.add({ severity: 'error', summary: 'Login', detail: 'Login Error, Please Try Again', life: 2500 });
                    localStorage.setItem('login_', data.status)
                }
            })
        }
    }
}
</script>

<style scoped>
.loginMain{
    width:100%;
    height:auto;
    margin:0px;
    padding:0px;
    border:none;
    text-align: center;
    overflow: hidden;
    text-decoration: none;
    vertical-align: top;
}
.loginRestriction{
    width:100%;
    height:auto;
    margin:0px;
    padding:0px;
    border:none;
    text-align: center;
    vertical-align: top;
    text-decoration: none;
    overflow: hidden;
}
.loginRestriction>input{
    width:150px;
    height:30px;
    margin:0px;
    padding:0px;
    margin:10px 10px 10px 10px;
    border:1px solid #ccc;
    border-radius: 5px;
    padding-left:5px;

}
.loginRestriction>button{
    width:80px;
    height:30px;
    margin: 0px;
    padding: 0px;
    margin: 10px 10px 10px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

}
</style>