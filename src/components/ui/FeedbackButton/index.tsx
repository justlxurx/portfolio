import styles from './styles.module.scss'
import Link from 'next/link'

const FeedbackButton = () => {
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

export default FeedbackButton
