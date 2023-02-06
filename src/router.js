import { createRouter,createWebHistory } from 'vue-router'
import store from '@/store';
import service from "@/service/home"
import serviceUsa  from "@/service/usa/home"
import Galleria from "@/views/Galleria"
const routes = [
  /*en*/
    {
        path: '/',
    component: () => import("@/views/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)
            service.getCategoryList().then(data => {
              store.dispatch("category_load_act", data)
              })
              service.getSlideList().then(data => {
                store.dispatch("slides_load_act", data)
                store.dispatch('fullScreenLoadingAct',false)
                
              })
            store.dispatch("usa_module_load_act", false)
      
      
            next()
      
        }
  },
    {
        path: '/about',
        component: () => import("@/views/About")
  },
    {
        path: '/contact',
        component: () => import("@/views/Contact")
  },
    {
        path: '/fabrication',
        component: () => import("@/views/Fabrication")
  },
    {
        path: '/videos',
        component: () => import("@/views/Videos")
  },
    {
        path: '/products/:category',
        component: () => import("@/views/Categories")
  },
    {
        path: '/products/:category/:color',
        component: () => import("@/views/CategoriesColor")
  },
    {
        path: '/products/:category/:productname',
        component: () => import("@/views/CategoriesColor")
  },
    {
        path: '/products/detail/:category/:productName',
        component: () => import("@/views/CategoryProductDetail")
  },
    {
      path : '/Gallery',
      name : 'galeria',
      component : Galleria,
  },
    {
      path : '/Search',
      name : 'search',
      component: () => import("@/views/Categories")
      /*beforeEnter : (to,from,next) => {
        store.dispatch('urunYuklemeBasla');
        store.dispatch('depoModulPasifEt')
        let aramaText = localStorage.getItem('searchtext')
        urunService.getUrunAramaList(aramaText).then(data => {

          store.dispatch('urunAramaYukle',data);
          next();
        })
      },*/

    },
  /*fr*/
    {
        path: '/fr',
      component: () => import("@/views/Home"),
      beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)
          
          service.getCategoryList().then(data => {
            store.dispatch("category_load_act",data)
        })
        service.getSlideList().then(data => {
          store.dispatch("slides_load_act", data)
            store.dispatch('fullScreenLoadingAct',false)
          
        })
            store.dispatch("usa_module_load_act",false)
          next()
        }
  },
    {
        path: '/fr/about',
        component: () => import("@/views/About")
  },
    {
        path: '/fr/contact',
        component: () => import("@/views/Contact")
  },
    {
        path: '/fr/fabrication',
        component: () => import("@/views/Fabrication")
  },
    {
        path: '/fr/videos',
        component: () => import("@/views/Videos")
  },
    
    {
        path: '/fr/products/:category',
        component: () => import("@/views/Categories")
  },
    {
        path: '/fr/products/:category/:color',
        component: () => import("@/views/CategoriesColor")
  },
    {
        path: '/fr/products/detail/:category/:productName',
        component: () => import("@/views/CategoryProductDetail")
  },
    {
      path : '/fr/Gallery',
      name : 'galeriafr',
      component : Galleria,
    },
  /*es*/
    {
        path: '/es',
      component: () => import("@/views/Home"),
      beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)
        
          service.getCategoryList().then(data => {
            store.dispatch("category_load_act",data)
        })
        service.getSlideList().then(data => {
          store.dispatch("slides_load_act", data)
            store.dispatch('fullScreenLoadingAct',false)
          
        })
        store.dispatch("usa_module_load_act",false)
        next()
        }
  },
    {
        path: '/es/about',
        component: () => import("@/views/About")
  },
    {
        path: '/es/contact',
        component: () => import("@/views/Contact")
  },
    {
        path: '/es/fabrication',
        component: () => import("@/views/Fabrication")
  },
    {
        path: '/es/videos',
        component: () => import("@/views/Videos")
  },
    {
        path: '/es/products/:category',
        component: () => import("@/views/Categories")
  },
    {
        path: '/es/products/:category/:color',
        component: () => import("@/views/CategoriesColor")
  },
    {
        path: '/es/products/detail/:category/:productName',
        component: () => import("@/views/CategoryProductDetail")
  },
  {
      path : '/es/Gallery',
      name : 'galeriaes',
      component : Galleria,
  },
    
    


  /* Usa */
  {
    path: '/usa',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act',data)
      })
      serviceUsa.getUsaProductsMainPage().then(data => {
        store.dispatch('usa_home_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/usa/usaStock/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getUsageOfAreaFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/usa/Color/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getColorFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/usa/Size/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getSizeFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/usa/usaproducts/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getCategoryProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/usa/about',
    component: () => import("@/views/usa/About"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      store.dispatch('usa_module_load_act', true)
            store.dispatch('fullScreenLoadingAct',false)

      next()
    }
  },
  {
    path: '/usa/contact',
    component: () => import("@/views/usa/Contact"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      store.dispatch('usa_module_load_act', true)
            store.dispatch('fullScreenLoadingAct',false)

      next()
    }
  },
  {
    path: '/usa/faq',
    component: () => import("@/views/usa/Faq"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getUsaFaqList().then(data => {
        store.dispatch('usa_faq_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/usa/detail/:name/:id',
    component: () => import("@/views/usa/ProductDetail"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)
      
      serviceUsa.getUsaProductDetailList(to.params.id).then(data => {
        store.dispatch('usa_product_detail_list_load', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
        
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  /* fr */
  {
    path: '/fr/usa',
    component: () => import('@/views/usa/Home'),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)
       
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act',data)
      })
      serviceUsa.getUsaProductsMainPage().then(data => {
        store.dispatch('usa_home_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/fr/usa/usaStock/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getUsageOfAreaFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/fr/usa/Color/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getColorFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/fr/usa/Size/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getSizeFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/fr/usa/usaproducts/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getCategoryProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/fr/usa/about',
    component: () => import("@/views/usa/About"),
    beforeEnter: (to, from, next) => {
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/fr/usa/contact',
    component: () => import("@/views/usa/Contact"),
    beforeEnter: (to, from, next) => {
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/fr/usa/faq',
    component: () => import("@/views/usa/Faq"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getUsaFaqList().then(data => {
        store.dispatch('usa_faq_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/fr/usa/detail/:name/:id',
    component: () => import("@/views/usa/ProductDetail"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getUsaProductDetailList(to.params.id).then(data => {
        store.dispatch('usa_product_detail_list_load', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
        
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  /*es*/
  {
    path: '/es/usa',
    component: () => import('@/views/usa/Home'),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)
       
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act',data)
      })
      serviceUsa.getUsaProductsMainPage().then(data => {
        store.dispatch('usa_home_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/es/usa/usaStock/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getUsageOfAreaFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/es/usa/Color/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getColorFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/es/usa/Size/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getSizeFilterProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/es/usa/usaproducts/:name',
    component: () => import("@/views/usa/Home"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getCategoryProduct(to.params.name).then(data => {
        store.dispatch('usa_home_list_act',data)
      })
      serviceUsa.getProductCategoryList().then(data => {
        store.dispatch('usa_product_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/es/usa/about',
    component: () => import("@/views/usa/About"),
    beforeEnter: (to, from, next) => {
      store.dispatch('usa_module_load_act', true)
      next()
    }

  },
  {
    path: '/es/usa/contact',
    component: () => import("@/views/usa/Contact"),
    beforeEnter: (to, from, next) => {
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/es/usa/faq',
    component: () => import("@/views/usa/Faq"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getUsaFaqList().then(data => {
        store.dispatch('usa_faq_list_act', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/es/usa/detail/:name/:id',
    component: () => import("@/views/usa/ProductDetail"),
    beforeEnter: (to, from, next) => {
            store.dispatch('fullScreenLoadingAct',true)

      serviceUsa.getUsaProductDetailList(to.params.id).then(data => {
        store.dispatch('usa_product_detail_list_load', data)
            store.dispatch('fullScreenLoadingAct',false)
        
      })
        
      store.dispatch('usa_module_load_act', true)
      next()
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    component:()=>import('@/views/Register')
  }

]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
})
router.beforeEach((to, from, next) => {
  const path = to.path.toString().split('/');
  if (path[1] == 'fr') {

    localStorage.removeItem('mekmar-dil')
    localStorage.setItem('mekmar-dil', 'fr')
  }
  if (path[1] == 'es') {

    localStorage.removeItem('mekmar-dil')
    localStorage.setItem('mekmar-dil', 'es')
  }
  if (path[1] == '' || path[1] == 'usa') {

    localStorage.removeItem('mekmar-dil')
    localStorage.setItem('mekmar-dil', 'en')
  }

    serviceUsa.getProductCategoryList().then(data => {
          store.dispatch('usa_product_list_act',data)
        })


    store.dispatch('loadMainData');
    store.dispatch('platformKontrol')
    next();
})
export default router;