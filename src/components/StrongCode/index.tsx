'use client'
import Image from 'next/image'
import fitness from 'public/fitness.png'
import fitness1 from 'public/fitness1.png'
import fitness2 from 'public/fitness2.png'
import fitness3 from 'public/fitness3.png'
import fitness4 from 'public/fitness4.png'
import BigSlider from './BigSlider'

import { motion } from 'framer-motion'
// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

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
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  }
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={styles.strong_coding}
    >
      <div className={styles.strong_coding_main}>
        <motion.h2 variants={textAnimation} custom={2}>
          Сильный <br />
          код{' '}
        </motion.h2>

        <div className={styles.text1}>
          <p></p>
          <motion.p variants={textAnimation} custom={3} className={styles.text}>
            Компания{' '}
            <strong>
              <em>qazdev</em>
            </strong>{' '}
            основала первый <br /> в Караганде тренажерный зал <br />
            для IT-специалистов с <br /> профессиональным оборудованием
          </motion.p>
        </div>

        <div className={styles.hr_line}>
          <hr />
        </div>

        <div className={styles.text2}>
          <div>
            {/* <button className={styles.cases_button_1}>
              <Image
                className={styles.cases_button__arrow1}
                src={arrow_icon}
                alt={'Arrow'}
              />
              SHIFT + F6{' '}
            </button>
            <p className={styles.click_for}>
              {'<'}нажмите, чтобы запустить bug flyer{'>'}
            </p> */}
          </div>
          <motion.p custom={4} variants={textAnimation} className={styles.text}>
            Сотрудники{' '}
            <strong>
              <em>qazdev</em>
            </strong>{' '}
            <br /> занимаются в тренажерном <br /> зале ALPHA бесплатно
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={textAnimation}
        custom={5}
        className={styles.slider1}
      >
        <div className={styles.slider1_big}>
          <BigSlider items={firstEvent} />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default StrongCode
