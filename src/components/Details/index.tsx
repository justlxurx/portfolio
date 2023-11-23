'use client'
import React, { useRef, useState } from 'react'
import { nanoid } from 'nanoid'
//import Slider1 from './Slider1'

import styles from './styles.module.scss'
const ROADMAP_STEP = 360

const Details = () => {
  const [setctionPosition, setSectionPosition] = useState(0)

  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false)

  const lastSectionRef = useRef<HTMLDivElement | null>(null)

  const handleLeftButtonClick = () => {
    if (setctionPosition === 0) {
      return
    }

    setSectionPosition(setctionPosition + ROADMAP_STEP)
  }

  const handleRightButtonClick = () => {
    if (!isRightButtonDisabled) {
      setIsRightButtonDisabled(true)

      setTimeout(() => {
        setIsRightButtonDisabled(false)
      }, 1000)
    }

    const checkVisibility = () => {
      let isVisible = false
      if (lastSectionRef.current) {
        const refRect = lastSectionRef.current.getBoundingClientRect()
        const windowWidth = window.innerWidth

        isVisible = refRect.right + 40 < windowWidth
      }

      return isVisible
    }

    const isVisible = checkVisibility()

    if (isVisible) {
      return
    }

    setSectionPosition(setctionPosition - ROADMAP_STEP)
  }

  const details = [
    {
      title: 'Java Core',
      content: (
        <>
          {'<'}Code conventions <br /> <br />
          {'<'}Типы данных, переменные и управляющие конструкции
          <br /> <br />
          {'<'}Массивы и коллекции & ООП: инкапсуляция, наследование,
          полиморфизм и абстракция
          <br /> <br />
          {'<'}Исключения
          <br /> <br />
          {'<'}Потоки. Использование ключевого слова synchronized и методы wait
          <br /> <br />
          {'<'}notify, notifyAll
          <br />
          <br />
          {'<'}Ввод/вывод (I/0)
          <br />
          <br />
          {'<'}Generics
        </>
      ),
    },
    {
      title: 'Elasticsearch',
      marginChange: '36px',
      content: (
        <>
          {'<'}Работа с индексами и документами
          <br /> <br />
          {'<'}Поиск данных: ключевые слова, фразы, диапазоны значений
          <br /> <br />
          {'<'}Фильтры и агрегации - уточнение поискового запроса
          <br /> <br />
          {'<'}Многоязычный поиск
          <br /> <br />
          {'<'}Поиск с поддержкой релевантности
        </>
      ),
    },
    {
      title: 'Spring Core & MVC',
      content: (
        <>
          {'<'}Inversion of Control <br />
          <br />
          {'<'}Dependecy Injection <br />
          <br />
          {'<'}IoC & DI B Java. Управления зависимостей <br />
          <br />
          {'<'}АОР интеграция с Spring
          <br />
          <br />
          {'<'}Бины и их жизненный цикл
          <br />
          <br />
          {'<'}Обработки ошибок и исключений <br /> <br />
          {'<'}Spring MVC <br />
          <br />
          {'<'}Конфигурации Spring MVC приложений <br /> <br />
          {'<'}Создание контроллеров <br /> <br />
          {'<'}Аннотации @Controller
          <br />
          <br />
          {'<'}@RequestMapping, @GetMapping, @PostMapping <br /> <br />
          {'<'}Работа с представлениями <br /> <br />
          {'<'}Обработка форм <br />
          <br />
          {'<'}Работа с файлами и загрузка файлов
        </>
      ),
    },
    {
      title: 'Spring REST API',
      marginChange: '36px',
      content: (
        <>
          {'<'}НТТР протокол: GET, POST, PUT, DELETE
          <br />
          <br />
          {'<'}Фреймворки для создания RESTEul сервисов: Spring Boot, JAX-RS и
          т.д.
          <br /> <br />
          {'<'}Механизмы маршрутизации запросов и обработку URI
          <br />
          <br />
          {'<'}Форматы данных для передачи информации в REST API (JSON & XML)
          <br /> <br />
          {'<'}Методы аутентификации и авторизации в REST API
        </>
      ),
    },
    {
      title: 'Spring OpenAPI',
      content: (
        <>
          {'<'}Концепция OpenAPI
          <br />
          <br />
          {'<'}Интеграции Spring c OpenAPI
          <br />
          <br />
          {'<'}Инструменты и методики т.д.
          <br /> <br />
          {'<'}тестирования документации ОрепАРІ
        </>
      ),
    },
    {
      title: 'JUnit Tests',
      marginChange: '36px',
      content: (
        <>
          {'<'}Концепции и принципы тестирования программного обеспечения
          <br />
          <br />
          {'<'}Фреймворка JUnit
          <br />
          <br />
          {'<'}Ассерты
          <br />
          <br />
          {'<'}Аннотации: @Before, @After,
          <br />
          <br />
          {'<'}@BeforeEach, @AfterEach
        </>
      ),
    },

    {
      title: 'Spring Data',
      content: (
        <>
          {'<'}Концепции и принципы работы Spring
          <br />
          <br />
          {'<'}Data
          <br />
          <br />
          {'<'}Конфигурация базы данных
          <br />
          <br />
          {'<'}(PostgreSQL)
          <br />
          <br />
          {'<'}Spring JDBC
          <br />
          <br />
          {'<'}Запросы (Query Methods)
          <br />
          <br />
          {'<'}Связи между сущностями (один к одному, один ко многим, многие ко
          многим)
        </>
      ),
    },
    {
      title: 'Spring Security',
      marginChange: '36px',
      content: (
        <>
          {'<'}Концепции и принципы работы Spring
          <br />
          <br />
          {'<'}Security
          <br />
          <br />
          {'<'}Настройка аутентификации
          <br />
          <br />
          {'<'}Роли и разрешения
          <br />
          <br />
          {'<'}Защита URL и ресурсов
          <br />
          <br />
          {'<'}Использование JWT
        </>
      ),
    },
  ]

  return (
    <section className={styles.intensive_details}>
      <div className={styles.intensive_details__heading}>
        <p>Подробная программа интенсива</p>
        <div className={styles.buttons_for_scrolling}>
          <button
            className={styles.button_to_left}
            onClick={() => handleLeftButtonClick()}
          ></button>
          <button
            className={styles.button_to_right}
            onClick={() => handleRightButtonClick()}
            disabled={isRightButtonDisabled}
          ></button>
        </div>
      </div>
      <div
        className={styles.intensive_details__main}
        style={{
          left: setctionPosition + 'px',
        }}
      >
        {details.map(({ title, content, marginChange }, index) => (
          <div
            className={styles.intensive_details__main__display}
            style={{ marginTop: `${marginChange}` }}
            key={nanoid()}
            ref={details.length - 1 === index ? lastSectionRef : undefined}
          >
            <p>00{++index}</p>
            <div className={styles.table_info}>
              <h1 className={styles.table_info__heading}>{title}</h1> <br />
              <p className={styles.table_info__text}>{content}</p>
              <div className={styles.table_info__dots}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Details
