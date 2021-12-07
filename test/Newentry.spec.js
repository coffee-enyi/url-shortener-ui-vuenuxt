import { mount } from '@vue/test-utils'
import Newentry from '@/components/Newentry.vue'

describe('Newentry', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Newentry)
    expect(wrapper.vm).toBeTruthy()
  })
})