import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import marker from "./../../assets/images/burger-marker.png";
import clock from "./../../assets/images/burger-clock.png";
import phone from "./../../assets/images/burger-phone.png";
import styles from "./styles.module.scss";
// import { headerLinks } from "./links.data";
import { useTranslation } from "react-i18next";

import uncover from "./../../assets/images/uncover.svg";

const BurgerMenu = () => {
  const { t } = useTranslation();
  const headerLinks = [
    {
      title: t("main"),
      path: "/",
    },
    {
      title: t("countries"),
      image: uncover,
      subMenu: [
        { title: t("schengen"), path: "/shengen" },
        { title: t("other"), path: "/others" },
      ],
    },
    {
      title: t("services"),
      image: uncover,
      subMenu: [
        { title: t("service.insurance.title"), path: "/services/insurance" },
        {
          title: t("service.translations.title"),
          path: "/services/translations",
        },
        {
          title: t("service.multipleVisas.title"),
          path: "/services/shengen-visas",
        },
        { title: t("service.apostille.title"), path: "/services/apostille" },
        {
          title: t("service.reservations.title"),
          path: "/services/hotel-flights",
        },
        {
          title: t("service.verification.title"),
          path: "/services/document-verification",
        },
      ],
    },
    {
      title: t("faq"),
      path: "/faq",
    },
    {
      title: t("comments"),
      path: "/feedback",
    },
    {
      title: t("contacts"),
      path: "/contact",
    },
  ];
  const phones = [
    "+7 (707) 901 24 23",
    "+7 (775) 076 19 19",
    "+7 (707) 341 06 99",
  ];
  const SubMenu = ({ items }) => (
    <ul className={styles.burgerSubmenu}>
      {items.map((item) => (
        <li key={nanoid()}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
  return (
    <section className={styles.burger}>
      <div className={styles.burger__infoWrapper}>
        <div className={styles.burger__info}>
          <img src={marker} alt="marker" width={20} />
          <p>
            {t("addressValue1")} <br /> {t("addressValue2")}
          </p>
        </div>
        <div className={styles.burger__info}>
          <img src={phone} alt="phone" width={20} />
          <ul className={styles.burger__list}>
            {phones.map((item, index) => {
              return (
                <li key={index} className={styles.burger__listItem}>
                  <a className={styles.contacts} href={`tel:${item}`}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.burger__info}>
          <img src={clock} alt="clock" width={20} />
          <div>
            <p>
              {t("timeValue1")}
              <br /> {t("timeValue2")}
            </p>
          </div>
        </div>
      </div>

      <ul className={styles.burger__navigationList}>
        {headerLinks.map(({ path, title, image, subMenu }) => (
          <li key={nanoid()} className={styles.burger__navigationListItems}>
            <Link className={styles.links} to={path}>
              {title}
              {image && <img src={image} alt="g" className={styles.uncover} />}
            </Link>
            {subMenu && <SubMenu items={subMenu} />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BurgerMenu;
