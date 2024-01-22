'use client'
import styles from './styles.module.scss'

const Grupovina = () => {
  return (
    <section className={styles.booking}>
      <div className={styles.booking__title}>
        <p>Доработка платформы Grupovina</p>
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
          <p>
            Мы расширяли функционал сервиса, предлагающего скидки, акции и
            купоны на различные услуги, работая как с пользовательским
            интерфейсом, так и с бэкендом.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Grupovina
