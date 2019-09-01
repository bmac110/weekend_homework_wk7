import Vue from 'vue';
import Router from 'vue-router';
import GhibliView from '@/views/GhibliView'
import Favourites from '@/views/Favourites'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/ghibli',
      name: 'ghibli-view',
      component: GhibliView
    },
    {
      path: '/favourites',
      name: 'favourites-view',
      component: Favourites
    }
  ]
})

export default router;
