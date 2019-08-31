import Vue from 'vue';
import Router from 'vue-router';
import GhibliView from '@/views/GhibliView'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/ghibli',
      name: 'ghibli-view',
      component: GhibliView
    }
  ]
})

export default router;
