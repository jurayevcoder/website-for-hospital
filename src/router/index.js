import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/Home/Home.vue')
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import('../views/Order/Order.vue')
        },
        {
          path: '/more/:id',
          name: 'more',
          component: () => import('../views/More/More.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})

export default router
