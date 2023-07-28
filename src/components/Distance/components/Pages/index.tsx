//FIXME: remove use client
'use client'
import { Fragment } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import CareerImage from 'public/pages_career_image.svg'
import devPracticeImage from 'public/pages_devpractice_image.svg'

import BarcodeIcon from './BarcodeIcon'
import { ICard } from './interface'
import PuzzleIcon from './PuzzleIcon'

import styles from './styles.module.scss'

const Pages = () => {
  const data: ICard[] = [
    {
      title: (
        <Fragment>
          Учись
          <br /> у нас
        </Fragment>
      ),
      description: `Образовательный интенсив для студентов IT-специальностей. Практические навыки, ключевые компоненты, командная работа.`,
      tag: <span>DevPractice</span>,
      link: '#',
      image: devPracticeImage,
      className: styles.card_color_dark,
    },
    {
      title: (
        <Fragment>
          Будь
          <br />в команде
        </Fragment>
      ),
      description: `Присоединяйся к нам и вместе достигай новых высот в IT-сфере.`,
      tag: (
        <span>
          <b>
            <i>qazdev</i>
          </b>
        </span>
      ),
      link: '#',
      image: CareerImage,
      className: styles.card_color_light,
    },
  ]

  //FIXME: remove
  const onClickPageHandler = () => {
    alert('Страница в разработке')
  }

  return (
    <div className={styles.cards}>
      {data?.map(
        ({ title, description, tag, link, image, className }: ICard) => (
          <div
            className={classNames(styles.card, className)}
            onClick={onClickPageHandler}
            key={nanoid()}
          >
            <div className={styles.card__image_wrapper}>
              <Image src={image} alt={`Обложка`} />
            </div>
            <div className={styles.card__content}>
              <BarcodeIcon className={styles.card__barcode} />
              <div className={styles.card__content_inner}>
                <div>
                  <span className={styles.card__tag}>{tag}</span>
                  <h2 className={styles.card__header}>{title}</h2>
                </div>
                <div>
                  <p className={styles.card__description}>{description}</p>
                  <PuzzleIcon className={styles.card__puzzle} />
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default Pages
