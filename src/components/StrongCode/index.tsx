import Image from 'next/image'
import classNames from 'classnames'
import arrow_icon from 'public/arrow_icon.svg'
//import ellipse from 'public/ellipse.svg'
import fitness from 'public/fitness.png'
import { useMedia } from 'react-use'

import BigSlider from './BigSlider'

// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const StrongCode = () => {
  const firstEvent = [
    {
      component: <Image src={fitness} alt={'fitness'} fill />,
    },
    {
      component: <Image src={fitness} alt={'fitness'} fill />,
    },
    {
      component: <Image src={fitness} alt={'fitness'} fill />,
    },
    {
      component: <Image src={fitness} alt={'fitness'} fill />,
    },
    {
      component: <Image src={fitness} alt={'fitness'} fill />,
    },
  ]
  return (
    <section className={styles.strong_coding}>
      <div className={styles.strong_coding_main}>
        <h2>
          Сильный <br />
          код{' '}
        </h2>
        <div className={styles.text1}>
          <p></p>
          <p className={styles.text}>
            Компания{' '}
            <strong>
              <em>qazdev</em>
            </strong>{' '}
            основала первый <br /> в Караганде тренажерный зал <br />
            для IT-специалистов с <br /> профессиональным оборудованием
          </p>
        </div>
        <div className={styles.hr_line}>
          <hr />
        </div>
        <div className={styles.text2}>
          <div>
            <button className={styles.cases_button_1}>
              <Image
                className={styles.cases_button__arrow1}
                src={arrow_icon}
                alt={'Arrow'}
              />
              SHIFT + F6{' '}
            </button>
            <p className={styles.click_for}>
              {'<'}нажмите, чтобы запустить bug flyer{'>'}
            </p>
          </div>

          <p className={styles.text}>
            Сотрудники{' '}
            <strong>
              <em>qazdev</em>
            </strong>{' '}
            <br /> занимаются в тренажерном <br /> зале ALPHA бесплатно
          </p>
        </div>
      </div>

      <div className={styles.slider1}>
        <div className={styles.slider1_big}>
          <BigSlider items={firstEvent} />
        </div>
      </div>
    </section>
  )
}

export default StrongCode
