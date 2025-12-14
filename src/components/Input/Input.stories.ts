import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Input from "./Input.vue";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { value };
    },
    template: '<Input v-model="value" placeholder="Enter text..." />',
  }),
};

export const WithLabel: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { value };
    },
    template:
      '<Input v-model="value" label="Email address" placeholder="you@example.com" />',
  }),
};

export const Required: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { value };
    },
    template:
      '<Input v-model="value" label="Full name" :required="true" placeholder="John Doe" />',
  }),
};

export const WithError: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { value };
    },
    template:
      '<Input v-model="value" label="Email" error="Please enter a valid email address" />',
  }),
};

export const Password: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("");
      return { value };
    },
    template:
      '<Input v-model="value" type="password" label="Password" placeholder="Enter password" />',
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref("Cannot edit this");
      return { value };
    },
    template:
      '<Input v-model="value" label="Disabled field" :disabled="true" />',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const small = ref("");
      const medium = ref("");
      const large = ref("");
      return { small, medium, large };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Input v-model="small" size="sm" label="Small" placeholder="Small input" />
        <Input v-model="medium" size="md" label="Medium" placeholder="Medium input" />
        <Input v-model="large" size="lg" label="Large" placeholder="Large input" />
      </div>
    `,
  }),
};
