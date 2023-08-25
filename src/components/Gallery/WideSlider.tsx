'use client'
import React, { useState } from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'

import { ISlide } from './interface'

import 'node_modules/slick-carousel/slick/slick.css'
import 'node_modules/slick-carousel/slick/slick-theme.css'
import styles from './WideSlider.module.scss'

interface IWideSliderProps {
  items: ISlide[]
  className?: string
}

enum ArrowVariant {
  left = 'left',
  right = 'right',
}

interface ICustomArrowProps {
  variant: ArrowVariant
  className?: string
}

const CustomArrow: React.FC<ICustomArrowProps> = ({
  className,
  variant,
  ...rest
}) => (
  <button
    className={classNames(styles.arrow, styles[`arrow__${variant}`], className)}
    {...rest}
  />
)

const WideSlider: React.FC<IWideSliderProps> = ({ items, className }) => {
  const [activeSlide, setActiveSlide] = useState(1)

  const settings = {
    className: styles.slider,
    dotsClass: styles.dots,
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
    arrows: true,
    nextArrow: (
      <CustomArrow
        className={styles.arrow__right}
        variant={ArrowVariant.right}
      />
    ),
    prevArrow: (
      <CustomArrow className={styles.arrow__left} variant={ArrowVariant.left} />
    ),
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
