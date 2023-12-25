import Map from "./../../components/Map/index";
import styles from "./styles.module.scss";
import icon_map from "./../../assets/images/icon _map.png";
import icon_clock from "./../../assets/images/icon_clock.svg";
import icon_mail from "./../../assets/images/icon _mail.svg";
import icon_phone from "./../../assets/images/icon _phone.png";
import whatsapp from "./../../assets/images/whatsapp.png";
import telega from "./../../assets/images/telega.png";
import insta from "./../../assets/images/insta.png";

const ContactUs = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__heading}>
        <hr />
        <h1> КОНТАКТЫ </h1>
        <hr />
      </div>
      <div className={styles.contacts__data}>
        <div className={styles.contacts__firstColumn}>
          <div className={styles.address}>
            <img src={icon_map} alt="map" />
            <p>
              Казахстан, г. Алматы, <br /> ул. Шевченко 146
            </p>
          </div>
          <div className={styles.time}>
            <img src={icon_clock} alt="clock" />
            <p>
              Мы работаем в будни с 9:00 до 19:00 <br />
              Сб - Вс выходные
            </p>
          </div>
        </div>
        <div className={styles.contacts__secondColumn}>
          <img src={icon_phone} alt="phone" />
          <div className={styles.phoneWrapper}>
            <p>+7 (727) 3468210</p>
            <p>+7 (700) 3468210</p>
            <p>+7 (700) 3468210</p>
          </div>
        </div>
        <div className={styles.contacts__thirdColumn}>
          <div className={styles.email}>
            <img src={icon_mail} alt="mail" />
            <p>Казахстан, г. Алматы, ул. Шевченко 146</p>
          </div>
          <div className={styles.socials}>
            <a href="">
              <img src={telega} alt="telega" />
            </a>
            <a href="">
              <img src={insta} alt="insta" />{" "}
            </a>
            <a href="">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contacts__mobile}>
        <p className={styles.contacts__mobileText}>БУДЬТЕ ВСЕГДА В СВЯЗИ </p>
        <div className={styles.socials}>
          <a href="">
            <img src={telega} alt="telega" />
          </a>
          <a href="">
            <img src={insta} alt="insta" />{" "}
          </a>
          <a href="">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
        <p className={styles.contacts__mobileText}>
          МОЖЕТЕ НАЙТИ НАС ПО АДРЕСУ
        </p>
        <div className={styles.address}>
          <img src={icon_map} alt="map" />
          <p>Казахстан, г. Алматы, ул. Шевченко 146</p>
        </div>
      </div>
      <div className={styles.companyMap}>
        <Map />
      </div>
    </section>
  );
};

export default ContactUs;
