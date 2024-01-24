import Image from 'next/image'
import styles from './styles.module.scss'
import logo_11 from 'public/logo-11.png'

const LightingControl = () => {
  return (
    <section className={styles.documentFlow}>
      <div className={styles.documentFlow__title}>
        <div className={styles.documentFlow__hiddenHeading}>
          <Image src={logo_11} alt="" className={styles.documentFlow__logo} />
          <h3 className={styles.documentFlow__heading}>
            Автоматизированная система управления наружным освещением
          </h3>
          <a
            href="https://www.saiman.kz"
            className={styles.documentFlow__link}
            target="_blank"
          >
            https://www.saiman.kz
          </a>
        </div>
        <p className={styles.documentFlow__titleNum}>004</p>
      </div>

      <div className={styles.documentFlow__content}>
        <div className={styles.documentFlow__contentRow1}>
          <div></div>
          <div className={styles.firstText}>
            <p></p>
            <div className={styles.hiddenBlock1}>
              <p className={styles.hiddenBlock1__num}>004</p>
              <div className={styles.hiddenBlock1__img}></div>
            </div>
          </div>
          <div className={styles.secondText}>
            <div className={styles.hiddenBlock2}></div>
            <div className={styles.documentFlow__headingWrapper}>
              <Image
                src={logo_11}
                alt=""
                className={styles.documentFlow__logo}
              />
              <h3 className={styles.documentFlow__heading}>
                Автоматизированная система управления наружным освещением
              </h3>
              <a
                href="https://www.saiman.kz"
                className={styles.documentFlow__link}
                target="_blank"
              >
                https://www.saiman.kz
              </a>
            </div>
          </div>
        </div>

        <div className={styles.documentFlow__contentRow2}>
          <div></div>
          <div className={styles.flowImg}></div>
          <div></div>
          <p>
            Разработали с нуля систему предназначенную для централизованного
            сбора и хранения данных о работе наружного освещения и оборудования,
            предоставляя информацию по запросу. Она также позволяет удаленно
            снимать показания счетчиков.
            <br /> Система сервиса-конструктора, который дает возможность
            создавать, подписывать и хранить документы, имеющие правовую
            ценность, нуждалась в доработке. Необходимо было разработать новые
            модули и АРІ, а также грамотно выстроить процессы технической
            поддержки
            <br />
            Подключение дополнительных модулей добавляет возможность группового
            управления яркостью светильников и индивидуального контроля каждого,
            не требуя дополнительной проводки.
          </p>
        </div>

        <div className={styles.documentFlow__contentRow3}>
          <div className={styles.border1}></div>
          <div className={styles.border2}></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default LightingControl
