import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import CognitoAuth from './cognito'

const cognitoAuth = new CognitoAuth()

describe('Login.vue', () => {
  it('should render correct contents', () => {
    Vue.use(VueRouter)
    const router = new VueRouter({routes: []})
    const vm = new Vue({
      el: document.createElement('div'),
      cognitoAuth,
      router,
      render: (h) => h(Login)
    })
    expect(vm.$el.querySelector('#inputUsername').className)
      .to.equal('form-control')
    expect(vm.$el.querySelector('#inputPassword').className)
      .to.equal('form-control')
  })
})
