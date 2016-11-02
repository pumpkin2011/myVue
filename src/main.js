import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import routes from './routes'
import store from './store'

Vue.use(VueRouter)

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  router: router,
  components: { App }
})
