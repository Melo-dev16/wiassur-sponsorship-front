import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/espace-client',
      name: 'clientSpace',
      component: () => import('../views/ClientDashboardView.vue')
    }
  ]
})

export default router
