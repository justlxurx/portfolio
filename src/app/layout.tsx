import React from 'react'
import type { Metadata } from 'next'
import { YandexMetrica } from '@/components/YandexMetrica'
import '@/styles/global.scss'
import Providers from './providers'

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
        <Providers>
          {/* <Loading></Loading> */}
          <YandexMetrica> {children}</YandexMetrica>
        </Providers>
      </body>
    </html>
  )
}
