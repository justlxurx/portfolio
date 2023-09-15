// import styles from './styles.module.scss'

// const HamburgerButton = () =>
// <button className={styles.hamburger_button} />

// export default HamburgerButton

'use client'

import styles from './styles.module.scss'
import Burger from '@/components/Burger'
import React, { useState } from 'react'

const HamburgerButton = () => {
  const [activeComponent, setActiveComponent] = useState(null)
  const handleButtonClick = (Burger: any) => {
    setActiveComponent(Burger)
  }
  return (
    <div>
      <button
        className={styles.hamburger_button}
        onClick={() => handleButtonClick('Burger')}
      />
      {activeComponent === 'Burger' && <Burger />}
    </div>
  )
}
export default HamburgerButton
