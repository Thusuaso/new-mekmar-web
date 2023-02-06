<template>
    <section>
        <div class="columns search section-desktop is-hidden-mobile">
            <div class="column is-8">
                <!-- <b-field>
                    <b-input placeholder="Search..." type="text" icon-pack="fas" icon="search" icon-clickable
                        v-model="aramatext" @keyup.enter="urunArama" @icon-click="urunArama">

                    </b-input>
                </b-field> -->

                <span class="p-float-label">
                    <InputText id="aramatext" placeholder="Search..." type="text" icon-pack="fas" icon="search"
                        v-model="aramatext" @keyup.enter="urunArama"  />
                </span>
            </div>
        </div>
    </section>
</template>
<script>

import { mapGetters } from 'vuex';
import service from "@/service/home"
export default {

    props: ['mobildurum'],
    data() {

        return {

            aramatext: ''
        }
    },
    created() {
        service.service  
    },
    methods: {

        urunArama() {



            if (this.aramatext.length > 0) {

                localStorage.setItem('searchtext', this.aramatext)

                const routename = this.$router.currentRoute.name;
                if (routename == 'search') this.$router.go();
                else this.$router.push('/Search')
            }
        }
    },
    computed: {

        ...mapGetters(['getDepoModul'])
    }
}
</script>
<style  scoped>
.section-mobil {

    margin-left: 50px;
}

button {

    margin-right: 15px;
    margin-top: 5px;
}

.search {

    margin-right: 0px;

}

input {

    width: 5px;

}

section {

    margin-top: -80px;
    margin-left: auto;
}
</style>
