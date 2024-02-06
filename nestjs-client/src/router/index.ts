import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/reg',
    component: () => import('@/views/reg/index.vue'),
  },
  {
    path: '/home',
    component: () => import('@/layouts/default.vue'),
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('@/views/users/index.vue')
      },
      {
        name: 'menus',
        path: 'menus',
        component: () => import('@/views/menus/index.vue')
      },
      {
        name: 'roles',
        path: 'roles',
        component: () => import('@/views/roles/index.vue')
      }
    ]
  },
  {
    path: '/home',
    component: () => import('@/views/reg/index.vue'),
  }
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
