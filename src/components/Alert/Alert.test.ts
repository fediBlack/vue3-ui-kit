import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Alert from './Alert.vue'

describe('Alert', () => {
  it('renders message content', () => {
    const wrapper = mount(Alert, {
      slots: { default: 'This is an alert message' }
    })
    expect(wrapper.text()).toContain('This is an alert message')
  })

  it('renders title when provided', () => {
    const wrapper = mount(Alert, {
      props: { title: 'Alert Title' }
    })
    expect(wrapper.find('.alert__title').text()).toBe('Alert Title')
  })

  it('applies correct variant class', () => {
    const wrapper = mount(Alert, {
      props: { variant: 'success' }
    })
    expect(wrapper.classes()).toContain('alert--success')
  })

  it('shows close button when dismissible', () => {
    const wrapper = mount(Alert, {
      props: { dismissible: true }
    })
    expect(wrapper.find('.alert__close').exists()).toBe(true)
  })

  it('does not show close button when not dismissible', () => {
    const wrapper = mount(Alert, {
      props: { dismissible: false }
    })
    expect(wrapper.find('.alert__close').exists()).toBe(false)
  })

  it('emits close event when close button clicked', async () => {
    const wrapper = mount(Alert, {
      props: { dismissible: true }
    })
    await wrapper.find('.alert__close').trigger('click')
    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('displays correct icon for each variant', () => {
    const variants = ['success', 'error', 'warning', 'info'] as const
    const expectedIcons = ['✓', '✕', '⚠', 'ℹ']

    variants.forEach((variant, index) => {
      const wrapper = mount(Alert, {
        props: { variant }
      })
      expect(wrapper.find('.alert__icon').text()).toBe(expectedIcons[index])
    })
  })
})
