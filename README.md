# Vue 3 UI Kit 🎨

A modern, lightweight, and fully typed Vue 3 component library built with TypeScript, Vitest, and Storybook.

[![Tests](https://github.com/fediBlack/vue3-ui-kit/actions/workflows/test.yml/badge.svg)](https://github.com/fediBlack/vue3-ui-kit/actions)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://vue3-ui-kit.vercel.app/)
[![Coverage](https://img.shields.io/badge/coverage-85%25-brightgreen)](https://github.com/fediBlack/vue3-ui-kit)
[![npm version](https://img.shields.io/npm/v/vue3-ui-kit.svg)](https://www.npmjs.com/package/vue3-ui-kit)

## ✨ Features

- 🎯 **6 Production-ready components**: Button, Input, Card, Modal, Badge, Alert
- 💪 **TypeScript first**: Full type safety with IntelliSense support
- ⚡ **Lightweight**: Tree-shakeable, optimized bundle size
- 🧪 **Well tested**: 80%+ test coverage with Vitest
- 📖 **Interactive docs**: Storybook documentation included
- 🎨 **Customizable**: Easy theming and style overrides
- ♿ **Accessible**: ARIA labels and keyboard navigation
- 🔄 **Vue 3 Composition API**: Modern patterns with `<script setup>`

## 📦 Installation
```
npm install vue3-ui-kit

or
yarn add vue3-ui-kit

or
pnpm add vue3-ui-kit
```

## 🚀 Quick Start

```
<script setup lang="ts"> 
import { Button, Input, Modal } from 'vue3-ui-kit' 
import { ref } from 'vue' 
const email = ref('') 
const isModalOpen = ref(false) 
</script> 
<template> 
    <div> 
        <Input v-model="email" label="Email" placeholder="you@example.com" /> 
        <Button @click="isModalOpen = true">Open Modal</Button>
        <Modal v-model="isModalOpen" title="Welcome">
            <p>Hello from Vue 3 UI Kit!</p>
        </Modal>
    </div> 
</template>
```
## 📚 Components

### Button

Versatile button component with multiple variants and states.  

```
<Button variant="primary" size="md" @click="handleClick">
  Click me
</Button>

<Button variant="danger" :loading="true">
  Loading...
</Button>
```

### Props

- variant: 'primary' | 'secondary' | 'outline' | 'danger'

- size: 'sm' | 'md' | 'lg'

- disabled: boolean

- loading: boolean

### Input

Form input with label, validation and error state.   

```
<Input
  v-model="username"
  label="Username"
  :required="true"
  error="Username is required"
/>
```

### Props

- type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'

- size: 'sm' | 'md' | 'lg'

- label: string

- error: string

- disabled: boolean

- required: boolean

### Card

Flexible card container with header and footer slots.  

```
<Card padding="lg" shadow="md" :hoverable="true">
  <template #header>Card Title</template>
  <p>Card content goes here.</p>
  <template #footer>
    <Button>Action</Button>
  </template>
</Card>
```

### Props

- padding: 'none' | 'sm' | 'md' | 'lg'

- shadow: 'none' | 'sm' | 'md' | 'lg'

- hoverable: boolean

### Modal

Accessible modal dialog with overlay and animations.  

```
<Modal
  v-model="isOpen"
  title="Confirmation"
  size="md"
  :closeOnOverlay="true"
>
  <p>Are you sure?</p>
  <template #footer>
    <Button variant="outline" @click="isOpen = false">Cancel</Button>
    <Button variant="danger">Confirm</Button>
  </template>
</Modal>
```

### Props

- modelValue: boolean

- title: string

- size: 'sm' | 'md' | 'lg' | 'xl'

- closeOnOverlay: boolean

- showCloseButton: boolean

### Badge

Small status indicator with multiple variants.  

```
<Badge variant="success">Active</Badge>
<Badge variant="danger" :rounded="true">Error</Badge>
```

### Props

- variant: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'

- size: 'sm' | 'md' | 'lg'

- rounded: boolean


### Alert

Notification component for important messages.  

```
<Alert
  variant="warning"
  title="Warning"
  :dismissible="true"
  @close="handleClose"
>
  Please review your changes.
</Alert>
```

### Props

- variant: 'success' | 'error' | 'warning' | 'info'

- title: string

- dismissible: boolean


## 🧪 Development

```

# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Build library
npm run build

```

## 🛠 Tech Stack

- Vue 3

- TypeScript

- Vite

- Vitest

- Storybook

## 📄 License
MIT
