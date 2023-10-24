// import { gsap } from 'gsap'
// import { useEffect, useRef } from 'react'
// import { useWindowSize } from 'react-use'

// export function Parallax({
//   className,
//   children,
//   speed = 1,
//   id = 'parallax',
//   position,
// }) {
////////

/////////
'use client'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use'

interface ParallaxProps {
  className?: string
  children: React.ReactNode
  speed?: number
  id?: string
  position?: 'top' | 'bottom'
}
function clamp(min: number, input: number, max: number): number {
  return Math.max(min, Math.min(input, max))
}

function mapRange(
  in_min: number,
  in_max: number,
  input: number,
  out_min: number,
  out_max: number,
): number {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function lerp(x: number, y: number, t: number): number {
  return (1 - t) * x + t * y
}

function truncate(value: number, decimals: number): number {
  return parseFloat(value.toFixed(decimals))
}

const Maths = { lerp, clamp, mapRange, truncate }
export function Parallax1({
  className,
  children,
  speed = 1,
  id = 'parallax',
  position = 'top',
}: ParallaxProps): JSX.Element {
  const trigger = useRef<HTMLDivElement>(null)
  const target = useRef<HTMLDivElement>(null)

  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const y = windowWidth * speed * 0.1

    const setY = gsap.quickSetter(target.current, 'y', 'px')
    const set3D = gsap.quickSetter(target.current, 'force3D')

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (e) => {
          if (position === 'top') {
            setY(e.progress * y)
          } else {
            setY(-mapRange(0, 1, e.progress, -y, y))
          }

          set3D(e.progress > 0 && e.progress < 1)
        },
      },
    })

    return () => {
      timeline.kill()
    }
  }, [id, speed, position, windowWidth])

  return (
    <div ref={trigger}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  )
}

//   const trigger = useRef()
//   const target = useRef()

//   const { width: windowWidth } = useWindowSize()

//   useEffect(() => {
//     const y = windowWidth * speed * 0.1

//     const setY = gsap.quickSetter(target.current, 'y', 'px')
//     const set3D = gsap.quickSetter(target.current, 'force3D')

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         id: id,
//         trigger: trigger.current,
//         scrub: true,
//         start: 'top bottom',
//         end: 'bottom top',
//         onUpdate: (e) => {
//           if (position === 'top') {
//             setY(e.progress * y)
//           } else {
//             setY(-mapRange(0, 1, e.progress, -y, y))
//           }

//           set3D(e.progress > 0 && e.progress < 1)
//         },
//       },
//     })

//     return () => {
//       timeline.kill()
//     }
//   }, [id, speed, position, windowWidth])

//   return (
//     <div ref={trigger}>
//       <div ref={target} className={className}>
//         {children}
//       </div>
//     </div>
//   )
// }
