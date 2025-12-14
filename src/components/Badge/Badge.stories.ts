import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from './Badge.vue'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Badge>

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="neutral">Neutral</Badge>
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `
  })
}

export const Rounded: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 0.5rem;">
        <Badge :rounded="true" variant="primary">Rounded</Badge>
        <Badge :rounded="true" variant="success">Success</Badge>
        <Badge :rounded="true" variant="danger">Danger</Badge>
      </div>
    `
  })
}
