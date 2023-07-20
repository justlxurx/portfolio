import ArrowIcon from './ArrowIcon'
import { ISocial } from './interface'

import styles from './SocialCard.module.scss'

const SocialCard = ({ title, label, link }: ISocial) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>
        <span>qazdev</span>
        {title}
      </h3>
      <label className={styles.card__label}>{label}</label>
      <ArrowIcon className={styles.card__arrow} />
    </div>
  )
}

export default SocialCard
