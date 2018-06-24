import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Amplify from 'aws-amplify'
import aws_exports from '@/aws-exports'

Amplify.Logger.LOG_LEVEL = 'DEBUG' // to show detailed logs from Amplify library
Amplify.configure(aws_exports)

Vue.use(BootstrapVue)
Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})