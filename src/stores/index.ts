import { createPinia,defineStore } from 'pinia';
import   piniaPluginPersistedstate  from 'pinia-plugin-persistedstate' 
import { reactive, ref } from 'vue';
import  { User } from '@/types/types';
 

export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate); 




export const useLoginStore = defineStore('useLoginStore',() =>{
    //定义一个userLoginStore重置方法
    const reset = () => { 
        //重置loginUser
        loginUser.reset(); 
    };

    //定义userLoginStore变量
    let  loginUser: User = reactive(new User());

    //定义userLoginStore函数
    const setUserData = (data: User) =>{         
       loginUser = Object.assign(loginUser, data);
       loginUser.userPwd ='';//密码不直接保存到本地挺久化数据中
       //另外一种展开语法  loginUser = { ...loginUser, ...data };这种方法要求被复制的对象也有跟新的对象有相同的方法方可 
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
        paths:['loginUser']  
    }
    // ,{
    //     key:'sessionStorage',
    //     storage:window.sessionStorage,
    //     paths:['loginUser']}
    ]
});

 