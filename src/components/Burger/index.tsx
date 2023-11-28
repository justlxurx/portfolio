import { nanoid } from 'nanoid'
//import HamburgerButton from '../ui/HamburgerButton'
import NavButton from '../ui/NavButton/index'
import { INavButton } from '../ui/NavButton/interface'

import styles from './styles.module.scss'

interface BurgerProps {
  closeBurgerMenu: () => void
}

const Burger = ({ closeBurgerMenu }: BurgerProps) => {
  const buttons: INavButton[] = [
    // {
    //   title: 'Devcorn',
    //   description: 'IT мероприятие',
    //   path: 'https://devcorn.kz/',
    //   redirect: true,
    // },
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
    <section className={styles.burger}>
      <div className={styles.burger__buttons_wrapper}>
        <button
          className={styles.close_button}
          onClick={closeBurgerMenu}
        ></button>

        <ul>
          {buttons.map((button: INavButton) => (
            <li key={nanoid()}>
              <NavButton {...button} />
            </li>
          ))}
        </ul>
        {/* <div className={styles.feedback_button}>
          <FeedbackButton />
        </div> */}
        <button className={styles.button_to_call}>
          <a href={'tel:+77212940165'}>связаться с нами</a>
        </button>
      </div>
    </section>
  )
}

export default Burger
