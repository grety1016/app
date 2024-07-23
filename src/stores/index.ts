import { createPinia,defineStore } from 'pinia';
import   piniaPluginPersistedstate  from 'pinia-plugin-persistedstate' 
import { reactive } from 'vue';

export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

//定义user类型接口
export interface IUser {
    userName: string;
    userPwd: string;
  }

export const userLoginStore = defineStore('userLoginStore',() =>{
    //定义userLoginStore变量
    let loginUser: IUser = reactive<IUser>({} as IUser);

    //定义userLoginStore函数
    const setUserData = (data: IUser) =>{
        loginUser = data;
    }
    

},{
    persist:{
        key:'userLoginStore',
        storage:window.localStorage,
        
    }
});