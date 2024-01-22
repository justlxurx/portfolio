import styles from './styles.module.scss'

const Crowd = () => {
  return (
    <section className={styles.monitoring}>
      <div className={styles.monitoring__title}>
        <p>Краудленинговая платформа</p>
        <p className={styles.monitoring__titleNum}>003</p>
      </div>

      <div className={styles.monitoring__content}>
        <div className={styles.monitoring__emptyBlock}>
          <div className={styles.hiddenBlock}>
            <p className={styles.hiddenBlock__text}>
              Мы создали программное обеспечение для автомобильных весов,
              использующее передовые технологии компьютерного зрения для
              автоматического считывания номеров машин.
            </p>
            <div className={styles.hiddenBlock__content}>
              <p className={styles.hiddenBlock__contentNum}>003</p>
              <div className={styles.hiddenBlock__contentImg}></div>
            </div>
          </div>
        </div>
        <div className={styles.monitoring__img}></div>
        <div className={styles.monitoring__text}>
          <div></div>
          <div className={styles.monitoring__text1}>
            <p>
              Мы создали программное обеспечение для автомобильных весов,
              использующее передовые технологии компьютерного зрения для
              автоматического считывания номеров машин.
            </p>
          </div>
          <div className={styles.monitoring__text2}>
            Кроме того, разработали систему для генерации и хранения отчетов,
            обеспечивая удобство и точность данных о взвешивании автомобилей.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crowd
