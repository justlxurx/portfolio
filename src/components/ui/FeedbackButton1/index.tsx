import Link from 'next/link'
import styles from './styles.module.scss'

const FeedbackButton1 = () => {
  return (
    <button className={styles.button}>
      <Link href="/" as="/#toForm">
        <div className={styles.button__inner}>
          <div>
            <span className={styles.button__inner_title}>Связаться с нами</span>
            <span className={styles.button__inner_description}>
              Начать работу
            </span>
          </div>
        </div>
      </Link>
    </button>
  )
}

export default FeedbackButton1
