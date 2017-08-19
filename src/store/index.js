import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import moduleHeader from './module/moduleHeader.js'
import moduleDetail from './module/moduleDetail.js'
import moduleOrder from './module/moduleOrder.js'
/*import mutations from './mutations'*/

/*export default new Vuex.Store({
    state: {
        nickName: '',
        cartCount: 0
    },
    mutations: mutations()
})*/


export default new Vuex.Store({
    modules: {
        header: moduleHeader,
        detail: moduleDetail,
        order: moduleOrder
    }
})