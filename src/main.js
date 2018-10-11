// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// entrypoint
import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'
import login from './components/Login'

Vue.config.productionTip = false
const routes = [
  { path: '/login', component: login }
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
