import Vue from 'vue'
import Home from '@/components/Home'

// var cognitoAuth = {
//   isAuthenticated: (cb) => {
//     return cb(null, true)
//   }
// }

describe('Home.vue', () => {
  it('should render correct contents', () => {
    // const vm = new Vue({
    //   el: document.createElement('div'),
    //   cognitoAuth,
    //   render: (h) => h(Home)
    // })
    const Constructor = Vue.extend(Home)
    const HomeComponent = new Constructor().$mount()
    expect(HomeComponent.$el.querySelector('h2').textContent)
      .to.equal('Welcome')
  })
})
