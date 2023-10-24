'use client'
import Image from 'next/image'
import fitness from 'public/fitness.png'
import fitness1 from 'public/fitness1.png'
import fitness2 from 'public/fitness2.png'
import fitness3 from 'public/fitness3.png'
import fitness4 from 'public/fitness4.png'
import BigSlider from './BigSlider'
import { AnimationWrapper } from '../AnimationWrapper'
// import Button from '@/components/ui/Button'
import arrow_icon from 'public/arrow_icon.svg'
import styles from './styles.module.scss'
import { useState } from 'react'
import Game from '../Game'

const StrongCode = () => {
  const firstEvent = [
    {
      component: <Image src={fitness} alt={'fitness'} fill />,
    },
    {
      component: <Image src={fitness1} alt={'fitness'} fill />,
    },
    {
      component: <Image src={fitness2} alt={'fitness'} fill />,
    },
    {
      component: <Image src={fitness3} alt={'fitness'} fill />,
    },
    {
      component: <Image src={fitness4} alt={'fitness'} fill />,
    },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const openModel = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section className={styles.strong_coding}>
      <div className={styles.strong_coding_main}>
        <AnimationWrapper custom={2}>
          <h2>
            Сильный <br />
            код
          </h2>
        </AnimationWrapper>

        <div className={styles.text1}>
          <p></p>
          <AnimationWrapper custom={3}>
            <p className={styles.text}>
              Компания{' '}
              <strong>
                <em>qazdev</em>
              </strong>{' '}
              основала первый <br /> в Караганде тренажерный зал <br />
              для IT-специалистов с <br /> профессиональным оборудованием
            </p>
          </AnimationWrapper>
        </div>

        <div className={styles.hr_line}>
          <hr />
        </div>

        <div className={styles.text2}>
          <div>
            <button className={styles.cases_button_1} onClick={openModel}>
              <Image
                className={styles.cases_button__arrow1}
                src={arrow_icon}
                alt={'Arrow'}
              />
              SHIFT + Q
            </button>
            <Game isOpenInit={isOpen} changeIsOpenInit={closeModal} />
            <p className={styles.click_for}>
              {'<'}нажмите, чтобы запустить bug flyer{'>'}
            </p>
          </div>
          <AnimationWrapper custom={4}>
            <p className={styles.text}>
              Сотрудники{' '}
              <strong>
                <em>qazdev</em>
              </strong>{' '}
              <br /> занимаются в тренажерном <br /> зале ALPHA бесплатно
            </p>
          </AnimationWrapper>
        </div>
      </div>
      <AnimationWrapper custom={5}>
        <div className={styles.slider1}>
          <div className={styles.slider1_big}>
            <BigSlider items={firstEvent} />
          </div>
        </div>
      </AnimationWrapper>
    </section>
  )
}

export default StrongCode
