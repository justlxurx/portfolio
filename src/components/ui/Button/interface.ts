import React from 'react'

export enum ButtonVariant {
  default = 'default',
  white = 'white',
  outlined_transparent = 'outlined_transparent',
}

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  variant?: ButtonVariant
}
