import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Confirm from '@/components/Confirm.vue'
import Dashboard from '@/components/Dashboard.vue'
import PasswordChange from '@/components/PasswordChange.vue'
import PasswordReset from '@/components/PasswordReset.vue'
import PasswordResetConfirm from '@/components/PasswordResetConfirm.vue'
import cognitoAuth from '@/cognito'
Vue.use(Router)

function requireAuth (to, from, next) {
  cognitoAuth.isAuthenticated((err, loggedIn) => {
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

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/confirm', component: Confirm },
    { path: '/change_password', component: PasswordChange, beforeEnter: requireAuth },
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
