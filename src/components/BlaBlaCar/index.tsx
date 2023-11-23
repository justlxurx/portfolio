'use client'
// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'
import Button from '../ui/Button'

const BlaCar = () => {
  const handleDownloadClick = () => {
    // Задайте путь к вашей презентации
    const presentationUrl = '/qazdev_cases.pdf'

    // Создайте ссылку для скачивания
    const downloadLink = document.createElement('a')
    downloadLink.href = presentationUrl
    downloadLink.download = 'qazdev_cases.pdf'

    // Симулируйте клик по ссылке для начала скачивания
    downloadLink.click()
  }
  return (
    <section>
      <section className={styles.cases_button}>
        <div className={styles.qazdev_logo}></div>
        <div className={styles.cases_button_get}>
          <h1>НАши кейсы</h1>
          <Button onClick={handleDownloadClick}>
            <b> получить презентацию</b>
          </Button>
        </div>
      </section>
      <section className={styles.bla}>
        <div className={styles.bla__title}>
          <p>Сервис поиска автопопутчиков</p>
          <p className={styles.project_num}>001</p>
        </div>

        <div className={styles.bla__content}>
          <div className={styles.bla__content__border}></div>

          <div className={styles.bla__content__img}></div>
          <div className={styles.bla__content__desc}>
            <div className={styles.desc_row1}>
              <h3>
                <strong>Кортим команда</strong>
              </h3>
              <p>
                Команда
                <strong>
                  <em> qazdev </em>
                </strong>
                стала региональным техническим партнером <br />
                <b>крупнейшего онлайн-сервиса</b> поиска автомобильных
                попутчиков
                <br />с <b>90 миллионами пользователей в 22 странах</b>
              </p>
            </div>
            <div className={styles.desc_row2}>
              <p className={styles.text1}>
                Проекту нужны были специалисты, которые взяли бы на себя
                сопровождение и доработку одного из B2B продуктов,
                обеспечивающего взаимодействие с автобусными перевозчиками{' '}
                <br /> <br /> Мы собрали команду из бэкенд-разработчиков,
                девопсов, тестировщиков, а также дев-менеджера
              </p>
              <p className={styles.text2}>
                {'<1>'} Обновили платформу, отвечающую за поиск рейсов <br />{' '}
                <br />
                {'<2>'} Создали адаптеры – обновленные версии системы и
                перенесли на них информацию <br />
                <br />
                {'<3>'} Провели рефакторинг — перепроектирование кода, и на
                протяжении года ведем постоянную поддержку системы
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default BlaCar
