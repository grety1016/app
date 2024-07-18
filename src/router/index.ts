import {createRouter,createWebHistory} from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: HomeView,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  sensitive: false,
  strict: false
});