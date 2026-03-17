import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-vue'
import Logo from '../Logo.vue'

describe('logo component', () => {
  it('should render', () => {
    const wrapper = render(Logo)
    expect(wrapper.baseElement).toBeTruthy()
  })
})
