import { createWebHistory, createRouter } from 'vue-router'

import Contact from './pages/Contact.vue'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import SingleProject from './pages/SingleProject.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', name:'home', component: Home },
  { path: '/contact', name:'contact', component: Contact },
  { path: '/portfolio', name:'portfolio', component: Portfolio },
  { path: '/portfolio/:slug', name:'projects.show',  component: SingleProject , props: true},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 