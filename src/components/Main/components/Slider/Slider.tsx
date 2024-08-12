import info from "../../../../assets/icons/info.svg";
import home from "../../../../assets/icons/home.svg";
import Cancun from "../../../../assets/images/Cancun.svg";
import next from "../../../../assets/icons/next.svg";
import prev from "../../../../assets/icons/prev.svg";
import dollar from "../../../../assets/icons/dollar.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import s from "./Slider.module.scss";

export const SliderSection = () => {
  const list = [
    "Payback period: 7 years",
    "100% capitalization in 8 years",
    "Guaranteed returns from the management company",
    "Bali Invest Club",
  ];
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
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={info} alt="info" />
          <p className={s.apartment__aboutTitle}> About apartments</p>
        </div>
        <div className={s.apartment__aboutItemWrap}>
          <div className={s.apartment__aboutItem}>1 Bed</div>
          <div className={s.apartment__aboutItem}>1 Bath</div>
          <div className={s.apartment__aboutItem}>49 m²</div>
          <div className={s.apartment__aboutItem}>Commerce</div>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={home} alt="home" />
          <p className={s.apartment__aboutTitle}> About the Property</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <p className={s.apartment__aboutPropertyText}>
            A premium complex designed like a 5-star hotel, located on one of
            the main streets in the highly sought-after Canggu area, surrounded
            by rice fields, and just 7 minutes from the ocean and world-famous
            beach clubs.
          </p>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={dollar} alt="dollar" />
          <p className={s.apartment__aboutTitle}>Investment Appeal</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <ul className={s.list}>
            {list.map((item, index) => (
              <li key={index} className={s.apartment__aboutPropertyText}>
                <span></span> {item}
              </li>
            ))}
          </ul>
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
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={info} alt="info" />
          <p className={s.apartment__aboutTitle}> About apartments</p>
        </div>
        <div className={s.apartment__aboutItemWrap}>
          <div className={s.apartment__aboutItem}>1 Bed</div>
          <div className={s.apartment__aboutItem}>1 Bath</div>
          <div className={s.apartment__aboutItem}>49 m²</div>
          <div className={s.apartment__aboutItem}>Commerce</div>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={home} alt="home" />
          <p className={s.apartment__aboutTitle}> About the Property</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <p className={s.apartment__aboutPropertyText}>
            A premium complex designed like a 5-star hotel, located on one of
            the main streets in the highly sought-after Canggu area, surrounded
            by rice fields, and just 7 minutes from the ocean and world-famous
            beach clubs.
          </p>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={dollar} alt="dollar" />
          <p className={s.apartment__aboutTitle}>Investment Appeal</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <ul className={s.list}>
            {list.map((item, index) => (
              <li key={index} className={s.apartment__aboutPropertyText}>
                <span></span> {item}
              </li>
            ))}
          </ul>
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
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={info} alt="info" />
          <p className={s.apartment__aboutTitle}> About apartments</p>
        </div>
        <div className={s.apartment__aboutItemWrap}>
          <div className={s.apartment__aboutItem}>1 Bed</div>
          <div className={s.apartment__aboutItem}>1 Bath</div>
          <div className={s.apartment__aboutItem}>49 m²</div>
          <div className={s.apartment__aboutItem}>Commerce</div>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={home} alt="home" />
          <p className={s.apartment__aboutTitle}> About the Property</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <p className={s.apartment__aboutPropertyText}>
            A premium complex designed like a 5-star hotel, located on one of
            the main streets in the highly sought-after Canggu area, surrounded
            by rice fields, and just 7 minutes from the ocean and world-famous
            beach clubs.
          </p>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={dollar} alt="dollar" />
          <p className={s.apartment__aboutTitle}>Investment Appeal</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <ul className={s.list}>
            {list.map((item, index) => (
              <li key={index} className={s.apartment__aboutPropertyText}>
                <span></span> {item}
              </li>
            ))}
          </ul>
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
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={info} alt="info" />
          <p className={s.apartment__aboutTitle}> About apartments</p>
        </div>
        <div className={s.apartment__aboutItemWrap}>
          <div className={s.apartment__aboutItem}>1 Bed</div>
          <div className={s.apartment__aboutItem}>1 Bath</div>
          <div className={s.apartment__aboutItem}>49 m²</div>
          <div className={s.apartment__aboutItem}>Commerce</div>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={home} alt="home" />
          <p className={s.apartment__aboutTitle}> About the Property</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <p className={s.apartment__aboutPropertyText}>
            A premium complex designed like a 5-star hotel, located on one of
            the main streets in the highly sought-after Canggu area, surrounded
            by rice fields, and just 7 minutes from the ocean and world-famous
            beach clubs.
          </p>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={dollar} alt="dollar" />
          <p className={s.apartment__aboutTitle}>Investment Appeal</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <ul className={s.list}>
            {list.map((item, index) => (
              <li key={index} className={s.apartment__aboutPropertyText}>
                <span></span> {item}
              </li>
            ))}
          </ul>
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
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={info} alt="info" />
          <p className={s.apartment__aboutTitle}> About apartments</p>
        </div>
        <div className={s.apartment__aboutItemWrap}>
          <div className={s.apartment__aboutItem}>1 Bed</div>
          <div className={s.apartment__aboutItem}>1 Bath</div>
          <div className={s.apartment__aboutItem}>49 m²</div>
          <div className={s.apartment__aboutItem}>Commerce</div>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={home} alt="home" />
          <p className={s.apartment__aboutTitle}> About the Property</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <p className={s.apartment__aboutPropertyText}>
            A premium complex designed like a 5-star hotel, located on one of
            the main streets in the highly sought-after Canggu area, surrounded
            by rice fields, and just 7 minutes from the ocean and world-famous
            beach clubs.
          </p>
        </div>
      </div>
      <div className={s.apartment__about}>
        <div className={s.apartment__aboutTitleWrap}>
          <img src={dollar} alt="dollar" />
          <p className={s.apartment__aboutTitle}>Investment Appeal</p>
        </div>
        <div className={s.apartment__aboutPropertyWrap}>
          <ul className={s.list}>
            {list.map((item, index) => (
              <li key={index} className={s.apartment__aboutPropertyText}>
                <span></span> {item}
              </li>
            ))}
          </ul>
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
