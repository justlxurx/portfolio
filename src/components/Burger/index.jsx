import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import marker from "./../../assets/images/burger-marker.png";
import clock from "./../../assets/images/burger-clock.png";
import phone from "./../../assets/images/burger-phone.png";
import uncover from "./../../assets/images/uncover.svg";
import styles from "./styles.module.scss";

const BurgerMenu = () => {
  const headerLinks = [
    {
      title: "О НАС",
      path: "/",
    },
    {
      title: "СТРАНЫ",
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
          <img src={marker} alt="marker" />
          <p>Казахстан, г. Алматы, Маркова 22/37, 4 этаж, офис 6</p>
        </div>
        <div className={styles.burger__info}>
          <img src={phone} alt="phone" />
          <div>
            <p>+7 (707) 901 2423</p>
            <p>+7 (707) 901 2423</p>
          </div>
        </div>
        <div className={styles.burger__info}>
          <img src={clock} alt="clock" />
          <div>
            <p>пн-пт 10:00 - 18:00 сб 10.00-13.00 </p>
            <p>вс выходной</p>
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
