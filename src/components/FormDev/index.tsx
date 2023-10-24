import { headers } from 'next/headers'

import FormDevPractice from './FormDevPracrice'
import classNames from 'classnames'
import styles from './styles.module.scss'

import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['devanagari'], weight: ['700'] })

const MainForm = () => {
  const host = headers().get('host')
  const EMAIL = 'team@qazdev.kz'
  return (
    <section className={styles.container} id="form">
      <h2 className={classNames(styles.header, poppins.className)}>
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
