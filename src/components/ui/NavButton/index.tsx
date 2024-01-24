// FIXME: remove useClient, div, comment
'use client'
import Link from 'next/link'

import { INavButton } from './interface'

import styles from './styles.module.scss'

const NavButton = ({ title, description, path, redirect }: INavButton) => {
  if (redirect) {
    return (
      <a className={styles.button} href={path} target="_blank">
        <div className={styles.button__inner}>
          <span className={styles.button__title}>{title}</span>
          <span className={styles.button__description}>{description}</span>
        </div>
      </a>
    )
  }

  return (
    <Link className={styles.button} href={path} target="_blank">
      <div className={styles.button__inner}>
        <span className={styles.button__title}>{title}</span>
        <span className={styles.button__description}>{description}</span>
      </div>
    </Link>
  )
}

export default NavButton
