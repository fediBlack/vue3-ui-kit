import type { DefineComponent } from 'vue'

// Button Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

// Input Props
export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
}

// Alert Props
export interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info'
  dismissible?: boolean
  title?: string | null
}

// Card Props
export interface CardProps {
  variant?: 'default' | 'bordered' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

// Modal Props
export interface ModalProps {
  modelValue?: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeOnOverlay?: boolean
}

// Badge Props
export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

// Component Types
export type Button = DefineComponent<ButtonProps>
export type Input = DefineComponent<InputProps>
export type Alert = DefineComponent<AlertProps>
export type Card = DefineComponent<CardProps>
export type Modal = DefineComponent<ModalProps>
export type Badge = DefineComponent<BadgeProps>
