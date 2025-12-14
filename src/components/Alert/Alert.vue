<script setup lang="ts">
interface AlertProps {
  variant?: "success" | "error" | "warning" | "info";
  dismissible?: boolean;
  title?: string | null;
}

withDefaults(defineProps<AlertProps>(), {
  variant: "info",
  dismissible: false,
  title: null,
});

const emit = defineEmits<{
  close: [];
}>();

const icons = {
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ",
};
</script>

<template>
  <div
    :class="['alert', `alert--${variant}`]"
    role="alert"
  >
    <div class="alert__icon">
      {{ icons[variant] }}
    </div>
    <div class="alert__content">
      <div
        v-if="title"
        class="alert__title"
      >
        {{ title }}
      </div>
      <div class="alert__message">
        <slot />
      </div>
    </div>
    <button
      v-if="dismissible"
      class="alert__close"
      aria-label="Close alert"
      @click="emit('close')"
    >
      ×
    </button>
  </div>
</template>

<style scoped>
.alert {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 4px solid;
  position: relative;
}

.alert__icon {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
}

.alert__content {
  flex: 1;
}

.alert__title {
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}

.alert__message {
  font-size: 0.875rem;
  line-height: 1.5;
}

.alert__close {
  flex-shrink: 0;
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: background 0.2s;
}

/* Variants */
.alert--success {
  background: #d1fae5;
  border-color: #10b981;
  color: #065f46;
}

.alert--success .alert__icon {
  color: #10b981;
}

.alert--success .alert__close:hover {
  background: #a7f3d0;
}

.alert--error {
  background: #fee2e2;
  border-color: #ef4444;
  color: #991b1b;
}

.alert--error .alert__icon {
  color: #ef4444;
}

.alert--error .alert__close:hover {
  background: #fecaca;
}

.alert--warning {
  background: #fef3c7;
  border-color: #f59e0b;
  color: #92400e;
}

.alert--warning .alert__icon {
  color: #f59e0b;
}

.alert--warning .alert__close:hover {
  background: #fde68a;
}

.alert--info {
  background: #dbeafe;
  border-color: #3b82f6;
  color: #1e40af;
}

.alert--info .alert__icon {
  color: #3b82f6;
}

.alert--info .alert__close:hover {
  background: #bfdbfe;
}
</style>
