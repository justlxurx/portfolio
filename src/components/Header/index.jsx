import React, { useState } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import map from "./../../assets/images/map.png";
import clock from "./../../assets/images/clock.png";
import phone from "./../../assets/images/phone.png";
import insta from "./../../assets/images/insta.png";
import whatsapp from "./../../assets/images/whatsapp.png";
import telega from "./../../assets/images/telega.png";
import logo from "./../../assets/images/logo.png";
import uncover from "./../../assets/images/uncover.svg";
import menu from "./../../assets/images/Menu.png";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import Burger from "../Burger";
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const SubMenu = ({ items }) => (
    <ul className={styles.submenu}>
      {items.map((item) => (
        <li key={nanoid()}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );

  const headerLinks = [
    {
      title: "О НАС",
      path: "/",
    },
    {
      title: "СТРАНЫ",
      //path: "/countries",
      image: uncover,
      subMenu: [
        { title: "Шенгенская зона", path: "/shengen" },
        { title: "Другие страны", path: "/others" },
      ],
    },
    {
      title: "УСЛУГИ",
      image: uncover,
      subMenu: [
        { title: "Страхование", path: "/services/insurance" },
        {
          title: "Переводы и нотариальное заверение",
          path: "/services/translations",
        },
        { title: "Многократные шенген визы", path: "/services/shengen-visas" },
        { title: "Апостилирование диплома", path: "/services/apostille" },
        {
          title: "Бронирование отелей и авиабилетов",
          path: "/services/hotel-flights",
        },
        {
          title: "Проверка документов",
          path: "/services/document-verification",
        },
      ],
    },
    {
      title: "частые вопросы",
      path: "/faq",
    },
    {
      title: "ОТЗЫВЫ",
      path: "/feedback",
    },
    {
      title: "КОНТАКТЫ",
      path: "/contact",
    },
  ];

  function toggleClass(state) {
    setIsActive(state);
  }

  return (
    <section className={styles.navbar}>
      <div className={styles.companyInfo}>
        <div className={styles.companyInfo__address}>
          <img src={map} alt="map" />
          <p>
            Казахстан, г. Алматы, <br /> Маркова 22/37, 4 этаж, офис 6
          </p>
        </div>

        <div className={styles.companyInfo__timeWorking}>
          <img src={clock} alt="clock" />
          <p>
            пн-пт 10:00 - 18:00 , сб 10.00-13.00 <br /> вс выходной{" "}
          </p>
        </div>

        <div className={styles.companyInfo__contact}>
          <div className={styles.phones}>
            <img src={phone} alt="phone" />
            <p>
              +7 (727) 339 83 23 <br /> +7 (727) 339 83 23
            </p>
          </div>

          <nav className={styles.socials}>
            <a href="">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="">
              <img src={telega} alt="telega" />
            </a>
            <a href="">
              <img src={insta} alt="insta" />
            </a>
            {/* <ul> 
              {socialLinks.map(({ path, icon }) => ( 
                <li key={nanoid()}> 
                  <a href={path}> 
                    <img 
                      src={icon} 
                      alt="icon" 
                      style={{ width: "50px", height: "50px" }} 
                    /> 
                  </a> 
                </li> 
              ))} 
            </ul> */}
          </nav>
        </div>

        <div className={styles.lang}>
          <div className={styles.lang__ru}>
            <p>RU</p>
          </div>
          <div className={styles.lang__en}>
            <p>EN</p>
          </div>
        </div>

        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenu__logoWrapper}>
            <div className={styles.mobileMenu__logo}>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <p className={styles.mobileMenu__heading}>
              BLS-Almaty <br /> центр <br /> визовой <br /> поддержки
            </p>
          </div>
          <div className={styles.whatsappWrapper}>
            <a href="" target="_blank">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <p>+7 (707) 901 2423</p>
          </div>
          <div
            className={`${styles.mobileMenu__burger} ${
              isActive ? styles.active : ""
            }`}
            onClick={() => toggleClass(!isActive)}
          >
            <span></span>
          </div>
        </div>
      </div>

      {isActive && <Burger />}

      <header className={styles.menu}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div></div>
        <div className={styles.menu__navigation}>
          <ul className={styles.menu__navigationList}>
            {headerLinks.map(({ path, title, image, subMenu }) => (
              <li key={nanoid()} className={styles.menu__navigationListItems}>
                <Link className={styles.links} to={path}>
                  {title}
                  {image && (
                    <img src={image} alt="g" className={styles.uncover} />
                  )}
                </Link>
                {subMenu && <SubMenu items={subMenu} />}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
