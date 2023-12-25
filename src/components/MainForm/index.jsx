import { React } from "react";
//import Button from '../ui/Button/Button';
import styles from "./styles.module.scss";
import phone1 from "./../../assets/images/phone1.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const Main = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-zА-Яа-яЁё]+$/, "Имя должно содержать только буквы")
        .max(15, "Имя должно состоит максимум 15 символов")
        .required('Заполните поле "Ваше имя"'),
      phone: Yup.string()
        .matches(/^\d{11}$/, "Неправильный номер телефона")
        .required('Заполните поле "Номер телефона"'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  return (
    <section className={styles.main}>
      <div className={styles.main__infoVisa}>
        <h4 className={styles.main__infoVisaHeading}>BLS Almaty Visa</h4>
        <p className={styles.main__infoVisaText}>
          Компания <b>"BLS Almaty Visa "</b> помогает оформить визу в
          большинство стран мира, мы работаем со всеми типами виз, начиная от
          туристической и рабочей, заканчивая деловой и гостевой. Вы сможете
          получить свою долгожданную визу из любой точки Казахстана, потому что
          в нашем центре теперь можно оформиться и онлайн, не выходя из дома.
        </p>
      </div>

      <div className={styles.main__leftSection}>
        <h1 className={styles.heading}>Выгодное Предложение</h1>
        <p className={styles.text}>
          Помощь в оформлении <br /> шенгенской мультивизы всего <br /> за 1-2
          недели
        </p>
        <p className={styles.text}> Менеджер по оформлению виз</p>

        <div className={styles.calling}>
          <p className={styles.calling__text}>
            Звоните или <br /> отправляйте заявку
          </p>
          <div className={styles.calling__phoneNumbers}>
            <img src={phone1} alt="phone" />
            <p>
              +7 (727) 339 83 23 <br /> +7 (727) 339 83 23
            </p>
          </div>
        </div>
      </div>

      <div className={styles.main__rightSection}>
        <h1 className={styles.heading}>Оставить заявку уже сейчас</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div
            className={styles.error}
            style={{
              color:
                formik.touched.name && formik.errors.name
                  ? "visible"
                  : "hidden",
            }}
          >
            {/* {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""} */}
            {formik.errors.name}
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Номер телефона"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className={styles.error}>{formik.errors.phone}</div>
          ) : null}
          <button>Отправить</button>
        </form>
      </div>

      <div className={styles.main__bottomSection}>
        <p className={styles.main__bottomSection__text}>
          Отправив заявку вы получите бесплатную <br /> консультацию по
          вопросам:
        </p>
        <ul className={styles.main__bottomSection__list}>
          <li>Полный перечень необходимых документов;</li>
          <li>Нюансы по оформлению визы;</li>
          <li>Наши выгодные предложения для Вас.</li>
        </ul>
      </div>
    </section>
  );
};

export default Main;
