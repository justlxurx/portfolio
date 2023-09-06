'use client'
import React, { useState } from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'

import { ISlide } from './interface'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './SmallSlider.module.scss'

interface ISmallSliderProps {
  items: ISlide[]
  className?: string
}


const SmallSlider: React.FC<ISmallSliderProps> = ({ items, className }) => {
  const [activeSlide, setActiveSlide] = useState(1)

  const settings = {
    className: styles.slider2,
    dotsClass: styles.dots2,
    customPaging: function (i: number) {
      const buttonNumber = i + 1

      return (
        <button
          className={classNames(
            styles.dot,
            {
              [styles.dot___active]: activeSlide === buttonNumber,
            },
            className,
          )}
        />
      )
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setActiveSlide(current + 1),
  }

  return (
    <div className={styles.slider_wrapper2}>
      <Slider {...settings}>
        {items.map(({ component, label }, index) => (
          <div className={styles.slide_wrapper2} key={index}>
            {component}
            {/* <h3 className={styles.title2}>{items[activeSlide - 1].label}</h3> */}
            <h3 className={styles.title2}>{label}</h3>
          </div>
        ))}
      </Slider>
     
    </div>
  )
}

export default SmallSlider
