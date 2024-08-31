import Cancun from "../../../../assets/images/Cancun.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { manageImgApi } from "../../../../api/property/manageImg";
import s from "./Slider2.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export const SliderSection2 = ({ id, data }: { id: number; data: any }) => {
  const items = [
    <div
      className={s.apartment__img1}
      style={{
        backgroundImage: `url(10-AdminBackground.png053a3a33-1e8c-444b-8d87-b3ee2076450e)`,
      }}
    ></div>,
    <img
      src="https://estate.hotcode.kz/images/10-AdminBackground.png053a3a33-1e8c-444b-8d87-b3ee2076450e"
      alt=""
    />,
    <div className={s.apartment__img2}></div>,
    <div className={s.apartment__img3}></div>,
    <div className={s.apartment__img4}></div>,
    <div className={s.apartment__img1}></div>,
    <div className={s.apartment__img2}></div>,
    <div className={s.apartment__img3}></div>,
    <div className={s.apartment__img4}></div>,
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const a = await manageImgApi.getImg(id);
        console.log("response is " + a);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className={s.outer}>
      <div className={s.apartment__wrap}>
        <p className={s.apartment__name}>{/* {data.name} */}</p>
        <div className={s.apartment__country}>
          <img src={Cancun} alt="Cancun" className={s.apartment__countryFlag} />
          <p className={s.apartment__countryName}>
            {/* Cancun, Mexico */}
            {/* {data.location} */}
          </p>
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
            <SwiperSlide key={index}>
              <div className={s.apartment__images}>{a}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
