import Image from 'next/image'
import classNames from 'classnames'
import A3 from 'public/A3.svg'
import buttons from 'public/buttons.svg'
import firstBlockMainIcon from 'public/gallery_first_block_main_icon.svg'
import firstBlockSymbolsIcon from 'public/gallery_first_block_symbols_icon.svg'
import specializedEvents1 from 'public/gallery_specialized_events_1.png'
import specializedEvents2 from 'public/gallery_specialized_events_2.png'
import specializedEvents3 from 'public/gallery_specialized_events_3.png'
import specializedEvents4 from 'public/gallery_specialized_events_4.png'
import specializedEvents5 from 'public/gallery_specialized_events_5.png'
import learning_eng from 'public/learning_eng.png'
import learning_eng2 from 'public/learning_eng2.png'
import learning_eng3 from 'public/learning_eng3.png'
import { FormattedString } from '@/helpers/FormattedString'
import React from 'react'

import WideSlider from './WideSlider'

import styles from './styles.module.scss'

const Gallery = () => {
  const specializedEvents = [
    {
      label: (
        <span>
          Сами организовываем <br /> профильные мероприятия
        </span>
      ),
      component: (
        <Image
          src={specializedEvents1}
          alt={'Профильное мероприятие #1'}
          fill
        />
      ),
    },
    {
      label: (
        <span>
          Сами организовываем <br /> профильные мероприятия
        </span>
      ),
      component: (
        <Image
          src={specializedEvents2}
          alt={'Профильное мероприятие #2'}
          fill
        />
      ),
    },
    {
      label: (
        <span>
          Сами организовываем <br /> профильные мероприятия
        </span>
      ),
      component: (
        <Image
          src={specializedEvents3}
          alt={'Профильное мероприятие #3'}
          fill
        />
      ),
    },
    {
      label: (
        <span>
          Сами организовываем <br /> профильные мероприятия
        </span>
      ),
      component: (
        <Image
          src={specializedEvents4}
          alt={'Профильное мероприятие #4'}
          fill
        />
      ),
    },
    {
      label: (
        <span>
          Сами организовываем <br /> профильные мероприятия
        </span>
      ),
      component: (
        <Image
          src={specializedEvents5}
          alt={'Профильное мероприятие #5 '}
          fill
        />
      ),
    },
  ]

  const learnEnglish = [
    {
      label: (
        <span>
          Изучаем бесплатно
          <br /> английский язык
        </span>
      ),
      component: <Image src={learning_eng} alt={'learn English #1'} fill />,
    },
    {
      label: (
        <span>
          Изучаем бесплатно <br /> английский язык
        </span>
      ),
      component: <Image src={learning_eng2} alt={'learn English #3'} fill />,
    },
    {
      label: (
        <span>
          Изучаем бесплатно
          <br /> английский язык
        </span>
      ),
      component: <Image src={learning_eng3} alt={'learn English #4'} fill />,
    },
  ]

  const whatWeDo = [
    {
      label: (
        <span>
          Пользуемся <br />и оформляем <br />
          tech-библиотеку
        </span>
      ),
      component: <Image src={A3} alt={'figures'} />,
    },
    {
      label: (
        <span>
          Пользуемся <br />и оформляем <br />
          tech-библиотеку
        </span>
      ),
      component: <Image src={A3} alt={'figures'} />,
    },
    {
      label: (
        <span>
          Пользуемся <br />и оформляем <br />
          tech-библиотеку
        </span>
      ),
      component: <Image src={A3} alt={'figures'} />,
    },
  ]

  return (
    <section className={styles.gallery}>
      <h2 className={styles.header}>
        <FormattedString sentence="qazdev - не просто код" />
      </h2>
      <header className={styles.additional}>
        <p className={styles.additional__info}>
          Наша команда постоянно развивается и активно участвует в
          профессиональных мероприятиях, образовательных программах и языковых
          курсах
        </p>

        <Image
          className={styles.additional__buttons}
          src={buttons}
          alt="Shift + F6"
        />
      </header>
      <div className={styles.blocks}>
        <div className={classNames(styles.blocks__first, styles.first)}>
          <span className={styles.first__header}>
            Участвуем и выступаем <br /> на митапах
          </span>
          <div className={styles.first__icon}>
            <Image
              src={firstBlockMainIcon}
              alt="First block main icon"
              fill={true}
            />
          </div>
          <span className={styles.first__footer}>
            Посещаем профильные <br /> конференции
          </span>
        </div>

        <div className={classNames(styles.blocks__second, styles.second)}>
          <Image
            className={styles.second__top}
            src={firstBlockSymbolsIcon}
            alt="1cm"
          />
          <span className={styles.second__bottom}>event направление</span>
        </div>

        <div className={classNames(styles.blocks__third, styles.third)}>
          <WideSlider items={specializedEvents} />
        </div>
        <div className={classNames(styles.blocks__fourth, styles.fourth)}>
          <div className={styles.fourth_img}></div>

          <p>
            Пользуемся <br />и оформляем <br /> tech-библиотеку
          </p>
        </div>
      </div>
      <div className={classNames(styles.blocks, styles.secondary_blocks)}>
        <div className={classNames(styles.blocks__fives, styles.fives)}></div>
        <div className={classNames(styles.blocks__sixth, styles.sixth)}></div>
        <div className={classNames(styles.blocks__seventh, styles.seventh)}>
          <WideSlider items={learnEnglish} />
        </div>
      </div>
    </section>
  )
}

export default Gallery
