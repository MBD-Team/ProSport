import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
