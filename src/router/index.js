import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstWorldWar from '../views/FirstWorldWar.vue'
import Summary from '../views/summary.vue'
import SecondWorldWar from '../views/SecondWorldWar.vue'
import archives from '../views/archives.vue'
import about from '../views/about.vue'

import Summaryww1 from '@/components/Summaryww1.vue';
import MapWW1 from '@/components/MapWW1.vue';
import MapFranceww1 from '@/components/MapFranceww1.vue';
import Slider_battleww1 from '@/components/Slider_battleww1.vue';
import AgeSoldier from '@/components/AgeSoldier.vue';
import Consequenceww1 from '@/components/Consequenceww1.vue';
import Slider_colonieSoldier from '@/components/Slider_colonieSoldier.vue';

import MapFranceww2 from '../components/ww2/MapFranceww2.vue'
import Summaryww2 from '@/components/ww2/Summaryww2.vue';
import MapWW2 from '@/components/ww2/MapWW2.vue';
import Slider_battleww2 from '@/components/ww2/Slider_battleww2.vue';
import AgeSoldierww2 from '@/components/ww2/AgeSoldier2.vue';
import Consequenceww2 from '@/components/ww2/Consequenceww2.vue';
import Slider_colonieSoldierww2 from '@/components/ww2/Slider_colonieSoldier.vue';

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
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/SecondWorldWar',
    name: 'SecondWorldWar',
    component: SecondWorldWar
  },
  {
    path: '/archives',
    name: 'archives',
    component: archives
  },
  {
    path: '/MapFranceww2',
    name: 'MapFranceww2',
    component: MapFranceww2
  },
  {
    path: '/Summaryww1',
    name: 'Summaryww1',
    component: Summaryww1
  },
  {
    path: '/MapWW1',
    name: 'MapWW1',
    component: MapWW1
  },
  {
    path: '/MapFranceww1',
    name: 'MapFranceww1',
    component: MapFranceww1
  },
  {
    path: '/Slider_battleww1',
    name: 'Slider_battleww1',
    component: Slider_battleww1
  },
  {
    path: '/AgeSoldier',
    name: 'AgeSoldier',
    component: AgeSoldier
  },
  {
    path: '/Consequenceww1',
    name: 'Consequenceww1',
    component: Consequenceww1
  },
  {
    path: '/Slider_colonieSoldier',
    name: 'Slider_colonieSoldier',
    component: Slider_colonieSoldier
  },
  {
    path: '/Summaryww2',
    name: 'Summaryww2',
    component: Summaryww2
  },
  {
    path: '/MapWW2',
    name: 'MapWW2',
    component: MapWW2
  },
  {
    path: '/Slider_battleww2',
    name: 'Slider_battleww2',
    component: Slider_battleww2
  },
  {
    path: '/AgeSoldierww2',
    name: 'AgeSoldierww2',
    component: AgeSoldierww2
  },
  {
    path: '/Consequenceww2',
    name: 'Consequenceww2',
    component: Consequenceww2
  },
  {
    path: '/Slider_colonieSoldierww2',
    name: 'Slider_colonieSoldierww2',
    component: Slider_colonieSoldierww2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

