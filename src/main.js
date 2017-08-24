import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import cognitoAuth from './cognito'
import App from './App.vue'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  cognitoAuth,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
})
