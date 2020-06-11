import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstWorldWar from '../views/FirstWorldWar.vue'
import Summary from '../views/summary.vue'
import SecondWorldWar from '../views/SecondWorldWar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/FirstWorldWar',
    name: 'FirstWorldWar',
    component: FirstWorldWar
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/SecondWorldWar',
    name: 'SecondWorldWar',
    component: SecondWorldWar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

