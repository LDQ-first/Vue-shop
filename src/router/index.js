import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '../views/GoodList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
import OrderList from '@/views/OrderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodList',
      component: GoodList
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
     {
        path: '/address',
        name: 'Address',
        component: Address
    },
     {
        path: '/orderConfirm',
        name: 'OrderConfirm',
        component: OrderConfirm
    },
     {
        path: '/orderSuccess',
        name: 'OrderSuccess',
        component: OrderSuccess
    },
     {
        path: '/orderList',
        name: 'OrderList',
        component: OrderList
    }
  ]
})
