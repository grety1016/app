import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import Vant from 'vant' 
import 'vant/lib/index.css' 
import {router} from '@/router'
import {pinia} from '@/stores'
import 'amfe-flexible'
 


createApp(App)
.use(Vant)
.use(router)
.use(pinia)  
.mount('#app')
