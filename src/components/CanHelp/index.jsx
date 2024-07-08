import { React } from "react";
import styles from "./styles.module.scss";
import ph from "./../../assets/images/ph.png";
import whatsapp1 from "./../../assets/images/whatsapp1.png";
import { useTranslation } from "react-i18next";

const FormsToHelp = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.helpOrder}>
      <div className={styles.helpOrder__text}>
        <img src={ph} alt="call" className={styles.helpOrder__icon} />
        <div className={styles.helpOrder__wrapper}>
          <h1 className={styles.helpOrder__heading}>{t("helpVisas")}</h1>
          <p className={styles.helpOrder__para}>{t("toWhatsapp")}</p>

          <a
            href="https://api.whatsapp.com/send?phone=77072289080"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.whatsappButton}>
              <img src={whatsapp1} alt="whatsapp" />
              <b>Whats App</b>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormsToHelp;
