import Image from 'next/image'
import styles from './styles.module.scss'
import logo_19 from 'public/logo-19.png'

const Delivery = () => {
  return (
    <section className={styles.documentFlow}>
      <div className={styles.documentFlow__title}>
        <div className={styles.documentFlow__hiddenHeading}>
          <Image src={logo_19} alt="" className={styles.documentFlow__logo} />
          <h3 className={styles.documentFlow__heading}>Сервис доставки</h3>
          <a
            href="https://zhiber.kz/ru"
            target="_blank"
            className={styles.documentFlow__link}
          >
            https://zhiber.kz/ru
          </a>
        </div>
        <p className={styles.documentFlow__titleNum}>001</p>
      </div>

      <div className={styles.documentFlow__content}>
        <div className={styles.documentFlow__contentRow1}>
          <div></div>
          <div className={styles.firstText}>
            <p></p>
            <div className={styles.hiddenBlock1}>
              <p className={styles.hiddenBlock1__num}>001</p>
              <div className={styles.hiddenBlock1__img}></div>
            </div>
          </div>
          <div className={styles.secondText}>
            <div className={styles.hiddenBlock2}></div>
            <div className={styles.documentFlow__headingWrapper}>
              <Image
                src={logo_19}
                alt=""
                className={styles.documentFlow__logo}
              />
              <h3 className={styles.documentFlow__heading}>Сервис доставки</h3>
              <a
                href="https://zhiber.kz/ru"
                target="_blank"
                className={styles.documentFlow__link}
              >
                https://zhiber.kz/ru
              </a>
            </div>
          </div>
        </div>

        <div className={styles.documentFlow__contentRow2}>
          <div></div>
          <div className={styles.flowImg}></div>
          <div></div>
          <p>
            {' '}
            Наша команда успешно разработала полную интеграцию с
            Яндекс.Доставкой, предоставляя вам современные и эффективные функции
            для управления доставкой вашего товара. <br />
            {` <1>`} Мы обеспечили возможность легкого заказа, понятного
            отслеживания пути вашей посылки и безупречного завершения доставки.{' '}
            <br />
            {'<2>'}Наш сервис гарантирует надежность и удобство в каждом этапе
            процесса, чтобы ваш опыт был максимально комфортным и беззаботным.
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

export default Delivery
