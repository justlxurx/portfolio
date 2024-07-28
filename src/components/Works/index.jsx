import { React } from "react";
import styles from "./styles.module.scss";
import img1 from "./../../assets/images/img1.png";
import img2 from "./../../assets/images/img2.png";
import img3 from "./../../assets/images/img3.png";
import alert from "./../../assets/images/alert.svg";
import { useTranslation } from "react-i18next";

const HowWeWork = () => {
  const { t } = useTranslation();
  return (
    <section className={"container"}>
      <div className={styles.headings}>
        <h1> {t("workHeading")}</h1>
        <h2>{t("workHeading2")}</h2>
      </div>
      <div className={styles.works}>
        <div className={styles.works__section1}>
          <div className={styles.works__section1Img}>
            <img src={img1} alt="img1" />
          </div>
          <b>
            <p>{t("workSection1")}</p>
          </b>
          <p>{t("workSectionText1")}</p>
        </div>
        <div className={styles.works__section2}>
          <div className={styles.works__section2Img}>
            <img src={img2} alt="img2" />
          </div>
          <b>
            <p>{t("workSection2")}</p>
          </b>
          <p>{t("workSectionText2")}</p>
        </div>

        <div className={styles.works__section3}>
          <div className={styles.works__section3Img}>
            <img src={img3} alt="img3" />
          </div>
          <b>
            <p>{t("workSection3")}</p>
          </b>
          <p>{t("workSectionText3")}</p>
        </div>
      </div>
      <div className={styles.warning}>
        <div className={styles.warning__leftWrapper}>
          <img src={alert} alt="alert" />
          <p className={styles.warning__heading}>
            <b> {t("warning")}</b>
          </p>
        </div>
        <p className={styles.warning__text}>{t("warningText")}</p>
      </div>
    </section>
  );
};

export default HowWeWork;
