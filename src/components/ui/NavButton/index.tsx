// FIXME: remove useClient, div, comment
'use client'
import Link from 'next/link'

import { INavButton } from './interface'

import styles from './styles.module.scss'

const NavButton = ({ title, description, path }: INavButton) => {
  const onClickNavButtonHandler = (e: any) => {
    e.preventDefault()
    alert('Раздел в разработке')
  }
  return (
    // <Link
    //   className={styles.button}
    //   href={path}
    // >
    //   <div className={styles.button__inner}>
    //     <span className={styles.button__title}>{title}</span>
    //     <span className={styles.button__description}>{description}</span>
    //   </div>
    // </Link>
    <div onClick={(e) => onClickNavButtonHandler(e)} className={styles.button}>
      <div className={styles.button__inner}>
        <span className={styles.button__title}>{title}</span>
        <span className={styles.button__description}>{description}</span>
      </div>
    </div>
  )
}

export default NavButton
