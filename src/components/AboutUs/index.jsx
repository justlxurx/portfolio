import logo from "../../assets/images/logo.png";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
// import logo from "../../assets/images/logo.jpeg";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    //  <div className={'container'}>
    <section className={styles.visa}>
      <div className={styles.visa__heading}>
        <hr />
        <h1> {t("aboutUs")} </h1>
        <hr />
      </div>

      <div className={styles.visa__service}>
        <div></div>
        <div className={styles.visa__serviceText}>
          <h2>BLS KAZAKHSTAN VISA</h2>
          <p>{t("visaServiceText")}</p>
          <b>
            <p>{t("visaSerciceText2")}</p>
          </b>
          {/* <a href="hh">{t("details")}</a> */}
        </div>

        {/* <img src={logo} alt="logo" className={styles.visa__serviceLogo} /> */}
      </div>
    </section>
    // </div>
  );
};

export default AboutUs;
