import styles from './styles.module.scss'

const AI = () => {
  return (
    <section className={styles.crm}>
      <div className={styles.crm__title}>
        <p>ИИ бот</p>
        <p className={styles.crm__titleNum}>002</p>
      </div>

      <div className={styles.crm__content}>
        <div className={styles.crm__contentColumn1}>
          <div></div>
        </div>

        <div className={styles.crm__contentColumn2}>
          <div className={styles.hiddenText}>
            <p></p>
            <div className={styles.hiddenText__last}>
              <div className={styles.rightIcon}></div>
              <p>
                Разрабатывали инновационного бота, обладающего способностью
                анализировать содержание веб-сайтов и автоматически отбирать
                видеоматериалы из публичныхисточников, соответствующие тематике
                сайта.
              </p>
            </div>
          </div>
          <div className={styles.crm__img}></div>
          <div className={styles.crm__text}>
            <p>
              Разрабатывали инновационного бота, обладающего способностью
              анализировать содержание веб-сайтов и автоматически отбирать
              видеоматериалы из публичныхисточников, соответствующие тематике
              сайта.
            </p>
            <p>
              Кроме того, он предлагал рекламу, гармонирующую с контентом видео,
              отображая ее в соответствии с контентом сайта.
            </p>
          </div>
        </div>

        <div className={styles.crm__contentColumn3}>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default AI
