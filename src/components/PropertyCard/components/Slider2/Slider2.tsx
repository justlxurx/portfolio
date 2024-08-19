import Cancun from "../../../../assets/images/Cancun.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import s from "./Slider2.module.scss";

export const SliderSection2 = () => {
  const items = [
    <div className={s.apartment__images}>
      <div className={s.apartment__img1}></div>
    </div>,
    <div className={s.apartment__images}>
      <div className={s.apartment__img2}></div>
    </div>,
    <div className={s.apartment__images}>
      <div className={s.apartment__img3}></div>
    </div>,
    <div className={s.apartment__images}>
      <div className={s.apartment__img4}></div>
    </div>,
    <div className={s.apartment__images}>
      <div className={s.apartment__img1}></div>
    </div>,

    <div className={s.apartment__images}>
      <div className={s.apartment__img1}></div>
    </div>,
    <div className={s.apartment__images}>
      <div className={s.apartment__img2}></div>
    </div>,
    <div className={s.apartment__images}>
      <div className={s.apartment__img3}></div>
    </div>,
    <div className={s.apartment__images}>
      <div className={s.apartment__img4}></div>
    </div>,
    <div className={s.apartment__images}>
      <div className={s.apartment__img1}></div>
    </div>,
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.outer}>
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>Property 1</p>
        <div className={s.apartment__country}>
          <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} />
          <p className={s.apartment__countryName}>Cancun, Mexico</p>
        </div>
      </div>
      <div className={s.wrapper}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={s.swiperTop}
        >
          {items.map((a, index) => (
            <SwiperSlide key={index}>{a}</SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={15}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={s.swiperBottom}
        >
          {items.map((a, index) => (
            <SwiperSlide key={index}>{a}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
