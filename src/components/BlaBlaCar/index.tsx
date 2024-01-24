'use client'
import styles from './styles.module.scss'

const BlaCar = () => {
  return (
    <section className={styles.bla}>
      <div className={styles.bla__title}>
        <p>Сервис поиска автопопутчиков</p>
        <p className={styles.bla__titleNum}>009</p>
      </div>

      <div className={styles.bla__content}>
        <div className={styles.bla__contentBorder}></div>
        <div className={styles.bla__contentImg}></div>
        <div className={styles.bla__contentInfo}>
          <div className={styles.bla__contentInfoFirstRow}>
            <h3>
              <strong>Кортим команда</strong>
            </h3>
            <p>
              Команда
              <strong>
                <em> qazdev </em>
              </strong>
              стала региональным техническим партнером <br />
              <b>крупнейшего онлайн-сервиса</b> поиска автомобильных попутчиков
              <br />с <b>90 миллионами пользователей в 22 странах</b>
            </p>
          </div>
          <div className={styles.bla__contentInfoSecondRow}>
            <p className={styles.text1}>
              Проекту нужны были специалисты, которые взяли бы на себя
              сопровождение и доработку одного из B2B продуктов, обеспечивающего
              взаимодействие с автобусными перевозчиками <br /> <br /> Мы
              собрали команду из бэкенд-разработчиков, девопсов, тестировщиков,
              а также дев-менеджера
            </p>
            <p className={styles.text2}>
              {'<1>'} Обновили платформу, отвечающую за поиск рейсов <br />{' '}
              <br />
              {'<2>'} Создали адаптеры – обновленные версии системы и перенесли
              на них информацию <br />
              <br />
              {'<3>'} Провели рефакторинг — перепроектирование кода, и на
              протяжении года ведем постоянную поддержку системы
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlaCar
