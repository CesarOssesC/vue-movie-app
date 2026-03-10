import { createRouter, createWebHistory } from 'vue-router'

import ActorsView from '@/views/ActorsView.vue'
import GenerosView from '@/views/GenerosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/actors',
      component: ActorsView
    },
    {
      path: '/generos',
      component: GenerosView 
    }
  ],
})

export default router
