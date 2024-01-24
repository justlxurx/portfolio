import Image from 'next/image'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import arrow from 'public/arrow.svg'
import logo from 'public/logo.svg'
import { FormattedString } from '@/helpers/FormattedString'
import Button from '../ui/Button'
import { ButtonVariant } from '../ui/Button/interface'

import styles from './styles.module.scss'

const JoinUsFooter = () => {
  //FIXME: Paths

  const primaryLinks = [
    {
      title: 'Главная',
      path: '/',
    },
    {
      title: 'Наши работы',
      path: '/portfolio',
    },
    // {
    //   title: 'Будь с нами',
    //   path: '/join-us',
    // },
  ]

  const secondaryLinks = [
    {
      title: 'DevPractice',
      path: 'https://devpractice.kz/',
    },
    // {
    //   title: 'СМИ',
    //   path: '#',
    // },
  ]

  const socialLinks = [
    // {
    //   icon: 'twitter.svg',
    //   path: '#',
    // },
    {
      icon: 'insta.svg',
      path: 'https://instagram.com/qazdev.team?igshid=MzRlODBiNWFlZA==',
    },
    {
      icon: 'linkedin1.svg',
      path: 'https://www.linkedin.com/in/qazdev-team-067a82205/ ',
    },
  ]
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.primary_block}>
            <div className={styles.info}>
              <div>
                <h2 className={styles.header}>
                  Начни карьеру <br /> в IT стремительно
                </h2>
              </div>
              <div>
                <Button
                  className={styles.feedback_button}
                  variant={ButtonVariant.outlined_transparent}
                >
                  <a href={'tel:+77212940165'}>
                    Связаться с нами
                    <Image src={arrow} alt="arrow" />
                  </a>
                </Button>
              </div>
            </div>
            <nav className={styles.navigation}>
              <div>
                <ul className={styles.primary_navigation}>
                  {primaryLinks.map(({ path, title }) => (
                    <li key={nanoid()}>
                      <Link className={styles.link} href={path}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div>
                  <ul className={styles.secondary_navigation}>
                    {secondaryLinks.map(({ path, title }) => (
                      <li key={nanoid()}>
                        <a className={styles.link} href={path} target="_blank">
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className={styles.social_navigation}>
                    {socialLinks.map(({ path, icon }) => (
                      <li key={nanoid()}>
                        <a className={styles.link} href={path} target="_blank">
                          <Image src={icon} alt="icon" width="40" height="40" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div>
            <footer className={styles.secondary_block}>
              <div>
                <p className={styles.address}>
                  г.Караганда, ​Проспект Шахтёров, 5/1​
                </p>
                <p className={styles.copyright}>
                  <FormattedString
                    sentence={
                      'Copyright © 2023 qazdev. Политика конфиденциальности.'
                    }
                  />
                </p>
              </div>
              <div>
                <p className={styles.hotkeys}>press Shift+G</p>
                <Image
                  className={styles.logo}
                  src={logo}
                  alt={'qazdev logo'}
                  width={128}
                  height={30}
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default JoinUsFooter
