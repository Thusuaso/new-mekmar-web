import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from '@/router'
import store from '@/store/'
import "primevue/resources/primevue.min.css"                
import "primeicons/primeicons.css"                      
import "primevue/resources/themes/mdc-light-indigo/theme.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ToastService from 'primevue/toastservice';
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import SelectButton from 'primevue/selectbutton';
import InputNumber from 'primevue/inputnumber';
import Toast from 'primevue/toast';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import 'primeicons/primeicons.css';
import ProgressBar from 'primevue/progressbar';
import ScrollTop from 'primevue/scrolltop';
import mitt from 'mitt';
import Breadcrumb from 'primevue/breadcrumb';
const app = createApp(App)
const emitter = mitt();
app.config.globalProperties.emitter = emitter;
app.component('Carousel', Carousel)
app.component('Galleria', Galleria)
app.component('Image', Image)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Divider', Divider)
app.component('Calendar', Calendar)
app.component('Dropdown', Dropdown)
app.component('Checkbox', Checkbox)
app.component('Button', Button)
app.component('Textarea', Textarea)
app.component('SelectButton', SelectButton)
app.component('InputNumber', InputNumber)
app.component('Toast', Toast)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('ProgressBar', ProgressBar)
app.component('ScrollTop', ScrollTop)
app.component('Breadcrumb',Breadcrumb)




app.use(PrimeVue)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(ToastService)
app.mount('#app')
