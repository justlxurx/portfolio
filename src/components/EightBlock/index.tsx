'use client'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import arrow_button from 'public/arrow_button.svg'

import styles from './styles.module.scss'

const Blocks = () => {
  const BLOCK_HEIGHT = 230

  const ref = useRef<any>(null)
  const [blocks, setBlocks] = useState([
    {
      title: 'Java Core',
      description:
        'База, которая необходима для старта. На интенсиве изучаем основы программирования и на практике работаем с Java Core: интеграции с другими технологиями, многопоточные программировании, разработка приложений и др.',
      showInfo: false,
    },
    {
      title: 'Java Spring',
      description: 'Описание для Java Spring.',
      showInfo: false,
    },
    {
      title: 'Elasticsearch',
      description: 'Описание для Elasticsearch.',
      showInfo: false,
    },
    {
      title: 'Spring Core & MVC',
      description: 'Описание для Java Spring.',
      showInfo: false,
    },
    {
      title: 'Spring REST API',
      description: 'Описание для Elasticsearch.',
      showInfo: false,
    },
    {
      title: 'Spring OpenAPI',
      description: 'Описание для Java Spring.',
      showInfo: false,
    },
    {
      title: 'JUnit Tests',
      description: 'Описание для Elasticsearch.',
      showInfo: false,
    },
    {
      title: 'Spring Data',
      description: 'Описание для Java Spring.',
      showInfo: false,
    },
    {
      title: 'Spring Security',
      description: 'Описание для Elasticsearch.',
      showInfo: false,
    },
  ])
  const [isVisibleSection, setIsVisibleSection] = useState(false)
  const [scrollsBottomCount, setScrollsBottomCount] = useState(0)

  const [blockHeight, setBlockHeight] = useState(0) // Стейт для хранения blockHeight

  useEffect(() => {
    const handleScroll = (event: any) => {
      setIsVisibleSection(isInViewport(ref))
    }
    window.addEventListener('scroll', handleScroll)

    const handleWindowResize = () => {
      if (window.innerWidth <= 447) {
        setBlockHeight(120) // Задаем высоту блока для маленьких экранов
      } else if (window.innerWidth <= 576) {
        setBlockHeight(140) // Задаем высоту блока для средних экранов
      } else if (window.innerWidth <= 768) {
        setBlockHeight(160) // Задаем высоту блока для средних экранов
      } else if (window.innerWidth <= 1050) {
        setBlockHeight(150) // Задаем высоту блока для средних экранов
      } else if (window.innerWidth <= 1400) {
        setBlockHeight(204) // Задаем высоту блока для средних экранов
      } else {
        setBlockHeight(250) // Задаем высоту блока для больших экранов
      }
    }

    // Вызываем обработчик при загрузке и изменении размера окна
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    window.removeEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isVisibleSection) {
      let scrollTimeout: any = null
      const handleBodyScroll = (e: WheelEvent) => {
        if (scrollsBottomCount < blocks.length - 1 && e.deltaY > 0) {
          e.preventDefault()

          if (scrollTimeout) {
            clearTimeout(scrollTimeout)
          }

          scrollTimeout = setTimeout(() => {
            const currentScrollPosition =
              window.pageYOffset || document.documentElement.scrollTop

            const newScrollPosition = currentScrollPosition + BLOCK_HEIGHT

            window.scrollTo({
              top: newScrollPosition,
              behavior: 'smooth',
            })

            setScrollsBottomCount(scrollsBottomCount + 1)
            scrollTimeout = null
          }, 300)
        }
      }

      document.body.addEventListener('wheel', handleBodyScroll, {
        passive: false,
      })

      return () => {
        document.body.removeEventListener('wheel', handleBodyScroll)
      }
    }
  }, [isVisibleSection, scrollsBottomCount])

  const handleBlockClick = (index: number) => {
    setBlocks((prevBlocks) => {
      const updatedBlocks = [...prevBlocks]
      updatedBlocks[index].showInfo = true
      return updatedBlocks
    })
  }

  function isInViewport(elementRef: RefObject<HTMLElement>): boolean {
    if (!elementRef || !elementRef.current) {
      return false
    }

    const element = elementRef.current
    const rect = element.getBoundingClientRect()

    return (
      rect.bottom >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    )
  }

  return (
    <div>
      <section className={styles.learn_program}>
        <div className={classNames(styles.learn_program__heading, 'container')}>
          <h1>программа обучения</h1>
        </div>
        <div className="container">
          <div className={styles.learn_program__main}>
            <h2>8 блоков обучения</h2>
            <p>
              Интенсив захватывает основы языка <br /> программирования Java,
              работу <br />
              с различными инструментами <br />
              и библиотеками, а также непосредственно <br /> разработку
              веб-приложений
            </p>
            <div className={styles.bottom_section}>
              <div className={styles.bottom_section__figure}></div>
              <div
                className={styles.bottom_section__scrolling}
                ref={ref}
                style={{
                  height: (scrollsBottomCount + 1) * blockHeight,
                }}
              >
                {blocks.map((blockProps, index) => {
                  return (
                    <div key={nanoid()}>
                      <Block
                        className={
                          blocks.length - 1 === index ? styles.last_block : ''
                        }
                        top={
                          (index !== 0 &&
                            index <= scrollsBottomCount &&
                            `${index * blockHeight}px`) ||
                          ''
                        }
                        index={index}
                        onClick={() => handleBlockClick(index)}
                        {...blockProps}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

type BlockProps = {
  title: string
  description: string
  showInfo?: boolean
  onClick: () => void
  className?: string
  top: any
  index: number
}

const Block = ({
  title,
  description,
  showInfo,
  onClick,
  className,
  top,
  index,
}: BlockProps) => {
  return (
    <div
      className={classNames(styles.scroll_blocks, { show: showInfo })}
      style={{ top: `${top}` }}
      id={`block-${index}`}
    >
      <h3>{title}</h3>
      {showInfo ? (
        <div>
          <p>{description}</p>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              onClick()
            }}
          >
            Подробнее
            <Image src={arrow_button} alt="arrow" />
          </button>
        </div>
      )}
      <div className={styles.bottom_color}></div>
    </div>
  )
}

const Distance = () => {
  return (
    <section className={styles.distance}>
      <div></div>
      <div className={styles.distance_line}></div>
      <div></div>
    </section>
  )
}

const EightBlock = () => {
  return (
    <>
      <Distance />
      <Blocks />
    </>
  )
}

export default EightBlock
