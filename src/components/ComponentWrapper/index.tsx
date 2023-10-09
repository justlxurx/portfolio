'use client'
import { ReactNode, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация сработает только один раз, когда элемент станет видимым
    threshold: 0.1, // Порог видимости, можно настроить по своему усмотрению
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      viewport={{ root: scrollRef }}
      transition={{ delay: 0.5, ease: 'easeOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
