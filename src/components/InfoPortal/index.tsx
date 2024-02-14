'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import logo_13 from 'public/logo-13.png'

const InfoPortal = () => {
  return (
    <section className={styles.booking}>
      <div className={styles.booking__title}>
        <div className={styles.booking__hiddenHeading}>
          <Image src={logo_13} alt="" className={styles.booking__logo} />
          <h3 className={styles.booking__heading}>Информационный портал</h3>
          <a
            href="https://yvision.kz/"
            className={styles.booking__link}
            target="_blank"
          >
            https://yvision.kz/
          </a>
        </div>
        <p className={styles.booking__titleNum}>007</p>
      </div>

      <div className={styles.booking__content}>
        <div className={styles.hiddenBlock}>
          <div className={styles.hiddenBlock__content}>
            <p className={styles.hiddenBlock__contentNum}>007</p>
            <div className={styles.hiddenBlock__contentImg}></div>
          </div>
        </div>
        <div className={styles.booking__img}></div>
        <div className={styles.booking__text}>
          <div className={styles.booking__headingWrapper}>
            <Image src={logo_13} alt="" className={styles.booking__logo} />
            <h3 className={styles.booking__heading}>Информационный портал</h3>
            <a
              href="https://yvision.kz/"
              className={styles.booking__link}
              target="_blank"
            >
              https://yvision.kz/
            </a>
          </div>
          <p>
            Рефакторинг раздела спецпроектов. Добавление в футер поста вывод
            постов соответствующей тематики с Infinite-scroll’ом. Авторизация с
            регистрацией и восстановлением пароля у проекта была вынесена в
            отдельный микросервис.
          </p>
          <p>
            Также, по требованию заказчика был реализован данный функционал в
            рамках основного приложения в виде модальных окон, без редиректа на
            микросервис. Исправление багов, реализация новых фич, обновление
            интерфейса, рефаторинг кода.
          </p>
        </div>
        <div className={styles.booking__forBorder}></div>
      </div>
    </section>
  )
}

export default InfoPortal
