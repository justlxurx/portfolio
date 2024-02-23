import Image from 'next/image'
import styles from './styles.module.scss'
import logo_18 from 'public/logo-18.png'

const Crowd = () => {
  return (
    <section className={styles.monitoring}>
      <div className={styles.monitoring__title}>
        <div className={styles.monitoring__hiddenHeading}>
          <Image src={logo_18} alt="logo" className={styles.monitoring__logo} />
          <h3 className={styles.monitoring__heading}>
            Краудленинговая платформа
          </h3>
          <a
            href="https://cofi.ru/"
            className={styles.monitoring__link}
            target="_blank"
          >
            https://cofi.ru/
          </a>
        </div>
        <p className={styles.monitoring__titleNum}>001</p>
      </div>

      <div className={styles.monitoring__content}>
        <div className={styles.monitoring__emptyBlock}>
          <div className={styles.hiddenBlock}>
            <p className={styles.hiddenBlock__text}>
              Разработали сервис финансирования, который позволяет
              предпринимателям быстро получать займы от инвесторов напрямую,
              минуя сложный процесс сбора документов и оформления залогов
            </p>
            <div className={styles.hiddenBlock__content}>
              <p className={styles.hiddenBlock__contentNum}>001</p>
              <div className={styles.hiddenBlock__contentImg}></div>
            </div>
          </div>
        </div>
        <div className={styles.monitoring__img}></div>
        <div className={styles.monitoring__text}>
          <div className={styles.monitoring__headingWrapper}>
            <Image
              src={logo_18}
              alt="logo"
              className={styles.monitoring__logo}
            />
            <h3 className={styles.monitoring__heading}>
              Краудленинговая платформа
            </h3>
            <a
              href="https://cofi.ru/"
              className={styles.monitoring__link}
              target="_blank"
            >
              https://cofi.ru/
            </a>
          </div>
          <div className={styles.monitoring__text1}>
            <p>
              Разработали сервис финансирования, который позволяет
              предпринимателям быстро получать займы от инвесторов напрямую,
              минуя сложный процесс сбора документов и оформления залогов
            </p>
          </div>
          <div className={styles.monitoring__text2}></div>
        </div>
      </div>
    </section>
  )
}

export default Crowd
