'use client'
import styles from './styles.module.scss'

const InfoPortal = () => {
  return (
    <section className={styles.booking}>
      <div className={styles.booking__title}>
        <p>Информационный портал</p>
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
          <p>
            Рефакторинг раздела спецпроектов. Добавление в футер поста вывод
            постов соответствующей тематики с Infinite-scroll’ом. Авторизация с
            регистрацией и восстановлением пароля у проекта была вынесена
            вотдельный микросервис.
          </p>
          <p>
            Также, по требованию заказчика был реализован данный функционал в
            рамках основного приложения в виде модальных окон, без редиректа на
            микросервис. Исправление багов, реализация новых фич, обновление
            интерфейса, рефаторинг кода.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default InfoPortal
