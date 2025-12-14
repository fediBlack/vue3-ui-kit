import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Alert from './Alert.vue'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Alert>

export const Success: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <Alert variant="success">
        Your changes have been saved successfully!
      </Alert>
    `
  })
}

export const Error: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <Alert variant="error">
        An error occurred while processing your request.
      </Alert>
    `
  })
}

export const Warning: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <Alert variant="warning">
        Your session will expire in 5 minutes. Please save your work.
      </Alert>
    `
  })
}

export const Info: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <Alert variant="info">
        This feature is currently in beta. Report any issues you encounter.
      </Alert>
    `
  })
}

export const WithTitle: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Alert variant="success" title="Success">
          Your profile has been updated successfully.
        </Alert>
        <Alert variant="error" title="Error">
          Failed to connect to the server. Please try again.
        </Alert>
        <Alert variant="warning" title="Warning">
          This action cannot be undone. Please proceed with caution.
        </Alert>
        <Alert variant="info" title="Information">
          New features are now available in your dashboard.
        </Alert>
      </div>
    `
  })
}

export const Dismissible: Story = {
  render: () => ({
    components: { Alert },
    setup() {
      const showAlert1 = ref(true)
      const showAlert2 = ref(true)
      const showAlert3 = ref(true)
      return { showAlert1, showAlert2, showAlert3 }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Alert 
          v-if="showAlert1"
          variant="success" 
          :dismissible="true"
          @close="showAlert1 = false"
        >
          You can close this alert by clicking the × button.
        </Alert>
        <Alert 
          v-if="showAlert2"
          variant="warning" 
          title="Warning"
          :dismissible="true"
          @close="showAlert2 = false"
        >
          This alert can be dismissed.
        </Alert>
        <Alert 
          v-if="showAlert3"
          variant="info"
          :dismissible="true"
          @close="showAlert3 = false"
        >
          Click × to dismiss this notification.
        </Alert>
      </div>
    `
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Alert variant="success" title="Success" :dismissible="true">
          Operation completed successfully!
        </Alert>
        <Alert variant="error" title="Error" :dismissible="true">
          Something went wrong. Please try again.
        </Alert>
        <Alert variant="warning" title="Warning" :dismissible="true">
          Please review your input before submitting.
        </Alert>
        <Alert variant="info" title="Info" :dismissible="true">
          Here's some helpful information for you.
        </Alert>
      </div>
    `
  })
}
