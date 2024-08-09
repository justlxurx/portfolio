import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Slider.module.scss";
import info from "../../../../assets/icons/info.svg";
import home from "../../../../assets/icons/home.svg";
import Cancun from "../../../../assets/images/Cancun.svg";
import next from "../../../../assets/icons/next.svg";
import prev from "../../../../assets/icons/prev.svg";

export const SliderSection = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    prevArrow: <img src={prev} height={32} width={57} />,
    nextArrow: <img src={next} height={32} width={57} />,
  };
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
    </div>,
  ];
  return (
    <div className={s.main__slider}>
      <Slider {...settings}>
        {items.map((item, id) => (
          <div className={s.slideWrapper} key={id}>
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};
