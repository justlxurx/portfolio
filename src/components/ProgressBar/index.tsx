'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import hour from 'public/land.png'
import { useEffect, useState, useRef } from 'react'
import { motion, animate } from 'framer-motion'
import Snake from '@/components/Snake'

const StartAnimation = () => {
  const value = 100
  const duration = 4
  const progressTextRef = useRef(null)
  const progressColorRef1 = useRef(null)
  const progressColorRef2 = useRef(null)
  const progressColorRef3 = useRef(null)
  const progressColorRef4 = useRef(null)
  const progressColorRef5 = useRef(null)
  const progressColorRef6 = useRef(null)
  const progressColorRef7 = useRef(null)

  let value1 = 0
  const [color, setColor] = useState('')
  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [color3, setColor3] = useState('')
  const [color4, setColor4] = useState('')
  const [color5, setColor5] = useState('')
  const [color6, setColor6] = useState('')

  const [opacity, setOpacity] = useState('')
  const [opacity1, setOpacity1] = useState('')
  const [opacity2, setOpacity2] = useState('')
  const [opacity3, setOpacity3] = useState('')
  const [opacity4, setOpacity4] = useState('')
  const [opacity5, setOpacity5] = useState('')
  const [opacity6, setOpacity6] = useState('')

  const [background, setBackground] = useState('')
  const [background2, setBackground2] = useState('')
  const [background3, setBackground3] = useState('')

  useEffect(() => {
    if (progressColorRef1.current !== null) {
      animate(0, value, {
        duration: duration,
        onUpdate: (cv) => {
          const colorVal = parseInt(cv.toFixed(0), 10)
          value1 = colorVal
          if (value1 < 10) {
            setColor('blue')
            setOpacity('1')
          } else {
            setColor('')
            setOpacity('0.5')
          }
        },
      })
    }
  }, [value])

  useEffect(() => {
    if (progressColorRef2.current !== null) {
      animate(0, value, {
        duration: duration,
        onUpdate: (cv) => {
          const colorVal = parseInt(cv.toFixed(0), 10)
          value1 = colorVal
          if (value1 >= 10 && value1 < 25) {
            setColor1('blue')
            setOpacity1('1')
          } else {
            setColor1('')
            setOpacity1('0.5')
          }
        },
      })
    }
  }, [value])

  useEffect(() => {
    if (progressColorRef3.current !== null) {
      animate(0, value, {
        duration: duration,
        onUpdate: (cv) => {
          const colorVal = parseInt(cv.toFixed(0), 10)
          value1 = colorVal
          if (value1 >= 25 && value1 < 40) {
            setColor2('blue')
            setOpacity2('1')
            //  setBackground('rgba(12,12,11,0.8)')
          } else {
            setColor2('')
            setOpacity2('0.5')
          }
        },
      })
    }
  }, [value])

  useEffect(() => {
    if (progressColorRef4.current !== null) {
      animate(0, value, {
        duration: duration,
        onUpdate: (cv) => {
          const colorVal = parseInt(cv.toFixed(0), 10)
          value1 = colorVal
          if (value1 >= 40 && value1 < 55) {
            setColor3('blue')
            setOpacity3('1')
            //setBackground2('rgba(12,12,11,0.8)')
          } else {
            setColor3('')
            setOpacity3('0.5')
          }
        },
      })
    }
  }, [value])

  useEffect(() => {
    if (progressColorRef5.current !== null) {
      animate(0, value, {
        duration: duration,
        onUpdate: (cv) => {
          const colorVal = parseInt(cv.toFixed(0), 10)
          value1 = colorVal
          if (value1 >= 55 && value1 < 75) {
            setColor4('blue')
            setOpacity4('1')
            //setBackground3('rgba(12,12,11,0.8)')
          } else {
            setColor4('')
            setOpacity4('0.5')
          }
        },
      })
    }
  }, [value])

  useEffect(() => {
    if (progressColorRef6.current !== null) {
      animate(0, value, {
        duration: duration,
        onUpdate: (cv) => {
          const colorVal = parseInt(cv.toFixed(0), 10)
          value1 = colorVal
          if (value1 >= 75 && value1 < 99) {
            setColor5('blue')
            setOpacity5('1')
          } else {
            setColor5('')
            setOpacity5('0.5')
          }
        },
      })
    }
  }, [value])

  useEffect(() => {
    if (progressColorRef7.current !== null) {
      animate(0, value, {
        duration: duration,
        onUpdate: (cv) => {
          const colorVal = parseInt(cv.toFixed(0), 10)
          value1 = colorVal
          if (value1 >= 99) {
            setColor6('blue')
            setOpacity6('1')
          } else {
            setColor6('')
            setOpacity6('0.5')
          }
        },
      })
    }
  }, [value])

  const animations = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 1, ease: 'easeOut' },
    }),
  }

  return (
    <>
      <section className={styles.start}>
        <div className={styles.tele_top}>
          <div className={styles.top_gradient}>
            <div className={styles.tele_inside}>
              <div className={styles.display}>
                <motion.div
                  custom={2}
                  variants={animations}
                  className={styles.snake}
                  style={{ zIndex: '6' }}
                >
                  <Snake />
                </motion.div>
                <div
                  className={styles.all_progress}
                  style={{ zIndex: '6', background: background2 }}
                >
                  <div className={styles.progress}>
                    <p className={styles.progress_num1}></p>
                    <div className={styles.progress_bar}>
                      <motion.div
                        className={styles.progress_bar_animation}
                        animate={{
                          width: `${value}%`,
                          transition: { duration: duration },
                        }}
                      ></motion.div>
                    </div>
                    <p
                      ref={progressTextRef}
                      className={styles.progress_num100}
                    ></p>
                  </div>
                  <div className={styles.progress_stage}>
                    <ul>
                      <li>
                        <div
                          ref={progressColorRef1}
                          className={styles.circle_block}
                        >
                          <div
                            className={styles.circle}
                            style={{ background: `${color}` }}
                          ></div>
                          <div style={{ opacity: `${opacity}` }}>Launch</div>
                        </div>
                      </li>

                      <li>
                        <div
                          ref={progressColorRef2}
                          className={styles.circle_block}
                        >
                          <div
                            className={styles.circle}
                            style={{ background: `${color1}` }}
                          ></div>
                          <div style={{ opacity: `${opacity1}` }}>
                            Preparation
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          ref={progressColorRef3}
                          className={styles.circle_block}
                        >
                          <div
                            className={styles.circle}
                            style={{
                              background: `${color2}`,
                            }}
                          ></div>
                          <div style={{ opacity: `${opacity2}` }}>Loading</div>
                        </div>
                      </li>
                      <li>
                        <div
                          ref={progressColorRef4}
                          className={styles.circle_block}
                        >
                          <div
                            className={styles.circle}
                            style={{
                              background: `${color3}`,
                            }}
                          ></div>
                          <div style={{ opacity: `${opacity3}` }}>
                            {' '}
                            Rendering
                          </div>
                        </div>
                      </li>
                      <li
                        style={{
                          borderTop: '1px solid #2313DB',
                          borderTopLeftRadius: '5px',
                          borderLeft: '1px solid #2313DB',
                        }}
                      >
                        <div
                          ref={progressColorRef5}
                          className={styles.circle_block}
                        >
                          <div
                            className={styles.circle}
                            style={{
                              background: `${color4}`,
                            }}
                          ></div>
                          <div style={{ opacity: `${opacity4}` }}>
                            {' '}
                            Initialization
                          </div>
                        </div>
                      </li>
                      <li style={{ borderTop: '1px solid #2313DB' }}>
                        <div
                          ref={progressColorRef6}
                          className={styles.circle_block}
                        >
                          <div
                            className={styles.circle}
                            style={{
                              background: `${color5}`,
                            }}
                          ></div>
                          <div style={{ opacity: `${opacity5}` }}>
                            {' '}
                            Animation
                          </div>
                        </div>
                      </li>
                      <li
                        style={{
                          borderTop: '1px solid #2313DB',
                        }}
                      >
                        <div
                          ref={progressColorRef7}
                          className={styles.circle_block}
                        >
                          <div
                            className={styles.circle}
                            style={{
                              background: `${color6}`,
                            }}
                          ></div>
                          <div style={{ opacity: `${opacity6}` }}> Ready</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div style={{ zIndex: '6', background: background3 }}></div>
              </div>
            </div>
            <div className={styles.switch_block}>
              <div className={styles.switch}></div>
              <div className={styles.hourglass}>
                <Image src={hour} alt="clock" />
                <p>Macintosh Pro</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tele_bottom}>
          <div className={styles.tele_bottom_circle}></div>
          <div className={styles.tele_bottom_rect}></div>
        </div>
      </section>
    </>
  )
}
export default StartAnimation
