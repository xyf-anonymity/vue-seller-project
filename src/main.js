import Vue from 'vue'
import $http from '@/http'
import App from '@/App.vue'
import router from '@/router'
import store from 'store/store'
import '@/mock/index'
import '@/common/components'
import '@/common/stylus/fonts.styl'
import '@/common/stylus/transition.styl'
import '@/filter/filter.js'
//定义总线，用于非父子间组件通信
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
Vue.prototype.$http = $http
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
