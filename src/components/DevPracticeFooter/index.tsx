'use client'
import Image from 'next/image'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import arrow from 'public/arrow.svg'
import logo from 'public/logo.svg'
import { AnimationWrapper } from '../AnimationWrapper'
import { FormattedString } from '@/helpers/FormattedString'
import Button from '../ui/Button'
import { ButtonVariant } from '../ui/Button/interface'

import styles from './styles.module.scss'

const DevPracticeFooter = () => {
  const primaryLinks = [
    {
      title: 'Главная',
      path: '/',
    },
    {
      title: 'Наши работы',
      path: '/portfolio',
    },
    {
      title: 'Будь с нами',
      path: '/join-us',
    },
  ]

  const secondaryLinks = [
    {
      title: 'DevPractice',
      path: '/education',
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
      path: 'https://instagram.com/devpractice.kz?igshid=MzRlODBiNWFlZA==',
    },
  ]
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.primary_block}>
            <div className={styles.info}>
              <AnimationWrapper custom={3}>
                <div>
                  <h2 className={styles.header}>
                    Начни карьеру <br /> в IT стремительно
                  </h2>
                </div>
              </AnimationWrapper>
              <AnimationWrapper custom={4}>
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
              </AnimationWrapper>
            </div>
            <nav className={styles.navigation}>
              <AnimationWrapper custom={5}>
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
              </AnimationWrapper>
              <div>
                <AnimationWrapper custom={6}>
                  <div>
                    <ul className={styles.secondary_navigation}>
                      {secondaryLinks.map(({ path, title }) => (
                        <li key={nanoid()}>
                          <a className={styles.link} href={path}>
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper custom={6}>
                  <div>
                    <ul className={styles.social_navigation}>
                      {socialLinks.map(({ path, icon }) => (
                        <li key={nanoid()}>
                          <a
                            className={styles.link}
                            href={path}
                            target="_blank"
                          >
                            <Image
                              src={icon}
                              alt="icon"
                              width="40"
                              height="40"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimationWrapper>
              </div>
            </nav>
          </div>
          <AnimationWrapper custom={6}>
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
          </AnimationWrapper>
        </div>
      </div>
    </footer>
  )
}

export default DevPracticeFooter
