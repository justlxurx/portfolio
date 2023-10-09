'use client'
import styles from './styles.module.scss'
import React from 'react'

interface HamburgerButtonProps {
  onClick: () => void
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button className={styles.hamburger_button} onClick={onClick} />
    </div>
  )
}

export default HamburgerButton
