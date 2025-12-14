<script setup lang="ts">
interface CardProps {
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
}

withDefaults(defineProps<CardProps>(), {
  padding: "md",
  shadow: "md",
  hoverable: false,
});
</script>

<template>
  <div
    :class="[
      'card',
      `card--padding-${padding}`,
      `card--shadow-${shadow}`,
      { 'card--hoverable': hoverable },
    ]"
  >
    <div v-if="$slots.header" class="card__header">
      <slot name="header" />
    </div>
    <div class="card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

/* Padding */
.card--padding-none {
  padding: 0;
}

.card--padding-sm .card__body {
  padding: 0.75rem;
}

.card--padding-md .card__body {
  padding: 1.25rem;
}

.card--padding-lg .card__body {
  padding: 2rem;
}

/* Shadow */
.card--shadow-none {
  box-shadow: none;
}

.card--shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.card--shadow-md {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.card--shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Hoverable */
.card--hoverable {
  cursor: pointer;
}

.card--hoverable:hover {
  transform: translateY(-2px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Sections */
.card__header {
  padding: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  font-size: 1.125rem;
}

.card__footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
  border-radius: 0 0 0.5rem 0.5rem;
}

.card--padding-none .card__header,
.card--padding-none .card__footer {
  padding: 1rem;
}
</style>
