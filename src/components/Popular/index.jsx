import { React } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import spain from "./../../assets/images/spain.png";
import egypt from "./../../assets/images/egypt.png";
import germany from "./../../assets/images/germany.png";
import france from "./../../assets/images/france.png";

import spain_flag from "./../../assets/images/spain_flag.png";
import egypt_flag from "./../../assets/images/egypt_flag.png";
import germany_flag from "./../../assets/images/germany_flag.png";
import france_flag from "./../../assets/images/france_flag.png";
import logo from "./../../assets/images/logo.png";
import { nanoid } from "nanoid";

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
  ];
  return (
    <section className={styles.popular}>
      <div className={styles.popular_heading}>
        <hr />
        <h1>ПОПУЛЯРНЫЕ СТРАНЫ</h1>
        <hr />
      </div>
      <div className={styles.popular_countries}>
        {countries.map(({ title, price, path, flag, img, marginChange }) => (
          <div
            className={styles.country_cards}
            style={{
              marginTop: `${marginChange}`,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img})`,
            }}
            key={nanoid()}
          >
            {/* <img src={img} alt="" /> */}
            <div className={styles.country_cards_title}>
              <img src={flag} alt="country" />
              <p>{title}</p>
            </div>
            <div className={styles.country_cards_content}>
              <p className={styles.content_label}>Цена от:</p>
              <p>{price}</p>
              <p className={styles.content_label}>Срок оформления:</p>
              <p>от 3-х дней</p>
            </div>
            <a href={path}>
              <button>Подробнее</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
