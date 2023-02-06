<template>
  <div v-loading.fullscreen.lock="fullscreenLoading"></div>
  <div style="height: auto; overflow: hidden">
    <div class="main">
      <div class="mainRestricted">
    
        <Toast position="bottom-right" />
        <navbar v-if="!usa_module"></navbar>
        <navbarUsa v-if="usa_module"></navbarUsa>
        <router-view>
    
        </router-view>
        <hr />
        <br />
        <footerPage></footerPage>
      </div>
    </div>
    <ScrollTop />
  </div>
  
</template>


<script>
import navbar from "@/components/shared/navbar.vue"
import navbarUsa from "@/components/usa/shared/navbar.vue"
import footer from "@/components/shared/footer.vue"
import {mapGetters} from "vuex"
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'usa_module',
      'fullscreenLoading'
    ])
  },
  components: {
    navbar,
    footerPage: footer,
    navbarUsa
  },
  methods: {
    scrollUp() {
      document.location.href = "#top";
    }
  }
}
</script>

<style>

#scroll {
  position:absolute;
  top: 670px;
  left: 1450px;
  z-index: 99;
  animation:scrollUp 3s linear 2s infinite alternate;
  cursor:pointer;
}
@keyframes scrollUp {
  10%{
    position: absolute;
    top: 660px;
    left: 1450px;
  }
    30%{
    position: absolute;
      top: 657px;
      left: 1450px;
  }
     70% {
       position: absolute;
       top: 655px;
       left: 1450px;
     }
    100% {
      position: absolute;
      top: 653px;
      left: 1450px;
    }
}

.main{
  width:100%;
  height:auto;
  margin:0 auto;
  padding:0px;
  text-align:left;
  vertical-align:top;
  text-decoration: none;
}
.mainRestricted{
  width:calc(100% - 150px);
  height:auto;
  margin:0 auto;
  padding:0px;
  text-align:left;
  vertical-align:top;
  text-decoration: none;
}
.header {
  text-align: center;
  color: #5b5b5b;
  font-size: 22px;
  margin-bottom:10px;
}
.header2{
  text-align: left;
  color: black;
  font-size: 18px;
}
.description{
  text-align:justify;
  color:gray;
  font-size:15px;
  text-indent: 30px;
}
</style>
