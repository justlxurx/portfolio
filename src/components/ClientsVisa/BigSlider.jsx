import React, { useState } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./BigSlider.module.scss";

const BigSlider = ({ items }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: styles.slider,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: (i) => {
      const buttonNumber = i + 1;
      return (
        <div
          className={classNames(styles.dot, {
            [styles.dot__active]: activeSlide === buttonNumber - 1,
          })}
        ></div>
      );
    },
    afterChange: (current) => setActiveSlide(current),
  };

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
  );
};

export default BigSlider;
