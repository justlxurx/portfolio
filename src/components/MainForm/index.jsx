import { React } from "react";
import styles from "./styles.module.scss";
import phone1 from "./../../assets/images/phone1.svg";
import { useFormik } from "formik";
import { useFormMutation } from "../../service";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import InputMask from "react-input-mask";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

const Main = ({ child }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-zА-Яа-яЁё]+$/, `${t("comment.nameError2")}`)
        .max(15, `${t("comment.nameError3")}`)
        .required(`${t("comment.nameError")}`),
      phone: Yup.string()
        .matches(/^(\d{1}-\d{3}-\d{3}-\d{2}-\d{2})$/, t("phoneError"))
        .required(t("phoneError2")),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await submitForm(values);
        console.log(response);
        if (response.error) {
          console.error("Ошибка в ответе сервера:", response.error);
        } else {
          setIsOpen(true);
          resetForm();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });
  const [submitForm] = useFormMutation();

  return (
    <div className={styles.outer}>
      {isOpen && (
        <Modal title={`${t("success")}`} onClose={() => setIsOpen(false)} />
      )}
      <div className={"container"}>
        {child}
        <section className={styles.main}>
          <div className={styles.main__infoVisa}>
            <h4 className={styles.main__infoVisaHeading}>
              BLS Visa Kazakhstan
            </h4>
            <p className={styles.main__infoVisaText}>{t("info")}</p>
          </div>

          <div className={styles.main__topSection}>
            <div className={styles.main__leftSection}>
              <h1 className={styles.heading}>{t("proposition")}</h1>
              <p className={styles.text}>{t("helpWithReg")}</p>
              <p className={styles.text}> {t("visaManager")}</p>

              <div className={styles.calling}>
                <p className={styles.calling__text}>{t("callUs")}</p>
                <div className={styles.calling__phoneNumbers}>
                  <img src={phone1} alt="phone" />
                  <p>
                    <a
                      className={styles.linkTel}
                      href={`tel: +7 (707) 901 24 23`}
                    >
                      {" "}
                      +7 (707) 901 24 23
                    </a>{" "}
                    <br />
                    <a
                      className={styles.linkTel}
                      href={`tel: +7 (775) 076 19 19 `}
                    >
                      {" "}
                      +7 (775) 076 19 19
                    </a>{" "}
                    <br />
                    <a
                      className={styles.linkTel}
                      href={`tel:  +7 (707) 341 06 99`}
                    >
                      {" "}
                      +7 (707) 341 06 99
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.main__rightSection}>
              <h1 className={styles.heading}>{t("formHeading")}</h1>
              <form onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder={t("yourName")}
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
                  {formik.errors.name}
                </div>
                <InputMask
                  mask={"9-999-999-99-99"}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {() => (
                    <input type="text" name="phone" placeholder={t("number")} />
                  )}
                </InputMask>

                {formik.touched.phone && formik.errors.phone ? (
                  <div className={styles.error}>{formik.errors.phone}</div>
                ) : null}
                <button type={"submit"}>{t("send")}</button>
              </form>
            </div>
          </div>
          <div className={styles.main__bottomSection}>
            <p className={styles.main__bottomSection__text}>
              {t("freeConsult")}
            </p>
            <ul className={styles.main__bottomSection__list}>
              <li>{t("firstListForm")}</li>
              <li>{t("secondListForm")}</li>
              <li>{t("thirdListForm")}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
