import { nanoid } from 'nanoid'

import FeedbackButton from '../ui/FeedbackButton'
import HamburgerButton from '../ui/HamburgerButton'
import NavButton from '../ui/NavButton/index'
import { INavButton } from '../ui/NavButton/interface'

import styles from './styles.module.scss'

const Navbar = () => {
  const buttons: INavButton[] = [
    {
      title: 'Devcorn',
      description: 'IT мероприятие',
      path: 'https://devcorn.kz/',
      redirect: true,
    },
    {
      title: 'Devpractice',
      description: 'Учись у нас',
      path: '/education',
    },
    {
      title: 'Карьера',
      description: 'Будь с нами',
      path: '/join-us',
    },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.header__text}>
        <a href="/">
          <div className={styles.qazdev_logo}></div>
        </a>
        <div className={styles.info}>
          <span className={styles.info__label}>Цифровые решения</span>
          <span className={styles.info__tag}>#пишемкод</span>
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__buttons_wrapper}>
          {buttons.map((button: INavButton) => (
            <li key={nanoid()}>
              <NavButton {...button} />
            </li>
          ))}
        </ul>
        <div className={styles.feedback_button}>
          <FeedbackButton />
        </div>
        <div className={styles.hamburger_button}>
          <HamburgerButton />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
