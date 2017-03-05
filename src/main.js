import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import CognitoAuth from './cognito'
import {config} from './config'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(CognitoAuth)

import auth from './auth'
import App from './App.vue'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Confirm from './components/Confirm.vue'
import Dashboard from './components/Dashboard.vue'

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const cognitoAuth = new CognitoAuth(config)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/confirm', component: Confirm },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  cognitoAuth,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
})
