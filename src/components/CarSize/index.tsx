'use client'
import styles from './styles.module.scss'
import logo_8 from 'public/logo-8.png'
import Image from 'next/image'

const CarSize = () => {
  return (
    <section className={styles.booking}>
      <div className={styles.booking__title}>
        {/* <p></p> */}
        <div className={styles.booking__hiddenHeading}>
          <Image src={logo_8} alt="" className={styles.booking__logo} />
          <h3 className={styles.booking__heading}>
            ПО для автомобильных весов
          </h3>
          <a
            href="https://vesovaya.kz/"
            target="_blank"
            className={styles.booking__link}
          >
            https://vesovaya.kz/
          </a>
        </div>
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
          <div className={styles.booking__headingWrapper}>
            <Image src={logo_8} alt="" className={styles.booking__logo} />
            <h3 className={styles.booking__heading}>
              ПО для автомобильных весов
            </h3>
            <a
              href="https://vesovaya.kz/"
              className={styles.booking__link}
              target="_blank"
            >
              https://vesovaya.kz/
            </a>
          </div>
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
        <div className={styles.booking__forBorder}></div>
      </div>
    </section>
  )
}

export default CarSize
