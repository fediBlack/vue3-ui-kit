<script setup lang="ts">
import { computed, ref } from "vue";

interface InputProps {
  modelValue?: string | number;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  size: "md",
  placeholder: "",
  label: "",
  error: "",
  disabled: false,
  required: false,
  modelValue: undefined,
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
}>();

const isFocused = ref(false);

const inputClasses = computed(() => [
  "input",
  `input--${props.size}`,
  {
    "input--error": props.error,
    "input--disabled": props.disabled,
    "input--focused": isFocused.value,
  },
]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true;
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false;
  emit("blur", event);
};
</script>

<template>
  <div class="input-wrapper">
    <label
      v-if="label"
      class="input-label"
    >
      {{ label }}
      <span
        v-if="required"
        class="input-required"
      >*</span>
    </label>
    <input
      :class="inputClasses"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <span
      v-if="error"
      class="input-error"
    >{{ error }}</span>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.input-required {
  color: #ef4444;
  margin-left: 0.25rem;
}

.input {
  width: 100%;
  font-family: inherit;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  outline: none;
}

.input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Sizes */
.input--sm {
  padding: 0.5rem;
  font-size: 0.875rem;
}

.input--md {
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
}

.input--lg {
  padding: 0.75rem 1rem;
  font-size: 1.125rem;
}

/* States */
.input--error {
  border-color: #ef4444;
}

.input--error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input--disabled {
  background: #f3f4f6;
  cursor: not-allowed;
  opacity: 0.6;
}

.input-error {
  font-size: 0.875rem;
  color: #ef4444;
}
</style>
