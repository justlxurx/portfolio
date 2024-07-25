import React, { useState } from "react";
import styles from "./styles.module.scss";
import map from "./../../assets/images/map.png";
import clock from "./../../assets/images/clock.png";
import phone from "./../../assets/images/phone.png";
import insta from "./../../assets/images/insta.png";
import whatsapp from "./../../assets/images/whatsapp.png";
import telega from "./../../assets/images/telega.png";
// import logo from "./../../assets/images/logo.png";
import logo from "../../assets/images/logo.jpeg";
import Burger from "../Burger";
import uncover from "../../assets/images/uncover.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [isActive, setIsActive] = useState(false);

  function toggleClass(state) {
    setIsActive(state);
  }

  const phones = ["+7 (707) 901 24 23", "+7 (775) 076 19 19"];

  return (
    <section className={styles.navbar}>
      <div className={styles.background}>
        <div className={`${styles.companyInfo} container`}>
          <div className={styles.companyInfo__address}>
            <img src={map} alt="map" />
            <p>
              {t("addressValue1")} <br /> {t("addressValue2")}
            </p>
          </div>

          <div className={styles.companyInfo__timeWorking}>
            <img src={clock} alt="clock" />
            <p>
              {t("timeValue1")}
              <br /> {t("timeValue2")}
            </p>
          </div>

          <div className={styles.companyInfo__contact}>
            <div className={styles.phones}>
              <img src={phone} alt="phone" className={styles.phones__img} />
              <div className={styles.phoneWrap}>
                <a
                  href={`tel:+7 (707) 341 06 99`}
                  className={styles.phoneWrap__link}
                >
                  +7 (707) 341 06 99
                </a>{" "}
                <img src={uncover} alt="bottom-icon" width={10} />
                <ul className={styles.phoneList}>
                  {phones.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          className={styles.phoneList__link}
                          href={`tel:${item}`}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <nav className={styles.socials}>
              <a
                href="https://api.whatsapp.com/send?phone=77079012423"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="https://t.me/VIP1396" target="_blank">
                <img src={telega} alt="telega" />
              </a>
              <a
                href="https://www.instagram.com/blsvizakz?igsh=ZzNla2dib3hjeGdl"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="insta" />
              </a>
            </nav>
          </div>

          <div className={styles.lang}>
            <button
              className={styles.lang__ru}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <button
              className={styles.lang__en}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>

          <div
            className={styles.mobileMenu}
            style={{
              boxShadow: isActive
                ? "none"
                : "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className={styles.mobileMenu__logoWrapper}>
              <Link to="/">
                <div className={styles.mobileMenu__logo}>
                  <img src={logo} alt="logo" />
                </div>
              </Link>
              <p className={styles.mobileMenu__heading}>{t("centerVisa")}</p>
            </div>

            <div className={styles.buttons}>
              <div className={styles.langMobile}>
                <button
                  className={styles.langMobile__ru}
                  onClick={() => changeLanguage("ru")}
                >
                  RU
                </button>
                <button
                  className={styles.langMobile__en}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
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
        </div>
      </div>

      {isActive && <Burger />}
    </section>
  );
};

export default Header;
