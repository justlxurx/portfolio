'use client'
import React, { useState } from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './BigSlider.module.scss'

export interface FirstSlider {
  component: React.ReactNode
}

interface SliderFitness {
  items: FirstSlider[]
}

const BigSlider: React.FC<SliderFitness> = ({ items }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    //dotsClass:styles.dots,
    className: styles.slider,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    customPaging: (i: number) => {
      const buttonNumber = i + 1
      return (
        <div
          className={classNames(styles.dot, {
            [styles.dot__active]: activeSlide === buttonNumber - 1,
          })}
        ></div>
      )
    },
    afterChange: (current: number) => setActiveSlide(current),
  }

  return (
    <div className={styles.slider_wrapper1}>
      <Slider {...settings}>
        {items.map(({ component }, index) => (
          <div className={styles.slide_wrapper1} key={index}>
            {component}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BigSlider
