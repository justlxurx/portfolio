'use client'
import styles from './styles.module.scss'
import { ReactNode, useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Career from '@/components/Career'
import Gallery from '@/components/Gallery'
import StrongCode from '@/components/StrongCode'
import classNames from 'classnames'

export default function CustomComponent({
  children,
  component,
}: {
  children: ReactNode
  component: ReactNode
}) {
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
  const isInView1 = useInView(ref1, { amount: 0, once: true })
  const isInView2 = useInView(ref2, {
    amount: 0.7,
    once: isScrollingUp ? false : true,
  })
  const isInView3 = useInView(ref3, {
    amount: 0.8,
    once: isScrollingUp ? false : true,
  })
  const isInView4 = useInView(ref4, {
    amount: 0.7,
    once: isScrollingUp ? false : true,
  })
  const isInView5 = useInView(ref5, {
    amount: 0.2,
    once: isScrollingUp ? false : true,
  })

  const links = [
    {
      title: 'Ценности',
      isInViews: isInView1,
    },
    {
      title: 'Команда',
      isInViews: isInView2,
    },
    {
      title: 'Сильный код',
      isInViews: isInView3,
    },

    {
      title: 'Развитие',
      isInViews: isInView4,
    },
    {
      title: 'Старт!',
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
          componentPosition.bottom - componentPosition.height / 1.2 <= 0
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

  const element = document.getElementsByClassName('stopped')

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
      {/* <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        className={styles.svg}
      >
        <motion.rect
          width="5"
          height="200"
          x="98"
          y="100"
          // fill="black"
          //rx="20"
          stroke="#0099ff"
          // variants={draw}

          className="progress"
          pathLength="1"
          style={{ pathLength: scrollYProgress }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="8"
          fill="white"
          stroke="#ff0055"
          variants={draw}
          // custom={1}
        />
        <motion.circle
          cx="100"
          cy="150"
          r="8"
          fill="white"
          stroke="#ff0055"
          variants={draw}
          // custom={1}
        />
        <motion.circle
          cx="100"
          cy="200"
          r="8"
          stroke="#ff0055"
          variants={draw}
          fill="white"
          // custom={1}
        />
        <motion.circle
          cx="100"
          cy="250"
          r="8"
          fill="white"
          stroke="#ff0055"
          variants={draw}
          // custom={1}
        />
        <motion.circle
          cx="100"
          cy="300"
          fill="white"
          r="8"
          stroke="#ff0055"
          variants={draw}
          //custom={3}
        />
      </motion.svg> */}
      <div className={styles.box}>
        <div className={styles.snap_box}>
          <div className={classNames(styles.snap_item, 'container')} ref={ref1}>
            <Career />
          </div>
          <div
            ref={ref2}
            className={classNames(styles.main_elements, 'container')}
          >
            <Gallery />
          </div>

          <div ref={ref3} className={classNames(styles.snap_item, 'container')}>
            <StrongCode />
          </div>
          <div className={classNames(styles.main_elements)} ref={ref4}>
            {/* <Cases /> */}
            {component}
          </div>
        </div>
        <div
          className={classNames(styles.main_elements, 'container', 'stopped')}
          ref={ref5}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
