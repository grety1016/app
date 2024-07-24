import { createPinia,defineStore } from 'pinia';
import   piniaPluginPersistedstate  from 'pinia-plugin-persistedstate' 
import { reactive, ref } from 'vue';
import  { User } from '@/types/types';
 

export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate); 
 

export const userLoginStore = defineStore('userLoginStore',() =>{
    //定义一个userLoginStore重置方法
    const reset = async () => { 
        //重置loginUser
        loginUser.reset(); 
    };

    //定义userLoginStore变量
    let loginUser: User = reactive(new User('', ''));

    //定义userLoginStore函数
    const setUserData = async (data: User) =>{
        loginUser = data;
    }
 
    

    //将变量及方法暴露出去
    return{
        //公共方法
        reset,
        //loginUser变量及方法
        loginUser,setUserData,
        
    };

},{
    persist:[{
        key:'localStorage',
        storage:window.localStorage,
        paths:[]  
    },{
        key:'sessionStorage',
        storage:window.sessionStorage,
        paths:['loginUser']}]
});