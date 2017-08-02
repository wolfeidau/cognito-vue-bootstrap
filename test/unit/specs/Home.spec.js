import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import CognitoAuth from './cognito'

const cognitoAuth = new CognitoAuth()

describe('Home.vue', () => {
  it('should render correct contents', () => {
    Vue.use(VueRouter)
    Vue.use(CognitoAuth)
    const router = new VueRouter({routes: []})
    const vm = new Vue({
      el: document.createElement('div'),
      cognitoAuth,
      router,
      render: (h) => h(Home)
    })
    expect(vm.$el.querySelector('h2').textContent)
      .to.equal('Welcome')
  })
})
