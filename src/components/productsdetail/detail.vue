<template>
    <TabView>
        <TabPanel :header="product_detail.tab_1">
            <tab1 :product_detail="product_detail"></tab1>
        </TabPanel>
        <TabPanel :header="product_detail.tab_2">
            <tab2 :product_detail="product_detail" :applicationList="applicationList" :applicationSymbol="applicationSymbol" :categoryProductDetail="categoryProductDetail"></tab2>
        </TabPanel>
        <TabPanel :header="product_detail.tab_3">
            <tab3 :product_detail="product_detail"></tab3>
        </TabPanel>
    </TabView>
</template>

<script>
import { mapGetters } from "vuex";
import tab1 from "@/components/tabs/tab1";
import tab2 from "@/components/tabs/tab2";
import tab3 from "@/components/tabs/tab3";
import tabService from "@/service/UrunDetayService"
export default {
    data() {
        return {
            applicationList: [],
            applicationSymbol:[]
      }  

    },
    computed: {
        ...mapGetters([
            'product_detail',
            'categoryProductDetail'
        ])
    },
    components: {
        tab1,
        tab2,
        tab3
    },
    created() {
        if (this.categoryProductDetail.product_stoneType == 1) {
            this.marbleList()
        }
        else if (this.categoryProductDetail.product_stoneType == 2) {
            this.travertineList()
        }
        else if (this.categoryProductDetail.product_stoneType == 3) {
            this.limestoneList()
        }
        else if (this.categoryProductDetail.product_stoneType == 4) {
            this.mosaicsList()
        }
        else if (this.categoryProductDetail.product_stoneType == 5) {
            this.outdoorList()
        }
        else if (this.categoryProductDetail.product_stoneType ==6) {
            this.bathList()
        }
        else if (this.categoryProductDetail.product_stoneType == 7) {
            this.slabList()
        }
        else if (this.categoryProductDetail.product_stoneType == 8) {
            this.quartzList()
        }
        else if (this.categoryProductDetail.product_stoneType == 9) {
            this.byProductsList()
        }
        else if (this.categoryProductDetail.product_stoneType == 11) {
            this.installtionList()
        }
        else if (this.categoryProductDetail.product_stoneType == 18) {
            this.plasterboardList()
        }
    },
    methods: {
        marbleList() {
            this.applicationList = tabService.marbleList().applicationList
            this.applicationSymbol = tabService.marbleList().simgeler
        },
        travertineList(){
            this.applicationList = tabService.travertineList().applicationList
            this.applicationSymbol = tabService.travertineList().simgeler

        },
        limestoneList() {
            this.applicationList = tabService.limestoneList().applicationList
            this.applicationSymbol = tabService.limestoneList().simgeler

        },
        mosaicsList() {
            this.applicationList = tabService.mosaicList().applicationList
            this.applicationSymbol = tabService.mosaicList().simgeler


        },
        outdoorList() {
            this.applicationList = tabService.outdoorList().applicationList
            this.applicationSymbol = tabService.outdoorList().simgeler

        },
        bathList() {
            this.applicationList = tabService.bathList().applicationList
            this.applicationSymbol = tabService.bathList().simgeler

        },
        slabList() {
            this.applicationList = tabService.slabList().applicationList
            this.applicationSymbol = tabService.slabList().simgeler

        },
        quartzList() {
            this.applicationList = tabService.quartzList().applicationList
            this.applicationSymbol = tabService.quartzList().simgeler

        },
        byProductsList() {
            this.applicationList = tabService.byProductsList().applicationList
            this.applicationSymbol = tabService.byProductsList().simgeler

        },
        installtionList() {
            this.applicationList = tabService.installtionList().applicationList
            this.applicationSymbol = tabService.installtionList().simgeler

        },
        plasterboardList() {
            this.applicationList = tabService.plasterboardList().applicationList
            this.applicationSymbol = tabService.plasterboardList().simgeler

        },
        

    }


}
</script>

<style scoped>

</style>