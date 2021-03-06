import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//
import './style/common.css'
import './style/global.css'
//

Vue.config.productionTip = false

if (document.documentElement.offsetWidth <= 500) {
  window.location.href = 'http://39.97.209.106/fresh_sxu/mobile/#/'
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
