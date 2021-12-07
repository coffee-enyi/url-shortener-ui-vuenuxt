import { mount } from '@vue/test-utils'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '../store'
import Entry from '@/components/Entry.vue'

describe('Entry', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Entry)
    expect(wrapper.vm).toBeTruthy()
  })

  test('Value of entered URL is saved in store', async () => {
    const wrapper = mount(Entry)
    const button = wrapper.find('.btn')
    const textarea = wrapper.find('textarea')

    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({state});
  
    textarea.setValue('https://vercel.com/')
  
    await button.trigger('click')

    expect(store.state.enteredurl).toBe('https://vercel.com/')

  })
})