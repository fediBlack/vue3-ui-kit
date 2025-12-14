# Vue 3 UI Kit 🎨

A modern, lightweight, and fully typed Vue 3 component library built with TypeScript, Vitest, and Storybook.

[![Tests](https://github.com/YOUR-USERNAME/vue3-ui-kit/actions/workflows/test.yml/badge.svg)](https://github.com/YOUR-USERNAME/vue3-ui-kit/actions/workflows/test.yml)
[![Coverage](https://img.shields.io/badge/coverage-85%25-brightgreen)](https://github.com/YOUR-USERNAME/vue3-ui-kit)
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

npm install vue3-ui-kit

or
yarn add vue3-ui-kit

or
pnpm add vue3-ui-kit


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
## 📊 Test Coverage

Components: 85%+
Branches: 80%+
Lines: 88%+
