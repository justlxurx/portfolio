import React from 'react'
import type { Metadata } from 'next'

import '@/styles/global.scss'

export const metadata: Metadata = {
  title: 'Index Page',
  description: 'Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
