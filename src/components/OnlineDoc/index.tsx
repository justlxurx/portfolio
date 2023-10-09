// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const DocFlow = () => {
  return (
    <section className={styles.doc_flow}>
      <div className={styles.doc_flow__title}>
        <p>Онлайн-документооборот</p>
        <p className={styles.project_num}>002</p>
      </div>

      <div className={styles.doc_flow__content}>
        <div className={styles.doc_flow__content__row1}>
          <div></div>
          <div className={styles.first_text}>
            <p>
              Команда
              <strong>
                <em> qazdev </em>
              </strong>
              настроила работу сервиса для создания соглашений, договоров,
              контрактов, претензионных документов
            </p>
            <div className={styles.hidden_block1}>
              <p className={styles.hidden_block1_num}>002</p>
              <div className={styles.hidden_block1_img}></div>
            </div>
          </div>
          <div className={styles.second_text}>
            <div className={styles.hidden_block2}></div>
            <p>
              Система сервиса-конструктора, который дает возможность создавать,
              подписывать и хранить документы, имеющие правовую ценность,
              нуждалась в доработке. Необходимо было разработать новые модули и
              АРІ, а также грамотно выстроить процессы технической поддержки
            </p>
          </div>
        </div>

        <div className={styles.doc_flow__content__row2}>
          <div></div>
          <div className={styles.flow_img}></div>
          <div></div>
          <p>
            {'<1>'} Мы протестировали работу платформы, нашли и исправили ошибки{' '}
            <br />
            <br />
            {'<2>'} Устранили проблемы проверки данных <br />
            <br />
            {'<3>'} Добавили дополнительные ступени проверки информации,
            приходящей из баз данных
            <br />
            <br />
            {'<4>'} Также сверстали новую админ-панель, сделали распределение
            ролей и доступа к вкладкам, наладили коммуникации с бэком
          </p>
        </div>

        <div className={styles.doc_flow__content__row3}>
          <div className={styles.border1}></div>
          <div className={styles.border2}></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default DocFlow
