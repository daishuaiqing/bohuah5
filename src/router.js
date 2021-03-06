import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index.vue')
    },
    {
      path: '/page1',
      name: 'page1',
      meta: {
        index: 0,
        title: '博华广场'
      },
      component: () => import('./views/page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      meta: {
        index: 1,
        title: '博华广场'
      },
      component: () => import('./views/page2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      meta: {
        index: 2,
        title: '地铁线路图'
      },
      component: () => import('./views/page3.vue')
    },
    {
      path: '/page4',
      name: 'page4',
      meta: {
        index: 3,
        title: '地块图'
      },
      component: () => import('./views/page4.vue')
    },
    {
      path: '/page5',
      name: 'page5',
      meta: {
        index: 4,
        title: '实景图'
      },
      component: () => import('./views/page5.vue')
    },
    {
      path: '/page6',
      name: 'page6',
      meta: {
        index: 5,
        title: '楼层图'
      },
      component: () => import('./views/page6.vue')
    },
    {
      path: '/page7',
      name: 'page7',
      meta: {
        index: 6,
        title: '租赁服务咨询'
      },
      component: () => import('./views/page7.vue')
    },
    {
      path: '/page8',
      name: 'page8',
      meta: {
        index: 7,
        title: '办公楼'
      },
      component: () => import('./views/page8.vue')
    },
    {
      path: '/enpage1',
      name: 'enpage1',
      meta: {
        index: 10,
        title: '博华广场'
      },
      component: () => import('./views/en-page1.vue')
    },
    {
      path: '/enpage2',
      name: 'enpage2',
      meta: {
        index: 11,
        title: '博华广场'
      },
      component: () => import('./views/en-page2.vue')
    },
    {
      path: '/enpage3',
      name: 'enpage3',
      meta: {
        index: 12,
        title: '地铁线路图'
      },
      component: () => import('./views/en-page3.vue')
    },
    {
      path: '/enpage4',
      name: 'enpage4',
      meta: {
        index: 13,
        title: '地块图'
      },
      component: () => import('./views/en-page4.vue')
    },
    {
      path: '/enpage5',
      name: 'enpage5',
      meta: {
        index: 14,
        title: '实景图'
      },
      component: () => import('./views/en-page5.vue')
    },
    {
      path: '/enpage6',
      name: 'enpage6',
      meta: {
        index: 15,
        title: '楼层图'
      },
      component: () => import('./views/en-page6.vue')
    },
    {
      path: '/enpage7',
      name: 'enpage7',
      meta: {
        index: 16,
        title: '租赁服务咨询'
      },
      component: () => import('./views/en-page7.vue')
    },
    {
      path: '/enpage8',
      name: 'enpage8',
      meta: {
        index: 17,
        title: '办公楼'
      },
      component: () => import('./views/en-page8.vue')
    }
  ]
})
