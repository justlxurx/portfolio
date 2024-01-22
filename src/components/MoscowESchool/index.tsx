import styles from './styles.module.scss'

const ESchool = () => {
  return (
    <section className={styles.monitoring}>
      <div className={styles.monitoring__title}>
        <p>Московская электронная школа</p>
        <p className={styles.monitoring__titleNum}>008</p>
      </div>

      <div className={styles.monitoring__content}>
        <div className={styles.monitoring__emptyBlock}>
          <div className={styles.hiddenBlock}>
            <p className={styles.hiddenBlock__text}>
              Пользователь может вести журнал классов, выдавать задания,
              составлять учебный план, следить за расписанием, школьными
              новостями и мероприятиями.
            </p>
            <div className={styles.hiddenBlock__content}>
              <p className={styles.hiddenBlock__contentNum}>008</p>
              <div className={styles.hiddenBlock__contentImg}></div>
            </div>
          </div>
        </div>
        <div className={styles.monitoring__img}></div>
        <div className={styles.monitoring__text}>
          <div></div>
          <div className={styles.monitoring__text1}>
            <p>
              Пользователь может вести журнал классов, выдавать задания,
              составлять учебный план, следить за расписанием, школьными
              новостями и мероприятиями.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ESchool
