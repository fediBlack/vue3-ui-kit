import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Modal from './Modal.vue'

describe('Modal', () => {
  let wrapper: any

  beforeEach(() => {
    // Create teleport target
    const el = document.createElement('div')
    el.id = 'modal-root'
    document.body.appendChild(el)
  })

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  it('renders when modelValue is true', () => {
    wrapper = mount(Modal, {
      props: { modelValue: true },
      slots: { default: 'Modal content' }
    })
    expect(document.body.textContent).toContain('Modal content')
  })

  it('does not render when modelValue is false', () => {
    wrapper = mount(Modal, {
      props: { modelValue: false },
      slots: { default: 'Modal content' }
    })
    expect(document.body.textContent).not.toContain('Modal content')
  })

  it('renders title when provided', () => {
    wrapper = mount(Modal, {
      props: { modelValue: true, title: 'Modal Title' }
    })
    expect(document.body.textContent).toContain('Modal Title')
  })

  it('renders close button by default', () => {
    wrapper = mount(Modal, {
      props: { modelValue: true }
    })
    const closeButton = document.querySelector('.modal__close')
    expect(closeButton).toBeTruthy()
  })

  it('emits update:modelValue when close button is clicked', async () => {
    wrapper = mount(Modal, {
      props: { modelValue: true }
    })
    const closeButton = document.querySelector('.modal__close') as HTMLElement
    closeButton?.click()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('applies correct size class', () => {
    wrapper = mount(Modal, {
      props: { modelValue: true, size: 'lg' }
    })
    const modal = document.querySelector('.modal')
    expect(modal?.classList.contains('modal--lg')).toBe(true)
  })
})
