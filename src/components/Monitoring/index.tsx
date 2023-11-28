import styles from './styles.module.scss'

const Monitoring = () => {
  return (
    <section className={styles.monitoring}>
      <div className={styles.monitoring__title}>
        <p>Сервис мониторинга для горнодобывающей компании</p>
        <p className={styles.project_num}>005</p>
      </div>

      <div className={styles.monitoring__content}>
        <div className={styles.monitoring_empty_block}>
          <div className={styles.hidden_block}>
            <p className={styles.hidden_block_text}>
              Команда{' '}
              <strong>
                <em>qazdev</em>
              </strong>{' '}
              участвовала в разработке букинговой системы для круизных лайнеров
            </p>
            <div className={styles.hidden_block_content}>
              <p className={styles.hidden_block_content_num}>005</p>
              <div className={styles.hidden_block_content_img}></div>
            </div>
          </div>
        </div>
        <div className={styles.monitoring_img}></div>
        <div className={styles.monitoring_text}>
          <div></div>
          <div className={styles.monitoring_text_first}>
            <p>
              Команда{' '}
              <strong>
                <em>qazdev </em>
              </strong>{' '}
              создала сервис мониторинга в режиме реального времени
            </p>
            <p>
              Заказчику нужна была платформа, которая отображала бы в режиме
              реального времени информацию о сотрудниках, оборудовании и
              технике, работающей на предприятии
            </p>
          </div>
          <div className={styles.monitoring_text_second}>
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
