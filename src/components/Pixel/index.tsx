'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { Silkscreen } from 'next/font/google'
import classNames from 'classnames'

const silkscreen = Silkscreen({ subsets: ['latin'], weight: ['700'] })

const Pixel = ({ children }: { children: ReactNode }) => {
  const [originalText, setOriginalText] = useState('')
  const [defaultClass, setDefaultClass] = useState(silkscreen.className)
  const duration = 5000 // Время в миллисекундах
  const textElementRef = useRef<HTMLParagraphElement | null>(null)
  let intervalId: ReturnType<typeof setInterval> | null = null
  let currentTime = 0

  useEffect(() => {
    // Set the initial text content
    if (textElementRef.current) {
      setOriginalText(textElementRef.current.textContent || '')
    }

    const getRandomLetter = () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const randomIndex = Math.floor(Math.random() * alphabet.length)
      return alphabet[randomIndex]
    }

    const updateTextRandomly = () => {
      if (textElementRef.current) {
        intervalId = setInterval(() => {
          const newText = originalText
            .split('')
            .map(() => getRandomLetter())
            .join('')

          if (textElementRef.current) {
            textElementRef.current.textContent = newText
          }

          currentTime += 100

          if (currentTime >= duration) {
            clearInterval(intervalId!)
            if (textElementRef.current) {
              textElementRef.current.textContent = originalText
            }
            intervalId = null
          }
        }, 100)
      }
    }

    updateTextRandomly()


    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [originalText, duration])

  return (
    <div
      ref={textElementRef}
      className={classNames(defaultClass, styles.pixel_text)}
    >
      {children}
    </div>
  )
}

export default Pixel
