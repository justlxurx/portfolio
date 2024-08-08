import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";
import profile from "../../assets/icons/profile.svg";

export const Header = () => {
  // const t = useTranslation();
  const links = [
    {
      title: "Properties",
      links: "#properties",
    },
    {
      title: "FAQ",
      links: "#faq",
    },
    {
      title: "Contact Us",
      links: "#contact-us",
    },
    {
      title: "Dashboard",
      links: "#dashboard",
    },
  ];
  return (
    <header className={`${s.main} container`}>
      <Logo />
      <ul className={s.main__list}>
        {links.map((item, index) => (
          <li key={index}>
            <a href={`${item.links}`} className={s.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={s.main__buttonWrap}>
        <button className={s.main__button}>Connect wallet</button>
        <img src={profile} alt="profile" />
      </div>
    </header>
  );
};
