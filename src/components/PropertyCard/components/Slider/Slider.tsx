import Cancun from "../../../../assets/images/Cancun.svg";
import next from "../../../../assets/icons/next.svg";
import prev from "../../../../assets/icons/prev.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import s from "./Slider.module.scss";

export const SliderSection = () => {
  const items = [
    <div className={s.main__left}>
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>Property 1</p>
        <div className={s.apartment__country}>
          <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} />
          <p className={s.apartment__countryName}>Cancun, Mexico</p>
        </div>
      </div>
      <div className={s.apartment__images}>
        <div className={s.apartment__img1}></div>
        <div className={s.apartment__images2}>
          <div className={s.apartment__img2}></div>
          <div className={s.apartment__img3}></div>
          <div className={s.apartment__img4}></div>
        </div>
      </div>
    </div>,

    <div className={s.main__left}>
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>Property 1</p>
        <div className={s.apartment__country}>
          <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} />
          <p className={s.apartment__countryName}>Cancun, Mexico</p>
        </div>
      </div>
      <div className={s.apartment__images}>
        <div className={s.apartment__img1}></div>
        <div className={s.apartment__images2}>
          <div className={s.apartment__img2}></div>
          <div className={s.apartment__img3}></div>
          <div className={s.apartment__img4}></div>
        </div>
      </div>
    </div>,
    <div className={s.main__left}>
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>Property 1</p>
        <div className={s.apartment__country}>
          <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} />
          <p className={s.apartment__countryName}>Cancun, Mexico</p>
        </div>
      </div>
      <div className={s.apartment__images}>
        <div className={s.apartment__img1}></div>
        <div className={s.apartment__images2}>
          <div className={s.apartment__img2}></div>
          <div className={s.apartment__img3}></div>
          <div className={s.apartment__img4}></div>
        </div>
      </div>
    </div>,
    <div className={s.main__left}>
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>Property 1</p>
        <div className={s.apartment__country}>
          <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} />
          <p className={s.apartment__countryName}>Cancun, Mexico</p>
        </div>
      </div>
      <div className={s.apartment__images}>
        <div className={s.apartment__img1}></div>
        <div className={s.apartment__images2}>
          <div className={s.apartment__img2}></div>
          <div className={s.apartment__img3}></div>
          <div className={s.apartment__img4}></div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className={s.wrapper}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={68}
        coverflowEffect={{
          rotate: 0,
          stretch: 86.8,
          depth: 5,
          modifier: 8.8,
          // slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={s.swiperContainer}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          // clickable: true,
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
  );
};
