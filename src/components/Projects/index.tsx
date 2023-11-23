'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import classNames from 'classnames'
import arrowIcon from 'public/arrow_icon.svg'
import firstSlide from 'public/case.png'
import secondSlide from 'public/case2.png'
import imgSlide from 'public/car_line.svg'
import Slider from 'react-slick'

import Button from '@/components/ui/Button'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './styles.module.scss'

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(1)

  interface ISlide {
    title: string
    src: StaticImageData
    src2: StaticImageData
  }

  const slides: ISlide[] = [
    {
      title: 'Кортим команда ',
      src: firstSlide,
      src2: imgSlide,
    },
    {
      title: 'Кортим команда',
      src: secondSlide,
      src2: '',
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
        <h2 className={styles.header}>Последние проекты</h2>
        <a href="/portfolio">
          <Button className={styles.cases_button}>
            <Image
              className={styles.cases_button__arrow}
              src={arrowIcon}
              alt={'Arrow'}
            />
            Все кейсы
          </Button>
        </a>
      </div>
      <div className={styles.slider_wrapper}>
        <h3 className={styles.title}>{slides[activeSlide - 1].title}</h3>
        <Slider {...settings}>
          {slides.map(({ title, src }) => (
            <div className={styles.slide_wrapper} key={title}>
              <Image src={src} fill alt={title} />
              <div
                className={styles.slide_wrapper_img}
                style={{
                  backgroundImage: `url(${slides[activeSlide - 1].src2.src})`,
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
      <footer className={styles.footer}>
        <a href="/portfolio">
          <Button className={styles.cases_button}>
            <Image
              className={styles.cases_button__arrow}
              src={arrowIcon}
              alt={'Arrow'}
            />
            Все кейсы
          </Button>
        </a>
      </footer>
    </section>
  )
}

export default Projects
