import s from "./Contacts.module.scss";
import { Gmail } from "../../assets/icons/gmail";
import { Telega } from "../../assets/icons/telega";
import { Phone } from "../../assets/icons/phone";
import { Link } from "react-router-dom";

export const Contacts = () => {
  const links = [
    {
      img: <Gmail />,
      name: "E-mail",
      link: "/",
    },
    {
      img: <Telega />,
      name: "Telegram",
      link: "/",
    },
    {
      img: <Phone />,
      name: "+0 000 000 000",
      link: "/",
    },
  ];
  return (
    <div className={`${s.main} container`} id="contacts">
      <h1 className={s.main__title}> Contact us</h1>
      <div className={s.main__content}>
        {links.map((item, index) => (
          <Link key={index} to={item.link}>
            <div className={s.contact}>
              <p className={s.contact__name}>{item.name}</p>
              <div className={s.contact__img}>{item.img}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
