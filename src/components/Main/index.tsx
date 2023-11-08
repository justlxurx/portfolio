'use client'
import styles from './styles.module.scss'
import { ReactNode, useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { motion, useInView, useScroll, useAnimation } from 'framer-motion'
import About from '@/components/About'
import Distance from '@/components/Distance'
import FAQ from '@/components/FAQ'
import Projects from '@/components/Projects'
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

  // const [isScrollingUp, setIsScrollingUp] = useState(true)

  // useEffect(() => {
  //   let lastScrollY = window.scrollY

  //   function handleScroll() {
  //     const currentScrollY = window.scrollY
  //     setIsScrollingUp(currentScrollY < lastScrollY)
  //     lastScrollY = currentScrollY
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  const control = useAnimation()
  const [isScrollingUp, setIsScrollingUp] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let isScrollingUpLocal = true

    function handleScroll() {
      const currentScrollY = window.scrollY
      isScrollingUpLocal = currentScrollY < lastScrollY
      setIsScrollingUp(isScrollingUpLocal)

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
  const isInView1 = useInView(ref1, { amount: 0, once: true })
  const isInView2 = useInView(ref2, {
    amount: 0.7,
    once: isScrollingUp ? false : true,
  })
  const isInView3 = useInView(ref3, {
    amount: 0.5,
    once: isScrollingUp ? false : true,
  })
  const isInView4 = useInView(ref4, {
    amount: 0.5,
    once: isScrollingUp ? false : true,
  })
  const isInView5 = useInView(ref5, {
    amount: 0.5,
    once: isScrollingUp ? false : true,
  })

  const links = [
    {
      title: 'О нас',
      isInViews: isInView1,
    },
    {
      title: 'Кейсы',
      isInViews: isInView2,
    },
    {
      title: 'СМИ',
      isInViews: isInView3,
    },

    {
      title: 'DevPractice',
      isInViews: isInView4,
    },
    {
      title: 'FAQ',
      isInViews: isInView5,
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
        const sidebarPosition =
          componentPosition.bottom - componentPosition.height / 1.05 <= 0
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
        <span className={styles.road}></span>
        <motion.span
          className={styles.road_link}
          style={{ scaleY: scrollYProgress, originY: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        ></motion.span>

        <ul className={styles.nav_links_list}>
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

      <div className={classNames(styles.box, styles.main)}>
        <motion.div
          className={classNames(styles.snap_item)}
          ref={ref1}
          animate={control}
        >
          <About />
        </motion.div>
        <motion.div
          ref={ref2}
          className={classNames(styles.snap_item)}
          animate={control}
        >
          <Projects />
        </motion.div>
        <motion.div
          ref={ref3}
          className={classNames(styles.main_elements)}
          animate={control}
        >
          {children}
        </motion.div>
        <motion.div
          className={classNames(styles.main_elements)}
          ref={ref4}
          animate={control}
        >
          <Distance />
        </motion.div>
        <motion.div
          className={classNames(styles.main_elements, 'stopped')}
          ref={ref5}
          animate={control}
        >
          <FAQ />
        </motion.div>
      </div>
    </section>
  )
}
