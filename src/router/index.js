import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '../views/GoodList'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodList',
      component: GoodList
    },
    {
        path: '/cart/:cartId',
        name: 'cart',
        component: Cart
    }
  ]
})
