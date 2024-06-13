import { createWebHistory, createRouter } from 'vue-router'

import Contact from './pages/Contact.vue'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'

const routes = [
  { path: '/', name:'home', component: Home },
  { path: '/contact', name:'contact', component: Contact },
  { path: '/portfolio', name:'portfolio', component: Portfolio },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 