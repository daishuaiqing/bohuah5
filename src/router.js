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
    },
    {
      path: '/page4',
      name: 'page4',
      component: () => import('./views/page4.vue')
    },
    {
      path: '/page5',
      name: 'page5',
      component: () => import('./views/page5.vue')
    },
    {
      path: '/page6',
      name: 'page6',
      component: () => import('./views/page6.vue')
    },
    {
      path: '/page7',
      name: 'page7',
      component: () => import('./views/page7.vue')
    },
    {
      path: '/page8',
      name: 'page8',
      component: () => import('./views/page8.vue')
    }
  ]
})
