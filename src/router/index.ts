import {createRouter,createWebHistory} from 'vue-router'
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