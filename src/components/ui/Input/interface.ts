import React from 'react'

export enum InputVariant {
  default = 'default',
  white = 'white',
}

export interface IInput extends React.HTMLProps<HTMLInputElement> {
  className?: string
  variant?: InputVariant
}
