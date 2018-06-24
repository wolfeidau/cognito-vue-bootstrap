import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/auth/Alert.vue'

describe('Alert.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Alert, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
