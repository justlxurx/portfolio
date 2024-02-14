import Image from 'next/image'
import styles from './styles.module.scss'
import logo_10 from 'public/logo-10.png'

const AI = () => {
  return (
    <section className={styles.crm}>
      <div className={styles.crm__title}>
        <div className={styles.crm__hiddenHeading}>
          <Image src={logo_10} alt="" className={styles.crm__logo} />
          <h3 className={styles.crm__heading}>ИИ бот</h3>
          <a
            href="https://thisberry.com/"
            className={styles.crm__link}
            target="_blank"
          >
            https://thisberry.com/
          </a>
        </div>

        <p className={styles.crm__titleNum}>002</p>
      </div>

      <div className={styles.crm__content}>
        <div className={styles.crm__contentColumn1}>
          <div className={styles.crm__headingWrapper}>
            <Image src={logo_10} alt="" className={styles.crm__logo} />
            <h3 className={styles.crm__heading}>ИИ бот</h3>
            <a
              href="https://thisberry.com/"
              className={styles.crm__link}
              target="_blank"
            >
              https://thisberry.com/
            </a>
          </div>
          {/* <div></div> */}
        </div>

        <div className={styles.crm__contentColumn2}>
          <div className={styles.hiddenText}>
            <p></p>
            <div className={styles.hiddenText__last}>
              <div className={styles.rightIcon}></div>
              <p>
                Разрабатывали инновационного бота, обладающего способностью
                анализировать содержание веб-сайтов и автоматически отбирать
                видеоматериалы из публичных источников, соответствующие тематике
                сайта.
              </p>
            </div>
          </div>
          <div className={styles.crm__img}></div>
          <div className={styles.crm__text}>
            <p>
              Разрабатывали инновационного бота, обладающего способностью
              анализировать содержание веб-сайтов и автоматически отбирать
              видеоматериалы из публичных источников, соответствующие тематике
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
