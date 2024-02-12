'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'
import arrowIcon from 'public/arrow_icon.svg'
import firstSlide from 'public/case.png'
import secondSlide from 'public/secondSlide.svg'
import thirdSlide from 'public/thirdSlide.svg'
import fourthSlide from 'public/fourthSlide.svg'
import fifthSlide from 'public/fifthSlide.svg'
import sixthSlide from 'public/sixthSlide.svg'
import seventhSlide from 'public/seventhSlide.svg'
import eighthSlide from 'public/eighthSlide.svg'
import ninthSlide from 'public/ninthSlide.svg'
import tenthSlide from 'public/tenthSlide.svg'
import eleventhSlide from 'public/eleventhSlide.svg'
import twelvesSlide from 'public/twelvesSlide.svg'
import thirtiethSlide from 'public/thirtiethSlide.svg'
import mobile_case1 from 'public/mobile_case1.svg'
import mobile_case2 from 'public/mobile_case2.svg'
import mobile_case from 'public/mobile_case.svg'
import mobile_case3 from 'public/mobile_case3.svg'
import mobile_case4 from 'public/mobile_case4.svg'
import mobile_case5 from 'public/mobile_case5.svg'
import mobile_case6 from 'public/mobile_case6.svg'
import mobile_case71 from 'public/mobile_case7.svg'
import mobile_case8 from 'public/mobile_case8.svg'
import mobile_case9 from 'public/mobile_case9.svg'
import mobile_case10 from 'public/mobile_case10.svg'
import mobile_case11 from 'public/mobile_case11.svg'
import mobile_case12 from 'public/mobile_case12.svg'

import folder from 'public/folder-icon.svg'
import Slider from 'react-slick'

import logo_8 from 'public/logo-8.png'
import logo_18 from 'public/logo-20.png'
import logo_9 from 'public/logo-9.png'
import logo_10 from 'public/logo-10.png'
import logo_11 from 'public/logo-11.png'
import logo_5 from 'public/logo-5.png'
import logo_12 from 'public/logo-12.png'
import logo_13 from 'public/logo-13.png'
import logo_19 from 'public/logo-19.png'
import Button from '@/components/ui/Button'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './styles.module.scss'

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [activeSlide, setActiveSlide] = useState(1)

  interface ISlide {
    title: string
    src: StaticImageData
    src2?: StaticImageData
    link: string
    logo?: StaticImageData | any
    mobileImg: StaticImageData
    text1: string
    text2?: string
  }

  const slides: ISlide[] = [
    {
      title: 'Краудленинговая платформа',
      src: fourthSlide,
      link: 'https://cofi.ru/',
      logo: logo_18,
      mobileImg: mobile_case3,
      text1:
        'Разработали сервис финансирования, который позволяетпредпринимателям быстро получать займы от инвесторовнапрямую, минуя сложный процесс сбора документов иоформления залогов',
    },
    {
      title: 'Доработка платформы Grupovina',
      src: fifthSlide,
      link: 'https://grupovina.rs/',
      logo: logo_9,
      mobileImg: mobile_case4,
      text1:
        'Мы расширяли функционал сервиса, предлагающего скидки, акции и купоны на различные услуги, работая как с пользовательским интерфейсом, так и с бэкендом.',
    },
    {
      title: 'ИИ бот',
      src: sixthSlide,
      link: 'https://thisberry.com/',
      logo: logo_10,
      mobileImg: mobile_case5,
      text1:
        'Разрабатывали инновационного бота, обладающего способностью анализировать содержание веб-сайтов и автоматически отбирать видеоматериалы из публичныхисточников, соответствующие тематике сайта.',
      text2:
        'Кроме того, он предлагал рекламу, гармонирующую с контентом видео, отображая ее в соответствии с контентом сайта.',
    },
    {
      title: 'ПО для автомобильных весов',
      src: thirdSlide,
      link: 'https://vesovaya.kz/',
      logo: logo_8,
      mobileImg: mobile_case2,
      text1:
        'Мы создали программное обеспечение для автомобильных весов, использующее передовые технологии компьютерного зрения для автоматического считывания номеров машин.',
      text2:
        'Кроме того, разработали систему для генерации и хранения отчетов, обеспечивая удобство и точность данных о взвешивании автомобилей.',
    },
    {
      title: 'Автоматизированная система управления наружным освещением',
      src: seventhSlide,
      link: 'https://www.saiman.kz',
      logo: logo_11,
      mobileImg: mobile_case6,
      text1:
        'Разработали с нуля систему предназначенную для централизованного сбора и хранения данных о работе наружного освещения и оборудования, предоставляя информацию по запросу. Она также позволяет удаленно снимать показания счетчиков. ',
      text2:
        'Подключение дополнительных модулей добавляет возможность группового управления яркостью светильников и индивидуального контроля каждого, не требуя дополнительной проводки.',
    },
    {
      title: `Приложения для считывания данных с счетчика`,
      src: eighthSlide,
      link: 'https://www.saiman.kz',
      logo: logo_11,
      mobileImg: mobile_case71,
      text1:
        'Создано приложение для платформы Android, разработанное специально для компании SAIMAN. Оно позволяет удобно и без проводов считывать данные счетчиков SAIMAN при помощи технологии Bluetooth.',
    },
    {
      title: 'Сервис документооборота для взаимодействия юридических лиц',
      src: ninthSlide,
      link: 'https://datcom.kz/',
      logo: logo_5,
      mobileImg: mobile_case8,
      text1:
        'Разработка новых модулей и API, техническая поддержка. Стабилизация работоспособности проекта посредством тестирования и дебаггинга. Для нахождения ошибок и тестирования использовался Postman, Mock testing.  ',
      text2:
        'Были исправлены проблемы с валидацией данных, добавление дополнительных проверок информации, приходящей из базы данных. Основные реализованные задачи были во фронтенд части проекта: верстка админ-панели, распределение ролей и доступа к вкладкам, коммуникации с беком. Для сохранения и отображения действий пользователя с фронта был создан API, обращение шло по принципу REST.',
    },
    {
      title: 'Платежная система',
      src: tenthSlide,
      link: 'https://senim.kz',
      logo: logo_12,
      mobileImg: mobile_case9,
      text1:
        'Создание с нуля REST-интеграции, с банком 2-го уровня. Интеграция позволяет получать актуальные данные по счетам клиентов, а также предусматривает возможность перевода средств с текущего счёта на указанный пользователем. Для защиты данных при интеграции использовалась технология JWS. ',
      text2:
        'Разработка REST-сервиса промо-кодов. Доработка существующих интеграций с различными АЗС,для реализации оплаты ГСМ посредством сервиса.',
    },
    {
      title: 'Информационный портал',
      src: eleventhSlide,
      link: 'https://yvision.kz/',
      logo: logo_13,
      mobileImg: mobile_case10,
      text1:
        'Рефакторинг раздела спецпроектов. Добавление в футер поста вывод постов соответствующей тематики с Infinite-scroll’ом. Авторизация с регистрацией и восстановлением пароля у проекта была вынесена вотдельный микросервис.',
      text2:
        'Также, по требованию заказчика был реализован данный функционал в рамках основного приложения в виде модальных окон, без редиректа на микросервис. Исправление багов, реализация новых фич, обновление интерфейса, рефаторинг кода.',
    },
    {
      title: 'Сервис доставки',
      src: thirtiethSlide,
      link: 'https://zhiber.kz/ru',
      logo: logo_19,
      mobileImg: mobile_case12,
      text1:
        'Наша команда успешно разработала полную интеграцию с Яндекс.Доставкой, предоставляя вам современные и эффективные функции для управления доставкой вашего товара. ',
      text2: `<1> Мы обеспечили возможность легкого заказа, понятного отслеживания пути вашей посылки и безупречного завершения доставки.
     <2>Наш сервис гарантирует надежность и удобство в каждом этапе процесса, чтобы ваш опыт был максимально комфортным и беззаботным.`,
    },
    {
      title: 'Московская электронная школа',
      src: twelvesSlide,
      link: 'https://www.mos.ru/city/projects/mesh/',
      mobileImg: mobile_case11,
      text1:
        'Пользователь может вести журнал классов, выдавать задания, составлять учебный план, следить за расписанием, школьными новостями и мероприятиями. ',
    },

    {
      title: 'Кортим команда ',
      src: firstSlide,
      link: '',
      mobileImg: mobile_case1,
      text1:
        'Проекту нужны были специалисты, которые взяли бы на себя сопровождение и доработку одного из B2B продуктов, обеспечивающего взаимодействие с автобусными перевозчиками. Мы собрали команду из бэкенд-разработчиков, девопсов, тестировщиков, а также дев-менеджера.',
      text2:
        '<1> Обновили платформу, отвечающую за поиск рейсов <2> Создали адаптеры – обновленные версии системы и перенесли на них информацию <3> Провели рефакторинг — перепроектирование кода, и на протяжении года ведем постоянную поддержку системы',
    },
    {
      title: 'БУКИНГОВАЯ СИСТЕМА ДЛЯ КРУИЗНЫХ ЛАЙНЕРОВ',
      src: secondSlide,
      link: '',
      mobileImg: mobile_case,
      text1:
        'Заказчику необходимо было обновление системы, которая управляет всеми бизнес-процессами на суднах: от бронирования кают и конференц-залов до работы автомобильных палуб и ресторанов.',
      text2:
        '<1> Сделали декомпозицию монолитной системы на более мелкие, доработали их. <2> Разработали новый функционал, который поддерживает работу систем судов, судовых сооружений, управляет всеми бизнес-процессами на круизных суднах, даже ценообразованием, бухгалтерским учетом и взаимодействием с клиентами.',
    },
  ]

  const settings = {
    className: styles.slider,
    id: styles.slider1,
    dotsClass: styles.dots,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i: number) => {
      const buttonNumber = i + 1
      return (
        <Button
          className={classNames(styles.dot, {
            [styles.dot___active]: activeSlide === buttonNumber,
          })}
        >
          {buttonNumber}
        </Button>
      )
    },
    afterChange: (current: number) => setActiveSlide(current + 1),
  }

  return (
    <section className={classNames(styles.container, 'container')}>
      <div className={styles.additional}>
        <h2 className={styles.header}>Портфолио</h2>
        <a href="/portfolio">
          <Button className={styles.cases_button}>
            <Image
              className={styles.cases_button__arrow}
              src={arrowIcon}
              alt={'Arrow'}
            />
            Кейсы
          </Button>
        </a>
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.title_wrapper}>
          {slides[activeSlide - 1].logo ? (
            <Image
              src={slides[activeSlide - 1].logo}
              alt="logo"
              className={styles.logo}
            />
          ) : (
            ''
          )}

          <h3 className={styles.title}>{slides[activeSlide - 1].title}</h3>
          {slides[activeSlide - 1].link != '' ? (
            <div className={styles.link_wrapper}>
              <Image src={folder} alt="folder" className={styles.folder} />
              <a
                className={styles.link}
                href={slides[activeSlide - 1].link}
                target="_blank"
              >
                {slides[activeSlide - 1].link}
              </a>
            </div>
          ) : (
            ''
          )}
          <div className={styles.textWrapper}>
            <div className={styles.text1}>{slides[activeSlide - 1].text1}</div>
            {slides[activeSlide - 1].text2 ? (
              <div className={styles.text2}>
                {slides[activeSlide - 1].text2}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>

        <Slider {...settings}>
          {slides.map(({ title, src, link, mobileImg }) =>
            link ? (
              <a href={link} target="_blank" key={title}>
                <div className={styles.slide_wrapper}>
                  <Image src={isMobile ? mobileImg : src} fill alt={title} />
                </div>
              </a>
            ) : (
              <div key={title} className={styles.slide_wrapper}>
                <Image src={isMobile ? mobileImg : src} fill alt={title} />
              </div>
            ),
          )}
        </Slider>
      </div>
    </section>
  )
}

export default Projects
