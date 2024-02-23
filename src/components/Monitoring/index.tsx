import styles from './styles.module.scss'

const Monitoring = () => {
  return (
    <section className={styles.monitoring}>
      <div className={styles.monitoring__title}>
        <p>Сервис мониторинга для горнодобывающей компании</p>
        <p className={styles.monitoring__titleNum}>014</p>
      </div>

      <div className={styles.monitoring__content}>
        <div className={styles.monitoring__emptyBlock}>
          <div className={styles.hiddenBlock}>
            <p className={styles.hiddenBlock__text}>
              Команда{' '}
              <strong>
                <em>qazdev </em>
              </strong>{' '}
              создала сервис мониторинга в режиме реального времени
            </p>
            <div className={styles.hiddenBlock__content}>
              <p className={styles.hiddenBlock__contentNum}>014</p>
              <div className={styles.hiddenBlock__contentImg}></div>
            </div>
          </div>
        </div>
        <div className={styles.monitoring__img}></div>
        <div className={styles.monitoring__text}>
          <div></div>
          <div className={styles.monitoring__text1}>
            <p>
              Команда{' '}
              <strong>
                <em>qazdev </em>
              </strong>{' '}
              создала сервис мониторинга <br /> в режиме реального времени
            </p>
            <p>
              Заказчику нужна была платформа, которая отображала бы в режиме
              реального времени информацию о сотрудниках, оборудовании и
              технике, работающей на предприятии
            </p>
          </div>
          <div className={styles.monitoring__text2}>
            Мы с нуля создали сервис мониторинга, реализовав гибкий поиск по
            полям и отображение нужных параметров в таблицах. А также настроили
            работу технической поддержки
          </div>
        </div>
      </div>
    </section>
  )
}

export default Monitoring
