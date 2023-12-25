import { React } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import ph from "./../../assets/images/ph.png";
import { Link } from "react-router-dom";

const Visa = () => (
  <section className={styles.visa}>
    <div className={styles.visa__typesWrapper}>
      <div className={styles.visa__typesWrapperLinks}>
        <Link to="/visa_types">
          <button>ГОСТЕВАЯ ВИЗА В АВСТРАЛИЮ</button>
        </Link>
        <Link>
          <button>ДЕЛОВАЯ ВИЗА В АВСТРАЛИЮ</button>
        </Link>
        <Link>
          <button>ТУРИСТИЧЕСКАЯ ВИЗА В АВСТРАЛИЮ</button>
        </Link>
      </div>
      <div className={styles.visa__countryWrapper}>
        <div className={styles.visa__country}>
          <img src="" alt="country" />
          <h1>АВСТРАЛИЯ</h1>
        </div>
        <p className={styles.textWrapper}>
          Цена от: <br />
          <b>20 000KZT</b> <br />
          Срок оформления: <br />
          <b>от 3-х дней</b>
        </p>
      </div>
    </div>
    <div className={styles.visa__bottomText}>
      <h1>Какая виза в Австралию нужна из РК – виды, особенности, условия</h1>
      <p>
        Виза в Австралию является одной из ключевых составляющих при
        формировании пакета въездных документов для граждан Республики
        Казахстан. Визовый центр, консульство, Посольство - официальные
        организации, которые оформляют легитимные документы для представителей
        РК, которые намерены посетить Австралию. На каких условиях открывается
        виза в Австралию для граждан Казахстана Каждый документ принимается
        после предварительного перевода на английский язык. Бланк анкеты
        заполняется в онлайн режиме. Собранный пакет документов подается в
        электронном виде через сайт. Документы находятся на рассмотрении в
        Посольстве около месяца.
      </p>
    </div>
  </section>
);

export default Visa;
