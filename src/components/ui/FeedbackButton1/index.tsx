import styles from './styles.module.scss'

const FeedbackButton1 = () => {
  return (
    <button className={styles.button}>
      <a href="https://t.me/Adil_Akbayev" target="_blank">
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
