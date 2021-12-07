import { mount } from '@vue/test-utils'
import StatsTable from '@/components/StatsTable.vue'

describe('StatsTable', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(StatsTable)
    expect(wrapper.vm).toBeTruthy()
  })
})