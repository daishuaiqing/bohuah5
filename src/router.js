import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'page1',
      component: () => import('./views/page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('./views/page2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import('./views/page3.vue')
    }
  ]
})
