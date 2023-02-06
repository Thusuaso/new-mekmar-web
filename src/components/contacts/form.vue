<template>
    <div class="formMain">
        <div class="formRestricted">

                    <span class="p-float-label">
                        <InputText class="inputText" id="name" type="text" v-model="user.name" :class="{'p-invalid':v$.user.name.$invalid && submitted}"/>
                        <label for="name">Name</label>
                    </span>
                    <br/>
                    <span class="p-float-label">
                        <InputText id="email" class="inputText" type="text" v-model="user.email" :class="{'p-invalid':v$.user.email.$invalid && submitted}" />
                        <label for="email">Email</label>
                    </span>
                    <br />
                    <MazPhoneNumberInput v-model="phoneNumber" show-code-on-list
                        :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']" :ignored-countries="['AC']" @update="results = $event"
                        :success="results?.isValid" size="md" />

                    <br/>
                    <span class="p-float-label">
                        <InputNumber  id="amount" class="inputText" type="text" v-model="user.amount" :class="{ 'p-invalid': v$.user.amount.$invalid && submitted}" />
                        <label for="amount">Avarage Amount (M2)</label>
                    </span>
                    <br/>
                    <span class="p-float-label">
                        <Textarea id="desct" class="inputText" type="text" v-model="user.description" :autoResize="true" rows="8"
                            cols="30" :class="{ 'p-invalid': v$.user.description.$invalid && submitted}" />
                        <label for="desct">Description</label>
                    </span>
                    <br/>
                    <span class="p-float-label">
                        <SelectButton v-model="user.gender" :options="genders" optionLabel="gender" :class="{ 'p-invalid': v$.user.gender.$invalid && submitted}" />
                    </span>

                    <br/>
                    <Button class="p-button-primary" @click="save" label="Send"/>
                </div>
    </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import service from "@/service/home";
import { required,email } from '@vuelidate/validators'

export default {
    components: {
        MazPhoneNumberInput  
    },
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            results:null,
            user: {
                name: "",
                email: "",
                phone: "",
                amount:null,
                description : "",
                gender:""
            },
            genders: [
                { id: 0, gender: 'Male' },
                { id: 1, gender: 'Female' },

            ],
            submitted:false
        }
    },
    validations() {
        return { 
            user: {
                name: { required },
                email: { required, email },
                amount: { required, },
                description: { required },
                gender:{required}
            }
        }
        
    },
    methods: {
        save() {
            if (!this.v$.$invalid) {
                if (this.results.isValid) {
                    this.user.phone = this.results.formatInternational
                    this.user.gender = this.user.gender.gender
                    service.setSendMail(this.user).then(data => {
                        console.log(data)
                    })
                    this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted', life: 3000 });

                } else {

                    this.$toast.add({ severity: 'error', summary: 'Success Message', detail: 'Order submitted', life: 3000 });
                } 
            } else {
                this.submitted = true
                this.$toast.add({ severity: 'error', summary: 'Success Message', detail: 'Order submitted', life: 3000 });
            }
            
            
        }
    }
}
</script>
<style scoped>
.formMain{
    display:grid;
    width:100%;
    height:auto;
    margin: 0px;
    padding:0px;
    border:none;
    text-align:left;
    vertical-align:top;
    text-decoration: none;

}
.formRestricted{
    grid-column: 3;
    width:calc(100% - 100px);
    text-align:center;
}
.inputText{
    width:100%;
}


        @media screen and (max-width:576px) {
            .formMain {
                    display: grid;
                    width: 100%;
                    height: auto;
                    margin: 0px;
                    padding: 0px;
                    border: none;
                    text-align: left;
                    vertical-align: top;
                    text-decoration: none;
            
                }
            
                .formRestricted {
                    grid-column: 3;
                    width:100%;
                    text-align: center;
                }
        }
</style>