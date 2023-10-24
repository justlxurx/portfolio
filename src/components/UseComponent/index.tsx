'use client'
import styles from './styles.module.scss'

import { ReactNode } from 'react'

import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

// const Sidebar = () => {
//   const links = [
//     {
//       title: 'Об интенсиве',
//     },
//     {
//       title: 'Boost',
//     },
//     {
//       title: 'Программа',
//     },
//     {
//       title: 'Путь в команду',
//     },
//     {
//       title: 'Заявка',
//     },
//   ]

//   const { scrollYProgress } = useScroll()

//   return (
//     <div className={styles.nav_links}>
//       <motion.div
//         className={styles.road_link}
//         style={{ scaleY: scrollYProgress }}
//       ></motion.div>
//       <ul className={styles.nav_links_list}>
//         {links.map(({ title }) => (
//           <li key={nanoid()}>{title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default function CustomComponent({ children }: { children: ReactNode }) {
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
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  return (
    <section className={styles.nav_links}>
      <div>
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
      <div className={styles.snap_box} ref={ref}>
        {children}{' '}
      </div>
    </section>
  )
}
