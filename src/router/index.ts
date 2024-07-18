import {createRouter, createWebHistory} from 'vue-router';
import HistoricalRoutes from '../modules/historical/router';

const routes = [
  {
    path: '/',
    redirect: {path: '/historical/home'},
    component: () => import('../layouts/app/AppLayout.vue'),
    children: [...HistoricalRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
