// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import routerConfig from './router/config'
import myPlugin from './plugin'
import axios from 'axios'
import store from './store'

Vue.prototype.axios = axios

console.log(myPlugin)
Vue.use(myPlugin)

routerConfig(router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
