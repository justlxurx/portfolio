// components/GameModal.js
'use client'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Game = ({
  isOpenInit,
  changeIsOpenInit,
}: {
  isOpenInit?: boolean
  changeIsOpenInit?: (state: boolean) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (isOpenInit !== undefined) {
      setIsOpen(isOpenInit)
    }
  }, [isOpenInit])

  useEffect(() => {
    const closeModal = (e: any) => {
      if (isOpen && !e.target.closest('.modal')) {
        setIsOpen(false)
        changeIsOpenInit && changeIsOpenInit(false)
        console.log('you click')
      }
    }
    const handleKeyPress = (e: any) => {
      if (e.shiftKey && e.key === 'Q') {
        openModal()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('click', closeModal)

    return () => {
      window.removeEventListener('click', closeModal)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isOpen, changeIsOpenInit])

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            {/* <span className={styles.close} onClick={closeModal}>
              &times;
            </span> */}
            <iframe
              src="https://game.qazdev.kz"
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default Game
