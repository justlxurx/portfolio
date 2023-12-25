import { React } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import whatsapp1 from "./../../assets/images/whatsapp1.png";
import telega from "./../../assets/images/telega.png";
import insta from "./../../assets/images/instagram.png";
import logo from "./../../assets/images/logo.png";
import { nanoid } from "nanoid";

const Footer = () => {
  const mainLinks = [
    {
      title: "О нас",
      path: "/",
    },
    {
      title: "Все визы",
      path: "#",
    },
    {
      title: "Услуги",
      path: "#",
    },
    {
      title: "Агенства",
      path: "#",
    },
  ];
  return (
    <footer className={styles.footerWrapper}>
      <img src={logo} alt="logo" className={styles.footerWrapper__logo} />
      <h5 className={styles.footerWrapper__mainHeading}>
        Первый центр визовой поддержки
      </h5>
      <div className={styles.footerWrapper__column1}>
        <h3 className={styles.footerWrapper__heading}>О КОМПАНИИ</h3>
        <ul className={styles.footerWrapper__menu}>
          {mainLinks.map(({ path, title }) => (
            <a className={styles.footerWrapper__menuItemsLinks} href={path}>
              <li key={nanoid()} className={styles.footerWrapper__menuItems}>
                {title}
              </li>
            </a>
          ))}
        </ul>
      </div>

      <div className={styles.footerWrapper__column2}>
        <h3 className={styles.footerWrapper__heading}>КОНТАКТЫ</h3>
        <div className={styles.contacts}>
          <div className={styles.contacts__wrapper}>
            <p className={styles.contacts__wrapperPara}>Адрес:</p>
            <p> Казахстан, г. Алматы, Маркова 22/37, 4 этаж, офис 6</p>
          </div>
          <div className={styles.contacts__wrapper}>
            <p className={styles.contacts__wrapperPara}>Телефон:</p>
            <p>
              +7 (727) 339 83 23 <br />
              +7 (727) 917 85 00
            </p>
          </div>
          <div className={styles.contacts__wrapper}>
            <p className={styles.contacts__wrapperPara}>Email:</p>
            <p> blsvisalmaty@gmail.com</p>
          </div>
        </div>
        <div className={styles.socialNetworks}>
          <a href="/faq" target="_blank">
            <img src={telega} alt="telega" />
          </a>
          <a href="_blank">
            <img src={whatsapp1} alt="whatsapp" />
          </a>
          <a href="_blank">
            <img src={insta} alt="insta" />
          </a>
        </div>
        <div className={styles.footerWrapper__bottomText}>
          <p>Центр визовой поддержки - BLS Visa Almaty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
