import styles from "./styles.module.scss";
import FAQItem from "./FAQItem";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

const Responses = () => {
  const { t } = useTranslation();
  const faq = [
    {
      question: `${t("q1")}`,
      answer: `${t("r1")}`,
      fully: true,
    },
    {
      question: `${t("q2")}`,
      answer: `${t("r2")}`,
    },
    {
      question: `${t("q3")}`,
      answer: `${t("r3")}`,
    },
    {
      question: `${t("q4")}`,
      answer: `${t("r4")}`,
    },
    {
      question: `${t("q5")}`,
      answer: `${t("r5")}`,
    },
    {
      question: `${t("q6")}`,
      answer: `${t("r6")}`,
    },
  ];
  return (
    <section className={`${styles.faq} container`}>
      <div className={styles.faq__heading}>
        <hr />
        <h1>{t("faq")}</h1>
        <hr />
      </div>
      <ul className={styles.faq__list}>
        {faq.map((faq) => (
          <li key={nanoid()}>
            <FAQItem {...faq} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Responses;
