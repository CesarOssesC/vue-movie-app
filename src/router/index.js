import { createRouter, createWebHistory } from 'vue-router'

import ActorsView from '@/views/ActorsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/actors',
      component: ActorsView
    }
  ],
})

export default router
