'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import logo_9 from 'public/logo-9.png'

const Grupovina = () => {
  return (
    <section className={styles.booking}>
      <div className={styles.booking__title}>
        <div className={styles.booking__hiddenHeading}>
          <Image src={logo_9} alt="logo" className={styles.booking__logo} />
          <h3 className={styles.booking__heading}>
            Доработка платформы Grupovina
          </h3>
          <a
            href="https://grupovina.rs/"
            target="_blank"
            className={styles.booking__link}
          >
            https://grupovina.rs/
          </a>
        </div>
        <p className={styles.booking__titleNum}>010</p>
      </div>

      <div className={styles.booking__content}>
        <div className={styles.hiddenBlock}>
          <p className={styles.hiddenBlock__text}>
            Мы расширяли функционал сервиса, предлагающего скидки, акции и
            купоны на различные услуги, работая как с пользовательским
            интерфейсом, так и с бэкендом.
          </p>
          <div className={styles.hiddenBlock__content}>
            <p className={styles.hiddenBlock__contentNum}>010</p>
            <div className={styles.hiddenBlock__contentImg}></div>
          </div>
        </div>
        <div className={styles.booking__img}></div>
        <div className={styles.booking__text}>
          <div className={styles.booking__headingWrapper}>
            <Image src={logo_9} alt="logo" className={styles.booking__logo} />
            <h3 className={styles.booking__heading}>
              Доработка платформы Grupovina
            </h3>
            <a
              href="https://grupovina.rs/"
              target="_blank"
              className={styles.booking__link}
            >
              https://grupovina.rs/
            </a>
          </div>
          <p>
            Мы расширяли функционал сервиса, предлагающего скидки, акции и
            купоны на различные услуги, работая как с пользовательским
            интерфейсом, так и с бэкендом.
          </p>
        </div>
        <div className={styles.booking__forBorder}></div>
      </div>
    </section>
  )
}

export default Grupovina
