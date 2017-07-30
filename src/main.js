import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import cognitoAuth from './cognito'

Vue.use(VueResource)

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  cognitoAuth,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
})
