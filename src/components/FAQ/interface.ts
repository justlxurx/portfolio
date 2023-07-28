import { ReactNode } from 'react'

export interface IFAQ {
  title: string
  description: string | ReactNode
  fully?: boolean
}
