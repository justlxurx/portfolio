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
import { Users } from "../../../../assets/icons/users";

export const SliderSection2 = ({ id, data }: { id: number; data: any }) => {
  const [img, setImg] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const a = await manageImgApi.getImg(id);
        setImg(a);
        console.log("response is " + a);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className={s.outer}>
      <div>
        <div className={s.topInfo}>
          <div className={s.apartment__wrap}>
            <p className={s.apartment__name}>{data.name}</p>
            <div className={s.apartment__country}>
              <p className={s.apartment__countryName}>{data.location}</p>
              {/* <img
                src={Cancun}
                alt="Cancun"
                className={s.apartment__countryFlag}
              /> */}
            </div>
          </div>
          <div className={s.users}>
            <Users />
            <p className={s.users__info}>75 Investors</p>
          </div>
        </div>
      </div>
      {img && (
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
            {img &&
              img.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={s.apartment__img1}
                    style={{
                      backgroundImage: item.image_url
                        ? `url(https://minio.hotcode.kz/${item.image_url})`
                        : "",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
          </Swiper>

          {img && img.length > 3 && (
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={15}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={s.swiperBottom}
            >
              {img &&
                img.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={s.apartment__images}>
                      <div
                        className={s.apartment__img1}
                        style={{
                          backgroundImage: item.image_url
                            ? `url(https://minio.hotcode.kz/${item.image_url})`
                            : "",
                        }}
                      ></div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      )}
    </div>
  );
};
