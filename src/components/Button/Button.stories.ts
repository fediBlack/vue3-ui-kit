import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    default: "Primary Button",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Primary Button</Button>',
  }),
};

export const Secondary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="secondary">Secondary Button</Button>',
  }),
};

export const Outline: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="outline">Outline Button</Button>',
  }),
};

export const Danger: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="danger">Danger Button</Button>',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
};

export const Loading: Story = {
  render: () => ({
    components: { Button },
    template: '<Button :loading="true">Loading...</Button>',
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: '<Button :disabled="true">Disabled</Button>',
  }),
};
