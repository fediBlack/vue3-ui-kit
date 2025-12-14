import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Modal from './Modal.vue'
import Button from '../Button/Button.vue'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <Button @click="isOpen = true">Open Modal</Button>
        <Modal v-model="isOpen" title="Modal Title">
          <p>This is the modal content. You can put anything here.</p>
        </Modal>
      </div>
    `
  })
}

export const WithFooter: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false)
      const handleConfirm = () => {
        alert('Confirmed!')
        isOpen.value = false
      }
      return { isOpen, handleConfirm }
    },
    template: `
      <div>
        <Button @click="isOpen = true">Open Modal</Button>
        <Modal v-model="isOpen" title="Confirm Action">
          <p>Are you sure you want to proceed with this action?</p>
          <template #footer>
            <Button variant="outline" @click="isOpen = false">Cancel</Button>
            <Button @click="handleConfirm">Confirm</Button>
          </template>
        </Modal>
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const small = ref(false)
      const medium = ref(false)
      const large = ref(false)
      const xlarge = ref(false)
      return { small, medium, large, xlarge }
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <Button @click="small = true" size="sm">Small</Button>
        <Button @click="medium = true" size="sm">Medium</Button>
        <Button @click="large = true" size="sm">Large</Button>
        <Button @click="xlarge = true" size="sm">XLarge</Button>
        
        <Modal v-model="small" title="Small Modal" size="sm">
          <p>This is a small modal (400px max width)</p>
        </Modal>
        <Modal v-model="medium" title="Medium Modal" size="md">
          <p>This is a medium modal (600px max width)</p>
        </Modal>
        <Modal v-model="large" title="Large Modal" size="lg">
          <p>This is a large modal (800px max width)</p>
        </Modal>
        <Modal v-model="xlarge" title="Extra Large Modal" size="xl">
          <p>This is an extra large modal (1200px max width)</p>
        </Modal>
      </div>
    `
  })
}

export const LongContent: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <Button @click="isOpen = true">Open Modal with Long Content</Button>
        <Modal v-model="isOpen" title="Terms and Conditions">
          <div v-for="i in 20" :key="i">
            <h4>Section {{ i }}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </Modal>
      </div>
    `
  })
}
