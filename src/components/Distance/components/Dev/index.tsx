import { Inter } from 'next/font/google'
import classNames from 'classnames'
import styles from './styles.module.scss'

const inter = Inter({ subsets: ['latin'], weight: ['700'] })

const Dev = () => {
  return (
    <section className={styles.pageDev}>
      <div className={styles.pageDev__headings}>
        <p
          className={classNames(styles.pageDev__smallHeading, inter.className)}
        >
          DevPractice
        </p>
        <h2 className={classNames(styles.pageDev__bigHeading, inter.className)}>
          Учись у нас
        </h2>
      </div>
      <div className={styles.pageDev__bottom}>
        <p className={classNames(styles.pageDev__bottomText, inter.className)}>
          Образовательный интенсив для <br /> студентов IT-специальностей.{' '}
          <br /> Практические навыки, ключевые <br /> компоненты, командная
          работа.
        </p>
        <a href="https://devpractice.kz/" target="_blank">
          <button className={styles.pageDev__bottomButton}>
            <b>Подробнее</b>
          </button>
        </a>
      </div>
    </section>
  )
}

export default Dev
