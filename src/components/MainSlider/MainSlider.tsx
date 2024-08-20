import s from "./MainSlider.module.scss";
import Cancun from "../../assets/images/Cancun.svg";
import next from "../../assets/icons/next.svg";
import prev from "../../assets/icons/prev.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card } from "./Card/Card";

export const MainSlider = () => {
  const items = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
  return (
    <div className={`${s.main} container`}>
      <h1 className={s.main__heading}>
        Start earning passive income today with rental properties available now.
        Our platform offers a variety of high-yield real estate options ready
        for rental.
        <br /> <br />
        Easily invest and start generating revenue without the hassle of
        traditional property management. Take the first step towards financial
        freedom and let your money work for you!
      </h1>
      <div className={s.country}>
        <img src={Cancun} alt="Cancun" className={s.country__flag} />
        <p className={s.country__name}>Cancun, Mexico</p>
      </div>
      <div className={s.wrapper}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className={s.swiperContainer}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            // clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {items.map((a, index) => (
            <SwiperSlide key={index}>{a}</SwiperSlide>
          ))}

          <div className={`slider-controller ${s.sliderController}`}>
            <div className={`swiper-button-prev slider-arrow ${s.buttons}`}>
              <img src={prev} alt="prev" />
            </div>
            <div className={`swiper-button-next slider-arrow ${s.buttons}`}>
              <img src={next} alt="" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
