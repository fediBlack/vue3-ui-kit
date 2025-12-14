<script setup lang="ts">
interface BadgeProps {
  variant?: "primary" | "success" | "warning" | "danger" | "info" | "neutral";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
}

withDefaults(defineProps<BadgeProps>(), {
  variant: "primary",
  size: "md",
  rounded: false,
});
</script>

<template>
  <span
    :class="[
      'badge',
      `badge--${variant}`,
      `badge--${size}`,
      { 'badge--rounded': rounded },
    ]"
  >
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  border-radius: 0.25rem;
  white-space: nowrap;
}

/* Sizes */
.badge--sm {
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
}

.badge--md {
  padding: 0.25rem 0.625rem;
  font-size: 0.875rem;
}

.badge--lg {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
}

/* Variants */
.badge--primary {
  background: #dbeafe;
  color: #1e40af;
}

.badge--success {
  background: #d1fae5;
  color: #065f46;
}

.badge--warning {
  background: #fef3c7;
  color: #92400e;
}

.badge--danger {
  background: #fee2e2;
  color: #991b1b;
}

.badge--info {
  background: #e0e7ff;
  color: #3730a3;
}

.badge--neutral {
  background: #f3f4f6;
  color: #374151;
}

/* Rounded */
.badge--rounded {
  border-radius: 9999px;
}
</style>
