import React from 'react'

export enum InputVariant {
  default = 'default',
  white = 'white',
  inputColor = '#EAEAEA',
}

export interface IInput extends React.HTMLProps<HTMLInputElement> {
  className?: string
  variant?: InputVariant
  error?: boolean
}
