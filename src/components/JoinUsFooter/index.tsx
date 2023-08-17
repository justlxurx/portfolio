import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
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
      path: '#',
    },
    {
      title: 'Будь с нами',
      path: '#',
    },
  ]

  const secondaryLinks = [
    {
      title: 'DevPractice',
      path: '#',
    },
    {
      title: 'СМИ',
      path: '#',
    },
  ]

  const socialLinks = [
    {
      icon: '',
      path: '#',
    },
    {
      icon: '',
      path: '#',
    },
    {
      icon: '',
      path: '#',
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.primary_block}>
            <div className={styles.info}>
              <h2 className={styles.header}>
                Начни карьеру <br /> в IT стремительно
              </h2>
              <Button
                className={styles.feedback_button}
                variant={ButtonVariant.outlined_transparent}
              >
                Связаться с нами
              </Button>
            </div>
            <nav className={styles.navigation}>
              <ul className={styles.primary_navigation}>
                {primaryLinks.map(({ path, title }) => (
                  <li key={nanoid()}>
                    <Link className={styles.link} href={path}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.secondary_navigation}>
                {secondaryLinks.map(({ path, title }) => (
                  <li key={nanoid()}>
                    <a className={styles.link} href={path}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
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
              <p className={styles.hotkeys}>press Shift+F6</p>
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
    </footer>
  )
}

export default JoinUsFooter
