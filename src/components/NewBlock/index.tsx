'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import React, { useState, RefObject } from 'react'
import classNames from 'classnames'
import arrow_button from 'public/arrow_button.svg'

import { motion } from 'framer-motion'
function isInViewport(elementRef: RefObject<HTMLElement>): boolean {
  if (!elementRef || !elementRef.current) {
    return false
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

  const [blocks, setBlocks] = useState([
    {
      title: 'Java Core',
      description:
        'База, которая необходима для старта. На интенсиве изучаем основы программирования и на практике работаем с Java Core: интеграции с другими технологиями, многопоточные программировании, разработка приложений и др.',
      showInfo: false,
    },
    {
      title: 'Java Spring',
      description:
        'В теории и на практике учимся работать с универсальным фреймворк для Java, который является популярным и используется в создании подавляющего большинства приложений',
      showInfo: false,
    },
    {
      title: 'Elasticsearch',
      description:
        'Вместе со спикерами интенсива разбираем поисково-аналитический движок Elasticsearch. Изучаем полнотекстовый поиск и лог-аналитику',
      showInfo: false,
    },
    {
      title: 'Spring Core & MVC',
      description:
        'В этом модуле обучения вместе создаем контроллеры, учимся обрабатывать запросы, работать с представлениями и обеспечивать взаимодействие с пользователем',
      showInfo: false,
    },
    {
      title: 'Spring REST API',
      description:
        'REST API используют везде, где сайт или приложение взаимодействует с сервером. Мы работаем с инструментами необходимыми для создания RESTful-сервисов. Изучаем разработку API, учимся обрабатывать НТТР-запросы, маршрутизировать запросы и возвращать данные в форматах JSON или XML',
      showInfo: false,
    },
    {
      title: 'Spring OpenAPI',
      description:
        'В этом модуле работаем с концепциями OpenАРІ и изучаем интеграцию инструментов с Spring Framework',
      showInfo: false,
    },
    {
      title: 'JUnit Tests',
      description:
        'Важный блок интенсива, в котором мы разбираем механизмы для обработки ошибок и исключений, а также создаем пользовательские обработчики ошибок и работаем с Аннотациями',
      showInfo: false,
    },
    {
      title: 'Spring Data',
      description:
        'Каждый разработчик должен уметь работать с такими направлениями как: взаимодействие с базами данных, создания запросов и управления транзакциями. Спикеры и кураторы учат этому студентов DevPractice в 7 блоке интенсива',
      showInfo: false,
    },
    {
      title: 'Spring Security',
      description:
        '8 блок интенсива мы посвящаем безопасности. В первую очередь работаем с инструментами для обеспечения защиты, а также настраиваем аутентификацию и авторизацию',
      showInfo: false,
    },
  ])

  const handleBlockClick = (index: number) => {
    const updatedBlockStates = blockStates.map((state, i) =>
      i === index ? !state : false,
    )
    setBlockStates(updatedBlockStates)
  }

  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  }

  return (
    <div className={styles.program}>
      <section className={classNames(styles.learn_program, 'container')}>
        <div className={styles.learn_program__heading}>
          <div></div>
          <h1>программа обучения</h1>
          <div></div>
        </div>

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
            <div className={styles.bottom_section__scrolling}>
              <motion.div
                variants={textAnimation}
                custom={2}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="Java Core"
                  description="База, которая необходима для старта. На интенсиве изучаем основы программирования и на практике 
              работаем с Java Core: интеграции с другими технологиями, 
              многопоточные программировании, разработка приложений и др."
                  showInfo={blockStates[0]}
                  onClick={() => handleBlockClick(0)}
                />
              </motion.div>
              <motion.div
                variants={textAnimation}
                custom={3}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="Java Spring"
                  description="В теории и на практике учимся работать с универсальным фреймворк для Java, который является популярным и используется в создании подавляющего большинства приложений"
                  showInfo={blockStates[1]}
                  onClick={() => handleBlockClick(1)}
                />
              </motion.div>
              <motion.div
                variants={textAnimation}
                custom={4}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="Elasticsearch"
                  description="Вместе со спикерами интенсива разбираем поисково-аналитический движок Elasticsearch. Изучаем полнотекстовый поиск и лог-аналитику"
                  showInfo={blockStates[2]}
                  onClick={() => handleBlockClick(2)}
                />
              </motion.div>
              <motion.div
                variants={textAnimation}
                custom={5}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="Spring Core & MVC"
                  description="В этом модуле обучения вместе создаем контроллеры, учимся обрабатывать запросы, работать с представлениями и обеспечивать взаимодействие с пользователем"
                  showInfo={blockStates[3]}
                  onClick={() => handleBlockClick(3)}
                />
              </motion.div>
              <motion.div
                variants={textAnimation}
                custom={6}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="Spring REST API"
                  description="REST API используют везде, где сайт или приложение взаимодействует с сервером. Мы работаем с инструментами необходимыми для создания RESTful-сервисов. Изучаем разработку API, учимся обрабатывать НТТР-запросы, маршрутизировать запросы и возвращать данные в форматах JSON или XML"
                  showInfo={blockStates[4]}
                  onClick={() => handleBlockClick(4)}
                />
              </motion.div>
              <motion.div
                variants={textAnimation}
                custom={7}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="Spring OpenAPI"
                  description="В этом модуле работаем с концепциями OpenАРІ и изучаем интеграцию инструментов с Spring Framework"
                  showInfo={blockStates[5]}
                  onClick={() => handleBlockClick(5)}
                />
              </motion.div>
              <motion.div
                variants={textAnimation}
                custom={8}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="JUnit Tests"
                  description="Важный блок интенсива, в котором мы разбираем механизмы для обработки ошибок и исключений, а также создаем пользовательские обработчики ошибок и работаем с Аннотациями"
                  showInfo={blockStates[6]}
                  onClick={() => handleBlockClick(6)}
                />
              </motion.div>
              <motion.div
                variants={textAnimation}
                custom={9}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="Spring Data"
                  description="Каждый разработчик должен уметь работать с такими направлениями как: взаимодействие с базами данных, создания запросов и управления транзакциями. Спикеры и кураторы учат этому студентов DevPractice в 7 блоке интенсива"
                  showInfo={blockStates[7]}
                  onClick={() => handleBlockClick(7)}
                />
              </motion.div>
              <motion.div
                variants={textAnimation}
                custom={10}
                initial="hidden"
                whileInView="visible"
              >
                <Block
                  title="Spring Security"
                  description="8 блок интенсива мы посвящаем безопасности. В первую очередь работаем с инструментами для обеспечения защиты, а также настраиваем аутентификацию и авторизацию"
                  showInfo={blockStates[8]}
                  onClick={() => handleBlockClick(8)}
                  className={styles.last_block}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
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
