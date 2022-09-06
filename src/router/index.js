import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registration',
    name: 'regVue',
    component: () => import('@/views/v-form')
  },
  {
    path: '/authentication',
    name: 'authVue',
    component: () => import('@/views/v-form')
  },
  {
    path: '/personal',
    name: 'personalVue',
    component: () => import('@/views/personalVue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
