import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Conatct', component: Contact},
  { path: '/portfolio', name: 'portfolio', component: Portfolio},

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
