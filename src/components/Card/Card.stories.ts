import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "./Card.vue";
import Button from "../Button/Button.vue";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <p>This is a simple card with default styling.</p>
      </Card>
    `,
  }),
};

export const WithHeader: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <template #header>Card Title</template>
        <p>Card content goes here. This card has a header section.</p>
      </Card>
    `,
  }),
};

export const WithHeaderAndFooter: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <Card>
        <template #header>Product Details</template>
        <p>This product is amazing and you should buy it.</p>
        <p>Price: $99.99</p>
        <template #footer>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Buy Now</Button>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const Hoverable: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card :hoverable="true">
        <template #header>Hover Me</template>
        <p>This card has a hover effect. Try hovering over it!</p>
      </Card>
    `,
  }),
};

export const Paddings: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display: grid; gap: 1rem;">
        <Card padding="sm">
          <template #header>Small Padding</template>
          <p>Content with small padding</p>
        </Card>
        <Card padding="md">
          <template #header>Medium Padding</template>
          <p>Content with medium padding (default)</p>
        </Card>
        <Card padding="lg">
          <template #header>Large Padding</template>
          <p>Content with large padding</p>
        </Card>
      </div>
    `,
  }),
};

export const Shadows: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display: grid; gap: 1rem;">
        <Card shadow="none">
          <p>No shadow</p>
        </Card>
        <Card shadow="sm">
          <p>Small shadow</p>
        </Card>
        <Card shadow="md">
          <p>Medium shadow (default)</p>
        </Card>
        <Card shadow="lg">
          <p>Large shadow</p>
        </Card>
      </div>
    `,
  }),
};
