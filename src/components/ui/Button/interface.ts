import React from 'react'

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
}
