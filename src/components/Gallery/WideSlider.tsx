'use client'
import React, { useState } from 'react'
import classNames from 'classnames'
// import { nanoid } from 'nanoid'
// import { Carousel } from 'react-responsive-carousel'
import Slider from 'react-slick'

import { ISlide } from './interface'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './WideSlider.module.scss'

interface IWideSliderProps {
  items: ISlide[]
}

const WideSlider: React.FC<IWideSliderProps> = ({ items }) => {
  const [activeSlide, setActiveSlide] = useState(1)

  const settings = {
    className: styles.slider,
    dotsClass: styles.dots,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setActiveSlide(current + 1),
  }

  return (
    <div className={styles.slider_wrapper}>
      <h3 className={styles.title}>{items[activeSlide - 1].label}</h3>
      <Slider {...settings}>
        {items.map(({ component, label }, index) => (
          <div className={styles.slide_wrapper} key={index}>
            {component}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default WideSlider
