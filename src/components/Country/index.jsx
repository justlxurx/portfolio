import { React } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import spain_flag from "./../../assets/images/spain_flag.png";
import egypt_flag from "./../../assets/images/egypt_flag.png";
import germany_flag from "./../../assets/images/germany_flag.png";
import france_flag from "./../../assets/images/france_flag.png";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Country = () => {
  const countries = [
    {
      title: "Германия",
      path: "/germany",
      flag: germany_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: spain_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: egypt_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: france_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: germany_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: germany_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: germany_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: germany_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: germany_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: germany_flag,
    },
    {
      title: "Германия",
      path: "/",
      flag: germany_flag,
    },
  ];

  return (
    <section className={styles.country}>
      <div className={styles.routes}>
        <a href="/">Главная /</a> <b> Шенгенская зона</b>
      </div>
      <h1>ШЕНГЕНСКАЯ ЗОНА</h1>
      <div className={styles.all_visa}>
        {countries.map(({ title, path, flag }) => (
          <Link to={path}>
            <div className={styles.country_visa} key={nanoid()}>
              <img src={flag} alt="flag" />
              <p>{title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Country;
