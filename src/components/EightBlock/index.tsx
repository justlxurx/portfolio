'use client'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import arrow_button from 'public/arrow_button.svg'

import styles from './styles.module.scss'

function isInViewport(elementRef: RefObject<HTMLElement>): boolean {
  if (!elementRef || !elementRef.current) {
    return true
  }

  const element = elementRef.current
  const rect = element.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

type BlockProps = {
  title: string
  description: string
  showInfo: boolean
  onClick: () => void
  className?: string
}

const Block = ({
  title,
  description,
  showInfo,
  onClick,
  className,
}: BlockProps) => {
  return (
    <div className={classNames(styles.scroll_blocks, { show: showInfo })}>
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

const Blocks = () => {
  const [blockStates, setBlockStates] = useState<Array<boolean>>(
    Array(9).fill(false),
  )
  const [isInBlock, setIsInBlock] = useState(false)
  const blockRef = useRef<HTMLDivElement | null>(null)

  const handleBlockClick = (index: number) => {
    const updatedBlockStates = blockStates.map((state, i) =>
      i === index ? !state : false,
    )
    setBlockStates(updatedBlockStates)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (blockRef.current) {
        const sectionRect = blockRef.current.getBoundingClientRect()
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight

        // Проверяем, находится ли страница внутри секции
        setIsInBlock(sectionRect.top >= 0 && sectionRect.bottom <= windowHeight)
      }
    }

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll)

    // Убираем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Останавливаем скроллинг страницы, когда isInBlock равно true
  useEffect(() => {
    if (isInBlock) {
      document.body.style.overflow = 'hidden'
    } else {
      //document.body.style.overflow = 'auto'
    }
  }, [isInBlock])

  const handleLastDivMouseEnter = () => {
    // Восстанавливаем скроллинг страницы
    document.body.style.overflow = 'auto'
  }

  return (
    <div>
      <section className={styles.learn_program} ref={blockRef}>
        <div className={styles.learn_program_heading}>
          <div></div>
          <h1>программа обучения</h1>
          <div></div>
        </div>

        <div className={styles.learn_program_main}>
          <h2>8 блоков обучения</h2>
          <p>
            Интенсив захватывает основы языка <br /> программирования Java,
            работу <br />
            с различными инструментами <br />
            и библиотеками, а также непосредственно <br /> разработку
            веб-приложений
          </p>
          <div className={styles.learn_program_main_div}>
            <div className={styles.learn_program_main_div_img}></div>
            <div className={styles.scroll_container}>
              <Block
                title="Java Core"
                description="База, которая необходима для старта. На интенсиве изучаем основы программирования и на практике 
              работаем с Java Core: интеграции с другими технологиями, 
              многопоточные программировании, разработка приложений и др."
                showInfo={blockStates[0]}
                onClick={() => handleBlockClick(0)}
              />

              <Block
                title="Java Spring"
                description="Описание для Java Spring."
                showInfo={blockStates[1]}
                onClick={() => handleBlockClick(1)}
                className={styles.block1}
              />

              <Block
                title="Elasticsearch"
                description="Описание для Elasticsearch."
                showInfo={blockStates[2]}
                onClick={() => handleBlockClick(2)}
                className={styles.block2}
              />

              <Block
                title="Spring Core & MVC"
                description="Описание для Java Spring."
                showInfo={blockStates[3]}
                onClick={() => handleBlockClick(3)}
                className={styles.block3}
              />

              <Block
                title="Spring REST API"
                description="Описание для Elasticsearch."
                showInfo={blockStates[4]}
                onClick={() => handleBlockClick(4)}
                className={styles.block4}
              />

              <Block
                title="Spring OpenAPI"
                description="Описание для Java Spring."
                showInfo={blockStates[5]}
                onClick={() => handleBlockClick(5)}
                className={styles.block5}
              />

              <Block
                title="JUnit Tests"
                description="Описание для Elasticsearch."
                showInfo={blockStates[6]}
                onClick={() => handleBlockClick(6)}
                className={styles.block6}
              />
              <Block
                title="Spring Data"
                description="Описание для Java Spring."
                showInfo={blockStates[7]}
                onClick={() => handleBlockClick(7)}
                className={styles.block7}
              />
              <div onWheel={handleLastDivMouseEnter}>
                <Block
                  title="Spring Security"
                  description="Описание для Elasticsearch."
                  showInfo={blockStates[8]}
                  onClick={() => handleBlockClick(8)}
                  className={styles.last_div}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blocks
