import Vue from 'vue'
import Home from 'src/components/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Home)
    })
    expect(vm.$el.querySelector('h2').textContent)
      .to.equal('Welcome')
  })
})
