import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('Render correct', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBe(true)
  })
})
