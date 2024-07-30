import axios from 'axios'; 
import { useLoginStore } from '@/stores'; 
import { router } from '@/router';
import {  showToast } from 'vant';
 

export const request = axios.create({
baseURL: 'http://192.168.0.31:8080/',
timeout: 3000,
});

export const CancelToken = axios.CancelToken;
export const source = CancelToken.source();



//请求拦截器
request.interceptors.request
.use((config)=>{ //token处理拦截器逻辑
        const LoginStore = useLoginStore();

        if(LoginStore.loginUser.token && LoginStore.loginUser.token.length > 8){ 
            config.headers['Authorization'] = `${LoginStore.loginUser.token}` ; 
            return config; 
        }else{            
               if (router.currentRoute.value.path !== '/login'){
                showToast({
                    message: '您尚未登录或登录记录已过期，请重新登录！',
                    icon: 'warn-o',
                });
                router.push('/login');
                return Promise.reject(new Error('未登录或登录已过期'));
             };         
        }    
        return config;
},(error) =>{
      return Promise.reject(error);
});


//响应拦截器
request.interceptors.response.use((response)=>{
    return response;
},(error) =>{

});
