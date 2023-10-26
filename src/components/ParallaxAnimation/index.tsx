'use client'
import { ReactNode, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import useDimension from '@/useDimension'

const Parallax = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef(null)
  const { height } = useDimension()

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <motion.div style={{ y }}>
      <div>{children}</div>
    </motion.div>
  )
}

// const PalallaxElement=({children,y}:{children:ReactNode,y:any})=>{
//  return(
//     <motion.div style={{y}}>
//         {children}
//     </motion.div>
//  )
// }

export default Parallax
