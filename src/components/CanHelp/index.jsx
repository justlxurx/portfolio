import { React } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import ph from "./../../assets/images/ph.png";
import whatsapp1 from "./../../assets/images/whatsapp1.png";
const FormsToHelp = () => (
  <section className={styles.helpOrder}>
    <div className={styles.helpOrder__text}>
      <img src={ph} alt="call" className={styles.helpOrder__icon} />
      <div className={styles.helpOrder__wrapper}>
        <h1 className={styles.helpOrder__heading}>
          Нужна помощь в оформлении визы?
        </h1>
        <p className={styles.helpOrder__para}>
          Быстро переходите в <span>Whats App</span> чат <br /> и получите
          бесплатную консультацию нашего <br />
          специалиста
        </p>
        <button className={styles.whatsappButton}>
          <img src={whatsapp1} alt="whatsapp" />
          <b>Whats App</b>
        </button>
      </div>
    </div>
  </section>
);

export default FormsToHelp;
