import logo from "./../../assets/images/logo.png";
import { React } from "react";
import styles from "./styles.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.visa}>
      <div className={styles.visa__heading}>
        <hr />
        <h1> О НАС </h1>
        <hr />
      </div>

      <div className={styles.visa__service}>
        <div></div>
        <div className={styles.visa__serviceText}>
          <h2>Visa Service</h2>
          <p>
            Компания, предоставляющая качественные и быстрые услуги <br />
            по оформлению виз в любую точку мира. Наши <br />
            высококвалифицированные менеджеры в течении 24 часов <br />
            подготовят Ваши документы для подачи в посольство.
          </p>
          <b>
            <p>
              Мы можем с уверенностью сказать, что в 99% мы <br /> получаем
              одобрения по визе.
            </p>
          </b>
          <a href="hh">Подробнее</a>
        </div>

        <img src={logo} alt="logo" className={styles.logo_img} />
      </div>
    </section>
  );
};

export default AboutUs;
