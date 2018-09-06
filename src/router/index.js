import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import produce from '@/components/produce'
import we from '@/components/we'
Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/produce',
      name: 'produce',
      component:  produce
    },
    {
      path: '/we',
      name: 'we',
      component:  we
    }
  ]
})
