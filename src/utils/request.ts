import axios from 'axios'; 
import { useLoginStore } from '@/stores'; 
import { router } from '@/router';
import {  showToast } from 'vant';


const LoginStore = useLoginStore();


 

export const request = axios.create({
baseURL: 'http://192.168.0.31:8080/',
timeout: 3000,
});

export const CancelToken = axios.CancelToken;
export const source = CancelToken.source();



//请求拦截器
request.interceptors.request.use((config)=>{ 
        if(LoginStore.loginUser.token){
            console.log(LoginStore.loginUser.token.length);
            console.log(router.currentRoute.value.path);
            config.headers['Authorization'] = `Bearer2 ${LoginStore.loginUser.token}` ; 
            return config; 
        }else{
            source.cancel("用户尚未验证,需要重新登录！");
            if (!LoginStore.loginUser.userPwd){
                showToast({
                    message: '您尚未登录或登录记录已过期，请重新登录！',
                    icon: 'warn-o',
                  });
            } 
                       
            router.push('/login');            
        }    
        return config;
},(error) =>{
      return Promise.reject(error);
});


//响应拦截器
