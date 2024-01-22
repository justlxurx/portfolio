'use client'
import styles from './styles.module.scss'

const CarSize = () => {
  return (
    <section className={styles.booking}>
      <div className={styles.booking__title}>
        <p>ПО для автомобильных весов</p>
        <p className={styles.booking__titleNum}>005</p>
      </div>

      <div className={styles.booking__content}>
        <div className={styles.hiddenBlock}>
          <p className={styles.hiddenBlock__text}>
            Мы создали программное обеспечение для автомобильных весов,
            использующее передовые технологии компьютерного зрения для
            автоматического считывания номеров машин.
          </p>
          <div className={styles.hiddenBlock__content}>
            <p className={styles.hiddenBlock__contentNum}>005</p>
            <div className={styles.hiddenBlock__contentImg}></div>
          </div>
        </div>
        <div className={styles.booking__img}></div>
        <div className={styles.booking__text}>
          <p>
            Мы создали программное обеспечение для автомобильных весов,
            использующее передовые технологии компьютерного зрения для
            автоматического считывания номеров машин.
          </p>
          <p>
            Кроме того, разработали систему для генерации и хранения отчетов,
            обеспечивая удобство и точность данных о взвешивании автомобилей.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default CarSize
