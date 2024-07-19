import {createRouter,createWebHistory} from 'vue-router'
const LoginView = () => import('@/views/Login/LoginView.vue')

const routes = [
  {
    path: '/login', 
    name: 'Login',
    component: LoginView,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  sensitive: false,
  strict: false
});