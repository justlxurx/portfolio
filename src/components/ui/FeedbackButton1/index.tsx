import styles from './styles.module.scss'

const FeedbackButton1 = () => {
  return (
    <button className={styles.button}>
      <a href={'tel:+77212940165'}>
        <div className={styles.button__inner}>
          <div>
            <span className={styles.button__inner_title}>Связаться с нами</span>
            <span className={styles.button__inner_description}>
              Начать работу
            </span>
          </div>
        </div>
      </a>
    </button>
  )
}

export default FeedbackButton1