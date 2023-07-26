'use client'

import { useState } from 'react'
import classNames from 'classnames'

import { IFAQ as IFAQData } from './interface'

import styles from './FAQItem.module.scss'

interface IFAQ extends IFAQData {
  number: number
}

const FAQItem = ({ title, description, fully = false, number }: IFAQ) => {
  const [showFully, setShowFully] = useState(fully)

  const onClickShowFullyButtonHandler = () => {
    setShowFully(!showFully)
  }

  return (
    <div
      onClick={onClickShowFullyButtonHandler}
      className={classNames(styles.card, {
        [styles.card___fully]: showFully,
      })}
    >
      <div className={styles.card__header}>
        <span className={styles.card__number}>{`${
          number < 10 && 0
        }${number}`}</span>
        <h3 className={styles.card__title}>{title}</h3>
        <button
          className={classNames(styles.card__fully_button, {
            [styles.card__fully_button___active]: showFully,
          })}
          onClick={onClickShowFullyButtonHandler}
        >
          {showFully ? '+' : '-'}
        </button>
      </div>
      <p className={styles.card__description}>{description}</p>
    </div>
  )
}

export default FAQItem
