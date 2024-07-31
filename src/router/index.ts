import { onLogin } from '@/api/user';
import {createRouter,createWebHistory} from 'vue-router'
import {request} from '@/utils/request';
import { useLoginStore } from '@/stores';
import axios from 'axios' 
import { User } from '@/types/types';
import { equal } from 'assert';

 

const LoginView = () => import('@/views/Login/LoginView.vue')
const FlowForm = () => import('@/views/FlowForm/FlowForm.vue')

const routes = [
  {
    path: '/login', 
    name: 'Login',
    component: LoginView,
  },
  {
    path:'/flowform',
    name: 'FlowForm',
    component: FlowForm,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  sensitive: false,
  strict: false
});

router.beforeEach((to, from, next) => { 
  const loginStore = useLoginStore(); 
 
  // console.log(to.path);
  if (to.path !== '/login') {
    if (loginStore.loginUser.token.length < 8) {
      console.log(3);      
      next('/login');
    } else {
      console.log(2); 
      next();
    }
  }else {
    if (loginStore.loginUser.token.length < 8){
      console.log(1);
      next();
    }else{
      const result = onLogin(new User());
      console.log(result);
      next({name:'FlowForm'});
    }
    
  }  
});
 
