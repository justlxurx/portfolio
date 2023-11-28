// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const Fintech = () => {
  return (
    <section className={styles.fintech}>
      <div className={styles.fintech__title}>
        <p>Доработка финтех-платформы</p>
        <p className={styles.project_num}>004</p>
      </div>

      <div className={styles.fintech__content}>
        <div className={styles.fintech__content__row1}>
          <div className={styles.fintech_text}>
            <div>
              <p>
                Команда{' '}
                <strong>
                  <em>qazdev</em>
                </strong>{' '}
                с нуля создала REST- интеграцию с банком для электронного
                кошелька и доработала финтех-платформу
              </p>
              <div className={styles.hidden_block1}>
                <p className={styles.hidden_block1_num}>004</p>
                <div className={styles.hidden_block1_img}></div>
              </div>
            </div>
            <p className={styles.fintech_text_last}>
              Мы провели для электронного кошелька, с помощью которого
              пользователи оплачивали товары и услуги, успешную интеграцию с
              банком второго уровня. Это позволило платежной системе получать
              актуальные данные по счетам клиентов и переводить деньги с
              текущего счета на указанный пользователем
            </p>
          </div>
          <div className={styles.fintech_img}></div>
          <p className={styles.hidden_text}>
            Мы провели для электронного кошелька, с помощью которого
            пользователи оплачивали товары и услуги, успешную интеграцию с
            банком второго уровня. Это позволило платежной системе получать
            актуальные данные по счетам клиентов и переводить деньги с текущего
            счета на указанный пользователем
          </p>
          <div></div>
        </div>

        <div className={styles.fintech__content__row2}>
          <p>
            Для защиты данных при интеграции мы использовали <br /> технологию
            JWS <br />
            <br /> Также доработали саму финтех-платформу проекта: <br />
            <br />
            {'<1>'} Усовершенствовали авторизацию пользователей через ЭЦП <br />
            <br />
            {'<2>'} Настроили хранение данных с помощью библиотек React-redux
            <br />
            <br />
            {'<3>'} Переписали калькулятор факторинга и данные главной страницы,
            которые стали не актуальны
          </p>
        </div>
      </div>
    </section>
  )
}

export default Fintech
