'use client'
import styles from './styles.module.scss'
import { ReactNode, useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import BeProgrammer from '@/components/BeProgrammer'
import Details from '@/components/Details'
import DevPractice from '@/components/DevPractice'
import Table from '@/components/Table'
import Work from '@/components/Work'
import EightBlock from '../EightBlock'
import classNames from 'classnames'
export default function CustomComponent({ children }: { children: ReactNode }) {
  const [y, setY] = useState(0) // Используем состояние для значения y

  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY
      const deltaY = currentScrollY - lastScrollY

      // Увеличиваем или уменьшаем значение y в зависимости от направления скролла
      setY((prevY) => prevY - deltaY)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [isScrollingUp, setIsScrollingUp] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY
      setIsScrollingUp(currentScrollY < lastScrollY)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const ref = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)
  const isInView1 = useInView(ref1, { amount: 0, once: true })
  const isInView2 = useInView(ref2, {
    amount: 0.8,
    once: isScrollingUp ? false : true,
  })
  const isInView3 = useInView(ref3, {
    amount: 0.8,
    once: isScrollingUp ? false : true,
  })
  const isInView4 = useInView(ref4, {
    amount: 0.8,
    once: isScrollingUp ? false : true,
  })
  const isInView5 = useInView(ref5, {
    amount: 0.5,
    once: isScrollingUp ? false : true,
  })
  const isInView6 = useInView(ref6, {
    amount: 0.8,
    once: isScrollingUp ? false : true,
  })
  const isInView7 = useInView(ref7, {
    amount: 0.8,
    once: isScrollingUp ? false : true,
  })

  const links = [
    {
      title: 'Об интенсиве',
      isInViews: isInView1,
    },
    {
      title: 'Boost',
      isInViews: isInView2,
    },
    {
      title: 'Программа',
      isInViews: isInView3,
    },

    {
      title: 'Результат',
      isInViews: isInView4,
    },
    {
      title: 'Подробнее',
      isInViews: isInView5,
    },
    {
      title: 'Путь в команду ', //команду',
      isInViews: isInView6,
    },
    {
      title: 'Заявка',
      isInViews: isInView7,
    },
  ]
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const [fixed, setFixed] = useState(true)

  useEffect(() => {
    const component = document.querySelector('.stopped') // Replace with the selector for the component before which the sidebar should stop
    const scrollHandler = () => {
      if (component) {
        const componentPosition = component.getBoundingClientRect()
        const sidebarPosition = componentPosition.top <= 0
        setFixed(sidebarPosition)
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', scrollHandler)

    // Define the cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <section className={styles.scroller} id="main" ref={ref}>
      <motion.div
        className={styles.nav_links}
        animate={{ visibility: fixed ? 'hidden' : 'initial' }}
      >
        <ul className={styles.nav_links_list}>
          <span className={styles.road}></span>
          <motion.span
            className={styles.road_link}
            style={{ scaleY: scrollYProgress, originY: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          ></motion.span>
          {links.map((link) => (
            <li key={nanoid()}>
              <span className={styles.nav_row}>
                <motion.span
                  animate={{
                    backgroundColor: link.isInViews ? 'black' : '#d9d9d9',
                  }}
                  transition={{ duration: 0.1, ease: 'easeInOut' }}
                  className={styles.nav_row_circle}
                  //style={{ borderColor: '2px solid #d9d9d9' }}
                ></motion.span>
                <p> {link.title}</p>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className={styles.box}>
        <div className={styles.snap_box}>
          <div className={classNames(styles.snap_item, 'container')} ref={ref1}>
            <DevPractice />
          </div>
          <div ref={ref2}>
            <Work />
          </div>

          <div ref={ref3}>
            <EightBlock />
          </div>
          <div className={classNames(styles.snap_item, 'container')} ref={ref4}>
            <BeProgrammer />
          </div>
          <div
            className={classNames(styles.main_elements, 'container')}
            ref={ref5}
          >
            <Details />
          </div>
        </div>
        <div className={classNames(styles.snap_item, 'container')} ref={ref6}>
          <Table />
        </div>
        <div
          className={classNames(styles.snap_item, 'container', 'stopped')}
          ref={ref7}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
