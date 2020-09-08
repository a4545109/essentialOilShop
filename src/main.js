import Vue from 'vue' // 來自於node_modules
import axios from 'axios'
import VueAxios from 'vue-axios'
// loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// VeeValidate 驗證
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'
// Event Bus
import './bus'
import 'bootstrap'
import $ from 'jquery'
import App from './App.vue'
import router from './router'

window.$ = $

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueAxios, axios)
Vue.component('loading', Loading)

// 中文化驗證
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW
  }
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
