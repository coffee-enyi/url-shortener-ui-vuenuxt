import { mount } from '@vue/test-utils'
import ShortenNow from '@/components/ShortenNow.vue'

describe('ShortenNow', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ShortenNow)
    expect(wrapper.vm).toBeTruthy()
  })
})