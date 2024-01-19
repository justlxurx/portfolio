// import Button from '@/components/ui/Button'
import styles from './styles.module.scss'

const DocFlow = () => {
  return (
    <section className={styles.documentFlow}>
      <div className={styles.documentFlow__title}>
        <p>Онлайн-документооборот</p>
        <p className={styles.documentFlow__titleNum}>003</p>
      </div>

      <div className={styles.documentFlow__content}>
        <div className={styles.documentFlow__contentRow1}>
          <div></div>
          <div className={styles.firstText}>
            <p>
              Команда
              <strong>
                <em> qazdev </em>
              </strong>
              настроила работу сервиса для создания соглашений, договоров,
              контрактов, претензионных документов
            </p>
            <div className={styles.hiddenBlock1}>
              <p className={styles.hiddenBlock1__num}>003</p>
              <div className={styles.hiddenBlock1__img}></div>
            </div>
          </div>
          <div className={styles.secondText}>
            <div className={styles.hiddenBlock2}></div>
            <p>
              Система сервиса-конструктора, который дает возможность создавать,
              подписывать и хранить документы, имеющие правовую ценность,
              нуждалась в доработке. Необходимо было разработать новые модули и
              АРІ, а также грамотно выстроить процессы технической поддержки
            </p>
          </div>
        </div>

        <div className={styles.documentFlow__contentRow2}>
          <div></div>
          <div className={styles.flowImg}></div>
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

        <div className={styles.documentFlow__contentRow3}>
          <div className={styles.border1}></div>
          <div className={styles.border2}></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default DocFlow
