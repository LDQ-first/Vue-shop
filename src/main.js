// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {currency} from '@/util/currency'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: "/static/loading-svg/loading-bubbles.svg"
})
Vue.use(infiniteScroll)

Vue.filter("currency",currency)

import VuePullToRefresh from 'vue-pull-to-refresh'
Vue.use(VuePullToRefresh)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
