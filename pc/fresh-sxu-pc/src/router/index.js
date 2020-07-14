import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/enter_school',
    name: 'EnterSchool',
    component: () => import(/* webpackChunkName: "enter_school" */ '../views/EnterSchool.vue')
  },
  {
    path: '/shool_preparation',
    name: 'SchoolPreparation',
    component: () => import(/* webpackChunkName: "shool_preparation" */ '../views/SchoolPreparation.vue')
  },
  {
    path: '/in_school',
    name: 'InSchool',
    component: () => import(/* webpackChunkName: "in_school" */ '../views/InSchool.vue')
  },
  {
    path: '/outside_school',
    name: 'OutsideSchool',
    component: () => import(/* webpackChunkName: "outside_school" */ '../views/OutsideSchool.vue')
  },
  {
    path: '/other_info',
    name: 'OtherInfo',
    component: () => import(/* webpackChunkName: "other_info" */ '../views/OtherInfo.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*', // 页面不存在的情况下会跳到首页页面
    redirect: '/',
    name: 'NotFound'
  }
]

const router = new VueRouter({
  routes
})

export default router
