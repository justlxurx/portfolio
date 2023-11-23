'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import Loading from './loading_progress'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return <>{loading ? <Loading /> : children}</>
}
