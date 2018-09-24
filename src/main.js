import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Auth from "@aws-amplify/auth"
import AuthConfig from '@/aws-exports'

Auth.configure(AuthConfig)

Vue.use(BootstrapVue)
Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})
