import { headers } from 'next/headers'
import Image from 'next/image'
import classNames from 'classnames'
import Planet from 'public/main_footer_planet.svg'

import ContactUs from './ContactUs'

import styles from './styles.module.scss'

const MainFooter = () => {
  const host = headers().get('host')
  const EMAIL = 'team@qazdev.kz'

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__image} />
        <div className={styles.footer__inner}>
          <div className={styles.footer__additional}>
            <h3 className={styles.footer__header}>
              Воплощаем <br /> будущее в коде
            </h3>
            <p className={styles.footer__description}>
              Пишем код, который упрощает бизнес-процессы и помогаем компаниям
              воплощать идеи эффективно и технологично
            </p>
            <a className={styles.footer__hr_email} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <ContactUs className={styles.footer__contact_us} host={host} />
        </div>
      </div>
    </footer>
  )
}

export default MainFooter
