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
      meta: {
        index: 0,
      },
      component: () => import('./views/page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      meta: {
        index: 1,
      },
      component: () => import('./views/page2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      meta: {
        index: 2,
      },
      component: () => import('./views/page3.vue')
    },
    {
      path: '/page4',
      name: 'page4',
      meta: {
        index: 3,
      },
      component: () => import('./views/page4.vue')
    },
    {
      path: '/page5',
      name: 'page5',
      meta: {
        index: 4,
      },
      component: () => import('./views/page5.vue')
    },
    {
      path: '/page6',
      name: 'page6',
      meta: {
        index: 5,
      },
      component: () => import('./views/page6.vue')
    },
    {
      path: '/page7',
      name: 'page7',
      meta: {
        index: 6,
      },
      component: () => import('./views/page7.vue')
    },
    {
      path: '/page8',
      name: 'page8',
      meta: {
        index: 7,
      },
      component: () => import('./views/page8.vue')
    }
  ]
})
