import Image from 'next/image'
import styles from './styles.module.scss'
import logo_12 from 'public/logo-12.png'

const PaymentSystem = () => {
  return (
    <section className={styles.fintech}>
      <div className={styles.fintech__title}>
        <div className={styles.fintech__hiddenHeading}>
          <Image src={logo_12} alt="logo" className={styles.fintech__logo} />
          <h3 className={styles.fintech__heading}>Платежная система</h3>
          <a
            href="https://senim.kz"
            className={styles.fintech__link}
            target="_blank"
          >
            https://senim.kz
          </a>
        </div>
        <p className={styles.fintech__titleNum}>006</p>
      </div>

      <div className={styles.fintech__content}>
        <div className={styles.fintech__contentRow1}>
          <div className={styles.fintech__text}>
            <div>
              <div className={styles.fintech__headingWrapper}>
                <Image
                  src={logo_12}
                  alt="logo"
                  className={styles.fintech__logo}
                />
                <h3 className={styles.fintech__heading}>Платежная система</h3>
                <a
                  href="https://senim.kz"
                  className={styles.fintech__link}
                  target="_blank"
                >
                  https://senim.kz
                </a>
              </div>
              <div className={styles.hiddenBlock1}>
                <p className={styles.hiddenBlock1__num}>006</p>
                <div className={styles.hiddenBlock1__img}></div>
              </div>
            </div>
            <p className={styles.fintech__textLast}>
              Разработка REST-сервиса промо-кодов. Доработка существующих
              интеграций с различными АЗС, для реализации оплаты ГСМ посредством
              сервиса.
            </p>
          </div>
          <div className={styles.fintech__img}></div>
          <p className={styles.hiddenText}></p>
          <div className={styles.fintech__empty}></div>
        </div>

        <div className={styles.fintech__contentRow2}>
          <p>
            Создание с нуля REST-интеграции, с банком 2-го уровня. Интеграция
            позволяет получать актуальные данные по счетам клиентов, а также
            предусматривает возможность перевода средств с текущего счёта на
            указанный пользователем. Для защиты данных при интеграции
            использовалась технология JWS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PaymentSystem
