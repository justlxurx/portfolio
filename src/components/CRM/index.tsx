// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const CRM = () => {
  return (
    <section className={styles.crm}>
      <div className={styles.crm__title}>
        <p>Создание CRM-системы</p>
        <p className={styles.project_num}>002</p>
      </div>

      <div className={styles.crm__content}>
        <div className={styles.crm__content__column1}>
          <div></div>
        </div>

        <div className={styles.crm__content__column2}>
          <div className={styles.hidden_text}>
            <p>
              Команда{' '}
              <strong>
                <em>qazdev</em>
              </strong>{' '}
              создала ПО, повышающее уровень продаж
            </p>
            <div className={styles.hidden_text_last}>
              <div className={styles.right_icon}></div>
              <p>
                Заказчику нужно было построить платформу, которая позволит
                компаниям комплексно увеличивать показатели прибыли
              </p>
            </div>
          </div>
          <div className={styles.crm_img}></div>
          <div className={styles.crm_text}>
            <p>
              Команда{' '}
              <strong>
                <em>qazdev</em>
              </strong>{' '}
              создала ПО, повышающее уровень продаж <br />
              <br /> <br />
              Заказчику нужно было построить платформу, которая позволит
              компаниям комплексно увеличивать показатели прибыли
            </p>
            <p>
              Мы создали CRM-систему, которая автоматизирует стратегии
              взаимодействия с клиентами, оптимизирует маркетинг-задачи, хранит
              информацию о клиентах и истории взаимоотношений с ними. Как
              следствие, эти действия улучшают сервис, бизнес-процессы и
              повышают уровень продаж
            </p>
          </div>
        </div>

        <div className={styles.crm__content__column3}>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default CRM
