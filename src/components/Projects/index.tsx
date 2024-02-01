'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'
import arrowIcon from 'public/arrow_icon.svg'
import firstSlide from 'public/case.png'
import secondSlide from 'public/case2.png'
import thirdSlide from 'public/thirdSlide.png'
import fourthSlide from 'public/fourthSlide.png'
import fifthSlide from 'public/fifthSlide.png'
import sixthSlide from 'public/sixthSlide.png'
import seventhSlide from 'public/seventhSlide.png'
import eighthSlide from 'public/eighthSlide.png'
import ninthSlide from 'public/ninthSlide.png'
import tenthSlide from 'public/tenthSlide.png'
import eleventhSlide from 'public/eleventhSlide.png'
import twelvesSlide from 'public/twelvesSlide.png'
import thirtiethSlide from 'public/thirtiethSlide.png'

import mobile_case1 from 'public/mobile_case1.png'
import mobile_case2 from 'public/mobile_case2.png'
import mobile_case from 'public/mobile_case.png'
import mobile_case3 from 'public/mobile_case3.png'
import mobile_case4 from 'public/mobile_case4.png'
import mobile_case5 from 'public/mobile_case5.png'
import mobile_case6 from 'public/mobile_case6.png'
import mobile_case7 from 'public/mobile_case7.png'
import mobile_case8 from 'public/mobile_case8.png'
import mobile_case9 from 'public/mobile_case9.png'
import mobile_case10 from 'public/mobile_case10.png'
import mobile_case11 from 'public/mobile_case11.png'
import mobile_case12 from 'public/mobile_case12.png'

import imgSlide from 'public/car_line.svg'
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
  }

  const slides: ISlide[] = [
    {
      title: 'Краудленинговая платформа',
      src: fourthSlide,
      link: 'https://cofi.ru/',
      logo: logo_18,
      mobileImg: mobile_case3,
    },
    {
      title: 'Доработка платформы Grupovina',
      src: fifthSlide,
      link: 'https://grupovina.rs/',
      logo: logo_9,
      mobileImg: mobile_case4,
    },
    {
      title: 'ИИ бот',
      src: sixthSlide,
      link: 'https://thisberry.com/',
      logo: logo_10,
      mobileImg: mobile_case5,
    },
    {
      title: 'ПО для автомобильных весов',
      src: thirdSlide,
      link: 'https://vesovaya.kz/',
      logo: logo_8,
      mobileImg: mobile_case2,
    },
    {
      title: 'Автоматизированная система управления наружным освещением',
      src: seventhSlide,
      link: 'https://www.saiman.kz',
      logo: logo_11,
      mobileImg: mobile_case6,
    },
    {
      title: `Приложения для считывания данных с счетчика`,
      src: eighthSlide,
      link: 'https://www.saiman.kz',
      logo: logo_11,
      mobileImg: mobile_case7,
    },
    {
      title: 'Сервис документооборота для взаимодействия юридических лиц',
      src: ninthSlide,
      link: 'https://datcom.kz/',
      logo: logo_5,
      mobileImg: mobile_case8,
    },
    {
      title: 'Платежная система',
      src: tenthSlide,
      link: 'https://senim.kz',
      logo: logo_12,
      mobileImg: mobile_case9,
    },
    {
      title: 'Информационный портал',
      src: eleventhSlide,
      link: 'https://yvision.kz/',
      logo: logo_13,
      mobileImg: mobile_case10,
    },
    {
      title: 'Сервис доставки',
      src: thirtiethSlide,
      link: 'https://zhiber.kz/ru',
      logo: logo_19,
      mobileImg: mobile_case12,
    },
    {
      title: 'Московская электронная школа',
      src: twelvesSlide,
      link: 'https://www.mos.ru/city/projects/mesh/',
      mobileImg: mobile_case11,
    },

    {
      title: 'Кортим команда ',
      src: firstSlide,
      src2: imgSlide,
      link: '',
      mobileImg: mobile_case1,
    },
    {
      title: 'БУКИНГОВАЯ СИСТЕМА ДЛЯ КРУИЗНЫХ ЛАЙНЕРОВ',
      src: secondSlide,
      link: '',
      mobileImg: mobile_case,
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
        </div>
        <Slider {...settings}>
          {slides.map(({ title, src, src2, link, mobileImg }) =>
            link ? (
              <a href={link} target="_blank" key={title}>
                <div className={styles.slide_wrapper}>
                  <Image src={isMobile ? mobileImg : src} fill alt={title} />
                  <div
                    className={styles.slide_wrapper_img}
                    style={{
                      backgroundImage: `url(${src2})`,
                    }}
                  ></div>
                </div>
              </a>
            ) : (
              <div key={title} className={styles.slide_wrapper}>
                <Image src={isMobile ? mobileImg : src} fill alt={title} />
                <div
                  className={styles.slide_wrapper_img}
                  style={{
                    backgroundImage: `url(${src2})`,
                  }}
                ></div>
              </div>
            ),
          )}
        </Slider>
      </div>
    </section>
  )
}

export default Projects
