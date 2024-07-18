import { createPinia,defineStore } from 'pinia';
import   piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'

export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

export const useStore = defineStore('Index',() =>{

});