'use client'

import React from 'react'
import styles from './styles.module.scss'
import { nanoid } from 'nanoid'

import { motion, useScroll } from 'framer-motion'

const Sidebar = () => {
  const links = [
    {
      title: 'Об интенсиве',
    },
    {
      title: 'Boost',
    },
    {
      title: 'Программа',
    },
    {
      title: 'Путь в команду',
    },
    {
      title: 'Заявка',
    },
  ]

  const { scrollYProgress } = useScroll()

  return (
    <div className={styles.nav_links}>
      <motion.div
        className={styles.road_link}
        style={{ scaleY: scrollYProgress }}
      ></motion.div>
      <ul className={styles.nav_links_list}>
        {links.map(({ title }) => (
          <li key={nanoid()}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
