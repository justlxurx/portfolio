import styles from "./styles.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ServiceTypes = ({ title, text, img }) => {
  const [activeButton, setActiveButton] = useState(null);

  const service = [
    {
      title: "Страхование",
      path: "/services/insurance",
      service_class: styles.service_types_first,
    },
    {
      title: "Переводы и нотариальное заверениере",
      path: "/services/translations",
      service_class: styles.service_types_second,
    },
    {
      title: "Многократные шенген визы",
      path: "/services/shengen-visas",
      service_class: styles.service_types_third,
    },
    {
      title: "Бронирование отелей и авиабилетов",
      path: "/services/hotel-flights",
      service_class: styles.service_types_fourth,
    },
    {
      title: "Проверка документов",
      path: "/services/document-verification",
      service_class: styles.service_types_fifth,
    },
    {
      title: "Апостилирование диплома",
      path: "/services/apostille",
      service_class: styles.service_types_sixth,
    },
  ];

  return (
    <section className={styles.service}>
      <div className={styles.service_heading}>
        <hr />
        <h1>ЧТО ВХОДИТ В УСЛУГУ</h1>
        <hr />
      </div>
      <div className={styles.service_types}>
        {service.map(({ title, path, service_class }, index) => (
          <div
            className={service_class}
            key={index}
            onClick={() => setActiveButton(index)}
          >
            <div
              className={styles.service_icon}
              style={{
                borderColor: activeButton === index ? "#D9D9D9" : "#EA4F0D",
              }}
            >
              <div className={styles.service_icon_img}></div>
            </div>

            <p>
              <Link to={path}>{title} </Link>
            </p>
          </div>
        ))}
      </div>

      <div className={styles.service_main}>
        <h3>{title}</h3>
        <a href="/">
          <button className={styles.requestButton}>Оставить заявку</button>
        </a>
        <img src={img} alt="service" />
        <div className={styles.service_main_content}>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;
