import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateCagnotte from '../views/CreateCagnotte.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cagnottes/new',
      name: 'createCagnotte',
      component: CreateCagnotte,
    },
  ],
})

export default router
