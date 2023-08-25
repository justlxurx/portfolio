'use client'
import React, { useState } from 'react'
import classNames from 'classnames'
// import { nanoid } from 'nanoid'
// import { Carousel } from 'react-responsive-carousel'
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
    className: styles.slider,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setActiveSlide(current),
     
  }

  return (
    // <div className={styles.slider_wrapper}>
    //   <h3 className={styles.title}>{items[activeSlide - 1].label}</h3>
    //   <Slider {...settings}>
    //     {items.map(({ component }, index) => (
    //       <div className={styles.slide_wrapper} key={index}>
    //         {component}
    //       </div>
    //     ))}
    //   </Slider>
    // </div>

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
