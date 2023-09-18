'use client'
import styles from './styles.module.scss'
import Burger from '@/components/Burger'
import React, { useState } from 'react'

const HamburgerButton = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null)

  const handleButtonClick = () => {
    // Если Burger уже активен, скрываем его
    if (activeComponent === 'Burger') {
      setActiveComponent(null)
    } else {
      // В противном случае показываем Burger
      setActiveComponent('Burger')
    }
  }

  return (
    <div>
      {/* Добавьте текст на кнопке для отладки */}
      <button className={styles.hamburger_button} onClick={handleButtonClick} />
      {activeComponent === 'Burger' && <Burger />}
    </div>
  )
}

export default HamburgerButton
