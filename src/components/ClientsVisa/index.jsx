import { React } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import visa1 from "./../../assets/images/visa1.jpeg";
import visa2 from "./../../assets/images/visa2.jpeg";
import visa3 from "./../../assets/images/visa3.jpeg";
import visa4 from "./../../assets/images/visa4.jpeg";
import BigSlider from "./BigSlider";

const Visas = () => {
  const visaImages = [
    {
      component: <img src={visa1} alt={"fitness"} fill />,
    },
    {
      component: <img src={visa2} alt={"fitness"} fill />,
    },
    {
      component: <img src={visa3} alt={"fitness"} fill />,
    },
    {
      component: <img src={visa4} alt={"fitness"} fill />,
    },
  ];

  return (
    <section className={styles.clientsVisas}>
      <div className={styles.clientsVisas_heading}>
        <hr />
        <h1>ВИЗЫ НАШИХ КЛИЕНТОВ</h1>
        <hr />
      </div>
      <div className={styles.slider1}>
        <BigSlider items={visaImages} />
      </div>
    </section>
  );
};

export default Visas;
