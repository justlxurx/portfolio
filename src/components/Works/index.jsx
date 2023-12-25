import { React } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import img1 from "./../../assets/images/img1.png";
import img2 from "./../../assets/images/img2.png";
import img3 from "./../../assets/images/img3.png";
import alert from "./../../assets/images/alert.svg";

const HowWeWork = () => (
  <section className={styles.headings}>
    <h1> КАК МЫ РАБОТАЕМ </h1>
    <h2>Профессиональная визовая поддержка на каждом этапе</h2>
    <div className={styles.works}>
      <div className={styles.works_section1}>
        <div className={styles.works_section1_img}>
          <img src={img1} alt="img1" />
        </div>
        <div className={styles.description}>
          <b>
            <p>
              Грамотная стратегия <br /> подачи анкеты - <br /> заявления в
              консульство
            </p>
          </b>
          <p>
            В некоторых случаях,чтобы <br /> снизить риск отказа, нужно <br />
            грамотно подать заявление. <br /> Эту задачу центр решает за вас.
          </p>
        </div>
      </div>
      <div className={styles.works_section2}>
        <div className={styles.works_section2_img}>
          <img src={img2} alt="img2" />
        </div>
        <div className={styles.description}>
          <b>
            <p>
              Шаблоны заполнения <br /> анкет и списки документов <br /> для
              каждой визы
            </p>
          </b>
          <p>
            Вашу анкету и документы <br /> проверяет менеджер, чтобы <br />
            исключить ошибки и повысить <br /> шансы получить визу.
          </p>
        </div>
      </div>

      <div className={styles.works_section3}>
        <div className={styles.works_section3_img}>
          <img src={img3} alt="img3" />
        </div>
        <div className={styles.description}>
          <b>
            <p>Полный спектр услуг</p>
          </b>
          <p>
            Все необходимые для визы <br /> услуги вы получаете в одном <br />
            месте.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.warning}>
      <div className={styles.warning__leftWrapper}>
        <img src={alert} alt="alert" />
        <p className={styles.warning_b}>
          <b> Примечание: </b>
        </p>
      </div>
      <p className={styles.warning_p}>
        *В случае отказа в предоставлении визы, консульство/ <br /> посольство
        не возвращает консульский/сервисный сбор!*
      </p>
    </div>
  </section>
);

export default HowWeWork;
