import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import CognitoAuth from './cognito'
import config from './config'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(CognitoAuth)

import App from './App.vue'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Confirm from './components/Confirm.vue'
import Dashboard from './components/Dashboard.vue'
import PasswordReset from './components/PasswordReset.vue'
import PasswordResetConfirm from './components/PasswordResetConfirm.vue'

const cognitoAuth = new CognitoAuth(config)

function requireAuth (to, from, next) {
  cognitoAuth.isAuthenticated((err, loggedIn) => {
    console.log('requireAuth login check', err, loggedIn)
    if (err) return next()
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  })
}

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
    { path: '/reset_password', component: PasswordReset },
    { path: '/confirm_reset_password', component: PasswordResetConfirm },
    { path: '/logout',
      beforeEnter (to, from, next) {
        cognitoAuth.logout()
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
