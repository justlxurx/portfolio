import React from 'react'
import type { Metadata } from 'next'
import { YandexMetrica } from '@/components/YandexMetrica'

import '@/styles/global.scss'

export const metadata: Metadata = {
  title: 'qazdev - Главная страница',
  description: 'qazdev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <YandexMetrica>{children}</YandexMetrica>
      </body>
    </html>
  )
}
