'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import React, { useState } from 'react'
import classNames from 'classnames'
import arrow_button from 'public/arrow_button.svg'
import { BlockWrapper } from '../BlockWrapper'

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

  const handleBlockClick = (index: number) => {
    const updatedBlockStates = blockStates.map((state, i) =>
      i === index ? !state : false,
    )
    setBlockStates(updatedBlockStates)
  }
  /////////////////////

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
              <BlockWrapper custom={2}>
                <div>
                  <Block
                    title="Java Core"
                    description="База, которая необходима для старта. На интенсиве изучаем основы программирования и на практике 
              работаем с Java Core: интеграции с другими технологиями, 
              многопоточные программировании, разработка приложений и др."
                    showInfo={blockStates[0]}
                    onClick={() => handleBlockClick(0)}
                  />
                </div>
              </BlockWrapper>
              <BlockWrapper custom={3}>
                <div>
                  <Block
                    title="Java Spring"
                    description="В теории и на практике учимся работать с универсальным фреймворк для Java, который является популярным и используется в создании подавляющего большинства приложений"
                    showInfo={blockStates[1]}
                    onClick={() => handleBlockClick(1)}
                  />
                </div>
              </BlockWrapper>
              <BlockWrapper custom={4}>
                <div>
                  <Block
                    title="Elasticsearch"
                    description="Вместе со спикерами интенсива разбираем поисково-аналитический движок Elasticsearch. Изучаем полнотекстовый поиск и лог-аналитику"
                    showInfo={blockStates[2]}
                    onClick={() => handleBlockClick(2)}
                  />
                </div>
              </BlockWrapper>
              <BlockWrapper custom={5}>
                <div>
                  <Block
                    title="Spring Core & MVC"
                    description="В этом модуле обучения вместе создаем контроллеры, учимся обрабатывать запросы, работать с представлениями и обеспечивать взаимодействие с пользователем"
                    showInfo={blockStates[3]}
                    onClick={() => handleBlockClick(3)}
                  />
                </div>
              </BlockWrapper>
              <BlockWrapper custom={6}>
                <div>
                  <Block
                    title="Spring REST API"
                    description="REST API используют везде, где сайт или приложение взаимодействует с сервером. Мы работаем с инструментами необходимыми для создания RESTful-сервисов. Изучаем разработку API, учимся обрабатывать НТТР-запросы, маршрутизировать запросы и возвращать данные в форматах JSON или XML"
                    showInfo={blockStates[4]}
                    onClick={() => handleBlockClick(4)}
                  />
                </div>
              </BlockWrapper>
              <BlockWrapper custom={7}>
                <div>
                  <Block
                    title="Spring OpenAPI"
                    description="В этом модуле работаем с концепциями OpenАРІ и изучаем интеграцию инструментов с Spring Framework"
                    showInfo={blockStates[5]}
                    onClick={() => handleBlockClick(5)}
                  />
                </div>
              </BlockWrapper>
              <BlockWrapper custom={8}>
                <div>
                  <Block
                    title="JUnit Tests"
                    description="Важный блок интенсива, в котором мы разбираем механизмы для обработки ошибок и исключений, а также создаем пользовательские обработчики ошибок и работаем с Аннотациями"
                    showInfo={blockStates[6]}
                    onClick={() => handleBlockClick(6)}
                  />
                </div>
              </BlockWrapper>
              <BlockWrapper custom={9}>
                <div>
                  <Block
                    title="Spring Data"
                    description="Каждый разработчик должен уметь работать с такими направлениями как: взаимодействие с базами данных, создания запросов и управления транзакциями. Спикеры и кураторы учат этому студентов DevPractice в 7 блоке интенсива"
                    showInfo={blockStates[7]}
                    onClick={() => handleBlockClick(7)}
                  />
                </div>
              </BlockWrapper>
              <BlockWrapper custom={10}>
                <div>
                  <Block
                    title="Spring Security"
                    description="8 блок интенсива мы посвящаем безопасности. В первую очередь работаем с инструментами для обеспечения защиты, а также настраиваем аутентификацию и авторизацию"
                    showInfo={blockStates[8]}
                    onClick={() => handleBlockClick(8)}
                    className={styles.last_block}
                  />
                </div>
              </BlockWrapper>
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
