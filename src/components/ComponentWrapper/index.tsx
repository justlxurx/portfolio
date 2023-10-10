'use client'
import { ReactNode, useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// export const ComponentWrapper = ({ children }: { children: ReactNode }) => {
//   const scrollRef = useRef(null)
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ root: scrollRef }}
//       transition={{ delay: 0.5, ease: 'easeOut', duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   )
// }

export const ComponentWrapper = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef(null)

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
  const textAnimation = {
    hidden: {
      y: isScrollingUp ? -100 : 0,
      opacity: isScrollingUp ? 0 : 1,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  }

  return (
    <motion.div
      variants={textAnimation}
      custom={4}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}
