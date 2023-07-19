import { ReactNode } from 'react'

export interface ICard {
  title: ReactNode
  description: string
  tag: ReactNode
  link: string
  image: HTMLImageElement
  className: string
}

export interface IBarcodeIcon {
  className: string
}

export interface IPuzzleIcon {
  className: string
}
