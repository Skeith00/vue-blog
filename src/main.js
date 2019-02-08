import Vue from 'vue'
import App from './App.vue'
import router from './router/Router.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

