import Image from 'next/image'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import arrow_icon from 'public/arrow_icon.svg'
import ellipse from 'public/ellipse.svg'
import line from 'public/line.svg'
import vector_line from 'public/vector_line.png'
import { useMedia } from 'react-use'

// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const StrongCode = () => {
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

      <div className={styles.slider}></div>
    </section>
  )
}

export default StrongCode
