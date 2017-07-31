import Vue from 'vue'
import Login from '@/components/Login'

var cognitoAuth = {
  isAuthenticated: (cb) => {
    return cb(null, true)
  }
}

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      cognitoAuth,
      render: (h) => h(Login)
    })
    expect(vm.$el.querySelector('#inputUsername'))
      .to.have.class('form-control')
    expect(vm.$el.querySelector('#inputPassword'))
      .to.have.class('form-control')
  })
})
