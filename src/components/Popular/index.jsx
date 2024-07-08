import { React } from "react";
import styles from "./styles.module.scss";
import spain from "./../../assets/images/spain.png";
import korea from "./../../assets/images/korea.jpg";
import korea_flag from "./../../assets/images/korea_flag.png";
import austria from "./../../assets/images/austria.jpg";
import austria_flag from "./../../assets/images/austria_flag.png";
import usa from "./../../assets/images/USA.jpg";
import usa_flag from "./../../assets/images/usa_flag.png";
import egypt from "./../../assets/images/egypt.png";
import germany from "./../../assets/images/germany.png";
import france from "./../../assets/images/france.png";
import spain_flag from "./../../assets/images/spain_flag.png";
import egypt_flag from "./../../assets/images/egypt_flag.png";
import germany_flag from "./../../assets/images/germany_flag.png";
import france_flag from "./../../assets/images/france_flag.png";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";
import { Grid, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const Popular = () => {
  const countries = [
    {
      title: "Германия",
      path: "/germany",
      price: "20 000KZ",
      flag: germany_flag,
      img: germany,
    },
    {
      title: "Франция",
      path: "/",
      price: "25 000KZ",
      flag: france_flag,
      img: france,
      marginChange: "35%",
    },
    {
      title: "Испания",
      path: "/",
      price: "25 000KZ",
      flag: spain_flag,
      img: spain,
    },
    {
      title: "Египет",
      path: "/",
      price: "25 000KZ",
      flag: egypt_flag,
      img: egypt,
      marginChange: "35%",
    },
    {
      title: "Южная Корея",
      path: "",
      price: "25 000KZ",
      flag: korea_flag,
      img: korea,
    },
    {
      title: "США",
      path: "",
      price: "25 000KZ",
      flag: usa_flag,
      img: usa,
      marginChange: "35%",
    },
    {
      title: "Австрия",
      path: "",
      price: "25 000KZ",
      flag: austria_flag,
      img: austria,
    },
  ];
  const { t } = useTranslation();
  return (
    <section className={styles.popular}>
      <div className={styles.popular__heading}>
        <hr />
        <h1>{t("popular")}</h1>
        <hr />
      </div>
      <div>
        <Swiper
          rewind={true}
          modules={[Grid, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {countries.map(
            ({ title, price, path, flag, img, marginChange }, index) => (
              <SwiperSlide virtualIndex={index}>
                <div
                  className={styles.popular__countryCards}
                  style={{
                    marginTop: `${marginChange}`,
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img})`,
                  }}
                  key={nanoid()}
                >
                  <div className={styles.popular__countryCardsTitle}>
                    <img src={flag} alt="country" />
                    <p>{title}</p>
                  </div>
                  <div className={styles.popular__countryCardsContent}>
                    <p className={styles.popular__contentLabel}>{t("price")}</p>
                    <p>{price}</p>
                    <p className={styles.popular__contentLabel}>
                      {t("deadline")}
                    </p>
                    <p>{t("deadlineDays")}</p>
                  </div>
                  <a href={path}>
                    <button>{t("details")}</button>
                  </a>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Popular;
