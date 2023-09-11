// import Button from '@/components/ui/Button'
import Image from 'next/image'

import styles from './styles.module.scss'

const Details = () => {
  return (
    <section className={styles.intensive_details}>
      <div className={styles.intensive_details__heading} >
      <p>Подробная программа интенсива</p>
      <div className={styles.buttons_for_scrolling}>
        <button className={styles.button_to_left}></button>
        <button className={styles.button_to_right}></button>
      </div>
      </div>
      <div className={styles.intensive_details__main}>
        <div className={styles.intensive_details__main__display}>
        <p>001</p>
        <div className={styles.table_info}>
            <h1 className={styles.table_info__heading}>Java Core</h1><br />
            <p className={styles.table_info__text}> 
                {'<'}Code conventions <br/> <br />
                {'<'}Типы данных, переменные и управляющие конструкции<br/> <br />
                {'<'}Массивы и коллекции & ООП: инкапсуляция, наследование, полиморфизм и абстракция<br/> <br />
                {'<'}Исключения<br/> <br />
                {'<'}Потоки. Использование ключевого слова synchronized и методы wait,<br/> <br />
                {'<'}notify, notifyAll<br/><br />
                {'<'}Ввод/вывод (I/0)<br/><br />
                {'<'}Generics<br/><br />
            </p>
        </div>
        </div>

        <div className={styles.intensive_details__main__display}>
        <p>002</p>
        <div className={styles.table_info}>
            <h1 className={styles.table_info__heading}>Elasticsearch</h1> <br />
            <p className={styles.table_info__text}> 
                {'<'}Работа с индексами и документами<br/> <br />
                {'<'}Поиск данных: ключевые слова, фразы, диапазоны значений<br/> <br />
                {'<'}Фильтры и агрегации - уточнение поискового запроса<br/> <br />
                {'<'}Многоязычный поиск<br/> <br />
                {'<'}Поиск с поддержкой релевантности<br/> <br />
            </p>
        </div>
        </div>

        <div className={styles.intensive_details__main__display}>
        <p>003</p>
        <div className={styles.table_info}>
            <h1 className={styles.table_info__heading}>Spring Core & MVC</h1> <br />
            <p className={styles.table_info__text}> 
                {'<'}Inversion of Control <br/><br />
                {'<'}Dependecy Injection <br/><br />
                {'<'}IoC & DI B Java. Управления зависимостей  <br/><br />
                {'<'}АОР интеграция с Spring<br/><br />
                {'<'}Бины и их жизненный цикл<br/><br />
                {'<'}Обработки ошибок и исключений <br/> <br />
                {'<'}Spring MVC <br/><br />
                {'<'}Конфигурации Spring MVC приложений <br/> <br />
                {'<'}Создание контроллеров <br/> <br />
                {'<'}Аннотации @Controller<br/><br />
                {'<'}@RequestMapping, @GetMapping, @PostMapping <br/> <br />
                {'<'}Работа с представлениями <br/> <br />
                {'<'}Обработка форм <br/><br />
                {'<'}Работа с файлами и загрузка файлов<br/> <br />
            </p>
        </div>  
        </div>

        <div className={styles.intensive_details__main__display}>
        <p>004</p>
        <div className={styles.table_info}>
            <h1 className={styles.table_info__heading}>Spring REST API</h1> <br />
            <p className={styles.table_info__text}> 
                {'<'}НТТР протокол: GET, POST, PUT,<br/><br />
                {'<'}DELETE<br/><br />
                {'<'}Фреймворки для создания RESTEul сервисов: Spring Boot, JAX-RS и т.д.<br/> <br />
                {'<'}Механизмы маршрутизации запросов и обработку URI<br/><br />
                {'<'}Форматы данных для передачи информации в REST API (JSON & XML)<br/> <br />
                {'<'}Методы аутентификации и авторизации в REST API<br/><br />
            </p>
        </div>
        </div>


        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}


export default Details
