'use client'

import { ReactNode } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll()
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
