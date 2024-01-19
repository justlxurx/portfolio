import styles from './styles.module.scss'
import classNames from 'classnames'

const Mission = () => {
  const data = [
    {
      number: '50+ ',
      text: 'разработчиков',
    },
    {
      number: '200+ ',
      text: 'успешных проектов ',
    },
    {
      number: '5+ ',
      text: 'лет опыта',
    },
    {
      number: '70%',
      text: 'компаний в последующем рекомендуют нас',
    },
  ]
  return (
    <section className={classNames(styles.mission, 'container')}>
      <h2 className={styles.mission__heading}>
        Наша миссия: предоставлять <br /> инновационные IT-решения и уникальные{' '}
        <br />
        технологические исследования{' '}
        <span className={styles.mission__heading_grey}>
          для <br />
          поддержки бизнеса в цифровой среде.
        </span>
      </h2>
      <div className={styles.mission__main}>
        <div className={styles.mission__wrapper}>
          {data.map(({ number, text }, index) => (
            <div key={index} className={styles.mission__item}>
              <p className={styles.mission__itemNum}>{number}</p>
              <div className={styles.mission__itemLine} />
              <p className={styles.mission__itemText}>{text}</p>
            </div>
          ))}
        </div>
        <p className={styles.mission__dnaText}>
          <strong>
            <i>qazdev</i>’s DNA
          </strong>
        </p>
      </div>
    </section>
  )
}

export default Mission
