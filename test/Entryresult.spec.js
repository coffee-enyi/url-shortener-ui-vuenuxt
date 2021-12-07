import { mount } from '@vue/test-utils'
import Entryresult from '@/components/Entryresult.vue'

describe('Entryresult', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Entryresult)
    expect(wrapper.vm).toBeTruthy()
  })
})