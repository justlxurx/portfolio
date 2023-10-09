import { headers } from 'next/headers'

import FormDevPractice from './FormDevPracrice'

import styles from './styles.module.scss'

const MainForm = () => {
  const host = headers().get('host')
  const EMAIL = 'team@qazdev.kz'
  return (
    <section className={styles.container} id="form">
      <h2 className={styles.header}>
        Dev <br />
        Practice
      </h2>
      <h3 className={styles.subheader}>
        Превратите свою страсть к IT <br /> в карьеру - присоединяйтесь к нам!
      </h3>
      <FormDevPractice host={host} />
    </section>
  )
}

export default MainForm
