import Vue from 'vue'
import axios from '@/http'
import App from '@/App.vue'
import router from '@/router'
import store from 'store/store'
import '@/mock/index'
import '@/common/components'
import '@/common/stylus/fonts.styl'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
