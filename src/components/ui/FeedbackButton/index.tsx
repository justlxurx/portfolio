import styles from './styles.module.scss'

const FeedbackButton = () => {
  return (
    <button className={styles.button}>
      <div className={styles.button__inner}>
        <div>
          <span className={styles.button__inner_title}>Связаться с нами</span>
          <span className={styles.button__inner_description}>
            Начать работу
          </span>
        </div>
      </div>
    </button>
  )
}

export default FeedbackButton
